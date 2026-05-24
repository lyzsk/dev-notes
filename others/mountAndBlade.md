# 玩家专属爆率

```cs
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.Library;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x0200019D RID: 413
	public partial class DefaultBattleRewardModel : BattleRewardModel
	{
		// Token: 0x06001927 RID: 6439 RVA: 0x00099104 File Offset: 0x00097304
		public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)
		{
			float num = 7.25f * (float)(casualtyCharacter.Level * casualtyCharacter.Level);
			if (winnerPartyLeaderHero == Hero.MainHero)
			{
				return num * MBRandom.RandomFloatRanged(0.85f, 1.15f);
			}
			return num;
		}
	}
}
`
0.85-1.15` 改成 `2000-2200`

```

以及传说甲爆率:

```cs
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.Library;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x020000F6 RID: 246
	public partial class DefaultBattleRewardModel : BattleRewardModel
	{
		// Token: 0x0600164F RID: 5711 RVA: 0x00065ED0 File Offset: 0x000640D0
		private static EquipmentElement GetRandomItem(Equipment equipment, float targetValue = 0f)
		{
			int num = 0;
			for (int i = 0; i < 12; i++)
			{
				if (equipment[i].Item != null && !equipment[i].Item.NotMerchandise)
				{
					DefaultBattleRewardModel._indices[num] = i;
					num++;
				}
			}
			for (int j = 0; j < num - 1; j++)
			{
				int num2 = j;
				int value = equipment[DefaultBattleRewardModel._indices[j]].Item.Value;
				for (int k = j + 1; k < num; k++)
				{
					if (equipment[DefaultBattleRewardModel._indices[k]].Item.Value > value)
					{
						num2 = k;
						value = equipment[DefaultBattleRewardModel._indices[k]].Item.Value;
					}
				}
				int num3 = DefaultBattleRewardModel._indices[j];
				DefaultBattleRewardModel._indices[j] = DefaultBattleRewardModel._indices[num2];
				DefaultBattleRewardModel._indices[num2] = num3;
			}
			if (num > 0)
			{
				for (int l = 0; l < num; l++)
				{
					int index = DefaultBattleRewardModel._indices[l];
					EquipmentElement result = equipment[index];
					if (result.Item != null && !equipment[index].Item.NotMerchandise)
					{
						float b = (float)result.Item.Value + 0.1f;
						float num4 = 0.325f * (targetValue / (MathF.Max(targetValue, b) * (float)(num - l)));
						if (MBRandom.RandomFloat < num4)
						{
							ItemComponent itemComponent = result.Item.ItemComponent;
							ItemModifier itemModifier;
							if (itemComponent == null)
							{
								itemModifier = null;
							}
							else
							{
								ItemModifierGroup itemModifierGroup = itemComponent.ItemModifierGroup;
								itemModifier = ((itemModifierGroup != null) ? itemModifierGroup.GetRandomItemModifierLootScoreBased() : null);
							}
							ItemModifier itemModifier2 = itemModifier;
							if (itemModifier2 != null)
							{
								result = new EquipmentElement(result.Item, itemModifier2, null, false);
							}
							return result;
						}
					}
				}
			}
			return default(EquipmentElement);
		}
	}
}
```

原来是: `float num4 = 0.325f * (targetValue / (MathF.Max(targetValue, b) * (float)(num - l)));`

改成: `float num4 = 0.325f * ((targetValue + (float)result.Item.Value * 22f) / (MathF.Max(targetValue, b) * (float)(num - l)));`

# 传说装备爆率

修改 item_modifiers.xml

loot_drop_score 为爆率

production_drop_score 为铁匠铺生产概率

# 丢装备经验

```cs
using System;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000122 RID: 290
	public partial class DefaultItemDiscardModel : ItemDiscardModel
	{
		// Token: 0x06001827 RID: 6183 RVA: 0x00073EC0 File Offset: 0x000720C0
		public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)
		{
			int num = 0;
			if (this.PlayerCanDonateItem(item))
			{
				switch (item.Tier)
				{
				case ItemObject.ItemTiers.Tier1:
					num = 75;
					break;
				case ItemObject.ItemTiers.Tier2:
					num = 150;
					break;
				case ItemObject.ItemTiers.Tier3:
					num = 250;
					break;
				case ItemObject.ItemTiers.Tier4:
				case ItemObject.ItemTiers.Tier5:
				case ItemObject.ItemTiers.Tier6:
					num = 300;
					break;
				default:
					num = 35;
					break;
				}
			}
			return num * amount;
		}
	}
}
```

# 修改城镇金币数量

```cs
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Library;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000149 RID: 329
	public partial class DefaultSettlementEconomyModel : SettlementEconomyModel
	{
		// Token: 0x060019A7 RID: 6567 RVA: 0x00080A64 File Offset: 0x0007EC64
		public override int GetTownGoldChange(Town town)
		{
			float num = 10000f + town.Prosperity * 12f - (float)town.Gold;
			return MathF.Round(0.25f * num);
		}
	}
}
```

基础值10000改成200000

# 修改木头生产木炭数量

```cs
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000159 RID: 345
	public partial class DefaultSmithingModel : SmithingModel
	{
		// Token: 0x06001A72 RID: 6770 RVA: 0x00085E18 File Offset: 0x00084018
		public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)
		{
			if (weaponsmith.GetPerkValue(DefaultPerks.Crafting.CharcoalMaker))
			{
				yield return new Crafting.RefiningFormula(CraftingMaterials.Wood, 2, CraftingMaterials.Iron1, 0, CraftingMaterials.Charcoal, 3, CraftingMaterials.IronOre, 0);
			}
			else
			{
				yield return new Crafting.RefiningFormula(CraftingMaterials.Wood, 2, CraftingMaterials.Iron1, 0, CraftingMaterials.Charcoal, 1, CraftingMaterials.IronOre, 0);
			}
			yield return new Crafting.RefiningFormula(CraftingMaterials.IronOre, 1, CraftingMaterials.Charcoal, 1, CraftingMaterials.Iron1, weaponsmith.GetPerkValue(DefaultPerks.Crafting.IronMaker) ? 3 : 2, CraftingMaterials.IronOre, 0);
			yield return new Crafting.RefiningFormula(CraftingMaterials.Iron1, 1, CraftingMaterials.Charcoal, 1, CraftingMaterials.Iron2, 1, CraftingMaterials.IronOre, 0);
			yield return new Crafting.RefiningFormula(CraftingMaterials.Iron2, 2, CraftingMaterials.Charcoal, 1, CraftingMaterials.Iron3, 1, CraftingMaterials.Iron1, 1);
			if (weaponsmith.GetPerkValue(DefaultPerks.Crafting.SteelMaker))
			{
				yield return new Crafting.RefiningFormula(CraftingMaterials.Iron3, 2, CraftingMaterials.Charcoal, 1, CraftingMaterials.Iron4, 1, CraftingMaterials.Iron1, 1);
			}
			if (weaponsmith.GetPerkValue(DefaultPerks.Crafting.SteelMaker2))
			{
				yield return new Crafting.RefiningFormula(CraftingMaterials.Iron4, 2, CraftingMaterials.Charcoal, 1, CraftingMaterials.Iron5, 1, CraftingMaterials.Iron1, 1);
			}
			if (weaponsmith.GetPerkValue(DefaultPerks.Crafting.SteelMaker3))
			{
				yield return new Crafting.RefiningFormula(CraftingMaterials.Iron5, 2, CraftingMaterials.Charcoal, 1, CraftingMaterials.Iron6, 1, CraftingMaterials.Iron1, 1);
			}
			yield break;
		}
	}
}

```

右键编辑IL指令, 第21行偏移0052, 点击idc.i4.3, 选择idc.i4.s, 输入8

同样方法, 修改第86, 105, 129, 153, 177行, 改成8

