# alphageometry2

2025/02/05

@see: https://arxiv.org/abs/2502.03544

@see: https://github.com/google-deepmind/alphageometry

We present AlphaGeometry2, a significantly improved version of AlphaGeometry introduced in Trinh et al. (2024), which has now surpassed an average gold medalist in solving Olympiad geometry problems. To achieve this, we first extend the original AlphaGeometry language to tackle harder problems involving movements of objects, and problems containing linear equations of angles, ratios, and distances.(涉及物体移动、角度线性方程、比例和距离的问题) This, together with other additions, has markedly improved the coverage rate of the AlphaGeometry language on International Math Olympiads (IMO) 2000-2024 geometry problems from 66% to 88%. The search process of AlphaGeometry2 has also been greatly improved through the use of Gemini architecture for better language modeling, and a novel knowledge-sharing mechanism that combines multiple search trees.(通过使用 Gemini 架构实现了更好的语言建模，并引入了一种新颖的知识共享机制，将多个搜索树结合起来) Together with further enhancements to the symbolic engine and synthetic data generation,(对符号引擎和合成数据生成进行了进一步的增强) we have significantly boosted the overall solving rate of AlphaGeometry2 to 84% for all geometry problems over the last 25 years, compared to 54% previously. AlphaGeometry2 was also part of the system that achieved silver-medal standard at IMO 2024 https://dpmd.ai/imo-silver. Last but not least, we report progress towards using AlphaGeometry2 as a part of a fully automated system that reliably solves geometry problems directly from natural language input.

AlphaGeometry2 Key Improvements:

• Expanded Domain Language: Covering locus-type theorems, linear equations, and nonconstructive problem statements. (扩展的领域语言：涵盖了轨迹定理、线性方程和非构造性问题陈述)

• Stronger and faster Symbolic Engine: Optimized rule set, added handling of double points, and a faster implementation in C++.(更强大和更快的符号引擎：优化了规则集，增加了对双点的处理，并在 C++中实现了更快的实现)

• Advanced Novel Search Algorithm: Utilizing multiple search trees with knowledge sharing.(高级新颖搜索算法：利用多棵搜索树并采用知识共享机制)

• Enhanced Language Model: Leveraging the Gemini architecture, trained on a larger and more diverse dataset.(增强的语言模型：利用 Gemini 架构，训练于更大且更多样化的数据集)

## beam search

这里要先学 beam search 原理:

生成式任务相比普通的分类、tagging 等 NLP 任务会复杂不少。在生成的时候，模型的输出是一个时间步一个时间步依次获得的，而且前面时间步的结果还会影响后面时间步的结果。也就是说，每一个时间步，模型给出的都是基于历史生成结果的条件概率。为了生成完整的句子，需要一个称为解码的额外动作来融合模型多个时间步的输出，而且使得最终得到的序列的每一步条件概率连乘起来最大

在文本生成任务中，每一个时间步可能的输出种类称为字典大小(vocabulary size，我们用 V 表示)，进行 T 步随机的生成可能获得的结果总共有 V^T 种。拿中文文本生成来说，V 的值大约是 5000-6000，即常用汉字的个数。在如此大的基数下，遍历整个生成空间是不现实的

bean search 思路也很简单，就是稍微放宽一些考察的范围。在每一个时间步，不再只保留当前分数最高的 1 个输出，而是保留 num_beams 个。当 num_beams=1 时集束搜索就退化成了贪心搜索

Beam Search 的原理虽然简单，但实际实现的时候却有很多细节要考虑。下面要解析这个实现出自于 NLP 界著名 Python 包 Transformers[1]，我为了说明方便做了一些改动。

一个正确且高效的算法需要处理的问题大概有两个：

充分利用硬件，可以处理批量数据，且尽量使用并行计算少用循环
处理好长短不同的生成结果

@see: https://www.cnblogs.com/nickchen121/p/15499576.html

Beam Search 是一种启发式搜索算法，主要用于在序列生成任务中寻找最优或近似最优的输出序列。它是对贪心搜索（Greedy Search）的改进，通过在每一步保持 k 个最佳候选项来平衡搜索空间和计算效率

为什么需要 Beam Search？

1. 解决贪心搜索的局限性：
2. 贪心搜索每步只选择概率最高的一个词
3. 容易陷入局部最优解
4. 可能错过全局最优解
5. 计算效率考虑：
6. 穷举所有可能（暴力搜索）计算量过大
7. Beam Search 提供了一个折中方案

@see: https://mdnice.com/writing/3532584cdd404e5893495914b1b2a8a6

alphageometry2 的 bean_search.py:

1. 常量定义:

-   `NEG_INF`: 用于屏蔽的“有效负无穷大”常量，值为-1e7。
-   `BEAM_SEARCH_DEFAULT_ALPHA`: Beam Search 的默认缩放参数，用于计算长度惩罚。
-   `MAX_DECODE_LEN`: 最大解码长度，这里是 32。
-   `BREVITY_LEN_BIAS_NUMERATOR` 和 `BREVITY_LEN_BIAS_DENOMINATOR`: 计算长度惩罚时的参数，用于惩罚短序列。

2. Brevity Penalty 函数:

-   该函数用于计算长度惩罚，使 Beam Search 更倾向于生成较长的序列。输入为缩放参数`alpha`和序列长度`length`，输出为一个 JAX 标量，代表长度惩罚分数。
-   计算公式为：$\left(\frac{BREVITY\_LEN\_BIAS\_NUMERATOR + $length$}{BREVITY_LEN_BIAS_DENOMINATOR}\right)^\alpha$

```python
def brevity_penalty(alpha: float, length: int):
  """Brevity penalty function for beam search penalizing short sequences.

  Args:
    alpha: float: brevity-penalty scaling parameter.
    length: int: length of considered sequence.

  Returns:
    Brevity penalty score as jax scalar.
  """
  return jnp.power(
      ((BREVITY_LEN_BIAS_NUMERATOR + length) / BREVITY_LEN_BIAS_DENOMINATOR),
      alpha,
  )
```

3. Beam Search 工具函数:

-   add_beam_dim: 向非标量数组添加一个新的束维度，并根据指定的 beam_size 进行复制

    ```py
    def add_beam_dim(x: jnp.ndarray, beam_size: int) -> jnp.ndarray:
    """Creates new beam dimension in non-scalar array and tiles into it."""
    if x.ndim == 0:  # ignore scalars (e.g. cache index)
        return x
    x = jnp.expand_dims(x, axis=1)
    tile_dims = [1] * x.ndim
    tile_dims[1] = beam_size
    return jnp.tile(x, tile_dims)
    ```

