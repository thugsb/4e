json_23_shaman = {"":null,"D20Rules":{"@game-system":"D&D4E","UpdateInfo":{"Version":{"$":"1.03"},"Filename":{"$":"23-shaman.part"},"PartAddress":{"$":"http://cbloader.com/sorted/23-shaman.part"},"VersionAddress":{"$":"http://cbloader.com/sorted/23-shaman.txt"}},"":null,"Changelog":{"$":"Updated 13-July-2011 File Released.\n Updated 13-July-2011 Added Phrenic Master and powers.\n Updated 01-August-2011 Moved main class from Dark Sun part file.\n Updated 18-May-2012 DSH added."},"RulesElement":[{"@name":"Shaman","@type":"Class","@internal-id":"ID_FMP_CLASS_147","@source":"Player's Handbook 2","@revision-date":"10/12/2010 1:40:25 PM","Flavor":{"$":"“The spirits surround us, guide us, and hold all the knowledge of the world.”"},"specific":[{"@name":"Key Abilities","$":"Wisdom, Constitution, Intelligence"},{"@name":"Implements","$":"Totems"},{"@name":"Armor Proficiencies","$":"Cloth, leather"},{"@name":"Weapon Proficiencies","$":"Simple melee, longspear"},{"@name":"Bonus to Defense","$":"+1 Fortitude, +1 Will"},{"@name":"Hit Points at 1st Level","$":"12+ Constitution Score"},{"@name":"Hit Points per Level Gained","$":"5"},{"@name":"Healing Surges","$":"7+ Constitution Modifier"},{"@name":"Trained Skills","$":"Nature. From the class skills list below, choose 3 more trained skills at 1st level."},{"@name":"Class Skills","$":"Arcana (Int), Athletics (Str), Endurance (Con), Heal (Wis), History (Int), Insight (Wis), Nature (Wis), Perception (Wis), Religion (Int)"},{"@name":"Build Options","$":"Animist Shaman, Bear Shaman, Eagle Shaman, Panther Shaman, World Speaker Shaman"},{"@name":"_PARSED_CLASS_FEATURE","$":"Companion Spirit, Healing Spirit, Speak with Spirits"},{"@name":"Role","$":"Leader. Your spirit companion bolsters and heals your nearby allies, and you can evoke other spirits to aid your allies and harm your foes. Depending on your choice of class features and powers, you lean toward either defender or striker as a secondary role."},{"@name":"Power Source","$":"Primal. The spirits of the natural world give you power and manifest on your behalf."},{"@name":"Creating","$":"All shamans rely on Wisdom, and they also benefit from a high Constitution or Intelligence. You can choose any shaman powers you like for your character, though many shamans favor one of two different builds, letting their power choices be shaped by the form of their spirit companions."},{"@name":"Class Features","$":"Each shaman has the powers call spirit companion, healing spirit, and speak with spirits. Your choice of Companion Spirit determines whether you have the power spirit's fangs or spirit's shield."},{"@name":"Supplemental","$":"Shaman Overview\nYou lead your adventuring party from a position of relative safety, sending your spirit companion to the front of the battle while you linger behind. Your powers fall into two broad categories: melee attacks your spirit companion makes, and ranged attacks. Your daily powers include a number of conjurations and zones, representing your ability to call on additional spirits for aid.\n\nReligion\nShamans draw their power from the primal power source and therefore don't usually worship gods. They view themselves as agents—not servants or masters—of the spirits of nature and instruct others how to live their lives in harmony with those spirits. Like druids, shamans call on the spirits to witness significant events but don't worship them."},{"@name":"Implement","$":"Shamans use totems carved to resemble the spirits they most commonly call upon, particularly their spirit companions. When you wield a magic totem, you can add its enhancement bonus to the attack rolls and the damage rolls of shaman powers and shaman paragon path powers that have the implement keyword. Without an implement, you can still use these powers."},{"@name":"Powers","$":"Your powers evoke primal spirits that you view as partners and revered elders. Many of your powers channel primal energy through your spirit companion and have the spirit keyword, including powers that have “spirit” as part of the range. Those powers treat your spirit companion's space as the origin square for the power, so “melee spirit 1” means you can target a creature adjacent to your spirit.\nOther shaman powers call on other spirits to intervene in the course of battle on your behalf, and many of those spirits then channel their energy through your spirit companion either to benefit allies or to harm enemies."},{"@name":"Power Name","$":"Evocations"},{"@name":"_RoleElement","$":"ID_FMP_ROLE_2"},{"@name":"_PowerSourceElement","$":"ID_FMP_POWER_SOURCE_4"},{"@name":"Short Description","$":"You command the services of a faithful spirit guide, using it to inspire allies and destroy enemies."}],"rules":{"grant":{"@name":"ID_INTERNAL_GRANTS_SHAMAN","@type":"Grants"},"select":[{"@type":"Power","@number":"1","@Category":"$$CLASS,at-will,1"},{"@type":"Build","@number":"1","@Category":"$$CLASS","@optional":"true"},{"@type":"Skill Training","@number":"3","@Category":"ID_FMP_CLASS_147"}],"textstring":{"@name":"_CLASSNAME","@value":"ID_FMP_CLASS_147"},"statadd":[{"@name":"_LEVEL-ONE-HPS","@value":"+12"},{"@name":"_PER-LEVEL-HPS","@value":"+5"},{"@name":"Healing Surges","@value":"+7"},{"@name":"Fortitude Defense Class Bonus","@value":"+1"},{"@name":"Will Defense Class Bonus","@value":"+1"}]},"$":"Shamans are inspiring and dangerous battle leaders. They command powerful spirit guides, and through them lead their allies. These nature spirits bolster their allies' attacks and offer protection and healing when needed.\nIn a rite of passage or initiation, you pledged yourself to the spirits, to be their voice and hands in the world. Through ancient song and sacred ceremony, you have called a powerful spirit companion to your side. The primal spirits of nature affirm your will, guide the actions of your allies, and deal mighty attacks against your foes. You might be a venerable advisor to a tribal leader, a young traveler seeking to bring tales of a wider world back to your people, or a scholar devoted to the pursuit of nearly forgotten lore.\nThe spirits and voices of nature guide your every step. Their power flows through you, calling you to lead, to fight, and to triumph."},{"@name":"Phrenic Master","@type":"Paragon Path","@internal-id":"ID_FMP_PARAGON_PATH_807","@source":"Dragon Magazine 394","@revision-date":"x/x/x","Prereqs":{"$":"Call Spirit Companion power"},"print-prereqs":{"$":"Call Spirit Companion power"},"Flavor":{"$":"Kneel before my intellect and tremble."},"specific":[{"@name":"Class Features","$":"ID_FMP_CLASS_FEATURE_3514, ID_FMP_CLASS_FEATURE_3515, ID_FMP_CLASS_FEATURE_3516"},{"@name":"Powers","$":"ID_FMP_POWER_13762,ID_FMP_POWER_13764,ID_FMP_POWER_13763"},{"@name":"_DisplayPowers","$":"ID_FMP_POWER_13762,ID_FMP_POWER_13764,ID_FMP_POWER_13763"}],"rules":{"grant":[{"@name":"ID_FMP_CLASS_FEATURE_3514","@type":"Class Feature","@Level":"11"},{"@name":"ID_FMP_CLASS_FEATURE_3515","@type":"Class Feature","@Level":"11"},{"@name":"ID_FMP_CLASS_FEATURE_3516","@type":"Class Feature","@Level":"16"},{"@name":"ID_FMP_POWER_13762","@type":"Power","@Level":"11"},{"@name":"ID_FMP_POWER_13764","@type":"Power","@Level":"12"},{"@name":"ID_FMP_POWER_13763","@type":"Power","@Level":"20"}]},"$":"Your mind is the gateway through which you imprint your will upon the world. In your studies, you have searched for more powerful ways of asserting that will. By choosing the mind flayer as your totem creature, you've gained some of the illithid's natural prowess at bending the wills of lesser beings.\n  This connection has taught you hidden secrets of mental dominion, and you've found that they can also be applied to the shamanic practice of summoning spirit companions. In order to bind your new spirit companion to your will, you had to prove your dominance over it. Your spirit companion was cowed, to the point that it is more slave than friend. Even so, you know that if you let your guard down for a moment, the slave will try to become the master."},{"@name":"Spiteful Retaliation","@type":"Class Feature","@internal-id":"ID_FMP_CLASS_FEATURE_3514","@source":"Dragon Magazine 394","@revision-date":"6/2/2011 1:18:35 PM","Category":{"$":"11"},"specific":[{"@name":"Short Description","$":"Whenever an enemy attacks your spirit companion and causes it to disappear, that enemy is dazed until the end of its next turn."},{"@name":"Level","$":"11"}],"$":"Whenever an enemy attacks your spirit companion and causes it to disappear, that enemy is dazed until the end of its next turn."},{"@name":"Enervating Action","@type":"Class Feature","@internal-id":"ID_FMP_CLASS_FEATURE_3515","@source":"Dragon Magazine 394","@revision-date":"6/2/2011 1:18:35 PM","Category":{"$":"11"},"specific":[{"@name":"Short Description","$":"Inflict -2 save penalty with action point attack"},{"@name":"Level","$":"11"}],"rules":{"textstring":{"@name":"Action Point","@value":"When you spend an action point to make an attack, any enemy hit with the attack takes a -2 penalty to saving throws against any effects the attack imposes. Enemies hit by the attack grant combat advantage until the end of your next turn."}},"$":"When you spend an action point to make an attack, any enemy hit with the attack takes a -2 penalty to saving throws against any effects the attack imposes. Enemies hit by the attack grant combat advantage until the end of your next turn."},{"@name":"Twin-Souled Projection","@type":"Class Feature","@internal-id":"ID_FMP_CLASS_FEATURE_3516","@source":"Dragon Magazine 394","@revision-date":"6/2/2011 1:18:35 PM","Category":{"$":"16"},"specific":[{"@name":"Short Description","$":"Use spirit companion as origin for ranged attacks."},{"@name":"Level","$":"16"}],"$":"You can choose to use your spirit companion's square as the origin square for any of your ranged or area powers. If your spirit companion is not adjacent to any enemies, using a power in this manner does not provoke opportunity attacks."},{"@name":"Intellect Pummel","@type":"Power","@internal-id":"ID_FMP_POWER_13762","@source":"Dragon Magazine 394","@revision-date":"x/x/x","Category":{"$":"ID_INTERNAL_CATEGORY_ATTACK,ID_INTERNAL_CATEGORY_ENCOUNTER,ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE,ID_FMP_PARAGON_PATH_807,ID_FMP_CATEGORY_25,ID_FMP_CATEGORY_33,ID_FMP_CATEGORY_35,ID_FMP_CATEGORY_16,ID_FMP_CATEGORY_6,ID_INTERNAL_CATEGORY_STANDARD_ACTION,11"},"Prereqs":{"$":"Phrenic Master"},"Flavor":{"$":"Your attack may not be as potent as an illithid's mind blast, but you're satisfied to see your foes stumble about at your whim."},"specific":[{"@name":"Power Usage","$":"Encounter"},{"@name":"Display","$":"Phrenic Master Attack 11"},{"@name":"Keywords","$":"Psionic, Primal, Implement, Charm, Psychic"},{"@name":"Action Type","$":"Standard action"},{"@name":"Attack Type","$":"Close blast 5"},{"@name":"Target","$":"Each creature in blast"},{"@name":"Attack","$":"Wisdom vs. Will"},{"@name":"Hit","$":"2d6 + Wisdom modifier psychic damage, and the target is dazed until the end of your next turn."},{"@name":"Effect","$":"You slide each target 2 squares."},{"@name":"Special","$":"You can use your spirit companion's square as the origin for this attack."},{"@name":"Class","$":"ID_FMP_PARAGON_PATH_807"},{"@name":"Level","$":"11"},{"@name":"Power Type","$":"Attack"}]},{"@name":"Minion's Shield","@type":"Power","@internal-id":"ID_FMP_POWER_13764","@source":"Dragon Magazine 394","@revision-date":"x/x/x","Category":{"$":"ID_INTERNAL_CATEGORY_UTILITY,ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE,ID_FMP_PARAGON_PATH_807,ID_FMP_CATEGORY_33,ID_FMP_CATEGORY_35,ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT,12"},"Prereqs":{"$":"Phrenic Master"},"Flavor":{"$":"As the attack speeds towards you, you decide that your spirit companion should take the blow instead."},"specific":[{"@name":"Power Usage","$":"Encounter"},{"@name":"Display","$":"Phrenic Master Utility 12"},{"@name":"Keywords","$":"Primal, Psionic"},{"@name":"Action Type","$":"Immediate interrupt"},{"@name":"Attack Type","$":"Personal"},{"@name":"Requirement","$":"Your spirit companion must be adjacent to you."},{"@name":"Trigger","$":"You take damage from an attack."},{"@name":"Effect","$":"Your spirit companion takes the damage instead of you."},{"@name":"Class","$":"ID_FMP_PARAGON_PATH_807"},{"@name":"Level","$":"12"},{"@name":"Power Type","$":"Utility"}]},{"@name":"Total Subjugation","@type":"Power","@internal-id":"ID_FMP_POWER_13763","@source":"Dragon Magazine 394","@revision-date":"x/x/x","Category":{"$":"ID_INTERNAL_CATEGORY_ATTACK,ID_INTERNAL_CATEGORY_DAILY,ID_INTERNAL_CATEGORY_DAILY_USAGE,ID_FMP_PARAGON_PATH_807,ID_FMP_CATEGORY_25,ID_FMP_CATEGORY_33,ID_FMP_CATEGORY_35,ID_FMP_CATEGORY_57,ID_INTERNAL_CATEGORY_MINOR_ACTION,ID_INTERNAL_CATEGORY_MISS,20"},"Prereqs":{"$":"Phrenic Master"},"Flavor":{"$":"Your spirit companion engulfs your enemy completely, controlling its movement as you control its mind."},"specific":[{"@name":"Power Usage","$":"Daily"},{"@name":"Display","$":"Phrenic Master Attack 20"},{"@name":"Keywords","$":"Primal, Psionic, Implement, Spirit"},{"@name":"Action Type","$":"Standard Action"},{"@name":"Attack Type","$":"Melee spirit 1"},{"@name":"Target","$":"One creature"},{"@name":"Attack","$":"Wisdom vs. Reflex"},{"@name":"Hit","$":"The target is dominated (save ends)."},{"@name":"Miss","$":"The target is dazed (save ends)."},{"@name":"Effect","$":"If your spirit companion is adjacent to the target at the start of your turn, you can slide the target 4 squares and slide your spirit companion 4 squares to a space adjacent to the target. This effect persists while the target is dazed or dominated by this power."},{"@name":"Class","$":"ID_FMP_PARAGON_PATH_807"},{"@name":"Level","$":"20"},{"@name":"Power Type","$":"Attack"}]},{"@name":"Four-Armed is Forewarned","@type":"Power","@internal-id":"ID_FMP_POWER_13771","@source":"Dragon Magazine 395","@revision-date":"8/27/2010 11:32:21 AM","Category":{"$":"ID_INTERNAL_CATEGORY_ATTACK,ID_INTERNAL_CATEGORY_DAILY,ID_INTERNAL_CATEGORY_DAILY_USAGE,ID_FMP_CLASS_147,ID_FMP_CATEGORY_57,ID_FMP_CATEGORY_33,ID_INTERNAL_CATEGORY_STANDARD_ACTION,9"},"Flavor":{"$":"You channel the many-armed thri-kreen spirit through your ally, allowing him or her to strike with speed and ferocity."},"specific":[{"@name":"Power Usage","$":"Daily"},{"@name":"_SkillPower"},{"@name":"Display","$":"Shaman Attack 9"},{"@name":"Keywords","$":"Primal, Spirit"},{"@name":"Action Type","$":"Standard action"},{"@name":"Attack Type","$":"Melee spirit 1"},{"@name":"Target","$":"One ally"},{"@name":"Effect","$":"The target can make a melee basic attack against up to four enemies adjacent to it as a free action."},{"@name":"_Associated Feats"},{"@name":"Class","$":"ID_FMP_CLASS_147"},{"@name":"Level","$":"9"},{"@name":"Power Type","$":"Attack"}]},{"@name":"Ancient Progenitor Spirit","@type":"Power","@internal-id":"ID_FMP_POWER_16501","@source":"Dungeon Survival Handbook","Category":{"$":"ID_INTERNAL_CATEGORY_CLASS_POWER,ID_INTERNAL_CATEGORY_ATTACK,ID_INTERNAL_CATEGORY_DAILY,ID_INTERNAL_CATEGORY_DAILY_USAGE,ID_FMP_CLASS_147,ID_FMP_CATEGORY_25,ID_FMP_CATEGORY_33,ID_FMP_CATEGORY_16,ID_FMP_CATEGORY_57,ID_FMP_CATEGORY_39,ID_INTERNAL_CATEGORY_STANDARD_ACTION,5"},"Flavor":{"$":"With a low hum, your spirit companion fades and the essence of an ancient ancestor comes to your aid, invading the minds of enemies foolish enough to stay close."},"specific":[{"@name":"Power Usage","$":"Daily"},{"@name":"Display","$":"Shaman Attack 5"},{"@name":"Keywords","$":"Implement, Primal, Psychic, Spirit, Zone"},{"@name":"Action Type","$":"Standard Action"},{"@name":"Attack Type","$":"Close burst spirit 2"},{"@name":"Target","$":"Each enemy in the burst"},{"@name":"Attack","$":"Wisdom vs. Fortitude"},{"@name":"Hit","$":"1d10 + Wisdom modifier psychic damage, and the target grants combat advantage and cannot benefit from any concealment (save ends both)."},{"@name":"Effect","$":"Your spirit companion disappears, and the burst creates a zone that lasts until the end of your next turn. Enemies in the zone take a -2 penalty to attack rolls, and any enemy that ends its turn in the zone takes 5 psychic damage."},{"@name":"Sustain Minor","$":"The zone persists until the end of your next turn."},{"@name":"Class","$":"ID_FMP_CLASS_147"},{"@name":"Level","$":"5"},{"@name":"Power Type","$":"Attack"}],"$":"The spirit world frightens the ignorant. It is associated with death and the great passing. Shamans understand that life extends beyond the mortal shell and that great ancestors wait to welcome us home once more."}]}}
