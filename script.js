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
    "topic": "planning verbs",
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
    "synonyms": ["ready", "set up", "arrange", "organize", "assemble", "equip", "make ready", "gear up", "plan", "prime", "provision", "train"],
    "antonyms": ["disorganize", "disarrange", "unsettle", "scatter", "demobilize", "disassemble", "confuse", "disrupt", "disorder"],
    "questions": [
        "How do you prepare for meetings? (context: business)",
        "Who will prepare the report? (context: work task)",
        "Have you [prepared|practiced|rehearsed] your presentation? (context: public speaking)",
        "What are you [preparing|making] for dinner? (context: cooking)",
        "Why is it important to prepare in advance? (context: planning)"
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
        "Do you often forget people's names? (context: memory lapses)",
        "Who forgets their passwords most often? (context: digital security)",
        "Did you forget to lock the door? (context: daily routine)",
        "Have you forgotten what I told you? (context: recollection)",
        "Why do we forget important dates? (context: memory study)",
        "How can I avoid forgetting this information? (context: memory techniques)"
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
    "synonyms": ["listen to", "catch", "overhear", "eavesdrop", "perceive", "detect", "make out", "distinguish", "attend", "heed", "take in", "discern"],
    "antonyms": ["ignore", "mishear", "overlook", "neglect", "disregard", "unheed", "tune out", "miss", "be deaf to", "disbelieve", "doubt"],
    "questions": [
        "Did you hear what they said? (context: conversation)",
        "Who hears the noise in the night? (context: investigation)",
        "Have you heard the latest news? (context: updates)",
        "What did you hear about the event? (context: gossip)",
        "Why can't I hear anything? (context: audio issues)"
    ]
}

,


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
}

,

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
        "What causes materials to break under pressure? (context: physics)",
        "Why is it important not to break promises? (context: ethics)"
    ]
}
,




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
        "Have you been advised about the risks? (context: risk assessment)",
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
        "Do you often talk about politics? (context: discussion)",
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
}
,

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
}
,

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
"topic": "basic verbs",
"category": "irregular",
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
"utter",
"voice",
"express",
"articulate",
"pronounce",
"state",
"declare",
"announce",
"proclaim"
],
"antonyms": [
"mute",
"silence",
"suppress",
"withhold",
"keep quiet"
],
"questions": [
"What did he say about the meeting?(context: business)",
"Can you say that again?(context: conversation)",
"Have you said your goodbyes?(context: farewell)",
"Why didn't she say anything?(context: discussion)",
"How do you say this word in English?(context: language learning)"
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
"Has she taught this subject before?(context: professional inquiry)",
"Why did he stop teaching?(context: career change)",
"What do you want to teach next year?(context: future planning in education)"
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
"Do you have a pen I could use? (context: request)",
"Who has the keys to the office? (context: inquiry)",
"Have they had their lunch yet? (context: inquiry about meal)",
"What kind of car do you have? (context: casual conversation)",
"Has he had experience in this field? (context: professional inquiry)"
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
    "synonyms": ["dwell", "reside", "inhabit", "exist", "be", "occupy", "stay", "settle", "abide", "lodge", "sojourn", "subsist"],
    "antonyms": ["depart", "leave", "vacate", "die", "perish", "exit", "abandon", "forsake", "quit", "relinquish", "desert", "migrate"],
    "questions": [
        "Where do you live? (context: residence)",
        "Who lives in that old house? (context: neighborhood inquiry)",
        "Have you lived here all your life? (context: personal history)",
        "Why do so many people want to live in the city? (context: urban living)",
        "How does it feel to live abroad? (context: expatriate experience)"
    ]
}

,
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
        "Have they built a prototype yet? (context: product design)",
        "What materials are used to build these houses? (context: construction materials)",
        "Why is it important to build strong relationships? (context: interpersonal skills)"
    ]
}

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
"Where did you go on your vacation? (context: travel inquiry)",
"How often do you go to the gym? (context: inquiry about routine)",
"Can I go with you? (context: request to accompany)",
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
"I/You/We/They have | He/She/It has known",
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
"Did you know that she moved abroad? (context: sharing information)",
"What do you know about this topic? (context: inquiry about expertise)",
"Who knows how to fix this? (context: seeking assistance)"
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
"What do you do for a living? (context: career inquiry)",
"Why didn't he care? (context: inquiry about behavior)",
"What did you do?! (context: expressing surprise)",
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
        "Who will speak at the conference? (context: event planning)",
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
"I/You/We/They have | He/She/It has gotten/got",
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
"Where did you get that idea? (context: inquiry about origin)",
"What time do you get off work? (context: inquiry about schedule)"
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
        "Have you ever won a competition? (context: personal achievement)",
        "What does it take to win in this industry? (context: business)",
        "Which team do you think will win the championship? (context: sports)",
        "How did she feel after winning the award? (context: achievement)"
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
        "Who feels responsible for this? (context: accountability)",
        "Have you ever felt this way before? (context: emotional experience)",
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
        "Who is likely to inflame the situation? (context: conflict resolution)",
        "Have you done anything to inflame the issue? (context: conflict escalation)",
        "Why do certain foods inflame allergies? (context: dietary concerns)",
        "How can we avoid actions that inflame tensions? (context: diplomacy)"
    ]
}
,

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
        "Who will visit the new museum? (context: leisure activity)",
        "Have you visited your family recently? (context: family reunion)",
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


,
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
        "Where do you live? (context: residence)",
        "Who lives next door to you? (context: neighborhood)",
        "Have they lived abroad before? (context: experience)",
        "How long have you lived in this city? (context: duration)",
        "Why did she live in the city for so long? (context: choice)",
        "What is it like to live in a rural area? (context: lifestyle)"
    ]
  }
,




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
        "Who wears a uniform at your school? (context: dress code)",
        "What are you wearing to the show?",
        "Have they worn their new shoes yet? (context: usage)",
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
        "Have they prepared their presentation? (context: work)",
        "Why did she prepare so early? (context: planning)",
        "What do we need to prepare for the trip? (context: travel)"
    ]
  }
  ,

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