-   add_beam_dim_cache: 向注意力缓存的 keys 和 vals 添加束维度并进行复制。

    ```py
    def add_beam_dim_cache(
        cache: tuple[dict[str, jnp.ndarray], ...], beam_size: int
    ) -> tuple[dict[str, jnp.ndarray], ...]:
    """Creates new beam dimension in non-scalar array and tiles into it."""
    new_cache = []

    for layer in cache:
        new_layer = {}
        for key, x in layer.items():
        if key in ['keys', 'vals']:
            x = add_beam_dim(x, beam_size)
        new_layer[key] = x
        new_cache.append(new_layer)

    return tuple(new_cache)

    ```

-   flatten_beam_dim: 将非标量数组的前两个维度展平

    ```py
    def flatten_beam_dim(x):
    """Flattens the first two dimensions of a non-scalar array."""
    if x.ndim < 2:  # ignore scalars (e.g. cache index)
        return x
    return x.reshape((x.shape[0] * x.shape[1],) + x.shape[2:])

    ```

-   unflatten_beam_dim: 将展平的前两个维度还原为束维度

    ```py
    def unflatten_beam_dim(x, batch_size, beam_size):
    """Unflattens the first, flat batch*beam dimension of a non-scalar array."""
    if x.ndim == 0:  # ignore scalars (e.g. cache index)
        return x
    assert batch_size * beam_size == x.shape[0]
    return x.reshape((batch_size, beam_size) + x.shape[1:])

    ```

-   flat_batch_beam_expand: 根据 beam_size 增加每个批次项的束维度

    ```py
    def flat_batch_beam_expand(x, beam_size):
    """Expands the each batch item by beam_size in batch_dimension."""
    return flatten_beam_dim(add_beam_dim(x, beam_size))
    ```

-   gather_beams: 根据指定的束索引收集束切片，并形成新的束数组

    ```py
    def gather_beams(nested, beam_indices, batch_size, new_beam_size):
        """Gathers the beam slices indexed by beam_indices into new beam array.

        Args:
            nested: pytree of arrays or scalars (the latter ignored).
            beam_indices: array of beam_indices
            batch_size: int: size of batch.
            new_beam_size: int: size of _new_ beam dimension.

        Returns:
            New pytree with new beam arrays.
            [batch_size, old_beam_size, ...] --> [batch_size, new_beam_size, ...]
        """
        batch_indices = jnp.reshape(
            jnp.arange(batch_size * new_beam_size) // new_beam_size,
            (batch_size, new_beam_size),
        )

    def gather_fn(x):
        if x.ndim == 0:  # ignore scalars (e.g. cache index)
        return x
        else:
        return x[batch_indices, beam_indices]

    return jax.tree_util.tree_map(gather_fn, nested)

    ```

-   gather_topk_beams: 根据分数或对数概率数组收集前 k 个束切片，并形成新的束数组

    ```py
    def gather_topk_beams(nested, score_or_log_prob, batch_size, new_beam_size):
    """Gathers the top-k beam slices given by score_or_log_prob array.

    Args:
        nested: pytree of arrays or scalars (the latter ignored).
        score_or_log_prob: [batch_size, old_beam_size] array of values to sort by
        for top-k selection of beam slices.
        batch_size: int: size of batch.
        new_beam_size: int: size of _new_ top-k selected beam dimension

    Returns:
        New pytree with new beam arrays containing top k new_beam_size slices.
        [batch_size, old_beam_size, ...] --> [batch_size, new_beam_size, ...]
    """
    _, topk_indices = lax.top_k(score_or_log_prob, k=new_beam_size)
    topk_indices = jnp.flip(topk_indices, axis=1)
    return gather_beams(nested, topk_indices, batch_size, new_beam_size)

    ```

-   apply_on_cache: 只对缓存中的特定键（keys、values、current_index、relative_position_bias）应用指定的函数

    ```py
    def apply_on_cache(fn, cache, *args, **kwargs):
    """Apply fn(val) only when key is 'keys' or 'val'."""
    new_cache = []
    for layer in cache:
        new_layer = {}
        for key, val in layer.items():
        if key in ['keys', 'values', 'current_index', 'relative_position_bias']:
            val = fn(val, *args, **kwargs)
        new_layer[key] = val
        new_cache.append(new_layer)
    return tuple(new_cache)

    ```

总结: 它首先初始化解码状态，然后在一个循环中不断扩展候选序列，选择出概率最高的序列继续扩展。同时，它还考虑了长度惩罚，以避免生成过短的序列。整个过程利用了 JAX 库的高效计算能力

### beam_search-py