# 募兵刷新速率

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000166 RID: 358
	public partial class DefaultVolunteerModel : VolunteerModel
	{
		// Token: 0x06001ADC RID: 6876 RVA: 0x0008A790 File Offset: 0x00088990
		public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)
		{
			float num = 0.7f;
			int num2 = 0;
			foreach (Town town in hero.CurrentSettlement.MapFaction.Fiefs)
			{
				num2 += (town.IsTown ? (((town.Prosperity < 3000f) ? 1 : ((town.Prosperity < 6000f) ? 2 : 3)) + town.Villages.Count) : town.Villages.Count);
			}
			float num3 = (num2 < 46) ? ((float)num2 / 46f * ((float)num2 / 46f)) : 1f;
			num += ((hero.CurrentSettlement != null && num3 < 1f) ? ((1f - num3) * 0.2f) : 0f);
			float baseNumber = 0.75f * MathF.Clamp(MathF.Pow(num, (float)(index + 1)), 0f, 1f);
			ExplainedNumber explainedNumber = new ExplainedNumber(baseNumber, false, null);
			Clan clan = hero.Clan;
			if (((clan != null) ? clan.Kingdom : null) != null && hero.Clan.Kingdom.ActivePolicies.Contains(DefaultPolicies.Cantons))
			{
				explainedNumber.AddFactor(0.2f, null);
			}
			Town town2;
			if (!settlement.IsTown)
			{
				Settlement tradeBound = settlement.Village.TradeBound;
				town2 = ((tradeBound != null) ? tradeBound.Town : null);
			}
			else
			{
				town2 = settlement.Town;
			}
			Town town3 = town2;
			if (town3 != null && hero.IsAlive && hero.VolunteerTypes[index] != null && hero.VolunteerTypes[index].IsMounted && PerkHelper.GetPerkValueForTown(DefaultPerks.Riding.CavalryTactics, town3))
			{
				explainedNumber.AddFactor(DefaultPerks.Riding.CavalryTactics.PrimaryBonus, null);
			}
			return explainedNumber.ResultNumber;
		}
	}
}
```

基础值`0.7f`改成`50f`

玩家独特的士兵招募数量:

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000166 RID: 358
	public partial class DefaultVolunteerModel : VolunteerModel
	{
		// Token: 0x06001AD9 RID: 6873 RVA: 0x0008A4E4 File Offset: 0x000886E4
		public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)
		{
			int num = this.MaximumIndexCanPartyRecruitFromHeroInternal(buyerHero, sellerHero);
			int num2 = (useValueAsRelation < -100) ? buyerHero.GetRelation(sellerHero) : useValueAsRelation;
			int num3 = (num2 >= 100) ? 7 : ((num2 >= 80) ? 6 : ((num2 >= 60) ? 5 : ((num2 >= 40) ? 4 : ((num2 >= 20) ? 3 : ((num2 >= 10) ? 2 : ((num2 >= 5) ? 1 : ((num2 >= 0) ? 0 : -1)))))));
			int num4 = (sellerHero.CurrentSettlement != null && buyerHero.MapFaction == sellerHero.CurrentSettlement.MapFaction) ? 1 : 0;
			int num5 = (buyerHero != Hero.MainHero) ? 1 : 0;
			int num6 = (sellerHero.CurrentSettlement != null && buyerHero.MapFaction.IsAtWarWith(sellerHero.CurrentSettlement.MapFaction)) ? (-(1 + num5)) : 0;
			if (buyerHero.IsMinorFactionHero && sellerHero.CurrentSettlement != null && sellerHero.CurrentSettlement.IsVillage)
			{
				num6 = 0;
			}
			int num7 = 0;
			if (sellerHero.IsMerchant && buyerHero.GetPerkValue(DefaultPerks.Trade.ArtisanCommunity))
			{
				num7 += (int)DefaultPerks.Trade.ArtisanCommunity.SecondaryBonus;
			}
			if (sellerHero.Culture == buyerHero.Culture && buyerHero.GetPerkValue(DefaultPerks.Leadership.CombatTips))
			{
				num7 += (int)DefaultPerks.Leadership.CombatTips.SecondaryBonus;
			}
			if (sellerHero.IsRuralNotable && buyerHero.GetPerkValue(DefaultPerks.Charm.Firebrand))
			{
				num7 += (int)DefaultPerks.Charm.Firebrand.SecondaryBonus;
			}
			if (sellerHero.IsUrbanNotable && buyerHero.GetPerkValue(DefaultPerks.Charm.FlexibleEthics))
			{
				num7 += (int)DefaultPerks.Charm.FlexibleEthics.SecondaryBonus;
			}
			if (sellerHero.IsArtisan && buyerHero.PartyBelongedTo != null && buyerHero.PartyBelongedTo.EffectiveEngineer != null && buyerHero.PartyBelongedTo.EffectiveEngineer.GetPerkValue(DefaultPerks.Engineering.EngineeringGuilds))
			{
				num7 += (int)DefaultPerks.Engineering.EngineeringGuilds.PrimaryBonus;
			}
			return MathF.Min(6, num + num3 + num4 + num5 + num6 + num7);
		}
	}
}
```

把最后的return改成:

```cs
			int playerBonus = (buyerHero == Hero.MainHero) ? 16 : 0;
			return MathF.Min(6, num + num3 + num4 + num5 + num6 + num7 + playerBonus);
```

# 卖俘虏流氓习气

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Conversation.Persuasion;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.CharacterDevelopment
{
	// Token: 0x020003A8 RID: 936
	public partial class DefaultSkillLevelingManager : ISkillLevelingManager
	{
		// Token: 0x060035AB RID: 13739 RVA: 0x000E00D8 File Offset: 0x000DE2D8
		public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)
		{
			int num = 0;
			for (int i = 0; i < prisonerRoster.Count; i++)
			{
				num += prisonerRoster.data[i].Character.Tier * prisonerRoster.data[i].Number;
			}
			int num2 = num * 2;
			DefaultSkillLevelingManager.OnPartySkillExercised(mobileParty, DefaultSkills.Roguery, (float)num2, PartyRole.PartyLeader);
		}
	}
}

```

`int num2 = num * 2;` 改 2000

# 俘虏招募速度

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x0200020B RID: 523
	public partial class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel
	{
		// Token: 0x06001CBC RID: 7356 RVA: 0x000B0FA0 File Offset: 0x000AF1A0
		public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject troopToBoost)
		{
			ExplainedNumber result = new ExplainedNumber(10f, false, null);
			if (party.LeaderHero != null)
			{
				result.Add((float)party.LeaderHero.GetSkillValue(DefaultSkills.Leadership) * 0.05f, null, null);
			}
			if (troopToBoost.Tier <= 3 && party.MobileParty != null && !party.MobileParty.IsCurrentlyAtSea)
			{
				PerkHelper.AddPerkBonusForParty(DefaultPerks.Leadership.FerventAttacker, party.MobileParty, false, ref result, false);
			}
			if (troopToBoost.Tier >= 4 && !party.MobileParty.IsCurrentlyAtSea && party.MobileParty.HasPerk(DefaultPerks.Leadership.StoutDefender, true))
			{
				result.AddFactor(DefaultPerks.Leadership.StoutDefender.SecondaryBonus, null);
			}
			if (troopToBoost.Occupation != Occupation.Bandit && !party.MobileParty.IsCurrentlyAtSea && party.MobileParty.HasPerk(DefaultPerks.Leadership.LoyaltyAndHonor, true))
			{
				result.AddFactor(DefaultPerks.Leadership.LoyaltyAndHonor.SecondaryBonus, null);
			}
			if (troopToBoost.IsInfantry)
			{
				PerkHelper.AddPerkBonusForParty(DefaultPerks.Leadership.LeadByExample, party.MobileParty, true, ref result, party.MobileParty.IsCurrentlyAtSea);
			}
			if (troopToBoost.IsRanged)
			{
				PerkHelper.AddPerkBonusForParty(DefaultPerks.Leadership.TrustedCommander, party.MobileParty, true, ref result, party.MobileParty.IsCurrentlyAtSea);
			}
			if (troopToBoost.Occupation == Occupation.Bandit && !party.MobileParty.IsCurrentlyAtSea && party.MobileParty.HasPerk(DefaultPerks.Roguery.Promises, true))
			{
				result.AddFactor(DefaultPerks.Roguery.Promises.SecondaryBonus, null);
			}
			return result;
		}
	}
}
```

`result.Add((float)party.LeaderHero.GetSkillValue(DefaultSkills.Leadership) * 0.05f, null, null);` 0.05改成200

# 战斗经验

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000107 RID: 263
	public partial class DefaultCombatXpModel : CombatXpModel
	{
		// Token: 0x0600171E RID: 5918
		public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)
		{
			int num = attackedTroop.MaxHitPoints();
			float leaderModifier = 0f;
			BattleSideEnum side = BattleSideEnum.Attacker;
			MapEvent.PowerCalculationContext context = MapEvent.PowerCalculationContext.PlainBattle;
			if (((attackerParty != null) ? attackerParty.MapEvent : null) != null)
			{
				leaderModifier = attackerParty.MapEventSide.LeaderSimulationModifier;
				side = attackerParty.Side;
				context = attackerParty.MapEvent.SimulationContext;
			}
			float troopPower = Campaign.Current.Models.MilitaryPowerModel.GetTroopPower(attackedTroop, side.GetOppositeSide(), context, leaderModifier);
			float num2 = Campaign.Current.Models.MilitaryPowerModel.GetTroopPower(attackerTroop, side, context, leaderModifier) + 0.5f;
			float num3 = troopPower + 0.5f;
			int num4 = MathF.Min(damage, num) + (isFatal ? num : 0);
			float multiplier = 0.4f;
			if (attackerParty != null && attackerParty == MobileParty.MainParty.Party) {
				multiplier = 400f;
			}
			float num5 = multiplier * num2 * num3 * (float)num4;
			num5 *= DefaultCombatXpModel.GetXpfMultiplierForMissionType(missionType);
			ExplainedNumber result = new ExplainedNumber(num5, false, null);
			if (attackerParty != null)
			{
				DefaultCombatXpModel.GetBattleXpBonusFromPerks(attackerParty, ref result, attackerTroop);
			}
			bool flag = attackerParty == null || !attackerParty.IsMobile || attackerParty.MobileParty.IsCurrentlyAtSea;
			if (captain != null && captain.IsHero && !flag && captain.GetPerkValue(DefaultPerks.Leadership.InspiringLeader))
			{
				result.AddFactor(DefaultPerks.Leadership.InspiringLeader.SecondaryBonus, DefaultPerks.Leadership.InspiringLeader.Name);
			}
			return result;
		}
	}
}

