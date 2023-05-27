const itemStructure = {
  rules: [
    {
      id: 0,
      type: 'rules',
      text: 'Read the Intro at loud.',
      helpText: 'Tap on the last box to proceed.',
      next: 'intro',
    },
    {
      id: 1,
      type: 'rules',
      text: 'Then choose your Truths from the corresponding sheet among the presented options to paint up the broad strokes of your world.',
      next: 'truth',
    },
    {
      id: 2,
      type: 'rules',
      text: 'Choose a Path to start with. Taking turns, pick the first unread question from the top and read it aloud. Interpret these questions, and answer them however you wish.',
      next: 'rules',
    },
    {
      id: 3,
      type: 'rules',
      text: 'Other players may ask you questions or make suggestions on your turn, but whether you answer the questions or include those suggestions is entirely up to you.',
      next: 'rules',
    },
    {
      id: 4,
      type: 'rules',
      text: 'When the active player finishes their answer, use the Arrow to determine whether the next player will go further into this Path or they will switch to the Path pointed out in the question.',
      next: 'rules',
    },
    {
      id: 5,
      type: 'rules',
      text: 'If you encounter a question you don’t want in your game, Remove it from your game and pick the first question from a different Path instead. You can also decide to Pass a Question to another Player by saying: “I’d like to see you answer that.”',
      next: 'rules',
    },
    {
      id: 6,
      type: 'rules',
      text: 'Continue to answer questions, remove them, pass them, go further in the Paths or switch according to the Arrows until you reach a Path’s Final Question, which must be answered by every player, however they wish.',
      next: 'rules',
    },
    {
      id: 7,
      type: 'rules',
      text: 'Then, go to the Aftermath and choose whether to continue the game or play Lich’s demise. In this last occurrence, the Closing Question should be answered by every player before ending the game.',
      next: 'rules',
    },
    {
      id: 8,
      type: 'rules',
      text: 'Whoever wants to can start with the first question. During each player’s first turn, they must also give their character a name.',
      next: 'startQuestions',
    },
  ],
  intro: [
    {
      id: 0,
      type: 'intro',
      text: 'The Lich once deceived Death and gained immortality, and she has been trying to end him ever since. He succeeded in banning her physical form from his Domain, a wicked land being shaped by his image generation after another.',
      next: 'intro',
    },
    {
      id: 1,
      type: 'intro',
      text: 'Keeping Death herself at bay, however, requires paying a price that keeps getting higher and higher, and even his peak mastery of the Dark Arts is proving insufficient. The Lich is now closer than ever to losing this strongarm with Death and his life with it.',
      next: 'intro',
    },
    {
      id: 2,
      type: 'intro',
      text: 'The Lich has many subjects, but you only are his chosen Servants, scourged not by Death but by the lack of her, wickedly corrupted by the Lich’s Domain. You, and no one else, are bound to assist him in his quest to beat Death once more. You’re bound to him because he keeps your souls enchained.',
      next: 'rules',
    },
  ],
  truth: [
    {
      id: 0,
      type: 'truth',
      text: 'The Liches’ Title of Power is ',
      helpText: 'Select one of the option below.',
      options: [
        {
          text: 'Athanatos.',
        },
        {
          text: 'The Enchanter.',
        },
        {
          text: 'The Three Times Great.',
        },
        {
          text: 'The First Hangman.',
        },
        {
          text: 'Cain the Elder.',
        },
        {
          text: 'just “The Lich”, since he’s the first and he’ll be last.',
        },
      ],
      next: 'truth',
    },
    {
      id: 1,
      type: 'truth',
      text: 'The Lich is a master in Dark Arts, which consists of ',
      options: [
        {
          text: 'forgotten rituals from before the dawn of civilization.',
        },
        {
          text: 'sorceries fueled by the power of blood.',
        },
        {
          text: 'perversion of the powers from heaven and hell.',
        },
        {
          text: 'alchemy and secret science.',
        },
        {
          text: 'pacts with otherworldly patrons.',
        },
        {
          text: 'forbidden chants of steel and battle.',
        },
      ],
      next: 'truth',
    },
    {
      id: 2,
      type: 'truth',
      text: 'The Lich and the Death are bound in ',
      options: [
        {
          text: 'empty eye sockets.',
        },
        {
          text: 'The same part of their bodies mechanically replaced.',
        },
        {
          text: 'Matched jewelry in onyx and silver.',
        },
        {
          text: 'A palpable aura of cold.',
        },
        {
          text: 'A contract signed in blood.',
        },
        {
          text: 'A memory too shameful to forget.',
        },
      ],
      next: 'truth',
    },
    {
      id: 3,
      type: 'truth',
      text: 'The folklore of the living portrays the Lich as ',
      options: [
        {
          text: 'the harbinger of doom.',
        },
        {
          text: 'not from this world, at least not anymore.',
        },
        {
          text: 'the warden of an invaluable secret.',
        },
        {
          text: 'a necessary evil.',
        },
        {
          text: 'nothing, since his name is a synonym for terror.',
        },
        {
          text: 'nothing since his existence is kept hidden from the commoners.',
        },
      ],
      next: 'truth',
    },
    {
      id: 4,
      type: 'truth',
      text: 'The Lich Domain is ',
      options: [
        {
          text: 'a sordid swamp.',
        },
        {
          text: 'a desert of glass.',
        },
        {
          text: 'a haunted dungeon.',
        },
        {
          text: 'a ruined castle.',
        },
        {
          text: 'an endless graveyard.',
        },
        {
          text: 'a wizard tower.',
        },
      ],
      next: 'truth',
    },
    {
      id: 5,
      type: 'truth',
      text: 'In the Lich Domain, it is forbidden to ',
      options: [
        {
          text: 'love unconditionally.',
        },
        {
          text: 'dream without nightmares.',
        },
        {
          text: 'eat like the living.',
        },
        {
          text: 'praise any faith.',
        },
        {
          text: 'spread science and culture.',
        },
        {
          text: 'have mercy.',
        },
      ],
      next: 'truth',
    },
    {
      id: 6,
      type: 'truth',
      text: 'The Domain is separated from the world of the living by ',
      options: [
        {
          text: 'Symbol of protection and interdiction.',
        },
        {
          text: 'The Liches’ sheer willpower.',
        },
        {
          text: 'A significant gap in technology and culture.',
        },
        {
          text: 'A natural barrier.',
        },
        {
          text: 'a never stopping front of a battle.',
        },
        {
          text: 'an unspoken agreement.',
        },
      ],
      next: 'truth',
    },
    {
      id: 7,
      type: 'truth',
      text: 'The Domain was the theatre of ',
      options: [
        {
          text: 'A war between Gods.',
        },
        {
          text: 'The first manmade fire.',
        },
        {
          text: 'The fall of the Empire.',
        },
        {
          text: 'A song of time and distance.',
        },
        {
          text: 'Extinguished fantastic beasts.',
        },
        {
          text: 'The Sunrise.',
        },
      ],
      next: 'truth',
    },
    {
      id: 8,
      type: 'truth',
      text: 'As Lich’s Servants, you must ',
      options: [
        {
          text: 'worship him like a god.',
        },
        {
          text: 'pay blood tribute.',
        },
        {
          text: 'provide unpaid labor.',
        },
        {
          text: 'practice the dark arts.',
        },
        {
          text: 'never lie to him.',
        },
        {
          text: 'slain his enemies at sight.',
        },
      ],
      next: 'truth',
    },
    {
      id: 9,
      type: 'truth',
      text: 'The Lich and his Servants are bound in ',
      options: [
        {
          text: 'his crest carved and branded on their bodies.',
        },
        {
          text: 'ceremonial drapement that outlines rank and role.',
        },
        {
          text: 'the signs of his aging.',
        },
        {
          text: 'a secret and ancient language.',
        },
        {
          text: 'the payment in silver given for their souls.',
        },
        {
          text: 'the same bond that the Lich shares with the Death.',
        },
      ],
      next: 'truth',
    },
    {
      id: 10,
      type: 'truth',
      text: 'The Commoners in the Lich’s Domain are ',
      options: [
        {
          text: 'convicted felons and criminals from nearby kingdoms.',
        },
        {
          text: 'Refugees of war.',
        },
        {
          text: 'persecuted by the human faiths.',
        },
        {
          text: 'wraiths whose spirits have unfinished business.',
        },
        {
          text: 'human tributes.',
        },
        {
          text: 'noone, since no one lives in the Domain besides the Servants.',
        },
      ],
      next: 'truth',
    },
    {
      id: 11,
      type: 'truth',
      text: 'The Servants of the Lich are ',
      options: [
        {
          text: 'Aesthetes of Decadence.',
        },
        {
          text: 'Bloodthirsty blades.',
        },
        {
          text: 'The Liches’ apprentices in his Dark Arts.',
        },
        {
          text: 'Humans drove utterly insane by the Domain influx.',
        },
        {
          text: 'Flesh-eating zombies and ghouls.',
        },
        {
          text: 'Humans wickedly augmented by feral features.',
        },
      ],
      next: 'rules',
    },
  ],
  question: {
    knowledge: {
      description: 'This Path is about knowledge, lost or forgotten.',
      arrow: 'Stay on this Path if knowledge is beyond your reach.',
      questions: [
        {
          id: 1,
          type: 'knowledge',
          text: 'The Lich once held the most powerful dark art of the land, but the Death got hold of it. What’s your part in it?',
          switch: 'secrets',
        },
        {
          id: 2,
          type: 'knowledge',
          text: 'One of your ancestors served the Lich. How did they become their favorite?',
          switch: 'mortals',
        },
      ],
    },
    mortals: {
      description: 'This Path is about the bonds with the living.',
      arrow: 'Stay on this Path if the Lich becomes closer to the living.',
      questions: [
        {
          id: 1,
          type: 'mortals',
          text: 'The Lich took your soul because of your humanity, somehow. Do you still feel like that?',
          switch: 'desires',
        },
      ],
    },
    undeath: {
      description: 'This Path is about the bonds with the living.',
      arrow: 'Stay on this Path if the Lich becomes closer to the living.',
      questions: [
        {
          id: 1,
          type: 'mortals',
          text: 'The Lich took your soul because of your humanity, somehow. Do you still feel like that?',
          switch: 'desires',
        },
      ],
    },
    decay: {
      description: 'This Path is about the bonds with the living.',
      arrow: 'Stay on this Path if the Lich becomes closer to the living.',
      questions: [
        {
          id: 1,
          type: 'mortals',
          text: 'The Lich took your soul because of your humanity, somehow. Do you still feel like that?',
          switch: 'desires',
        },
      ],
    },
    secrets: {
      description: 'This Path is about the bonds with the living.',
      arrow: 'Stay on this Path if the Lich becomes closer to the living.',
      questions: [
        {
          id: 1,
          type: 'mortals',
          text: 'The Lich took your soul because of your humanity, somehow. Do you still feel like that?',
          switch: 'desires',
        },
      ],
    },
    desires: {
      description: 'This Path is about the bonds with the living.',
      arrow: 'Stay on this Path if the Lich becomes closer to the living.',
      questions: [
        {
          id: 1,
          type: 'mortals',
          text: 'The Lich took your soul because of your humanity, somehow. Do you still feel like that?',
          switch: 'desires',
        },
      ],
    },
  },
};

export default itemStructure;