```py
# Copyright 2023 DeepMind Technologies Limited
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================

"""Fast decoding routines for inference from a trained model.

Modified https://github.com/google/flax/blob/main/examples/wmt/decode.py
to acommodate

(a) continued decoding from a previous beam cache.
(b) init with with a single beam and then expand into beam_size beams.
"""

from typing import Any

import flax
import jax
from jax import lax
import jax.numpy as jnp
import numpy as np


# Constants
# "Effective negative infinity" constant for masking in beam search.
NEG_INF = np.array(-1.0e7)

# Beam search parameters
BEAM_SEARCH_DEFAULT_ALPHA = 0.6
MAX_DECODE_LEN = 32

# Brevity penalty parameters
BREVITY_LEN_BIAS_NUMERATOR = 5.0
BREVITY_LEN_BIAS_DENOMINATOR = 6.0


def brevity_penalty(alpha: float, length: int):
  """Brevity penalty function for beam search penalizing short sequences.

  Args:
    alpha: float: brevity-penalty scaling parameter.
    length: int: length of considered sequence.

  Returns:
    Brevity penalty score as jax scalar.
  """
  return jnp.power(
      ((BREVITY_LEN_BIAS_NUMERATOR + length) / BREVITY_LEN_BIAS_DENOMINATOR),
      alpha,
  )


# Beam handling utility functions:


def add_beam_dim(x: jnp.ndarray, beam_size: int) -> jnp.ndarray:
  """Creates new beam dimension in non-scalar array and tiles into it."""
  if x.ndim == 0:  # ignore scalars (e.g. cache index)
    return x
  x = jnp.expand_dims(x, axis=1)
  tile_dims = [1] * x.ndim
  tile_dims[1] = beam_size
  return jnp.tile(x, tile_dims)


def add_beam_dim_cache(
    cache: tuple[dict[str, jnp.ndarray], ...], beam_size: int
) -> tuple[dict[str, jnp.ndarray], ...]:
  """Creates new beam dimension in non-scalar array and tiles into it."""
  new_cache = []

  for layer in cache:
    new_layer = {}
    for key, x in layer.items():
      if key in ['keys', 'vals']:
        x = add_beam_dim(x, beam_size)
      new_layer[key] = x
    new_cache.append(new_layer)

  return tuple(new_cache)


def flatten_beam_dim(x):
  """Flattens the first two dimensions of a non-scalar array."""
  if x.ndim < 2:  # ignore scalars (e.g. cache index)
    return x
  return x.reshape((x.shape[0] * x.shape[1],) + x.shape[2:])


def unflatten_beam_dim(x, batch_size, beam_size):
  """Unflattens the first, flat batch*beam dimension of a non-scalar array."""
  if x.ndim == 0:  # ignore scalars (e.g. cache index)
    return x
  assert batch_size * beam_size == x.shape[0]
  return x.reshape((batch_size, beam_size) + x.shape[1:])


def flat_batch_beam_expand(x, beam_size):
  """Expands the each batch item by beam_size in batch_dimension."""
  return flatten_beam_dim(add_beam_dim(x, beam_size))


def gather_beams(nested, beam_indices, batch_size, new_beam_size):
  """Gathers the beam slices indexed by beam_indices into new beam array.

  Args:
    nested: pytree of arrays or scalars (the latter ignored).
    beam_indices: array of beam_indices
    batch_size: int: size of batch.
    new_beam_size: int: size of _new_ beam dimension.

  Returns:
    New pytree with new beam arrays.
    [batch_size, old_beam_size, ...] --> [batch_size, new_beam_size, ...]
  """
  batch_indices = jnp.reshape(
      jnp.arange(batch_size * new_beam_size) // new_beam_size,
      (batch_size, new_beam_size),
  )

  def gather_fn(x):
    if x.ndim == 0:  # ignore scalars (e.g. cache index)
      return x
    else:
      return x[batch_indices, beam_indices]

  return jax.tree_util.tree_map(gather_fn, nested)


def gather_topk_beams(nested, score_or_log_prob, batch_size, new_beam_size):
  """Gathers the top-k beam slices given by score_or_log_prob array.

  Args:
    nested: pytree of arrays or scalars (the latter ignored).
    score_or_log_prob: [batch_size, old_beam_size] array of values to sort by
      for top-k selection of beam slices.
    batch_size: int: size of batch.
    new_beam_size: int: size of _new_ top-k selected beam dimension

  Returns:
    New pytree with new beam arrays containing top k new_beam_size slices.
    [batch_size, old_beam_size, ...] --> [batch_size, new_beam_size, ...]
  """
  _, topk_indices = lax.top_k(score_or_log_prob, k=new_beam_size)
  topk_indices = jnp.flip(topk_indices, axis=1)
  return gather_beams(nested, topk_indices, batch_size, new_beam_size)


def apply_on_cache(fn, cache, *args, **kwargs):
  """Apply fn(val) only when key is 'keys' or 'val'."""
  new_cache = []
  for layer in cache:
    new_layer = {}
    for key, val in layer.items():
      if key in ['keys', 'values', 'current_index', 'relative_position_bias']:
        val = fn(val, *args, **kwargs)
      new_layer[key] = val
    new_cache.append(new_layer)
  return tuple(new_cache)


# Beam search state:


@flax.struct.dataclass
class BeamState:
  """Holds beam search state data."""

  # The position of the decoding loop in the length dimension.
  cur_index: jax.Array  # scalar int32: current decoded length index
  # The active sequence log probabilities and finished sequence scores.
  live_logprobs: jax.Array  # float32: [batch_size, beam_size]
  finished_scores: jax.Array  # float32: [batch_size, beam_size]
  # The current active-beam-searching and finished sequences.
  live_seqs: jax.Array  # int32: [batch_size, beam_size, max_decode_len]
  finished_seqs: jax.Array  # int32: [batch_size, beam_size,
  #                                         max_decode_len]
  # Records which of the 'finished_seqs' is occupied and not a filler slot.
  finished_flags: jax.Array  # bool: [batch_size, beam_size]
  # The current state of the autoregressive decoding caches.
  cache: Any  # Any pytree of arrays, e.g. flax attention Cache object


def beam_init(seed_token, batch_size, beam_size, max_decode_len, cache):
  """Initializes the beam search state data structure."""
  cur_index0 = jnp.array(0)
  live_logprobs0 = jnp.tile(
      jnp.array([0.0] + [NEG_INF] * (beam_size - 1)), [batch_size, 1]
  )
  finished_scores0 = jnp.ones((batch_size, beam_size)) * NEG_INF

  live_seqs0 = jnp.concatenate(
      [
          jnp.reshape(seed_token, (batch_size, beam_size, 1)),
          jnp.zeros((batch_size, beam_size, max_decode_len - 1), jnp.int32),
      ],
      axis=-1,
  )  # (batch, beam, max_decode_len)

  finished_seqs0 = jnp.zeros((batch_size, beam_size, max_decode_len), jnp.int32)
  finished_flags0 = jnp.zeros((batch_size, beam_size), jnp.bool_)
  beam_cache0 = apply_on_cache(lambda x: jnp.expand_dims(x, axis=0), cache)
  return BeamState(
      cur_index=cur_index0,
      live_logprobs=live_logprobs0,
      finished_scores=finished_scores0,
      live_seqs=live_seqs0,
      finished_seqs=finished_seqs0,
      finished_flags=finished_flags0,
      cache=beam_cache0,
  )


# Beam search routine:


def beam_search_flat(
    seed_token,
    cache,
    tokens_to_logits,
    alpha=BEAM_SEARCH_DEFAULT_ALPHA,
    eos=None,
    max_decode_len=MAX_DECODE_LEN,
    mask=None,
):
  """Beam search for LM.

  inputs and cache is already flat! i.e. first dimention == batch*beam.

  Args:
    seed_token: array: [beam_size, 1] int32 sequence of tokens.
    cache: flax attention cache.
    tokens_to_logits: fast autoregressive decoder function taking single token
      slices and cache and returning next-token logits and updated cache.
    alpha: float: scaling factor for brevity penalty.
    eos: array: [vocab] 1 for end-of-sentence tokens, 0 for not.
    max_decode_len: int: maximum length of decoded translations.
    mask: array: [vocab] binary mask for vocab. 1 to keep the prob, 0 to set the
      prob := 0.

  Returns:
     Tuple of:
       [beam_size, max_decode_len] top-scoring sequences
       [beam_size] beam-search scores.
  """
  # We liberally annotate shape information for clarity below.
  batch_size, beam_size = 1, seed_token.shape[0]
  mask = mask.reshape((1, 1, -1))
  eos = eos.reshape((1, 1, -1))
  mask_bias = (1 - mask) * NEG_INF

  # initialize beam search state
  beam_search_init_state = beam_init(
      seed_token, batch_size, beam_size, max_decode_len, cache
  )

  def beam_search_loop_cond_fn(state):
    """Beam search loop termination condition."""
    # Have we reached max decoding length?
    not_at_end = state.cur_index < max_decode_len - 1

    # Is no further progress in the beam search possible?
    # Get the best possible scores from alive sequences.
    min_brevity_penalty = brevity_penalty(alpha, max_decode_len)
    best_live_scores = state.live_logprobs[:, -1:] / min_brevity_penalty
    # Get the worst scores from finished sequences.
    worst_finished_scores = jnp.min(
        state.finished_scores, axis=1, keepdims=True
    )
    # Mask out scores from slots without any actual finished sequences.
    worst_finished_scores = jnp.where(
        state.finished_flags, worst_finished_scores, NEG_INF
    )
    # If no best possible live score is better than current worst finished
    # scores, the search cannot improve the finished set further.
    search_terminated = jnp.all(worst_finished_scores > best_live_scores)

    # If we're not at the max decode length, and the search hasn't terminated,
    # continue looping.
    return not_at_end & (~search_terminated)

  def beam_search_loop_body_fn(state):
    """Beam search loop state update function."""
    # Collect the current position slice along length to feed the fast
    # autoregressive decoder model.  Flatten the beam dimension into batch
    # dimension for feeding into the model.
    # --> [batch * beam, 1]
    flat_ids = flatten_beam_dim(
        lax.dynamic_slice(
            state.live_seqs, (0, 0, state.cur_index), (batch_size, beam_size, 1)
        )
    )
    # Flatten beam dimension into batch to be compatible with model.
    # {[batch, beam, ...], ...} --> {[batch * beam, ...], ...}
    flat_cache = apply_on_cache(flatten_beam_dim, state.cache)

    # Call fast-decoder model on current tokens to get next-position logits.
    # --> [batch * beam, vocab]
    flat_logits, new_flat_cache = tokens_to_logits(flat_ids, flat_cache)

    # unflatten beam dimension
    # [batch * beam, vocab] --> [batch, beam, vocab]
    logits = unflatten_beam_dim(flat_logits, batch_size, beam_size)

    # Unflatten beam dimension in attention cache arrays
    # {[batch * beam, ...], ...} --> {[batch, beam, ...], ...}
    new_cache = apply_on_cache(
        unflatten_beam_dim, new_flat_cache, batch_size, beam_size
    )

    # Gather log probabilities from logits
    candidate_log_probs = jax.nn.log_softmax(logits)
    # Add new logprobs to existing prefix logprobs.
    # --> [batch, beam, vocab]
    log_probs = candidate_log_probs + jnp.expand_dims(
        state.live_logprobs, axis=2
    )

    # We'll need the vocab size, gather it from the log probability dimension.
    vocab_size = log_probs.shape[2]

    # mask away some tokens.
    log_probs += mask_bias  # [batch,beam,vocab]+[1,1,vocab]

    # Each item in batch has beam_size * vocab_size candidate sequences.
    # For each item, get the top 2*k candidates with the highest log-
    # probabilities. We gather the top 2*K beams here so that even if the best
    # K sequences reach EOS simultaneously, we have another K sequences
    # remaining to continue the live beam search.
    beams_to_keep = 2 * beam_size
    # Flatten beam and vocab dimensions.
    flat_log_probs = log_probs.reshape((batch_size, beam_size * vocab_size))
    # Gather the top 2*K scores from _all_ beams.
    # --> [batch, 2*beams], [batch, 2*beams]
    topk_log_probs, topk_indices = lax.top_k(flat_log_probs, k=beams_to_keep)
    # Recover the beam index by floor division.
    topk_beam_indices = topk_indices // vocab_size
    # Gather 2*k top beams.
    # --> [batch, 2*beams, length]
    topk_seq = gather_beams(
        state.live_seqs, topk_beam_indices, batch_size, beams_to_keep
    )

    # Append the most probable 2*K token IDs to the top 2*K sequences
    # Recover token id by modulo division and expand Id array for broadcasting.
    # --> [batch, 2*beams, 1]
    topk_ids = jnp.expand_dims(topk_indices % vocab_size, axis=2)
    # Update sequences for the 2*K top-k new sequences.
    # --> [batch, 2*beams, length]
    topk_seq = lax.dynamic_update_slice(
        topk_seq, topk_ids, (0, 0, state.cur_index + 1)
    )

    # Update LIVE (in-progress) sequences:
    # Did any of these sequences reach an end marker?
    # --> [batch, 2*beams]
    last_token = topk_seq[:, :, state.cur_index + 1]
    last_token = jax.nn.one_hot(last_token, vocab_size, dtype=jnp.bfloat16)

    # any([batch, 2b, vocab] * [1, 1, vocab], axis=-1) == [batch, 2b]
    newly_finished = jnp.any(last_token * eos, axis=-1)

    # To prevent these newly finished sequences from being added to the LIVE
    # set of active beam search sequences, set their log probs to a very large
    # negative value.
    new_log_probs = topk_log_probs + newly_finished * NEG_INF
    # Determine the top k beam indices (from top 2*k beams) from log probs.
    # --> [batch, beams]
    _, new_topk_indices = lax.top_k(new_log_probs, k=beam_size)
    new_topk_indices = jnp.flip(new_topk_indices, axis=1)
    # Gather the top k beams (from top 2*k beams).
    # --> [batch, beams, length], [batch, beams]
    top_alive_seq, top_alive_log_probs = gather_beams(
        [topk_seq, new_log_probs], new_topk_indices, batch_size, beam_size
    )

    # Determine the top k beam indices from the original set of all beams.
    # --> [batch, beams]
    top_alive_indices = gather_beams(
        topk_beam_indices, new_topk_indices, batch_size, beam_size
    )
    # With these, gather the top k beam-associated caches.
    # --> {[batch, beams, ...], ...}
    top_alive_cache = apply_on_cache(
        gather_beams, new_cache, top_alive_indices, batch_size, beam_size
    )

    # Update FINISHED (reached end of sentence) sequences:
    # Calculate new seq scores from log probabilities.
    new_scores = topk_log_probs / brevity_penalty(alpha, state.cur_index + 1)
    # Mask out the still unfinished sequences by adding large negative value.
    # --> [batch, 2*beams]
    new_scores += (~newly_finished) * NEG_INF

    # Combine sequences, scores, and flags along the beam dimension and compare
    # new finished sequence scores to existing finished scores and select the
    # best from the new set of beams.
    finished_seqs = jnp.concatenate(  # --> [batch, 3*beams, length]
        [state.finished_seqs, topk_seq], axis=1
    )
    finished_scores = jnp.concatenate(  # --> [batch, 3*beams]
        [state.finished_scores, new_scores], axis=1
    )
    finished_flags = jnp.concatenate(  # --> [batch, 3*beams]
        [state.finished_flags, newly_finished], axis=1
    )
    # --> [batch, beams, length], [batch, beams], [batch, beams]
    top_finished_seq, top_finished_scores, top_finished_flags = (
        gather_topk_beams(
            [finished_seqs, finished_scores, finished_flags],
            finished_scores,
            batch_size,
            beam_size,
        )
    )

    return BeamState(
        cur_index=state.cur_index + 1,
        live_logprobs=top_alive_log_probs,
        finished_scores=top_finished_scores,
        live_seqs=top_alive_seq,
        finished_seqs=top_finished_seq,
        finished_flags=top_finished_flags,
        cache=top_alive_cache,
    )

  # Run while loop and get final beam search state.
  final_state = lax.while_loop(
      beam_search_loop_cond_fn, beam_search_loop_body_fn, beam_search_init_state
  )

  # Account for the edge-case where there are no finished sequences for a
  # particular batch item. If so, return live sequences for that batch item.
  # --> [batch]
  none_finished = jnp.any(final_state.finished_flags, axis=1)
  # --> [batch, beams, length]
  finished_seqs = jnp.where(
      none_finished[:, None, None],
      final_state.finished_seqs,
      final_state.live_seqs,
  )
  # --> [batch, beams]
  finished_scores = jnp.where(
      none_finished[:, None],
      final_state.finished_scores,
      final_state.live_logprobs,
  )

  finished_seqs = jnp.reshape(finished_seqs, (beam_size, max_decode_len))
  finished_scores = jnp.reshape(finished_scores, (beam_size,))

  final_cache = apply_on_cache(flatten_beam_dim, final_state.cache)
  return finished_seqs, finished_scores, final_cache

```