```

# 升级获得属性点和专精点

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000101 RID: 257
	public partial class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel
	{
		// Token: 0x17000633 RID: 1587
		// (get) Token: 0x060016B9 RID: 5817 RVA: 0x0006799B File Offset: 0x00065B9B
		public override int LevelsPerAttributePoint
		{
			get
			{
				return 1;
			}
		}
	}
}
```

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000101 RID: 257
	public partial class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel
	{
		// Token: 0x17000634 RID: 1588
		// (get) Token: 0x060016BA RID: 5818 RVA: 0x0006799E File Offset: 0x00065B9E
		public override int FocusPointsPerLevel
		{
			get
			{
				return 5;
			}
		}
	}
}

```

# 自动学习技能

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000101 RID: 257
	public partial class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel
	{
		// Token: 0x060016BF RID: 5823
		public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)
		{
			ExplainedNumber result = new ExplainedNumber(1.25f, includeDescriptions, null);
			float num = 0f;
			foreach (CharacterAttribute attribute in skill.Attributes)
			{
				num += (float)characterAttributes.GetPropertyValue(attribute);
			}
			foreach (PerkObject perkObject in PerkObject.All)
			{
				SkillObject sskill = perkObject.Skill;
				if ((float)Hero.MainHero.GetSkillValue(sskill) >= perkObject.RequiredSkillValue && !Hero.MainHero.GetPerkValue(perkObject))
				{
					Hero.MainHero.HeroDeveloper.AddPerk(perkObject);
				}
			}
			float num2 = num / (float)skill.Attributes.Length;
			result.AddFactor(0.4f * num2, DefaultCharacterDevelopmentModel._attributeEffectText);
			int num3 = MathF.Round(Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningLimit(characterAttributes, focusValue, skill, false).ResultNumber);
			result.AddFactor((float)focusValue * 1f, DefaultCharacterDevelopmentModel._skillFocusText);
			if (skillValue > num3)
			{
				int num4 = skillValue - num3;
				result.AddFactor(-1f - 0.1f * (float)num4, DefaultCharacterDevelopmentModel._overLimitText);
			}
			result.LimitMin(0f);
			return result;
		}
	}
}

```

# 同时学习两条线路

```cs
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;

namespace TaleWorlds.CampaignSystem.CharacterDevelopment
{
	// Token: 0x020003A3 RID: 931
	public partial class HeroDeveloper
	{
		// Token: 0x0600353D RID: 13629 RVA: 0x000D73E9 File Offset: 0x000D55E9
		public void AddPerk(PerkObject perk)
		{
			this.Hero.SetPerkValueInternal(perk, true);
			if (perk.AlternativePerk != null)
		    {
		        this.Hero.SetPerkValueInternal(perk.AlternativePerk, true);
		    }
		}
	}
}

```

# 玩家专属速度

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000138 RID: 312
	public partial class DefaultPartySpeedCalculatingModel : PartySpeedModel
	{
		// Token: 0x0600192D RID: 6445 RVA: 0x0007C49C File Offset: 0x0007A69C
		private ExplainedNumber CalculateLandBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
		{
			PartyBase party = mobileParty.Party;
			int num = 0;
			float num2 = 0f;
			int num3 = 0;
			int num4 = mobileParty.MemberRoster.TotalManCount + additionalTroopOnFootCount + additionalTroopOnHorseCount;
			this.AddCargoStats(mobileParty, ref num, ref num2, ref num3);
			float num5 = mobileParty.TotalWeightCarried;
			int num6 = (int)Campaign.Current.Models.InventoryCapacityModel.CalculateInventoryCapacity(mobileParty, mobileParty.IsCurrentlyAtSea, false, additionalTroopOnFootCount, additionalTroopOnHorseCount, 0, false).ResultNumber;
			int num7 = party.NumberOfMenWithHorse + additionalTroopOnHorseCount;
			int num8 = party.NumberOfMenWithoutHorse + additionalTroopOnFootCount;
			int num9 = party.MemberRoster.TotalWounded;
			int num10 = party.PrisonRoster.TotalManCount;
			int num11 = party.PartySizeLimit;
			float morale = mobileParty.Morale;
			if (mobileParty.AttachedParties.Count != 0)
			{
				foreach (MobileParty mobileParty2 in mobileParty.AttachedParties)
				{
					this.AddCargoStats(mobileParty2, ref num, ref num2, ref num3);
					num4 += mobileParty2.MemberRoster.TotalManCount;
					num5 += mobileParty2.TotalWeightCarried;
					num6 += mobileParty2.InventoryCapacity;
					num7 += mobileParty2.Party.NumberOfMenWithHorse;
					num8 += mobileParty2.Party.NumberOfMenWithoutHorse;
					num9 += mobileParty2.MemberRoster.TotalWounded;
					num10 += mobileParty2.PrisonRoster.TotalManCount;
					num11 += mobileParty2.Party.PartySizeLimit;
				}
			}
			float baseNumber = this.CalculateBaseSpeedForParty(num4);
			ExplainedNumber result = new ExplainedNumber(baseNumber, includeDescriptions, null);
			bool flag = Campaign.Current.Models.MapWeatherModel.GetWeatherEffectOnTerrainForPosition(mobileParty.Position.ToVec2()) == MapWeatherModel.WeatherEventEffectOnTerrain.Wet;
			this.GetFootmenPerkBonus(mobileParty, num4, num8, ref result);
			float cavalryRatioModifier = this.GetCavalryRatioModifier(num4, num7);
			int num12 = MathF.Min(num8, num);
			float mountedFootmenRatioModifier = this.GetMountedFootmenRatioModifier(num4, num12);
			result.AddFactor(cavalryRatioModifier, DefaultPartySpeedCalculatingModel._textCavalry);
			result.AddFactor(mountedFootmenRatioModifier, DefaultPartySpeedCalculatingModel._textMountedFootmen);
			if (flag)
			{
				float num13 = cavalryRatioModifier * 0.3f;
				float num14 = mountedFootmenRatioModifier * 0.3f;
				result.AddFactor(-num13, DefaultPartySpeedCalculatingModel._textCavalryWeatherPenalty);
				result.AddFactor(-num14, DefaultPartySpeedCalculatingModel._textMountedFootmenWeatherPenalty);
			}
			if (mountedFootmenRatioModifier > 0f && mobileParty.LeaderHero != null && mobileParty.LeaderHero.GetPerkValue(DefaultPerks.Riding.NomadicTraditions))
			{
				result.AddFactor(mountedFootmenRatioModifier * DefaultPerks.Riding.NomadicTraditions.PrimaryBonus, DefaultPerks.Riding.NomadicTraditions.Name);
			}
			float num15 = MathF.Min(num5, (float)num6);
			if (num15 > 0f)
			{
				float cargoEffect = this.GetCargoEffect(num15, num6);
				result.AddFactor(cargoEffect, DefaultPartySpeedCalculatingModel._textCargo);
			}
			if (num2 > (float)num6)
			{
				ExplainedNumber overburdenedEffect = this.GetOverburdenedEffect(mobileParty, num2 - (float)num6, num6, includeDescriptions);
				result.AddFromExplainedNumber(overburdenedEffect, DefaultPartySpeedCalculatingModel._textOverburdened);
			}
			if (mobileParty.HasPerk(DefaultPerks.Riding.SweepingWind, true))
			{
				result.AddFactor(DefaultPerks.Riding.SweepingWind.SecondaryBonus, DefaultPerks.Riding.SweepingWind.Name);
			}
			if (num4 > num11)
			{
				float overPartySizeEffect = this.GetOverPartySizeEffect(num4, num11);
				Clan actualClan = mobileParty.ActualClan;
				if (((actualClan != null) ? actualClan.StringId : null) == "deserters")
				{
					result.AddFactor(overPartySizeEffect * 0.5f, DefaultPartySpeedCalculatingModel._textOverPartySize);
				}
				else
				{
					result.AddFactor(overPartySizeEffect, DefaultPartySpeedCalculatingModel._textOverPartySize);
				}
			}
			num3 += MathF.Max(0, num - num12);
			if (!mobileParty.IsVillager)
			{
				float herdingModifier = this.GetHerdingModifier(num4, num3);
				result.AddFactor(herdingModifier, DefaultPartySpeedCalculatingModel._textHerd);
				if (mobileParty.HasPerk(DefaultPerks.Riding.Shepherd, false))
				{
					result.AddFactor(herdingModifier * DefaultPerks.Riding.Shepherd.PrimaryBonus, DefaultPerks.Riding.Shepherd.Name);
				}
			}
			float woundedModifier = this.GetWoundedModifier(num4, num9, mobileParty);
			result.AddFactor(woundedModifier, DefaultPartySpeedCalculatingModel._textWounded);
			if (!mobileParty.IsCaravan)
			{
				if (mobileParty.Party.NumberOfPrisoners > mobileParty.Party.PrisonerSizeLimit)
				{
					float overPrisonerSizeEffect = this.GetOverPrisonerSizeEffect(mobileParty);
					result.AddFactor(overPrisonerSizeEffect, DefaultPartySpeedCalculatingModel._textOverPrisonerSize);
				}
				float sizeModifierPrisoner = this.GetSizeModifierPrisoner(num4, num10);
				result.AddFactor(1f / sizeModifierPrisoner - 1f, DefaultPartySpeedCalculatingModel._textPrisoners);
			}
			if (morale > 70f)
			{
				result.AddFactor(0.05f * ((morale - 70f) / 30f), DefaultPartySpeedCalculatingModel._textHighMorale);
			}
			if (morale < 30f)
			{
				result.AddFactor(-0.1f * (1f - mobileParty.Morale / 30f), DefaultPartySpeedCalculatingModel._textLowMorale);
			}
			if (mobileParty == MobileParty.MainParty)
			{
				float playerMapMovementSpeedBonusMultiplier = Campaign.Current.Models.DifficultyModel.GetPlayerMapMovementSpeedBonusMultiplier();
				if (playerMapMovementSpeedBonusMultiplier > 0f)
				{
					result.AddFactor(playerMapMovementSpeedBonusMultiplier, GameTexts.FindText("str_game_difficulty", null));
				}
				result.AddFactor(100f, new TextObject("{player_speed_bonus}玩家专属", null));
			}
			if (mobileParty.IsCaravan)
			{
				result.AddFactor(0.1f, DefaultPartySpeedCalculatingModel._textCaravan);
			}
			if (mobileParty.IsDisorganized)
			{
				result.AddFactor(-0.4f, DefaultPartySpeedCalculatingModel._textDisorganized);
			}
			result.LimitMin(this.MinimumSpeed);
			return result;
		}
	}
}

