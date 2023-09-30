# React

-   React-Router 路由管理库

-   PubSub 消息管理库

-   Redux 集中式状态管理库

-   Ant-Design UI 组件库

-   React Native 使用 React 语法进行移动端开发

## What is React

是一个将数据渲染为 HTML 视图的开源 JS 库

1. 发送请求数据
2. 处理数据
3. 操作 DOM 呈现页面

## Why use React

1. 原生 js 操作 DOM 繁琐,效率低:

    example:

    ```js
    document.getElementById("app");
    document.querySelector("#app");
    document.getElementsByTagName("span");
    ```

2. 使用 JS 直接操作 DOM, 浏览器会进行大量重排 (所以比 jQuery 好)

3. 原生 JS 没有组件化编码方案, 代码复用率低

总结:

1. React 操作 Virtual-DOM (虚拟 DOM) 比 原生 JS 操作 True-DOM (真实 DOM) 效率高
2. DOM diffing 算法, 最小化页面重绘

# React state

state 是 key-value 属性

1. 组件中 `render()` 方法中的 `this.state` 来为组件实例化对象
2. 组件中自定义方法中 this 为 undefined 的时候解决办法:
   a. 在 `constructor()` 里通过函数对象的 `bind()` 强制绑定 this
   b. 用箭头函数赋值方法
3. 状态数据: 不能直接修改或更新, 必须用 API 提供的 `this.setState({data1: xxx, data2: xxx})`

# React props

props 是 read-only 属性

When implementing the constructor for a `React.Component` subclass, you should call `super(props)` before any other statement. Otherwise, `this.props` will be undefined in the constructor, which can lead to bugs.

Typically, in React constructors are only used for two purposes:

1. Initializing local state by assigning an object to `this.state`.
2. Binding event handler methods to an instance.

# React refs

## String refs

`ref=""` 就相当于原生 js 的 `id=""`

ref 收集的是当前节点转成的真实 DOM, 所以 `const xx = this.refs` 获取到 ref 后可以用原生 js 的方法 `xx.value` 来获取值

string refs 不被官方推荐:

Legacy API: String Refs
If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, are considered legacy, and are likely to be removed in one of the future releases.

总结就是 string refs 存在效率问题, 但是 string refs 用的简单且爽

## Callback refs

callback refs 官方指出用内联函数写的时候, 在 update 的时候的小问题:

Caveats with callback refs
If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn’t matter in most cases.

但是这问题并不是很影响, 还是写内联形式比较爽

## createRef()

`React.createRef()` 调用后可以返回一个容器, 该容器可以存储被 ref 所标识的节点, 里面存储的形式是 key-value 形式, 而且 key 名字就叫 `current`, 通过 current 就可以找到 ref 对应的 DOM 标签

这样好是好, 但是 `xxx = createRef()` 创造出来的 `xxx` 对象是一对一的, 每次用 `ref={this.xxx}` 都要创建一次对应的 createRef() 对象

但是这个方法是官方推荐的...

Creating Refs
Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

## Avoid overuse Refs

Don’t Overuse Refs
Your first inclination may be to use refs to “make things happen” in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy. Often, it becomes clear that the proper place to “own” that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.

Note

The examples below have been updated to use the React.createRef() API introduced in React 16.3. If you are using an earlier release of React, we recommend using callback refs instead.

具体意思就是, 可以通过 event 和 target 得到发生事件的 DOM 对象的时候, 就可以不用 ref

Example:

```js
                render() {
                    return (
                        <div>
                            {/*这个input框的ref可以省略, 因为可以通过event和target得到发生事件的DOM对象*/}
                            <input
                                onBlur={this.showData2}
                                type="text"
                                placeholder="失去焦点提示数据"
                            />
                        </div>
                    );
                }
                showData2 = (event) => {
                    alert(event.target.value);
                };
```