##

More general domain language(论文 3-4 页)

AG1:

|          Name           |                                              Meaning                                               |
| :---------------------: | :------------------------------------------------------------------------------------------------: |
|      cong a b c d       |                          𝐴𝐵 = 𝐶𝐷 (Segment 𝐴𝐵 is congruent to segment 𝐶𝐷).                          |
|      perp a b c d       |                           𝐴𝐵 ⊥ 𝐶𝐷 (Line 𝐴𝐵 is perpendicular to line 𝐶𝐷).                           |
|      para a b c d       |                             𝐴𝐵 ∥ 𝐶𝐷 (Line 𝐴𝐵 is parallel to line 𝐶𝐷).                              |
|       coll a b c        |             𝐴, 𝐵, 𝐶 are collinear (Points 𝐴, 𝐵, and 𝐶 lie on the same straight line).              |
|     cyclic a b c d      |          𝐴, 𝐵, 𝐶, 𝐷 are concyclic points (Points 𝐴, 𝐵, 𝐶, and 𝐷 lie on the same circle).           |
| eqangle a b c d e f g h | ∠(𝐴𝐵, 𝐶𝐷) = ∠(𝐸𝐹, 𝐺𝐻) (Directed angle between 𝐴𝐵 and 𝐶𝐷 is the same as the one between 𝐸𝐹 and 𝐺𝐻). |
| eqratio a b c d e f g h |                    𝐴𝐵/𝐶𝐷 = 𝐸𝐹/𝐺𝐻 (The ratio 𝐴𝐵/𝐶𝐷 is equal to the ratio 𝐸𝐹/𝐺𝐻).                    |
|    aconst a b c d x     |             ∠(𝐴𝐵, 𝐶𝐷) = 𝑥 (Angle between 𝐴𝐵 and 𝐶𝐷 is equal to 𝑥, where 𝑥 ∈ [0, 180)).             |
|    rconst a b c d y     |               𝐴𝐵 : 𝐶𝐷 = 𝑦 (The ratio 𝐴𝐵 : 𝐶𝐷 is equal to 𝑦, where 𝑦 is a constant).                |