```

修改: `result.AddFactor(10f, new TextObject("{player_speed_bonus}玩家专属", null));`

玩家专属海上速度:

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000200 RID: 512
	public partial class DefaultPartySpeedCalculatingModel : PartySpeedModel
	{
		// Token: 0x06001C74 RID: 7284 RVA: 0x000AEA7C File Offset: 0x000ACC7C
		public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
		{
			if (mobileParty.IsCustomParty && !((CustomPartyComponent)mobileParty.PartyComponent).BaseSpeed.ApproximatelyEqualsTo(0f, 1E-05f))
			{
				finalSpeed = new ExplainedNumber(((CustomPartyComponent)mobileParty.PartyComponent).BaseSpeed, false, null);
			}
			TerrainType faceTerrainType = Campaign.Current.MapSceneWrapper.GetFaceTerrainType(mobileParty.CurrentNavigationFace);
			Hero effectiveScout = mobileParty.EffectiveScout;
			if (faceTerrainType == TerrainType.Forest)
			{
				float num = 0f;
				if (effectiveScout != null && effectiveScout.GetPerkValue(DefaultPerks.Scouting.ForestKin))
				{
					for (int i = 0; i < mobileParty.MemberRoster.Count; i++)
					{
						if (!mobileParty.MemberRoster.GetCharacterAtIndex(i).IsMounted)
						{
							num += (float)mobileParty.MemberRoster.GetElementNumber(i);
						}
					}
				}
				float value = (num / (float)mobileParty.MemberRoster.TotalManCount >= 0.75f) ? (-0.3f * -DefaultPerks.Scouting.ForestKin.PrimaryBonus) : -0.3f;
				finalSpeed.AddFactor(value, DefaultPartySpeedCalculatingModel._movingInForest);
				if (PartyBaseHelper.HasFeat(mobileParty.Party, DefaultCulturalFeats.BattanianForestSpeedFeat))
				{
					float value2 = DefaultCulturalFeats.BattanianForestSpeedFeat.EffectBonus * 0.3f;
					finalSpeed.AddFactor(value2, this._culture);
				}
			}
			else if (!mobileParty.IsCurrentlyAtSea && (faceTerrainType == TerrainType.Water || faceTerrainType == TerrainType.River || faceTerrainType == TerrainType.UnderBridge || faceTerrainType == TerrainType.Bridge || faceTerrainType == TerrainType.Fording))
			{
				finalSpeed.AddFactor(-0.3f, DefaultPartySpeedCalculatingModel._fordEffect);
			}
			else if (faceTerrainType == TerrainType.Desert || faceTerrainType == TerrainType.Dune)
			{
				if (!PartyBaseHelper.HasFeat(mobileParty.Party, DefaultCulturalFeats.AseraiDesertFeat))
				{
					finalSpeed.AddFactor(-0.1f, DefaultPartySpeedCalculatingModel._desert);
				}
				if (effectiveScout != null && effectiveScout.GetPerkValue(DefaultPerks.Scouting.DesertBorn))
				{
					finalSpeed.AddFactor(DefaultPerks.Scouting.DesertBorn.PrimaryBonus, DefaultPerks.Scouting.DesertBorn.Name);
				}
			}
			else if ((faceTerrainType == TerrainType.Plain || faceTerrainType == TerrainType.Steppe) && effectiveScout != null && effectiveScout.GetPerkValue(DefaultPerks.Scouting.Pathfinder))
			{
				finalSpeed.AddFactor(DefaultPerks.Scouting.Pathfinder.PrimaryBonus, DefaultPerks.Scouting.Pathfinder.Name);
			}
			MapWeatherModel.WeatherEvent weatherEventInPosition = Campaign.Current.Models.MapWeatherModel.GetWeatherEventInPosition(mobileParty.Position.ToVec2());
			if (weatherEventInPosition == MapWeatherModel.WeatherEvent.Snowy || weatherEventInPosition == MapWeatherModel.WeatherEvent.Blizzard)
			{
				finalSpeed.AddFactor(-0.1f, DefaultPartySpeedCalculatingModel._snow);
			}
			if (!mobileParty.IsCurrentlyAtSea)
			{
				if (Campaign.Current.IsNight)
				{
					finalSpeed.AddFactor(-0.25f, DefaultPartySpeedCalculatingModel._night);
					if (effectiveScout != null && effectiveScout.GetPerkValue(DefaultPerks.Scouting.NightRunner))
					{
						finalSpeed.AddFactor(DefaultPerks.Scouting.NightRunner.PrimaryBonus, DefaultPerks.Scouting.NightRunner.Name);
					}
				}
				else if (effectiveScout != null && effectiveScout.GetPerkValue(DefaultPerks.Scouting.DayTraveler))
				{
					finalSpeed.AddFactor(DefaultPerks.Scouting.DayTraveler.PrimaryBonus, DefaultPerks.Scouting.DayTraveler.Name);
				}
			}
			if (effectiveScout != null)
			{
				if (!mobileParty.IsCurrentlyAtSea)
				{
					PerkHelper.AddEpicPerkBonusForCharacter(DefaultPerks.Scouting.UncannyInsight, effectiveScout.CharacterObject, DefaultSkills.Scouting, true, ref finalSpeed, Campaign.Current.Models.CharacterDevelopmentModel.MinSkillRequiredForEpicPerkBonus, false);
					if (effectiveScout.GetPerkValue(DefaultPerks.Scouting.ForcedMarch) && mobileParty.Morale > 75f)
					{
						finalSpeed.AddFactor(DefaultPerks.Scouting.ForcedMarch.PrimaryBonus, DefaultPerks.Scouting.ForcedMarch.Name);
					}
				}
				if (mobileParty.DefaultBehavior == AiBehavior.EngageParty)
				{
					MobileParty targetParty = mobileParty.TargetParty;
					if (targetParty != null && !targetParty.IsCurrentlyAtSea && targetParty.MapFaction.IsAtWarWith(mobileParty.MapFaction) && effectiveScout.GetPerkValue(DefaultPerks.Scouting.Tracker))
					{
						finalSpeed.AddFactor(DefaultPerks.Scouting.Tracker.SecondaryBonus, DefaultPerks.Scouting.Tracker.Name);
					}
				}
			}
			if (mobileParty.IsCurrentlyAtSea && mobileParty.IsMainParty) {
				finalSpeed.AddFactor(100f, new TextObject("{=PLAYER_SEA_SPEED_BONUS}玩家专属海上速度", null));
			}
			Army army = mobileParty.Army;
			if (((army != null) ? army.LeaderParty : null) != null && mobileParty.Army.LeaderParty != mobileParty && mobileParty.AttachedTo != mobileParty.Army.LeaderParty && !mobileParty.IsCurrentlyAtSea && mobileParty.Army.LeaderParty.HasPerk(DefaultPerks.Tactics.CallToArms, false))
			{
				finalSpeed.AddFactor(DefaultPerks.Tactics.CallToArms.PrimaryBonus, DefaultPerks.Tactics.CallToArms.Name);
			}
			finalSpeed.LimitMin(this.MinimumSpeed);
			return finalSpeed;
		}
	}
}
```

