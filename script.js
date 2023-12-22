document.addEventListener('DOMContentLoaded', function() {
    const verbSelect = document.getElementById('verbSelect');
    const randomVerbButton = document.getElementById('randomVerb');
    const tenseTable = document.getElementById('tenseTable');
    const extraInfo = document.getElementById('extraInfo');

    // Assume verbs is your JSON data
    const verbs = [
{
"topic": "persuasive verbs",
"category": "regular",
"verb": "convince",
"answer": [
"I/They/We/You convince | He/She/It convinces",
"I am | He/She/It is | They/We/You are convincing",
"I/You/They/We have | He/She/It has convinced",
"I/You/They/We have been convincing | He/She/It has been convincing",
"I/He/She/It/We/You/They convinced",
"I/He/She/It was convincing | They/We/You were convincing",
"I/He/She/It/We/You/They had convinced",
"I/He/She/It/We/You/They had been convincing",
"I/He/She/It/We/You/They will convince",
"I/He/She/It/We/You/They will be convincing",
"I/He/She/It/We/You/They will have convinced",
"I/He/She/It/We/You/They will have been convincing"
],
"synonyms": [
"persuade",
"induce",
"influence",
"coax",
"talk round",
"get",
"urge",
"win over",
"bring around",
"sway",
"coerce",
"prompt"
],
"antonyms": [
"dissuade",
"discourage",
"deterr"
],
"questions": [
"How can you convince your team to adopt this approach? (context: team management)",
"Who convinced you to take this job? (context: career)",
"Have you convinced your parents about your plan? (context: personal decision)",
"What argument convinced you to change your mind? (context: debate)",
"How do you plan to convince the board? (context: business proposal)"
],
},

{
    "topic": "daily activities",
    "category": "regular",
    "verb": "get dressed",
    "answer": [
        "I/They/We/You get dressed | He/She/It gets dressed",
        "I am | He/She/It is | They/We/You are getting dressed",
        "I/You/They/We have | He/She/It has got dressed",
        "I/You/They/We have been getting dressed | He/She/It has been getting dressed",
        "I/He/She/It/We/You/They got dressed",
        "I/He/She/It was getting dressed | They/We/You were getting dressed",
        "I/He/She/It/We/You/They had got dressed",
        "I/He/She/It/We/You/They had been getting dressed",
        "I/He/She/It/We/You/They will get dressed",
        "I/He/She/It/We/You/They will be getting dressed",
        "I/He/She/It/We/You/They will have got dressed",
        "I/He/She/It/We/You/They will have been getting dressed"
    ],
"synonyms":[ "dress up", "don clothes", "put on clothes", "attire oneself", "clothe oneself"],

"antonyms":[ "undress", "disrobe", "strip", "take off clothes"],

    "questions": [
        "Have you got dressed for the party?(context: social)",
        "Why is he getting dressed so early?(context: daily routine)",
        "Will they get dressed before breakfast?(context: daily routine)",
        "Who got dressed first?(context: competition)",
        "How quickly can you get dressed?(context: time management)"
    ]
},



{
    "topic": "transaction verbs",
    "category": "irregular",
    "verb": "buy",
    "answer": [
        "I/They/We/You buy | He/She/It buys",
        "I am | He/She/It is | They/We/You are buying",
        "I/You/They/We have | He/She/It has bought",
        "I/You/They/We have been buying | He/She/It has been buying",
        "I/He/She/It/We/You/They bought",
        "I/He/She/It was buying | They/We/You were buying",
        "I/He/She/It/We/You/They had bought",
        "I/He/She/It/We/You/They had been buying",
        "I/He/She/It/We/You/They will buy",
        "I/He/She/It/We/You/They will be buying",
        "I/He/She/It/We/You/They will have bought",
        "I/He/She/It/We/You/They will have been buying"
    ],
    "synonyms": ["purchase", "acquire", "obtain", "procure", "pick up", "snap up", "take", "secure", "bag", "gain", "earn", "win"],
    "antonyms": ["sell", "return", "discard", "dispose of", "surrender", "abandon", "relinquish", "forgo", "renounce"],
    "questions": [
        "Where can I buy this product? (context: shopping)",
        "Who buys these items often? (context: consumer behavior)",
        "Have you bought the tickets yet? (context: event planning)",
        "What did you buy? (context: shopping)",
        "Where can I buy this product? (context: shopping)",
        "How much did you buy it for? (context: negotiation)",
        "What are you planning to buy? (context: shopping)"
    ]
},



{
      "topic": "action verbs",
      "category": "regular",
      "verb": "pick up",
      "answer": [
          "I/They/We/You pick up | He/She/It picks up",
          "I am | He/She/It is | They/We/You are picking up",
          "I/You/They/We have | He/She/It has picked up",
          "I/You/They/We have been picking up | He/She/It has been picking up",
          "I/He/She/It/We/You/They picked up",
          "I/He/She/It was picking up | They/We/You were picking up",
          "I/He/She/It/We/You/They had picked up",
          "I/He/She/It/We/You/They had been picking up",
          "I/He/She/It/We/You/They will pick up",
          "I/He/She/It/We/You/They will be picking up",
          "I/He/She/It/We/You/They will have picked up",
          "I/He/She/It/We/You/They will have been picking up"
      ],
"synonyms":[ "lift", "gather", "collect", "grasp", "take", "retrieve"],

"antonyms":[ "drop", "leave", "discard", "put down", "abandon", "ignore"],

      "questions": [
          "Can you pick up the kids from school today?(context: daily routine)",
          "Who picks up groceries on their way home?(context: household chores)",
          "Who's picking up the package?(context: delivery)",
          "Have they picked up the skills needed for the job?(context: skill acquisition)",
          "Why did she pick up so many hobbies recently?(context: personal interests)",
          "How do you pick up a new language quickly?(context: learning)"
      ]
  },



{
    "topic": "evaluation verbs",
    "category": "regular",
    "verb": "review",
    "answer": [
        "I/They/We/You review | He/She/It reviews",
        "I am | He/She/It is | They/We/You are reviewing",
        "I/You/They/We have | He/She/It has reviewed",
        "I/You/They/We have been reviewing | He/She/It has been reviewing",
        "I/He/She/It/We/You/They reviewed",
        "I/He/She/It was reviewing | They/We/You were reviewing",
        "I/He/She/It/We/You/They had reviewed",
        "I/He/She/It/We/You/They had been reviewing",
        "I/He/She/It/We/You/They will review",
        "I/He/She/It/We/You/They will be reviewing",
        "I/He/She/It/We/You/They will have reviewed",
        "I/He/She/It/We/You/They will have been reviewing"
    ],
    "synonyms": ["assess", "evaluate", "examine", "inspect", "scrutinize", "analyze", "audit", "survey", "study", "appraise", "check", "consider"],
    "antonyms": ["ignore", "neglect", "overlook", "disregard", "skip", "bypass", "miss", "omit", "forget"],
    "questions": [
        "Can you review this document for me? (context: work)",
        "Who will review the applications? (context: administration)",
        "Have you reviewed the [contract|report] yet? (context: business)",
        "What did they review in the meeting? (context: corporate)",
        "How often do you review your notes? (context: study)"
    ]
}
,


{
    "topic": "sales verbs",
    "category": "irregular",
    "verb": "sell",
    "answer": [
        "I/They/We/You sell | He/She/It sells",
        "I am | He/She/It is | They/We/You are selling",
        "I/You/They/We have | He/She/It has sold",
        "I/You/They/We have been selling | He/She/It has been selling",
        "I/He/She/It/We/You/They sold",
        "I/He/She/It was selling | They/We/You were selling",
        "I/He/She/It/We/You/They had sold",
        "I/He/She/It/We/You/They had been selling",
        "I/He/She/It/We/You/They will sell",
        "I/He/She/It/We/You/They will be selling",
        "I/He/She/It/We/You/They will have sold",
        "I/He/She/It/We/You/They will have been selling"
    ],
    "synonyms": ["trade", "dispose of", "vend", "auction (off)", "put up for sale", "offer for sale", "put on sale", "trade", "barter", "exchange", "part-exchange"],
    "antonyms": ["buy", "keep"],
    "questions": [
        "How can we sell this product? (context: business)",
        "Who sold this to you? (context: sales)",
        "Have you sold your business? (context: business)",
        "How much did you sell your car for? (context: sales)",
        "What are you selling? (context: sales)"
    ]
}
,

{
    "topic": "repair verbs",
    "category": "regular",
    "verb": "fix",
    "answer": [
        "I/They/We/You fix | He/She/It fixes",
        "I am | He/She/It is | They/We/You are fixing",
        "I/You/They/We have | He/She/It has fixed",
        "I/You/They/We have been fixing | He/She/It has been fixing",
        "I/He/She/It/We/You/They fixed",
        "I/He/She/It was fixing | They/We/You were fixing",
        "I/He/She/It/We/You/They had fixed",
        "I/He/She/It/We/You/They had been fixing",
        "I/He/She/It/We/You/They will fix",
        "I/He/She/It/We/You/They will be fixing",
        "I/He/She/It/We/You/They will have fixed",
        "I/He/She/It/We/You/They will have been fixing"
    ],
    "synonyms": ["repair", "mend", "correct", "resolve", "remedy", "rectify", "amend", "restore", "renew", "overhaul", "revamp", "rework"],
    "antonyms": ["break", "damage", "destroy", "harm", "worsen", "impair", "ruin", "spoil", "deteriorate", "disfigure", "corrupt"],
    "questions": [
        "Can you fix this for me? (context: repair)",
        "Who will fix the leak? (context: maintenance)",
        "Have you fixed the problem yet? (context: troubleshooting)",
        "How long will it take to fix? (context: repair time estimate)",
        "What do you need to fix it? (context: repair requirements)"
    ]
}

,

{
    "topic": "design verbs",
    "category": "regular",
    "verb": "decorate",
    "answer": [
        "I/They/We/You decorate | He/She/It decorates",
        "I am | He/She/It is | They/We/You are decorating",
        "I/You/They/We have | He/She/It has decorated",
        "I/You/They/We have been decorating | He/She/It has been decorating",
        "I/He/She/It/We/You/They decorated",
        "I/He/She/It was decorating | They/We/You were decorating",
        "I/He/She/It/We/You/They had decorated",
        "I/He/She/It/We/You/They had been decorating",
        "I/He/She/It/We/You/They will decorate",
        "I/He/She/It/We/You/They will be decorating",
        "I/He/She/It/We/You/They will have decorated",
        "I/He/She/It/We/You/They will have been decorating"
    ],
    "synonyms": ["adorn", "embellish", "beautify", "ornament", "dress up", "furnish", "array", "deck", "garnish", "embroider", "enhance", "enrich"],
    "antonyms": ["strip", "bare", "disrobe", "undress", "deplete", "spoil", "ruin", "mar", "deface", "blemish"],
    "questions": [
        "How will you decorate the room? (context: interior design)",
        "Who decorated this hall? (context: event planning)",
        "Have you decorated for the holidays yet? (context: festive preparations)",
        "What theme will you use to decorate? (context: party planning)",
        "Why did you choose to decorate it this way? (context: design choice)"
    ]
}
,


{
    "topic": "editing verbs",
    "category": "regular",
    "verb": "revise",
    "answer": [
        "I/They/We/You revise | He/She/It revises",
        "I am | He/She/It is | They/We/You are revising",
        "I/You/They/We have | He/She/It has revised",
        "I/You/They/We have been revising | He/She/It has been revising",
        "I/He/She/It/We/You/They revised",
        "I/He/She/It was revising | They/We/You were revising",
        "I/He/She/It/We/You/They had revised",
        "I/He/She/It/We/You/They had been revising",
        "I/He/She/It/We/You/They will revise",
        "I/He/She/It/We/You/They will be revising",
        "I/He/She/It/We/You/They will have revised",
        "I/He/She/It/We/You/They will have been revising"
    ],
    "synonyms": ["amend", "modify", "alter", "edit", "rework", "update", "adjust", "correct", "refine", "improve", "overhaul", "redraft"],
    "antonyms": ["preserve", "maintain", "retain", "keep", "unchange", "stagnate", "fix", "freeze", "perpetuate", "solidify"],
    "questions": [
        "How often do you revise your notes? (context: study)",
        "Who will revise the document? (context: editing)",
        "Have you revised your plans yet? (context: event planning)",
        "What sections need to be revised? (context: document review)",
        "Why is it necessary to revise this chapter? (context: academic editing)"
    ]
}

,
{
    "topic": "thought process verbs",
    "category": "regular",
    "verb": "consider",
    "answer": [
        "I/They/We/You consider | He/She/It considers",
        "I am | He/She/It is | They/We/You are considering",
        "I/You/They/We have | He/She/It has considered",
        "I/You/They/We have been considering | He/She/It has been considering",
        "I/He/She/It/We/You/They considered",
        "I/He/She/It was considering | They/We/You were considering",
        "I/He/She/It/We/You/They had considered",
        "I/He/She/It/We/You/They had been considering",
        "I/He/She/It/We/You/They will consider",
        "I/He/She/It/We/You/They will be considering",
        "I/He/She/It/We/You/They will have considered",
        "I/He/She/It/We/You/They will have been considering"
    ],
    "synonyms": ["contemplate", "think about", "ponder", "reflect on", "deliberate", "mull over", "meditate on", "weigh", "study", "examine", "evaluate", "assess"],
    "antonyms": ["disregard", "ignore", "neglect", "overlook", "dismiss", "reject", "spurn", "bypass", "omit", "forget"],
    "questions": [
        "What factors will you consider in your decision? (context: decision-making)",
        "Who is considering the proposal? (context: business)",
        "Have you considered all the options? (context: planning)",
        "What are the risks to consider? (context: risk assessment)",
        "Why didn't you consider my suggestion? (context: feedback)"
    ]
}
,

{
    "topic": "memory verbs",
    "category": "irregular",
    "verb": "forget",
    "answer": [
        "I/They/We/You forget | He/She/It forgets",
        "I am | He/She/It is | They/We/You are forgetting",
        "I/You/They/We have | He/She/It has forgotten",
        "I/You/They/We have been forgetting | He/She/It has been forgetting",
        "I/He/She/It/We/You/They forgot",
        "I/He/She/It was forgetting | They/We/You were forgetting",
        "I/He/She/It/We/You/They had forgotten",
        "I/He/She/It/We/You/They had been forgetting",
        "I/He/She/It/We/You/They will forget",
        "I/He/She/It/We/You/They will be forgetting",
        "I/He/She/It/We/You/They will have forgotten",
        "I/He/She/It/We/You/They will have been forgetting"
    ],
    "synonyms": ["overlook", "neglect", "miss", "disregard", "omit", "ignore", "disremember", "lose track of", "fail to remember", "slip one's mind", "blank out", "fail to recall"],
    "antonyms": ["remember", "recall", "recollect", "retain", "memorize", "reminisce", "bear in mind", "keep in mind", "take note of", "be mindful of", "think of", "acknowledge"],
    "questions": [
        "How often do you forget people's names? (context: memory lapses)",
        "Who forgets their passwords most often? (context: digital security)",
        "Did you forget to lock the door? (context: daily routine)",
        "Have you forgotten what I told you? (context: recollection)",
        "Why do we forget important dates? (context: memory study)",
        "How can I avoid forgetting this information? (context: memory techniques)"
    ]
},


{
    "topic": "dependency verbs",
    "category": "irregular",
    "verb": "depend",
    "answer": [
        "I/They/We/You depend | He/She/It depends",
        "I am | He/She/It is | They/We/You are depending",
        "I/You/They/We have | He/She/It has depended",
        "I/You/They/We have been depending | He/She/It has been depending",
        "I/He/She/It/We/You/They depended",
        "I/He/She/It was depending | They/We/You were depending",
        "I/He/She/It/We/You/They had depended",
        "I/He/She/It/We/You/They had been depending",
        "I/He/She/It/We/You/They will depend",
        "I/He/She/It/We/You/They will be depending",
        "I/He/She/It/We/You/They will have depended",
        "I/He/She/It/We/You/They will have been depending"
    ],
    "synonyms": [
        "rely",
        "count on",
        "bank on",
        "trust",
        "lean on",
        "rest on",
        "hinge on",
        "be contingent on",
        "be based on",
        "be subject to"
    ],
    "antonyms": [
        "disregard",
        "ignore",
        "neglect",
        "distrust",
        "doubt"
    ],
    "questions": [
        "Does your decision depend on the budget?(context: business)",
        "Who depends on you for support?(context: family)",
        "How much does your happiness depend on external factors?(context: personal well-being)",
        "Does the success of the project depend on this phase?(context: project management)",
        "Do the outcomes depend largely on team cooperation?(context: teamwork)",
        "How much do you depend on technology in your daily life?(context: technology use)"
    ]
  },


  

{
    "topic": "memory verbs",
    "category": "regular",
    "verb": "remember",
    "answer": [
        "I/They/We/You remember | He/She/It remembers",
        "I am | He/She/It is | They/We/You are remembering",
        "I/You/They/We have | He/She/It has remembered",
        "I/You/They/We have been remembering | He/She/It has been remembering",
        "I/He/She/It/We/You/They remembered",
        "I/He/She/It was remembering | They/We/You were remembering",
        "I/He/She/It/We/You/They had remembered",
        "I/He/She/It/We/You/They had been remembering",
        "I/He/She/It/We/You/They will remember",
        "I/He/She/It/We/You/They will be remembering",
        "I/He/She/It/We/You/They will have remembered",
        "I/He/She/It/We/You/They will have been remembering"
    ],
    "synonyms": [
        "recall",
        "recollect",
        "think of",
        "bring to mind",
        "call to mind",
        "reminisce about",
        "think back on",
        "reflect on",
        "muse on"
    ],
    "antonyms": [
        "forget",
        "overlook",
        "neglect",
        "dismiss",
        "ignore"
    ],
    "questions": [
        "Do you remember the first time we met? (context: personal)",
        "Who remembers the details of the agreement? (context: business)",

        "Have you remembered to lock the door? (context: daily routine)",
        "Why can't I remember where I put my keys? (context: forgetfulness)",
        "Will they remember to send the invitations? (context: event planning)"
    ]
  },
  

  {
    "topic": "communication verbs",
    "category": "regular",
    "verb": "remind",
    "answer": [
        "I/They/We/You remind | He/She/It reminds",
        "I am | He/She/It is | They/We/You are reminding",
        "I/You/They/We have | He/She/It has reminded",
        "I/You/They/We have been reminding | He/She/It has been reminding",
        "I/He/She/It/We/You/They reminded",
        "I/He/She/It was reminding | They/We/You were reminding",
        "I/He/She/It/We/You/They had reminded",
        "I/He/She/It/We/You/They had been reminding",
        "I/He/She/It/We/You/They will remind",
        "I/He/She/It/We/You/They will be reminding",
        "I/He/She/It/We/You/They will have reminded",
        "I/He/She/It/We/You/They will have been reminding"
    ],
    "synonyms": [
        "prompt",
        "jog someone's memory",
        "make someone remember",
        "bring to someone's attention",
        "advise",
        "notify",
        "inform",
        "alert",
        "caution"
    ],
    "antonyms": [
        "forget",
        "overlook",
        "neglect",
        "ignore",
        "disregard"
    ],
    "questions": [
        "Can you remind me about the meeting tomorrow? (context: work)",
        "Who reminded you of your doctor's appointment? (context: healthcare)",
        "Who does she remind you of? (context: personal)",
        "Have they reminded the team about the deadline? (context: project management)",
        "Why do I need to remind you to do your chores every day? (context: family)",
        "Will the app remind us to take our medication? (context: health technology)"
    ]
  },
  

  {
    "topic": "communication verbs",
    "category": "regular",
    "verb": "agree",
    "answer": [
        "I/They/We/You agree | He/She/It agrees",
        "I am | He/She/It is | They/We/You are agreeing",
        "I/You/They/We have | He/She/It has agreed",
        "I/You/They/We have been agreeing | He/She/It has been agreeing",
        "I/He/She/It/We/You/They agreed",
        "I/He/She/It was agreeing | They/We/You were agreeing",
        "I/He/She/It/We/You/They had agreed",
        "I/He/She/It/We/You/They had been agreeing",
        "I/He/She/It/We/You/They will agree",
        "I/He/She/It/We/You/They will be agreeing",
        "I/He/She/It/We/You/They will have agreed",
        "I/He/She/It/We/You/They will have been agreeing"
    ],
    "synonyms": [
        "consent",
        "accept",
        "concur",
        "approve",
        "accede",
        "assent"
    ],
    "antonyms": [
        "disagree",
        "refuse",
        "decline",
        "dissent",
        "reject",
        "oppose"
    ],
    "questions": [
        "Do you agree with this decision?(context: discussion)",
        "Who agrees to the terms of the contract?(context: legal)",
        "Have you agreed on a date for the event?(context: planning)",
        "Why do experts not agree on this issue?(context: debate)",
        "Can we agree to compromise on this matter?(context: negotiation)"
    ]
},

{
    "topic": "negative action verbs",
    "category": "irregular",
    "verb": "spoil",
    "answer": [
        "I/They/We/You spoil | He/She/It spoils",
        "I am | He/She/It is | They/We/You are spoiling",
        "I/You/They/We have | He/She/It has spoiled/spoilt",
        "I/You/They/We have been spoiling | He/She/It has been spoiling",
        "I/He/She/It/We/You/They spoiled/spoilt",
        "I/He/She/It was spoiling | They/We/You were spoiling",
        "I/He/She/It/We/You/They had spoiled/spoilt",
        "I/He/She/It/We/You/They had been spoiling",
        "I/He/She/It/We/You/They will spoil",
        "I/He/She/It/We/You/They will be spoiling",
        "I/He/She/It/We/You/They will have spoiled/spoilt",
        "I/He/She/It/We/You/They will have been spoiling"
    ],
    "synonyms": [
        "ruin",
        "destroy",
        "mar",
        "damage",
        "degrade",
        "deteriorate"
    ],
    "antonyms": [
        "preserve",
        "protect",
        "maintain",
        "enhance",
        "improve",
        "repair"
    ],
    "questions": [
        "On average, how much spoiled food do you throw away each week?(context: food waste)",
        "How do you prevent fruit from spoiling?(context: food storage)",
        "Who spoiled the surprise party?(context: events)",
        "Have you ever spoiled a book by getting it wet?(context: accidents)",
        "Why do some parents spoil their children?(context: parenting)",
        "Can warm weather spoil milk faster?(context: food safety)"
    ]
},






  {
    "topic": "effort-related verbs",
    "category": "regular",
    "verb": "try",
    "answer": [
        "I/They/We/You try | He/She/It tries",
        "I am | He/She/It is | They/We/You are trying",
        "I/You/They/We have | He/She/It has tried",
        "I/You/They/We have been trying | He/She/It has been trying",
        "I/He/She/It/We/You/They tried",
        "I/He/She/It was trying | They/We/You were trying",
        "I/He/She/It/We/You/They had tried",
        "I/He/She/It/We/You/They had been trying",
        "I/He/She/It/We/You/They will try",
        "I/He/She/It/We/You/They will be trying",
        "I/He/She/It/We/You/They will have tried",
        "I/He/She/It/We/You/They will have been trying"
    ],
    "synonyms": [
        "attempt",
        "endeavor",
        "strive",
        "seek",
        "aspire",
        "experiment"
    ],
    "antonyms": [
        "abandon",
        "quit",
        "forgo",
        "neglect",
        "surrender",
        "give up"
    ],
    "questions": [
        "What does the phrase Try, Try Again mean to you?(context: perseverance)",
        "Can you try to open this jar?(context: everyday task)",
        "Who tries hardest in the team?(context: sports)",
        "Have you tried this method before?(context: problem-solving)",
        "Why do we need to try different approaches?(context: innovation)",
        "How often should I try this exercise?(context: fitness)"
    ]
},




  {
    "topic": "skill development verbs",
    "category": "regular",
    "verb": "train",
    "answer": [
        "I/They/We/You train | He/She/It trains",
        "I am | He/She/It is | They/We/You are training",
        "I/You/They/We have | He/She/It has trained",
        "I/You/They/We have been training | He/She/It has been training",
        "I/He/She/It/We/You/They trained",
        "I/He/She/It was training | They/We/You were training",
        "I/He/She/It/We/You/They had trained",
        "I/He/She/It/We/You/They had been training",
        "I/He/She/It/We/You/They will train",
        "I/He/She/It/We/You/They will be training",
        "I/He/She/It/We/You/They will have trained",
        "I/He/She/It/We/You/They will have been training"
    ],
    "synonyms": [
        "coach",
        "teach",
        "instruct",
        "educate",
        "prepare",
        "drill",
        "exercise",
        "school",
        "tutor",
        "mentor"
    ],
    "antonyms": [
        "neglect",
        "ignore",
        "disregard",
        "unlearn",
        "forget"
    ],
    "questions": [
        "What was the last thing you really trained for?(context: skill development)",
        "How long have you been training for the marathon? (context: sports)",
        "Who will train the new employees? (context: workplace)",
        "Have they trained their dog well? (context: pet training)",
        "Why are we training in this particular method? (context: educational approach)",
        "Will the team be trained in new software tools? (context: technology adaptation)"
    ]
  },

  
  {
    "topic": "housekeeping verbs",
    "category": "regular",
    "verb": "clean up",
    "answer": [
        "I/They/We/You clean up | He/She/It cleans up",
        "I am | He/She/It is | They/We/You are cleaning up",
        "I/You/They/We have | He/She/It has cleaned up",
        "I/You/They/We have been cleaning up | He/She/It has been cleaning up",
        "I/He/She/It/We/You/They cleaned up",
        "I/He/She/It was cleaning up | They/We/You were cleaning up",
        "I/He/She/It/We/You/They had cleaned up",
        "I/He/She/It/We/You/They had been cleaning up",
        "I/He/She/It/We/You/They will clean up",
        "I/He/She/It/We/You/They will be cleaning up",
        "I/He/She/It/We/You/They will have cleaned up",
        "I/He/She/It/We/You/They will have been cleaning up"
    ],
"synonyms":[ "tidy up", "neaten", "straighten up", "put in order", "order", "organize"],

"antonyms":[ "mess up", "disorder", "clutter", "litter", "disarrange", "scatter"],

    "questions": [
        "Is having a party the only reason to clean your apartment?(context: household chores)",
        "Can you clean up your room before guests arrive?(context: household chores)",
        "Who cleans up the kitchen after dinner?(context: family duties)",
        "Have they cleaned up the park after the festival?(context: community service)",
        "Why did she clean up the files on her computer?(context: organization)",
        "How do you clean up your diet for better health?(context: health and nutrition)"
    ]
},

{
    "topic": "general action verbs",
    "category": "regular",
    "verb": "mount",
    "answer": [
        "I/They/We/You mount | He/She/It mounts",
        "I am | He/She/It is | They/We/You are mounting",
        "I/You/They/We have | He/She/It has mounted",
        "I/You/They/We have been mounting | He/She/It has been mounting",
        "I/He/She/It/We/You/They mounted",
        "I/He/She/It was mounting | They/We/You were mounting",
        "I/He/She/It/We/You/They had mounted",
        "I/He/She/It/We/You/They had been mounting",
        "I/He/She/It/We/You/They will mount",
        "I/He/She/It/We/You/They will be mounting",
        "I/He/She/It/We/You/They will have mounted",
        "I/He/She/It/We/You/They will have been mounting"
    ],
    "synonyms": [
        "install", 
        "set up", 
        "fix", 
        "attach", 
        "fit", 
        "place", 
        "position", 
        "affix", 
        "assemble"
    ],
    "antonyms": [
        "dismount", 
        "remove", 
        "detach", 
        "disassemble", 
        "uninstall"
    ],
    "questions": [
        "How do you mount the shelves on the wall?(context: DIY)",
        "Who will mount the new exhibit in the gallery?(context: art exhibition)",
        "Have they mounted the new sign yet?(context: business)",
        "Why was the picture mounted so high?(context: interior design)",
        "Can we mount this on a different wall?(context: home decoration)"
    ]
  },
  
  {
    "topic": "general action verbs",
    "category": "regular",
    "verb": "mount",
    "answer": [
        "I/They/We/You mount | He/She/It mounts",
        "I am | He/She/It is | They/We/You are mounting",
        "I/You/They/We have | He/She/It has mounted",
        "I/You/They/We have been mounting | He/She/It has been mounting",
        "I/He/She/It/We/You/They mounted",
        "I/He/She/It was mounting | They/We/You were mounting",
        "I/He/She/It/We/You/They had mounted",
        "I/He/She/It/We/You/They had been mounting",
        "I/He/She/It/We/You/They will mount",
        "I/He/She/It/We/You/They will be mounting",
        "I/He/She/It/We/You/They will have mounted",
        "I/He/She/It/We/You/They will have been mounting"
    ],
    "synonyms": [
        "install", 
        "set up", 
        "fix", 
        "attach", 
        "fit", 
        "place", 
        "position", 
        "affix", 
        "assemble"
    ],
    "antonyms": [
        "dismount", 
        "remove", 
        "detach", 
        "disassemble", 
        "uninstall"
    ],
    "questions": [
        "How do you mount the shelves on the wall?(context: DIY)",
        "Who will mount the new exhibit in the gallery?(context: art exhibition)",
        "Have they mounted the new sign yet?(context: business)",
        "Why was the picture mounted so high?(context: interior design)",
        "Can we mount this on a different wall?(context: home decoration)"
    ]
  },
  

  
  {
    "topic": "emotion and feeling verbs",
    "category": "regular",
    "verb": "miss",
    "answer": [
        "I/They/We/You miss | He/She/It misses",
        "I am | He/She/It is | They/We/You are missing",
        "I/You/They/We have | He/She/It has missed",
        "I/You/They/We have been missing | He/She/It has been missing",
        "I/He/She/It/We/You/They missed",
        "I/He/She/It was missing | They/We/You were missing",
        "I/He/She/It/We/You/They had missed",
        "I/He/She/It/We/You/They had been missing",
        "I/He/She/It/We/You/They will miss",
        "I/He/She/It/We/You/They will be missing",
        "I/He/She/It/We/You/They will have missed",
        "I/He/She/It/We/You/They will have been missing"
    ],
    "synonyms": [
        "long for", 
        "yearn for", 
        "pine for", 
        "ache for", 
        "lament", 
        "regret the absence of", 
        "be without", 
        "be deprived of", 
        "be missing"
    ],
    "antonyms": [
        "disregard", 
        "ignore", 
        "neglect", 
        "overlook", 
        "have", 
        "possess"
    ],
    "questions": [
        "Do you miss your family when you're away?(context: emotion)",
        "Who misses the old days?(context: nostalgia)",
        "Have you ever missed a great opportunity?(context: regret)",
        "Why do you miss those times so much?(context: reminiscing)",
        "Can you miss someone you've never met?(context: longing)"
    ]
  },
  

  {
    "topic": "common life experience verbs",
    "category": "irregular",
    "verb": "lose",
    "answer": [
        "I/They/We/You lose | He/She/It loses",
        "I am | He/She/It is | They/We/You are losing",
        "I/You/They/We have | He/She/It has lost",
        "I/You/They/We have been losing | He/She/It has been losing",
        "I/He/She/It/We/You/They lost",
        "I/He/She/It was losing | They/We/You were losing",
        "I/He/She/It/We/You/They had lost",
        "I/He/She/It/We/You/They had been losing",
        "I/He/She/It/We/You/They will lose",
        "I/He/She/It/We/You/They will be losing",
        "I/He/She/It/We/You/They will have lost",
        "I/He/She/It/We/You/They will have been losing"
    ],
    "synonyms": [
        "misplace", 
        "mislay", 
        "be deprived of", 
        "be bereaved of", 
        "suffer the loss of", 
        "part with", 
        "be stripped of", 
        "forfeit", 
        "let slip"
    ],
    "antonyms": [
        "find", 
        "recover", 
        "win", 
        "gain", 
        "retain", 
        "keep", 
        "maintain", 
        "possess", 
        "acquire"
    ],
    "questions": [
        "How did you lose your keys?(context: misplacement)",
        "Who loses their temper easily in your family?(context: emotion)",
        "Have they lost much weight recently?(context: health)",
        "If your partner loses their cool, what do you do?(context: relationship)",
        "Why do teams lose focus during matches?(context: sports)",
        "Can one lose interest in a hobby?(context: personal interest)"
    ]
  },
  
  
  {
    "topic": "communication verbs",
    "category": "regular",
    "verb": "complain",
    "answer": [
        "I/They/We/You complain | He/She/It complains",
        "I am | He/She/It is | They/We/You are complaining",
        "I/You/They/We have | He/She/It has complained",
        "I/You/They/We have been complaining | He/She/It has been complaining",
        "I/He/She/It/We/You/They complained",
        "I/He/She/It was complaining | They/We/You were complaining",
        "I/He/She/It/We/You/They had complained",
        "I/He/She/It/We/You/They had been complaining",
        "I/He/She/It/We/You/They will complain",
        "I/He/She/It/We/You/They will be complaining",
        "I/He/She/It/We/You/They will have complained",
        "I/He/She/It/We/You/They will have been complaining"
    ],
    "synonyms": [
        "grumble", 
        "grouse", 
        "whine", 
        "moan", 
        "whinge", 
        "bleat", 
        "carp", 
        "cavil", 
        "protest"
    ],
    "antonyms": [
        "commend", 
        "praise", 
        "applaud", 
        "approve", 
        "accept", 
        "be happy", 
        "be content", 
        "endorse", 
        "agree"
    ],
    "questions": [
        "Why do you people complain about the weather?(context: general annoyance)",
        "Who complains the most in your family?(context: family dynamics)",
        "Who complained about the noise last night?(context: disturbance)",
        "Have they complained to the manager about the service?(context: customer service)",
        "Why do people often complain on social media?(context: online behavior)",
        "Can I complain about a faulty product after a month?(context: consumer rights)"
    ]
  },
  

  
  {
    "topic": "repair and maintenance verbs",
    "category": "phrasal verb (regular)",
    "verb": "fix up",
    "answer": [
        "I/They/We/You fix up | He/She/It fixes up",
        "I am | He/She/It is | They/We/You are fixing up",
        "I/You/They/We have | He/She/It has fixed up",
        "I/You/They/We have been fixing up | He/She/It has been fixing up",
        "I/He/She/It/We/You/They fixed up",
        "I/He/She/It was fixing up | They/We/You were fixing up",
        "I/He/She/It/We/You/They had fixed up",
        "I/He/She/It/We/You/They had been fixing up",
        "I/He/She/It/We/You/They will fix up",
        "I/He/She/It/We/You/They will be fixing up",
        "I/He/She/It/We/You/They will have fixed up",
        "I/He/She/It/We/You/They will have been fixing up"
    ],
    "synonyms": [
        "repair", 
        "mend", 
        "restore", 
        "renovate", 
        "refurbish", 
        "recondition", 
        "overhaul", 
        "rehabilitate", 
        "revamp"
    ],
    "antonyms": [
        "break", 
        "damage", 
        "destroy", 
        "worsen", 
        "neglect"
    ],
    "questions": [
        "Can you fix up the old bike for the kids?(context: repair)",
        "Who will fix up the meeting room for the event?(context: event preparation)",
        "Have you fixed up the leak in the roof?(context: home repair)",
        "Why don't we fix up the garden this weekend?(context: home improvement)",
        "How long will it take to fix up the car?(context: auto repair)"
    ]
  },
  


{
    "topic": "housekeeping verbs",
    "category": "regular",
    "verb": "decide",
    "answer": [
      "I/They/We/You decide | He/She/It decides",
      "I am | He/She/It is | They/We/You are deciding",
      "I/You/They/We have | He/She/It has decided",
      "I/You/They/We have been deciding | He/She/It has been deciding",
      "I/He/She/It/We/You/They decided",
      "I/He/She/It was deciding | They/We/You were deciding",
      "I/He/She/It/We/You/They had decided",
      "I/He/She/It/We/You/They had been deciding",
      "I/He/She/It/We/You/They will decide",
      "I/He/She/It/We/You/They will be deciding",
      "I/He/She/It/We/You/They will have decided",
      "I/He/She/It/We/You/They will have been deciding"
    ],
    "synonyms": [
      "choose", "make up one's mind", "settle on", "determine", "conclude", "resolve"
    ],
    "antonyms": [
      "waver", "hesitate", "fluctuate", "dither", "vacillate", "change one's mind"
    ],
    "questions": [
      "Should you decide on a paint color before buying furniture?(context: home improvement)",
      "Who will decide what to eat for dinner?(context: family dynamics)",
      "How did they decide which charity to support?(context: philanthropy)",
      "Why did she decide to take a break from her job?(context: career choices)",
      "What factors do you consider when deciding on a vacation destination?(context: travel planning)"
    ]
  },
  

  {
    "topic": "housekeeping verbs",
    "category": "phrasal",
    "verb": "give advice",
    "answer": [
      "I/They/We/You give advice (to someone) | He/She/It gives advice (to someone)",
      "I am | He/She/It is | They/We/You are giving advice (to someone)",
      "I/You/They/We have | He/She/It has given advice (to someone)",
      "I/You/They/We have been giving advice (to someone) | He/She/It has been giving advice (to someone)",
      "I/He/She/It/We/You/They gave advice (to someone)",
      "I/He/She/It was giving advice (to someone) | They/We/You were giving advice (to someone)",
      "I/He/She/It/We/You/They had given advice (to someone)",
      "I/He/She/It/We/You/They had been giving advice (to someone)",
      "I/He/She/It/We/You/They will give advice (to someone)",
      "I/He/She/It/We/You/They will be giving advice (to someone)",
      "I/He/She/It/We/You/They will have given advice (to someone)",
      "I/He/She/It/We/You/They will have been giving advice (to someone)"
    ],
    "synonyms": [
      "offer advice", "suggest", "recommend", "counsel", "guide", "instruct", "mentor"
    ],
    "antonyms": [
      "ignore", "disregard", "dismiss", "contradict", "mislead", "deceive", "confuse"
    ],
    "questions": [
      "Can you give me some advice on cleaning up my cluttered room?(context: household needs)",
      "Who should I give advice to about applying for college?(context: academic guidance)",
      "Have they given advice on how to handle this difficult situation?(context: problem-solving)",
      "Why did she give conflicting advice to her two friends?(context: confusion)",
      "How can we give better advice to students struggling with online learning?(context: educational strategies)"
    ]
  },
  

  {
    "topic": "housekeeping verbs",
    "category": "phrasal",
    "verb": "put on",
    "answer": [
      "I/They/We/You put on | He/She/It puts on",
      "I am | He/She/It is | They/We/You are putting on",
      "I/You/They/We have | He/She/It has put on",
      "I/You/They/We have been putting on | He/She/It has been putting on",
      "I/He/She/It/We/You/They put on",
      "I/He/She/It was putting on | They/We/You were putting on",
      "I/He/She/It/We/You/They had put on",
      "I/He/She/It/We/You/They had been putting on",
      "I/He/She/It/We/You/They will put on",
      "I/He/She/It/We/You/They will be putting on",
      "I/He/She/It/We/You/They will have put on",
      "I/He/She/It/We/You/They will have been putting on"
    ],
    "synonyms": [
      "dress in", "wear", "apply", "impose", "stage", "pretend", "deceive" 
    ],
    "antonyms": [
      "take off", "undress", "remove", "lift", "cancel", "reveal", "be honest"
    ],
    "questions": [
      "Can you put on your shoes before we go outside?(context: getting ready)",
      "Who put on the decorations for the party?(context: organizing events)",
      "Have they put on the play about the history of the town?(context: community activities)",
      "Why did she put on that fake accent?(context: deception)",
      "How can we put on a more sustainable fashion show?(context: eco-friendly practices)"
    ]
  },
  


  {
    "topic": "housekeeping verbs",
    "category": "regular",
    "verb": "shut down",
    "answer": [
      "I/They/We/You shut down | He/She/It shuts down",
      "I am | He/She/It is | They/We/You are shutting down",
      "I/You/They/We have | He/She/It has shut down",
      "I/You/They/We have been shutting down | He/She/It has been shutting down",
      "I/He/She/It/We/You/They shut down",
      "I/He/She/It was shutting down | They/We/You were shutting down",
      "I/He/She/It/We/You/They had shut down",
      "I/He/She/It/We/You/They had been shutting down",
      "I/He/She/It/We/You/They will shut down",
      "I/He/She/It/We/You/They will be shutting down",
      "I/He/She/It/We/You/They will have shut down",
      "I/He/She/It/We/You/They will have been shutting down"
    ],
    "synonyms": [
      "close down", "turn off", "deactivate", "power down", "halt", "discontinue"
    ],
    "antonyms": [
      "turn on", "activate", "power up", "start up", "launch", "reactivate"
    ],
    "questions": [
      "Please shut down the computer before leaving for the night.(context: office procedures)",
      "Why did the power plant shut down unexpectedly?(context: infrastructure issues)",
      "Who will shut down the production line for maintenance?(context: factory operations)",
      "Have they shut down the website for updates?(context: web development)",
      "How can we shut down the spread of misinformation online?(context: digital literacy)"
    ]
  },


  {
    "topic": "housekeeping verbs",
    "category": "phrasal",
    "verb": "close down",
    "answer": [
      "I/They/We/You close down | He/She/It closes down",
      "I am | He/She/It is | They/We/You are closing down",
      "I/You/They/We have | He/She/It has closed down",
      "I/You/They/We have been closing down | He/She/It has been closing down",
      "I/He/She/It/We/You/They closed down",
      "I/He/She/It was closing down | They/We/You were closing down",
      "I/He/She/It/We/You/They had closed down",
      "I/He/She/It/We/You/They had been closing down",
      "I/He/She/It/We/You/They will close down",
      "I/He/She/It/We/You/They will be closing down",
      "I/He/She/It/We/You/They will have closed down",
      "I/He/She/It/We/You/They will have been closing down"
    ],
    "synonyms": [
      "shut down", "cease operation", "wind up", "liquidate", "terminate", "discontinue"
    ],
    "antonyms": [
      "open up", "start up", "launch", "initiate", "commence", "reopen"
    ],
    "questions": [
      "When will the library close down for renovations?(context: public services)",
      "Why did the restaurant close down after so many years?(context: business failure)",
      "Who will close down the computer when everyone leaves?(context: office routine)",
      "Have they closed down the street for construction?(context: road closures)",
      "How can we prevent our local park from closing down due to budget cuts?(context: community activism)"
    ]
  },
  

  {
    "topic": "financial verbs",
    "category": "regular",
    "verb": "budget",
    "answer": [
        "I/They/We/You budget | He/She/It budgets",
        "I am | He/She/It is | They/We/You are budgeting",
        "I/You/They/We have | He/She/It has budgeted",
        "I/You/They/We have been budgeting | He/She/It has been budgeting",
        "I/He/She/It/We/You/They budgeted",
        "I/He/She/It was budgeting | They/We/You were budgeting",
        "I/He/She/It/We/You/They had budgeted",
        "I/He/She/It/We/You/They had been budgeting",
        "I/He/She/It/We/You/They will budget",
        "I/He/She/It/We/You/They will be budgeting",
        "I/He/She/It/We/You/They will have budgeted",
        "I/He/She/It/We/You/They will have been budgeting"
    ],
    "synonyms": [
        "plan",
        "allocate",
        "manage",
        "forecast",
        "calculate",
        "estimate"
    ],
    "antonyms": [
        "squander",
        "waste",
        "mismanage",
        "overspend"
    ],
    "questions": [
        "How do you budget your monthly expenses?(context: finance)",
        "Who budgets for your household?(context: family finance)",
        "Have you budgeted enough for your trip?(context: travel)",
        "Why is it important to budget wisely?(context: financial planning)",
        "Can we budget for a new project this quarter?(context: business)"
    ]
},



  {
    "topic": "action verbs",
    "category": "regular",
    "verb": "close",
    "answer": [
        "I/They/We/You close | He/She/It closes",
        "I am | He/She/It is | They/We/You are closing",
        "I/You/They/We have | He/She/It has closed",
        "I/You/They/We have been closing | He/She/It has been closing",
        "I/He/She/It/We/You/They closed",
        "I/He/She/It was closing | They/We/You were closing",
        "I/He/She/It/We/You/They had closed",
        "I/He/She/It/We/You/They had been closing",
        "I/He/She/It/We/You/They will close",
        "I/He/She/It/We/You/They will be closing",
        "I/He/She/It/We/You/They will have closed",
        "I/He/She/It/We/You/They will have been closing"
    ],
    "synonyms": [
        "shut",
        "seal",
        "lock",
        "secure",
        "fasten",
        "bar",
        "latch",
        "terminate",
        "conclude",
        "finish"
    ],
    "antonyms": [
        "open",
        "unseal",
        "unlock",
        "unbar",
        "unlatch",
        "start",
        "begin",
        "initiate"
    ],
    "questions": [
        "Can you close the door quietly? (context: request)",
        "Who closes the shop every evening? (context: routine)",
        "Have they closed the deal with the client? (context: business)",
        "Why did the city close that old bridge? (context: public safety)",
        "Will the bank close my account if it remains inactive? (context: banking)"
    ]
  },

  {
    "topic": "initiation verbs",
    "category": "irregular",
    "verb": "begin",
    "answer": [
        "I/They/We/You begin | He/She/It begins",
        "I am | He/She/It is | They/We/You are beginning",
        "I/You/They/We have | He/She/It has begun",
        "I/You/They/We have been beginning | He/She/It has been beginning",
        "I/He/She/It/We/You/They began",
        "I/He/She/It was beginning | They/We/You were beginning",
        "I/He/She/It/We/You/They had begun",
        "I/He/She/It/We/You/They had been beginning",
        "I/He/She/It/We/You/They will begin",
        "I/He/She/It/We/You/They will be beginning",
        "I/He/She/It/We/You/They will have begun",
        "I/He/She/It/We/You/They will have been beginning"
    ],
    "synonyms": [
        "start",
        "commence",
        "initiate",
        "launch",
        "inaugurate",
        "embark on",
        "kick off",
        "institute",
        "originate",
        "open"
    ],
    "antonyms": [
        "end",
        "finish",
        "conclude",
        "terminate",
        "cease",
        "complete",
        "stop",
        "halt",
        "close",
        "wind up"
    ],
    "questions": [
        "When will the concert begin? (context: event scheduling)",
        "Who began this tradition in our family? (context: family history)",
        "Have they begun the construction of the new building? (context: development)",
        "Why did the meeting begin late? (context: timing)",
        "Will the course begin with a basic introduction? (context: education)"
    ]
  },
  
  {
    "topic": "activity verbs",
    "category": "phrasal verb (regular)",
    "verb": "get busy",
    "answer": [
        "I/They/We/You get busy | He/She/It gets busy",
        "I am | He/She/It is | They/We/You are getting busy",
        "I/You/They/We have | He/She/It has gotten busy",
        "I/You/They/We have been getting busy | He/She/It has been getting busy",
        "I/He/She/It/We/You/They got busy",
        "I/He/She/It was getting busy | They/We/You were getting busy",
        "I/He/She/It/We/You/They had gotten busy",
        "I/He/She/It/We/You/They had been getting busy",
        "I/He/She/It/We/You/They will get busy",
        "I/He/She/It/We/You/They will be getting busy",
        "I/He/She/It/We/You/They will have gotten busy",
        "I/He/She/It/We/You/They will have been getting busy"
    ],
    "synonyms": [
        "become occupied",
        "start working",
        "engage in activity",
        "take action",
        "become active",
        "buckle down",
        "get to work",
        "immerse oneself",
        "throw oneself into"
    ],
    "antonyms": [
        "relax",
        "rest",
        "idle",
        "laze",
        "loaf",
        "unwind",
        "take it easy",
        "be inactive",
        "chill out"
    ],
    "questions": [
        "Can you get busy with the report now? (context: work urgency)",
        "Who got busy organizing the event? (context: event planning)",
        "Have they gotten busy with the new project? (context: project engagement)",
        "Why do we need to get busy with the preparations immediately? (context: urgency)",
        "Will the team get busy with the testing phase next week? (context: project planning)"
    ]
  },
  


{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "ask",
    "answer": [
        "I/They/We/You ask | He/She/It asks",
        "I am | He/She/It is | They/We/You are asking",
        "I/You/They/We have | He/She/It has asked",
        "I/You/They/We have been asking | He/She/It has been asking",
        "I/He/She/It/We/You/They asked",
        "I/He/She/It was asking | They/We/You were asking",
        "I/He/She/It/We/You/They had asked",
        "I/He/She/It/We/You/They had been asking",
        "I/He/She/It/We/You/They will ask",
        "I/He/She/It/We/You/They will be asking",
        "I/He/She/It/We/You/They will have asked",
        "I/He/She/It/We/You/They will have been asking"
    ],
    "synonyms": [
        "inquire",
        "question",
        "interrogate",
        "query",
        "probe",
        "quiz",
        "seek information",
        "solicit",
        "request"
    ],
    "antonyms": [
        "answer",
        "reply",
        "respond",
        "retort",
        "rebut"
    ],
    "questions": [
        "Can I ask you a favor? (context: personal)",
        "Who will ask the next question in the meeting? (context: work)",
        "Have you asked for their opinion? (context: consultation)",
        "What's your asking price? (context: negotiation)",
        "Why did she ask about that old incident? (context: curiosity)",
        "Will they ask for additional resources? (context: project management)"
    ]
  },
  



{
    "topic": "movement verbs",
    "category": "regular",
    "verb": "arrive",
    "answer": [
        "I/They/We/You arrive | He/She/It arrives",
        "I am | He/She/It is | They/We/You are arriving",
        "I/You/They/We have | He/She/It has arrived",
        "I/You/They/We have been arriving | He/She/It has been arriving",
        "I/He/She/It/We/You/They arrived",
        "I/He/She/It was arriving | They/We/You were arriving",
        "I/He/She/It/We/You/They had arrived",
        "I/He/She/It/We/You/They had been arriving",
        "I/He/She/It/We/You/They will arrive",
        "I/He/She/It/We/You/They will be arriving",
        "I/He/She/It/We/You/They will have arrived",
        "I/He/She/It/We/You/They will have been arriving"
    ],
    "synonyms": ["reach", "come", "appear", "turn up", "show up", "enter", "make it", "land", "alight", "emerge", "get in", "materialize"],
    "antonyms": ["depart", "leave", "exit", "go", "disappear", "vanish", "move away", "withdraw", "retreat", "embark", "set off"],
    "questions": [
        "When will you arrive at the destination? (context: travel)",
        "Who arrived first at the meeting? (context: event attendance)",
        "Have they arrived at the hotel yet? (context: accommodation)",
        "What time did you arrive home? (context: daily routine)",
        "Why did you arrive late? (context: punctuality)"
    ]
}

,

{
    "topic": "appearance verbs",
    "category": "regular",
    "verb": "show up",
    "answer": [
        "I/They/We/You show up | He/She/It shows up",
        "I am | He/She/It is | They/We/You are showing up",
        "I/You/They/We have | He/She/It has shown up",
        "I/You/They/We have been showing up | He/She/It has been showing up",
        "I/He/She/It/We/You/They showed up",
        "I/He/She/It was showing up | They/We/You were showing up",
        "I/He/She/It/We/You/They had shown up",
        "I/He/She/It/We/You/They had been showing up",
        "I/He/She/It/We/You/They will show up",
        "I/He/She/It/We/You/They will be showing up",
        "I/He/She/It/We/You/They will have shown up",
        "I/He/She/It/We/You/They will have been showing up"
    ],
    "synonyms": [
        "arrive", 
        "appear", 
        "turn up", 
        "come", 
        "attend", 
        "be present", 
        "materialize", 
        "emerge", 
        "surface"
    ],
    "antonyms": [
        "leave", 
        "depart", 
        "exit", 
        "disappear", 
        "vanish", 
        "absent oneself"
    ],
    "questions": [
        "Who showed up at the party? (context: social event)",
        "Did everyone show up on time? (context: meeting)",
        "How do you react when uninvited guests show up? (context: hosting)",
        "Why didn't you show up yesterday? (context: appointment)",
        "What happens if the main speaker doesn't show up? (context: event planning)"
    ]
  }
  ,



{
    "topic": "relationship verbs",
    "category": "regular",
    "verb": "divorce",
    "answer": [
        "I/They/We/You divorce | He/She/It divorces",
        "I am | He/She/It is | They/We/You are divorcing",
        "I/You/They/We have | He/She/It has divorced",
        "I/You/They/We have been divorcing | He/She/It has been divorcing",
        "I/He/She/It/We/You/They divorced",
        "I/He/She/It was divorcing | They/We/You were divorcing",
        "I/He/She/It/We/You/They had divorced",
        "I/He/She/It/We/You/They had been divorcing",
        "I/He/She/It/We/You/They will divorce",
        "I/He/She/It/We/You/They will be divorcing",
        "I/He/She/It/We/You/They will have divorced",
        "I/He/She/It/We/You/They will have been divorcing"
    ],
    "synonyms": ["separate", "split", "part", "break up", "dissolve", "end", "terminate", "annul", "disunite", "disjoin", "detach", "disengage"],
    "antonyms": ["marry", "unite", "join", "combine", "merge", "connect", "couple", "pair", "associate", "reconcile", "integrate", "amalgamate"],
    "questions": [
        "Why did they divorce? (context: separation)",
        "Who is getting a divorce? (context: legal proceedings)",
"Have you ever been divorced? (context: personal)",
        "Have you finalized your divorce yet? (context: legal process)",
        "What are the terms of the divorce? (context: agreement)",
        "How long did the divorce take? (context: duration)"
    ]
}
,


{
    "topic": "relationship verbs",
    "category": "regular",
    "verb": "marry",
    "answer": [
        "I/They/We/You marry | He/She/It marries",
        "I am | He/She/It is | They/We/You are marrying",
        "I/You/They/We have | He/She/It has married",
        "I/You/They/We have been marrying | He/She/It has been marrying",
        "I/He/She/It/We/You/They married",
        "I/He/She/It was marrying | They/We/You were marrying",
        "I/He/She/It/We/You/They had married",
        "I/He/She/It/We/You/They had been marrying",
        "I/He/She/It/We/You/They will marry",
        "I/He/She/It/We/You/They will be marrying",
        "I/He/She/It/We/You/They will have married",
        "I/He/She/It/We/You/They will have been marrying"
    ],
    "synonyms": ["wed", "unite", "join", "bond", "tie the knot", "become espoused", "take the plunge", "walk down the aisle", "pair up", "get hitched", "pledge", "engage"],
    "antonyms": ["divorce", "separate", "split", "part", "dissolve", "break up", "terminate", "annul", "disunite", "disengage", "detach", "disconnect"],
    "questions": [
        "When are you planning to marry? (context: wedding planning)",
        "Who will marry us? (context: ceremony officiant)",
        "Have you married before? (context: personal history)",
        "What made you decide to marry? (context: relationship)",
        "How did you celebrate your marriage? (context: celebration)"
    ]
},



{
    "topic": "emotional verbs",
    "category": "regular",
    "verb": "worry about",
    "answer": [
        "I/They/We/You worry about | He/She/It worries about",
        "I am | He/She/It is | They/We/You are worrying about",
        "I/You/They/We have | He/She/It has worried about",
        "I/You/They/We have been worrying about | He/She/It has been worrying about",
        "I/He/She/It/We/You/They worried about",
        "I/He/She/It was worrying about | They/We/You were worrying about",
        "I/He/She/It/We/You/They had worried about",
        "I/He/She/It/We/You/They had been worrying about",
        "I/He/She/It/We/You/They will worry about",
        "I/He/She/It/We/You/They will be worrying about",
        "I/He/She/It/We/You/They will have worried about",
        "I/He/She/It/We/You/They will have been worrying about"
    ],
"synonyms":[ "fret about", "agonize over", "be anxious about", "be concerned about", "stew over"],

"antonyms":[ "ignore", "neglect", "disregard", "overlook", "be unconcerned about", "be indifferent to"],

    "questions": [
        "Why do you always worry about small details?(context: anxiety)",
        "Who worries about making mistakes in your team?(context: team dynamics)",
        "Have you worried about the upcoming exam?(context: academic anxiety)",
        "Why did she worry about traveling alone?(context: safety concerns)",
        "How can we stop worrying about things we can't control?(context: stress management)"
    ]
},


{
    "topic": "relaxation verbs",
    "category": "regular",
    "verb": "take a breath",
    "answer": [
        "I/They/We/You take a breath | He/She/It takes a breath",
        "I am | He/She/It is | They/We/You are taking a breath",
        "I/You/They/We have | He/She/It has taken a breath",
        "I/You/They/We have been taking a breath | He/She/It has been taking a breath",
        "I/He/She/It/We/You/They took a breath",
        "I/He/She/It was taking a breath | They/We/You were taking a breath",
        "I/He/She/It/We/You/They had taken a breath",
        "I/He/She/It/We/You/They had been taking a breath",
        "I/He/She/It/We/You/They will take a breath",
        "I/He/She/It/We/You/They will be taking a breath",
        "I/He/She/It/We/You/They will have taken a breath",
        "I/He/She/It/We/You/They will have been taking a breath"
    ],
"synonyms":[ "inhale", "breathe in", "draw breath", "respire", "gasp", "catch one's breath"],

"antonyms":[ "exhale", "breathe out", "hold one's breath", "suffocate", "asphyxiate"],

    "questions": [
        "Can we take a breath before starting the next session?(context: relaxation)",
        "Who took a deep breath before diving into the pool?(context: swimming)",
        "Have you taken a breath and calmed down yet?(context: emotional regulation)",
        "Why did he take a breath before answering the question?(context: public speaking)",
        "How do you take a breath to relieve stress?(context: stress management)"
    ]
},


{
      "topic": "discussion verbs",
      "category": "regular",
      "verb": "bring up",
      "answer": [
          "I/They/We/You bring up | He/She/It brings up",
          "I am | He/She/It is | They/We/You are bringing up",
          "I/You/They/We have | He/She/It has brought up",
          "I/You/They/We have been bringing up | He/She/It has been bringing up",
          "I/He/She/It/We/You/They brought up",
          "I/He/She/It was bringing up | They/We/You were bringing up",
          "I/He/She/It/We/You/They had brought up",
          "I/He/She/It/We/You/They had been bringing up",
          "I/He/She/It/We/You/They will bring up",
          "I/He/She/It/We/You/They will be bringing up",
          "I/He/She/It/We/You/They will have brought up",
          "I/He/She/It/We/You/They will have been bringing up"
      ],
"synonyms":[ "mention", "raise", "introduce", "talk about", "refer to", "discuss"],

"antonyms":[ "suppress", "overlook", "ignore", "neglect", "bypass", "omit"],

      "questions": [
          "When will you bring up the budget issue in the meeting?(context: business)",
          "Who brings up the best ideas in your team?(context: teamwork)",
          "Have they brought up the new policy changes yet?(context: policy discussion)",
          "Why did he bring up that old argument again?(context: conflict)",
          "How do you bring up sensitive topics with friends?(context: social interaction)"
      ]
  },


{
    "topic": "movement verbs",
    "category": "irregular",
    "verb": "bring",
    "answer": [
        "I/They/We/You bring | He/She/It brings",
        "I am | He/She/It is | They/We/You are bringing",
        "I/You/They/We have | He/She/It has brought",
        "I/You/They/We have been bringing | He/She/It has been bringing",
        "I/He/She/It/We/You/They brought",
        "I/He/She/It was bringing | They/We/You were bringing",
        "I/He/She/It/We/You/They had brought",
        "I/He/She/It/We/You/They had been bringing",
        "I/He/She/It/We/You/They will bring",
        "I/He/She/It/We/You/They will be bringing",
        "I/He/She/It/We/You/They will have brought",
        "I/He/She/It/We/You/They will have been bringing"
    ],
    "synonyms": [
        "carry",
        "convey",
        "deliver",
        "fetch",
        "take",
        "transport",
        "bear",
        "haul",
        "lug",
        "shift",
        "transfer",
        "transmit"
    ],
    "antonyms": [
        "take away",
        "remove",
        "withdraw",
        "depart",
        "leave"
    ],
    "questions": [
        "Can you bring your notes to the meeting? (context: work)",
        "Who brought these flowers? (context: social)",
        "Have they brought the documents? (context: business)",
        "What did you bring for the picnic? (context: social)",
        "How often do you bring your kids to the park? (context: family)"
    ]
  },
  
,

{
    "topic": "life events verbs",
    "category": "irregular",
    "verb": "give birth",
    "answer": [
        "I/They/We/You give birth | He/She/It gives birth",
        "I am | He/She/It is | They/We/You are giving birth",
        "I/You/They/We have | He/She/It has given birth",
        "I/You/They/We have been giving birth | He/She/It has been giving birth",
        "I/He/She/It/We/You/They gave birth",
        "I/He/She/It was giving birth | They/We/You were giving birth",
        "I/He/She/It/We/You/They had given birth",
        "I/He/She/It/We/You/They had been giving birth",
        "I/He/She/It/We/You/They will give birth",
        "I/He/She/It/We/You/They will be giving birth",
        "I/He/She/It/We/You/They will have given birth",
        "I/He/She/It/We/You/They will have been giving birth"
    ],
    "synonyms": [
        "deliver",
        "bear",
        "produce offspring",
        "be delivered of",
        "labor",
        "be in labor"
    ],
    "antonyms": [
        "conceive",
        "impregnate",
        "father"
    ],
    "questions": [
        "When did she give birth to her first child? (context: family)",
        "How many times have you given birth? (context: medical)",
        "Are they preparing to give birth? (context: healthcare)",
        "Who gave birth to the idea? (context: metaphorical, creative)",
        "Will she be giving birth at the hospital? (context: healthcare)"
    ]
  },


  {
    "topic": "movement verbs",
    "category": "regular",
    "verb": "rush",
    "answer": [
        "I/They/We/You rush | He/She/It rushes",
        "I am | He/She/It is | They/We/You are rushing",
        "I/You/They/We have | He/She/It has rushed",
        "I/You/They/We have been rushing | He/She/It has been rushing",
        "I/He/She/It/We/You/They rushed",
        "I/He/She/It was rushing | They/We/You were rushing",
        "I/He/She/It/We/You/They had rushed",
        "I/He/She/It/We/You/They had been rushing",
        "I/He/She/It/We/You/They will rush",
        "I/He/She/It/We/You/They will be rushing",
        "I/He/She/It/We/You/They will have rushed",
        "I/He/She/It/We/You/They will have been rushing"
    ],
    "synonyms": [
        "hurry",
        "speed",
        "race",
        "run",
        "dash",
        "sprint",
        "hasten",
        "bolt",
        "scurry",
        "charge"
    ],
    "antonyms": [
        "dawdle",
        "delay",
        "linger",
        "loiter",
        "crawl",
        "creep",
        "procrastinate",
        "amble",
        "saunter"
    ],
    "questions": [
        "Why do we always rush in the mornings? (context: daily routine)",
        "Who rushed to the hospital after hearing the news? (context: emergency)",
        "Why did they rush delivery? (context: business)",
        "Is rushing this project a good idea? (context: project management)",
        "Have they rushed the production process? (context: business)",
        "How can you rush through your homework so quickly? (context: study habits)",
        "Will she rush into making a decision? (context: decision making)"
    ]
  },
  

  
{
      "topic": "daily activities",
      "category": "irregular",
      "verb": "get up",
      "answer": [
          "I/They/We/You get up | He/She/It gets up",
          "I am | He/She/It is | They/We/You are getting up",
          "I/You/They/We have | He/She/It has got up",
          "I/You/They/We have been getting up | He/She/It has been getting up",
          "I/He/She/It/We/You/They got up",
          "I/He/She/It was getting up | They/We/You were getting up",
          "I/He/She/It/We/You/They had got up",
          "I/He/She/It/We/You/They had been getting up",
          "I/He/She/It/We/You/They will get up",
          "I/He/She/It/We/You/They will be getting up",
          "I/He/She/It/We/You/They will have got up",
          "I/He/She/It/We/You/They will have been getting up"
      ],
"synonyms":[ "rise", "arise", "stand up", "awaken", "stir", "come to one's feet"],

"antonyms":[ "lie down", "sit down", "recline", "rest", "settle", "remain seated"],

      "questions": [
          "What time do you usually get up in the morning?(context: daily routine)",
          "Who gets up first in your household?(context: family dynamics)",
          "Have you got up late today?(context: time management)",
          "If they got up so early, then why were they late?(context: punctuality)",
          "Why did he get up so early on the weekend?(context: personal habits)",
          "How do you feel when you get up for a morning workout?(context: fitness)"
      ]
  },

  
  {
        "topic": "motion verbs",
        "category": "regular",
        "verb": "slow down",
        "answer": [
            "I/They/We/You slow down | He/She/It slows down",
            "I am | He/She/It is | They/We/You are slowing down",
            "I/You/They/We have | He/She/It has slowed down",
            "I/You/They/We have been slowing down | He/She/It has been slowing down",
            "I/He/She/It/We/You/They slowed down",
            "I/He/She/It was slowing down | They/We/You were slowing down",
            "I/He/She/It/We/You/They had slowed down",
            "I/He/She/It/We/You/They had been slowing down",
            "I/He/She/It/We/You/They will slow down",
            "I/He/She/It/We/You/They will be slowing down",
            "I/He/She/It/We/You/They will have slowed down",
            "I/He/She/It/We/You/They will have been slowing down"
        ],
  "synonyms":[ "decelerate", "reduce speed", "ease up", "moderate", "slacken", "lessen pace"],
  
  "antonyms":[ "speed up", "accelerate", "hasten", "quicken", "rush", "increase pace"],
  
        "questions": [
            "Why did the driver slow down at the intersection?(context: driving)",
            "If you slow down, you might see the details.(context: observation)",
            "Who needs to slow down while speaking in meetings?(context: communication)",
            "Have you slowed down your work pace due to stress?(context: work-life balance)",
            "Why should we slow down our eating?(context: health advice)",
            "How can I slow down my thoughts before sleeping?(context: relaxation)"
        ]
    },
  



  {
    "topic": "preparation verbs",
    "category": "phrasal verb (regular)",
    "verb": "get ready",
    "answer": [
        "I/They/We/You get ready | He/She/It gets ready",
        "I am | He/She/It is | They/We/You are getting ready",
        "I/You/They/We have got | He/She/It has gotten ready",
        "I/You/They/We have been getting ready | He/She/It has been getting ready",
        "I/He/She/It/We/You/They got ready",
        "I/He/She/It was getting ready | They/We/You were getting ready",
        "I/He/She/It/We/You/They had gotten ready",
        "I/He/She/It/We/You/They had been getting ready",
        "I/He/She/It/We/You/They will get ready",
        "I/He/She/It/We/You/They will be getting ready",
        "I/He/She/It/We/You/They will have gotten ready",
        "I/He/She/It/We/You/They will have been getting ready"
    ],
    "synonyms": [
        "prepare",
        "make preparations",
        "dress",
        "gear up",
        "set up",
        "arrange",
        "organize",
        "equip",
        "make ready"
    ],
    "antonyms": [
        "unprepare",
        "disorganize",
        "undress",
        "neglect",
        "disregard"
    ],
    "questions": [
        "Are you getting ready for the party? (context: social)",
        "How long does it take for you to get ready in the morning? (context: daily routine)",
        "Have they gotten ready for their trip? (context: travel)",
        "Who got ready first? (context: competition)",
        "Why did you get ready so early? (context: punctuality)",
        "If you are ready and your partner is not ready, what do usually you do?",
        "How long will it take to get ready? (context: time management)",
        "Will we have enough time to get ready? (context: time management)"
    ]
  },

  {
    "topic": "memory verbs",
    "category": "phrasal verb (irregular)",
    "verb": "forget about",
    "answer": [
        "I/They/We/You forget about | He/She/It forgets about",
        "I am | He/She/It is | They/We/You are forgetting about",
        "I/You/They/We have | He/She/It has forgotten about",
        "I/You/They/We have been forgetting about | He/She/It has been forgetting about",
        "I/He/She/It/We/You/They forgot about",
        "I/He/She/It was forgetting about | They/We/You were forgetting about",
        "I/He/She/It/We/You/They had forgotten about",
        "I/He/She/It/We/You/They had been forgetting about",
        "I/He/She/It/We/You/They will forget about",
        "I/He/She/It/We/You/They will be forgetting about",
        "I/He/She/It/We/You/They will have forgotten about",
        "I/He/She/It/We/You/They will have been forgetting about"
    ],
    "synonyms": [
        "disregard",
        "overlook",
        "neglect",
        "ignore",
        "omit",
        "dismiss",
        "overpass",
        "skip",
        "bypass"
    ],
    "antonyms": [
        "remember",
        "recall",
        "recollect",
        "bear in mind",
        "keep in mind"
    ],
    "questions": [
        "Did you forget about the meeting? (context: work)",
        "Who often forgets about their appointments? (context: personal)",
        "If you forget something repeatedly, what does that tell you?",
        "Have you ever forgotten about your mother's birthday? (context: personal)",
        "Have they forgotten about the promise they made? (context: social)",
        "Why do I always forget about these small details? (context: self-reflection)",
        "Will you forget about this incident? (context: personal)"
    ]
  },
  
  {
    "topic": "communication verbs",
    "category": "phrasal verb (regular)",
    "verb": "hear about",
    "answer": [
        "I/They/We/You hear about | He/She/It hears about",
        "I am | He/She/It is | They/We/You are hearing about",
        "I/You/They/We have | He/She/It has heard about",
        "I/You/They/We have been hearing about | He/She/It has been hearing about",
        "I/He/She/It/We/You/They heard about",
        "I/He/She/It was hearing about | They/We/You were hearing about",
        "I/He/She/It/We/You/They had heard about",
        "I/He/She/It/We/You/They had been hearing about",
        "I/He/She/It/We/You/They will hear about",
        "I/He/She/It/We/You/They will be hearing about",
        "I/He/She/It/We/You/They will have heard about",
        "I/He/She/It/We/You/They will have been hearing about"
    ],
    "synonyms": [
        "learn of",
        "find out about",
        "be informed of",
        "become aware of",
        "be told about",
        "get wind of",
        "receive news of",
        "be apprised of",
        "be briefed about"
    ],
    "antonyms": [
        "unaware of",
        "ignore",
        "overlook",
        "miss",
        "neglect"
    ],
    "questions": [
        "Did you hear about the new policy? (context: work)",
        "Who heard about the accident first? (context: news)",
        "If you hear about this again, let me know. (context: communication)",
        "Have they heard about the changes in the project? (context: business)",
        "Why haven't we heard about this earlier? (context: surprise)",
        "Will you hear about the results soon? (context: anticipation)"
    ]
  },
  
  {
    "topic": "exclusion verbs",
    "category": "phrasal verb (regular)",
    "verb": "leave out",
    "answer": [
        "I/They/We/You leave out | He/She/It leaves out",
        "I am | He/She/It is | They/We/You are leaving out",
        "I/You/They/We have | He/She/It has left out",
        "I/You/They/We have been leaving out | He/She/It has been leaving out",
        "I/He/She/It/We/You/They left out",
        "I/He/She/It was leaving out | They/We/You were leaving out",
        "I/He/She/It/We/You/They had left out",
        "I/He/She/It/We/You/They had been leaving out",
        "I/He/She/It/We/You/They will leave out",
        "I/He/She/It/We/You/They will be leaving out",
        "I/He/She/It/We/You/They will have left out",
        "I/He/She/It/We/You/They will have been leaving out"
    ],
    "synonyms": [
        "omit",
        "exclude",
        "overlook",
        "disregard",
        "miss",
        "skip",
        "ignore",
        "neglect",
        "bypass"
    ],
    "antonyms": [
        "include",
        "consider",
        "add",
        "embrace",
        "incorporate"
    ],
    "questions": [
        "Did you leave out any details in your report? (context: work)",
        "If you leave out that part, does it still make sense? (context: communication)",
        "Who always leaves out the important parts of the story? (context: storytelling)",
        "Have they left out anyone from the invitation list? (context: event planning)",
        "Why do you leave out vegetables in your diet? (context: personal habits)",
        "Will the teacher leave out any topics in the final exam? (context: education)"
    ]
  },

  {
    "topic": "error verbs",
    "category": "regular",
    "verb": "mess up",
    "answer": [
        "I/They/We/You mess up | He/She/It messes up",
        "I am | He/She/It is | They/We/You are messing up",
        "I/You/They/We have | He/She/It has messed up",
        "I/You/They/We have been messing up | He/She/It has been messing up",
        "I/He/She/It/We/You/They messed up",
        "I/He/She/It was messing up | They/We/You were messing up",
        "I/He/She/It/We/You/They had messed up",
        "I/He/She/It/We/You/They had been messing up",
        "I/He/She/It/We/You/They will mess up",
        "I/He/She/It/We/You/They will be messing up",
        "I/He/She/It/We/You/They will have messed up",
        "I/He/She/It/We/You/They will have been messing up"
    ],
"synonyms":[ "botch", "bungle", "foul up", "blunder", "screw up", "muddle"],

"antonyms":[ "succeed", "excel", "do well", "achieve", "get right", "perfect"],

    "questions": [
        "Why do you think you mess up in tests even after studying?(context: academic performance)",
        "Who messes up the most in your sports team?(context: team dynamics)",
        "Have they messed up the order again?(context: customer service)",
        "Why did he mess up the presentation at the last minute?(context: work tasks)",
        "How do you handle it when you mess up in a relationship?(context: personal relationships)"
    ]
},



{
      "topic": "inquiry verbs",
      "category": "regular",
      "verb": "ask around",
      "answer": [
          "I/They/We/You ask around | He/She/It asks around",
          "I am | He/She/It is | They/We/You are asking around",
          "I/You/They/We have | He/She/It has asked around",
          "I/You/They/We have been asking around | He/She/It has been asking around",
          "I/He/She/It/We/You/They asked around",
          "I/He/She/It was asking around | They/We/You were asking around",
          "I/He/She/It/We/You/They had asked around",
          "I/He/She/It/We/You/They had been asking around",
          "I/He/She/It/We/You/They will ask around",
          "I/He/She/It/We/You/They will be asking around",
          "I/He/She/It/We/You/They will have asked around",
          "I/He/She/It/We/You/They will have been asking around"
      ],
"synonyms":[ "inquire", "seek information", "probe", "investigate", "question", "gather information"],

"antonyms":[ "ignore", "overlook", "disregard", "neglect", "bypass", "avoid asking"],

      "questions": [
          "Can you ask around to see who knows a good plumber?(context: finding services)",
          "Who asked around about the missing files?(context: workplace inquiry)",
          "Have they asked around for any job openings?(context: job hunting)",
          "Why did she ask around for opinions on her project?(context: feedback gathering)",
          "How do you ask around discreetly in a small office?(context: sensitive inquiries)"
      ]
  },





  {
    "topic": "separation verbs",
    "category": "regular",
    "verb": "leave behind",
    "answer": [
        "I/They/We/You leave behind | He/She/It leaves behind",
        "I am | He/She/It is | They/We/You are leaving behind",
        "I/You/They/We have | He/She/It has left behind",
        "I/You/They/We have been leaving behind | He/She/It has been leaving behind",
        "I/He/She/It/We/You/They left behind",
        "I/He/She/It was leaving behind | They/We/You were leaving behind",
        "I/He/She/It/We/You/They had left behind",
        "I/He/She/It/We/You/They had been leaving behind",
        "I/He/She/It/We/You/They will leave behind",
        "I/He/She/It/We/You/They will be leaving behind",
        "I/He/She/It/We/You/They will have left behind",
        "I/He/She/It/We/You/They will have been leaving behind"
    ],
"synonyms":[ "abandon", "forsake", "discard", "forget", "neglect", "omit"],

"antonyms":[ "take", "bring", "carry", "retain", "keep", "hold on to"],

    "questions": [
        "Why did you leave behind your umbrella?(context: forgetfulness)",
        "Who leaves behind the most items at school?(context: school environment)",
        "Have they left behind any of their belongings?(context: moving out)",
        "Can we leave behind old habits and start fresh?(context: personal development)",
        "How do you feel when you are left behind on a trip?(context: social experiences)"
    ]
},





  {
    "topic": "control verbs",
    "category": "phrasal verb (regular)",
    "verb": "take over",
    "answer": [
        "I/They/We/You take over | He/She/It takes over",
        "I am | He/She/It is | They/We/You are taking over",
        "I/You/They/We have | He/She/It has taken over",
        "I/You/They/We have been taking over | He/She/It has been taking over",
        "I/He/She/It/We/You/They took over",
        "I/He/She/It was taking over | They/We/You were taking over",
        "I/He/She/It/We/You/They had taken over",
        "I/He/She/It/We/You/They had been taking over",
        "I/He/She/It/We/You/They will take over",
        "I/He/She/It/We/You/They will be taking over",
        "I/He/She/It/We/You/They will have taken over",
        "I/He/She/It/We/You/They will have been taking over"
    ],
    "synonyms": [
        "assume control",
        "seize control",
        "usurp",
        "commandeer",
        "annex",
        "occupy",
        "conquer",
        "acquire",
        "inherit"
    ],
    "antonyms": [
        "relinquish",
        "surrender",
        "abandon",
        "cede",
        "give up",
        "yield",
        "resign",
        "release"
    ],
    "questions": [
        "Who will take over the company after the CEO retires? (context: business)",
        "If they take over the department, what will change? (context: management)",
        "Have they taken over the responsibilities of the project? (context: management)",
        "Why did the government take over the failing bank? (context: economics)",
        "When will the new manager take over the team? (context: work transition)",
        "Will she take over the lead role in the play? (context: theater)"
    ]
  },
  



  {
    "topic": "continuation verbs",
    "category": "phrasal verb (irregular)",
    "verb": "go on",
    "answer": [
        "I/They/We/You go on | He/She/It goes on",
        "I am | He/She/It is | They/We/You are going on",
        "I/You/They/We have | He/She/It has gone on",
        "I/You/They/We have been going on | He/She/It has been going on",
        "I/He/She/It/We/You/They went on",
        "I/He/She/It was going on | They/We/You were going on",
        "I/He/She/It/We/You/They had gone on",
        "I/He/She/It/We/You/They had been going on",
        "I/He/She/It/We/You/They will go on",
        "I/He/She/It/We/You/They will be going on",
        "I/He/She/It/We/You/They will have gone on",
        "I/He/She/It/We/You/They will have been going on"
    ],
    "synonyms": [
        "continue",
        "proceed",
        "carry on",
        "persist",
        "endure",
        "keep on",
        "maintain",
        "resume",
        "sustain"
    ],
    "antonyms": [
        "stop",
        "halt",
        "cease",
        "discontinue",
        "end",
        "pause",
        "quit",
        "terminate"
    ],
    "questions": [
        "How long will the meeting go on? (context: duration)",
        "Who can go on talking for hours? (context: personal trait)",
        "If you continue to go on like that, I will have to leave. (context: annoyance)",
        "Have they decided to go on with the project? (context: business decision)",
        "Why does this problem always go on? (context: ongoing issue)",
        "Will the show go on despite the weather? (context: event planning)"
    ]
  },
    


  {
    "topic": "research verbs",
    "category": "phrasal verb (regular)",
    "verb": "look up",
    "answer": [
        "I/They/We/You look up | He/She/It looks up",
        "I am | He/She/It is | They/We/You are looking up",
        "I/You/They/We have | He/She/It has looked up",
        "I/You/They/We have been looking up | He/She/It has been looking up",
        "I/He/She/It/We/You/They looked up",
        "I/He/She/It was looking up | They/We/You were looking up",
        "I/He/She/It/We/You/They had looked up",
        "I/He/She/It/We/You/They had been looking up",
        "I/He/She/It/We/You/They will look up",
        "I/He/She/It/We/You/They will be looking up",
        "I/He/She/It/We/You/They will have looked up",
        "I/He/She/It/We/You/They will have been looking up"
    ],
    "synonyms": [
        "research",
        "search for",
        "seek",
        "check",
        "find",
        "consult",
        "refer to",
        "investigate",
        "explore"
    ],
    "antonyms": [
        "ignore",
        "neglect",
        "overlook",
        "disregard"
    ],
    "questions": [
        "Can you look up the definition of this word? (context: study)",
        "Who will look up the flight times? (context: travel)",
        "Who did you look up to when you were a kid? (context: role model)",
        "If you look yourself up on Google, what do you find? (context: personal)",
        "Have you looked up the information for your report? (context: work)",
        "Why are they always looking up old records? (context: research)",
        "Will she look up her old friends on social media? (context: social)"
    ]
  },
  

{
    "topic": "display verbs",
    "category": "irregular",
    "verb": "show",
    "answer": [
        "I/They/We/You show | He/She/It shows",
        "I am | He/She/It is | They/We/You are showing",
        "I/You/They/We have | He/She/It has shown",
        "I/You/They/We have been showing | He/She/It has been showing",
        "I/He/She/It/We/You/They showed",
        "I/He/She/It was showing | They/We/You were showing",
        "I/He/She/It/We/You/They had shown",
        "I/He/She/It/We/You/They had been showing",
        "I/He/She/It/We/You/They will show",
        "I/He/She/It/We/You/They will be showing",
        "I/He/She/It/We/You/They will have shown",
        "I/He/She/It/We/You/They will have been showing"
    ],
    "synonyms": ["display", "exhibit", "present", "reveal", "demonstrate", "illustrate", "express", "depict", "expose", "manifest", "indicate", "unveil"],
    "antonyms": ["hide", "conceal", "cover", "mask", "obscure", "bury", "veil", "shroud", "cloak", "disguise", "camouflage", "screen"],
    "questions": [
        "Can you show me how it works? (context: demonstration)",
        "Who will show the presentation? (context: meeting)",
        "Have you shown them the evidence? (context: legal)",
        "What did the exhibit show? (context: exhibition)",
        "Why didn't you show up yesterday? (context: absence)"
    ]
}
,


{
    "topic": "counseling verbs",
    "category": "regular",
    "verb": "advise",
    "answer": [
        "I/They/We/You advise | He/She/It advises",
        "I am | He/She/It is | They/We/You are advising",
        "I/You/They/We have | He/She/It has advised",
        "I/You/They/We have been advising | He/She/It has been advising",
        "I/He/She/It/We/You/They advised",
        "I/He/She/It was advising | They/We/You were advising",
        "I/He/She/It/We/You/They had advised",
        "I/He/She/It/We/You/They had been advising",
        "I/He/She/It/We/You/They will advise",
        "I/He/She/It/We/You/They will be advising",
        "I/He/She/It/We/You/They will have advised",
        "I/He/She/It/We/You/They will have been advising"
    ],
    "synonyms": ["counsel", "recommend", "suggest", "guide", "inform", "consult", "direct", "instruct", "educate", "enlighten", "coach", "mentor"],
    "antonyms": ["mislead", "deceive", "dissuade", "misguide", "misinform", "deter", "discourage", "misdirect", "confuse", "misadvise", "mislead"],
    "questions": [
        "What do you advise in this situation? (context: consulting)",
        "Who advised you on this matter? (context: guidance)",
        "If you had advised me earlier, I would have told you what happened. (context: regret)",
        "Have you been advised about the risks? (context: risk assessment)",
        "What did they advise you to do? (context: instruction)",
        "Why did they advise against it? (context: caution)",
        "How should I advise them on this issue? (context: counseling)"
    ]
}

,

{
    "topic": "preparation verbs",
    "category": "regular",
    "verb": "ready",
    "answer": [
        "I/They/We/You ready | He/She/It readies",
        "I am | He/She/It is | They/We/You are readying",
        "I/You/They/We have | He/She/It has readied",
        "I/You/They/We have been readying | He/She/It has been readying",
        "I/He/She/It/We/You/They readied",
        "I/He/She/It was readying | They/We/You were readying",
        "I/He/She/It/We/You/They had readied",
        "I/He/She/It/We/You/They had been readying",
        "I/He/She/It/We/You/They will ready",
        "I/He/She/It/We/You/They will be readying",
        "I/He/She/It/We/You/They will have readied",
        "I/He/She/It/We/You/They will have been readying"
    ],
    "synonyms": ["prepare", "set up", "arrange", "organize", "equip", "gear up", "prime", "make ready", "set", "position", "stage", "assemble"],
    "antonyms": ["disorganize", "unsettle", "disrupt", "disassemble", "scatter", "disband", "demobilize", "unprepare", "unready", "disarrange", "displace", "deactivate"],
    "questions": [
        "How do you ready yourself for work? (context: daily routine)",
        "Who readies the equipment? (context: setup)",
        "Have you readied the report? (context: work preparation)",
        "What needs to be readied before we start? (context: project planning)",
        "Why must we ready these documents? (context: administrative tasks)"
    ]
}
,







{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "talk",
    "answer": [
        "I/They/We/You talk | He/She/It talks",
        "I am | He/She/It is | They/We/You are talking",
        "I/You/They/We have | He/She/It has talked",
        "I/You/They/We have been talking | He/She/It has been talking",
        "I/He/She/It/We/You/They talked",
        "I/He/She/It was talking | They/We/You were talking",
        "I/He/She/It/We/You/They had talked",
        "I/He/She/It/We/You/They had been talking",
        "I/He/She/It/We/You/They will talk",
        "I/He/She/It/We/You/They will be talking",
        "I/He/She/It/We/You/They will have talked",
        "I/He/She/It/We/You/They will have been talking"
    ],
    "synonyms": [
        "speak", 
        "converse", 
        "communicate", 
        "chat", 
        "discuss", 
        "confabulate"
    ],
    "antonyms": [
        "listen", 
        "be silent", 
        "ignore"
    ],
    "questions": [
        "How often do you talk about politics? (context: discussion)",
        "If you are talking about X, then we need to consider Y. (context: conversation)",
        "Who were you talking to? (context: conversation)",
        "Have they talked to each other about the issue? (context: communication)",
        "Why did she talk so loudly? (context: speaking style)",
        "What will they talk about at the meeting? (context: agenda setting)"
    ]
  },
  
  {
    "topic": "consumption verbs",
    "category": "irregular",
    "verb": "drink",
    "answer": [
        "I/They/We/You drink | He/She/It drinks",
        "I am | He/She/It is | They/We/You are drinking",
        "I/You/They/We have | He/She/It has drunk",
        "I/You/They/We have been drinking | He/She/It has been drinking",
        "I/He/She/It/We/You/They drank",
        "I/He/She/It was drinking | They/We/You were drinking",
        "I/He/She/It/We/You/They had drunk",
        "I/He/She/It/We/You/They had been drinking",
        "I/He/She/It/We/You/They will drink",
        "I/He/She/It/We/You/They will be drinking",
        "I/He/She/It/We/You/They will have drunk",
        "I/He/She/It/We/You/They will have been drinking"
    ],
    "synonyms": [
        "imbibe", 
        "quaff", 
        "gulp", 
        "swig", 
        "consume", 
        "sip"
    ],
    "antonyms": [
        "abstain", 
        "refrain",
        "fast"
    ],
    "questions": [
        "What would you like to drink? (context: hospitality)",
        "Who drinks coffee in the morning? (context: habit)",
        "Did you drink a lot last New Years? (context: social event)",
        "What will you be drinking tonight? (context: social event)",
        "Have they drunk enough water today? (context: health)",
        "Why did he drink so much last night? (context: social event)",
        "How much should one drink during exercise? (context: fitness)"
    ]
  }
  ,

  {
    "topic": "action verbs",
    "category": "irregular",
    "verb": "run",
    "answer": [
        "I/They/We/You run | He/She/It runs",
        "I am | He/She/It is | They/We/You are running",
        "I/You/They/We have | He/She/It has run",
        "I/You/They/We have been running | He/She/It has been running",
        "I/He/She/It/We/You/They ran",
        "I/He/She/It was running | They/We/You were running",
        "I/He/She/It/We/You/They had run",
        "I/He/She/It/We/You/They had been running",
        "I/He/She/It/We/You/They will run",
        "I/He/She/It/We/You/They will be running",
        "I/He/She/It/We/You/They will have run",
        "I/He/She/It/We/You/They will have been running"
    ],
    "synonyms": [
        "dash",
        "jog",
        "sprint",
        "race",
        "hurry",
        "rush",
        "scamper",
        "scurry",
        "trot",
        "lope",
        "gallop",
        "canter"
    ],
    "antonyms": [
        "walk",
        "stand",
        "sit",
        "stop",
        "halt",
        "rest"
    ],
    "questions": [
        "How often do you run for exercise? (context: fitness)",
        "Who ran the fastest in the race? (context: sports)",
        "Have they run this type of project before? (context: business)",
        "Why is the dog running around the yard? (context: general)",
        "Can you run a mile without stopping? (context: fitness)"
    ]
},


{
    "topic": "state verbs",
    "category": "regular",
    "verb": "stay",
    "answer": [
        "I/They/We/You stay | He/She/It stays",
        "I am | He/She/It is | They/We/You are staying",
        "I/You/They/We have | He/She/It has stayed",
        "I/You/They/We have been staying | He/She/It has been staying",
        "I/He/She/It/We/You/They stayed",
        "I/He/She/It was staying | They/We/You were staying",
        "I/He/She/It/We/You/They had stayed",
        "I/He/She/It/We/You/They had been staying",
        "I/He/She/It/We/You/They will stay",
        "I/He/She/It/We/You/They will be staying",
        "I/He/She/It/We/You/They will have stayed",
        "I/He/She/It/We/You/They will have been staying"
    ],
"synonyms":[ "remain", "linger", "reside", "abide", "dwell", "be stationed"],

"antonyms":[ "leave", "depart", "move", "exit", "go", "vacate"],

    "questions": [
        "How long will you stay in the city?(context: travel)",
        "Who stays calm under pressure in your team?(context: work environment)",
        "Have they stayed at that hotel before?(context: accommodation)",
        "Why did she stay at home today?(context: personal choice)",
        "How do you make guests feel welcome when they stay over?(context: hospitality)"
    ]
},



{
    "topic": "movement verbs",
    "category": "regular",
    "verb": "immigrate",
    "answer": [
        "I/They/We/You immigrate | He/She/It immigrates",
        "I am | He/She/It is | They/We/You are immigrating",
        "I/You/They/We have | He/She/It has immigrated",
        "I/You/They/We have been immigrating | He/She/It has been immigrating",
        "I/He/She/It/We/You/They immigrated",
        "I/He/She/It was immigrating | They/We/You were immigrating",
        "I/He/She/It/We/You/They had immigrated",
        "I/He/She/It/We/You/They had been immigrating",
        "I/He/She/It/We/You/They will immigrate",
        "I/He/She/It/We/You/They will be immigrating",
        "I/He/She/It/We/You/They will have immigrated",
        "I/He/She/It/We/You/They will have been immigrating"
    ],
    "synonyms": [
        "migrate",
        "move",
        "relocate",
        "resettle",
        "move abroad",
        "move overseas",
        "emigrate"
    ],
    "antonyms": [
        "emigrate",
        "stay",
        "remain",
        "settle",
        "stay put"
    ],
    "questions": [
        "Why did they immigrate to a new country? (context: migration)",
        "How many people immigrated to this city last year? (context: demographics)",
        "Have you ever considered immigrating to another country? (context: personal)",
        "What are the challenges faced by people who immigrate? (context: social issues)",
        "Which countries have the highest rates of people immigrating to them? (context: geography)"
    ]
}
,


{
    "topic": "health and injury verbs",
    "category": "irregular",
    "verb": "hurt",
    "answer": [
        "I/They/We/You hurt | He/She/It hurts",
        "I am | He/She/It is | They/We/You are hurting",
        "I/You/They/We have | He/She/It has hurt",
        "I/You/They/We have been hurting | He/She/It has been hurting",
        "I/He/She/It/We/You/They hurt",
        "I/He/She/It was hurting | They/We/You were hurting",
        "I/He/She/It/We/You/They had hurt",
        "I/He/She/It/We/You/They had been hurting",
        "I/He/She/It/We/You/They will hurt",
        "I/He/She/It/We/You/They will be hurting",
        "I/He/She/It/We/You/They will have hurt",
        "I/He/She/It/We/You/They will have been hurting"
    ],
    "synonyms": [
        "injure",
        "wound",
        "damage",
        "harm",
        "pain",
        "traumatize",
        "bruise"
    ],
    "antonyms": [
        "heal",
        "cure",
        "mend",
        "repair",
        "alleviate",
        "soothe",
        "comfort"
    ],
    "questions": [
        "Does your arm still hurt after the fall? (context: health)",
        "Who hurt themselves during the game? (context: sports)",
        "Have they hurt their chances of winning the contract? (context: business)",
        "Why does it hurt when I do this? (context: health query)",
        "What can we do to not hurt the environment? (context: ecology)"
    ]
}
,


{
    "topic": "cognitive verbs",
    "category": "regular",
    "verb": "guess",
    "answer": [
        "I/They/We/You guess | He/She/It guesses",
        "I am | He/She/It is | They/We/You are guessing",
        "I/You/They/We have | He/She/It has guessed",
        "I/You/They/We have been guessing | He/She/It has been guessing",
        "I/He/She/It/We/You/They guessed",
        "I/He/She/It was guessing | They/We/You were guessing",
        "I/He/She/It/We/You/They had guessed",
        "I/He/She/It/We/You/They had been guessing",
        "I/He/She/It/We/You/They will guess",
        "I/He/She/It/We/You/They will be guessing",
        "I/He/She/It/We/You/They will have guessed",
        "I/He/She/It/We/You/They will have been guessing"
    ],
    "synonyms": [
        "speculate",
        "suppose",
        "assume",
        "presume",
        "conjecture",
        "surmise",
        "hypothesize"
    ],
    "antonyms": [
        "know",
        "understand",
        "ascertain",
        "determine",
        "discover",
        "establish"
    ],
    "questions": [
        "Can you guess the answer to this question? (context: game)",
        "Who guessed the correct number first? (context: contest)",
        "Have they guessed the theme of the party yet? (context: social event)",
        "Why is it hard to guess the outcome of the match? (context: sports)",
        "What do you guess will happen next in the story? (context: literature)"
    ]
}
,

{
    "topic": "desire verbs",
    "category": "regular",
    "verb": "want",
    "answer": [
        "I/They/We/You want | He/She/It wants",
        "I am | He/She/It is | They/We/You are wanting",
        "I/You/They/We have | He/She/It has wanted",
        "I/You/They/We have been wanting | He/She/It has been wanting",
        "I/He/She/It/We/You/They wanted",
        "I/He/She/It was wanting | They/We/You were wanting",
        "I/He/She/It/We/You/They had wanted",
        "I/He/She/It/We/You/They had been wanting",
        "I/He/She/It/We/You/They will want",
        "I/He/She/It/We/You/They will be wanting",
        "I/He/She/It/We/You/They will have wanted",
        "I/He/She/It/We/You/They will have been wanting"
    ],
    "synonyms": [
        "desire",
        "wish for",
        "crave",
        "covet",
        "long for",
        "aspire",
        "yearn for"
    ],
    "antonyms": [
        "dislike",
        "detest",
        "hate",
        "reject",
        "despise",
        "refuse",
        "renounce"
    ],
    "questions": [
        "What do you want for your birthday? (context: personal)",
        "Who wants to go first in the game? (context: recreational)",
        "Have they wanted this for a long time? (context: aspirations)",
        "Why do people want to become famous? (context: societal)",
        "Can I help you find what you want? (context: customer service)"
    ]
},


{
    "topic": "financial verbs",
    "category": "irregular",
    "verb": "lend",
    "answer": [
        "I/They/We/You lend | He/She/It lends",
        "I am | He/She/It is | They/We/You are lending",
        "I/You/They/We have | He/She/It has lent",
        "I/You/They/We have been lending | He/She/It has been lending",
        "I/He/She/It/We/You/They lent",
        "I/He/She/It was lending | They/We/You were lending",
        "I/He/She/It/We/You/They had lent",
        "I/He/She/It/We/You/They had been lending",
        "I/He/She/It/We/You/They will lend",
        "I/He/She/It/We/You/They will be lending",
        "I/He/She/It/We/You/They will have lent",
        "I/He/She/It/We/You/They will have been lending"
    ],
    "synonyms": [
        "loan",
        "advance",
        "credit",
        "provide",
        "supply",
        "give",
        "lease"
    ],
    "antonyms": [
        "borrow",
        "take",
        "receive",
        "withhold",
        "retract",
        "recover",
        "claim"
    ],
    "questions": [
        "Can you lend me some money? (context: personal loan)",
        "Who lent the book to you? (context: borrowing items)",
        "Have they lent their support to the project? (context: assistance)",
        "Why won't banks lend to small businesses easily? (context: finance)",
        "What are the terms for lending this equipment? (context: lending policy)"
    ]
}
,


{
    "topic": "educational verbs",
    "category": "regular",
    "verb": "learn",
    "answer": [
        "I/They/We/You learn | He/She/It learns",
        "I am | He/She/It is | They/We/You are learning",
        "I/You/They/We have | He/She/It has learned/learnt",
        "I/You/They/We have been learning | He/She/It has been learning",
        "I/He/She/It/We/You/They learned/learnt",
        "I/He/She/It was learning | They/We/You were learning",
        "I/He/She/It/We/You/They had learned/learnt",
        "I/He/She/It/We/You/They had been learning",
        "I/He/She/It/We/You/They will learn",
        "I/He/She/It/We/You/They will be learning",
        "I/He/She/It/We/You/They will have learned/learnt",
        "I/He/She/It/We/You/They will have been learning"
    ],
    "synonyms": [
        "study",
        "acquire knowledge",
        "educate oneself",
        "gain understanding",
        "absorb",
        "assimilate",
        "grasp"
    ],
    "antonyms": [
        "forget",
        "ignore",
        "neglect",
        "misunderstand",
        "overlook",
        "disregard"
    ],
    "questions": [
        "What new skill did you learn recently? (context: personal development)",
        "Who learns the fastest in your class? (context: education)",
        "Have they learned their lesson from the mistake? (context: life experience)",
        "Why is it important to learn a second language? (context: language acquisition)",
        "How do children learn to speak their native language? (context: developmental psychology)"
    ]
}

,

{
    "topic": "financial verbs",
    "category": "regular",
    "verb": "borrow",
    "answer": [
        "I/They/We/You borrow | He/She/It borrows",
        "I am | He/She/It is | They/We/You are borrowing",
        "I/You/They/We have | He/She/It has borrowed",
        "I/You/They/We have been borrowing | He/She/It has been borrowing",
        "I/He/She/It/We/You/They borrowed",
        "I/He/She/It was borrowing | They/We/You were borrowing",
        "I/He/She/It/We/You/They had borrowed",
        "I/He/She/It/We/You/They had been borrowing",
        "I/He/She/It/We/You/They will borrow",
        "I/He/She/It/We/You/They will be borrowing",
        "I/He/She/It/We/You/They will have borrowed",
        "I/He/She/It/We/You/They will have been borrowing"
    ],
    "synonyms": [
        "take on loan",
        "use temporarily",
        "acquire",
        "obtain",
        "lease",
        "rent",
        "procure"
    ],
    "antonyms": [
        "lend",
        "give",
        "provide",
        "offer",
        "return",
        "repay",
        "reimburse"
    ],
    "questions": [
        "Can I borrow a pen from you? (context: personal)",
        "Who borrowed the car last night? (context: use of property)",
        "Have you borrowed any books from the library? (context: library services)",
        "Why do people borrow money from banks? (context: financial)",
        "What are the rules for borrowing equipment from the office? (context: workplace)"
    ]
}
,




{
    "topic": "artistic verbs",
    "category": "irregular",
    "verb": "sing",
    "answer": [
        "I/They/We/You sing | He/She/It sings",
        "I am | He/She/It is | They/We/You are singing",
        "I/You/They/We have | He/She/It has sung",
        "I/You/They/We have been singing | He/She/It has been singing",
        "I/He/She/It/We/You/They sang",
        "I/He/She/It was singing | They/We/You were singing",
        "I/He/She/It/We/You/They had sung",
        "I/He/She/It/We/You/They had been singing",
        "I/He/She/It/We/You/They will sing",
        "I/He/She/It/We/You/They will be singing",
        "I/He/She/It/We/You/They will have sung",
        "I/He/She/It/We/You/They will have been singing"
    ],
    "synonyms": [
        "chant",
        "vocalize",
        "carol",
        "warble",
        "croon",
        "serenade",
        "harmonize"
    ],
    "antonyms": [
        "be silent",
        "listen",
        "hear",
        "mumble",
        "whisper",
        "speak"
    ],
    "questions": [
        "Can you sing a song for us? (context: performance)",
        "Who sang the national anthem at the event? (context: ceremonial)",
        "Have you ever sung in front of a large audience? (context: experience)",
        "Why do birds sing in the morning? (context: nature)",
        "What song will they sing at the competition? (context: contest)"
    ]
}

,

{
    "topic": "sensory verbs",
    "category": "irregular",
    "verb": "hear",
    "answer": [
        "I/They/We/You hear | He/She/It hears",
        "I am | He/She/It is | They/We/You are hearing",
        "I/You/They/We have | He/She/It has heard",
        "I/You/They/We have been hearing | He/She/It has been hearing",
        "I/He/She/It/We/You/They heard",
        "I/He/She/It was hearing | They/We/You were hearing",
        "I/He/She/It/We/You/They had heard",
        "I/He/She/It/We/You/They had been hearing",
        "I/He/She/It/We/You/They will hear",
        "I/He/She/It/We/You/They will be hearing",
        "I/He/She/It/We/You/They will have heard",
        "I/He/She/It/We/You/They will have been hearing"
    ],
    "synonyms": [
        "listen to",
        "be informed of",
        "be told of",
        "learn of",
        "get wind of",
        "be made aware of",
        "overhear",
        "eavesdrop"
    ],
    "antonyms": [
        "ignore",
        "overlook",
        "miss",
        "disregard",
        "neglect",
        "be deaf to"
    ],
    "questions": [
        "Did you hear the news yesterday? (context: general)",
        "How well can you hear from this distance? (context: sensory perception)",
        "Have they heard about the changes in the policy? (context: business)",
        "What did you hear during the meeting? (context: workplace)",
        "Who heard the alarm first? (context: emergency)"
    ]
}
,


{
    "topic": "action verbs",
    "category": "irregular",
    "verb": "catch",
    "answer": [
        "I/They/We/You catch | He/She/It catches",
        "I am | He/She/It is | They/We/You are catching",
        "I/You/They/We have | He/She/It has caught",
        "I/You/They/We have been catching | He/She/It has been catching",
        "I/He/She/It/We/You/They caught",
        "I/He/She/It was catching | They/We/You were catching",
        "I/He/She/It/We/You/They had caught",
        "I/He/She/It/We/You/They had been catching",
        "I/He/She/It/We/You/They will catch",
        "I/He/She/It/We/You/They will be catching",
        "I/He/She/It/We/You/They will have caught",
        "I/He/She/It/We/You/They will have been catching"
    ],
    "synonyms": [
        "capture",
        "snare",
        "trap",
        "seize",
        "snatch",
        "grasp"
    ],
    "antonyms": [
        "release",
        "let go",
        "miss",
        "free",
        "liberate"
    ],
    "questions": [
        "Can you catch the ball?(context: sports)",
        "Did you catch what she said?(context: communication)",
        "Who caught the thief?(context: law enforcement)",
        "Have you ever caught a fish?(context: recreation)",
        "Why is it hard to catch a cold from pets?(context: health)",
        "How do you catch someone's attention?(context: communication)"
    ]
},



{
    "topic": "creative verbs",
    "category": "regular",
    "verb": "create",
    "answer": [
        "I/They/We/You create | He/She/It creates",
        "I am | He/She/It is | They/We/You are creating",
        "I/You/They/We have | He/She/It has created",
        "I/You/They/We have been creating | He/She/It has been creating",
        "I/He/She/It/We/You/They created",
        "I/He/She/It was creating | They/We/You were creating",
        "I/He/She/It/We/You/They had created",
        "I/He/She/It/We/You/They had been creating",
        "I/He/She/It/We/You/They will create",
        "I/He/She/It/We/You/They will be creating",
        "I/He/She/It/We/You/They will have created",
        "I/He/She/It/We/You/They will have been creating"
    ],
    "synonyms": [
        "invent",
        "produce",
        "design",
        "generate",
        "fabricate",
        "construct"
    ],
    "antonyms": [
        "destroy",
        "demolish",
        "dismantle",
        "ruin",
        "erase",
        "undo"
    ],
    "questions": [
        "How do you create a work of art?(context: art)",
        "Who created this software program?(context: technology)",
        "Have you created a business plan?(context: entrepreneurship)",
        "Why is it important to create new ideas?(context: innovation)",
        "Can anyone create their own website?(context: digital creation)"
    ]
},


{
    "topic": "functional verbs",
    "category": "regular",
    "verb": "operate",
    "answer": [
        "I/They/We/You operate | He/She/It operates",
        "I am | He/She/It is | They/We/You are operating",
        "I/You/They/We have | He/She/It has operated",
        "I/You/They/We have been operating | He/She/It has been operating",
        "I/He/She/It/We/You/They operated",
        "I/He/She/It was operating | They/We/You were operating",
        "I/He/She/It/We/You/They had operated",
        "I/He/She/It/We/You/They had been operating",
        "I/He/She/It/We/You/They will operate",
        "I/He/She/It/We/You/They will be operating",
        "I/He/She/It/We/You/They will have operated",
        "I/He/She/It/We/You/They will have been operating"
    ],
    "synonyms": [
        "run",
        "function",
        "work",
        "manage",
        "control",
        "use"
    ],
    "antonyms": [
        "cease",
        "stop",
        "halt",
        "discontinue",
        "shut down"
    ],
    "questions": [
        "How do you operate this machine?(context: machinery)",
        "Who operates the business?(context: management)",
        "Have they operated on you before?(context: medical)",
        "Why does the government operate differently in this region?(context: governance)",
        "Can the system operate independently?(context: technology)"
    ]
},

{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "repeat",
    "answer": [
        "I/They/We/You repeat | He/She/It repeats",
        "I am | He/She/It is | They/We/You are repeating",
        "I/You/They/We have | He/She/It has repeated",
        "I/You/They/We have been repeating | He/She/It has been repeating",
        "I/He/She/It/We/You/They repeated",
        "I/He/She/It was repeating | They/We/You were repeating",
        "I/He/She/It/We/You/They had repeated",
        "I/He/She/It/We/You/They had been repeating",
        "I/He/She/It/We/You/They will repeat",
        "I/He/She/It/We/You/They will be repeating",
        "I/He/She/It/We/You/They will have repeated",
        "I/He/She/It/We/You/They will have been repeating"
    ],
    "synonyms": [
        "reiterate",
        "echo",
        "reproduce",
        "duplicate",
        "recapitulate",
        "restate"
    ],
    "antonyms": [
        "originate",
        "create",
        "innovate",
        "devise",
        "introduce",
        "invent"
    ],
    "questions": [
        "Can you repeat what you just said?(context: conversation)",
        "Who repeats the same story over and over?(context: storytelling)",
        "Have you repeated this course?(context: education)",
        "Why do we need to repeat these experiments?(context: scientific research)",
        "How often should you repeat the exercise routine?(context: fitness)"
    ]
},







{
"topic": "communication verbs",
"category": "regular",
"verb": "call",
"answer": [
"I/They/We/You call | He/She/It calls",
"I am | He/She/It is | They/We/You are calling",
"I/You/They/We have | He/She/It has called",
"I/You/They/We have been calling | He/She/It has been calling",
"I/He/She/It/We/You/They called",
"I/He/She/It was calling | They/We/You were calling",
"I/He/She/It/We/You/They had called",
"I/He/She/It/We/You/They had been calling",
"I/He/She/It/We/You/They will call",
"I/He/She/It/We/You/They will be calling",
"I/He/She/It/We/You/They will have called",
"I/He/She/It/We/You/They will have been calling"
],
"synonyms": [
"phone",
"ring",
"dial",
"contact",
"reach",
"communicate",
"summon",
"beckon",
"name",
"label"
],
"antonyms": [
"ignore",
"disregard",
"overlook",
"silence",
"muffle"
],
"questions": [
"Can you call me tomorrow?(context: request)",
"Who called you this morning?(context: inquiry)",
"Have you called the customer service?(context: customer interaction)",
"Why did he call so late at night?(context: social communication)",
"What do you call this object in English?(context: language learning)"
]
},

{
"topic": "education verbs",
"category": "irregular",
"verb": "teach",
"answer": [
"I/They/We/You teach | He/She/It teaches",
"I am | He/She/It is | They/We/You are teaching",
"I/You/They/We have | He/She/It has taught",
"I/You/They/We have been teaching | He/She/It has been teaching",
"I/He/She/It/We/You/They taught",
"I/He/She/It was teaching | They/We/You were teaching",
"I/He/She/It/We/You/They had taught",
"I/He/She/It/We/You/They had been teaching",
"I/He/She/It/We/You/They will teach",
"I/He/She/It/We/You/They will be teaching",
"I/He/She/It/We/You/They will have taught",
"I/He/She/It/We/You/They will have been teaching"
],
"synonyms": [
"instruct",
"educate",
"train",
"coach",
"tutor",
"mentor",
"guide",
"enlighten",
"inform",
"school"
],
"antonyms": [
"misguide",
"misinform",
"neglect",
"confuse",
"mislead"
],
"questions": [
"Who will teach the class tomorrow?(context: education planning)",
"Can you teach me how to do this?(context: learning request)",
"Have you ever taught a class?(context: personal inquiry)",
"Has she taught this subject before?(context: professional inquiry)",
"What does art teach us?(context: philosophical inquiry)",
"What are you capable of teaching?(context: professional inquiry)",
"Did you ever want to teach?(context: personal inquiry)",
"Why did he stop teaching?(context: career change)",
"What do you want to teach next year?(context: future planning in education)"
]
},


{
    "topic": "decision-making verbs",
    "category": "irregular",
    "verb": "choose",
    "answer": [
        "I/They/We/You choose | He/She/It chooses",
        "I am | He/She/It is | They/We/You are choosing",
        "I/You/They/We have | He/She/It has chosen",
        "I/You/They/We have been choosing | He/She/It has been choosing",
        "I/He/She/It/We/You/They chose",
        "I/He/She/It was choosing | They/We/You were choosing",
        "I/He/She/It/We/You/They had chosen",
        "I/He/She/It/We/You/They had been choosing",
        "I/He/She/It/We/You/They will choose",
        "I/He/She/It/We/You/They will be choosing",
        "I/He/She/It/We/You/They will have chosen",
        "I/He/She/It/We/You/They will have been choosing"
    ],
    "synonyms": [
        "select",
        "pick",
        "decide on",
        "opt for",
        "settle on",
        "elect",
        "prefer",
        "go for",
        "vote for",
        "favor"
    ],
    "antonyms": [
        "reject",
        "discard",
        "dismiss",
        "ignore",
        "neglect",
        "overlook"
    ],
    "questions": [
        "Which color did you choose for your room?(context: decoration)",
        "How would you choose the right candidate for the job?(context: recruitment)",
        "What factors did you consider when choosing a profession?(context: education)",
        "How will you choose between these two offers?(context: decision-making)",
        "Have you chosen where to go on your vacation yet?(context: travel planning)"
    ]
  },
  

  {
    "topic": "communication verbs",
    "category": "irregular",
    "verb": "write",
    "answer": [
        "I/They/We/You write | He/She/It writes",
        "I am | He/She/It is | They/We/You are writing",
        "I/You/They/We have | He/She/It has written",
        "I/You/They/We have been writing | He/She/It has been writing",
        "I/He/She/It/We/You/They wrote",
        "I/He/She/It was writing | They/We/You were writing",
        "I/He/She/It/We/You/They had written",
        "I/He/She/It/We/You/They had been writing",
        "I/He/She/It/We/You/They will write",
        "I/He/She/It/We/You/They will be writing",
        "I/He/She/It/We/You/They will have written",
        "I/He/She/It/We/You/They will have been writing"
    ],
    "synonyms": [
        "compose",
        "pen",
        "draft",
        "scribble",
        "author",
        "inscribe",
        "jot down",
        "record"
    ],
    "antonyms": [
        "erase",
        "delete",
        "obliterate",
        "ignore"
    ],
    "questions": [
        "What are you writing about?(context: literature)",
        "Have you ever written a markting plan?(context: business)",
        "Who is going to write this down?(context: communication)",
        "If you were to write a book, what would it be about?(context: literature)",
        "Who wrote this report?(context: business)",
        "Have you written that email yet?(context: work environment)",
        "How long did it take you to write this book?(context: literature)",
        "Why did you write to them?(context: communication)"
    ]
},


{
    "topic": "common phrasal verbs",
    "category": "regular",
    "verb": "depend on",
    "answer": [
        "I/They/We/You depend on | He/She/It depends on",
        "I am | He/She/It is | They/We/You are depending on",
        "I/You/They/We have | He/She/It has depended on",
        "I/You/They/We have been depending on | He/She/It has been depending on",
        "I/He/She/It/We/You/They depended on",
        "I/He/She/It was depending on | They/We/You were depending on",
        "I/He/She/It/We/You/They had depended on",
        "I/He/She/It/We/You/They had been depending on",
        "I/He/She/It/We/You/They will depend on",
        "I/He/She/It/We/You/They will be depending on",
        "I/He/She/It/We/You/They will have depended on",
        "I/He/She/It/We/You/They will have been depending on"
    ],
    "synonyms": [
        "rely on",
        "count on",
        "bank on",
        "trust in",
        "lean on",
        "repose on"
    ],
    "antonyms": [
        "distrust",
        "disbelieve",
        "ignore",
        "overlook"
    ],
    "questions": [
        "Do you depend on this software for your work?(context: technology)",
        "Who do you depend on for support?(context: personal)",
        "Have they depended on external funding?(context: finance)",
        "What does our success depend on?(context: business)",
        "Why do children depend on their parents?(context: family)"
    ]
},





  {
    "topic": "literacy verbs",
    "category": "irregular",
    "verb": "read",
    "answer": [
        "I/They/We/You read | He/She/It reads",
        "I am | He/She/It is | They/We/You are reading",
        "I/You/They/We have | He/She/It has read",
        "I/You/They/We have been reading | He/She/It has been reading",
        "I/He/She/It/We/You/They read",
        "I/He/She/It was reading | They/We/You were reading",
        "I/He/She/It/We/You/They had read",
        "I/He/She/It/We/You/They had been reading",
        "I/He/She/It/We/You/They will read",
        "I/He/She/It/We/You/They will be reading",
        "I/He/She/It/We/You/They will have read",
        "I/He/She/It/We/You/They will have been reading"
    ],
    "synonyms": [
        "peruse",
        "study",
        "examine",
        "scan",
        "review",
        "browse",
        "look over",
        "leaf through",
        "glance at",
        "skim"
    ],
    "antonyms": [
        "overlook",
        "ignore",
        "neglect",
        "misinterpret",
        "misread"
    ],
    "questions": [
        "What book are you reading at the moment?(context: leisure)",
        "Have you read the report on the recent market trends?(context: business)",
        "Can you read this prescription for me?(context: healthcare)",
        "How often do you read to your children?(context: parenting)",
        "Where do you like to read in your free time?(context: personal preference)"
    ]
  },


  {
    "topic": "education verbs",
    "category": "regular",
    "verb": "study",
    "answer": [
        "I/They/We/You study | He/She/It studies",
        "I am | He/She/It is | They/We/You are studying",
        "I/You/They/We have | He/She/It has studied",
        "I/You/They/We have been studying | He/She/It has been studying",
        "I/He/She/It/We/You/They studied",
        "I/He/She/It was studying | They/We/You were studying",
        "I/He/She/It/We/You/They had studied",
        "I/He/She/It/We/You/They had been studying",
        "I/He/She/It/We/You/They will study",
        "I/He/She/It/We/You/They will be studying",
        "I/He/She/It/We/You/They will have studied",
        "I/He/She/It/We/You/They will have been studying"
    ],
    "synonyms": [
        "learn",
        "examine",
        "analyze",
        "investigate",
        "review",
        "research",
        "scrutinize"
    ],
    "antonyms": [
        "ignore",
        "neglect",
        "overlook",
        "disregard"
    ],
    "questions": [
        "How long do you study each day?(context: education)",
        "Who studies physics in your class?(context: education)",
        "Have you studied for the test?(context: education)",
        "What subject are you studying at university?(context: higher education)",
        "Why did you decide to study medicine?(context: career choice)"
    ]
},


{
      "topic": "financial verbs",
      "category": "irregular",
      "verb": "pay",
      "answer": [
          "I/They/We/You pay | He/She/It pays",
          "I am | He/She/It is | They/We/You are paying",
          "I/You/They/We have | He/She/It has paid",
          "I/You/They/We have been paying | He/She/It has been paying",
          "I/He/She/It/We/You/They paid",
          "I/He/She/It was paying | They/We/You were paying",
          "I/He/She/It/We/You/They had paid",
          "I/He/She/It/We/You/They had been paying",
          "I/He/She/It/We/You/They will pay",
          "I/He/She/It/We/You/They will be paying",
          "I/He/She/It/We/You/They will have paid",
          "I/He/She/It/We/You/They will have been paying"
      ],
      "synonyms": [
          "remit",
          "settle",
          "disburse",
          "compensate",
          "reimburse",
          "reward",
          "cover"
      ],
      "antonyms": [
          "withhold",
          "default",
          "dodge",
          "evade"
      ],
      "questions": [
          "How much did you pay for the car?(context: purchase)",
          "How much do you pay for rent?(context: housing)",
          "Who pays the bills in your house?(context: household)",
          "Have they paid their debts?(context: finance)",
          "Why do we pay taxes?(context: civics)",
          "Can you pay in installments?(context: commerce)"
      ]
},


{
"topic": "fundamental verbs",
"category": "irregular",
"verb": "be",
"answer": [
"I am | You/We/They are | He/She/It is",
"I am being | You/We/They are being | He/She/It is being",
"I/You/We/They have been | He/She/It has been",
"I/You/We/They have been being | He/She/It has been being",
"I was | You/We/They were | He/She/It was",
"I was being | You/We/They were being | He/She/It was being",
"I/You/We/They had been | He/She/It had been",
"I/You/We/They had been being | He/She/It had been being",
"I/You/We/They will be | He/She/It will be",
"I/You/We/They will be being | He/She/It will be being",
"I/You/We/They will have been | He/She/It will have been",
"I/You/We/They will have been being | He/She/It will have been being"
],
"synonyms": [
"exist",
"happen",
"occur",
"take place",
"constitute",
"represent",
"equal",
"amount to",
"signify",
"stand for"
],
"antonyms": [
"cease",
"disappear",
"vanish",
"end",
"terminate"
],
"questions": [
"How can we be more efficient?(context: productivity)",
"Why is he being so quiet?(context: behavioral observation)",
"Who is she and what does she do?(context: introduction)",
"Have they been informed about the changes?(context: communication)",
"Were you being serious when you said that?(context: clarification)",
"Will she be at the meeting tomorrow?(context: scheduling)"
]
},

{
"topic": "common verbs",
"category": "irregular",
"verb": "have",
"answer": [
"I/You/We/They have | He/She/It has",
"I am | He/She/It is | You/We/They are having",
"I/You/We/They have had | He/She/It has had",
"I/You/We/They have been having | He/She/It has been having",
"I/He/She/It/We/You/They had",
"I/He/She/It was having | We/You/They were having",
"I/He/She/It/We/You/They had had",
"I/He/She/It/We/You/They had been having",
"I/He/She/It/We/You/They will have",
"I/He/She/It/We/You/They will be having",
"I/He/She/It/We/You/They will have had",
"I/He/She/It/We/You/They will have been having"
],
"synonyms": [
"possess",
"own",
"hold",
"retain",
"maintain",
"contain",
"bear",
"boast"
],
"antonyms": [
"lack",
"miss",
"be without",
"need",
"require",
"want"
],
"questions": [
    "How long have you been doing that?(context: duration)",
"Do you have a pen I could use? (context: request)",
"Who has the keys to the office? (context: inquiry)",
"Have they had their lunch yet? (context: inquiry about meal)",
"What kind of car do you have? (context: casual conversation)",
"Has he had experience in this field? (context: professional inquiry)"
]
}
,


{
    "topic": "quantitative verbs",
    "category": "regular",
    "verb": "measure",
    "answer": [
        "I/They/We/You measure | He/She/It measures",
        "I am | He/She/It is | They/We/You are measuring",
        "I/You/They/We have | He/She/It has measured",
        "I/You/They/We have been measuring | He/She/It has been measuring",
        "I/He/She/It/We/You/They measured",
        "I/He/She/It was measuring | They/We/You were measuring",
        "I/He/She/It/We/You/They had measured",
        "I/He/She/It/We/You/They had been measuring",
        "I/He/She/It/We/You/They will measure",
        "I/He/She/It/We/You/They will be measuring",
        "I/He/She/It/We/You/They will have measured",
        "I/He/She/It/We/You/They will have been measuring"
    ],
    "synonyms": [
        "gauge",
        "calculate",
        "assess",
        "evaluate",
        "quantify",
        "size up"
    ],
    "antonyms": [
        "estimate",
        "guess",
        "disregard",
        "ignore"
    ],
    "questions": [
        "How do you measure success?(context: general)",
        "Who measures the ingredients in this recipe?(context: cooking)",
        "Have you measured the room for the new furniture?(context: home improvement)",
        "Why is it important to measure your progress?(context: personal development)",
        "Can you measure happiness?(context: philosophical)"
    ]
},


{
    "topic": "real estate verbs",
    "category": "regular",
    "verb": "rent",
    "answer": [
        "I/They/We/You rent | He/She/It rents",
        "I am | He/She/It is | They/We/You are renting",
        "I/You/They/We have | He/She/It has rented",
        "I/You/They/We have been renting | He/She/It has been renting",
        "I/He/She/It/We/You/They rented",
        "I/He/She/It was renting | They/We/You were renting",
        "I/He/She/It/We/You/They had rented",
        "I/He/She/It/We/You/They had been renting",
        "I/He/She/It/We/You/They will rent",
        "I/He/She/It/We/You/They will be renting",
        "I/He/She/It/We/You/They will have rented",
        "I/He/She/It/We/You/They will have been renting"
    ],
    "synonyms": [
        "lease",
        "hire",
        "charter",
        "let",
        "sublet",
        "take on lease"
    ],
    "antonyms": [
        "own",
        "buy",
        "purchase",
        "sell",
        "dispose of"
    ],
    "questions": [
        "How much do you rent your apartment for?(context: housing)",
        "Who rents this office space?(context: commercial real estate)",
        "Have you rented a car for the trip?(context: travel)",
        "Why do people prefer to rent instead of buy?(context: lifestyle choice)",
        "Can we rent the equipment for a week?(context: business)"
    ]
},



{
    "topic": "professional verbs",
    "category": "regular",
    "verb": "specialize",
    "answer": [
        "I/They/We/You specialize | He/She/It specializes",
        "I am | He/She/It is | They/We/You are specializing",
        "I/You/They/We have | He/She/It has specialized",
        "I/You/They/We have been specializing | He/She/It has been specializing",
        "I/He/She/It/We/You/They specialized",
        "I/He/She/It was specializing | They/We/You were specializing",
        "I/He/She/It/We/You/They had specialized",
        "I/He/She/It/We/You/They had been specializing",
        "I/He/She/It/We/You/They will specialize",
        "I/He/She/It/We/You/They will be specializing",
        "I/He/She/It/We/You/They will have specialized",
        "I/He/She/It/We/You/They will have been specializing"
    ],
    "synonyms": [
        "focus",
        "concentrate",
        "dedicate oneself",
        "develop expertise",
        "hone skills"
    ],
    "antonyms": [
        "generalize",
        "diversify",
        "broaden",
        "spread out"
    ],
    "questions": [
        "What do you specialize in?(context: professional)",
        "Who specializes in this type of surgery?(context: healthcare)",
        "Have you specialized in any particular area?(context: career)",
        "Why do companies specialize in certain products?(context: business)",
        "Can I specialize in two fields at the same time?(context: education)"
    ]
},

{
    "topic": "financial verbs",
    "category": "regular",
    "verb": "make money",
    "answer": [
        "I/They/We/You make money | He/She/It makes money",
        "I am | He/She/It is | They/We/You are making money",
        "I/You/They/We have | He/She/It has made money",
        "I/You/They/We have been making money | He/She/It has been making money",
        "I/He/She/It/We/You/They made money",
        "I/He/She/It was making money | They/We/You were making money",
        "I/He/She/It/We/You/They had made money",
        "I/He/She/It/We/You/They had been making money",
        "I/He/She/It/We/You/They will make money",
        "I/He/She/It/We/You/They will be making money",
        "I/He/She/It/We/You/They will have made money",
        "I/He/She/It/We/You/They will have been making money"
    ],
    "synonyms": [
        "earn",
        "generate income",
        "profit",
        "accumulate wealth",
        "gain financially"
    ],
    "antonyms": [
        "lose money",
        "spend",
        "waste funds",
        "deplete resources"
    ],
    "questions": [
        "How do you make money online?(context: digital economy)",
        "Who makes money in this deal?(context: business)",
        "Have you made money from your investments?(context: finance)",
        "Why is it hard to make money in this market?(context: economics)",
        "Can we make money by saving energy?(context: environmental economics)"
    ]
},

{
    "topic": "action verbs",
    "category": "regular",
    "verb": "continue",
    "answer": [
        "I/They/We/You continue | He/She/It continues",
        "I am | He/She/It is | They/We/You are continuing",
        "I/You/They/We have | He/She/It has continued",
        "I/You/They/We have been continuing | He/She/It has been continuing",
        "I/He/She/It/We/You/They continued",
        "I/He/She/It was continuing | They/We/You were continuing",
        "I/He/She/It/We/You/They had continued",
        "I/He/She/It/We/You/They had been continuing",
        "I/He/She/It/We/You/They will continue",
        "I/He/She/It/We/You/They will be continuing",
        "I/He/She/It/We/You/They will have continued",
        "I/He/She/It/We/You/They will have been continuing"
    ],
    "synonyms": [
        "proceed",
        "carry on",
        "maintain",
        "extend",
        "persist",
        "keep up"
    ],
    "antonyms": [
        "stop",
        "halt",
        "discontinue",
        "cease",
        "end",
        "terminate"
    ],
    "questions": [
        "Will you continue working after retirement?(context: career)",
        "How long can we continue like this?(context: general)",
        "Have they continued their research?(context: academia)",
        "Why did she continue to trust him?(context: personal)",
        "Can the company continue to operate profitably?(context: business)"
    ]
},




{
    "topic": "preference verbs",
    "category": "regular",
    "verb": "like",
    "answer": [
        "I/They/We/You like | He/She/It likes",
        "I am | He/She/It is | They/We/You are liking",
        "I/You/They/We have | He/She/It has liked",
        "I/You/They/We have been liking | He/She/It has been liking",
        "I/He/She/It/We/You/They liked",
        "I/He/She/It was liking | They/We/You were liking",
        "I/He/She/It/We/You/They had liked",
        "I/He/She/It/We/You/They had been liking",
        "I/He/She/It/We/You/They will like",
        "I/He/She/It/We/You/They will be liking",
        "I/He/She/It/We/You/They will have liked",
        "I/He/She/It/We/You/They will have been liking"
    ],
    "synonyms": [
        "enjoy",
        "appreciate",
        "favor",
        "be fond of",
        "take pleasure in",
        "relish",
        "adore",
        "cherish",
        "delight in",
        "be keen on"
    ],
    "antonyms": [
        "dislike",
        "hate",
        "detest",
        "abhor",
        "despise",
        "loathe",
        "disfavor",
        "reject",
        "spurn",
        "disapprove of"
    ],
    "questions": [
        "Do you like the new design? (context: preference)",
        "Who likes to travel in our family? (context: personal interest)",
        "Have they liked the changes made in the policy? (context: opinion)",
        "Why do you like working late? (context: work habits)",
        "Will they like the gift we chose for them? (context: gift selection)"
    ]
  },
  

  {
    "topic": "problem-solving verbs",
    "category": "phrasal verb (regular)",
    "verb": "sort out",
    "answer": [
        "I/They/We/You sort out | He/She/It sorts out",
        "I am | He/She/It is | They/We/You are sorting out",
        "I/You/They/We have | He/She/It has sorted out",
        "I/You/They/We have been sorting out | He/She/It has been sorting out",
        "I/He/She/It/We/You/They sorted out",
        "I/He/She/It was sorting out | They/We/You were sorting out",
        "I/He/She/It/We/You/They had sorted out",
        "I/He/She/It/We/You/They had been sorting out",
        "I/He/She/It/We/You/They will sort out",
        "I/He/She/It/We/You/They will be sorting out",
        "I/He/She/It/We/You/They will have sorted out",
        "I/He/She/It/We/You/They will have been sorting out"
    ],
    "synonyms": [
        "resolve",
        "fix",
        "settle",
        "clear up",
        "deal with",
        "rectify",
        "organize",
        "arrange",
        "straighten out",
        "tidy up"
    ],
    "antonyms": [
        "confuse",
        "complicate",
        "mess up",
        "disorder",
        "scramble",
        "muddle",
        "disarrange",
        "jumble",
        "chaos",
        "disorganize"
    ],
    "questions": [
        "Can you sort out the files by the end of the day? (context: office work)",
        "Who will sort out the issue with the client? (context: customer service)",
        "Have they sorted out their travel plans yet? (context: travel)",
        "Why do we need to sort out these old records? (context: record keeping)",
        "Will the team sort out the technical glitches before the launch? (context: project management)"
    ]
  },
  

  {
    "topic": "predictive verbs",
    "category": "regular",
    "verb": "foresee",
    "answer": [
        "I/They/We/You foresee | He/She/It foresees",
        "I am | He/She/It is | They/We/You are foreseeing",
        "I/You/They/We have | He/She/It has foreseen",
        "I/You/They/We have been foreseeing | He/She/It has been foreseeing",
        "I/He/She/It/We/You/They foresaw",
        "I/He/She/It was foreseeing | They/We/You were foreseeing",
        "I/He/She/It/We/You/They had foreseen",
        "I/He/She/It/We/You/They had been foreseeing",
        "I/He/She/It/We/You/They will foresee",
        "I/He/She/It/We/You/They will be foreseeing",
        "I/He/She/It/We/You/They will have foreseen",
        "I/He/She/It/We/You/They will have been foreseeing"
    ],
    "synonyms": [
        "predict",
        "anticipate",
        "envision",
        "expect",
        "prognosticate",
        "foretell"
    ],
    "antonyms": [
        "ignore",
        "disregard",
        "overlook",
        "miss",
        "neglect"
    ],
    "questions": [
        "How do you foresee the future of this industry?(context: project management)",
        "How can you foresee the outcomes of this decision?(context: planning)",
        "Who foresaw the change in market trends?(context: business)",
        "Have you foreseen any potential risks?(context: risk assessment)",
        "Why is it hard to foresee certain events?(context: unpredictability)",
        "Can technology help us foresee natural disasters?(context: science)"
    ]
},


{
    "topic": "colloquial verbs",
    "category": "regular",
    "verb": "rip off",
    "answer": [
        "I/They/We/You rip off | He/She/It rips off",
        "I am | He/She/It is | They/We/You are ripping off",
        "I/You/They/We have | He/She/It has ripped off",
        "I/You/They/We have been ripping off | He/She/It has been ripping off",
        "I/He/She/It/We/You/They ripped off",
        "I/He/She/It was ripping off | They/We/You were ripping off",
        "I/He/She/It/We/You/They had ripped off",
        "I/He/She/It/We/You/They had been ripping off",
        "I/He/She/It/We/You/They will rip off",
        "I/He/She/It/We/You/They will be ripping off",
        "I/He/She/It/We/You/They will have ripped off",
        "I/He/She/It/We/You/They will have been ripping off"
    ],
    "synonyms": [
        "overcharge",
        "swindle",
        "defraud",
        "cheat",
        "fleece",
        "gouge"
    ],
    "antonyms": [
        "refund",
        "compensate",
        "reimburse",
        "give back",
        "return"
    ],
    "questions": [
        "Do you think this store rips off its customers?(context: shopping)",
        "How do you keep from getting ripped off?(context: consumer awareness)",
        "Who ripped off your idea?(context: intellectual property)",
        "Have you ever been ripped off while traveling?(context: travel)",
        "Why do some businesses rip off their clients?(context: unethical practices)",
        "Can we prevent being ripped off in this market?(context: consumer awareness)"
    ]
},


{
    "topic": "physical action verbs",
    "category": "irregular",
    "verb": "tear",
    "answer": [
        "I/They/We/You tear | He/She/It tears",
        "I am | He/She/It is | They/We/You are tearing",
        "I/You/They/We have | He/She/It has torn",
        "I/You/They/We have been tearing | He/She/It has been tearing",
        "I/He/She/It/We/You/They tore",
        "I/He/She/It was tearing | They/We/You were tearing",
        "I/He/She/It/We/You/They had torn",
        "I/He/She/It/We/You/They had been tearing",
        "I/He/She/It/We/You/They will tear",
        "I/He/She/It/We/You/They will be tearing",
        "I/He/She/It/We/You/They will have torn",
        "I/He/She/It/We/You/They will have been tearing"
    ],
    "synonyms": [
        "rip",
        "rend",
        "split",
        "shred",
        "lacerate",
        "rip apart"
    ],
    "antonyms": [
        "mend",
        "repair",
        "sew",
        "join",
        "unite",
        "fix"
    ],
    "questions": [
        "How did you tear your shirt?(context: accident)",
        "Who tore the pages out of this book?(context: vandalism)",
        "Who tore apart your room?(context: anger)",
        "Who is tearing this project apart?(context: action observation)",
        "Have you torn the contract?(context: legal)",
        "Why do old papers tear easily?(context: material properties)",
        "Can this fabric tear under pressure?(context: material strength)"
    ]
},


{
    "topic": "emotional verbs",
    "category": "regular",
    "verb": "satisfy",
    "answer": [
        "I/They/We/You satisfy | He/She/It satisfies",
        "I am | He/She/It is | They/We/You are satisfying",
        "I/You/They/We have | He/She/It has satisfied",
        "I/You/They/We have been satisfying | He/She/It has been satisfying",
        "I/He/She/It/We/You/They satisfied",
        "I/He/She/It was satisfying | They/We/You were satisfying",
        "I/He/She/It/We/You/They had satisfied",
        "I/He/She/It/We/You/They had been satisfying",
        "I/He/She/It/We/You/They will satisfy",
        "I/He/She/It/We/You/They will be satisfying",
        "I/He/She/It/We/You/They will have satisfied",
        "I/He/She/It/We/You/They will have been satisfying"
    ],
    "synonyms": [
        "please",
        "fulfill",
        "meet",
        "gratify",
        "content",
        "appease"
    ],
    "antonyms": [
        "disappoint",
        "dissatisfy",
        "frustrate",
        "upset",
        "displease",
        "let down"
    ],
    "questions": [
        "What can satisfy your hunger?(context: food)",
        "Who satisfies the requirements for this job?(context: employment)",
        "Have you satisfied the terms of the agreement?(context: legal)",
        "Why is it hard to satisfy everyone?(context: general)",
        "Can money satisfy all your needs?(context: philosophical)"
    ]
},

{
    "topic": "emotional verbs",
    "category": "regular",
    "verb": "let down",
    "answer": [
        "I/They/We/You let down | He/She/It lets down",
        "I am | He/She/It is | They/We/You are letting down",
        "I/You/They/We have | He/She/It has let down",
        "I/You/They/We have been letting down | He/She/It has been letting down",
        "I/He/She/It/We/You/They let down",
        "I/He/She/It was letting down | They/We/You were letting down",
        "I/He/She/It/We/You/They had let down",
        "I/He/She/It/We/You/They had been letting down",
        "I/He/She/It/We/You/They will let down",
        "I/He/She/It/We/You/They will be letting down",
        "I/He/She/It/We/You/They will have let down",
        "I/He/She/It/We/You/They will have been letting down"
    ],
    "synonyms": [
        "disappoint",
        "fail",
        "dishearten",
        "dismay",
        "betray",
        "fall short"
    ],
    "antonyms": [
        "satisfy",
        "please",
        "uplift",
        "fulfill",
        "support",
        "encourage"
    ],
    "questions": [
        
        "How do you let someone down gently?(context: personal relationships)",
        "Have you ever felt let down by a friend?(context: personal relationships)",
        "Who let down the team in the last match?(context: sports)",
        "Why do parents sometimes let down their children?(context: family)",
        "Can a company let down its customers?(context: business)",
        "What happens when a leader lets down their followers?(context: leadership)"
    ]
},


{
    "topic": "construction verbs",
    "category": "regular",
    "verb": "renovate",
    "answer": [
        "I/They/We/You renovate | He/She/It renovates",
        "I am | He/She/It is | They/We/You are renovating",
        "I/You/They/We have | He/She/It has renovated",
        "I/You/They/We have been renovating | He/She/It has been renovating",
        "I/He/She/It/We/You/They renovated",
        "I/He/She/It was renovating | They/We/You were renovating",
        "I/He/She/It/We/You/They had renovated",
        "I/He/She/It/We/You/They had been renovating",
        "I/He/She/It/We/You/They will renovate",
        "I/He/She/It/We/You/They will be renovating",
        "I/He/She/It/We/You/They will have renovated",
        "I/He/She/It/We/You/They will have been renovating"
    ],
    "synonyms": [
        "refurbish",
        "restore",
        "rehabilitate",
        "revamp",
        "modernize",
        "overhaul"
    ],
    "antonyms": [
        "demolish",
        "destroy",
        "ruin",
        "deteriorate",
        "neglect"
    ],
    "questions": [
        "How much will it cost to renovate the kitchen?(context: home improvement)",
        "Who is renovating the old theater downtown?(context: community project)",
        "Have you renovated any other houses?(context: real estate)",
        "Why do people renovate historical buildings?(context: preservation)",
        "Can you renovate a building while preserving its character?(context: architecture)"
    ]
},





  {
    "topic": "movement verbs",
    "category": "irregular",
    "verb": "fall",
    "answer": [
        "I/They/We/You fall | He/She/It falls",
        "I am | He/She/It is | They/We/You are falling",
        "I/You/They/We have | He/She/It has fallen",
        "I/You/They/We have been falling | He/She/It has been falling",
        "I/He/She/It/We/You/They fell",
        "I/He/She/It was falling | They/We/You were falling",
        "I/He/She/It/We/You/They had fallen",
        "I/He/She/It/We/You/They had been falling",
        "I/He/She/It/We/You/They will fall",
        "I/He/She/It/We/You/They will be falling",
        "I/He/She/It/We/You/They will have fallen",
        "I/He/She/It/We/You/They will have been falling"
    ],
    "synonyms": [
        "drop",
        "tumble",
        "plunge",
        "descend",
        "collapse",
        "topple",
        "slip",
        "crash",
        "plummet",
        "dive"
    ],
    "antonyms": [
        "rise",
        "ascend",
        "climb",
        "soar",
        "increase",
        "stand",
        "erect",
        "upright",
        "elevate",
        "mount"
    ],
    "questions": [
        "Did the vase fall off the table? (context: accident)",
        "Who fell during the race? (context: sports)",
        "When was the last time you fell sick? (context: health)",
        "Have they fallen into financial trouble? (context: economics)",
        "Why do leaves fall in autumn? (context: nature)",
        "Will the stock prices fall after the announcement? (context: finance)"
    ]
  },
  


  {
    "topic": "movement verbs",
    "category": "phrasal verb (irregular)",
    "verb": "go back",
    "answer": [
        "I/They/We/You go back | He/She/It goes back",
        "I am | He/She/It is | They/We/You are going back",
        "I/You/They/We have | He/She/It has gone back",
        "I/You/They/We have been going back | He/She/It has been going back",
        "I/He/She/It/We/You/They went back",
        "I/He/She/It was going back | They/We/You were going back",
        "I/He/She/It/We/You/They had gone back",
        "I/He/She/It/We/You/They had been going back",
        "I/He/She/It/We/You/They will go back",
        "I/He/She/It/We/You/They will be going back",
        "I/He/She/It/We/You/They will have gone back",
        "I/He/She/It/We/You/They will have been going back"
    ],
    "synonyms": [
        "return",
        "revert",
        "retreat",
        "retrace",
        "revisit",
        "regress",
        "recede",
        "rewind",
        "retrogress",
        "backtrack"
    ],
    "antonyms": [
        "advance",
        "proceed",
        "move forward",
        "progress",
        "go forward",
        "continue",
        "press on",
        "forge ahead",
        "push on",
        "go ahead"
    ],
    "questions": [
        "When will you go back to your hometown? (context: travel)",
        "Who goes back to the same restaurant every week? (context: habit)",
        "Have you gone back home recently? (context: visit)",
        "Have they gone back on their promise? (context: commitment)",
        "Why do we have to go back to the starting point? (context: direction)",
        "Will she go back to school for further studies? (context: education)"
    ]
  },
  


  {
        "topic": "cognitive verbs",
        "category": "regular",
        "verb": "think about",
        "answer": [
            "I/They/We/You think about | He/She/It thinks about",
            "I am | He/She/It is | They/We/You are thinking about",
            "I/You/They/We have | He/She/It has thought about",
            "I/You/They/We have been thinking about | He/She/It has been thinking about",
            "I/He/She/It/We/You/They thought about",
            "I/He/She/It was thinking about | They/We/You were thinking about",
            "I/He/She/It/We/You/They had thought about",
            "I/He/She/It/We/You/They had been thinking about",
            "I/He/She/It/We/You/They will think about",
            "I/He/She/It/We/You/They will be thinking about",
            "I/He/She/It/We/You/They will have thought about",
            "I/He/She/It/We/You/They will have been thinking about"
        ],
  "synonyms":[ "ponder", "consider", "reflect on", "contemplate", "mull over", "deliberate"],
  
  "antonyms":[ "ignore", "disregard", "neglect", "overlook", "forget", "dismiss"],
  
        "questions": [
            "What do you think about the new proposal at work?(context: business decision)",
            "Who thinks about the consequences before acting?(context: personal traits)",
            "Have they thought about the implications of their decision?(context: careful consideration)",
            "Why did she think about changing her career path?(context: career planning)",
            "How do you think about solving complex problems?(context: problem-solving)"
        ]
    },
  




  {
        "topic": "action verbs",
        "category": "regular",
        "verb": "go ahead",
        "answer": [
            "I/They/We/You go ahead | He/She/It goes ahead",
            "I am | He/She/It is | They/We/You are going ahead",
            "I/You/They/We have | He/She/It has gone ahead",
            "I/You/They/We have been going ahead | He/She/It has been going ahead",
            "I/He/She/It/We/You/They went ahead",
            "I/He/She/It was going ahead | They/We/You were going ahead",
            "I/He/She/It/We/You/They had gone ahead",
            "I/He/She/It/We/You/They had been going ahead",
            "I/He/She/It/We/You/They will go ahead",
            "I/He/She/It/We/You/They will be going ahead",
            "I/He/She/It/We/You/They will have gone ahead",
            "I/He/She/It/We/You/They will have been going ahead"
        ],
  "synonyms":[ "proceed", "continue", "advance", "move forward", "carry on", "forge ahead"],
  
  "antonyms":[ "stop", "halt", "pause", "wait", "hesitate", "delay"],
  
        "questions": [
            "Can we go ahead with the plan as discussed?(context: project management)",
            "Who went ahead and made the decision without consulting everyone?(context: decision-making)",
            "Have they gone ahead with the wedding despite the challenges?(context: event planning)",
            "Why did she go ahead with the surgery?(context: health decisions)",
            "How do you feel when someone goes ahead of you in a queue?(context: social etiquette)"
        ]
    },
  



{
    "topic": "communication verbs",
    "category": "irregular",
    "verb": "mean",
    "answer": [
        "I/They/We/You mean | He/She/It means",
        "I am | He/She/It is | They/We/You are meaning",
        "I/You/They/We have | He/She/It has meant",
        "I/You/They/We have been meaning | He/She/It has been meaning",
        "I/He/She/It/We/You/They meant",
        "I/He/She/It was meaning | They/We/You were meaning",
        "I/He/She/It/We/You/They had meant",
        "I/He/She/It/We/You/They had been meaning",
        "I/He/She/It/We/You/They will mean",
        "I/He/She/It/We/You/They will be meaning",
        "I/He/She/It/We/You/They will have meant",
        "I/He/She/It/We/You/They will have been meaning"
    ],
    "synonyms": ["signify", "indicate", "denote", "represent", "imply", "connote", "stand for", "symbolize", "suggest", "intend", "express", "spell"],
    "antonyms": ["misinterpret", "misunderstand", "misrepresent", "distort", "confuse", "muddle", "misconstrue", "pervert", "mislead", "disguise", "obfuscate", "bewilder"],
    "questions": [
        "What does this word mean? (context: linguistics)",
        "Who can explain what this means? (context: clarification)",
        "Have you figured out what he meant? (context: interpretation)",
        "Why is it important to understand what this means? (context: comprehension)",
        "How do cultural differences affect what gestures mean? (context: cross-cultural communication)"
    ]
},


{
    "topic": "physical activity verbs",
    "category": "regular",
    "verb": "stand up",
    "answer": [
        "I/They/We/You stand up | He/She/It stands up",
        "I am | He/She/It is | They/We/You are standing up",
        "I/You/They/We have | He/She/It has stood up",
        "I/You/They/We have been standing up | He/She/It has been standing up",
        "I/He/She/It/We/You/They stood up",
        "I/He/She/It was standing up | They/We/You were standing up",
        "I/He/She/It/We/You/They had stood up",
        "I/He/She/It/We/You/They had been standing up",
        "I/He/She/It/We/You/They will stand up",
        "I/He/She/It/We/You/They will be standing up",
        "I/He/She/It/We/You/They will have stood up",
        "I/He/She/It/We/You/They will have been standing up"
    ],
"synonyms":[ "rise", "get up", "arise", "uprise", "erect oneself", "get to one's feet"],

"antonyms":[ "sit down", "lie down", "recline", "settle", "remain seated", "kneel"],

    "questions": [
        "Why do we stand up for the national anthem?(context: respect and protocol)",
        "Who stood up to greet the visitors?(context: courtesy)",
        "When you stood up, did you notice the person behind you?(context: awareness)",
        "Have you ever stood up for your beliefs?(context: advocacy)",
        "Why did he stand up in the middle of the meeting?(context: interruption)",
        "How do you feel after standing up for a long time?(context: physical discomfort)"
    ]
},


{
      "topic": "communication verbs",
      "category": "regular",
      "verb": "explain",
      "answer": [
          "I/They/We/You explain | He/She/It explains",
          "I am | He/She/It is | They/We/You are explaining",
          "I/You/They/We have | He/She/It has explained",
          "I/You/They/We have been explaining | He/She/It has been explaining",
          "I/He/She/It/We/You/They explained",
          "I/He/She/It was explaining | They/We/You were explaining",
          "I/He/She/It/We/You/They had explained",
          "I/He/She/It/We/You/They had been explaining",
          "I/He/She/It/We/You/They will explain",
          "I/He/She/It/We/You/They will be explaining",
          "I/He/She/It/We/You/They will have explained",
          "I/He/She/It/We/You/They will have been explaining"
      ],
"synonyms":[ "clarify", "elucidate", "expound", "describe", "illuminate", "interpret"],

"antonyms":[ "confuse", "obfuscate", "mislead", "complicate", "muddle", "conceal"],

      "questions": [
          "Can you explain the concept again?(context: education)",
          "Who explains the rules to new team members?(context: orientation)",
          "Have they explained the reasons for the delay?(context: business communication)",
          "Why did she explain the procedure so thoroughly?(context: instruction)",
          "How do you explain complex ideas to children?(context: teaching)"
      ]
  },




{
    "topic": "activity verbs",
    "category": "phrasal verb (regular)",
    "verb": "work on",
    "answer": [
        "I/They/We/You work on | He/She/It works on",
        "I am | He/She/It is | They/We/You are working on",
        "I/You/They/We have | He/She/It has worked on",
        "I/You/They/We have been working on | He/She/It has been working on",
        "I/He/She/It/We/You/They worked on",
        "I/He/She/It was working on | They/We/You were working on",
        "I/He/She/It/We/You/They had worked on",
        "I/He/She/It/We/You/They had been working on",
        "I/He/She/It/We/You/They will work on",
        "I/He/She/It/We/You/They will be working on",
        "I/He/She/It/We/You/They will have worked on",
        "I/He/She/It/We/You/They will have been working on"
    ],
    "synonyms": [
        "develop",
        "focus on",
        "labor on",
        "operate on",
        "process",
        "toil on",
        "engage in",
        "perform",
        "execute",
        "undertake"
    ],
    "antonyms": [
        "neglect",
        "ignore",
        "abandon",
        "disregard",
        "overlook",
        "shun",
        "avoid",
        "eschew",
        "shirk",
        "dismiss"
    ],
    "questions": [
        "What project are you working on currently? (context: professional)",
        "Who is working on the new marketing strategy? (context: business)",
        "Have they worked on improving their customer service? (context: improvement)",
        "Why are you working on this at such a late hour? (context: time management)",
        "Will the team work on the feedback received from the clients? (context: client interaction)"
    ]
  },
  


{
  "topic": "location verbs",
  "category": "phrasal verb (regular)",
  "verb": "stay in",
  "answer": [
      "I/They/We/You stay in | He/She/It stays in",
      "I am | He/She/It is | They/We/You are staying in",
      "I/You/They/We have | He/She/It has stayed in",
      "I/You/They/We have been staying in | He/She/It has been staying in",
      "I/He/She/It/We/You/They stayed in",
      "I/He/She/It was staying in | They/We/You were staying in",
      "I/He/She/It/We/You/They had stayed in",
      "I/He/She/It/We/You/They had been staying in",
      "I/He/She/It/We/You/They will stay in",
      "I/He/She/It/We/You/They will be staying in",
      "I/He/She/It/We/You/They will have stayed in",
      "I/He/She/It/We/You/They will have been staying in"
  ],
  "synonyms": [
      "remain indoors",
      "not go out",
      "be home",
      "keep inside",
      "not leave",
      "reside",
      "lodge",
      "dwell",
      "abide",
      "inhabit"
  ],
  "antonyms": [
      "go out",
      "leave",
      "depart",
      "venture out",
      "exit",
      "abandon",
      "vacate",
      "forsake",
      "emerge",
      "sally"
  ],
  "questions": [
      "Are you planning to stay in this weekend? (context: personal plans)",
      "Who usually stays in to take care of the pets? (context: household responsibility)",
      "Have they stayed in the office to finish the project? (context: work commitment)",
      "Why did you decide to stay in rather than go to the party? (context: decision making)",
      "Will the guests stay in our guest room during their visit? (context: hospitality)"
  ]
},


{
    "topic": "posture verbs",
    "category": "phrasal verb (regular)",
    "verb": "sit down",
    "answer": [
        "I/They/We/You sit down | He/She/It sits down",
        "I am | He/She/It is | They/We/You are sitting down",
        "I/You/They/We have | He/She/It has sat down",
        "I/You/They/We have been sitting down | He/She/It has been sitting down",
        "I/He/She/It/We/You/They sat down",
        "I/He/She/It was sitting down | They/We/You were sitting down",
        "I/He/She/It/We/You/They had sat down",
        "I/He/She/It/We/You/They had been sitting down",
        "I/He/She/It/We/You/They will sit down",
        "I/He/She/It/We/You/They will be sitting down",
        "I/He/She/It/We/You/They will have sat down",
        "I/He/She/It/We/You/They will have been sitting down"
    ],
    "synonyms": [
        "take a seat",
        "be seated",
        "perch",
        "settle down",
        "rest",
        "park oneself",
        "take a chair",
        "plonk down",
        "flop down",
        "lower oneself"
    ],
    "antonyms": [
        "stand up",
        "rise",
        "get up",
        "move",
        "leave",
        "depart",
        "stand",
        "uprise",
        "walk away",
        "exit"
    ],
    "questions": [
        "Can we sit down and talk about this? (context: conversation)",
        "Who sat down first in the meeting? (context: observation)",
        "When was the last time you sat down and relaxed? (context: leisure)",
        "Have they sat down to negotiate the terms? (context: business)",
        "Why do I always have to remind the children to sit down at dinner? (context: family)",
        "Will the audience sit down during the performance? (context: event)"
    ]
  },
  

  {
    "topic": "physical activity verbs",
    "category": "regular",
    "verb": "take a seat",
    "answer": [
        "I/They/We/You take a seat | He/She/It takes a seat",
        "I am | He/She/It is | They/We/You are taking a seat",
        "I/You/They/We have | He/She/It has taken a seat",
        "I/You/They/We have been taking a seat | He/She/It has been taking a seat",
        "I/He/She/It/We/You/They took a seat",
        "I/He/She/It was taking a seat | They/We/You were taking a seat",
        "I/He/She/It/We/You/They had taken a seat",
        "I/He/She/It/We/You/They had been taking a seat",
        "I/He/She/It/We/You/They will take a seat",
        "I/He/She/It/We/You/They will be taking a seat",
        "I/He/She/It/We/You/They will have taken a seat",
        "I/He/She/It/We/You/They will have been taking a seat"
    ],
"synonyms":[ "sit down", "seat oneself", "be seated", "settle down", "rest", "occupy a chair"],

"antonyms":[ "stand up", "rise", "leave one's seat", "get up", "move", "remain standing"],

    "questions": [
        "Can you take a seat while you wait?(context: waiting room)",
        "Who took a seat at the front of the class?(context: classroom setting)",
        "Have they taken their seats for the performance?(context: event attendance)",
        "Why did she take a seat at the back?(context: preference)",
        "How do you feel when someone takes a seat next to you on public transport?(context: social interaction)"
    ]
},




{
    "topic": "construction verbs",
    "category": "irregular",
    "verb": "build",
    "answer": [
        "I/They/We/You build | He/She/It builds",
        "I am | He/She/It is | They/We/You are building",
        "I/You/They/We have | He/She/It has built",
        "I/You/They/We have been building | He/She/It has been building",
        "I/He/She/It/We/You/They built",
        "I/He/She/It was building | They/We/You were building",
        "I/He/She/It/We/You/They had built",
        "I/He/She/It/We/You/They had been building",
        "I/He/She/It/We/You/They will build",
        "I/He/She/It/We/You/They will be building",
        "I/He/She/It/We/You/They will have built",
        "I/He/She/It/We/You/They will have been building"
    ],
    "synonyms": ["construct", "erect", "assemble", "create", "fabricate", "forge", "make", "form", "shape", "establish", "develop", "put up"],
    "antonyms": ["destroy", "demolish", "dismantle", "tear down", "raze", "ruin", "wreck", "disassemble", "break down", "take apart", "deconstruct", "undo"],
    "questions": [
        "How do you plan to build the new structure? (context: architecture)",
        "Who will build the website? (context: web development)",
        "If you could build anything, what would you build? (context: hypothetical)",
        "Have they built a prototype yet? (context: product design)",
        "What materials are used to build these houses? (context: construction materials)",
        "Why is it important to build strong relationships? (context: interpersonal skills)"
    ]
}

//TODO: define
,

{
"topic": "common verbs",
"category": "irregular",
"verb": "go",
"answer": [
"I/You/We/They go | He/She/It goes",
"I am | He/She/It is | You/We/They are going",
"I/You/We/They have | He/She/It has gone",
"I/You/We/They have been going | He/She/It has been going",
"I/He/She/It/We/You/They went",
"I/He/She/It was going | We/You/They were going",
"I/He/She/It/We/You/They had gone",
"I/He/She/It/We/You/They had been going",
"I/He/She/It/We/You/They will go",
"I/He/She/It/We/You/They will be going",
"I/He/She/It/We/You/They will have gone",
"I/He/She/It/We/You/They will have been going"
],
"synonyms": [
"move",
"travel",
"proceed",
"journey",
"depart",
"leave",
"advance",
"progress"
],
"antonyms": [
"stay",
"remain",
"stop",
"halt",
"rest",
"wait",
"cease"
],
"questions": [
"Where did you go on your last vacation? (context: travel inquiry)",
"When was the last you went ... ",
"How often do you go to the gym? (context: inquiry about routine)",
"Can I go with you? (context: request to accompany)",
"If you could go anywhere, where would you go? (context: hypothetical)",
"What time do you go to bed? (context: inquiry about routine)",
"How do we go about solving this problem? (context: seeking method)"
]
},

{
    "topic": "action verbs",
    "category": "regular",
    "verb": "use",
    "answer": [
        "I/They/We/You use | He/She/It uses",
        "I am | He/She/It is | They/We/You are using",
        "I/You/They/We have | He/She/It has used",
        "I/You/They/We have been using | He/She/It has been using",
        "I/He/She/It/We/You/They used",
        "I/He/She/It was using | They/We/You were using",
        "I/He/She/It/We/You/They had used",
        "I/He/She/It/We/You/They had been using",
        "I/He/She/It/We/You/They will use",
        "I/He/She/It/We/You/They will be using",
        "I/He/She/It/We/You/They will have used",
        "I/He/She/It/We/You/They will have been using"
    ],
    "synonyms": [
        "utilize", 
        "employ", 
        "operate", 
        "apply", 
        "handle", 
        "exercise"
    ],
    "antonyms": [
        "misuse", 
        "neglect", 
        "abandon", 
        "discard"
    ],
    "questions": [
        "How do you use this tool? (context: instruction)",
        "Who uses this software? (context: utilization)",
        "If you use someone else's work, would you give them credit? (context: plagiarism)",
        "Have they used this method before? (context: application)",
        "Why did he use such strong language? (context: communication)",
        "What will she use for the project? (context: selection)"
    ]
  }
    ,  



{
"topic": "common verbs",
"category": "irregular",
"verb": "know",
"answer": [
"I/You/We/They know | He/She/It knows",
"I am | He/She/It is | You/We/They are knowing (rarely used)",
"I/You/We/They have known| He/She/It has known",
"I/You/We/They have been knowing (rarely used) | He/She/It has been knowing (rarely used)",
"I/He/She/It/We/You/They knew",
"I/He/She/It was knowing (rarely used) | We/You/They were knowing (rarely used)",
"I/He/She/It/We/You/They had known",
"I/He/She/It/We/You/They had been knowing (rarely used)",
"I/He/She/It/We/You/They will know",
"I/He/She/It/We/You/They will be knowing (rarely used)",
"I/He/She/It/We/You/They will have known",
"I/He/She/It/We/You/They will have been knowing (rarely used)"
],
"synonyms": [
"understand",
"realize",
"recognize",
"be aware of",
"be familiar with",
"be acquainted with",
"grasp",
"comprehend"
],
"antonyms": [
"ignore",
"misunderstand",
"overlook",
"be unaware of",
"be ignorant of"
],
"questions": [
"Do you know the answer to this question? (context: inquiry about knowledge)",
"How do you know each other? (context: inquiry about acquaintance)",
"How long have you known each other? (context: inquiry about acquaintance)",
"How well do you know each other? (context: inquiry about acquaintance)",
"Who knows the answer to this question? (context: inquiry about knowledge)",

"Did you know that she moved abroad? (context: sharing information)",
"If you knew the answer, why didn't you say anything? (context: inquiry about behavior)",
"What do you know about this topic? (context: inquiry about expertise)",
"Who knows how to fix this? (context: seeking assistance)"
]
},


{
    "topic": "creative verbs",
    "category": "regular",
    "verb": "draw",
    "answer": [
        "I/They/We/You draw | He/She/It draws",
        "I am | He/She/It is | They/We/You are drawing",
        "I/You/They/We have | He/She/It has drawn",
        "I/You/They/We have been drawing | He/She/It has been drawing",
        "I/He/She/It/We/You/They drew",
        "I/He/She/It was drawing | They/We/You were drawing",
        "I/He/She/It/We/You/They had drawn",
        "I/He/She/It/We/You/They had been drawing",
        "I/He/She/It/We/You/They will draw",
        "I/He/She/It/We/You/They will be drawing",
        "I/He/She/It/We/You/They will have drawn",
        "I/He/She/It/We/You/They will have been drawing"
    ],
    "synonyms": [
        "sketch",
        "doodle",
        "depict",
        "illustrate",
        "design",
        "outline",
        "render",
        "trace",
        "draft",
        "portray"
    ],
    "antonyms": [
        "erase",
        "delete",
        "remove",
        "obliterate",
        "discard"
    ],
    "questions": [
        "Can you draw a portrait of her? (context: artistic)",
        "Who draws the best in the class? (context: skill assessment)",
        "If you could draw anything, what would you draw? (context: conditional statement)",
        "Have they drawn up the plans for the building? (context: architecture)",
        "Why do some artists draw only in black and white? (context: artistic style)",
        "Will the artist draw the landscape from memory? (context: artistic process)"
    ]
  },
  
{
    "topic": "observation verbs",
    "category": "regular",
    "verb": "watch",
    "answer": [
        "I/They/We/You watch | He/She/It watches",
        "I am | He/She/It is | They/We/You are watching",
        "I/You/They/We have | He/She/It has watched",
        "I/You/They/We have been watching | He/She/It has been watching",
        "I/He/She/It/We/You/They watched",
        "I/He/She/It was watching | They/We/You were watching",
        "I/He/She/It/We/You/They had watched",
        "I/He/She/It/We/You/They had been watching",
        "I/He/She/It/We/You/They will watch",
        "I/He/She/It/We/You/They will be watching",
        "I/He/She/It/We/You/They will have watched",
        "I/He/She/It/We/You/They will have been watching"
    ],
    "synonyms": ["observe", "view", "look at", "see", "gaze at", "stare at", "glance at", "survey", "inspect", "scrutinize", "monitor", "keep an eye on"],
    "antonyms": ["ignore", "overlook", "neglect", "disregard", "miss", "avert", "turn away from", "disbelieve", "unheed", "forget", "disregard", "dismiss"],
    "questions": [
        "What are you watching on TV? (context: entertainment)",
        "Who watches the store when you're away? (context: business operations)",
        "Have you watched the latest movie? (context: film inquiry)",
        "Which seasons have you seen|watched? (context: inquiry about experience)",
        "Why do people watch sports so passionately? (context: spectator interests)",
        "How do you feel when someone watches you work? (context: observation effects)"
    ]
}
,

{
"topic": "common verbs",
"category": "irregular",
"verb": "do",
"answer": [
"I/You/We/They do | He/She/It does",
"I am | He/She/It is | You/We/They are doing",
"I/You/We/They have | He/She/It has done",
"I/You/We/They have been doing | He/She/It has been doing",
"I/He/She/It/We/You/They did",
"I/He/She/It was doing | We/You/They were doing",
"I/He/She/It/We/You/They had done",
"I/He/She/It/We/You/They had been doing",
"I/He/She/It/We/You/They will do",
"I/He/She/It/We/You/They will be doing",
"I/He/She/It/We/You/They will have done",
"I/He/She/It/We/You/They will have been doing"
],
"synonyms": [
"perform",
"execute",
"carry out",
"accomplish",
"achieve",
"complete",
"conduct",
"manage"
],
"antonyms": [
"neglect",
"ignore",
"fail",
"omit",
"disregard",
"abandon"
],
"questions": [
    "Do you have time to do this? (context: inquiry about availability)",
"What do you do for a living? (context: career inquiry)",
"Why didn't he care? (context: inquiry about behavior)",
"What did you do?! (context: expressing surprise)",
"If you could do anything as a career, what would you do? (context: conditional statement)",
"How do I do this exercise? (context: seeking instructions)",
"Do they do their homework regularly? (context: inquiry about habit)",
"Did you do something special for your birthday? (context: casual conversation)",
"What will you do next weekend? (context: future plans)"
]
},

{
    "topic": "administration verbs",
    "category": "regular",
    "verb": "manage",
    "answer": [
        "I/They/We/You manage | He/She/It manages",
        "I am | He/She/It is | They/We/You are managing",
        "I/You/They/We have | He/She/It has managed",
        "I/You/They/We have been managing | He/She/It has been managing",
        "I/He/She/It/We/You/They managed",
        "I/He/She/It was managing | They/We/You were managing",
        "I/He/She/It/We/You/They had managed",
        "I/He/She/It/We/You/They had been managing",
        "I/He/She/It/We/You/They will manage",
        "I/He/She/It/We/You/They will be managing",
        "I/He/She/It/We/You/They will have managed",
        "I/He/She/It/We/You/They will have been managing"
    ],
    "synonyms": ["administer", "control", "run", "direct", "oversee", "supervise", "handle", "govern", "conduct", "guide", "lead", "coordinate"],
    "antonyms": ["neglect", "mismanage", "abandon", "overlook", "disregard", "ignore", "mishandle", "misdirect", "misconduct", "misgovern", "mislead", "misguide"],
    "questions": [
        "How do you manage your team? (context: leadership)",
        "Who manages your finances at home? (context: finance management)",
        "Have you managed a project like this before? (context: experience)",
        "If you had to manage a team, what would you do? (context: conditional statement)",
        "What strategies do you use to manage stress? (context: personal development)",
        "Why is it hard to manage time effectively? (context: time management)"
    ]
}
,

{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "request",
    "answer": [
        "I/They/We/You request | He/She/It requests",
        "I am | He/She/It is | They/We/You are requesting",
        "I/You/They/We have | He/She/It has requested",
        "I/You/They/We have been requesting | He/She/It has been requesting",
        "I/He/She/It/We/You/They requested",
        "I/He/She/It was requesting | They/We/You were requesting",
        "I/He/She/It/We/You/They had requested",
        "I/He/She/It/We/You/They had been requesting",
        "I/He/She/It/We/You/They will request",
        "I/He/She/It/We/You/They will be requesting",
        "I/He/She/It/We/You/They will have requested",
        "I/He/She/It/We/You/They will have been requesting"
    ],
    "synonyms": ["ask for", "petition", "seek", "solicit", "appeal for", "call for", "apply for", "plead for", "entreat", "beg", "implore", "beseech"],
    "antonyms": ["demand", "command", "order", "insist", "dictate", "impose", "enforce", "require", "compel", "exact", "oblige", "mandate"],
    "questions": [
        "Can you request the information for me? (context: assistance)",
        "Who will request approval? (context: authorization)",
        "If you make a request, which friends would help you. (context: conditional statement)",
        "Have you requested the resources needed? (context: resource allocation)",
        "What did they request in the meeting? (context: business discussion)",
        "Why did you request this specific item? (context: preference)"
    ]
}

,

{
    "topic": "damage verbs",
    "category": "regular",
    "verb": "harm",
    "answer": [
        "I/They/We/You harm | He/She/It harms",
        "I am | He/She/It is | They/We/You are harming",
        "I/You/They/We have | He/She/It has harmed",
        "I/You/They/We have been harming | He/She/It has been harming",
        "I/He/She/It/We/You/They harmed",
        "I/He/She/It was harming | They/We/You were harming",
        "I/He/She/It/We/You/They had harmed",
        "I/He/She/It/We/You/They had been harming",
        "I/He/She/It/We/You/They will harm",
        "I/He/She/It/We/You/They will be harming",
        "I/He/She/It/We/You/They will have harmed",
        "I/He/She/It/We/You/They will have been harming"
    ],
    "synonyms": ["injure", "hurt", "damage", "impair", "wound", "abuse", "bruise", "afflict", "maltreat", "molest", "endanger", "vitiate"],
    "antonyms": ["protect", "preserve", "save", "shield", "safeguard", "secure", "defend", "guard", "nurture", "benefit", "assist", "aid"],
    "questions": [
        "How can we prevent harm to the environment? (context: conservation)",
        "Who was harmed in the incident? (context: accident investigation)",
        "Have you been harmed by the product? (context: safety inquiry)",
        "What actions cause harm to the ecosystem? (context: environmental impact)",
        "Why is it important not to harm others? (context: ethics)"
    ]
}
,


{
    "topic": "communication verbs",
    "category": "irregular",
    "verb": "speak",
    "answer": [
        "I/They/We/You speak | He/She/It speaks",
        "I am | He/She/It is | They/We/You are speaking",
        "I/You/They/We have | He/She/It has spoken",
        "I/You/They/We have been speaking | He/She/It has been speaking",
        "I/He/She/It/We/You/They spoke",
        "I/He/She/It was speaking | They/We/You were speaking",
        "I/He/She/It/We/You/They had spoken",
        "I/He/She/It/We/You/They had been speaking",
        "I/He/She/It/We/You/They will speak",
        "I/He/She/It/We/You/They will be speaking",
        "I/He/She/It/We/You/They will have spoken",
        "I/He/She/It/We/You/They will have been speaking"
    ],
    "synonyms": ["talk", "converse", "communicate", "articulate", "express", "utter", "say", "voice", "pronounce", "discuss", "chat", "verbalize"],
    "antonyms": ["listen", "hear", "be silent", "be quiet", "withhold", "mute", "hush", "suppress", "refrain", "keep quiet", "muzzle", "silence"],
    "questions": [
        "Can you speak louder, please? (context: public speaking)",
        "How many languages do you speak? (context: language inquiry)",
        "Who will speak at the conference? (context: event planning)",
        "If you could speak any language, what would it be? (context: hypothetical)",
        "Have you spoken to him about the issue? (context: interpersonal communication)",
        "What language do they speak in that country? (context: language inquiry)",
        "Why is it difficult to speak in public? (context: public speaking anxiety)"
    ]
}
,

{
"topic": "common verbs",
"category": "regular",
"verb": "say",
"answer": [
"I/They/We/You say | He/She/It says",
"I am | He/She/It is | They/We/You are saying",
"I/You/They/We have | He/She/It has said",
"I/You/They/We have been saying | He/She/It has been saying",
"I/He/She/It/We/You/They said",
"I/He/She/It was saying | They/We/You were saying",
"I/He/She/It/We/You/They had said",
"I/He/She/It/We/You/They had been saying",
"I/He/She/It/We/You/They will say",
"I/He/She/It/We/You/They will be saying",
"I/He/She/It/We/You/They will have said",
"I/He/She/It/We/You/They will have been saying"
],
"synonyms": [
"speak",
"state",
"announce",
"declare",
"mention",
"express",
"utter",
"tell"
],
"antonyms": [
"silence",
"suppress",
"withhold",
"conceal"
],
"questions": [
"What did he say about the meeting? (context: inquiry about opinion)",
"Can you say that again? (context: request for repetition)",
"If someone accuses you of something you didn't do, what would you say? (context: hypothetical)",
"Who says it's going to rain? (context: inquiry about source)",
"How do you say 'hello' in Spanish? (context: language learning)",
"Why didn't you say anything? (context: inquiry about silence)"
]
},

{
"topic": "common verbs",
"category": "irregular",
"verb": "get",
"answer": [
"I/You/We/They get | He/She/It gets",
"I am | He/She/It is | You/We/They are getting",
"I/You/We/They have got | He/She/It has gotten/got",
"I/You/We/They have been getting | He/She/It has been getting",
"I/He/She/It/We/You/They got",
"I/He/She/It was getting | We/You/They were getting",
"I/He/She/It/We/You/They had gotten/got",
"I/He/She/It/We/You/They had been getting",
"I/He/She/It/We/You/They will get",
"I/He/She/It/We/You/They will be getting",
"I/He/She/It/We/You/They will have gotten/got",
"I/He/She/It/We/You/They will have been getting"
],
"synonyms": [
"acquire",
"obtain",
"receive",
"gain",
"procure",
"attain",
"achieve",
"secure"
],
"antonyms": [
"lose",
"forfeit",
"surrender",
"give up",
"miss",
"fail to obtain"
],
"questions": [
"How do I get to the train station? (context: asking for directions)",
"Did you get my message? (context: confirmation of communication)",
"When will you get the results? (context: inquiry about outcomes)",
"If you get a message from an alien, what would you do? (context: hypothetical)",
"Can I get you something to drink? (context: offering assistance)",
"Where did you get this information? (context: inquiry about source)",
"Can you get me a better table please? (context: inquiry about information)",
"Where did you get that idea? (context: inquiry about origin)",
"What time do you get off work? (context: inquiry about schedule)"
]
},

{
    "topic": "housekeeping verbs",
    "category": "phrasal",
    "verb": "get on (with something)",
    "answer": [
      "I/They/We/You get on (with something) | He/She/It gets on (with something)",
      "I am | He/She/It is | They/We/You are getting on (with something)",
      "I/You/They/We have | He/She/It has gotten on (with something)",
      "I/You/They/We have been getting on (with something) | He/She/It has been getting on (with something)",
      "I/He/She/It/We/You/They got on (with something)",
      "I/He/She/It was getting on (with something) | They/We/You were getting on (with something)",
      "I/He/She/It/We/You/They had gotten on (with something)",
      "I/He/She/It/We/You/They had been getting on (with something)",
      "I/He/She/It/We/You/They will get on (with something)",
      "I/He/She/It/We/You/They will be getting on (with something)",
      "I/He/She/It/We/You/They will have gotten on (with something)",
      "I/He/She/It/We/You/They will have been getting on (with something)"
    ],
    "synonyms": [
      "make progress", "deal with", "manage", "cope", "succeed", "thrive"
    ],
    "antonyms": [
      "struggle", "falter", "fail", "be overwhelmed", "give up", "decline"
    ],
    "questions": [
      "Is she getting on well with her new job?(context: career progress)",
      "How are you getting on with painting the living room?(context: household tasks)",
      "Do you think they will get on with their new neighbors?(context: social interactions)",
      "When are you getting on the plane?(context: travel plans)",
      "Why is he having trouble getting on with his studies?(context: academic challenges)",
      "What tips can you share for getting on better with family members?(context: relationships)"
    ]
  },


  {
    "topic": "housekeeping verbs",
    "category": "phrasal",
    "verb": "make progress",
    "answer": [
      "I/They/We/You make progress (on something) | He/She/It makes progress (on something)",
      "I am | He/She/It is | They/We/You are making progress (on something)",
      "I/You/They/We have | He/She/It has made progress (on something)",
      "I/You/They/We have been making progress (on something) | He/She/It has been making progress (on something)",
      "I/He/She/It/We/You/They made progress (on something)",
      "I/He/She/It was making progress (on something) | They/We/You were making progress (on something)",
      "I/He/She/It/We/You/They had made progress (on something)",
      "I/He/She/It/We/You/They had been making progress (on something)",
      "I/He/She/It/We/You/They will make progress (on something)",
      "I/He/She/It/We/You/They will be making progress (on something)",
      "I/He/She/It/We/You/They will have made progress (on something)",
      "I/He/She/It/We/You/They will have been making progress (on something)"
    ],
    "synonyms": [
      "advance", "move forward", "develop", "improve", "gain ground", "get closer to", "achieve", "succeed"
    ],
    "antonyms": [
      "stagnate", "regress", "deteriorate", "backslide", "stall", "fall behind", "fail", "regress"
    ],
 
    "questions": [
      "How can you make progress on your fitness goals?(context: personal health)",
      "Have you made any progress on your project?(context: work tasks)",
      "Who is responsible for making progress on this project?(context: teamwork)",
      "Have they made any progress on solving the environmental crisis?(context: global challenges)",
      "Why did she stall and make no progress on her writing?(context: creative roadblocks)",
      "What strategies can we use to make progress towards a more sustainable future?(context: environmental action)"
    ]
  },
  


  {
    "topic": "competitive verbs",
    "category": "regular",
    "verb": "compete",
    "answer": [
        "I/They/We/You compete | He/She/It competes",
        "I am | He/She/It is | They/We/You are competing",
        "I/You/They/We have | He/She/It has competed",
        "I/You/They/We have been competing | He/She/It has been competing",
        "I/He/She/It/We/You/They competed",
        "I/He/She/It was competing | They/We/You were competing",
        "I/He/She/It/We/You/They had competed",
        "I/He/She/It/We/You/They had been competing",
        "I/He/She/It/We/You/They will compete",
        "I/He/She/It/We/You/They will be competing",
        "I/He/She/It/We/You/They will have competed",
        "I/He/She/It/We/You/They will have been competing"
    ],
    "synonyms": [
        "contend",
        "challenge",
        "vie",
        "rival",
        "participate",
        "strive"
    ],
    "antonyms": [
        "cooperate",
        "collaborate",
        "concede",
        "withdraw",
        "avoid"
    ],
    "questions": [
        "How do you compete with others? (context: competition strategy)",
        "Do you compete in any sports?(context: sports)",
        "Who competes for the championship?(context: tournament)",
        "Have you competed in a debate before?(context: academic)",
        "Why do companies compete with each other?(context: business)",
        "Can small businesses compete with large ones?(context: economics)"
    ]
},

  

{
    "topic": "competition verbs",
    "category": "irregular",
    "verb": "win",
    "answer": [
        "I/They/We/You win | He/She/It wins",
        "I am | He/She/It is | They/We/You are winning",
        "I/You/They/We have | He/She/It has won",
        "I/You/They/We have been winning | He/She/It has been winning",
        "I/He/She/It/We/You/They won",
        "I/He/She/It was winning | They/We/You were winning",
        "I/He/She/It/We/You/They had won",
        "I/He/She/It/We/You/They had been winning",
        "I/He/She/It/We/You/They will win",
        "I/He/She/It/We/You/They will be winning",
        "I/He/She/It/We/You/They will have won",
        "I/He/She/It/We/You/They will have been winning"
    ],
    "synonyms": [
        "succeed",
        "triumph",
        "be victorious",
        "come first",
        "take the prize",
        "prevail",
        "conquer"
    ],
    "antonyms": [
        "lose",
        "fail",
        "forfeit",
        "succumb",
        "be defeated",
        "fall"
    ],
    "questions": [
        "Who won the match yesterday? (context: sports)",
        "If you won the lottery, what would you do? (context: hypothetical)",
        "Have you ever won a competition? (context: personal achievement)",
        "If you win today's match, what happens next? (context: conditional statement)",
        "What does it take to win in this industry? (context: business)",
        "Which team do you think will win the championship? (context: sports)",
        "How did she look after winning the award? (context: achievement)"
    ]
}
,

{
    "topic": "sensory verbs",
    "category": "irregular",
    "verb": "feel",
    "answer": [
        "I/They/We/You feel | He/She/It feels",
        "I am | He/She/It is | They/We/You are feeling",
        "I/You/They/We have | He/She/It has felt",
        "I/You/They/We have been feeling | He/She/It has been feeling",
        "I/He/She/It/We/You/They felt",
        "I/He/She/It was feeling | They/We/You were feeling",
        "I/He/She/It/We/You/They had felt",
        "I/He/She/It/We/You/They had been feeling",
        "I/He/She/It/We/You/They will feel",
        "I/He/She/It/We/You/They will be feeling",
        "I/He/She/It/We/You/They will have felt",
        "I/He/She/It/We/You/They will have been feeling"
    ],
    "synonyms": ["experience", "sense", "perceive", "undergo", "endure", "suffer", "know", "recognize", "appreciate", "be aware of", "discern", "identify"],
    "antonyms": ["ignore", "overlook", "misinterpret", "neglect", "disregard", "be numb to", "miss", "misunderstand", "be insensitive to", "be indifferent to", "overlook"],
    "questions": [
        "How do you feel today? (context: well-being)",
        "Who is responsible for this? (context: accountability)",
        "If you feel sick, you should see a doctor. (context: health advice)",
        "Have you ever felt this way before? (context: emotional experience)",
        "What does it feel like to be in love? (context: emotional experience)",
        "If you are feeling tired, you should rest. (context: health advice)",
        "What makes you feel happy? (context: emotions)",
        "Why do you feel that way? (context: understanding emotions)"
    ]
}
,


{
    "topic": "transportation verbs",
    "category": "irregular",
    "verb": "drive",
    "answer": [
        "I/They/We/You drive | He/She/It drives",
        "I am | He/She/It is | They/We/You are driving",
        "I/You/They/We have | He/She/It has driven",
        "I/You/They/We have been driving | He/She/It has been driving",
        "I/He/She/It/We/You/They drove",
        "I/He/She/It was driving | They/We/You were driving",
        "I/He/She/It/We/You/They had driven",
        "I/He/She/It/We/You/They had been driving",
        "I/He/She/It/We/You/They will drive",
        "I/He/She/It/We/You/They will be driving",
        "I/He/She/It/We/You/They will have driven",
        "I/He/She/It/We/You/They will have been driving"
    ],
    "synonyms": ["operate", "steer", "pilot", "control", "handle", "maneuver", "guide", "direct", "navigate", "motor", "travel", "commute"],
    "antonyms": ["park", "stop", "halt", "idle", "rest", "stay", "remain", "cease", "abandon", "quit", "discontinue", "desist"],
    "questions": [
        "Can you drive me to the station? (context: transportation)",
        "Who drives this car regularly? (context: vehicle usage)",
        "Have you ever driven a truck? (context: driving experience)",
        "How long have you been driving?",
        "If you drive due east, where will you end up? (context: navigation)",
        "Why do you drive so fast? (context: driving habits)",
        "How long does it take to drive there? (context: travel time)",
        "Why did you decide to drive instead of fly? (context: travel choice)"
    ]
}
,



{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "answer",
    "answer": [
        "I/They/We/You answer | He/She/It answers",
        "I am | He/She/It is | They/We/You are answering",
        "I/You/They/We have | He/She/It has answered",
        "I/You/They/We have been answering | He/She/It has been answering",
        "I/He/She/It/We/You/They answered",
        "I/He/She/It was answering | They/We/You were answering",
        "I/He/She/It/We/You/They had answered",
        "I/He/She/It/We/You/They had been answering",
        "I/He/She/It/We/You/They will answer",
        "I/He/She/It/We/You/They will be answering",
        "I/He/She/It/We/You/They will have answered",
        "I/He/She/It/We/You/They will have been answering"
    ],
    "synonyms": ["reply", "respond", "retort", "rejoin", "acknowledge", "react", "rebut", "refute", "counter", "return", "resolve", "clarify"],
    "antonyms": ["question", "ask", "inquire", "query", "probe", "interrogate", "examine", "investigate", "seek", "explore", "disregard", "ignore"],
    "questions": [
        "How quickly can you answer the email? (context: correspondence)",
        "Who answered the phone? (context: telephone call)",
        "Why isn't he answering his phone? (context: inquiry about behavior)",
        "If you know the answer, why didn't you say anything? (context: inquiry about behavior)",
        "Have you answered their questions yet? (context: inquiry response)",
        "What answer did you give to the interviewer? (context: interview)",
        "Why haven't you answered my messages? (context: communication)"
    ]
}
,


{
    "topic": "health and wellness verbs",
    "category": "regular",
    "verb": "inflame",
    "answer": [
        "I/They/We/You inflame | He/She/It inflames",
        "I am | He/She/It is | They/We/You are inflaming",
        "I/You/They/We have | He/She/It has inflamed",
        "I/You/They/We have been inflaming | He/She/It has been inflaming",
        "I/He/She/It/We/You/They inflamed",
        "I/He/She/It was inflaming | They/We/You were inflaming",
        "I/He/She/It/We/You/They had inflamed",
        "I/He/She/It/We/You/They had been inflaming",
        "I/He/She/It/We/You/They will inflame",
        "I/He/She/It/We/You/They will be inflaming",
        "I/He/She/It/We/You/They will have inflamed",
        "I/He/She/It/We/You/They will have been inflaming"
    ],
    "synonyms": ["irritate", "aggravate", "exacerbate", "anger", "provoke", "incite", "enrage", "annoy", "intensify", "arouse", "stir up", "foment"],
    "antonyms": ["soothe", "calm", "alleviate", "ease", "reduce", "quell", "pacify", "placate", "mitigate", "dampen", "cool", "assuage"],
    "questions": [
        "What can inflame this condition? (context: medical)",
        "If the wound is inflamed, what should I do? (context: medical inquiry)",
        "Who is likely to inflame the situation? (context: conflict resolution)",
        "Have you done anything to inflame the issue? (context: conflict escalation)",
        "Why do certain foods inflame allergies? (context: dietary concerns)",
        "How can we avoid actions that inflame tensions? (context: diplomacy)"
    ]
},

{
    "topic": "travel verbs",
    "category": "regular",
    "verb": "visit",
    "answer": [
        "I/They/We/You visit | He/She/It visits",
        "I am | He/She/It is | They/We/You are visiting",
        "I/You/They/We have | He/She/It has visited",
        "I/You/They/We have been visiting | He/She/It has been visiting",
        "I/He/She/It/We/You/They visited",
        "I/He/She/It was visiting | They/We/You were visiting",
        "I/He/She/It/We/You/They had visited",
        "I/He/She/It/We/You/They had been visiting",
        "I/He/She/It/We/You/They will visit",
        "I/He/She/It/We/You/They will be visiting",
        "I/He/She/It/We/You/They will have visited",
        "I/He/She/It/We/You/They will have been visiting"
    ],
    "synonyms": ["tour", "travel to", "stop by", "see", "explore", "call on", "drop in on", "go to", "attend", "frequent", "patronize", "journey to"],
    "antonyms": ["depart", "leave", "exit", "abandon", "neglect", "ignore", "shun", "avoid", "bypass", "evade", "desert", "forsake"],
    "questions": [
        "Which countries did you visit last year? (context: travel experiences)",
        "Who wants to visit the new museum with me? (context: leisure activity)",
        "Have you visited your family recently? (context: family reunion)",
        "If you could visit any country, where would you go? (context: travel plans)",
        "What attractions did you visit in the city? (context: tourism)",
        "Why do people visit historical sites? (context: cultural interest)"
    ]
}
,



{
    "topic": "movement verbs",
    "category": "irregular",
    "verb": "fly",
    "answer": [
        "I/They/We/You fly | He/She/It flies",
        "I am | He/She/It is | They/We/You are flying",
        "I/You/They/We have | He/She/It has flown",
        "I/You/They/We have been flying | He/She/It has been flying",
        "I/He/She/It/We/You/They flew",
        "I/He/She/It was flying | They/We/You were flying",
        "I/He/She/It/We/You/They had flown",
        "I/He/She/It/We/You/They had been flying",
        "I/He/She/It/We/You/They will fly",
        "I/He/She/It/We/You/They will be flying",
        "I/He/She/It/We/You/They will have flown",
        "I/He/She/It/We/You/They will have been flying"
    ],
    "synonyms": [
        "soar",
        "glide",
        "hover",
        "sail",
        "pilot",
        "travel by air",
        "wing"
    ],
    "antonyms": [
        "land",
        "touch down",
        "alight",
        "descend",
        "settle",
        "ground"
    ],
    "questions": [
        "How often do you fly for business? (context: travel)",
        "When do you fly out? (context: travel plans)",
        "If you could fly, where would you go? (context: hypothetical)",
        "Who flew the plane during the emergency? (context: aviation)",
        "Have the birds started flying south for the winter? (context: nature)",
        "Can you fly a kite in this kind of wind? (context: leisure)",
        "What time does your flight fly out tomorrow? (context: travel)"
    ]
}
,

{
    "topic": "development verbs",
    "category": "irregular",
    "verb": "grow",
    "answer": [
        "I/They/We/You grow | He/She/It grows",
        "I am | He/She/It is | They/We/You are growing",
        "I/You/They/We have | He/She/It has grown",
        "I/You/They/We have been growing | He/She/It has been growing",
        "I/He/She/It/We/You/They grew",
        "I/He/She/It was growing | They/We/You were growing",
        "I/He/She/It/We/You/They had grown",
        "I/He/She/It/We/You/They had been growing",
        "I/He/She/It/We/You/They will grow",
        "I/He/She/It/We/You/They will be growing",
        "I/He/She/It/We/You/They will have grown",
        "I/He/She/It/We/You/They will have been growing"
    ],
    "synonyms": [
        "cultivate",
        "raise",
        "nurture",
        "develop",
        "expand",
        "increase",
        "flourish"
    ],
    "antonyms": [
        "shrink",
        "wither",
        "decline",
        "decrease",
        "diminish",
        "dwindle",
        "recede"
    ],
    "questions": [
        "How do you grow tomatoes in your garden? (context: gardening)",
        "Who grows the best flowers in this neighborhood? (context: community)",
        "Have they grown much since last year? (context: development)",
        "Where did you grow up? (context: childhood)",
        "If you could grow any plant, what would it be? (context: hypothetical)",
        "If you had grown up in France, how would your life be different?    (context: hypothetical)",
        "What do you need to grow a business? (context: entrepreneurship)",
        "Why is it important to grow your network? (context: networking)",
        "Why do some companies grow faster than others? (context: business growth)",
        "What conditions are needed to grow these plants? (context: agriculture)"
    ]
}
,
{
    "topic": "action verbs",
    "category": "regular",
    "verb": "raise",
    "answer": [
        "I/They/We/You raise | He/She/It raises",
        "I am | He/She/It is | They/We/You are raising",
        "I/You/They/We have | He/She/It has raised",
        "I/You/They/We have been raising | He/She/It has been raising",
        "I/He/She/It/We/You/They raised",
        "I/He/She/It was raising | They/We/You were raising",
        "I/He/She/It/We/You/They had raised",
        "I/He/She/It/We/You/They had been raising",
        "I/He/She/It/We/You/They will raise",
        "I/He/She/It/We/You/They will be raising",
        "I/He/She/It/We/You/They will have raised",
        "I/He/She/It/We/You/They will have been raising"
    ],
    "synonyms": ["lift", "elevate", "hoist", "uplift", "increase", "enhance", "amplify", "boost", "escalate", "upraise", "elevate", "promote"],
    "antonyms": ["lower", "drop", "decrease", "diminish", "reduce", "depress", "dwindle", "degrade", "downscale", "downsize", "lessen", "decline"],
    "questions": [
        "How did they raise the funds? (context: fundraising)",
        "Who will raise the issue at the meeting? (context: discussion)",
        "Have you raised your prices recently? (context: business)",
        "What can you do to raise your score? (context: education)",
        "What can help to raise awareness about this cause? (context: advocacy)",
        "What advice can you give about how to raise a child? (context: parenting)",
        "Why did you raise your hand? (context: classroom)",
        "What can help to raise awareness about this cause? (context: advocacy)"
    ]
}
,
{
    "topic": "financial verbs",
    "category": "irregular",
    "verb": "spend",
    "answer": [
        "I/They/We/You spend | He/She/It spends",
        "I am | He/She/It is | They/We/You are spending",
        "I/You/They/We have | He/She/It has spent",
        "I/You/They/We have been spending | He/She/It has been spending",
        "I/He/She/It/We/You/They spent",
        "I/He/She/It was spending | They/We/You were spending",
        "I/He/She/It/We/You/They had spent",
        "I/He/She/It/We/You/They had been spending",
        "I/He/She/It/We/You/They will spend",
        "I/He/She/It/We/You/They will be spending",
        "I/He/She/It/We/You/They will have spent",
        "I/He/She/It/We/You/They will have been spending"
    ],
    "synonyms": ["expend", "use up", "consume", "utilize", "employ", "disburse", "invest", "allocate", "dole out", "deplete", "waste", "squander"],
    "antonyms": ["save", "conserve", "retain", "preserve", "hoard", "accumulate", "store", "stockpile", "withhold", "stint", "economize", "budget"],
    "questions": [
        "How much did you spend on your last vacation? (context: travel expenses)",
        "Where do you spend most of your time? (context: time management)",
        "Who spends the most in your household? (context: family budget)",
        "How many days did you spend on the road? (context: travel time)",
        "Have you spent a lot on home renovations? (context: home improvement)",
        "How did you spend your weekend? (context: leisure activities)",
        "What are you planning to spend your bonus on? (context: financial planning)",
        "Why is it important to spend wisely? (context: financial literacy)"
    ]
}

,

{
    "topic": "weather verbs",
    "category": "regular",
    "verb": "rain",
    "answer": [
        "It rains",
        "It is raining",
        "It has rained",
        "It has been raining",
        "It rained",
        "It was raining",
        "It had rained",
        "It had been raining",
        "It will rain",
        "It will be raining",
        "It will have rained",
        "It will have been raining"
    ],
    "synonyms": ["drizzle", "shower", "pour", "precipitate", "sprinkle", "mizzle", "spit", "patter", "drip", "drop", "spill", "splash"],
    "antonyms": ["clear", "dry", "brighten", "lighten", "improve", "stop raining", "cease raining", "abate", "dissipate", "disperse", "break", "lift"],
    "questions": [
        "Will it rain tomorrow? (context: weather forecast)",
        "How often does it rain here? (context: climate inquiry)",
        "Has it rained this week? (context: weather observation)",
        "Why does it rain so much in this region? (context: geographical inquiry)",
        "What happens when it rains heavily? (context: effects of rainfall)"
    ]
}
,

,
{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "listen",
    "answer": [
        "I/They/We/You listen | He/She/It listens",
        "I am | He/She/It is | They/We/You are listening",
        "I/You/They/We have | He/She/It has listened",
        "I/You/They/We have been listening | He/She/It has been listening",
        "I/He/She/It/We/You/They listened",
        "I/He/She/It was listening | They/We/You were listening",
        "I/He/She/It/We/You/They had listened",
        "I/He/She/It/We/You/They had been listening",
        "I/He/She/It/We/You/They will listen",
        "I/He/She/It/We/You/They will be listening",
        "I/He/She/It/We/You/They will have listened",
        "I/He/She/It/We/You/They will have been listening"
    ],
    "synonyms": [
        "hear",
        "attend",
        "tune in",
        "heed",
        "pay attention",
        "take heed",
        "eavesdrop"
    ],
    "antonyms": [
        "ignore",
        "disregard",
        "neglect",
        "overlook",
        "mishear",
        "tune out"
    ],
    "questions": [
        "Do you listen to music while working? (context: habits)",
        "Who listens to the customer feedback in your company? (context: business)",
        "Have you listened to the latest podcast episode? (context: entertainment)",
        "How can I get my kids to listen to me? (context: parenting)",
        "Why is it important to listen in class? (context: education)"
    ]
}
,

{
    "topic": "cognitive verbs",
    "category": "irregular",
    "verb": "understand",
    "answer": [
        "I/They/We/You understand | He/She/It understands",
        "I am | He/She/It is | They/We/You are understanding",
        "I/You/They/We have | He/She/It has understood",
        "I/You/They/We have been understanding | He/She/It has been understanding",
        "I/He/She/It/We/You/They understood",
        "I/He/She/It was understanding | They/We/You were understanding",
        "I/He/She/It/We/You/They had understood",
        "I/He/She/It/We/You/They had been understanding",
        "I/He/She/It/We/You/They will understand",
        "I/He/She/It/We/You/They will be understanding",
        "I/He/She/It/We/You/They will have understood",
        "I/He/She/It/We/You/They will have been understanding"
    ],
    "synonyms": [
        "comprehend",
        "grasp",
        "get",
        "follow",
        "fathom",
        "perceive",
        "discern",
        "apprehend"
    ],
    "antonyms": [
        "misunderstand",
        "misinterpret",
        "misconstrue",
        "be confused about",
        "be perplexed about",
        "fail to understand"
    ],
    "questions": [
        "Do you understand the instructions given? (context: general)",
        "Who understands the problem the best in your team? (context: teamwork)",
        "Have they understood the consequences of their actions? (context: behavior)",
        "Why is it hard to understand quantum physics? (context: education)",
        "Can you understand a foreign language without studying it? (context: language learning)"
    ]
}
,


{
    "topic": "action verbs",
    "category": "irregular",
    "verb": "cut",
    "answer": [
        "I/They/We/You cut | He/She/It cuts",
        "I am | He/She/It is | They/We/You are cutting",
        "I/You/They/We have | He/She/It has cut",
        "I/You/They/We have been cutting | He/She/It has been cutting",
        "I/He/She/It/We/You/They cut",
        "I/He/She/It was cutting | They/We/You were cutting",
        "I/He/She/It/We/You/They had cut",
        "I/He/She/It/We/You/They had been cutting",
        "I/He/She/It/We/You/They will cut",
        "I/He/She/It/We/You/They will be cutting",
        "I/He/She/It/We/You/They will have cut",
        "I/He/She/It/We/You/They will have been cutting"
    ],
    "synonyms": [
        "slice",
        "chop",
        "carve",
        "trim",
        "prune",
        "clip",
        "sever",
        "slash"
    ],
    "antonyms": [
        "join",
        "attach",
        "connect",
        "bind",
        "link",
        "unite",
        "fuse"
    ],
    "questions": [
        "Can you cut the paper into smaller pieces? (context: crafts)",
        "Who cut the wire during the repair? (context: maintenance)",
        "Who cut your hair? (context: personal)",
        "Have they cut the budget for this project? (context: finance)",
        "Why did you cut your hair so short? (context: personal)",
        "What tool should I use to cut this material? (context: DIY)"
    ]
}
,

{
    "topic": "action verbs",
    "category": "irregular",
    "verb": "leave",
    "answer": [
        "I/They/We/You leave | He/She/It leaves",
        "I am | He/She/It is | They/We/You are leaving",
        "I/You/They/We have | He/She/It has left",
        "I/You/They/We have been leaving | He/She/It has been leaving",
        "I/He/She/It/We/You/They left",
        "I/He/She/It was leaving | They/We/You were leaving",
        "I/He/She/It/We/You/They had left",
        "I/He/She/It/We/You/They had been leaving",
        "I/He/She/It/We/You/They will leave",
        "I/He/She/It/We/You/They will be leaving",
        "I/He/She/It/We/You/They will have left",
        "I/He/She/It/We/You/They will have been leaving"
    ],
    "synonyms": [
        "depart",
        "exit",
        "go",
        "withdraw",
        "retire",
        "take off",
        "vacate"
    ],
    "antonyms": [
        "arrive",
        "enter",
        "stay",
        "remain",
        "come",
        "join",
        "occupy"
    ],
    "questions": [
        "When do you plan to leave for the airport? (context: travel)",
        "Who left the meeting early yesterday? (context: workplace)",
        "Have they left the country yet? (context: migration)",
        "Why did she leave the party so soon? (context: social)",
        "Can we leave a message for the manager? (context: communication)"
    ]
},

{
    "topic": "movement verbs",
    "category": "irregular",
    "verb": "come",
    "answer": [
        "I/They/We/You come | He/She/It comes",
        "I am | He/She/It is | They/We/You are coming",
        "I/You/They/We have | He/She/It has come",
        "I/You/They/We have been coming | He/She/It has been coming",
        "I/He/She/It/We/You/They came",
        "I/He/She/It was coming | They/We/You were coming",
        "I/He/She/It/We/You/They had come",
        "I/He/She/It/We/You/They had been coming",
        "I/He/She/It/We/You/They will come",
        "I/He/She/It/We/You/They will be coming",
        "I/He/She/It/We/You/They will have come",
        "I/He/She/It/We/You/They will have been coming"
    ],
    "synonyms": [
        "arrive",
        "reach",
        "appear",
        "approach",
        "turn up",
        "show up",
        "enter"
    ],
    "antonyms": [
        "leave",
        "depart",
        "go",
        "exit",
        "disappear",
        "vanish",
        "withdraw"
    ],
    "questions": [
        "When will you come home? (context: personal)",
        "Who came to the meeting yesterday? (context: workplace)",
        "Have they come to a decision yet? (context: decision making)",
        "Why did so many people come to the event? (context: events)",
        "Can you come to the store with me? (context: personal request)"
    ]
}
,





{
"topic": "social interaction verbs",
"category": "irregular",
"verb": "meet",
"answer": [
"I/They/We/You meet | He/She/It meets",
"I am | He/She/It is | They/We/You are meeting",
"I/You/They/We have | He/She/It has met",
"I/You/They/We have been meeting | He/She/It has been meeting",
"I/He/She/It/We/You/They met",
"I/He/She/It was meeting | They/We/You were meeting",
"I/He/She/It/We/You/They had met",
"I/He/She/It/We/You/They had been meeting",
"I/He/She/It/We/You/They will meet",
"I/He/She/It/We/You/They will be meeting",
"I/He/She/It/We/You/They will have met",
"I/He/She/It/We/You/They will have been meeting"
],
"synonyms": [
"encounter",
"come across",
"run into",
"confront",
"engage with",
"greet",
"assemble",
"gather",
"convene",
"join"
],
"antonyms": [
"depart",
"leave",
"separate",
"disperse",
"avoid"
],
"questions": [
"When do we meet again?(context: scheduling)",
"Who will you meet today?(context: social planning)",
"Have they met the new manager?(context: workplace introduction)",
"Why did she not meet us as planned?(context: social inquiry)",
"How often do you meet for practice?(context: regular activity)"
]
},

{
    "topic": "action verbs",
    "category": "irregular",
    "verb": "break",
    "answer": [
        "I/They/We/You break | He/She/It breaks",
        "I am | He/She/It is | They/We/You are breaking",
        "I/You/They/We have | He/She/It has broken",
        "I/You/They/We have been breaking | He/She/It has been breaking",
        "I/He/She/It/We/You/They broke",
        "I/He/She/It was breaking | They/We/You were breaking",
        "I/He/She/It/We/You/They had broken",
        "I/He/She/It/We/You/They had been breaking",
        "I/He/She/It/We/You/They will break",
        "I/He/She/It/We/You/They will be breaking",
        "I/He/She/It/We/You/They will have broken",
        "I/He/She/It/We/You/They will have been breaking"
    ],
    "synonyms": ["fracture", "shatter", "smash", "crack", "split", "rupture", "snap", "burst", "disrupt", "demolish", "destroy", "tear"],
    "antonyms": ["fix", "repair", "mend", "restore", "assemble", "build", "create", "construct", "unite", "join", "combine", "bind"],
    "questions": [
        "How did you break the glass? (context: accident)",
        "Who breaks the most items at home? (context: household incidents)",
        "Have you ever broken a bone? (context: medical inquiry)",
        "Why did they break up? (context: relationship)",
        "Can you break this down into smaller pieces? (context: instruction)",
        "What happens when you break a promise? (context: ethics)",
        "How do you break a bad habit? (context: personal development)",
        "What causes materials to break under pressure? (context: physics)",
        "Why is it important not to break promises? (context: ethics)"
    ]
}
,





{
"topic": "basic verbs",
"category": "irregular",
"verb": "eat",
"answer": [
"I/They/We/You eat | He/She/It eats",
"I am | He/She/It is | They/We/You are eating",
"I/You/They/We have | He/She/It has eaten",
"I/You/They/We have been eating | He/She/It has been eating",
"I/He/She/It/We/You/They ate",
"I/He/She/It was eating | They/We/You were eating",
"I/He/She/It/We/You/They had eaten",
"I/He/She/It/We/You/They had been eating",
"I/He/She/It/We/You/They will eat",
"I/He/She/It/We/You/They will be eating",
"I/He/She/It/We/You/They will have eaten",
"I/He/She/It/We/You/They will have been eating"
],
"synonyms": [
"consume",
"ingest",
"devour",
"partake of",
"nibble",
"snack on",
"dine on",
"munch",
"chew",
"gobble"
],
"antonyms": [
"fast",
"abstain",
"starve",
"refrain",
"decline"
],
"questions": [
"What did you eat for breakfast?(context: daily routine)",
"Who will eat with you tonight?(context: social gathering)",
"Have they eaten yet?(context: concern for others)",
"Did you eat something for lunch?(context: inquiry about food intake)",

"Why did she eat so quickly?(context: observation)",
"What's your favorite thing to eat?(context: personal preference)",
"How can you eat that?(context: expressing disbelief)",
]
},

{
    "topic": "common verbs",
    "category": "irregular",
    "verb": "give",
    "answer": [
        "I/You/We/They give | He/She/It gives",
        "I am | He/She/It is | You/We/They are giving",
        "I/You/We/They have | He/She/It has given",
        "I/You/We/They have been giving | He/She/It has been giving",
        "I/He/She/It/We/You/They gave",
        "I/He/She/It was giving | We/You/They were giving",
        "I/He/She/It/We/You/They had given",
        "I/He/She/It/We/You/They had been giving",
        "I/He/She/It/We/You/They will give",
        "I/He/She/It/We/You/They will be giving",
        "I/He/She/It/We/You/They will have given",
        "I/He/She/It/We/You/They will have been giving"
    ],
    "synonyms": [
        "present",
        "offer",
        "provide",
        "supply",
        "donate",
        "contribute",
        "hand",
        "deliver"
    ],
    "antonyms": [
        "take",
        "receive",
        "withhold",
        "deny",
        "refuse",
        "keep",
        "retract"
    ],
    "questions": [
        "Can you give me a hand with this? (context: request for assistance)",
        "What did you give her for her birthday? (context: inquiry about gift)",
        "Have they given their approval yet? (context: inquiry about consent)",
        "Why did you give up so easily? (context: inquiry about surrender)",
        "Who will give the presentation? (context: inquiry about responsibility)"
    ]
},



{
    "topic": "decision verbs",
    "category": "regular",
    "verb": "refuse",
    "answer": [
        "I/They/We/You refuse | He/She/It refuses",
        "I am | He/She/It is | They/We/You are refusing",
        "I/You/They/We have | He/She/It has refused",
        "I/You/They/We have been refusing | He/She/It has been refusing",
        "I/He/She/It/We/You/They refused",
        "I/He/She/It was refusing | They/We/You were refusing",
        "I/He/She/It/We/You/They had refused",
        "I/He/She/It/We/You/They had been refusing",
        "I/He/She/It/We/You/They will refuse",
        "I/He/She/It/We/You/They will be refusing",
        "I/He/She/It/We/You/They will have refused",
        "I/He/She/It/We/You/They will have been refusing"
    ],
    "synonyms": ["decline", "reject", "deny", "repudiate", "rebuff", "disallow", "spurn", "repel", "turn down", "oppose", "withhold", "resist"],
    "antonyms": ["accept", "agree", "approve", "consent", "embrace", "welcome", "permit", "concede", "acquiesce", "comply", "yield", "succumb"],
    "questions": [
        "Why did you refuse the offer? (context: decision-making)",
        "Who refuses to participate in the project? (context: team dynamics)",
        "When was the last you refused to do something? (context: personal inquiry)",
        "Have they refused your request? (context: negotiation)",
        "What reasons might someone have to refuse this? (context: objection analysis)",
        "How can we convince them not to refuse? (context: persuasion strategy)"
    ]
}
,


{
    "topic": "action verbs",
    "category": "regular",
    "verb": "force",
    "answer": [
        "I/They/We/You force | He/She/It forces",
        "I am | He/She/It is | They/We/You are forcing",
        "I/You/They/We have | He/She/It has forced",
        "I/You/They/We have been forcing | He/She/It has been forcing",
        "I/He/She/It/We/You/They forced",
        "I/He/She/It was forcing | They/We/You were forcing",
        "I/He/She/It/We/You/They had forced",
        "I/He/She/It/We/You/They had been forcing",
        "I/He/She/It/We/You/They will force",
        "I/He/She/It/We/You/They will be forcing",
        "I/He/She/It/We/You/They will have forced",
        "I/He/She/It/We/You/They will have been forcing"
    ],
    "synonyms": ["compel", "coerce", "oblige", "pressure", "constrain", "drive", "impel", "push", "urge", "press", "necessitate", "dictate"],
    "antonyms": ["persuade", "convince", "encourage", "motivate", "entice", "seduce", "induce", "tempt", "allure", "lure", "attract", "invite"],
    "questions": [
        "Why were you forced to change your plans? (context: compulsion)",
        "Who has been forced to leave the job? (context: employment issues)",
        "Have they forced a decision on this matter? (context: decision making)",
        "Have you ever forced someone to do something? (context: compulsion)",
        "What can force us to reconsider our strategy? (context: business planning)",
        "How do you handle being forced into a situation? (context: coping strategies)"
    ]
},


{
    "topic": "search verbs",
    "category": "irregular",
    "verb": "seek",
    "answer": [
        "I/They/We/You seek | He/She/It seeks",
        "I am | He/She/It is | They/We/You are seeking",
        "I/You/They/We have | He/She/It has sought",
        "I/You/They/We have been seeking | He/She/It has been seeking",
        "I/He/She/It/We/You/They sought",
        "I/He/She/It was seeking | They/We/You were seeking",
        "I/He/She/It/We/You/They had sought",
        "I/He/She/It/We/You/They had been seeking",
        "I/He/She/It/We/You/They will seek",
        "I/He/She/It/We/You/They will be seeking",
        "I/He/She/It/We/You/They will have sought",
        "I/He/She/It/We/You/They will have been seeking"
    ],
    "synonyms": ["search for", "look for", "hunt for", "pursue", "quest for", "chase", "explore for", "scout for", "probe for", "quest after", "solicit", "desire"],
    "antonyms": ["avoid", "ignore", "neglect", "disregard", "shun", "evade", "eschew", "abandon", "forsake", "desist from", "renounce", "reject"],
    "questions": [
        "What are you seeking in this new job? (context: career goals)",
        "Who seeks approval for these projects? (context: administrative process)",
        "Have they sought help with the problem? (context: problem-solving)",
        "Have you sought advice from an expert? (context: guidance seeking)",
        "When was the last time you sought advice and for what? (context: guidance seeking)",
        "Why do people seek fame? (context: motivation analysis)",
        "How do you seek advice when needed? (context: guidance seeking)"
    ]
},



{
    "topic": "common verbs",
    "category": "regular",
    "verb": "work",
    "answer": [
        "I/You/We/They work | He/She/It works",
        "I am | He/She/It is | You/We/They are working",
        "I/You/We/They have | He/She/It has worked",
        "I/You/We/They have been working | He/She/It has been working",
        "I/He/She/It/We/You/They worked",
        "I/He/She/It was working | We/You/They were working",
        "I/He/She/It/We/You/They had worked",
        "I/He/She/It/We/You/They had been working",
        "I/He/She/It/We/You/They will work",
        "I/He/She/It/We/You/They will be working",
        "I/He/She/It/We/You/They will have worked",
        "I/He/She/It/We/You/They will have been working"
    ],
    "synonyms": [
        "labor",
        "operate",
        "perform",
        "function",
        "toil",
        "strive",
        "endeavor",
        "produce"
    ],
    "antonyms": [
        "rest",
        "relax",
        "idle",
        "laze",
        "slack",
        "neglect",
        "shirk"
    ],
    "questions": [
        "Where do you work? (context: inquiry about employment)",
        "How often do you work? (context: inquiry about frequency)",
        "What time do you start work? (context: inquiry about schedule)",
        "Why are you working so hard? (context: inquiry about motivation)",
        "Who will work on this project? (context: inquiry about responsibility)",
        "How does this new feature work? (context: inquiry about operation)",
        "How does this machine work? (context: inquiry about operation)",
        "Are you working on any new projects? (context: inquiry about current tasks)",
        "Who worked on this last? (context: inquiry about previous involvement)",
        "Will you work overtime today? (context: inquiry about extra hours)"
    ]
}
,

{
      "topic": "safety verbs",
      "category": "regular",
      "verb": "look out",
      "answer": [
          "I/They/We/You look out | He/She/It looks out",
          "I am | He/She/It is | They/We/You are looking out",
          "I/You/They/We have | He/She/It has looked out",
          "I/You/They/We have been looking out | He/She/It has been looking out",
          "I/He/She/It/We/You/They looked out",
          "I/He/She/It was looking out | They/We/You were looking out",
          "I/He/She/It/We/You/They had looked out",
          "I/He/She/It/We/You/They had been looking out",
          "I/He/She/It/We/You/They will look out",
          "I/He/She/It/We/You/They will be looking out",
          "I/He/She/It/We/You/They will have looked out",
          "I/He/She/It/We/You/They will have been looking out"
      ],
"synonyms":[ "be vigilant", "watch out", "be on guard", "be careful", "pay attention", "heed"],

"antonyms":[ "ignore", "disregard", "neglect", "overlook", "miss", "be oblivious"],

      "questions": [
          "Can you look out for my dog while I'm away?(context: pet care)",
          "Who will look out for any hazards during the hike?(context: outdoor activity)",
          "Why should we always look out when crossing the street?(context: safety)",
          "Have you looked out for any signs of trouble?(context: vigilance)",
          "How do you look out for your family's safety?(context: family care)"
      ]
  }
,


{
    "topic": "general verbs",
    "category": "regular",
    "verb": "pass",
    "answer": [
        "I/They/We/You pass | He/She/It passes",
        "I am | He/She/It is | They/We/You are passing",
        "I/You/They/We have | He/She/It has passed",
        "I/You/They/We have been passing | He/She/It has been passing",
        "I/He/She/It/We/You/They passed",
        "I/He/She/It was passing | They/We/You were passing",
        "I/He/She/It/We/You/They had passed",
        "I/He/She/It/We/You/They had been passing",
        "I/He/She/It/We/You/They will pass",
        "I/He/She/It/We/You/They will be passing",
        "I/He/She/It/We/You/They will have passed",
        "I/He/She/It/We/You/They will have been passing"
    ],
"synonyms":[ "move past", "go by", "cross", "overtake", "surpass", "navigate"],

"antonyms":[ "fail", "stop", "halt", "remain", "stay", "linger"],

    "questions": [
        "How do you pass the time on weekends?(context: leisure)",
        "Who passed you in the hallway earlier?(context: encounter)",
        "Have they passed the new law yet?(context: legislation)",
        "Why did he pass on the opportunity to lead the project?(context: decision-making)",
        "How can I pass my driving test on the first try?(context: achievement)"
    ]
},


{
    "topic": "communication verbs",
    "category": "regular",
    "verb": "talk about",
    "answer": [
        "I/They/We/You talk about | He/She/It talks about",
        "I am | He/She/It is | They/We/You are talking about",
        "I/You/They/We have | He/She/It has talked about",
        "I/You/They/We have been talking about | He/She/It has been talking about",
        "I/He/She/It/We/You/They talked about",
        "I/He/She/It was talking about | They/We/You were talking about",
        "I/He/She/It/We/You/They had talked about",
        "I/He/She/It/We/You/They had been talking about",
        "I/He/She/It/We/You/They will talk about",
        "I/He/She/It/We/You/They will be talking about",
        "I/He/She/It/We/You/They will have talked about",
        "I/He/She/It/We/You/They will have been talking about"
    ],
"synonyms":[ "discuss", "speak about", "converse about", "mention", "bring up", "refer to"],

"antonyms":[ "ignore", "overlook", "omit", "neglect", "bypass", "sidestep"],

    "questions": [
        "How often do you talk about your goals?(context: personal development)",
    "Have you talked to anyone about this?(context: inquiry)",
    "When were you planning to talk about this?(context: scheduling)",
        "What will you talk about in the meeting?(context: business)",
        "Who talks about sports all the time?(context: hobbies)",
        "Have they talked about the new project?(context: project planning)",
        "Why did she talk about that incident?(context: recounting events)",
    ]
},



{
    "topic": "movement verbs",
    "category": "irregular",
    "verb": "go by",
    "answer": [
        "I/They/We/You go by | He/She/It goes by",
        "I am | He/She/It is | They/We/You are going by",
        "I/You/They/We have | He/She/It has gone by",
        "I/You/They/We have been going by | He/She/It has been going by",
        "I/He/She/It/We/You/They went by",
        "I/He/She/It was going by | They/We/You were going by",
        "I/He/She/It/We/You/They had gone by",
        "I/He/She/It/We/You/They had been going by",
        "I/He/She/It/We/You/They will go by",
        "I/He/She/It/We/You/They will be going by",
        "I/He/She/It/We/You/They will have gone by",
        "I/He/She/It/We/You/They will have been going by"
    ],
"synonyms":[ "pass", "move past", "proceed", "travel", "navigate", "elapse"],

"antonyms":[ "stop", "halt", "remain", "stay", "linger", "pause"],

    "questions": [
        "How many buses go by this street every hour?(context: transportation)",
        "Who went by just now?(context: observation)",
        "Have five minutes gone by already?(context: timekeeping)",
        "Why do we let opportunities go by so often?(context: missed opportunities)",
        "How quickly does time go by during the holidays?(context: time perception)"
    ]
},



{
      "topic": "motivational verbs",
      "category": "regular",
      "verb": "take action",
      "answer": [
          "I/They/We/You take action | He/She/It takes action",
          "I am | He/She/It is | They/We/You are taking action",
          "I/You/They/We have | He/She/It has taken action",
          "I/You/They/We have been taking action | He/She/It has been taking action",
          "I/He/She/It/We/You/They took action",
          "I/He/She/It was taking action | They/We/You were taking action",
          "I/He/She/It/We/You/They had taken action",
          "I/He/She/It/We/You/They had been taking action",
          "I/He/She/It/We/You/They will take action",
          "I/He/She/It/We/You/They will be taking action",
          "I/He/She/It/We/You/They will have taken action",
          "I/He/She/It/We/You/They will have been taking action"
      ],
"synonyms":[ "act", "intervene", "make a move", "make a stand", "step in", "respond"],

"antonyms":[ "hesitate", "wait", "delay", "procrastinate", "dither", "do nothing"],

      "questions": [
          "When will the government take action against pollution?(context: environmental policy)",
          "Have they taken action on your complaint?(context: customer service)",
          "Why hasn't anyone taken action yet?(context: crisis management)",
          "Who will take action to resolve this issue?(context: problem-solving)",
          "How can we take action to improve our community?(context: community service)"
      ]
  },




{
    "topic": "common verbs",
    "category": "irregular",
    "verb": "take",
    "answer": [
        "I/You/We/They take | He/She/It takes",
        "I am | He/She/It is | You/We/They are taking",
        "I/You/We/They have | He/She/It has taken",
        "I/You/We/They have been taking | He/She/It has been taking",
        "I/He/She/It/We/You/They took",
        "I/He/She/It was taking | We/You/They were taking",
        "I/He/She/It/We/You/They had taken",
        "I/He/She/It/We/You/They had been taking",
        "I/He/She/It/We/You/They will take",
        "I/He/She/It/We/You/They will be taking",
        "I/He/She/It/We/You/They will have taken",
        "I/He/She/It/We/You/They will have been taking"
    ],
    "synonyms": [
        "grab",
        "hold",
        "carry",
        "capture",
        "seize",
        "obtain",
        "acquire",
        "collect"
    ],
    "antonyms": [
        "give",
        "return",
        "leave",
        "abandon",
        "release",
        "discard",
        "surrender"
    ],
    "questions": [
        "Have you ever taken dance classes?",
        "Can you take this to the post office? (context: request for a task)",
        "How long does it take to get there? (context: inquiry about travel time)",
        "Who is taking you to the airport? (context: inquiry about transportation)",
        "Who took the last piece of cake? (context: inquiry about possession)",
        "Have they taken their medicine yet? (context: inquiry about action completion)",
        "What did you take for your headache? (context: inquiry about medication)",
        "Who took my book? (context: inquiry about possession)",
        "Will you take responsibility for this? (context: responsibility assignment)"
    ]
},


{
    "topic": "common verbs",
    "category": "irregular",
    "verb": "hold",
    "answer": [
        "I/They/We/You hold | He/She/It holds",
        "I am | He/She/It is | They/We/You are holding",
        "I/You/They/We have | He/She/It has held",
        "I/You/They/We have been holding | He/She/It has been holding",
        "I/He/She/It/We/You/They held",
        "I/He/She/It was holding | They/We/You were holding",
        "I/He/She/It/We/You/They had held",
        "I/He/She/It/We/You/They had been holding",
        "I/He/She/It/We/You/They will hold",
        "I/He/She/It/We/You/They will be holding",
        "I/He/She/It/We/You/They will have held",
        "I/He/She/It/We/You/They will have been holding"
    ],
    "synonyms": [
        "grasp",
        "grip",
        "clutch",
        "cling to",
        "hang onto",
        "retain",
        "possess",
        "have",
        "maintain",
        "sustain"
    ],
    "antonyms": [
        "release",
        "let go",
        "drop",
        "relinquish",
        "surrender"
    ],
    "questions": [
        "Can you hold this for me? (context: general)",
        "Who holds the record for this? (context: sports)",
        "Have you held a leadership position before? (context: career)",
        "How long can you hold your breath? (context: general)",
        "What are you holding in your hand? (context: general)"
    ]
},



{
    "topic": "common verbs",
    "category": "regular",
    "verb": "think",
    "answer": [
        "I/You/We/They think | He/She/It thinks",
        "I am | He/She/It is | You/We/They are thinking",
        "I/You/We/They have | He/She/It has thought",
        "I/You/We/They have been thinking | He/She/It has been thinking",
        "I/He/She/It/We/You/They thought",
        "I/He/She/It was thinking | We/You/They were thinking",
        "I/He/She/It/We/You/They had thought",
        "I/He/She/It/We/You/They had been thinking",
        "I/He/She/It/We/You/They will think",
        "I/He/She/It/We/You/They will be thinking",
        "I/He/She/It/We/You/They will have thought",
        "I/He/She/It/We/You/They will have been thinking"
    ],
    "synonyms": [
        "believe",
        "consider",
        "contemplate",
        "ponder",
        "reflect",
        "muse",
        "reason",
        "deliberate"
    ],
    "antonyms": [
        "disregard",
        "ignore",
        "neglect",
        "overlook",
        "dismiss",
        "forget"
    ],
    "questions": [
        "What do you think about this idea? (context: seeking opinion)",
        "Who do you think will win the game? (context: prediction)",
        "When do you think they will arrive? (context: prediction)",
        "Who do you think you are? (context: inquiry about identity)",
        "Have you thought about the consequences? (context: inquiry about consideration)",
        "Do you think it will rain today? (context: inquiry about likelihood)",
        "Have you ever thought about the consequences of climate change? (context: inquiry about consideration)",
        "Have you ever thought about moving abroad? (context: inquiry about consideration)",
        "Have you thought about my proposal? (context: inquiry about consideration)",
        "Who thought of this plan? (context: inquiry about origin)",
        "How long have you been thinking about changing your job? (context: inquiry about duration)"
    ]
},


{
    "topic": "action verbs",
    "category": "regular",
    "verb": "move",
    "answer": [
        "I/They/We/You move | He/She/It moves",
        "I am | He/She/It is | They/We/You are moving",
        "I/You/They/We have | He/She/It has moved",
        "I/You/They/We have been moving | He/She/It has been moving",
        "I/He/She/It/We/You/They moved",
        "I/He/She/It was moving | They/We/You were moving",
        "I/He/She/It/We/You/They had moved",
        "I/He/She/It/We/You/They had been moving",
        "I/He/She/It/We/You/They will move",
        "I/He/She/It/We/You/They will be moving",
        "I/He/She/It/We/You/They will have moved",
        "I/He/She/It/We/You/They will have been moving"
    ],
    "synonyms": [
        "shift", 
        "transfer", 
        "relocate", 
        "proceed", 
        "migrate", 
        "travel"
    ],
    "antonyms": [
        "stay", 
        "remain", 
        "rest", 
        "halt", 
        "stop",
        "settle"
    ],
    "questions": [
        "How do you plan to move these boxes? (context: relocation)",
        "Who moves the pieces in this game? (context: board game)",
        "When will they move to the new office? (context: relocation)",
        "Have they moved to a new house yet? (context: change of residence)",
        "Why did she move to a different city? (context: decision)",
        "What happens when tectonic plates move? (context: geology)"
    ]
  }
  ,

{
    "topic": "life verbs",
    "category": "regular",
    "verb": "live",
    "answer": [
        "I/They/We/You live | He/She/It lives",
        "I am | He/She/It is | They/We/You are living",
        "I/You/They/We have | He/She/It has lived",
        "I/You/They/We have been living | He/She/It has been living",
        "I/He/She/It/We/You/They lived",
        "I/He/She/It was living | They/We/You were living",
        "I/He/She/It/We/You/They had lived",
        "I/He/She/It/We/You/They had been living",
        "I/He/She/It/We/You/They will live",
        "I/He/She/It/We/You/They will be living",
        "I/He/She/It/We/You/They will have lived",
        "I/He/She/It/We/You/They will have been living"
    ],
    "synonyms": [
        "reside", 
        "dwell", 
        "inhabit", 
        "occupy", 
        "lodge", 
        "exist"
    ],
    "antonyms": [
        "leave", 
        "vacate", 
        "depart", 
        "die", 
        "perish", 
        "expire"
    ],
    "questions": [
        "How long did you live in X? (context: duration)",
        "How long have you lived in X city? (context: duration)",
        "Where do you live? (context: residence)",
        "Who lives next door to you? (context: neighborhood)",
        "Have you lived abroad before? (context: experience)",
        "Why did she live in the city for so long? (context: choice)",
        "What is it like to live in a rural area? (context: lifestyle)"
    ]
  },

  {
    "topic": "cognitive verbs",
    "category": "regular",
    "verb": "believe",
    "answer": [
        "I/They/We/You believe | He/She/It believes",
        "I am | He/She/It is | They/We/You are believing",
        "I/You/They/We have | He/She/It has believed",
        "I/You/They/We have been believing | He/She/It has been believing",
        "I/He/She/It/We/You/They believed",
        "I/He/She/It was believing | They/We/You were believing",
        "I/He/She/It/We/You/They had believed",
        "I/He/She/It/We/You/They had been believing",
        "I/He/She/It/We/You/They will believe",
        "I/He/She/It/We/You/They will be believing",
        "I/He/She/It/We/You/They will have believed",
        "I/He/She/It/We/You/They will have been believing"
    ],
    "synonyms": [
        "think",
        "feel",
        "hold",
        "assume",
        "trust",
        "accept"
    ],
    "antonyms": [
        "disbelieve",
        "doubt",
        "question",
        "reject",
        "deny",
        "dispute"
    ],
    "questions": [
        "Do you believe in life after death?(context: philosophical)",
        "Who believes in that theory?(context: academic)",
        "Have you always believed in these principles?(context: personal belief)",
        "Why do some people believe in superstitions?(context: cultural phenomenon)",
        "Can you believe everything you read online?(context: digital literacy)"
    ]
},



{
    "topic": "recreational verbs",
    "category": "regular",
    "verb": "dance",
    "answer": [
        "I/They/We/You dance | He/She/It dances",
        "I am | He/She/It is | They/We/You are dancing",
        "I/You/They/We have | He/She/It has danced",
        "I/You/They/We have been dancing | He/She/It has been dancing",
        "I/He/She/It/We/You/They danced",
        "I/He/She/It was dancing | They/We/You were dancing",
        "I/He/She/It/We/You/They had danced",
        "I/He/She/It/We/You/They had been dancing",
        "I/He/She/It/We/You/They will dance",
        "I/He/She/It/We/You/They will be dancing",
        "I/He/She/It/We/You/They will have danced",
        "I/He/She/It/We/You/They will have been dancing"
    ],
    "synonyms": [
        "twirl",
        "swing",
        "step",
        "boogie",
        "jive",
        "sashay"
    ],
    "antonyms": [
        "sit",
        "rest",
        "stand still",
        "stay",
        "remain motionless"
    ],
    "questions": [
        "Do you dance at parties?(context: social event)",
        "Who dances best in your group?(context: entertainment)",
        "Have you ever danced in a competition?(context: competition)",
        "Why do people dance at weddings?(context: cultural tradition)",
        "Can anyone learn to dance?(context: learning)"
    ]
},






{
    "topic": "clothing verbs",
    "category": "regular",
    "verb": "wear",
    "answer": [
        "I/They/We/You wear | He/She/It wears",
        "I am | He/She/It is | They/We/You are wearing",
        "I/You/They/We have | He/She/It has worn",
        "I/You/They/We have been wearing | He/She/It has been wearing",
        "I/He/She/It/We/You/They wore",
        "I/He/She/It was wearing | They/We/You were wearing",
        "I/He/She/It/We/You/They had worn",
        "I/He/She/It/We/You/They had been wearing",
        "I/He/She/It/We/You/They will wear",
        "I/He/She/It/We/You/They will be wearing",
        "I/He/She/It/We/You/They will have worn",
        "I/He/She/It/We/You/They will have been wearing"
    ],
    "synonyms": [
        "don", 
        "put on", 
        "sport", 
        "dress in", 
        "deck out", 
        "attire"
    ],
    "antonyms": [
        "undress", 
        "strip", 
        "disrobe", 
        "shed"
    ],
    "questions": [
        "What will you wear to the party? (context: event dressing)",
        "What uniform did you wear at your school? (context: dress code)",
        "When was the last time you wore that outfit? (context: formal attire)",
        "What are you wearing to the show?",
        "Have you worn ski boots before? (context: usage)",
        "Why did she wear such a colorful dress? (context: fashion choice)",
        "How long have you been wearing glasses? (context: personal accessory)"
    ]
  },

  {
    "topic": "action verbs",
    "category": "regular",
    "verb": "prepare",
    "answer": [
        "I/They/We/You prepare | He/She/It prepares",
        "I am | He/She/It is | They/We/You are preparing",
        "I/You/They/We have | He/She/It has prepared",
        "I/You/They/We have been preparing | He/She/It has been preparing",
        "I/He/She/It/We/You/They prepared",
        "I/He/She/It was preparing | They/We/You were preparing",
        "I/He/She/It/We/You/They had prepared",
        "I/He/She/It/We/You/They had been preparing",
        "I/He/She/It/We/You/They will prepare",
        "I/He/She/It/We/You/They will be preparing",
        "I/He/She/It/We/You/They will have prepared",
        "I/He/She/It/We/You/They will have been preparing"
    ],
    "synonyms": [
        "arrange", 
        "organize", 
        "ready", 
        "set up", 
        "equip", 
        "plan"
    ],
    "antonyms": [
        "disorganize", 
        "disarrange", 
        "neglect", 
        "ignore", 
        "disorder"
    ],
    "questions": [
        "How do you prepare for an exam? (context: studying)",
        "Who is preparing dinner tonight? (context: cooking)",
        "How long did it take for you to prepare the presentation? (context: work)",
        "Have they prepared their presentation? (context: work)",
        "Why did she prepare so early? (context: planning)",
        "What do we need to prepare for the trip? (context: travel)"
    ]
  }
  ,


  {
    "topic": "common verbs",
    "category": "regular",
    "verb": "wait for",
    "answer": [
        "I/They/We/You wait for | He/She/It waits for",
        "I am | He/She/It is | They/We/You are waiting for",
        "I/You/They/We have | He/She/It has waited for",
        "I/You/They/We have been waiting for | He/She/It has been waiting for",
        "I/He/She/It/We/You/They waited for",
        "I/He/She/It was waiting for | They/We/You were waiting for",
        "I/He/She/It/We/You/They had waited for",
        "I/He/She/It/We/You/They had been waiting for",
        "I/He/She/It/We/You/They will wait for",
        "I/He/She/It/We/You/They will be waiting for",
        "I/He/She/It/We/You/They will have waited for",
        "I/He/She/It/We/You/They will have been waiting for"
    ],
    "synonyms": [
        "anticipate",
        "expect",
        "look out for",
        "await",
        "hold on for",
        "bide time for",
        "stay for",
        "pause for",
        "remain for",
        "stand by for"
    ],
    "antonyms": [
        "leave",
        "depart",
        "disregard",
        "ignore",
        "neglect"
    ],
    "questions": [
        "How long will you wait for the bus? (context: transportation)",
        "Who are you waiting for? (context: general)",
        "Have you been waiting for this opportunity? (context: career)",
        "Will they wait for us at the restaurant? (context: social)",
        "Why did you wait for so long? (context: general)"
    ]
}
  ,



  {
    "topic": "general verbs",
    "category": "regular",
    "verb": "make ready",
    "answer": [
      "I/They/We/You make ready | He/She/It makes ready",
      "I am | He/She/It is | They/We/You are making ready",
      "I/You/They/We have | He/She/It has made ready",
      "I/You/They/We have been making ready | He/She/It has been making ready",
      "I/He/She/It/We/You/They made ready",
      "I/He/She/It was making ready | They/We/You were making ready",
      "I/He/She/It/We/You/They had made ready",
      "I/He/She/It/We/You/They had been making ready",
      "I/He/She/It/We/You/They will make ready",
      "I/He/She/It/We/You/They will be making ready",
      "I/He/She/It/We/You/They will have made ready",
      "I/He/She/It/We/You/They will have been making ready"
    ],
    "synonyms": ["prepare", "set up", "arrange", "organize", "equip", "provision"],
    "antonyms": ["disorganize", "neglect", "disarrange", "unsettle"],
    "questions": [
      "How can we make ready for the meeting?(context: preparation)",
      "Who makes ready the equipment for the event?(context: organization)",
      "Have you made ready for your trip?(context: travel)",
      "What do we need to make ready for the presentation?(context: work)",
      "Are they making ready for the holiday season?(context: general)"
    ]
  }
  ,
  {
    "topic": "creation verbs",
    "category": "regular",
    "verb": "make",
    "answer": [
        "I/They/We/You make | He/She/It makes",
        "I am | He/She/It is | They/We/You are making",
        "I/You/They/We have | He/She/It has made",
        "I/You/They/We have been making | He/She/It has been making",
        "I/He/She/It/We/You/They made",
        "I/He/She/It was making | They/We/You were making",
        "I/He/She/It/We/You/They had made",
        "I/He/She/It/We/You/They had been making",
        "I/He/She/It/We/You/They will make",
        "I/He/She/It/We/You/They will be making",
        "I/He/She/It/We/You/They will have made",
        "I/He/She/It/We/You/They will have been making"
    ],
    "synonyms": [
        "create", 
        "produce", 
        "manufacture", 
        "build", 
        "construct", 
        "form", 
        "fabricate", 
        "forge", 
        "generate", 
        "compose", 
        "craft"
    ],
    "antonyms": [
        "destroy", 
        "break", 
        "demolish", 
        "dismantle", 
        "ruin", 
        "undo"
    ],
    "questions": [
        "Have you made plans for the weekend? (context: planning)",
        "What are you making for dinner? (context: cooking)",
        "Who made this decision? (context: business)",
        "Have they made any progress? (context: project management)",
        "How do you make a website? (context: technology)",
        "How do you make apple cider? (context: cooking)",
        "Can you make a difference? (context: motivational)"
    ]
  } ,


  {
    "topic": "physical action verbs",
    "category": "irregular",
    "verb": "carry",
    "answer": [
        "I/They/We/You carry | He/She/It carries",
        "I am | He/She/It is | They/We/You are carrying",
        "I/You/They/We have | He/She/It has carried",
        "I/You/They/We have been carrying | He/She/It has been carrying",
        "I/He/She/It/We/You/They carried",
        "I/He/She/It was carrying | They/We/You were carrying",
        "I/He/She/It/We/You/They had carried",
        "I/He/She/It/We/You/They had been carrying",
        "I/He/She/It/We/You/They will carry",
        "I/He/She/It/We/You/They will be carrying",
        "I/He/She/It/We/You/They will have carried",
        "I/He/She/It/We/You/They will have been carrying"
    ],
    "synonyms": [
        "transport",
        "convey",
        "haul",
        "bear",
        "lug",
        "shoulder"
    ],
    "antonyms": [
        "drop",
        "leave",
        "abandon",
        "discard",
        "forsake"
    ],
    "questions": [
        "Can you carry this bag for me?(context: assistance)",
        "Who will carry the flag in the parade?(context: ceremonial)",
        "Have you carried a load this heavy before?(context: physical task)",
        "Why do some animals carry their young?(context: nature)",
        "Can the bridge carry heavy trucks?(context: engineering)"
    ]
},

{
    "topic": "organizational verbs",
    "category": "regular",
    "verb": "set up",
    "answer": [
        "I/They/We/You set up | He/She/It sets up",
        "I am | He/She/It is | They/We/You are setting up",
        "I/You/They/We have | He/She/It has set up",
        "I/You/They/We have been setting up | He/She/It has been setting up",
        "I/He/She/It/We/You/They set up",
        "I/He/She/It was setting up | They/We/You were setting up",
        "I/He/She/It/We/You/They had set up",
        "I/He/She/It/We/You/They had been setting up",
        "I/He/She/It/We/You/They will set up",
        "I/He/She/It/We/You/They will be setting up",
        "I/He/She/It/We/You/They will have set up",
        "I/He/She/It/We/You/They will have been setting up"
    ],
    "synonyms": [
        "establish",
        "organize",
        "arrange",
        "assemble",
        "prepare",
        "install"
    ],
    "antonyms": [
        "disassemble",
        "dismantle",
        "take down",
        "destroy",
        "disorganize"
    ],
    "questions": [
        "What was the most difficult thing you ever had to set up?(context: home improvement)",
        "Who sets up parties at your place?(context: social event)",
        "How do you set up a new business?(context: entrepreneurship)",
        "Have you set up your Christmas tree yet?(context: holiday tradition)",
        "Who will set up the meeting room?(context: corporate event)",
        "Have you set up your new computer yet?(context: technology)",
        "Why is it important to set up a routine?(context: personal development)",
        "Can we set up a time to talk?(context: scheduling)"
    ]
},


{
    "topic": "basic action verbs",
    "category": "irregular",
    "verb": "sleep",
    "answer": [
        "I/They/We/You sleep | He/She/It sleeps",
        "I am | He/She/It is | They/We/You are sleeping",
        "I/You/They/We have | He/She/It has slept",
        "I/You/They/We have been sleeping | He/She/It has been sleeping",
        "I/He/She/It/We/You/They slept",
        "I/He/She/It was sleeping | They/We/You were sleeping",
        "I/He/She/It/We/You/They had slept",
        "I/He/She/It/We/You/They had been sleeping",
        "I/He/She/It/We/You/They will sleep",
        "I/He/She/It/We/You/They will be sleeping",
        "I/He/She/It/We/You/They will have slept",
        "I/He/She/It/We/You/They will have been sleeping"
    ],
    "synonyms": [
        "nap", 
        "doze", 
        "rest", 
        "slumber", 
        "drowse", 
        "snooze", 
        "take a siesta", 
        "catch some Z's", 
        "be asleep"
    ],
    "antonyms": [
        "wake", 
        "awaken", 
        "get up", 
        "arise", 
        "rouse", 
        "stir", 
        "be awake", 
        "stay up", 
        "remain awake"
    ],
    "questions": [
        "How many hours do you sleep each night?(context: health)",
        "Who sleeps the most in your family?(context: family habits)",
        "Have you ever slept through an important event?(context: personal experience)",
        "Why do some people sleep with a light on?(context: sleeping habits)",
        "Can you sleep well in a new place?(context: travel)"
    ]
  },
  

  {
    "topic": "daily routine verbs",
    "category": "phrasal verb (regular)",
    "verb": "stay up",
    "answer": [
        "I/They/We/You stay up | He/She/It stays up",
        "I am | He/She/It is | They/We/You are staying up",
        "I/You/They/We have | He/She/It has stayed up",
        "I/You/They/We have been staying up | He/She/It has been staying up",
        "I/He/She/It/We/You/They stayed up",
        "I/He/She/It was staying up | They/We/You were staying up",
        "I/He/She/It/We/You/They had stayed up",
        "I/He/She/It/We/You/They had been staying up",
        "I/He/She/It/We/You/They will stay up",
        "I/He/She/It/We/You/They will be staying up",
        "I/He/She/It/We/You/They will have stayed up",
        "I/He/She/It/We/You/They will have been staying up"
    ],
    "synonyms": [
        "remain awake", 
        "keep awake", 
        "not go to bed", 
        "be up late", 
        "burn the midnight oil", 
        "keep vigil", 
        "wait up", 
        "linger awake", 
        "prolong waking hours"
    ],
    "antonyms": [
        "go to bed", 
        "sleep", 
        "retire", 
        "hit the hay", 
        "turn in", 
        "hit the sack", 
        "rest", 
        "nap", 
        "doze off"
    ],
    "questions": [
        "Why do you often stay up late?(context: habits)",
        "Who stayed up to watch the meteor shower?(context: event)",
        "Have you ever stayed up all night studying?(context: studying)",
        "Why is it unhealthy to stay up too late?(context: health)",
        "Can you stay up till midnight on New Year's Eve?(context: celebration)"
    ]
  },
  


  {
    "topic": "daily routine verbs",
    "category": "phrasal verb (regular)",
    "verb": "stay up",
    "answer": [
        "I/They/We/You stay up | He/She/It stays up",
        "I am | He/She/It is | They/We/You are staying up",
        "I/You/They/We have | He/She/It has stayed up",
        "I/You/They/We have been staying up | He/She/It has been staying up",
        "I/He/She/It/We/You/They stayed up",
        "I/He/She/It was staying up | They/We/You were staying up",
        "I/He/She/It/We/You/They had stayed up",
        "I/He/She/It/We/You/They had been staying up",
        "I/He/She/It/We/You/They will stay up",
        "I/He/She/It/We/You/They will be staying up",
        "I/He/She/It/We/You/They will have stayed up",
        "I/He/She/It/We/You/They will have been staying up"
    ],
    "synonyms": [
        "remain awake", 
        "keep awake", 
        "not go to bed", 
        "be up late", 
        "burn the midnight oil", 
        "keep vigil", 
        "wait up", 
        "linger awake", 
        "prolong waking hours"
    ],
    "antonyms": [
        "go to bed", 
        "sleep", 
        "retire", 
        "hit the hay", 
        "turn in", 
        "hit the sack", 
        "rest", 
        "nap", 
        "doze off"
    ],
    "questions": [
        "Why do you often stay up late?(context: habits)",
        "Who stayed up to watch the meteor shower?(context: event)",
        "Have you ever stayed up all night studying?(context: studying)",
        "Why is it unhealthy to stay up too late?(context: health)",
        "Can you stay up till midnight on New Year's Eve?(context: celebration)"
    ]
  },
  

  {
    "topic": "common action verbs",
    "category": "phrasal verb (regular)",
    "verb": "turn on",
    "answer": [
        "I/They/We/You turn on | He/She/It turns on",
        "I am | He/She/It is | They/We/You are turning on",
        "I/You/They/We have | He/She/It has turned on",
        "I/You/They/We have been turning on | He/She/It has been turning on",
        "I/He/She/It/We/You/They turned on",
        "I/He/She/It was turning on | They/We/You were turning on",
        "I/He/She/It/We/You/They had turned on",
        "I/He/She/It/We/You/They had been turning on",
        "I/He/She/It/We/You/They will turn on",
        "I/He/She/It/We/You/They will be turning on",
        "I/He/She/It/We/You/They will have turned on",
        "I/He/She/It/We/You/They will have been turning on"
    ],
    "synonyms": [
        "activate", 
        "start", 
        "switch on", 
        "power up", 
        "ignite", 
        "energize", 
        "stimulate", 
        "trigger", 
        "initiate"
    ],
    "antonyms": [
        "turn off", 
        "deactivate", 
        "switch off", 
        "shut down", 
        "stop", 
        "extinguish", 
        "cut off", 
        "kill", 
        "disable"
    ],
    "questions": [
        "Can you turn on the lights, please?(context: simple request)",
        "Who turned on the alarm system?(context: security)",
        "Have you turned on the heater yet?(context: household)",
        "Why does the computer turn on by itself?(context: technology)",
        "What happens when you turn on the machine?(context: operation)"
    ]
  },
  
  {
    "topic": "household verbs",
    "category": "regular",
    "verb": "heat",
    "answer": [
        "I/They/We/You heat | He/She/It heats",
        "I am | He/She/It is | They/We/You are heating",
        "I/You/They/We have | He/She/It has heated",
        "I/You/They/We have been heating | He/She/It has been heating",
        "I/He/She/It/We/You/They heated",
        "I/He/She/It was heating | They/We/You were heating",
        "I/He/She/It/We/You/They had heated",
        "I/He/She/It/We/You/They had been heating",
        "I/He/She/It/We/You/They will heat",
        "I/He/She/It/We/You/They will be heating",
        "I/He/She/It/We/You/They will have heated",
        "I/He/She/It/We/You/They will have been heating"
    ],
    "synonyms": [
        "warm", 
        "warm up", 
        "cook", 
        "melt", 
        "toast", 
        "reheat", 
        "broil", 
        "scald", 
        "blanch"
    ],
    "antonyms": [
        "cool", 
        "chill", 
        "freeze", 
        "refrigerate", 
        "ice", 
        "air-condition", 
        "ventilate", 
        "fan", 
        "quench"
    ],
    "questions": [
        "How do you heat your home in winter?(context: household)",
        "Who will heat the water for tea?(context: kitchen tasks)",
        "Have you heated the leftovers from yesterday?(context: cooking)",
        "Why do we need to heat the pool?(context: recreation)",
        "Can we heat this room more efficiently?(context: energy saving)"
    ]
  },
  


  
  {
    "topic": "legal and crime verbs",
    "category": "irregular",
    "verb": "steal",
    "answer": [
        "I/They/We/You steal | He/She/It steals",
        "I am | He/She/It is | They/We/You are stealing",
        "I/You/They/We have | He/She/It has stolen",
        "I/You/They/We have been stealing | He/She/It has been stealing",
        "I/He/She/It/We/You/They stole",
        "I/He/She/It was stealing | They/We/You were stealing",
        "I/He/She/It/We/You/They had stolen",
        "I/He/She/It/We/You/They had been stealing",
        "I/He/She/It/We/You/They will steal",
        "I/He/She/It/We/You/They will be stealing",
        "I/He/She/It/We/You/They will have stolen",
        "I/He/She/It/We/You/They will have been stealing"
    ],
    "synonyms": [
        "pilfer", 
        "purloin", 
        "shoplift", 
        "embezzle", 
        "appropriate", 
        "snatch", 
        "filch", 
        "thieve", 
        "pocket"
    ],
    "antonyms": [
        "return", 
        "give back", 
        "restitute", 
        "restore", 
        "reimburse", 
        "compensate", 
        "repay", 
        "surrender", 
        "yield"
    ],
    "questions": [
        "Why do people steal?(context: crime psychology)",
        "Who stole your bicycle?(context: personal experience)",
        "Have you ever stolen anything, even as a child?(context: ethics)",
        "Why did the character steal in the story?(context: literature)",
        "Can businesses steal ideas from each other?(context: corporate ethics)"
    ]
  },
  

  {
    "topic": "cognitive process verbs",
    "category": "regular",
    "verb": "assume",
    "answer": [
        "I/They/We/You assume | He/She/It assumes",
        "I am | He/She/It is | They/We/You are assuming",
        "I/You/They/We have | He/She/It has assumed",
        "I/You/They/We have been assuming | He/She/It has been assuming",
        "I/He/She/It/We/You/They assumed",
        "I/He/She/It was assuming | They/We/You were assuming",
        "I/He/She/It/We/You/They had assumed",
        "I/He/She/It/We/You/They had been assuming",
        "I/He/She/It/We/You/They will assume",
        "I/He/She/It/We/You/They will be assuming",
        "I/He/She/It/We/You/They will have assumed",
        "I/He/She/It/We/You/They will have been assuming"
    ],
    "synonyms": [
        "presume", 
        "suppose", 
        "take for granted", 
        "surmise", 
        "conjecture", 
        "speculate", 
        "infer", 
        "hypothesize", 
        "believe"
    ],
    "antonyms": [
        "know", 
        "confirm", 
        "verify", 
        "validate", 
        "prove", 
        "establish", 
        "demonstrate", 
        "ascertain", 
        "disprove"
    ],
    "questions": [
        "Why do you assume the worst in every situation?(context: mindset)",
        "Who assumed responsibility for the project?(context: leadership)",
        "Have they assumed that you would agree?(context: communication)",
        "Why should we not assume others' feelings?(context: empathy)",
        "Can one assume success without effort?(context: motivational)"
    ]
  },
  

  
  {
    "topic": "social interaction verbs",
    "category": "regular",
    "verb": "share",
    "answer": [
        "I/They/We/You share | He/She/It shares",
        "I am | He/She/It is | They/We/You are sharing",
        "I/You/They/We have | He/She/It has shared",
        "I/You/They/We have been sharing | He/She/It has been sharing",
        "I/He/She/It/We/You/They shared",
        "I/He/She/It was sharing | They/We/You were sharing",
        "I/He/She/It/We/You/They had shared",
        "I/He/She/It/We/You/They had been sharing",
        "I/He/She/It/We/You/They will share",
        "I/He/She/It/We/You/They will be sharing",
        "I/He/She/It/We/You/They will have shared",
        "I/He/She/It/We/You/They will have been sharing"
    ],
    "synonyms": [
        "divide", 
        "distribute", 
        "partake", 
        "apportion", 
        "allocate", 
        "dispense", 
        "allot", 
        "parcel out", 
        "split"
    ],
    "antonyms": [
        "withhold", 
        "keep", 
        "hoard", 
        "conceal", 
        "retain", 
        "seize", 
        "monopolize", 
        "appropriate", 
        "take"
    ],
    "questions": [
        "Why is it important to share knowledge in a team?(context: teamwork)",
        "Who shares their lunch with you at school?(context: friendship)",
        "Have they shared the results of the survey yet?(context: information dissemination)",
        "Why do people share personal stories on social media?(context: online behavior)",
        "Can you share this document with the rest of the group?(context: work collaboration)"
    ]
  },
  

  {
    "topic": "health and wellness verbs",
    "category": "regular",
    "verb": "relieve",
    "answer": [
        "I/They/We/You relieve | He/She/It relieves",
        "I am | He/She/It is | They/We/You are relieving",
        "I/You/They/We have | He/She/It has relieved",
        "I/You/They/We have been relieving | He/She/It has been relieving",
        "I/He/She/It/We/You/They relieved",
        "I/He/She/It was relieving | They/We/You were relieving",
        "I/He/She/It/We/You/They had relieved",
        "I/He/She/It/We/You/They had been relieving",
        "I/He/She/It/We/You/They will relieve",
        "I/He/She/It/We/You/They will be relieving",
        "I/He/She/It/We/You/They will have relieved",
        "I/He/She/It/We/You/They will have been relieving"
    ],
    "synonyms": [
        "alleviate", 
        "ease", 
        "mitigate", 
        "lessen", 
        "diminish", 
        "reduce", 
        "soothe", 
        "assuage", 
        "lighten"
    ],
    "antonyms": [
        "aggravate", 
        "worsen", 
        "intensify", 
        "exacerbate", 
        "increase", 
        "heighten", 
        "complicate", 
        "magnify", 
        "amplify"
    ],
    "questions": [
        "How do you relieve stress after a long day?(context: stress management)",
        "Who can relieve you at work when you're on vacation?(context: work delegation)",
        "Have they relieved the symptoms with medication?(context: medical treatment)",
        "Why is it hard to relieve anxiety without professional help?(context: mental health)",
        "Can exercise relieve back pain effectively?(context: physical health)"
    ]
  },
  




{
    "topic": "action verbs",
    "category": "regular",
    "verb": "take down",
    "answer": [
        "I/They/We/You take down | He/She/It takes down",
        "I am | He/She/It is | They/We/You are taking down",
        "I/You/They/We have | He/She/It has taken down",
        "I/You/They/We have been taking down | He/She/It has been taking down",
        "I/He/She/It/We/You/They took down",
        "I/He/She/It was taking down | They/We/You were taking down",
        "I/He/She/It/We/You/They had taken down",
        "I/He/She/It/We/You/They had been taking down",
        "I/He/She/It/We/You/They will take down",
        "I/He/She/It/We/You/They will be taking down",
        "I/He/She/It/We/You/They will have taken down",
        "I/He/She/It/We/You/They will have been taking down"
    ],
    "synonyms": [
        "dismantle",
        "disassemble",
        "remove",
        "demolish",
        "deconstruct",
        "lower"
    ],
    "antonyms": [
        "set up",
        "assemble",
        "erect",
        "construct",
        "raise",
        "build"
    ],
    "questions": [
        "Can you help me take down these shelves?(context: home improvement)",
        "Who will take down the notes in the meeting?(context: administrative)",
        "Have they taken down the old building yet?(context: construction)",
        "Why did they take down the website?(context: digital management)",
        "How do you plan to take down this structure safely?(context: demolition)"
    ]
},




{
    "topic": "cognitive verbs",
    "category": "regular",
    "verb": "dream",
    "answer": [
        "I/They/We/You dream | He/She/It dreams",
        "I am | He/She/It is | They/We/You are dreaming",
        "I/You/They/We have | He/She/It has dreamed/dreamt",
        "I/You/They/We have been dreaming | He/She/It has been dreaming",
        "I/He/She/It/We/You/They dreamed/dreamt",
        "I/He/She/It was dreaming | They/We/You were dreaming",
        "I/He/She/It/We/You/They had dreamed/dreamt",
        "I/He/She/It/We/You/They had been dreaming",
        "I/He/She/It/We/You/They will dream",
        "I/He/She/It/We/You/They will be dreaming",
        "I/He/She/It/We/You/They will have dreamed/dreamt",
        "I/He/She/It/We/You/They will have been dreaming"
    ],
    "synonyms": [
        "fantasize",
        "imagine",
        "daydream",
        "envision",
        "hallucinate",
        "contemplate"
    ],
    "antonyms": [
        "face reality",
        "confront",
        "awaken",
        "realize",
        "disillusion"
    ],
    "questions": [
        "Do you often dream at night?(context: sleep)",
        "Who dreams of becoming an astronaut?(context: aspirations)",
        "Have you ever dreamed in color?(context: dreaming experience)",
        "Why do we dream when we sleep?(context: psychology)",
        "Can you control what you dream about?(context: lucid dreaming)"
    ]
},




  {
    "topic": "restriction verbs",
    "category": "irregular",
    "verb": "withhold",
    "answer": [
        "I/They/We/You withhold | He/She/It withholds",
        "I am | He/She/It is | They/We/You are withholding",
        "I/You/They/We have | He/She/It has withheld",
        "I/You/They/We have been withholding | He/She/It has been withholding",
        "I/He/She/It/We/You/They withheld",
        "I/He/She/It was withholding | They/We/You were withholding",
        "I/He/She/It/We/You/They had withheld",
        "I/He/She/It/We/You/They had been withholding",
        "I/He/She/It/We/You/They will withhold",
        "I/He/She/It/We/You/They will be withholding",
        "I/He/She/It/We/You/They will have withheld",
        "I/He/She/It/We/You/They will have been withholding"
    ],
    "synonyms": [
        "retain", 
        "reserve", 
        "hold back", 
        "keep back", 
        "refrain", 
        "suppress", 
        "restrain", 
        "conceal", 
        "hide"
    ],
    "antonyms": [
        "release", 
        "disclose", 
        "yield", 
        "surrender", 
        "give", 
        "reveal", 
        "expose", 
        "provide", 
        "offer"
    ],
    "questions": [
        "Why did they withhold the information? (context: investigation)",
        "Are you withholding something from me? (context: personal)",
        "Has the company withheld any profits? (context: business)",
        "What reasons might someone have to withhold consent? (context: legal)",
        "Can the government withhold these documents? (context: legal)"
    ]
  }
 ,


 {
    "topic": "movement verbs",
    "category": "irregular",
    "verb": "run into",
    "answer": [
        "I/They/We/You run into | He/She/It runs into",
        "I am | He/She/It is | They/We/You are running into",
        "I/You/They/We have | He/She/It has run into",
        "I/You/They/We have been running into | He/She/It has been running into",
        "I/He/She/It/We/You/They ran into",
        "I/He/She/It was running into | They/We/You were running into",
        "I/He/She/It/We/You/They had run into",
        "I/He/She/It/We/You/They had been running into",
        "I/He/She/It/We/You/They will run into",
        "I/He/She/It/We/You/They will be running into",
        "I/He/She/It/We/You/They will have run into",
        "I/He/She/It/We/You/They will have been running into"
    ],
    "synonyms": [
        "encounter", 
        "meet", 
        "come across", 
        "stumble upon", 
        "bump into", 
        "collide with", 
        "strike", 
        "hit", 
        "crash into"
    ],
    "antonyms": [
        "avoid", 
        "dodge", 
        "evade", 
        "miss", 
        "bypass", 
        "circumvent"
    ],
    "questions": [
        "Did you run into anyone you knew? (context: social)",
        "How often do you run into this issue? (context: problem-solving)",
        "What happens if we run into legal problems? (context: business)",
        "Have you ever run into a wild animal while hiking? (context: outdoor activities)",
        "What do you do when you run into a language barrier? (context: travel)"
    ]
  }
 ,
 
 {
   "topic": "problem-solving verbs",
   "category": "regular",
   "verb": "solve",
   "answer": [
       "I/They/We/You solve | He/She/It solves",
       "I am | He/She/It is | They/We/You are solving",
       "I/You/They/We have | He/She/It has solved",
       "I/You/They/We have been solving | He/She/It has been solving",
       "I/He/She/It/We/You/They solved",
       "I/He/She/It was solving | They/We/You were solving",
       "I/He/She/It/We/You/They had solved",
       "I/He/She/It/We/You/They had been solving",
       "I/He/She/It/We/You/They will solve",
       "I/He/She/It/We/You/They will be solving",
       "I/He/She/It/We/You/They will have solved",
       "I/He/She/It/We/You/They will have been solving"
   ],
   "synonyms": [
       "resolve", 
       "work out", 
       "figure out", 
       "unravel", 
       "decipher", 
       "decode", 
       "crack", 
       "settle", 
       "clear up", 
       "untangle"
   ],
   "antonyms": [
       "complicate", 
       "worsen", 
       "confound", 
       "exacerbate", 
       "perplex", 
       "muddle", 
       "confuse"
   ],
   "questions": [
       "How did you solve the problem? (context: problem-solving)",
       "Can you solve this math equation? (context: education)",
       "What steps are you taking to solve the issue? (context: business)",
       "Who solved the mystery in the story? (context: literature)",
       "Is it possible to solve this conflict peacefully? (context: conflict resolution)"
   ]
 },



{
      "topic": "relaxation verbs",
      "category": "regular",
      "verb": "take it easy",
      "answer": [
          "I/They/We/You take it easy | He/She/It takes it easy",
          "I am | He/She/It is | They/We/You are taking it easy",
          "I/You/They/We have | He/She/It has taken it easy",
          "I/You/They/We have been taking it easy | He/She/It has been taking it easy",
          "I/He/She/It/We/You/They took it easy",
          "I/He/She/It was taking it easy | They/We/You were taking it easy",
          "I/He/She/It/We/You/They had taken it easy",
          "I/He/She/It/We/You/They had been taking it easy",
          "I/He/She/It/We/You/They will take it easy",
          "I/He/She/It/We/You/They will be taking it easy",
          "I/He/She/It/We/You/They will have taken it easy",
          "I/He/She/It/We/You/They will have been taking it easy"
      ],
"synonyms":[ "relax", "unwind", "chill", "rest", "loosen up", "de-stress"],

"antonyms":[ "hurry", "rush", "work hard", "exert", "stress", "overdo"],

      "questions": [
          "Can you take it easy this weekend after a busy week?(context: relaxation)",
          "Who takes it easy on Sundays in your house?(context: family time)",
          "Have they taken it easy since the doctor's advice?(context: health recovery)",
          "Why did she decide to take it easy and skip the party?(context: personal choice)",
          "How do you take it easy after a long day at work?(context: stress management)"
      ]
  },




 {
       "topic": "exercise verbs",
       "category": "regular",
       "verb": "work out",
       "answer": [
           "I/They/We/You work out | He/She/It works out",
           "I am | He/She/It is | They/We/You are working out",
           "I/You/They/We have | He/She/It has worked out",
           "I/You/They/We have been working out | He/She/It has been working out",
           "I/He/She/It/We/You/They worked out",
           "I/He/She/It was working out | They/We/You were working out",
           "I/He/She/It/We/You/They had worked out",
           "I/He/She/It/We/You/They had been working out",
           "I/He/She/It/We/You/They will work out",
           "I/He/She/It/We/You/They will be working out",
           "I/He/She/It/We/You/They will have worked out",
           "I/He/She/It/We/You/They will have been working out"
       ],
 "synonyms":[ "exercise", "train", "engage in physical activity", "get fit", "condition", "practice fitness"],
 
 "antonyms":[ "rest", "relax", "be inactive", "take it easy", "laze", "do nothing"],
 
       "questions": [
           "How often do you work out at the gym?(context: fitness routine)",
           "Who works out early in the morning in your family?(context: daily schedule)",
           "Have they worked out to prepare for the marathon?(context: sports training)",
           "Why did she work out even when she was feeling unwell?(context: commitment)",
           "How do you work out when you don't have access to a gym?(context: home exercise)"
       ]
   },
 




{
      "topic": "problem-solving verbs",
      "category": "regular",
      "verb": "figure out",
      "answer": [
          "I/They/We/You figure out | He/She/It figures out",
          "I am | He/She/It is | They/We/You are figuring out",
          "I/You/They/We have | He/She/It has figured out",
          "I/You/They/We have been figuring out | He/She/It has been figuring out",
          "I/He/She/It/We/You/They figured out",
          "I/He/She/It was figuring out | They/We/You were figuring out",
          "I/He/She/It/We/You/They had figured out",
          "I/He/She/It/We/You/They had been figuring out",
          "I/He/She/It/We/You/They will figure out",
          "I/He/She/It/We/You/They will be figuring out",
          "I/He/She/It/We/You/They will have figured out",
          "I/He/She/It/We/You/They will have been figuring out"
      ],
"synonyms":[ "solve", "work out", "decipher", "understand", "deduce", "unravel"],

"antonyms":[ "misunderstand", "confuse", "muddle", "complicate", "misinterpret", "overlook"],

      "questions": [
          "How did you figure out the solution to the puzzle?(context: problem-solving)",
          "Who figures out the technical issues in your team?(context: technical support)",
          "Have they figured out what caused the error?(context: troubleshooting)",
          "Why did she figure out the truth so late?(context: realization)",
          "How do you figure out complex math problems?(context: academic study)"
      ]
  },


  {
        "topic": "visit verbs",
        "category": "regular",
        "verb": "come over",
        "answer": [
            "I/They/We/You come over | He/She/It comes over",
            "I am | He/She/It is | They/We/You are coming over",
            "I/You/They/We have | He/She/It has come over",
            "I/You/They/We have been coming over | He/She/It has been coming over",
            "I/He/She/It/We/You/They came over",
            "I/He/She/It was coming over | They/We/You were coming over",
            "I/He/She/It/We/You/They had come over",
            "I/He/She/It/We/You/They had been coming over",
            "I/He/She/It/We/You/They will come over",
            "I/He/She/It/We/You/They will be coming over",
            "I/He/She/It/We/You/They will have come over",
            "I/He/She/It/We/You/They will have been coming over"
        ],
  "synonyms":[ "visit", "drop by", "stop by", "pop in", "call in", "make a visit"],
  
  "antonyms":[ "leave", "depart", "go away", "exit", "vacate", "withdraw"],
  
        "questions": [
            "Can you come over after work today?(context: social invitation)",
            "Who comes over the most to your house?(context: frequent visits)",
            "Have they come over to see the new baby yet?(context: family event)",
            "Why did she come over so early in the morning?(context: unexpected visit)",
            "How do you feel when friends come over unannounced?(context: social interaction)"
        ]
    },
  




 {
    "topic": "discovery verbs",
    "category": "irregular",
    "verb": "come across",
    "answer": [
        "I/They/We/You come across | He/She/It comes across",
        "I am | He/She/It is | They/We/You are coming across",
        "I/You/They/We have | He/She/It has come across",
        "I/You/They/We have been coming across | He/She/It has been coming across",
        "I/He/She/It/We/You/They came across",
        "I/He/She/It was coming across | They/We/You were coming across",
        "I/He/She/It/We/You/They had come across",
        "I/He/She/It/We/You/They had been coming across",
        "I/He/She/It/We/You/They will come across",
        "I/He/She/It/We/You/They will be coming across",
        "I/He/She/It/We/You/They will have come across",
        "I/He/She/It/We/You/They will have been coming across"
    ],
    "synonyms": [
        "encounter", 
        "find", 
        "stumble upon", 
        "run into", 
        "discover", 
        "unearth", 
        "uncover", 
        "hit upon", 
        "chance upon"
    ],
    "antonyms": [
        "miss", 
        "overlook", 
        "ignore", 
        "bypass", 
        "neglect", 
        "lose"
    ],
    "questions": [
        "Have you come across any good books lately? (context: reading)",
        "How did you come across this information? (context: research)",
        "After you came across the bridge, which way did you turn? (context: directions)",
        "Do you often come across such problems in your work? (context: problem-solving)",
        "What should we do if we come across a dangerous animal? (context: safety)",
        "Have you ever come across someone from your hometown in another country? (context: travel)"
    ]
  }
 
 ,



 {
    "topic": "discovery verbs",
    "category": "regular",
    "verb": "find out",
    "answer": [
        "I/They/We/You find out | He/She/It finds out",
        "I am | He/She/It is | They/We/You are finding out",
        "I/You/They/We have | He/She/It has found out",
        "I/You/They/We have been finding out | He/She/It has been finding out",
        "I/He/She/It/We/You/They found out",
        "I/He/She/It was finding out | They/We/You were finding out",
        "I/He/She/It/We/You/They had found out",
        "I/He/She/It/We/You/They had been finding out",
        "I/He/She/It/We/You/They will find out",
        "I/He/She/It/We/You/They will be finding out",
        "I/He/She/It/We/You/They will have found out",
        "I/He/She/It/We/You/They will have been finding out"
    ],
"synonyms":[ "discover", "uncover", "learn", "ascertain", "determine", "unearth"],

"antonyms":[ "overlook", "miss", "ignore", "neglect", "disregard", "remain unaware"],

    "questions": [
        "How did you find out about the surprise party?(context: discovery)",
        "Who finds out the latest news in your office?(context: staying informed)",
        "If you find out the truth, will you tell me?(context: honesty)",
        "Have they found out the cause of the problem?(context: problem-solving)",
        "Why did she find out about the change so late?(context: communication delay)",
        "How do you find out about current events?(context: information gathering)"
    ]
},

{
    "topic": "exercise verbs",
    "category": "regular",
    "verb": "warm up",
    "answer": [
        "I/They/We/You warm up | He/She/It warms up",
        "I am | He/She/It is | They/We/You are warming up",
        "I/You/They/We have | He/She/It has warmed up",
        "I/You/They/We have been warming up | He/She/It has been warming up",
        "I/He/She/It/We/You/They warmed up",
        "I/He/She/It was warming up | They/We/You were warming up",
        "I/He/She/It/We/You/They had warmed up",
        "I/He/She/It/We/You/They had been warming up",
        "I/He/She/It/We/You/They will warm up",
        "I/He/She/It/We/You/They will be warming up",
        "I/He/She/It/We/You/They will have warmed up",
        "I/He/She/It/We/You/They will have been warming up"
    ],
    "synonyms": [
        "heat up",
        "loosen up",
        "prepare",
        "ready oneself",
        "get ready",
        "limber up",
        "stretch"
    ],
    "antonyms": [
        "cool down",
        "relax",
        "unwind"
    ],
    "questions": [
        "How do you usually warm up before exercising? (context: fitness)",
        "Can you warm up the food? (context: cooking)",
        "Did the team warm up before the match? (context: sports)",
        "Why is it important to warm up your voice before singing? (context: music)",
        "How long does it take to warm up the engine in cold weather? (context: automotive)"
    ]
},

{
    "topic": "cooking verbs",
    "category": "regular",
    "verb": "heat up",
    "answer": [
        "I/They/We/You heat up | He/She/It heats up",
        "I am | He/She/It is | They/We/You are heating up",
        "I/You/They/We have | He/She/It has heated up",
        "I/You/They/We have been heating up | He/She/It has been heating up",
        "I/He/She/It/We/You/They heated up",
        "I/He/She/It was heating up | They/We/You were heating up",
        "I/He/She/It/We/You/They had heated up",
        "I/He/She/It/We/You/They had been heating up",
        "I/He/She/It/We/You/They will heat up",
        "I/He/She/It/We/You/They will be heating up",
        "I/He/She/It/We/You/They will have heated up",
        "I/He/She/It/We/You/They will have been heating up"
    ],
    "synonyms": [
        "warm",
        "warm up",
        "reheat",
        "cook",
        "microwave",
        "thaw",
        "defrost"
    ],
    "antonyms": [
        "cool",
        "cool down",
        "freeze",
        "chill"
    ],
    "questions": [
        "Can you heat up the soup for dinner? (context: cooking)",
        "How long does it take to heat up the oven? (context: baking)",
        "Do you prefer to heat up leftovers or eat them cold? (context: food preference)",
        "What's the best way to heat up frozen food? (context: cooking)",
        "Is it safe to heat up this dish in the microwave? (context: food safety)"
    ]
},

{
    "topic": "financial verbs",
    "category": "regular",
    "verb": "earn",
    "answer": [
        "I/They/We/You earn | He/She/It earns",
        "I am | He/She/It is | They/We/You are earning",
        "I/You/They/We have | He/She/It has earned",
        "I/You/They/We have been earning | He/She/It has been earning",
        "I/He/She/It/We/You/They earned",
        "I/He/She/It was earning | They/We/You were earning",
        "I/He/She/It/We/You/They had earned",
        "I/He/She/It/We/You/They had been earning",
        "I/He/She/It/We/You/They will earn",
        "I/He/She/It/We/You/They will be earning",
        "I/He/She/It/We/You/They will have earned",
        "I/He/She/It/We/You/They will have been earning"
    ],
    "synonyms": [
        "gain",
        "receive",
        "get",
        "acquire",
        "obtain",
        "make"
    ],
    "antonyms": [
        "lose",
        "forfeit",
        "spend",
        "pay"
    ],
    "questions": [
        "How much do you earn per month?(context: employment)",
        "Who earns the most in your family?(context: household income)",
        "Have you earned a bonus this year?(context: work reward)",
        "What skills can I learn to earn more?(context: career development)",
        "Why is it hard to earn a living in this field?(context: job market)"
    ]
},




{
      "topic": "search verbs",
      "category": "regular",
      "verb": "look for",
      "answer": [
          "I/They/We/You look for | He/She/It looks for",
          "I am | He/She/It is | They/We/You are looking for",
          "I/You/They/We have | He/She/It has looked for",
          "I/You/They/We have been looking for | He/She/It has been looking for",
          "I/He/She/It/We/You/They looked for",
          "I/He/She/It was looking for | They/We/You were looking for",
          "I/He/She/It/We/You/They had looked for",
          "I/He/She/It/We/You/They had been looking for",
          "I/He/She/It/We/You/They will look for",
          "I/He/She/It/We/You/They will be looking for",
          "I/He/She/It/We/You/They will have looked for",
          "I/He/She/It/We/You/They will have been looking for"
      ],
"synonyms":[ "search", "seek", "hunt for", "scout for", "quest for", "probe for"],

"antonyms":[ "ignore", "neglect", "overlook", "disregard", "abandon", "forget"],

      "questions": [
          "What are you looking for in the store?(context: shopping)",
          "Who looks for new talent in your company?(context: recruitment)",
          "Have they looked for a solution to the issue?(context: problem-solving)",
          "Why did she look for her old friend online?(context: reconnection)",
          "When you are researching a new supplier, what do you look for?(context: business)"   ,
          "If you look yourself up online, what will you look for?(context: research)",
          "How do you look for information for your school projects?(context: research)"
      ]
  },



  {
    "topic": "financial verbs",
    "category": "regular",
    "verb": "refund",
    "answer": [
      "I/They/We/You refund | He/She/It refunds",
      "I am | He/She/It is | They/We/You are refunding",
      "I/You/They/We have | He/She/It has refunded",
      "I/You/They/We have been refunding | He/She/It has been refunding",
      "I/He/She/It/We/You/They refunded",
      "I/He/She/It was refunding | They/We/You were refunding",
      "I/He/She/It/We/You/They had refunded",
      "I/He/She/It/We/You/They had been refunding",
      "I/He/She/It/We/You/They will refund",
      "I/He/She/It/We/You/They will be refunding",
      "I/He/She/It/We/You/They will have refunded",
      "I/He/She/It/We/You/They will have been refunding"
    ],
    "synonyms": ["reimburse", "repay", "return", "give back", "compensate"],
    "antonyms": ["charge", "debit", "withhold", "take"],
    "questions": [
      "How do I request a refund for this product?(context: customer service)",
      "Who is responsible for processing refunds?(context: business operations)",
      "Have you received a refund for the cancelled flight?(context: travel)",
      "What is the company's policy on refunds?(context: consumer rights)",
      "Are they refunding the full amount?(context: financial transactions)"
    ]
  }
  ,
  {
    "topic": "impact verbs",
    "category": "irregular",
    "verb": "hit",
    "answer": [
        "I/They/We/You hit | He/She/It hits",
        "I am | He/She/It is | They/We/You are hitting",
        "I/You/They/We have | He/She/It has hit",
        "I/You/They/We have been hitting | He/She/It has been hitting",
        "I/He/She/It/We/You/They hit",
        "I/He/She/It was hitting | They/We/You were hitting",
        "I/He/She/It/We/You/They had hit",
        "I/He/She/It/We/You/They had been hitting",
        "I/He/She/It/We/You/They will hit",
        "I/He/She/It/We/You/They will be hitting",
        "I/He/She/It/We/You/They will have hit",
        "I/He/She/It/We/You/They will have been hitting"
    ],
    "synonyms": [
        "strike", 
        "punch", 
        "smack", 
        "bash", 
        "slap", 
        "thump", 
        "bang", 
        "knock", 
        "clout", 
        "wallop"
    ],
    "antonyms": [
        "miss", 
        "dodge", 
        "avoid", 
        "evade", 
        "bypass"
    ],
    "questions": [
        "Where did the ball hit you? (context: sports)",
        "What happens when you hit the target? (context: goal achievement)",
        "Have you ever hit a home run? (context: baseball)",
        "How does it feel when you hit a wall in your creativity? (context: creative process)",
        "What should you do if your car hits an animal? (context: driving)"
    ]
  },

  {
    "topic": "review verbs",
    "category": "irregular",
    "verb": "go over",
    "answer": [
        "I/They/We/You go over | He/She/It goes over",
        "I am | He/She/It is | They/We/You are going over",
        "I/You/They/We have | He/She/It has gone over",
        "I/You/They/We have been going over | He/She/It has been going over",
        "I/He/She/It/We/You/They went over",
        "I/He/She/It was going over | They/We/You were going over",
        "I/He/She/It/We/You/They had gone over",
        "I/He/She/It/We/You/They had been going over",
        "I/He/She/It/We/You/They will go over",
        "I/He/She/It/We/You/They will be going over",
        "I/He/She/It/We/You/They will have gone over",
        "I/He/She/It/We/You/They will have been going over"
    ],
    "synonyms": [
        "review", 
        "examine", 
        "check", 
        "inspect", 
        "revisit", 
        "scrutinize", 
        "study", 
        "look over", 
        "analyze"
    ],
    "antonyms": [
        "ignore", 
        "neglect", 
        "overlook", 
        "bypass", 
        "skip"
    ],
    "questions": [
        "Can we go over the report again? (context: business meeting)",
        "How do you usually go over your notes? (context: study habits)",
        "Did the team go over the project plan thoroughly? (context: project management)",
        "How often should we go over safety procedures? (context: safety training)",
        "What is the best way to go over a legal document? (context: legal review)"
    ]
  }
  ,


  {
    "topic": "communication verbs",
    "category": "regular",
    "verb": "send",
    "answer": [
        "I/They/We/You send | He/She/It sends",
        "I am | He/She/It is | They/We/You are sending",
        "I/You/They/We have | He/She/It has sent",
        "I/You/They/We have been sending | He/She/It has been sending",
        "I/He/She/It/We/You/They sent",
        "I/He/She/It was sending | They/We/You were sending",
        "I/He/She/It/We/You/They had sent",
        "I/He/She/It/We/You/They had been sending",
        "I/He/She/It/We/You/They will send",
        "I/He/She/It/We/You/They will be sending",
        "I/He/She/It/We/You/They will have sent",
        "I/He/She/It/We/You/They will have been sending"
    ],
    "synonyms": [
        "dispatch", 
        "transmit", 
        "mail", 
        "post", 
        "forward", 
        "ship", 
        "deliver", 
        "convey", 
        "transfer", 
        "relay"
    ],
    "antonyms": [
        "receive", 
        "retain", 
        "withhold", 
        "keep", 
        "hold"
    ],
    "questions": [
        "Did you send the email to all the clients? (context: business communication)",
        "Who will send the invitations for the event? (context: event planning)",
        "How do we send this package overseas? (context: shipping)",
        "Can you send me the details by tonight? (context: request for information)",
        "When should we send the survey to the participants? (context: research)"
    ]
  }
  ,
  



  {
    "topic": "management verbs",
    "category": "irregular",
    "verb": "deal with",
    "answer": [
        "I/They/We/You deal with | He/She/It deals with",
        "I am | He/She/It is | They/We/You are dealing with",
        "I/You/They/We have | He/She/It has dealt with",
        "I/You/They/We have been dealing with | He/She/It has been dealing with",
        "I/He/She/It/We/You/They dealt with",
        "I/He/She/It was dealing with | They/We/You were dealing with",
        "I/He/She/It/We/You/They had dealt with",
        "I/He/She/It/We/You/They had been dealing with",
        "I/He/She/It/We/You/They will deal with",
        "I/He/She/It/We/You/They will be dealing with",
        "I/He/She/It/We/You/They will have dealt with",
        "I/He/She/It/We/You/They will have been dealing with"
    ],
    "synonyms": [
        "handle", 
        "manage", 
        "tackle", 
        "address", 
        "confront", 
        "cope with", 
        "attend to", 
        "grapple with", 
        "take care of", 
        "contend with"
    ],
    "antonyms": [
        "ignore", 
        "neglect", 
        "avoid", 
        "evade", 
        "overlook"
    ],
    "questions": [
        "How do you deal with stress? (context: personal well-being)",
        "Who will deal with the client's complaints? (context: customer service)",
        "What strategies can we use to deal with this issue? (context: problem-solving)",
        "Can you deal with these documents before the end of the day? (context: work task)",
        "How should teachers deal with disruptive students? (context: education)"
    ]
  }
  ,


  {
    "topic": "hospitality verbs",
    "category": "irregular",
    "verb": "have over",
    "answer": [
        "I/They/We/You have over | He/She/It has over",
        "I am | He/She/It is | They/We/You are having over",
        "I/You/They/We have | He/She/It has had over",
        "I/You/They/We have been having over | He/She/It has been having over",
        "I/He/She/It/We/You/They had over",
        "I/He/She/It was having over | They/We/You were having over",
        "I/He/She/It/We/You/They had had over",
        "I/He/She/It/We/You/They had been having over",
        "I/He/She/It/We/You/They will have over",
        "I/He/She/It/We/You/They will be having over",
        "I/He/She/It/We/You/They will have had over",
        "I/He/She/It/We/You/They will have been having over"
    ],
    "synonyms": [
        "invite", 
        "entertain", 
        "host", 
        "receive", 
        "welcome", 
        "accommodate", 
        "ask over", 
        "entertain guests"
    ],
    "antonyms": [
        "dismiss", 
        "send away", 
        "turn away", 
        "refuse", 
        "reject"
    ],
    "questions": [
        "How often do you have friends over? (context: social gathering)",
        "Are you planning to have anyone over this weekend? (context: hosting)",
        "What should I prepare if I have guests over for dinner? (context: meal planning)",
        "How do you feel when you have family over for the holidays? (context: holiday hosting)",
        "What activities do you suggest when you have kids over? (context: entertaining children)"
    ]
  }
  ,


  {
    "topic": "transportation verbs",
    "category": "regular",
    "verb": "drive over",
    "answer": [
        "I/They/We/You drive over | He/She/It drives over",
        "I am | He/She/It is | They/We/You are driving over",
        "I/You/They/We have | He/She/It has driven over",
        "I/You/They/We have been driving over | He/She/It has been driving over",
        "I/He/She/It/We/You/They drove over",
        "I/He/She/It was driving over | They/We/You were driving over",
        "I/He/She/It/We/You/They had driven over",
        "I/He/She/It/We/You/They had been driving over",
        "I/He/She/It/We/You/They will drive over",
        "I/He/She/It/We/You/They will be driving over",
        "I/He/She/It/We/You/They will have driven over",
        "I/He/She/It/We/You/They will have been driving over"
    ],
    "synonyms": [
        "travel by car", 
        "go by car", 
        "journey over", 
        "commute", 
        "motor over", 
        "ride over", 
        "travel over", 
        "navigate over"
    ],
    "antonyms": [
        "walk", 
        "cycle", 
        "run", 
        "stay", 
        "remain", 
        "halt"
    ],
    "questions": [
        "Can you drive over to pick up the groceries? (context: errand)",
        "How long will it take to drive over to the conference? (context: travel planning)",
        "Should we drive over or take the train? (context: travel decision)",
        "What's the best route to drive over the mountains? (context: travel advice)",
        "Is it safe to drive over during the winter? (context: seasonal travel)"
    ]
  },
  {
    "topic": "consumption verbs",
    "category": "regular",
    "verb": "use up",
    "answer": [
        "I/They/We/You use up | He/She/It uses up",
        "I am | He/She/It is | They/We/You are using up",
        "I/You/They/We have | He/She/It has used up",
        "I/You/They/We have been using up | He/She/It has been using up",
        "I/He/She/It/We/You/They used up",
        "I/He/She/It was using up | They/We/You were using up",
        "I/He/She/It/We/You/They had used up",
        "I/He/She/It/We/You/They had been using up",
        "I/He/She/It/We/You/They will use up",
        "I/He/She/It/We/You/They will be using up",
        "I/He/She/It/We/You/They will have used up",
        "I/He/She/It/We/You/They will have been using up"
    ],
    "synonyms": [
        "exhaust", 
        "deplete", 
        "consume", 
        "spend", 
        "drain", 
        "expend", 
        "empty", 
        "finish", 
        "burn through", 
        "run through"
    ],
    "antonyms": [
        "conserve", 
        "save", 
        "preserve", 
        "spare", 
        "hoard", 
        "ration"
    ],
    "questions": [
        "How quickly did you use up the supplies? (context: resource management)",
        "What happens when they use up all their savings? (context: financial planning)",
        "Do we have enough ink or will the printer use it up quickly? (context: office supplies)",
        "Why did the project use up so much time? (context: project evaluation)",
        "What strategies can be used to not use up energy too fast? (context: energy conservation)"
    ]
  },

  
  {
        "topic": "movement verbs",
        "category": "regular",
        "verb": "pull up",
        "answer": [
            "I/They/We/You pull up | He/She/It pulls up",
            "I am | He/She/It is | They/We/You are pulling up",
            "I/You/They/We have | He/She/It has pulled up",
            "I/You/They/We have been pulling up | He/She/It has been pulling up",
            "I/He/She/It/We/You/They pulled up",
            "I/He/She/It was pulling up | They/We/You were pulling up",
            "I/He/She/It/We/You/They had pulled up",
            "I/He/She/It/We/You/They had been pulling up",
            "I/He/She/It/We/You/They will pull up",
            "I/He/She/It/We/You/They will be pulling up",
            "I/He/She/It/We/You/They will have pulled up",
            "I/He/She/It/We/You/They will have been pulling up"
        ],
  "synonyms":[ "stop", "halt", "arrive", "draw up", "come to a stop", "park"],
  
  "antonyms":[ "drive away", "depart", "leave", "move on", "continue", "proceed"],
  
        "questions": [
            "Can you pull up outside the store to pick me up?(context: transportation)",
            "Who pulled up in the red car yesterday?(context: arrival)",
            "Have they pulled up the weeds in the garden?(context: gardening)",
            "Why did the police car pull up next to the park?(context: law enforcement)",
            "How do you signal a bus to pull up at your stop?(context: public transport)"
        ]
    },


    
{
      "topic": "disposal verbs",
      "category": "regular",
      "verb": "throw away",
      "answer": [
          "I/They/We/You throw away | He/She/It throws away",
          "I am | He/She/It is | They/We/You are throwing away",
          "I/You/They/We have | He/She/It has thrown away",
          "I/You/They/We have been throwing away | He/She/It has been throwing away",
          "I/He/She/It/We/You/They threw away",
          "I/He/She/It was throwing away | They/We/You were throwing away",
          "I/He/She/It/We/You/They had thrown away",
          "I/He/She/It/We/You/They had been throwing away",
          "I/He/She/It/We/You/They will throw away",
          "I/He/She/It/We/You/They will be throwing away",
          "I/He/She/It/We/You/They will have thrown away",
          "I/He/She/It/We/You/They will have been throwing away"
      ],
"synonyms":[ "discard", "dispose of", "get rid of", "dump", "toss out", "eliminate"],

"antonyms":[ "keep", "hold onto", "save", "preserve", "retain", "store"],

      "questions": [
          "Why did you throw away the old magazines?(context: decluttering)",
          "Who throws away the leftovers at your home?(context: household management)",
          "Have they thrown away the damaged equipment?(context: workplace clean-up)",
          "Why did she throw away his letters after the breakup?(context: emotional response)",
          "How do you decide what to throw away when moving to a smaller place?(context: downsizing)"
      ]
  },


  
  {
        "topic": "action verbs",
        "category": "regular",
        "verb": "turn off",
        "answer": [
            "I/They/We/You turn off | He/She/It turns off",
            "I am | He/She/It is | They/We/You are turning off",
            "I/You/They/We have | He/She/It has turned off",
            "I/You/They/We have been turning off | He/She/It has been turning off",
            "I/He/She/It/We/You/They turned off",
            "I/He/She/It was turning off | They/We/You were turning off",
            "I/He/She/It/We/You/They had turned off",
            "I/He/She/It/We/You/They had been turning off",
            "I/He/She/It/We/You/They will turn off",
            "I/He/She/It/We/You/They will be turning off",
            "I/He/She/It/We/You/They will have turned off",
            "I/He/She/It/We/You/They will have been turning off"
        ],
  "synonyms":[ "shut off", "switch off", "deactivate", "power down", "stop", "disengage"],
  
  "antonyms":[ "turn on", "activate", "start", "power up", "switch on", "engage"],
  
        "questions": [
            "Can you turn off the lights before leaving the room?(context: energy saving)",
            "Who turned off the alarm this morning?(context: daily routine)",
            "Have they turned off the main water supply during the repairs?(context: maintenance work)",
            "Why did she turn off her phone during the meeting?(context: etiquette)",
            "How do you remember to turn off appliances before going to bed?(context: safety)"
        ]
    },
  


  {
        "topic": "sleep verbs",
        "category": "regular",
        "verb": "go to sleep",
        "answer": [
            "I/They/We/You go to sleep | He/She/It goes to sleep",
            "I am | He/She/It is | They/We/You are going to sleep",
            "I/You/They/We have | He/She/It has gone to sleep",
            "I/You/They/We have been going to sleep | He/She/It has been going to sleep",
            "I/He/She/It/We/You/They went to sleep",
            "I/He/She/It was going to sleep | They/We/You were going to sleep",
            "I/He/She/It/We/You/They had gone to sleep",
            "I/He/She/It/We/You/They had been going to sleep",
            "I/He/She/It/We/You/They will go to sleep",
            "I/He/She/It/We/You/They will be going to sleep",
            "I/He/She/It/We/You/They will have gone to sleep",
            "I/He/She/It/We/You/They will have been going to sleep"
        ],
  "synonyms":[ "fall asleep", "retire", "hit the hay", "turn in", "hit the sack", "bed down"],
  
  "antonyms":[ "wake up", "get up", "arise", "rouse", "stay awake", "remain up"],
  
        "questions": [
            "What time do you usually go to sleep at night?(context: sleep schedule)",
            "Who goes to sleep first in your household?(context: family bedtime)",
            "Have they gone to sleep early to catch the flight tomorrow?(context: travel preparation)",
            "Why did she go to sleep so late last night?(context: late night activities)",
            "How do you go to sleep when you're not tired?(context: sleep challenges)"
        ]
    },
  


{
      "topic": "morning verbs",
      "category": "irregular",
      "verb": "wake up",
      "answer": [
          "I/They/We/You wake up | He/She/It wakes up",
          "I am | He/She/It is | They/We/You are waking up",
          "I/You/They/We have | He/She/It has woken up",
          "I/You/They/We have been waking up | He/She/It has been waking up",
          "I/He/She/It/We/You/They woke up",
          "I/He/She/It was waking up | They/We/You were waking up",
          "I/He/She/It/We/You/They had woken up",
          "I/He/She/It/We/You/They had been waking up",
          "I/He/She/It/We/You/They will wake up",
          "I/He/She/It/We/You/They will be waking up",
          "I/He/She/It/We/You/They will have woken up",
          "I/He/She/It/We/You/They will have been waking up"
      ],
"synonyms":[ "arise", "get up", "rouse", "come to", "awaken", "stir"],

"antonyms":[ "fall asleep", "go to sleep", "doze off", "drift off", "nod off", "slumber"],

      "questions": [
          "What time do you usually wake up in the morning?(context: daily routine)",
          "Who wakes up the earliest in your family?(context: family habits)",
          "Have you woken up late and missed an important meeting?(context: time management)",
          "Why did she wake up in the middle of the night?(context: sleep disturbance)",
          "How do you wake up without an alarm clock?(context: natural awakening)"
      ]
  },


{
      "topic": "sleep verbs",
      "category": "irregular",
      "verb": "fall asleep",
      "answer": [
          "I/They/We/You fall asleep | He/She/It falls asleep",
          "I am | He/She/It is | They/We/You are falling asleep",
          "I/You/They/We have | He/She/It has fallen asleep",
          "I/You/They/We have been falling asleep | He/She/It has been falling asleep",
          "I/He/She/It/We/You/They fell asleep",
          "I/He/She/It was falling asleep | They/We/You were falling asleep",
          "I/He/She/It/We/You/They had fallen asleep",
          "I/He/She/It/We/You/They had been falling asleep",
          "I/He/She/It/We/You/They will fall asleep",
          "I/He/She/It/We/You/They will be falling asleep",
          "I/He/She/It/We/You/They will have fallen asleep",
          "I/He/She/It/We/You/They will have been falling asleep"
      ],
"synonyms":[ "doze off", "drift off", "nod off", "snooze", "slumber", "go to sleep"],

"antonyms":[ "wake up", "arise", "get up", "rouse", "awaken", "stay awake"],

      "questions": [
          "How quickly do you usually fall asleep at night?(context: sleep patterns)",
          "Who fell asleep during the movie last night?(context: leisure activity)",
          "Have you ever fallen asleep on public transport?(context: unintentional sleep)",
          "Why did she fall asleep during the meeting?(context: fatigue)",
          "How do you fall asleep when you're feeling anxious?(context: sleep difficulties)"
      ]
  },


 
    {
          "topic": "elimination verbs",
          "category": "regular",
          "verb": "get rid of",
          "answer": [
              "I/They/We/You get rid of | He/She/It gets rid of",
              "I am | He/She/It is | They/We/You are getting rid of",
              "I/You/They/We have | He/She/It has got rid of",
              "I/You/They/We have been getting rid of | He/She/It has been getting rid of",
              "I/He/She/It/We/You/They got rid of",
              "I/He/She/It was getting rid of | They/We/You were getting rid of",
              "I/He/She/It/We/You/They had got rid of",
              "I/He/She/It/We/You/They had been getting rid of",
              "I/He/She/It/We/You/They will get rid of",
              "I/He/She/It/We/You/They will be getting rid of",
              "I/He/She/It/We/You/They will have got rid of",
              "I/He/She/It/We/You/They will have been getting rid of"
          ],
    "synonyms":[ "discard", "eliminate", "remove", "dispose of", "throw away", "clear out"],
    
    "antonyms":[ "keep", "retain", "hold onto", "preserve", "maintain", "store"],
    
          "questions": [
              "How do you get rid of old clothes you don't wear?(context: decluttering)",
              "Who got rid of the broken chair in the office?(context: workplace maintenance)",
              "Have they got rid of the outdated software yet?(context: technology update)",
              "Why did she get rid of her old photographs?(context: personal choices)",
              "How can we get rid of pests in the garden without chemicals?(context: pest control)"
          ]
      },
    




  {
    "topic": "search verbs",
    "category": "irregular",
    "verb": "seek out",
    "answer": [
        "I/They/We/You seek out | He/She/It seeks out",
        "I am | He/She/It is | They/We/You are seeking out",
        "I/You/They/We have | He/She/It has sought out",
        "I/You/They/We have been seeking out | He/She/It has been seeking out",
        "I/He/She/It/We/You/They sought out",
        "I/He/She/It was seeking out | They/We/You were seeking out",
        "I/He/She/It/We/You/They had sought out",
        "I/He/She/It/We/You/They had been seeking out",
        "I/He/She/It/We/You/They will seek out",
        "I/He/She/It/We/You/They will be seeking out",
        "I/He/She/It/We/You/They will have sought out",
        "I/He/She/It/We/You/They will have been seeking out"
    ],
    "synonyms": [
        "search for", 
        "look for", 
        "hunt for", 
        "scout for", 
        "pursue", 
        "track down", 
        "find", 
        "discover", 
        "locate", 
        "unearth"
    ],
    "antonyms": [
        "ignore", 
        "overlook", 
        "neglect", 
        "disregard", 
        "avoid"
    ],
    "questions": [
        "How do you seek out new business opportunities? (context: business development)",
        "What methods do you use to seek out information? (context: research)",
        "Who can help me seek out antique furniture? (context: shopping)",
        "Why is it important to seek out different viewpoints? (context: personal growth)",
        "Can you seek out a good location for our next meeting? (context: event planning)"
    ]
  },


  {
    "topic": "communication verbs",
    "category": "regular",
    "verb": "reach out",
    "answer": [
        "I/They/We/You reach out | He/She/It reaches out",
        "I am | He/She/It is | They/We/You are reaching out",
        "I/You/They/We have | He/She/It has reached out",
        "I/You/They/We have been reaching out | He/She/It has been reaching out",
        "I/He/She/It/We/You/They reached out",
        "I/He/She/It was reaching out | They/We/You were reaching out",
        "I/He/She/It/We/You/They had reached out",
        "I/He/She/It/We/You/They had been reaching out",
        "I/He/She/It/We/You/They will reach out",
        "I/He/She/It/We/You/They will be reaching out",
        "I/He/She/It/We/You/They will have reached out",
        "I/He/She/It/We/You/They will have been reaching out"
    ],
    "synonyms": [
        "contact", 
        "communicate with", 
        "get in touch with", 
        "connect with", 
        "approach", 
        "engage", 
        "address", 
        "speak to", 
        "write to", 
        "call"
    ],
    "antonyms": [
        "ignore", 
        "avoid", 
        "disregard", 
        "withdraw from", 
        "alienate"
    ],
    "questions": [
        "How do you reach out to potential clients? (context: business networking)",
        "When should I reach out to my mentor for advice? (context: career development)",
        "What's the best way to reach out to someone you haven't spoken to in years? (context: personal relationships)",
        "Should we reach out to the community for support? (context: community engagement)",
        "Can you reach out to the customer service team for help? (context: customer support)"
    ]
  }
  ,

  {
    "topic": "inquiry verbs",
    "category": "regular",
    "verb": "ask about",
    "answer": [
        "I/They/We/You ask about | He/She/It asks about",
        "I am | He/She/It is | They/We/You are asking about",
        "I/You/They/We have | He/She/It has asked about",
        "I/You/They/We have been asking about | He/She/It has been asking about",
        "I/He/She/It/We/You/They asked about",
        "I/He/She/It was asking about | They/We/You were asking about",
        "I/He/She/It/We/You/They had asked about",
        "I/He/She/It/We/You/They had been asking about",
        "I/He/She/It/We/You/They will ask about",
        "I/He/She/It/We/You/They will be asking about",
        "I/He/She/It/We/You/They will have asked about",
        "I/He/She/It/We/You/They will have been asking about"
    ],
    "synonyms": [
        "inquire about", 
        "question about", 
        "probe about", 
        "interrogate about", 
        "enquire about", 
        "query about", 
        "investigate about", 
        "check about", 
        "seek information about"
    ],
    "antonyms": [
        "ignore", 
        "overlook", 
        "disregard", 
        "avoid discussing", 
        "bypass"
    ],
    "questions": [
        "Did you ask about the requirements for the project? (context: project planning)",
        "How should I ask about the company's work culture in an interview? (context: job interview)",
        "Can you ask about the price of the item? (context: shopping)",
        "Who will ask about the details of the agreement? (context: business negotiation)",
        "When is a good time to ask about the progress of the work? (context: management)"
    ]
  },


{
  "topic": "request verbs",
  "category": "regular",
  "verb": "ask for",
  "answer": [
      "I/They/We/You ask for | He/She/It asks for",
      "I am | He/She/It is | They/We/You are asking for",
      "I/You/They/We have | He/She/It has asked for",
      "I/You/They/We have been asking for | He/She/It has been asking for",
      "I/He/She/It/We/You/They asked for",
      "I/He/She/It was asking for | They/We/You were asking for",
      "I/He/She/It/We/You/They had asked for",
      "I/He/She/It/We/You/They had been asking for",
      "I/He/She/It/We/You/They will ask for",
      "I/He/She/It/We/You/They will be asking for",
      "I/He/She/It/We/You/They will have asked for",
      "I/He/She/It/We/You/They will have been asking for"
  ],
  "synonyms": [
      "request",
      "inquire for",
      "seek",
      "solicit",
      "demand",
      "petition for",
      "plead for",
      "appeal for",
      "call for",
      "beg for"
  ],
  "antonyms": [
      "offer",
      "give",
      "provide",
      "supply",
      "grant",
      "present"
  ],
  "questions": [
      "Can I ask for a higher salary during my review?(context: employment)",
      "Should we ask for extra resources for this project?(context: project management)",
      "How do you politely ask for help in this situation?(context: social interaction)",
      "What information should I ask for when buying a used car?(context: purchasing)",
      "Is it appropriate to ask for a refund if the product is defective?(context: consumer rights)"
  ]
},




  {
        "topic": "release verbs",
        "category": "regular",
        "verb": "let go",
        "answer": [
            "I/They/We/You let go | He/She/It lets go",
            "I am | He/She/It is | They/We/You are letting go",
            "I/You/They/We have | He/She/It has let go",
            "I/You/They/We have been letting go | He/She/It has been letting go",
            "I/He/She/It/We/You/They let go",
            "I/He/She/It was letting go | They/We/You were letting go",
            "I/He/She/It/We/You/They had let go",
            "I/He/She/It/We/You/They had been letting go",
            "I/He/She/It/We/You/They will let go",
            "I/He/She/It/We/You/They will be letting go",
            "I/He/She/It/We/You/They will have let go",
            "I/He/She/It/We/You/They will have been letting go"
        ],
  "synonyms":[ "release", "relinquish", "free", "unhand", "surrender", "abandon"],
  
  "antonyms":[ "hold", "grasp", "cling", "retain", "keep", "grip"],
  
        "questions": [
            "When will you let go of the past mistakes?(context: emotional healing)",
            "Who lets go of their anger quickly in your family?(context: emotional regulation)",
            "Have they let go of their old car yet?(context: selling possessions)",
            "Why did he let go of such a great opportunity?(context: decision-making)",
            "How do you let go of stress after work?(context: stress management)"
        ]
    },
  



  {
    "topic": "perseverance verbs",
    "category": "regular",
    "verb": "hold on",
    "answer": [
        "I/They/We/You hold on | He/She/It holds on",
        "I am | He/She/It is | They/We/You are holding on",
        "I/You/They/We have | He/She/It has held on",
        "I/You/They/We have been holding on | He/She/It has been holding on",
        "I/He/She/It/We/You/They held on",
        "I/He/She/It was holding on | They/We/You were holding on",
        "I/He/She/It/We/You/They had held on",
        "I/He/She/It/We/You/They had been holding on",
        "I/He/She/It/We/You/They will hold on",
        "I/He/She/It/We/You/They will be holding on",
        "I/He/She/It/We/You/They will have held on",
        "I/He/She/It/We/You/They will have been holding on"
    ],
"synonyms":[ "grip", "cling", "grasp", "hang on", "maintain", "persevere"],

"antonyms":[ "release", "let go", "surrender", "abandon", "give up", "relinquish"],

    "questions": [
        "Can you hold on to the rope tightly?(context: physical activity)",
        "Who holds on to their dreams despite challenges?(context: aspiration)",
        "Have they held on to the old traditions?(context: cultural practice)",
        "Why did she hold on to those memories for so long?(context: emotional attachment)",
        "How do you hold on to your beliefs in difficult times?(context: perseverance)"
    ]
},




  {
    "topic": "resignation verbs",
    "category": "irregular",
    "verb": "give up",
    "answer": [
        "I/They/We/You give up | He/She/It gives up",
        "I am | He/She/It is | They/We/You are giving up",
        "I/You/They/We have | He/She/It has given up",
        "I/You/They/We have been giving up | He/She/It has been giving up",
        "I/He/She/It/We/You/They gave up",
        "I/He/She/It was giving up | They/We/You were giving up",
        "I/He/She/It/We/You/They had given up",
        "I/He/She/It/We/You/They had been giving up",
        "I/He/She/It/We/You/They will give up",
        "I/He/She/It/We/You/They will be giving up",
        "I/He/She/It/We/You/They will have given up",
        "I/He/She/It/We/You/They will have been giving up"
    ],
    "synonyms": [
        "surrender", 
        "quit", 
        "stop", 
        "abandon", 
        "cease", 
        "desist", 
        "forfeit", 
        "yield", 
        "renounce", 
        "resign"
    ],
    "antonyms": [
        "persevere", 
        "continue", 
        "persist", 
        "maintain", 
        "uphold", 
        "carry on", 
        "keep up"
    ],
    "questions": [
        "Why did he give up on his dream? (context: motivation)",
        "When is it okay to give up on a difficult task? (context: problem-solving)",
        "Have you ever given up something important for someone else? (context: sacrifice)",
        "What makes people give up on their goals? (context: psychology)",
        "How do you convince someone not to give up? (context: encouragement)"
    ]
  },



  {
    "topic": "fabrication verbs",
    "category": "regular",
    "verb": "make up",
    "answer": [
        "I/They/We/You make up | He/She/It makes up",
        "I am | He/She/It is | They/We/You are making up",
        "I/You/They/We have | He/She/It has made up",
        "I/You/They/We have been making up | He/She/It has been making up",
        "I/He/She/It/We/You/They made up",
        "I/He/She/It was making up | They/We/You were making up",
        "I/He/She/It/We/You/They had made up",
        "I/He/She/It/We/You/They had been making up",
        "I/He/She/It/We/You/They will make up",
        "I/He/She/It/We/You/They will be making up",
        "I/He/She/It/We/You/They will have made up",
        "I/He/She/It/We/You/They will have been making up"
    ],
    "synonyms": [
        "invent", 
        "fabricate", 
        "concoct", 
        "create", 
        "devise", 
        "construct", 
        "formulate", 
        "imagine", 
        "dream up", 
        "compose"
    ],
    "antonyms": [
        "disprove", 
        "refute", 
        "debunk", 
        "expose", 
        "reveal", 
        "uncover", 
        "disclose", 
        "discredit", 
        "invalidate"
    ],
    "questions": [
        "Why do children make up stories? (context: psychology)",
        "How do companies make up for their mistakes? (context: business ethics)",
        "Can we make up a game to play? (context: recreation)",
        "What happens when scientists make up data? (context: scientific integrity)",
        "How do you make up with someone after an argument? (context: relationships)"
    ]
  },

  {
    "topic": "agreement verbs",
    "category": "irregular",
    "verb": "buy in",
    "answer": [
        "I/They/We/You buy in | He/She/It buys in",
        "I am | He/She/It is | They/We/You are buying in",
        "I/You/They/We have | He/She/It has bought in",
        "I/You/They/We have been buying in | He/She/It has been buying in",
        "I/He/She/It/We/You/They bought in",
        "I/He/She/It was buying in | They/We/You were buying in",
        "I/He/She/It/We/You/They had bought in",
        "I/He/She/It/We/You/They had been buying in",
        "I/He/She/It/We/You/They will buy in",
        "I/He/She/It/We/You/They will be buying in",
        "I/He/She/It/We/You/They will have bought in",
        "I/He/She/It/We/You/They will have been buying in"
    ],
    "synonyms": [
        "invest in", 
        "participate in", 
        "engage in", 
        "commit to", 
        "support", 
        "endorse", 
        "subscribe to", 
        "agree with", 
        "accept", 
        "approve"
    ],
    "antonyms": [
        "opt out", 
        "withdraw from", 
        "reject", 
        "disagree with", 
        "disapprove", 
        "disavow", 
        "eschew", 
        "resist", 
        "decline"
    ],
    "questions": [
        "How do you get employees to buy in to a new policy? (context: management)",
        "Why is it important for stakeholders to buy in to a project? (context: project management)",
        "If you don't buy it now, will you regret it later? (context: sales)",
        "What factors influence customers to buy in to a brand? (context: marketing)",
        "How can we encourage more people to buy in to this idea? (context: persuasion)",
        "What happens when a leader doesn't buy in to the company culture? (context: corporate governance)"
    ]
  },


  {
    "topic": "persistence verbs",
    "category": "irregular",
    "verb": "keep up",
    "answer": [
        "I/They/We/You keep up | He/She/It keeps up",
        "I am | He/She/It is | They/We/You are keeping up",
        "I/You/They/We have | He/She/It has kept up",
        "I/You/They/We have been keeping up | He/She/It has been keeping up",
        "I/He/She/It/We/You/They kept up",
        "I/He/She/It was keeping up | They/We/You were keeping up",
        "I/He/She/It/We/You/They had kept up",
        "I/He/She/It/We/You/They had been keeping up",
        "I/He/She/It/We/You/They will keep up",
        "I/He/She/It/We/You/They will be keeping up",
        "I/He/She/It/We/You/They will have kept up",
        "I/He/She/It/We/You/They will have been keeping up"
    ],
    "synonyms": [
        "maintain", 
        "continue", 
        "sustain", 
        "preserve", 
        "carry on", 
        "persist", 
        "uphold", 
        "prolong", 
        "persevere with", 
        "stick with"
    ],
    "antonyms": [
        "abandon", 
        "quit", 
        "give up", 
        "discontinue", 
        "cease", 
        "stop", 
        "desist", 
        "halt", 
        "drop", 
        "relinquish"
    ],
    "questions": [
        "How do you keep up with industry news? (context: professional development)",
        "Can you keep up with the pace of the course? (context: education)",
        "What strategies help you keep up your motivation? (context: personal development)",
        "How do athletes keep up their stamina? (context: sports)",
        "What tools do you use to keep up with your tasks? (context: productivity)"
    ]
  },


  
{
  "topic": "basic actions",
  "category": "regular",
  "verb": "stick",
  "answer": [
      "I/They/We/You stick | He/She/It sticks",
      "I am | He/She/It is | They/We/You are sticking",
      "I/You/They/We have | He/She/It has stuck",
      "I/You/They/We have been sticking | He/She/It has been sticking",
      "I/He/She/It/We/You/They stuck",
      "I/He/She/It was sticking | They/We/You were sticking",
      "I/He/She/It/We/You/They had stuck",
      "I/He/She/It/We/You/They had been sticking",
      "I/He/She/It/We/You/They will stick",
      "I/He/She/It/We/You/They will be sticking",
      "I/He/She/It/We/You/They will have stuck",
      "I/He/She/It/We/You/They will have been sticking"
  ],
  "synonyms": [
      "adhere",
      "cling",
      "attach",
      "bond",
      "cohere",
      "fasten",
      "fix",
      "glue",
      "gum",
      "paste",
      "tack"
  ],
  "antonyms": [
      "detach",
      "separate",
      "unstick",
      "peel off",
      "come off",
      "disengage"
  ],
  "questions": [
      "Can you stick this note on the fridge?(context: home)",
      "Why is this label not sticking properly?(context: everyday)",
      "Have you stuck the poster on the wall yet?(context: decoration)",
      "Where did you stick the reminder?(context: organization)",
      "How many stamps do I need to stick on this package?(context: mailing)"
  ]
},

{
    "topic": "interpersonal actions",
    "category": "regular",
    "verb": "engage",
    "answer": [
        "I/They/We/You engage | He/She/It engages",
        "I am | He/She/It is | They/We/You are engaging",
        "I/You/They/We have | He/She/It has engaged",
        "I/You/They/We have been engaging | He/She/It has been engaging",
        "I/He/She/It/We/You/They engaged",
        "I/He/She/It was engaging | They/We/You were engaging",
        "I/He/She/It/We/You/They had engaged",
        "I/He/She/It/We/You/They had been engaging",
        "I/He/She/It/We/You/They will engage",
        "I/He/She/It/We/You/They will be engaging",
        "I/He/She/It/We/You/They will have engaged",
        "I/He/She/It/We/You/They will have been engaging"
    ],
    "synonyms": [
        "involve",
        "participate",
        "take part",
        "join",
        "enlist",
        "enter into",
        "commit",
        "undertake",
        "embark on",
        "begin",
        "start"
    ],
    "antonyms": [
        "disengage",
        "withdraw",
        "depart",
        "leave",
        "disentangle",
        "exit",
        "detach"
    ],
    "questions": [
        "How do you plan to engage the audience during your presentation?(context: public speaking)",
        "Are you engaged in any extracurricular activities?(context: education)",
        "Has the company engaged in any new projects recently?(context: business)",
        "Who will engage in negotiations with the client?(context: business negotiations)",
        "How can we better engage with our community?(context: community involvement)"
    ]
  },  

  {
    "topic": "action verbs",
    "category": "regular",
    "verb": "attack",
    "answer": [
        "I/They/We/You attack | He/She/It attacks",
        "I am | He/She/It is | They/We/You are attacking",
        "I/You/They/We have | He/She/It has attacked",
        "I/You/They/We have been attacking | He/She/It has been attacking",
        "I/He/She/It/We/You/They attacked",
        "I/He/She/It was attacking | They/We/You were attacking",
        "I/He/She/It/We/You/They had attacked",
        "I/He/She/It/We/You/They had been attacking",
        "I/He/She/It/We/You/They will attack",
        "I/He/She/It/We/You/They will be attacking",
        "I/He/She/It/We/You/They will have attacked",
        "I/He/She/It/We/You/They will have been attacking"
    ],
    "synonyms": [
        "assault",
        "strike",
        "charge",
        "ambush",
        "storm",
        "confront"
    ],
    "antonyms": [
        "defend",
        "protect",
        "guard",
        "shield",
        "safeguard",
        "support"
    ],
    "questions": [
        "How do you defend against a bear attack?(context: survival)",
        "Who attacked the fortress in history?(context: military)",
        "Have you been attacked by a dog?(context: personal safety)",
        "Why do hackers attack websites?(context: cybersecurity)",
        "Can stress attack the immune system?(context: health)"
    ]
},




  {
    "topic": "participation verbs",
    "category": "regular",
    "verb": "attend",
    "answer": [
        "I/They/We/You attend | He/She/It attends",
        "I am | He/She/It is | They/We/You are attending",
        "I/You/They/We have | He/She/It has attended",
        "I/You/They/We have been attending | He/She/It has been attending",
        "I/He/She/It/We/You/They attended",
        "I/He/She/It was attending | They/We/You were attending",
        "I/He/She/It/We/You/They had attended",
        "I/He/She/It/We/You/They had been attending",
        "I/He/She/It/We/You/They will attend",
        "I/He/She/It/We/You/They will be attending",
        "I/He/She/It/We/You/They will have attended",
        "I/He/She/It/We/You/They will have been attending"
    ],
    "synonyms": [
        "be present at",
        "go to",
        "be at",
        "be in attendance",
        "participate in",
        "join",
        "take part in",
        "sit in on",
        "show up at",
        "appear at",
        "turn up at"
    ],
    "antonyms": [
        "miss",
        "skip",
        "neglect",
        "ignore",
        "avoid",
        "bypass"
    ],
    "questions": [
        "Did you attend the meeting yesterday?(context: business)",
        "How many students attended the class?(context: education)",
        "Will you attend the wedding this weekend?(context: social event)",
        "Who will be attending the conference from our team?(context: professional event)",
        "Are you planning to attend the workshop next month?(context: educational event)"
    ]
  },

  


  {
    "topic": "discovery verbs",
    "category": "irregular",
    "verb": "find",
    "answer": [
        "I/They/We/You find | He/She/It finds",
        "I am | He/She/It is | They/We/You are finding",
        "I/You/They/We have | He/She/It has found",
        "I/You/They/We have been finding | He/She/It has been finding",
        "I/He/She/It/We/You/They found",
        "I/He/She/It was finding | They/We/You were finding",
        "I/He/She/It/We/You/They had found",
        "I/He/She/It/We/You/They had been finding",
        "I/He/She/It/We/You/They will find",
        "I/He/She/It/We/You/They will be finding",
        "I/He/She/It/We/You/They will have found",
        "I/He/She/It/We/You/They will have been finding"
    ],
    "synonyms": [
        "discover", 
        "uncover", 
        "locate", 
        "come across", 
        "encounter", 
        "determine"
    ],
    "antonyms": [
        "lose", 
        "misplace", 
        "overlook", 
        "miss", 
        "ignore"
    ],
    "questions": [
        "Where did you find your keys? (context: search)",
        "Who finds these tasks challenging? (context: assessment)",
        "Have they found a solution yet? (context: problem-solving)",
        "Why did she find the course difficult? (context: academic experience)",
        "What will you find at the end of the journey? (context: exploration)"
    ]
  }
,  



{
"topic": "temperature verbs",
"category": "irregular",
"verb": "freeze",
"answer": [
"I/They/We/You freeze | He/She/It freezes",
"I am | He/She/It is | They/We/You are freezing",
"I/You/They/We have | He/She/It has frozen",
"I/You/They/We have been freezing | He/She/It has been freezing",
"I/He/She/It/We/You/They froze",
"I/He/She/It was freezing | They/We/You were freezing",
"I/He/She/It/We/You/They had frozen",
"I/He/She/It/We/You/They had been freezing",
"I/He/She/It/We/You/They will freeze",
"I/He/She/It/We/You/They will be freezing",
"I/He/She/It/We/You/They will have frozen",
"I/He/She/It/We/You/They will have been freezing"
],
"synonyms": [
"solidify", 
"chill", 
"ice up", 
"congeal", 
"crystallize", 
"glaciate"
],
"antonyms": [
"melt", 
"thaw", 
"liquefy", 
"soften", 
"unfreeze"
],
"questions": [
"Does water freeze at 0 degrees Celsius? (context: science)",
"Who froze the leftovers? (context: food storage)",
"Have they frozen the assets? (context: finance)",
"Why did the lake freeze over? (context: weather)",
"What will happen if the pipes freeze? (context: household maintenance)"
]
}
,  

{
"topic": "physical activity verbs",
"category": "irregular",
"verb": "swim",
"answer": [
    "I/They/We/You swim | He/She/It swims",
    "I am | He/She/It is | They/We/You are swimming",
    "I/You/They/We have | He/She/It has swum",
    "I/You/They/We have been swimming | He/She/It has been swimming",
    "I/He/She/It/We/You/They swam",
    "I/He/She/It was swimming | They/We/You were swimming",
    "I/He/She/It/We/You/They had swum",
    "I/He/She/It/We/You/They had been swimming",
    "I/He/She/It/We/You/They will swim",
    "I/He/She/It/We/You/They will be swimming",
    "I/He/She/It/We/You/They will have swum",
    "I/He/She/It/We/You/They will have been swimming"
],
"synonyms": [
    "paddle", 
    "bathe", 
    "dive", 
    "float", 
    "glide", 
    "breaststroke"
],
"antonyms": [
    "sink", 
    "drown"
],
"questions": [
    "Can you swim across the lake? (context: physical ability)",
    "Who swims the fastest in your team? (context: competition)",
    "Have they swum in the ocean before? (context: experience)",
    "When will you go swimming? (context: inquiry about time)",
    "Why did he swim so early in the morning? (context: routine)",
    "What stroke will she swim in the race? (context: technique)"
]
}
,


{
    "topic": "performance verbs",
    "category": "regular",
    "verb": "fail",
    "answer": [
        "I/They/We/You fail | He/She/It fails",
        "I am | He/She/It is | They/We/You are failing",
        "I/You/They/We have | He/She/It has failed",
        "I/You/They/We have been failing | He/She/It has been failing",
        "I/He/She/It/We/You/They failed",
        "I/He/She/It was failing | They/We/You were failing",
        "I/He/She/It/We/You/They had failed",
        "I/He/She/It/We/You/They had been failing",
        "I/He/She/It/We/You/They will fail",
        "I/He/She/It/We/You/They will be failing",
        "I/He/She/It/We/You/They will have failed",
        "I/He/She/It/We/You/They will have been failing"
    ],
    "synonyms": ["be unsuccessful", "not succeed", "be defeated", "lose", "fall short", "come to naught", "misfire", "flounder", "collapse", "miscarry", "falter", "bomb"],
    "antonyms": ["succeed", "achieve", "win", "triumph", "prevail", "conquer", "excel", "prosper", "flourish", "thrive", "attain", "accomplish"],
    "questions": [
        "Why did the project fail? (context: project assessment)",
        "Who is likely to fail in such conditions? (context: performance evaluation)",
        "Have you ever failed at something important? (context: personal experience)",
        "What do you think about the idea of failing fast? (context: business strategy)",
        "What happens if we fail to meet the deadline? (context: time management)",
        "How do you handle failure? (context: coping strategies)"
    ]
}

,

{
    "topic": "action verbs",
    "category": "irregular",
    "verb": "dig",
    "answer": [
        "I/They/We/You dig | He/She/It digs",
        "I am | He/She/It is | They/We/You are digging",
        "I/You/They/We have | He/She/It has dug",
        "I/You/They/We have been digging | He/She/It has been digging",
        "I/He/She/It/We/You/They dug",
        "I/He/She/It was digging | They/We/You were digging",
        "I/He/She/It/We/You/They had dug",
        "I/He/She/It/We/You/They had been digging",
        "I/He/She/It/We/You/They will dig",
        "I/He/She/It/We/You/They will be digging",
        "I/He/She/It/We/You/They will have dug",
        "I/He/She/It/We/You/They will have been digging"
    ],
    "synonyms": ["excavate", "burrow", "unearth", "scoop", "shovel", "trench", "mine", "quarry", "drill", "spade", "delve", "hollow out"],
    "antonyms": ["fill", "bury", "cover", "heap", "deposit", "mound", "replace", "restore", "level", "smooth", "backfill", "heap up"],
    "questions": [
        "Where should we dig the foundation? (context: construction)",
        "Who digs up the garden every spring? (context: gardening)",
        "Who dug up your backyard? (context: inquiry about action)",
        "Have they dug out the old records yet? (context: archival research)",
        "Why do dogs dig holes? (context: animal behavior)",
        "How deep did you dig to find this? (context: discovery)"
    ]
}
,






  

{
    "topic": "common verbs",
    "category": "regular",
    "verb": "look",
    "answer": [
        "I/You/We/They look | He/She/It looks",
        "I am | He/She/It is | You/We/They are looking",
        "I/You/We/They have | He/She/It has looked",
        "I/You/We/They have been looking | He/She/It has been looking",
        "I/He/She/It/We/You/They looked",
        "I/He/She/It was looking | We/You/They were looking",
        "I/He/She/It/We/You/They had looked",
        "I/He/She/It/We/You/They had been looking",
        "I/He/She/It/We/You/They will look",
        "I/He/She/It/We/You/They will be looking",
        "I/He/She/It/We/You/They will have looked",
        "I/He/She/It/We/You/They will have been looking"
    ],
    "synonyms": [
        "glance",
        "gaze",
        "stare",
        "peer",
        "view",
        "examine",
        "observe",
        "scrutinize"
    ],
    "antonyms": [
        "ignore",
        "overlook",
        "neglect",
        "disregard",
        "avoid",
        "miss"
    ],
    "questions": [
        "Can you look at this report for me? (context: request for examination)",
        "She looks happy today. (context: observation)",
        "What are you looking for? (context: inquiry about search)",
        "What are your clients looking for when they hire you? (context: inquiry about motivation)",
        "Look out for the traffic! (context: warning)",
        "How long have you been looking for a new job? (context: inquiry about duration)"
    ]
},


{
    "topic": "development verbs",
    "category": "irregular",
    "verb": "grow up",
    "answer": [
        "I/They/We/You grow up | He/She/It grows up",
        "I am | He/She/It is | They/We/You are growing up",
        "I/You/They/We have | He/She/It has grown up",
        "I/You/They/We have been growing up | He/She/It has been growing up",
        "I/He/She/It/We/You/They grew up",
        "I/He/She/It was growing up | They/We/You were growing up",
        "I/He/She/It/We/You/They had grown up",
        "I/He/She/It/We/You/They had been growing up",
        "I/He/She/It/We/You/They will grow up",
        "I/He/She/It/We/You/They will be growing up",
        "I/He/She/It/We/You/They will have grown up",
        "I/He/She/It/We/You/They will have been growing up"
    ],
    "synonyms": [
        "mature", 
        "develop", 
        "age", 
        "evolve", 
        "progress", 
        "blossom", 
        "flourish", 
        "advance", 
        "ripen", 
        "come of age"
    ],
    "antonyms": [
        "regress", 
        "stagnate", 
        "deteriorate", 
        "worsen", 
        "decline", 
        "wither", 
        "atrophy"
    ],
    "questions": [
        "Where did you grow up? (context: personal background)",
        "How does one's childhood affect how they grow up? (context: psychology)",
        "Who was your role model when you were growing up? (context: personal development)",
        "What are the challenges children face as they grow up? (context: child development)",
        "How have cities grown up over the centuries? (context: urban development)",
        "What skills do children need to grow up successfully? (context: education)"
    ]
  },



{
    "topic": "knowledge verbs",
    "category": "irregular",
    "verb": "know about",
    "answer": [
        "I/They/We/You know about | He/She/It knows about",
        "I am | He/She/It is | They/We/You are knowing about",
        "I/You/They/We have | He/She/It has known about",
        "I/You/They/We have been knowing about | He/She/It has been knowing about",
        "I/He/She/It/We/You/They knew about",
        "I/He/She/It was knowing about | They/We/You were knowing about",
        "I/He/She/It/We/You/They had known about",
        "I/He/She/It/We/You/They had been knowing about",
        "I/He/She/It/We/You/They will know about",
        "I/He/She/It/We/You/They will be knowing about",
        "I/He/She/It/We/You/They will have known about",
        "I/He/She/It/We/You/They will have been knowing about"
    ],
    "synonyms": [
        "be aware of", 
        "be informed about", 
        "be familiar with", 
        "understand", 
        "be cognizant of", 
        "be acquainted with", 
        "recognize", 
        "be conscious of", 
        "be versed in", 
        "comprehend"
    ],
    "antonyms": [
        "be ignorant of", 
        "be unaware of", 
        "overlook", 
        "miss", 
        "neglect", 
        "disregard", 
        "be oblivious to", 
        "misunderstand"
    ],
    "questions": [
        "What do you know about the history of this place? (context: cultural interest)",
        "Who knows about the change in the schedule? (context: work communication)",
        "How can we find out what customers know about our products? (context: market research)",
        "Do parents know about the challenges their kids face online? (context: digital safety)",
        "Should the public know about government spending? (context: political transparency)"
    ]
  }
,  

{
    "topic": "common verbs",
    "category": "irregular",
    "verb": "see",
    "answer": [
        "I/You/We/They see | He/She/It sees",
        "I am | He/She/It is | You/We/They are seeing",
        "I/You/We/They have | He/She/It has seen",
        "I/You/We/They have been seeing | He/She/It has been seeing",
        "I/He/She/It/We/You/They saw",
        "I/He/She/It was seeing | We/You/They were seeing",
        "I/He/She/It/We/You/They had seen",
        "I/He/She/It/We/You/They had been seeing",
        "I/He/She/It/We/You/They will see",
        "I/He/She/It/We/You/They will be seeing",
        "I/He/She/It/We/You/They will have seen",
        "I/He/She/It/We/You/They will have been seeing"
    ],
    "synonyms": [
        "observe",
        "view",
        "watch",
        "witness",
        "perceive",
        "notice",
        "discern",
        "spot"
    ],
    "antonyms": [
        "miss",
        "overlook",
        "ignore",
        "neglect",
        "disregard",
        "be blind to"
    ],
    "questions": [
        "Did you see the movie last night? (context: inquiry about activity)",
        "Can you see the difference? (context: inquiry about discernment)",
        "When was the last you saw her? (context: inquiry about time)",
        "What do you see in this picture? (context: inquiry about perception)",
        
        "How often do you see your family? (context: inquiry about frequency)",
        "I can't see the board from here. (context: expressing difficulty)",
        "Who will see to the arrangements? (context: inquiry about responsibility)"
    ]
}
,
{
    "topic": "emotion verbs",
    "category": "regular",
    "verb": "laugh",
    "answer": [
        "I/They/We/You laugh | He/She/It laughs",
        "I am | He/She/It is | They/We/You are laughing",
        "I/You/They/We have | He/She/It has laughed",
        "I/You/They/We have been laughing | He/She/It has been laughing",
        "I/He/She/It/We/You/They laughed",
        "I/He/She/It was laughing | They/We/You were laughing",
        "I/He/She/It/We/You/They had laughed",
        "I/He/She/It/We/You/They had been laughing",
        "I/He/She/It/We/You/They will laugh",
        "I/He/She/It/We/You/They will be laughing",
        "I/He/She/It/We/You/They will have laughed",
        "I/He/She/It/We/You/They will have been laughing"
    ],
    "synonyms": ["giggle", "chuckle", "snicker", "guffaw", "cackle", "chortle", "titter", "roar", "snigger", "howl", "scream", "snort"],
    "antonyms": ["cry", "sob", "weep", "frown", "scowl", "grieve", "mourn", "lament", "sulk", "pout", "glower", "brood"],
    "questions": [
        "Why do people laugh when they are nervous? (context: psychological response)",
        "Who makes you laugh the most? (context: social interaction)",
        "Have you laughed at any good jokes recently? (context: humor)",
        "When was the last time you lauged out loud?",
        "What movie always makes you laugh? (context: entertainment)",
        "How do comedians make people laugh? (context: comedic techniques)"
    ]
}

,

{
"topic": "basic verbs",
"category": "irregular",
"verb": "tell",
"answer": [
"I/They/We/You tell | He/She/It tells",
"I am | He/She/It is | They/We/You are telling",
"I/You/They/We have | He/She/It has told",
"I/You/They/We have been telling | He/She/It has been telling",
"I/He/She/It/We/You/They told",
"I/He/She/It was telling | They/We/You were telling",
"I/He/She/It/We/You/They had told",
"I/He/She/It/We/You/They had been telling",
"I/He/She/It/We/You/They will tell",
"I/He/She/It/We/You/They will be telling",
"I/He/She/It/We/You/They will have told",
"I/He/She/It/We/You/They will have been telling"
],
"synonyms": [
"inform",
"advise",
"notify",
"instruct",
"relate",
"narrate",
"recount",
"describe",
"report",
"reveal"
],
"antonyms": [
"conceal",
"hide",
"withhold",
"suppress",
"keep secret"
],
"questions": [
"Can you tell me the time?(context: general inquiry)",
"Who told you this information?(context: inquiry)",
"Have they told the truth?(context: investigation)",
"What did he tell you about the project?(context: business)",
"Why didn't she tell us earlier?(context: interpersonal communication)"
]
},
];


    verbs.sort((a, b) => a.verb.localeCompare(b.verb));

    // Populate the dropdown with verbs
    function populateDropdown() {
        verbs.forEach(verb => {
            let option = document.createElement('option');
            option.value = verb.verb;
            option.textContent = verb.verb;
            verbSelect.appendChild(option);
        });
    }

   // Display verb details
function displayVerbDetails(verb) {
    // Clear existing data
    tenseTable.innerHTML = '';
    extraInfo.innerHTML = '';

    // Tenses and their labels
    let tenses = [
        "Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous",
        "Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous",
        "Simple Future", "Future Continuous", "Future Perfect", "Future Perfect Continuous"
    ];

    // Start table
    let tableHtml = '';

    // Add rows with verb forms
    for (let row = 0; row < 3; row++) {
        tableHtml += '<tr>';
        for (let col = 0; col < 4; col++) {
            let index = row * 4 + col;
            tableHtml += `<td><strong>${tenses[index]}:</strong><br>${verb.answer[index]}</td>`;
        }
        tableHtml += '</tr>';
    }

    tenseTable.innerHTML = tableHtml;

    // Display synonyms, antonyms, questions
    extraInfo.innerHTML = `
        <p>Synonyms: ${verb.synonyms.join(', ')}</p>
        <p>Antonyms: ${verb.antonyms.join(', ')}</p>
        <p>Questions: ${verb.questions.join('<br>')}</p>
    `;

    
        tenseTable.innerHTML = tableHtml;
    
        // Display synonyms, antonyms, questions
        extraInfo.innerHTML = `
        <p>Synonyms: ${verb.synonyms.join(', ')}</p>
        <p>Antonyms: ${verb.antonyms.join(', ')}</p>
        <ul>
            ${verb.questions.map(question => `<li>${question}</li>`).join('')}
        </ul>
    `;
    }
    

    // Event listener for verb selection
    verbSelect.addEventListener('change', function() {
        let selectedVerb = verbs.find(verb => verb.verb === this.value);
        displayVerbDetails(selectedVerb);
    });

    // Event listener for random verb button
    randomVerbButton.addEventListener('click', function() {
        let randomIndex = Math.floor(Math.random() * verbs.length);
        verbSelect.value = verbs[randomIndex].verb;
        displayVerbDetails(verbs[randomIndex]);
    });

    populateDropdown();
});