AG2:

1. acompute a b c d means “Find the angle between 𝐴𝐵 and 𝐶𝐷”.
2. rcompute a b c d means “Find the ratio 𝐴𝐵/𝐶𝐷”.

| Case | Name                        | Subcase             | Syntax for question             |
| :--: | :-------------------------- | :------------------ | :------------------------------ |
|  1   | circle through fixed points | circumcircle a b c  | `? cyclic a b c * : X`          |
|  2   |                             | center a radius b c | `? cong b c a * : X`            |
|  3   | line through fixed points   | line a b            | `? coll a b * : X`              |
|  4   |                             | bline of a b        | `? cong a * b * : X`            |
|  5   |                             | pline of a b c      | `? para b c a * : X`            |
|  6   |                             | tline of a b c      | `? perp b c a * : X`            |
|  7   | point on fixed line         |                     | `? coll a * * : X`              |
|  8   | point on fixed circle       |                     | `? cyclic a * * * : X`          |
|  9   | fixed distance              |                     | `? cong a b * * : X`            |
|  10  | fixed direction             |                     | `? para a b * * : X`            |
|  11  | fixed angle                 |                     | `? eqangle a b a c * * * * : X` |

1. sameclock a b c d e f means the direction 𝐴 → 𝐵 → 𝐶 has the same clockwise direction to
   𝐷 → 𝐸 → 𝐹.
2. noverlap a b means 𝐴 and 𝐵 are distinct points.
3. lessthan a b c d means 𝐴𝐵 < 𝐶𝐷, which is a statement used in the SSA triangle congruence
   theorem.

Notice that, when describing a problem, AG1 uses at most 2 predicates to define a point, i.e. each point is defined as the intersection between at most two objects (line or circle).(AG1 使用最多两个谓词来定义一个点，即每个点最多被定义为两条对象（线或圆）的交点) This limits AG1 to only constructive problems - problems where all points can be straightforwardly constructed by following their definition order and taking the intersection of two well-defined objects.(AG1 限制在仅能解决构造性问题上——即所有点可以通过按照定义顺序并取两条明确定义的对象的交点来直接构造的问题) In AG2, we relax this constraint to cover more problems where points can be defined by at least three predicates, making the diagram construction non-trivial.(我们放宽了这一限制，以覆盖更多点可以由至少三个谓词定义的问题, 从而使图表构造变得非平凡) Our approach for automating this process is discussed in the next section. All changes described in this section improve the AG domain language coverage from 66 to 88% on all 2000-2024 IMO geometry problems. The remaining 12% contain 3D geometry, inequalities, non-linear equations, and countably many points(剩余的 12% 包含三维几何、不等式、非线性方程和可数多个点的问题) (i.e. problems that have 𝑛 points where 𝑛 is an arbitrary positive integer). All problems (covered and not covered) by AG1 and AG2 can be found on Figure 8. Not covered are referred as "Not attempted".

---