# 修改哥哥弟弟妹妹属性

`story_mode_characters.xml`

修改年龄和skillset

# 玩家专属生命值 & 增加英雄生命值

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000102 RID: 258
	public partial class DefaultCharacterStatsModel : CharacterStatsModel
	{
		// Token: 0x060016C7 RID: 5831
		public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)
		{
			ExplainedNumber result = new ExplainedNumber(100f, includeDescriptions, null);
			if (character.IsPlayerCharacter)
			{
				result.Add(200f, new TextObject("{=player_health_bonus}玩家加成", null), null);
			}
			if (character.IsHero && !character.IsPlayerCharacter)
			{
				result.Add(50f, new TextObject("{=hero_health_bonus}英雄加成", null), null);
			}
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.OneHanded.Trainer, character, true, ref result, false);
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.TwoHanded.ThickHides, character, true, ref result, false);
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.Medicine.DoctorsOath, character, false, ref result, false);
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.Medicine.FortitudeTonic, character, false, ref result, false);
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.Athletics.WellBuilt, character, true, ref result, false);
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.OneHanded.UnwaveringDefense, character, true, ref result, false);
			PerkHelper.AddPerkBonusForCharacter(DefaultPerks.Medicine.PreventiveMedicine, character, true, ref result, false);
			if (character.IsHero && character.HeroObject.PartyBelongedTo != null && character.HeroObject.PartyBelongedTo.LeaderHero != character.HeroObject && character.HeroObject.PartyBelongedTo.HasPerk(DefaultPerks.Medicine.FortitudeTonic, false))
			{
				result.Add(DefaultPerks.Medicine.FortitudeTonic.PrimaryBonus, DefaultPerks.Medicine.FortitudeTonic.Name, null);
			}
			if (character.GetPerkValue(DefaultPerks.Athletics.MightyBlow))
			{
				int num = character.GetSkillValue(DefaultSkills.Athletics) - Campaign.Current.Models.CharacterDevelopmentModel.MaxSkillRequiredForEpicPerkBonus;
				result.Add((float)num, DefaultPerks.Athletics.MightyBlow.Name, null);
			}
			return result;
		}
	}
}
```

记得添加 `using TaleWorlds.Localization;`

# 专属家族部队战术经验加成

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Conversation.Persuasion;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.CharacterDevelopment
{
	// Token: 0x020006A0 RID: 1696
	public partial class DefaultSkillLevelingManager : ISkillLevelingManager
	{
		// Token: 0x06004E13 RID: 19987 RVA: 0x00032043 File Offset: 0x00030243
		public void OnTacticsUsed(MobileParty party, float xp)
		{
			if (xp > 0f)
			{
				DefaultSkillLevelingManager.OnPartySkillExercised(party, DefaultSkills.Tactics, xp, PartyRole.PartyLeader);
			}
		}
	}
}

```

添加

```cs
				if (party != null && party.ActualClan != null && party.ActualClan == Hero.MainHero.Clan) {
					xp *= 20f;
				}
```

# 修改标枪数量

修改 `crafting_pieces.xml`

```cs
		<BladeData
			stack_amount="5"
			physics_material="wood_weapon"
			body_name="bo_spear_b"
			holster_mesh="throwing_spear_quiver_2"
			holster_body_name="bo_throwing_spear_quiver_2"
			holster_mesh_length="94.6">
			<Thrust
				damage_type="Pierce"
				damage_factor="2.8" />
		</BladeData>
```

飞斧

```cs
		<BladeData
			stack_amount="3"
			blade_length="10.566"
			blade_width="19.257"
			physics_material="metal_weapon"
			body_name="bo_axe_longer_b"
			holster_mesh="throwing_axe_quiver_1">
			<Swing
				damage_type="Cut"
				damage_factor="2.9" />
		</BladeData>
```

`stack_amount="5"`改成37

# 玩家专属忠诚度

```cs
using System;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x0200021B RID: 539
	public partial class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel
	{
		// Token: 0x06001D29 RID: 7465 RVA: 0x000B2F48 File Offset: 0x000B1148
		private ExplainedNumber CalculateLoyaltyChangeInternal(Town town, bool includeDescriptions = false)
		{
			ExplainedNumber result = new ExplainedNumber(0f, includeDescriptions, null);
			this.GetSettlementLoyaltyChangeDueToFoodStocks(town, ref result);
			this.GetSettlementLoyaltyChangeDueToGovernorCulture(town, ref result);
			this.GetSettlementLoyaltyChangeDueToOwnerCulture(town, ref result);
			this.GetSettlementLoyaltyChangeDueToPolicies(town, ref result);
			this.GetSettlementLoyaltyChangeDueToProjects(town, ref result);
			this.GetSettlementLoyaltyChangeDueToIssues(town, ref result);
			this.GetSettlementLoyaltyChangeDueToSecurity(town, ref result);
			this.GetSettlementLoyaltyChangeDueToNotableRelations(town, ref result);
			this.GetSettlementLoyaltyChangeDueToGovernorPerks(town, ref result);
			this.GetSettlementLoyaltyChangeDueToLoyaltyDrift(town, ref result);
			if (town.Settlement.OwnerClan?.Leader?.IsHumanPlayerCharacter == true) {
				result.Add(10.0f, new TextObject("{=玩家专属忠诚度", null), null);
			}
			return result;
		}
	}
}

```

# 工坊铁匠铺生产顶级装备

修改 spworkshops.xml, 0.075改成10

```xml
		<Production
			conversion_speed="0.075">
			<Inputs>
				<Input
					input_item="iron" />
			</Inputs>
			<Outputs>
				<Output
					output="ItemCategory.ultra_armor" />
			</Outputs>
		</Production>
```

自己测试, 应该同理 `ranged_weapons`, 应该不要改 `light_armor` 和 `medium_armor` 和 `heavy_armor`

```xml
		<Production
			conversion_speed="0.33">
			<Inputs>
				<Input
					input_item="hardwood" />
			</Inputs>
			<Outputs>
				<Output
					output="ItemCategory.ranged_weapons"
					output_count="1" />
			</Outputs>
		</Production>

```

10感觉太快了4就行

# 修改流浪者 & 属性

流浪者上限, 修改 `clanTier + 3` 后的数字

```cs
using System;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000105 RID: 261
	public partial class DefaultClanTierModel : ClanTierModel
	{
		// Token: 0x0600170B RID: 5899 RVA: 0x0006AE4F File Offset: 0x0006904F
		private int GetCompanionLimitFromTier(int clanTier)
		{
			return clanTier + 3;
		}
	}
}
```

修改属性`sandboxcore_skill_sets.xml`

添加一个skillset然后复制id到`spspecialcharacters.xml`的skill_template

```cs
	<SkillSet
		id="spc_self">
		<skill
			id="OneHanded"
			value="275" />
		<skill
			id="TwoHanded"
			value="250" />
		<skill
			id="Polearms"
			value="275" />
		<skill
			id="Bow"
			value="275" />
		<skill
			id="Crossbow"
			value="275" />
		<skill
			id="Throwing"
			value="275" />
		<skill
			id="Riding"
			value="275" />
		<skill
			id="Athletics"
			value="275" />
		<skill
			id="Crafting"
			value="275" />
		<skill
			id="Scouting"
			value="275" />
		<skill
			id="Tactics"
			value="275" />
		<skill
			id="Roguery"
			value="275" />
		<skill
			id="Charm"
			value="275" />
		<skill
			id="Leadership"
			value="275" />
		<skill
			id="Trade"
			value="300" />
		<skill
			id="Steward"
			value="275" />
		<skill
			id="Medicine"
			value="275" />
		<skill
			id="Engineering"
			value="275" />
	</SkillSet>
```

修改 `spspecialcharacters.xml` 和 对应

特质:

```xml
		<Traits>
			<Trait
				id="Valor"
				value="1" />
			<Trait
				id="Honor"
				value="1" />
			<Trait
				id="Generosity"
				value="1" />
			<Trait
				id="Mercy"
				value="1" />
		</Traits>
```

