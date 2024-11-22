export const questions = [
    {
        question: "From one of the following, how would you describe your personality?",
        options: ['Humble', 'Pessimistic', 'Playful', 'Ruthless', 'Honest', 'Brave']
    },
    {
        question: "Which of the following, is your desired weapon?",
        options: ['Longsword', 'Bow', 'Explosives', 'Dual-Headed Axe', 'Hidden Blades', 'Fists']
    },
    {
        question: "Which path do you feel most drawn to?",
        options: ['Path of the Ninja: Dexterity', 'Path of the Cicada: Constitution', 'Path of the Beast: Strength', 'Path of the Mind: Intelligence', 'Path of the Leader: Wisdom', 'Path of the Swindel: Charisma']
    },
    {
        question: "How you prefere you character to be?",
        options: ['Small, but Mighty', 'Part-Human, Part-Beast', 'Patient, Highly Intelligent', 'Lacks Combat, Instantly Charms', 'Leave no Trail, only Bloodshed']
    },
];

export const characters = [
    {
        name: "Kaikoa",
        statement: "Barbarian: Part-Human, Part-Beast.",
        sentiments: ['Humble', 'Longsword', 'Path of the Beast: Strength', 'Part-Human, Part-Beast'],
        image: '../../images/kaikoa.jpg',
        frequency: 0
    },
    {
        name: "Adlana",
        statement: "Elf: Highly Intelligent, patience is their strength, like a lion watching its prey.",
        sentiments: ['Pessimistic', 'Bow', 'Path of the Mind: Intelligence', 'Patient, Highly Intelligent'],
        image: '../../images/adlana.jpg',
        frequency: 0
    },
    {
        name: "Bulbor",
        statement: "Dwarf: Fast, Aggresive, and Stronger than any species.",
        sentiments: ['Playful', 'Dual-Headed Axe', 'Path of the Cicada: Constitution', 'Small, but Mighty'],
        image: '../../images/bulbor.jpg',
        frequency: 0
    },
    {
        name: "Shuhiro",
        statement: "Nagana: They only leave a trial of bloodshed",
        sentiments: ['Ruthless', 'Hidden Blades', 'Path of the Ninja: Dexterity', 'Leave no Trail, only Bloodshed'],
        image: '../../images/shuhiro.jpg',
        frequency: 0
    },
    {
        name: "Callum",
        statement: "Human: Pretty Useless, but can mainpulate any living creature",
        sentiments: ['Honest', 'Fists', 'Path of the Swindel: Charisma', 'Lacks Combat, but Instantly Charms'],
        image: '../../images/callum.webp',
        frequency: 0
    },
    {
        name: "Aresgo",
        statement: "Elf: Highly Intelligent, patience is their strength, like a lion watching its prey.",
        sentiments: ['Brave', 'Explosives', 'Path of the Mind: Intelligence', 'Patient, and Highly Intelligent'],
        image: '../../images/aresgo.jpg',
        frequency: 0
    },
];

export const alerts = {reset: 'Are you sure you want to Reset?', notChosen: 'Looks like you need to choose an option'};

export const htmlData = {characterWaiting: `<div class="dotted-container">
                            <div class="animation-content">
                                <div id="animation-container" style="width:200px;"></div>
                                <h2>Fixing Up Your Match</h2>
                            </div>
                            <img src="./images/kaikoa.jpg"/>
                            <div class="cover"></div>

                        </div>`, questionWaiting: ``};