Automated problem formalization and diagram generation. (自动化问题形式化和图表生成)

Automated formalization.(自动化形式化) A major weakness of AlphaGeometry, and other similar neuro-symbolic systems, is the need to manually transform input problems from natural language into a domain specific language.(需要手动将自然语言输入的问题转换为特定领域的语言) For example, a simple geometry problem in natural language, “Given a triangle 𝐴𝐵𝐶 with two equal sides 𝐴𝐵 = 𝐴𝐶, prove that angles 𝐵 and 𝐶 are equal”,(给定一个三角形 𝐴𝐵𝐶，其中两边相等 𝐴𝐵 = 𝐴𝐶，证明角 𝐵 和角 𝐶 相等) becomes triangle a b c; a b = a c ? eqangle b a b c c b c a in the AlphaGeometry domain language.

Automating this process, called formalization, is an active area of research (see for example, Jiang et al. (2023); Poiroux et al. (2024); Szegedy (2020); Wu et al. (2022)). It is a significantly more complicated problem compared to a translation between human languages.(这比在人类语言之间进行翻译要复杂得多) While translation aims to preserve meaning,(虽然翻译旨在保留意义) formalization frequently requires re-formulating the original problem into an alternative form,(但形式化通常需要将原始问题重新表述为另一种形式) and sometimes disambiguating the nuances in the original problem statement.(并且有时还需要澄清原始问题陈述中的细微差别) Automated formalization (auto-formalization), therefore, demands significant background knowledge and problem-solving skills on its own.(自动化形式化（auto-formalization）本身就需要大量的背景知识和问题解决技巧) Given that recently foundation models started demonstrating such capabilities, we use one such model, Gemini Team Gemini (2024), to automate the problem formalization for AlphaGeometry. We start by manually translating several dozens of geometry problems into the AG language. Then we use these examples to write a few-shot prompt asking Gemini to translate a given geometry problem from natural language into the AG language. We query Gemini five times with this prompt followed by another Gemini call asking to combine these results into one final answer.(要求 Gemini 将给定的几何问题从自然语言翻译成 AG 语言。我们用这个提示向 Gemini 查询五次，随后再进行一次 Gemini 调用以将这些结果合并为一个最终答案) With this approach we are able to formalize 30 out of 39 formalizable IMO 2000-2024 geometry problems. For easier geometry problems, it is very consistent and makes almost no mistakes.

也就是还是要用 Gemini

Automated diagram generation. Another manual part of our pipeline was diagram generation. In AG1, each point is defined by at most two basic predicates recalled in Table 1, the problem is therefore defined constructively and diagrams can be generated automatically.(每个点最多由表 1 中列出的两个基本谓词定义，因此问题可以构造性地定义，并且可以自动生成图表) In AG2, we allow one or multiple points being defined simultaneously by an arbitrary number of predicates, allowing us to also cover non-constructive problems.(我们允许一个或多个点同时被任意数量的谓词定义，从而使我们能够涵盖非构造性问题) Consider a non-constructive problem statement, “Let 𝐴𝐵𝐶 be a triangle with incenter 𝐼, such that 𝐼𝐴 = 2𝐼𝐵 ...”,(设 𝐴𝐵𝐶 是一个内心为 𝐼 的三角形，使得 𝐼𝐴 = 2𝐼𝐵 ...) here point 𝐼 is not only defined as an incenter, i.e. the intersection of two internal bisectors, but also defined by a third predicate 𝐼𝐴 = 2𝐼𝐵 and there is no general strategy to construct such four points.(这里点 𝐼 不仅被定义为内心，即两个内角平分线的交点，还被第三个谓词 𝐼𝐴 = 2𝐼𝐵 定义，而没有构造这四个点的一般策略) Since AG2 covers non-constructive problems, diagram construction becomes a non-trivial part of the pipeline and generally requires human intervention.(由于 AG2 涵盖非构造性问题，图表生成成为流程中的一个非平凡部分，并且通常需要人工干预) Similar to Krueger et al. (2021), we propose the following algorithm to automatically generate diagrams given non-constructive problem specifications:

Let ¯𝑥 ∈ ℝ2𝑛 be a vector representing all coordinates of all points. We encode every constraint 𝑐 in the diagram, including the goal, as 𝑓𝑐 (¯𝑥) = 0 with a nonlinear function 𝑓𝑐. We numerically search for a suitable ¯𝑥 in two steps. First, we run the ADAM optimization on the mean-squared error loss Σ𝑐∈𝐶 𝑓𝑐 (¯𝑥) where 𝐶 is the set of all the constraints, together with a non-degeneracy loss. For every two points 𝐴, 𝐵, we add the loss of the form 1/(|𝐴𝐵|2 + 𝜖), and an 𝐿2 normalization on all points to prevent their value from becoming too large. After the loss in the ADAM optimization meets a certain threshold,(一旦 ADAM 优化中的损失达到某个阈值) we stop caring about the non-degeneracy,(我们就不再关注非退化损失) and switch from a gradient descent optimization to the Gauss-Newton-Levenberg method(并从梯度下降优化切换到 Gauss-Newton-Levenberg method) to look for a numerical solution of a combined under- and over-determined system of nonlinear equations.(以寻找一个组合的欠定和过定非线性方程组的数值解)

This two-stage optimization method builds upon the methodology introduced in Krueger et al. (2021). While the first stage remains unchanged, we incorporate a novel second stage.(但我们引入了一个新颖的第二阶段) This addition addresses the practical limitations encountered when tuning the gradient descent optimization in the original method, where achieving a consistently satisfactory error margin proved challenging.(这一改进解决了在原始方法中调优梯度下降优化时遇到的实际限制，即难以始终达到满意的误差范围) We benchmark this method on 44 IMO problems formalized in AG language (see Figure 8) and are able to find diagrams for 41 of them. We run the two-stage convergence procedure in multiple parallel processes, and in a loop which restarts and generates another random initial configuration after a failure. This way, 40 / 44 problems got their diagram generated within 1 hour using approximately 40 processes for each problem (many problems got their diagram within seconds, on the first try). For the remaining 4 problems, we run the same procedure longer and with more parallelization. This way, we also obtained a diagram for IMO-2011-6 after 400 minutes using 3333 processes.

---

论文 6-8 页

Continuous Paragraph:
A symbolic engine, DDAR (Deductive Database Arithmetic Reasoning)(演绎数据库算术推理), is crucial for AlphaGeometry. It computes the deduction closure—all deducible facts from initial facts—by iteratively applying deduction rules.(通过迭代应用演绎规则来计算演绎闭包——从初始事实推导出的所有可推导事实) DDAR drives both training data generation and test-time proof search, where speed is essential.(DDAR 驱动着训练数据生成和测试时的证明搜索，速度至关重要) Faster data generation enables larger datasets and more aggressive filtering, while faster proof search allows more extensive exploration, increasing the chance of finding a solution.(更快的数据生成可以实现更大的数据集和更积极的过滤，而更快的证明搜索可以进行更广泛的探索，从而增加在给定时间内找到解决方案的机会) Three key DDAR improvements are discussed: handling double points, a faster algorithm, and a faster implementation.(三个主要改进：处理重合点、更快的算法和更快的实现)