`naval_characters.xml` 对应 `naval_skill_sets.xml`

```cs
	<SkillSet
		id="spc_self_naval">
		<skill
			id="OneHanded"
			value="275" />
		<skill
			id="TwoHanded"
			value="250" />
		<skill
			id="Polearms"
			value="275" />
		<skill
			id="Bow"
			value="275" />
		<skill
			id="Crossbow"
			value="275" />
		<skill
			id="Throwing"
			value="275" />
		<skill
			id="Riding"
			value="275" />
		<skill
			id="Athletics"
			value="275" />
		<skill
			id="Crafting"
			value="275" />
		<skill
			id="Scouting"
			value="275" />
		<skill
			id="Tactics"
			value="275" />
		<skill
			id="Roguery"
			value="275" />
		<skill
			id="Charm"
			value="275" />
		<skill
			id="Leadership"
			value="275" />
		<skill
			id="Trade"
			value="300" />
		<skill
			id="Steward"
			value="275" />
		<skill
			id="Medicine"
			value="275" />
		<skill
			id="Engineering"
			value="275" />
		<skill
			id="Mariner"
			value="275" />
		<skill
			id="Boatswain"
			value="275" />
		<skill
			id="Shipmaster"
			value="275" />
	</SkillSet>
```

还需要修改招募金额:

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x020001B9 RID: 441
	public class DefaultCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel
	{
		// Token: 0x06001A14 RID: 6676 RVA: 0x0009EA00 File Offset: 0x0009CC00
		public override int GetCompanionHiringPrice(Hero companion)
		{
			ExplainedNumber explainedNumber = new ExplainedNumber(0f, false, null);
			Settlement currentSettlement = companion.CurrentSettlement;
			Town town = (currentSettlement != null) ? currentSettlement.Town : null;
			if (town == null)
			{
				town = SettlementHelper.FindNearestTownToMobileParty(MobileParty.MainParty, MobileParty.NavigationType.All, null);
			}
			float num = 0f;
			for (EquipmentIndex equipmentIndex = EquipmentIndex.WeaponItemBeginSlot; equipmentIndex < EquipmentIndex.NumEquipmentSetSlots; equipmentIndex++)
			{
				EquipmentElement itemRosterElement = companion.CharacterObject.Equipment[equipmentIndex];
				if (itemRosterElement.Item != null)
				{
					num += (float)town.GetItemPrice(itemRosterElement, null, false);
				}
			}
			for (EquipmentIndex equipmentIndex2 = EquipmentIndex.WeaponItemBeginSlot; equipmentIndex2 < EquipmentIndex.NumEquipmentSetSlots; equipmentIndex2++)
			{
				EquipmentElement itemRosterElement2 = companion.CharacterObject.FirstCivilianEquipment[equipmentIndex2];
				if (itemRosterElement2.Item != null)
				{
					num += (float)town.GetItemPrice(itemRosterElement2, null, false);
				}
			}
			explainedNumber.Add(num / 2f, null, null);
			explainedNumber.Add((float)(companion.CharacterObject.Level * 10), null, null);
			if (Hero.MainHero.IsPartyLeader && Hero.MainHero.GetPerkValue(DefaultPerks.Steward.PaidInPromise))
			{
				explainedNumber.AddFactor(DefaultPerks.Steward.PaidInPromise.PrimaryBonus, null);
			}
			if (Hero.MainHero.PartyBelongedTo != null)
			{
				PerkHelper.AddPerkBonusForParty(DefaultPerks.Trade.GreatInvestor, Hero.MainHero.PartyBelongedTo, false, ref explainedNumber, false);
			}
			return (int)explainedNumber.ResultNumber;
		}
	}
}

```

改成

```cs
			explainedNumber.Add(num / 10000f, null, null);
			explainedNumber.Add((float)((double)companion.CharacterObject.Level * 0.01), null, null);
```

```cs
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.CampaignBehaviors
{
	// Token: 0x02000731 RID: 1841
	public partial class CompanionsCampaignBehavior : CampaignBehaviorBase
	{
		// Token: 0x17001484 RID: 5252
		// (get) Token: 0x0600564C RID: 22092
		private float _desiredTotalCompanionCount
		{
			get
			{
				return (float)Town.AllTowns.Count * 0.6f;
			}
		}
	}
}

0.6f 改成 1f

```

# 防止难产

```cs
using System;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000208 RID: 520
	public partial class DefaultPregnancyModel : PregnancyModel
	{
		// Token: 0x170006EA RID: 1770
		// (get) Token: 0x06001CAA RID: 7338 RVA: 0x00011F9A File Offset: 0x0001019A
		public override float MaternalMortalityProbabilityInLabor
		{
			get
			{
				return 0.015f;
			}
		}
	}
}

```

改成0f

怀孕惩罚:

```cs
using System;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000140 RID: 320
	public partial class DefaultPregnancyModel : PregnancyModel
	{
		// Token: 0x0600196D RID: 6509
		public override float GetDailyChanceOfPregnancyForHero(Hero hero)
		{
			int num = hero.Children.Count + 1;
			float num2 = (float)(4 + 4 * hero.Clan.Tier);
			int count = hero.Clan.AliveLords.Count;
			float num3 = (hero != Hero.MainHero && hero.Spouse != Hero.MainHero) ? Math.Min(1f, (2f * num2 - (float)count) / num2) : 1f;
			float num4 = (1.2f - (hero.Age - 18f) * 0.04f) / (float)(num * num) * 0.12f * num3;
			float baseNumber = (hero.Spouse != null && this.IsHeroAgeSuitableForPregnancy(hero)) ? num4 : 0f;
			ExplainedNumber explainedNumber = new ExplainedNumber(baseNumber, false, null);
			if (hero.GetPerkValue(DefaultPerks.Charm.Virile) || hero.Spouse.GetPerkValue(DefaultPerks.Charm.Virile))
			{
				explainedNumber.AddFactor(DefaultPerks.Charm.Virile.PrimaryBonus, DefaultPerks.Charm.Virile.Name);
			}
			return explainedNumber.ResultNumber;
		}
	}
}
```

尝试修改成:

```cs
int num = 1;
float num3 = 1f;
float num4 = 1.2f / (float)(num * num) * 0.12f * num3;
```

# 防止捐兵

```cs
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;

namespace TaleWorlds.CampaignSystem.CampaignBehaviors
{
	// Token: 0x020003F2 RID: 1010
	public partial class GarrisonTroopsCampaignBehavior : CampaignBehaviorBase
	{
		// Token: 0x06003EED RID: 16109 RVA: 0x0011B6FC File Offset: 0x001198FC
		private void LeaveTroopsToGarrison(MobileParty mobileParty, Settlement settlement, int numberOfTroopsToLeave, bool archersAreHighPriority)
		{
			if (mobileParty.LeaderHero.Clan != null & mobileParty.LeaderHero.Clan == Clan.PlayerClan){
				return;
			}
			TroopRoster troopRoster = TroopRoster.CreateDummyTroopRoster();
			for (int i = 0; i < numberOfTroopsToLeave; i++)
			{
				CharacterObject asuitableCharacterFromPartyRosterByWeight = this.GetASuitableCharacterFromPartyRosterByWeight(mobileParty.MemberRoster, archersAreHighPriority);
				if (asuitableCharacterFromPartyRosterByWeight == null)
				{
					break;
				}
				foreach (TroopRosterElement troopRosterElement in mobileParty.MemberRoster.GetTroopRoster())
				{
					if (troopRosterElement.Character == asuitableCharacterFromPartyRosterByWeight)
					{
						if (settlement.Town.GarrisonParty == null)
						{
							settlement.AddGarrisonParty();
						}
						if (troopRosterElement.WoundedNumber > 0)
						{
							settlement.Town.GarrisonParty.MemberRoster.AddToCounts(asuitableCharacterFromPartyRosterByWeight, 1, false, 1, 0, true, -1);
							troopRoster.AddToCounts(asuitableCharacterFromPartyRosterByWeight, 1, false, 1, 0, true, -1);
							mobileParty.MemberRoster.AddToCounts(asuitableCharacterFromPartyRosterByWeight, -1, false, -1, 0, true, -1);
							break;
						}
						settlement.Town.GarrisonParty.MemberRoster.AddToCounts(asuitableCharacterFromPartyRosterByWeight, 1, false, 0, 0, true, -1);
						troopRoster.AddToCounts(asuitableCharacterFromPartyRosterByWeight, 1, false, 0, 0, true, -1);
						mobileParty.MemberRoster.AddToCounts(asuitableCharacterFromPartyRosterByWeight, -1, false, 0, 0, true, -1);
						break;
					}
				}
			}
			if (troopRoster.Count > 0)
			{
				CampaignEventDispatcher.Instance.OnTroopGivenToSettlement(mobileParty.LeaderHero, settlement, troopRoster);
				this.ApplyKingdomInfluenceBonusForLeavingTroopToGarrison(mobileParty, settlement, troopRoster);
			}
		}
	}
}

