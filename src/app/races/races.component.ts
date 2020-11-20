import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatTabChangeEvent } from '@angular/material/tabs';

import { Page } from '../nav/model/page.model';
import { Section } from '../nav/model/section.model';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  private headers = new HttpHeaders(); 
  bfapiurl = 'https://eaknep3ofh.execute-api.us-east-1.amazonaws.com/bfapi/get-chapter/';
  index = [
            {"bookmark": "landing", "title": "World and Starter Adventures", "index": 0},
  ];
  pages: Array<Page> = new Array<Page>();
  bookmark: Page;

  constructor() { }

  ngOnInit(): void {
    this.pages.push(this.makePage(0, "Humans", [
      this.makeSection("Humans", "", [
        ["Age", "Humans reach adulthood in their late teens and live less than a century."], 
        ["Alignment", "Humans tend toward no particular alignment. The best and the worst are found among them."],
        ["Size", "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium."],
        ["Speed", "Your base walking speed is 30 ft."],
        ["Languages", "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."],
        ["Brave", "You have advantage on saving throws against being frightened."],
        ["Skilled", "You gain proficiency in one skill of your choice."] 
      ]),
      this.makeSection("Jack of All Trades Human", "", [
        ["Ability Scores", "Your ability scores each increase by 1"],
        ["Lucky", "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."] 
      ]),
      this.makeSection("Prodigy Human", "", [
        ["Ability Scores", "Choose any two unique +1"],
        ["Feat", "You gain one feat of your choice."] 
      ])
    ]));

    this.pages.push(this.makePage(1, "Dwarves", [
      this.makeSection("Dwarves", "", [
        ["Age", "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years."], 
        ["Alignment", "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order."],
        ["Size", "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."],
        ["Speed", "Your base walking speed is 25 ft, and is not reduced by wearing heavy armor."],
        ["Languages", "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."],
        ["Darkvision", "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."],
        ["Dwarven Resilience", "You have advantage on saving throws against poison, and you have resistance against poison damage."],
        ["Dwarven Combat Training", "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."],
        ["Tool Proficiency.", "You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools."],
        ["Stonecunning", "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."]
      ]),
      this.makeSection("Hill Dwarf", "", [
        ["Ability Scores", "Con +2; Wis +1"],
        ["Dwarven Toughness", "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."] 
      ]),
      this.makeSection("Mountain Dwarf", "", [
        ["Ability Scores", "Str +2; Con +2"],
        ["Dwarven Armor Training", "You have proficiency with light and medium armor."] 
      ]),
      this.makeSection("City Dwarf", "", [
        ["Ability Scores", "Con +2; Int +1"],
        ["Tinkerer", "You gain an Artificer Cantrip, and your artisan tool is the spellcasting focus for emulating the cantrip.  See 'The Magic of the Artifice' for more details."] 
      ])
    ]));

    this.pages.push(this.makePage(2, "Elves", [
      this.makeSection("Elves", "", [
        ["Age", "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."], 
        ["Alignment", "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not."],
        ["Size", "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."],
        ["Speed", "Your base walking speed is 30 ft."],
        ["Languages", "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."],
        ["Darkvision", "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."],
        ["Keen Senses", "You have proficiency in the Perception skill."],
        ["Fey Ancestry", "You have advantage on saving throws against being charmed, and magic can't put you to sleep."],
        ["Trance", "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance.') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep"],
        ["Elf Weapon Training.", "You have proficiency with the longsword, shortsword, shortbow, and longbow."]
      ]),
      this.makeSection("High Elf", "", [
        ["Ability Scores", "Dex +2; Int +1"],
        ["Cantrip.", "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."],
        ["Extra Language.", "You can speak, read, and write one extra language of your choosing."]
      ]),
      this.makeSection("Wood Elf", "", [
        ["Ability Scores", "Dex +2; Wis +1"],
        ["Fleet of Foot.", "Your base walking speed increases to 35 feet."],
        ["Mask of the Wild.", "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."]
      ]),
      this.makeSection("Eladrin Elf", "", [
        ["Ability Scores", "Dex +2; Cha +1"],
        ["Fey Step", "You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest."] 
      ])
    ]));

    this.pages.push(this.makePage(3, "Orcs", [
      this.makeSection("Orcs", "", [
        ["Age", "Orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years."], 
        ["Alignment", "Orcs inherit a tendency toward chaos from their parents, and don’t like to settle down in one spot.  Mobile villages of orcs tend to be anywhere from barbarian camps pillaging to simple hunter gatherers following a herd of animals."],
        ["Size", "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium."],
        ["Speed", "Your base walking speed is 30 ft."],
        ["Languages", "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants."],
        ["Darkvision", "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."],
        ["Menacing", "You gain proficiency in the Intimidation skill."],
        ["Strength of Spirit", "Your worthiness increases by 2."]
      ]),
      this.makeSection("Warrior Caste Orc", "", [
        ["Ability Scores", "Str +2; Con +1"],
        ["Relentless Endurance.", "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."],
        ["Savage Attacks.", "When you score a critical hit with ANY attack (melee, ranged, spell), you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."]
      ]),
      this.makeSection("Firbolg Caste Orc", "", [
        ["Ability Scores", "Wis +2; Str +1"],
        ["Firbolg Magic.", "You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves."],
        ["Speech of Beast and Leaf.", "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them."]
      ])
    ]));

    this.pages.push(this.makePage(4, "Beastfolk", [
      this.makeSection("Beastfolk", "", [
        ["Age", "Young beastfolk grow quickly. They walk hours after being born, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80."], 
        ["Alignment", "Beastfolk tend to take after their related animal, for example doglike beastfolk tend to be more lawful, and catlike beastfolk tend to be more chaotic.  "],
        ["Size", "The size of a beastfolk can vary based on their related animal, with predators tending to be almost as big as Orcs, while prey animals tend to be the size of a smaller human."],
        ["Speed", "Your base walking speed is 30 ft.  Choose Swimming or Climbing, your speed for that movement is equal to your walking speed."],
        ["Languages", "You can speak, read, and write Common and Sylvan"],
        ["Stat Bonus", "Wisdom +2, Choose Strength or Dexterity +1"],
        ["Natural Senses", "Pick Proficiency in two: Animal Handling, Nature, Perception, Stealth, Survival, or Darkvision."] ,
        ["Natural Armor", "You have tough skin or Fur. When you aren't wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."],
        ["Natural Weapon", "You have a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal damage equal to 1d6 + your Strength or Dexterity modifier, and you are proficient in it. At character generation, you choose whether this damage is Bludgeoning, Piercing, or Slashing damage."]
      ])
    ]));

    this.pages.push(this.makePage(5, "Triton", [
      this.makeSection("Triton", "", [
        ["Age", "Tritons reach maturity around age 15 and can live up to 200 years."], 
        ["Alignment", "Tritons tend toward lawful good. As guardians of the darkest reaches of the sea, their culture pushes them toward order and benevolence."],
        ["Size", "Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium."],
        ["Speed", "Your base walking speed is 30 feet, and you have a swimming speed equal to your walk speed."],
        ["Languages", "You can speak, read, and write Common and Undercommon"],
        ["Stat Bonus", "Strength +1, Constitution +1, Choose Wisdom or Charisma +1"],
        ["Amphibious", "You can breathe both air and water."] ,
        ["Triton Martial Training", "You have proficiency with the spear, trident, light crossbow, and net."],
        ["Nereid Knowledge", "You have proficiency in the Nature skill."],
        ["Photosynthesis", "As long as you have access to a body of water and sunlight for 8 hours a day, Tritons only need to eat once a week."],
        ["One with Nature", "You know one cantrip of your choice from the druid spell list. Wisdom or Charisma is your spellcasting ability for it, depending on the stat bonus you chose."]
      ])
    ]));
  }

  makeSection(title, body, sections) {
    var secArray = new Array<Section>();

    sections.forEach(section => {
      secArray.push(this.makeSection(section[0], section[1], []));
    });

    return new Section("test", title, body, secArray, [], null);
  }

  makePage(index, title, sections) {
    return new Page(index, title, sections);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent)  {
    this.pages.forEach(page => {
      if (page.order == tabChangeEvent.index) {
        this.bookmark = page
      }
    });
  }

}