DDAR1 lacked the ability to handle double points (two points with the same coordinates but different names), a crucial feature for complex problems. For example, proving that the intersection of two lines a and b (point X) lies on a circle ω might involve proving that the intersection of a and ω (point X') lies on b, then proving X = X', and thus X lies on ω. This requires constructing the auxiliary point X' and proving its equivalence to X.(DDAR1 缺乏处理重合点（两个坐标相同但名称不同的点）的能力，这是解决复杂问题的关键特征。例如，证明两条直线 a 和 b 的交点(X)位于圆 ω 上，可能需要证明 a 和 ω 的交点(X')位于 b 上，然后证明 X = X'，从而证明 X 位于 ω 上。这需要构造辅助点 X'并证明其与 X 等价)

The DDAR1 algorithm applied each rule to all point combinations, involving a polynomial-time candidate search and an exponential-time clause matching. The search for similar triangles, for instance, could theoretically be O(N^8). DDAR2 hard-codes essential rules, reducing queries to the AR sub-engine to at most cubic complexity. It also discards explicit angle and distance rules, as these are handled automatically by the AR engine. DDAR2 efficiently finds similar triangles by hashing point "shapes" and cyclic quadrilaterals by hashing (A, B, ∠AXB) values.(DDAR1 算法将每个规则应用于所有点的组合，包括多项式时间的候选搜索和指数时间的子句匹配。例如，搜索相似三角形的理论复杂度可能为 O(N^8)。DDAR2 对基本规则进行硬编码，将对 AR 子引擎的查询减少到最多三次复杂度。它还丢弃了显式的角度和距离规则，因为这些规则由 AR 引擎自动处理。DDAR2 通过哈希点“形状”有效地找到相似三角形，并通过哈希(A, B, ∠AXB)值找到圆内接四边形)

Finally, the core computation (Gaussian Elimination) was implemented in C++ using pybind11, resulting in a 300x speedup compared to DDAR1. Benchmarking on 25 unsolved IMO problems, DDAR2 averaged 3.45 seconds per problem, compared to DDAR1's 1179.57 seconds.(最后，使用 pybind11 在 C++中实现了核心计算（高斯消元），与 DDAR1 相比，速度提高了 300 倍。在 25 个未解决的 IMO 问题上进行基准测试，DDAR2 每个问题的平均耗时为 3.45 秒，而 DDAR1 的平均耗时为 1179.57 秒)

---

论文 8-10 页

Better synthetic training data

Supplementing the symbolic engine with a language model was a key to AG1 success, bringing the solve rate from 14 (pure deduction proofs) to 25 out of 30 selected IMO problems. This language model was trained on a large amount of algorithmically generated synthetic data.(该语言模型是根据大量算法生成的合成数据进行训练的) In AG2 we use the same procedure.

也就是数据不足的情况下, AGI 合成数据保证从初始事实推导出的所有可推导事实

Similar to AG1, our synthetic data generation method starts by sampling a random diagram, and uses the symbolic engine to deduce all possible facts from it. For each of the deduced facts,(然后使用符号引擎从中推断出所有可能的事实) a traceback algorithm is used to extract the corresponding premises, auxiliary points, and deduction steps that prove the fact.(使用回溯算法提取相应的前提、辅助点和证明该事实的推导步骤) Our data generation method deliberately avoids the use of human-crafted problems as initial diagram seeds,(我们的数据生成方法刻意避免使用人为问题作为初始图种子) and strictly starts from random diagrams. This design choice eliminates the risk of data contamination(这种设计选择消除了数据污染的风险) and allows for the exploration of theorem distributions that may extend beyond established human knowledge.(并允许探索可能超出人类现有知识范围的定理分布) This approach contrasts with methods like TongGeometry, which rely on human expertise and existing problem diagrams to guide and filter data generation.(后者依赖人类专业知识和现有问题图来指导和过滤数据生成) In AG2, we keep using random diagrams as initial seeds and continue to push for better synthetic training data.

**Larger, more complex diagrams and better data distribution**.(更大、更复杂的图表和更好的数据分布) First of all, we scale up resources for data generation, and do more careful re-balancing of the data distribution. As demonstrated on Figure 2, compared to AG1, AG2:

• Explores random diagrams at twice the size, allowing for extracting much more complex
problems.(探索两倍大小的随机图表，允许提取更复杂的内容问题)

• Produces theorems at up to 2x more complex, i.e. number of points and premises.(产生复杂程度高达 2 倍的定理，即点和前提的数量)

• Produces up to 10x more complex proofs, i.e. 10x more proof steps.(生成多达 10 倍复杂的证明，即多 10 倍的证明步骤)

• Has a more balanced data distribution between question types.(问题类型之间的数据分布更加平衡)

• Has a more balanced data distribution between problems with and without auxiliary points.(在有辅助点和没有辅助点的问题之间有更平衡的数据分布)

More types of theorems. Besides generating theorems that prove classic statements such as “AB =
CD”, AG2 data generating algorithm also produces problems of “locus” type, i.e. asserting statements such as “When X moves on line/circle Y, then Z moves on a fixed line/circle T”.(当 X 在直线/圆 Y 上移动时，则 Z 在固定线/圆 T 上移动) Introduced in Section 2, these statements are not supported in the AG1 data generation algorithm, as there is no notion of movement and movement dependency.(AG1 数据生成算法不支持这些语句，因为没有运动和运动依赖性) In AG2, we record the movement dependency for each point 𝑋 during random diagram generation through a function 𝑃(.) with the following definition:

𝑃(𝐴): the set of points that control the movements of 𝐴, where 𝐴 is a point or a set of points, defined in a constructive problem statement. Two examples of 𝑃 are presented in Table 3 and all
cases where locus-type statements are detected are shown in Table 5.

|        If        |               Then                |
| :--------------: | :-------------------------------: |
| a = midpoint b c | d = midpoint a c<br>𝑃(𝑑) = {𝑏, 𝑐} |
| a = on_line b c  |         𝑃(𝑎) = {𝑎, 𝑏, 𝑐}          |

...