```

# 技能

```cs

using System;
using TaleWorlds.Core;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem
{
	// Token: 0x020000F2 RID: 242
	public partial class DefaultSkillEffects
	{
		// Token: 0x060012BF RID: 4799 RVA: 0x00084D4C File Offset: 0x00082F4C
		private void InitializeAll()
		{
			this._effectOneHandedSpeed.Initialize(new TextObject("{=hjxRvb9l}One handed weapon speed: +{a0}%", null), DefaultSkills.OneHanded, PartyRole.Personal, 0.0007f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectOneHandedDamage.Initialize(new TextObject("{=baUFKAbd}One handed weapon damage: +{a0}%", null), DefaultSkills.OneHanded, PartyRole.Personal, 0.0015f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectTwoHandedSpeed.Initialize(new TextObject("{=Np94rYMz}Two handed weapon speed: +{a0}%", null), DefaultSkills.TwoHanded, PartyRole.Personal, 0.0006f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectTwoHandedDamage.Initialize(new TextObject("{=QkbbLb4v}Two handed weapon damage: +{a0}%", null), DefaultSkills.TwoHanded, PartyRole.Personal, 0.0016f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectPolearmSpeed.Initialize(new TextObject("{=2ATI9qVM}Polearm weapon speed: +{a0}%", null), DefaultSkills.Polearm, PartyRole.Personal, 0.0006f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectPolearmDamage.Initialize(new TextObject("{=17cIGVQE}Polearm weapon damage: +{a0}%", null), DefaultSkills.Polearm, PartyRole.Personal, 0.0007f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectBowDamage.Initialize(new TextObject("{=RUZHJMQO}Bow Damage: +{a0}%", null), DefaultSkills.Bow, PartyRole.Personal, 0.0011f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectBowAccuracy.Initialize(new TextObject("{=sQCS90Wq}Bow Accuracy: +{a0}%", null), DefaultSkills.Bow, PartyRole.Personal, -0.0009f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectThrowingSpeed.Initialize(new TextObject("{=Z0CoeojG}Thrown weapon speed: +{a0}%", null), DefaultSkills.Throwing, PartyRole.Personal, 0.0007f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectThrowingDamage.Initialize(new TextObject("{=TQMGppEk}Thrown weapon damage: +{a0}%", null), DefaultSkills.Throwing, PartyRole.Personal, 0.0006f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectThrowingAccuracy.Initialize(new TextObject("{=SfKrjKuO}Thrown weapon accuracy: +{a0}%", null), DefaultSkills.Throwing, PartyRole.Personal, -0.0006f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectCrossbowReloadSpeed.Initialize(new TextObject("{=W0Zu4iDz}Crossbow reload speed: +{a0}%", null), DefaultSkills.Crossbow, PartyRole.Personal, 0.0007f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectCrossbowAccuracy.Initialize(new TextObject("{=JwWnpD40}Crossbow accuracy: +{a0}%", null), DefaultSkills.Crossbow, PartyRole.Personal, -0.0005f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectHorseSpeed.Initialize(new TextObject("{=Y07OcP1T}Horse speed: +{a0}", null), DefaultSkills.Riding, PartyRole.Personal, 0.002f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectHorseManeuver.Initialize(new TextObject("{=AahNTeXY}Horse maneuver: +{a0}", null), DefaultSkills.Riding, PartyRole.Personal, 0.0004f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectMountedWeaponDamagePenalty.Initialize(new TextObject("{=0dbwEczK}Mounted weapon damage penalty: {a0}%", null), DefaultSkills.Riding, PartyRole.Personal, 0.002f, EffectIncrementType.AddFactor, -0.2f, float.MinValue, 0f);
			this._effectMountedWeaponSpeedPenalty.Initialize(new TextObject("{=oE5etyy0}Mounted weapon speed & reload penalty: {a0}%", null), DefaultSkills.Riding, PartyRole.Personal, 0.003f, EffectIncrementType.AddFactor, -0.3f, float.MinValue, 0f);
			this._effectDismountResistance.Initialize(new TextObject("{=kbHJVxAo}Dismount resistance: {a0}% of max. hitpoints", null), DefaultSkills.Riding, PartyRole.Personal, 0.001f, EffectIncrementType.AddFactor, 0.4f, float.MinValue, float.MaxValue);
			this._effectAthleticsSpeedFactor.Initialize(new TextObject("{=rgb6vdon}Running speed increased by {a0}%", null), DefaultSkills.Athletics, PartyRole.Personal, 0.001f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectAthleticsWeightFactor.Initialize(new TextObject("{=WaUuhxwv}Weight penalty reduced by: {a0}%", null), DefaultSkills.Athletics, PartyRole.Personal, -0.001f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectKnockBackResistance.Initialize(new TextObject("{=TyjDHQUv}Knock back resistance: {a0}% of max. hitpoints", null), DefaultSkills.Athletics, PartyRole.Personal, 0.001f, EffectIncrementType.AddFactor, 0.15f, float.MinValue, float.MaxValue);
			this._effectKnockDownResistance.Initialize(new TextObject("{=tlNZIH3l}Knock down resistance: {a0}% of max. hitpoints", null), DefaultSkills.Athletics, PartyRole.Personal, 0.001f, EffectIncrementType.AddFactor, 0.4f, float.MinValue, float.MaxValue);
			this._effectSmithingLevel.Initialize(new TextObject("{=ImN8Cfk6}Max difficulty of weapon that can be smithed without penalty: {a0}", null), DefaultSkills.Crafting, PartyRole.Personal, 1f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectTacticsAdvantage.Initialize(new TextObject("{=XO3SOlZx}Simulation advantage: +{a0}%", null), DefaultSkills.Tactics, PartyRole.Personal, 0.001f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectTacticsTroopSacrificeReduction.Initialize(new TextObject("{=VHdyQYKI}Decrease the sacrificed troop number when trying to get away +{a0}%", null), DefaultSkills.Tactics, PartyRole.Personal, -0.001f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectTrackingRadius.Initialize(new TextObject("{=kqJipMqc}Track detection radius +{a0}%", null), DefaultSkills.Scouting, PartyRole.Scout, 0.1f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectTrackingSpottingDistance.Initialize(new TextObject("{=lbrOAvKj}Spotting distance +{a0}%", null), DefaultSkills.Scouting, PartyRole.Scout, 0.06f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectTrackingTrackInformation.Initialize(new TextObject("{=uNls3bOP}Track information level: {a0}", null), DefaultSkills.Scouting, PartyRole.Scout, 0.04f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectRogueryLootBonus.Initialize(new TextObject("{=bN3bLDb2}Battle Loot +{a0}%", null), DefaultSkills.Roguery, PartyRole.PartyLeader, 0.0025f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectCharmRelationBonus.Initialize(new TextObject("{=c5dsio8Q}Relation increase with NPCs +{a0}%", null), DefaultSkills.Charm, PartyRole.Personal, 0.005f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectTradePenaltyReduction.Initialize(new TextObject("{=uq7JwT1Z}Trade penalty Reduction +{a0}%", null), DefaultSkills.Trade, PartyRole.PartyLeader, 0.002f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectLeadershipMoraleBonus.Initialize(new TextObject("{=n3bFiuVu}Increase morale of the parties under your command +{a0}", null), DefaultSkills.Leadership, PartyRole.Personal, 0.1f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectLeadershipGarrisonSizeBonus.Initialize(new TextObject("{=cSt26auo}Increase garrison size by +{a0}", null), DefaultSkills.Leadership, PartyRole.Personal, 0.2f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectSurgeonSurvivalBonus.Initialize(new TextObject("{=w4BzNJYl}Casualty survival chance +{a0}%", null), DefaultSkills.Medicine, PartyRole.Surgeon, 0.25f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectHealingRateBonusForHeroes.Initialize(new TextObject("{=fUvs4g40}Healing rate increase for heroes +{a0}%", null), DefaultSkills.Medicine, PartyRole.Surgeon, 0.005f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectHealingRateBonusForRegulars.Initialize(new TextObject("{=A310vHqJ}Healing rate increase for troops +{a0}%", null), DefaultSkills.Medicine, PartyRole.Surgeon, 0.01f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectGovernorHealingRateBonus.Initialize(new TextObject("{=6mQGst9s}Healing rate increase +{a0}%", null), DefaultSkills.Medicine, PartyRole.Governor, 0.001f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectSiegeEngineProductionBonus.Initialize(new TextObject("{=spbYlf0y}Faster siege engine production +{a0}%", null), DefaultSkills.Engineering, PartyRole.Engineer, 0.001f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectTownProjectBuildingBonus.Initialize(new TextObject("{=2paRqO8u}Faster building production +{a0}%", null), DefaultSkills.Engineering, PartyRole.Governor, 0.0025f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectStewardPartySizeBonus.Initialize(new TextObject("{=jNDUXetG}Increase party size by +{a0}", null), DefaultSkills.Steward, PartyRole.Quartermaster, 0.25f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
			this._effectSneakDamage.Initialize(new TextObject("{=vDieFIKM}Sneak attack damage +{a0}%", null), DefaultSkills.Roguery, PartyRole.Personal, 0.002f, EffectIncrementType.AddFactor, 0.5f, float.MinValue, float.MaxValue);
			this._effectCrouchedSpeed.Initialize(new TextObject("{=sTgjLrPX}Crouched speed +{a0}%", null), DefaultSkills.Roguery, PartyRole.Personal, 0.0005f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
			this._effectNoiseSuppression.Initialize(new TextObject("{=GzLd3ca9}Noise suppression -{a0}%", null), DefaultSkills.Roguery, PartyRole.Personal, 0.0025f, EffectIncrementType.AddFactor, 0f, float.MinValue, float.MaxValue);
		}
	}
}
```

把

```cs
			this._effectSurgeonSurvivalBonus.Initialize(new TextObject("{=w4BzNJYl}Casualty survival chance +{a0}%", null), DefaultSkills.Medicine, PartyRole.Surgeon, 0.25f, EffectIncrementType.Add, 0f, float.MinValue, float.MaxValue);
```

从0.0025f改成0.25f

# 修改工坊上限

```cs
using System;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.Core;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x0200024D RID: 589
	public partial class DefaultWorkshopModel : WorkshopModel
	{
		// Token: 0x06001EA9 RID: 7849 RVA: 0x00012E2D File Offset: 0x0001102D
		public override int GetMaxWorkshopCountForClanTier(int tier)
		{
			return tier + 1;
		}
	}
}
```

1改成224试试

# 修改队伍数量

```cs
using System;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x020001B5 RID: 437
	public partial class DefaultClanTierModel : ClanTierModel
	{
		// Token: 0x060019F5 RID: 6645 RVA: 0x0009D9B0 File Offset: 0x0009BBB0
		public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)
		{
			ExplainedNumber explainedNumber = new ExplainedNumber(0f, false, null);
			if (!clan.IsMinorFaction)
			{
				if (clanTierToCheck < 3)
				{
					explainedNumber.Add(1f, null, null);
				}
				else if (clanTierToCheck < 5)
				{
					explainedNumber.Add(2f, null, null);
				}
				else
				{
					explainedNumber.Add(3f, null, null);
				}
			}
			else
			{
				explainedNumber.Add(MathF.Clamp((float)clanTierToCheck, 1f, 4f), null, null);
			}
			this.AddPartyLimitPerkEffects(clan, ref explainedNumber);
			return MathF.Round(explainedNumber.ResultNumber);
		}
	}
}

```

1f, 4f改成10f试试

# 修改队伍规模

```cs
using System;
using System.Collections.Generic;
using Helpers;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x020001FD RID: 509
	public partial class DefaultPartySizeLimitModel : PartySizeLimitModel
	{
		// Token: 0x06001C55 RID: 7253 RVA: 0x000AD844 File Offset: 0x000ABA44
		private ExplainedNumber CalculateMobilePartyMemberSizeLimit(MobileParty party, bool includeDescriptions = false)
		{
			ExplainedNumber result = new ExplainedNumber(20f, includeDescriptions, this._baseSizeText);
			if (party.LeaderHero != null && party.LeaderHero.Clan != null && !party.IsCaravan)
			{
				this.CalculateBaseMemberSize(party.LeaderHero, party.MapFaction, party.ActualClan, ref result);
				SkillHelper.AddSkillBonusForParty(DefaultSkillEffects.StewardPartySizeBonus, party, ref result);
				if (DefaultPartySizeLimitModel._addAdditionalPartySizeAsCheat && party.IsMainParty && Game.Current.CheatMode)
				{
					result.Add(5000f, new TextObject("{=!}Additional size from extra party cheat", null), null);
				}
			}
			else if (party.IsCaravan)
			{
				if (party.Party.Owner == Hero.MainHero)
				{
					int num = party.CaravanPartyComponent.IsElite ? 30 : 10;
					if (party.CaravanPartyComponent.CanHaveNavalNavigationCapability)
					{
						num = (party.CaravanPartyComponent.IsElite ? 46 : 33);
					}
					result.Add((float)num, this._randomSizeBonusTemporary, null);
				}
				else
				{
					Hero owner = party.Party.Owner;
					if (owner != null && owner.IsNotable)
					{
						result.Add((float)(10 * ((party.Party.Owner.Power < 100f) ? 1 : ((party.Party.Owner.Power < 200f) ? 2 : 3))), this._randomSizeBonusTemporary, null);
					}
				}
			}
			else if (party.IsVillager)
			{
				result.Add(40f, this._randomSizeBonusTemporary, null);
			}
			if (party.IsCurrentlyAtSea)
			{
				foreach (Ship ship in party.Ships)
				{
					result.AddFactor(ship.CrewCapacityBonusFactor, ship.Name);
				}
			}
			return result;
		}
	}
}
```

把 20f 改成500f试试

# 战死成就

```cs
using System;
using Helpers;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

namespace TaleWorlds.CampaignSystem.GameComponents
{
	// Token: 0x02000132 RID: 306
	public partial class DefaultPartyHealingModel : PartyHealingModel
	{
		// Token: 0x060018E6 RID: 6374 RVA: 0x0007A208 File Offset: 0x00078408
		public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)
		{
			if ((damageType == DamageTypes.Blunt && !canDamageKillEvenIfBlunt) || (character.IsHero && CampaignOptions.BattleDeath == CampaignOptions.Difficulty.VeryEasy) || (character.IsPlayerCharacter && CampaignOptions.BattleDeath == CampaignOptions.Difficulty.Easy))
			{
				return 1f;
			}
			ExplainedNumber explainedNumber = new ExplainedNumber(1f, false, null);
			float result;
			if (((party != null) ? party.MobileParty : null) != null)
			{
				MobileParty mobileParty = party.MobileParty;
				this.AddSurgeonSurvivalBonus(mobileParty, ref explainedNumber);
				if (((enemyParty != null) ? enemyParty.MobileParty : null) != null && enemyParty.MobileParty.HasPerk(DefaultPerks.Medicine.DoctorsOath, false))
				{
					DefaultPartyHealingModel.AddDoctorsOathSkillBonusForParty(enemyParty.MobileParty, ref explainedNumber);
					SkillLevelingManager.OnSurgeryApplied(enemyParty.MobileParty, false, character.Tier);
				}
				explainedNumber.Add((float)character.Level * 0.02f, null, null);
				if (!character.IsHero && party.MapEvent != null && character.Tier < 3)
				{
					PerkHelper.AddPerkBonusForParty(DefaultPerks.Medicine.PhysicianOfPeople, party.MobileParty, false, ref explainedNumber, party.MobileParty.IsCurrentlyAtSea);
				}
				if (character.IsHero)
				{
					explainedNumber.Add(character.GetTotalArmorSum(Equipment.EquipmentType.Battle) * 0.01f, null, null);
					explainedNumber.Add(character.Age * -0.01f, null, null);
					explainedNumber.AddFactor(50f, null);
				}
				ExplainedNumber explainedNumber2 = new ExplainedNumber(1f / explainedNumber.ResultNumber, false, null);
				if (character.IsHero)
				{
					if (party.IsMobile && party.MobileParty.HasPerk(DefaultPerks.Medicine.CheatDeath, true))
					{
						explainedNumber2.AddFactor(DefaultPerks.Medicine.CheatDeath.SecondaryBonus, DefaultPerks.Medicine.CheatDeath.Name);
					}
					if (character.HeroObject.Clan == Clan.PlayerClan)
					{
						float clanMemberDeathChanceMultiplier = Campaign.Current.Models.DifficultyModel.GetClanMemberDeathChanceMultiplier();
						if (!clanMemberDeathChanceMultiplier.ApproximatelyEqualsTo(0f, 1E-05f))
						{
							explainedNumber2.AddFactor(clanMemberDeathChanceMultiplier, GameTexts.FindText("str_game_difficulty", null));
						}
					}
				}
				result = 1f - MBMath.ClampFloat(explainedNumber2.ResultNumber, 0f, 1f);
			}
			else if (character.IsHero && character.HeroObject.IsPrisoner)
			{
				result = 1f - character.Age * 0.0035f;
			}
			else if (explainedNumber.ResultNumber.ApproximatelyEqualsTo(0f, 1E-05f))
			{
				result = 0f;
			}
			else
			{
				result = 1f - 1f / explainedNumber.ResultNumber;
			}
			return result;
		}
	}
}
```

直接return 0f