**Faster data generation algorithm**.(更快的数据生成算法) We also improved the speed of the data generation algorithm.(我们还提高了数据生成算法的速度) Recall that in AG1, we first run deduction closure on random diagrams,(我们首先在随机图上运行推演闭包) and “traceback" to obtain the minimal problem and minimal proof that proves each fact in the closure.(然后“回溯”以获得
证明结论中每个事实的最小问题和最小证据) To obtain the minimal problem in AG1, we have to exhaustively remove different subsets of points from the problem and rerun DDAR to check provability(为了获得最小的 AG1 中的问题，我们必须从问题中彻底删除点的不同子集，并且重新运行 DDAR 以检查可证明性). Such a search can find the subset with the smallest cardinality,(这样的搜索可以找到基数最小的子集) however as an exponential search(指数搜索), it is infeasible for a larger number of points.(对于大量的点来说是不可行的) Therefore, we switched to a greedily discarding algorithm(贪婪丢弃算法) shown in Figure 3, which uses just a linear number of checks for whether a set of points suffices to prove the goal.(仅使用线性数检查一组点是否足以证明目标) The greedy algorithm is guaranteed to find a minimal set of points with respect to inclusion as long as the check is monotonic (if 𝐴 ⊆ 𝐵, then check_provable(𝐴) ⇒ check_provable(𝐵)).(只要检查是单调的（如果 𝐴 ⊆ 𝐵，则 check_provable(𝐴) ⇒ check_provable(𝐵)），贪心算法就能保证找到关于包含的最小点集) In reality, we also require the pruned set to remain closed under construction dependencies (so that we can still run a random construction).(还要求剪枝集在构造依赖项下保持封闭（以便我们仍然可以运行随机构造）) If we incorporate this condition into the check_provable predicate,(我们将此条件合并到 check_provable 谓词中) it stops being monotonic.(它就不再是单调的) This difficulty can be fixed by processing the points via the algorithm from Figure 3 in a reversetopological order (first points that do not depend on any other points, and last the initial points of the construction).(以逆拓扑顺序处理点来解决（第一个点不依赖于任何其他点，最后一个点是构造的初始点）)

```py
def prune_point s (
    point s : set [ Point ] ,
    check_provable : Ca l l a b l e [ [ set [ Point ] ] , bool ] ) :
    pruned = set ( point s )
    for p in r e v e r s e _ t o p o l o g i c a l ( point s ) :
    i f check_provable ( pruned − {p } ) :
    pruned = pruned − {p}
    return
```

这是伪代码吧, 暂时没找到源码里相似的...

---

**Novel search algorithm**(新颖的搜索算法)

In AG1, we use a simple beam search to discover proofs.(我们使用简单的集束搜索来发现证据) In AG2, we design a novel search algorithm, in which several differently configured beam searches are executed in parallel and are allowed to help each other through a knowledge sharing mechanism (see Figure 4).(我们设计了一种新颖的搜索算法，其中并行执行多个不同配置的波束搜索，并允许通过知识共享机制相互帮助) To improve the robustness of our system we use multiple different language models for each search tree configuration.(我们为每个搜索树配置使用多种不同的语言模型) We call this search algorithm Shared Knowledge Ensemble of Search Trees (SKEST).(我们将此搜索算法称为搜索树共享知识集成 (SKEST))

It works as follows. In each search tree, a node corresponds to one attempt at auxiliary construction followed by one attempt of the symbolic engine run.(在每个搜索树中，一个节点对应于辅助构造的一次尝试，随后是符号引擎运行的一次尝试) If the attempt succeeds, all search trees terminate.(如果尝试成功，所有搜索树都会终止) If the attempt fails, the node will write down the facts that the symbolic engine managed to prove into a shared facts database.(如果尝试失败，节点会将符号引擎设法证明的事实写入共享事实数据库) These shared facts are filtered such that they are not the auxiliary point specific to the node itself, but only relevant to the original problem.(这些共享事实被过滤，使得它们不是特定于节点本身的辅助点，而仅与原始问题相关) This way, these facts can also be useful to the other nodes in the same search tree, and the nodes in different search trees.(这样，这些事实对于同一搜索树中的其他节点以及不同搜索树中的节点也很有用) Below we list various types of search trees, which we employ to make sure different parts of the search space are explored effectively:(确保有效地探索搜索空间的不同部分)

• "Classic" search tree: the same beam tree search used in AG1, where a language model is asked to produce one auxiliary point at each node.(“经典”搜索树：与 AG1 中使用的相同的束树搜索，其中要求语言模型在每个节点生成一个辅助点)

• Tree predicting multiple auxiliary points at each node: a language model is allowed to produce as many auxiliary points as it wants at each tree node. Recall that this is possible because our LM is trained to produce full proofs, starting with auxiliary points and followed by the deduction steps2. Note that even though we want our models to generate all necessary auxiliary points in one query, in practice we observe the need to call the model multiple times given previously produced auxiliary points. Allowing the model to produce multiple auxiliary points accelerates finding a solution and effectively increases the tree search depth(在每个节点处预测多个辅助点的树：允许语言模型在每个树节点处产生尽可能多的辅助点。回想一下，这是可能的，因为我们的 LM 经过训练可以生成完整的证明，从辅助点开始，然后是演绎步骤 2。请注意，即使我们希望模型在一个查询中生成所有必要的辅助点，但实际上我们观察到需要在给定先前生成的辅助点的情况下多次调用模型。允许模型产生多个辅助点加速求解并有效增加树搜索深度)

• Tree predicting different types of aux points uniformly. Recall that LM outputs for auxiliary points look like x00 a : cong a b c d (00) coll a e f (01), i.e. “construct point a such that a b = c d and a e f are collinear". Typically to predict aux points we prompt the language model with the first token x00 and let it generate the rest. Here, instead, we prompt the LM with x00 a : cong, x00 a : coll, x00 a : cyclic, x00 a : perp, etc. to force uniform distribution across the first 4 tokens, and then let the LM generate the rest.(统一预测不同类型辅助点的树。回想一下，辅助点的 LM 输出看起来像 x00 a : cong a b c d (00) coll a e f (01)，即“构造点 a，使得 a b = c d 和 a e f 共线”。通常为了预测辅助点，我们用第一个标记 x00 提示语言模型，并让它生成其余的标记。在这里，我们用 x00 a : cong, x00 a : coll 提示 LM， x00 a ：循环，x00 a ：perp 等强制在前 4 个令牌上均匀分布，然后让 LM 生成其余令牌)

• Deep but narrow tree (e.g. beam size 64 and depth 10).(深而窄的树（例如梁尺寸 64 和深度 10）)

• Shallow but wide tree (e.g. beam size 512 and depth 4).(浅但宽的树（例如梁尺寸 512 和深度 4）)

这个就要结合源码看了 [beam_search.py](#beam_search-py)

---

已经晕了, 还有一节 Better language model 不看了
