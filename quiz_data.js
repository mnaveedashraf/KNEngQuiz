// quiz_data.js
// CATSO English Linguistic Quiz - Grade 3 & 4 (173 Questions)
// Data Source: Provided syllabus sample.

/**
 * @typedef {Object} QuizQuestion
 * @property {string} question - The text of the question.
 * @property {string[]} options - An array of possible answers (A, B, C, D).
 * @property {string} answer - The correct answer text, matching one of the options.
 */

/**
 * The full array of quiz questions.
 * @type {QuizQuestion[]}
 */
export const quizQuestions = [
    // 1-20: Parts of Speech (Identification)
    { question: "1. Which word is a verb?", options: ["jacket", "careful", "jump", "pencil"], answer: "jump" },
    { question: "2. Which word is an adjective?", options: ["river", "softly", "shiny", "swim"], answer: "shiny" },
    { question: "3. Which word is a noun?", options: ["quickly", "blue", "garden", "behind"], answer: "garden" },
    { question: "4. Which word is an adverb?", options: ["slow", "lion", "slowly", "bright"], answer: "slowly" },
    { question: "5. Which is a pronoun?", options: ["Ahmed", "ruler", "they", "Friday"], answer: "they" },
    { question: "6. Choose the conjunction.", options: ["above", "later", "and", "inside"], answer: "and" },
    { question: "7. Choose the preposition.", options: ["sing", "under", "happy", "teacher"], answer: "under" },
    { question: "8. Which is a concrete noun?", options: ["beauty", "apple", "bravery", "honesty"], answer: "apple" },
    { question: "9. Which is an abstract noun?", options: ["balloon", "kindness", "window", "carpet"], answer: "kindness" },
    { question: "10. Which word is an interjection?", options: ["between", "Wow!", "bucket", "tidy"], answer: "Wow!" },
    { question: "11. Which word is a common noun?", options: ["Pakistan", "city", "Ali", "Sunday"], answer: "city" },
    { question: "12. Which word is a proper noun?", options: ["month", "March", "pencil", "fruit"], answer: "March" },
    { question: "13. Which word is a collective noun?", options: ["desk", "kitten", "team", "sugar"], answer: "team" },
    { question: "14. Which is a helping verb?", options: ["draw", "is", "chalk", "brown"], answer: "is" },
    { question: "15. Pick the adjective of quality.", options: ["table", "honest", "above", "run"], answer: "honest" },
    { question: "16. Pick the adjective of number.", options: ["quickly", "three", "neat", "sing"], answer: "three" },
    { question: "17. Pick the action verb.", options: ["friendly", "write", "blue", "corner"], answer: "write" },
    { question: "18. Which is a possessive pronoun?", options: ["he", "theirs", "them", "they"], answer: "theirs" },
    { question: "19. Which is a demonstrative pronoun?", options: ["who", "those", "whom", "whoever"], answer: "those" },
    { question: "20. Which word is an adverb of time?", options: ["beside", "yesterday", "tall", "rabbit"], answer: "yesterday" },
    
    // 21-35: Tenses and Verb Forms
    { question: "21. She ___ the plants every morning.", options: ["water", "waters", "watering", "watered"], answer: "waters" },
    { question: "22. We ___ the museum last week.", options: ["go", "going", "went", "goes"], answer: "went" },
    { question: "23. Ali___his homework now.", options: ["do", "is doing", "did", "done"], answer: "is doing" },
    { question: "24. The sun___in the east.", options: ["rise", "rises", "rising", "rose"], answer: "rises" },
    { question: "25. They___football yesterday.", options: ["plays", "playing", "played", "play"], answer: "played" },
    { question: "26. We ___ in Karachi two years ago.", options: ["live", "lived", "living", "lives"], answer: "lived" },
    { question: "27. He ___ to school every day.", options: ["go", "goes", "gone", "going"], answer: "goes" },
    { question: "28. They ___ not at home yesterday.", options: ["is", "were", "was", "are"], answer: "were" },
    { question: "29. She ___ very happy now.", options: ["am", "is", "are", "be"], answer: "is" }, // Corrected option (b)
    { question: "30. I ___ an apple yesterday.", options: ["eat", "ate", "eaten", "eating"], answer: "ate" },
    { question: "31. The bell ___ loudly.", options: ["ring", "rings", "rangs", "ringed"], answer: "rings" },
    { question: "32. The boys ___ cricket now.", options: ["is playing", "are playing", "were playing", "played"], answer: "are playing" },
    { question: "33. He ___ his work tomorrow.", options: ["finish", "finished", "will finish", "finishing"], answer: "will finish" },
    { question: "34. We ___ a letter last night.", options: ["writes", "writing", "wrote", "writed"], answer: "wrote" },
    { question: "35. The students ___ for the test now.", options: ["study", "studied", "are studying", "studies"], answer: "are studying" },

    // 36-45: Vocabulary (Synonyms & Antonyms)
    { question: "36. Opposite of 'difficult' is:", options: ["hard", "easy", "tough", "strong"], answer: "easy" },
    { question: "37. Which word means the same as 'huge'?", options: ["tiny", "large", "short", "little"], answer: "large" },
    { question: "38. Opposite of 'empty' is:", options: ["blank", "full", "hollow", "zero"], answer: "full" },
    { question: "39. Which word is similar to 'begin'?", options: ["stop", "end", "start", "close"], answer: "start" },
    { question: "40. Opposite of 'polite' is:", options: ["gentle", "kind", "rude", "good"], answer: "rude" },
    { question: "41. Which word is the synonym of 'happy'?", options: ["sad", "joyful", "angry", "upset"], answer: "joyful" },
    { question: "42. Opposite of 'light' is:", options: ["shine", "bright", "dark", "glow"], answer: "dark" },
    { question: "43. Which word is similar to 'beautiful'?", options: ["ugly", "pretty", "dirty", "plain"], answer: "pretty" },
    { question: "44. Opposite of 'fast' is:", options: ["heavy", "slow", "tall", "quick"], answer: "slow" },
    { question: "45. Which word means 'clever'?", options: ["foolish", "silly", "smart", "weak"], answer: "smart" },

    // 46-55: Prepositions and Articles
    { question: "46. He is ___ honest boy.", options: ["a", "an", "the", "none"], answer: "an" },
    { question: "47. The pen is ___ the table.", options: ["under", "on", "in", "at"], answer: "on" },
    { question: "48. She is sitting ___ her friend.", options: ["in", "under", "beside", "over"], answer: "beside" },
    { question: "49. The picture is hanging ___ the wall.", options: ["in", "near", "on", "under"], answer: "on" },
    { question: "50. Birds fly ___ the sky.", options: ["at", "on", "in", "by"], answer: "in" },
    { question: "51. The ball is ___ the box.", options: ["coming", "far", "inside", "high"], answer: "inside" },
    { question: "52. The sun sets ___ the west.", options: ["at", "on", "in", "into"], answer: "in" },
    { question: "53. We went ___ the park.", options: ["on", "to", "under", "between"], answer: "to" },
    { question: "54. The cat jumped ___ the wall.", options: ["under", "over", "on", "in"], answer: "on" },
    { question: "55. She put the book ___ her bag.", options: ["on", "near", "into", "over"], answer: "into" },

    // 56-65: Spelling and Punctuation
    { question: "56. Correct spelling is:", options: ["beecaus", "because", "becose", "becausse"], answer: "because" },
    { question: "57. Which is the correct spelling?", options: ["frend", "freind", "friend", "frind"], answer: "friend" },
    { question: "58. Which is correct sentence?", options: ["he is my brother", "He is my brother", "He is my brother.", "he is My brother."], answer: "He is my brother." },
    { question: "59. Correct spelling is:", options: ["libary", "lybary", "library", "libarry"], answer: "library" },
    { question: "60. Choose the correct punctuation.", options: ["Hurrah.", "Hurrah?", "Hurrah!", "hurrah."], answer: "Hurrah!" },
    { question: "61. Correct spelling is:", options: ["enviroment", "envaironment", "environment", "envirnment"], answer: "environment" },
    { question: "62. Which is punctuated correctly?", options: ['Ali said "I am fine."', "Ali said, I am fine.", 'Ali said,"I am fine."', 'Ali said "I am fine.'], answer: 'Ali said, "I am fine."' },
    { question: "63. Correct spelling is:", options: ["surprize", "surprise", "suprise", "surprisse"], answer: "surprise" },
    { question: "64. Which is punctuated correctly?", options: ["Where are you.", "Where are you?", "Where are you!", "Where are You?"], answer: "Where are you?" },
    { question: "65. Correct spelling is:", options: ["neighbr", "neibour", "neighbour", "naybor"], answer: "neighbour" },

    // 66-75: Sentence Correction (Subject-Verb Agreement)
    { question: "66. Choose the correct sentence.", options: ["He going to school.", "He go to school.", "He goes to school.", "He gone school."], answer: "He goes to school." },
    { question: "67. Choose the correct sentence.", options: ["They was happy.", "They were happy.", "They is happy.", "They be happy."], answer: "They were happy." },
    { question: "68. Choose the correct sentence.", options: ["The birds is flying.", "The birds was flying.", "The birds are flying.", "The birds be flying."], answer: "The birds are flying." },
    { question: "69. Choose the correct sentence.", options: ["She eat mango.", "She eaten mango.", "She eats mango.", "She eatting mango."], answer: "She eats mango." },
    { question: "70. Choose the correct sentence.", options: ["I is a student.", "I are a student.", "I am a student.", "I be a student."], answer: "I am a student." },
    { question: "71. Choose the correct sentence.", options: ["The boy run fast.", "The boy running fast.", "The boy runs fast.", "The boy runned fast."], answer: "The boy runs fast." },
    { question: "72. Choose the correct sentence.", options: ["She was play yesterday.", "She plays yesterday.", "She played yesterday.", "She play yesterday."], answer: "She played yesterday." },
    { question: "73. Choose the correct sentence.", options: ["We is studying.", "We am studying.", "We are studying.", "We be studying."], answer: "We are studying." },
    { question: "74. Choose the correct sentence.", options: ["They wvill studies tomorrow.", "They will study tomorrow.", "They will studying tomorrow.", "They will studied tomorrow."], answer: "They will study tomorrow." },
    { question: "75. Choose the correct sentence.", options: ["Ali readed a book.", "Ali was reads a book yesterday.", "Ali read a book yesterday.", "Ali is read a book yesterday."], answer: "Ali read a book yesterday." },

    // 76-85: Classification/General Knowledge
    { question: "76. Which is a fruit?", options: ["carrot", "onion", "mango", "potato"], answer: "mango" },
    { question: "77. Which is a vegetable?", options: ["apple", "banana", "carrot", "mango"], answer: "carrot" },
    { question: "78. Which is a bird?", options: ["dog", "cow", "parrot", "cat"], answer: "parrot" },
    { question: "79. Which is a wild animal?", options: ["goat", "hen", "tiger", "cow"], answer: "tiger" },
    { question: "80. Which is a domestic animal?", options: ["lion", "wolf", "cat", "fox"], answer: "cat" },
    { question: "81. Which is a color?", options: ["table", "blue", "chair", "bed"], answer: "blue" },
    { question: "82. Which is a month?", options: ["Friday", "week", "March", "school"], answer: "March" },
    { question: "83. Which is a day of the week?", options: ["July", "Monday", "year", "season"], answer: "Monday" },
    { question: "84. Which is a season?", options: ["June", "Monday", "winter", "September"], answer: "winter" },
    { question: "85. Which is a tool for writing?", options: ["spoon", "plate", "pencil", "glass"], answer: "pencil" },

    // 86-95: Plurals (Regular & Irregular)
    { question: "86. Plural of 'tooth' is:", options: ["tooths", "teeth", "toothes", "toothing"], answer: "teeth" },
    { question: "87. Plural of 'child' is:", options: ["childs", "children", "childes", "childen"], answer: "children" },
    { question: "88. Plural of 'mouse' is:", options: ["mouses", "mice", "mousen", "micees"], answer: "mice" },
    { question: "89. Plural of 'foot' is:", options: ["foots", "footen", "feet", "feets"], answer: "feet" },
    { question: "90. Plural of 'woman' is:", options: ["womans", "women", "womanes", "women"], answer: "women" },
    { question: "91. Plural of 'ox' is:", options: ["oxes", "oxen", "oxs", "oxies"], answer: "oxen" },
    { question: "92. Plural of 'leaf' is:", options: ["leafs", "leaves", "leavs", "leaffs"], answer: "leaves" },
    { question: "93. Plural of 'knife' is:", options: ["knifes", "knives", "knivs", "knivves"], answer: "knives" },
    { question: "94. Plural of 'glass' is:", options: ["glasss", "glasses", "glassies", "glassen"], answer: "glasses" },
    { question: "95. Plural of 'lady' is:", options: ["ladys", "ladies", "ladyes", "ladien"], answer: "ladies" },

    // 96-105: Vocabulary (Synonyms & Antonyms)
    { question: "96. Synonym of 'intelligent' is:", options: ["foolish", "weak", "smart", "lazy"], answer: "smart" },
    { question: "97. Opposite of 'asleep' is:", options: ["tired", "drowsy", "awake", "nap"], answer: "awake" },
    { question: "98. Synonym of 'speak' is:", options: ["walk", "talk", "run", "sleep"], answer: "talk" },
    { question: "99. Opposite of 'clean' is:", options: ["fresh", "neat", "dirty", "pure"], answer: "dirty" },
    { question: "100. Synonym of 'child' is:", options: ["old", "adult", "kid", "man"], answer: "kid" },
    { question: "101. Opposite of 'strong' is:", options: ["brave", "healthy", "weak", "powerful"], answer: "weak" },
    { question: "102. Synonym of 'buy' is:", options: ["sell", "give", "purchase", "borrow"], answer: "purchase" },
    { question: "103. Opposite of 'true' is:", options: ["right", "false", "correct", "honest"], answer: "false" },
    { question: "104. Synonym of 'happy' is:", options: ["sad", "glad", "angry", "upset"], answer: "glad" },
    { question: "105. Opposite of 'inside' is:", options: ["below", "outside", "near", "behind"], answer: "outside" },

    // 106-115: Tenses and Verb Forms
    { question: "106. The boy ___ a book yesterday.", options: ["readed", "read", "reads", "reading"], answer: "read" },
    { question: "107. The girls ___ singing now.", options: ["is", "was", "are", "be"], answer: "are" },
    { question: "108. She ___ not come yesterday.", options: ["do", "does", "did", "done"], answer: "did" },
    { question: "109. We ___ the match last week.", options: ["wins", "winning", "won", "win"], answer: "won" },
    { question: "110. He ___ to school every day.", options: ["go", "goes", "went", "going"], answer: "goes" },
    { question: "111. They ___ to Lahore tomorrow.", options: ["goes", "went", "will go", "gone"], answer: "will go" },
    { question: "112. She ___ very fast.", options: ["run", "runs", "running", "runned"], answer: "runs" },
    { question: "113. The sun ___ bright in summer.", options: ["shine", "shines", "shone", "shinning"], answer: "shines" },
    { question: "114. We___cricket in the ground.", options: ["plays", "playing", "play", "played"], answer: "play" },
    { question: "115. The boys ___ football yesterday.", options: ["play", "plays", "played", "playing"], answer: "played" },

    // 116-125: Spelling and Punctuation
    { question: "116. Correct spelling is:", options: ["famly", "familey", "family", "famlee"], answer: "family" },
    { question: "117. Correct spelling is:", options: ["skool", "scholl", "school", "scool"], answer: "school" },
    { question: "118. Correct spelling is:", options: ["becaus", "becose", "because", "becauss"], answer: "because" },
    { question: "119. Which is punctuated correctly?", options: ["Do you like mango.", "Do you like mango,", "Do you like mango?", "Do you like Mango."], answer: "Do you like mango?" },
    { question: "120. Correct spelling is:", options: ["beutiful", "butiful", "beautiful", "beuteful"], answer: "beautiful" },
    { question: "121. Which is correct?", options: ["ali is a student.", "Ali is a student", "Ali is a student.", "Ali is a student,"], answer: "Ali is a student." },
    { question: "122. Correct spelling is:", options: ["tomorow", "tommorow", "tomorrow", "tommoro"], answer: "tomorrow" },
    { question: "123. Which is correct?", options: ["HHow are you.", "How are you", "How are you?", "how are you?"], answer: "How are you?" },
    { question: "124. Correct spelling is:", options: ["freind", "frind", "friend", "frend"], answer: "friend" },
    { question: "125. Which is punctuated correctly?", options: ["I like apples!", "I like apples?", "I like apples.", "I Like Apples."], answer: "I like apples." },

    // 126-135: Classification/General Knowledge
    { question: "126. Which is a shape?", options: ["dog", "tree", "circle", "pen"], answer: "circle" },
    { question: "127. Which is a profession?", options: ["apple", "table", "teacher", "bottle"], answer: "teacher" },
    { question: "128. Which is a place?", options: ["honesty", "chair", "park", "tall"], answer: "park" },
    { question: "129. Which is a feeling?", options: ["book", "joy", "window", "roof"], answer: "joy" },
    { question: "130. Which is a means of transport?", options: ["chair", "plate", "bus", "spoon"], answer: "bus" },
    { question: "131. Which is a subject of study?", options: ["mango", "milk", "science", "tiger"], answer: "science" },
    { question: "132. Which is a festival?", options: ["Monday", "Eid", "January", "friend"], answer: "Eid" },
    { question: "133. Which is a tool?", options: ["knife", "hammer", "cow", "sky"], answer: "hammer" },
    { question: "134. Which is a part of body?", options: ["table", "lamp", "ear", "pen"], answer: "ear" },
    { question: "135. Which is a natural thing?", options: ["book", "chair", "river", "ball"], answer: "river" },

    // 136-145: Vocabulary (Synonyms & Antonyms)
    { question: "136. Opposite of 'hard' is:", options: ["strong", "soft", "solid", "tough"], answer: "soft" },
    { question: "137. Synonym of 'angry' is:", options: ["calm", "mad", "quiet", "happy"], answer: "mad" },
    { question: "138. Opposite of 'near' is:", options: ["close", "far", "short", "small"], answer: "far" },
    { question: "139. Synonym of 'small' is:", options: ["large", "big", "tiny", "huge"], answer: "tiny" },
    { question: "140. Opposite of 'begin' is:", options: ["open", "start", "end", "begining"], answer: "end" },
    { question: "141. Synonym of 'see' is:", options: ["hide", "look", "close", "stop"], answer: "look" },
    { question: "142. Opposite of 'up' is:", options: ["on", "above", "down", "high"], answer: "down" },
    { question: "143. Synonym of 'house' is:", options: ["hut", "home", "shop", "market"], answer: "home" },
    { question: "144. Opposite of 'beautiful' is:", options: ["fair", "nice", "ugly", "neat"], answer: "ugly" },
    { question: "145. Synonym of 'gift' is:", options: ["borrow", "loan", "present", "steal"], answer: "present" },

    // 146-150: Sentence Correction (Subject-Verb Agreement)
    { question: "146. Choose the correct sentence.", options: ["The boys was playing.", "The boys is playing.", "The boys were playing.", "The boys be playing."], answer: "The boys were playing." },
    { question: "147. Choose the correct sentence.", options: ["She have a pen.", "She has a pen.", "She haves a pen.", "She having a pen."], answer: "She has a pen." },
    { question: "148. Choose the correct sentence.", options: ["They is my friends.", "They am my friends.", "They are my friends.", "They be my friends."], answer: "They are my friends." },
    { question: "149. Choose the correct sentence.", options: ["He eat rice.", "He eats rice.", "He eaten rice.", "He eating rice."], answer: "He eats rice." },
    { question: "150. Choose the correct sentence.", options: ["We was happy.", "We is happy.", "We were happy.", "We be happy"], answer: "We were happy." },

    // 151-173: Mixed/Advanced Grammar & Vocabulary
    { question: "151. Which word is a pronoun in this sentence: 'She gave him a gift'?", options: ["Gave", "Gift", "Him", "A"], answer: "Him" },
    { question: "152. What is the plural of 'fish'?", options: ["Fishes", "Fish", "Fishs", "Fishies"], answer: "Fish" },
    { question: "153. Which sentence is correct?", options: ["I did my homework.", "I do my homework yesterday.", "I does my homework.", "I doing my homework."], answer: "I did my homework." },
    { question: "154. What is the opposite of 'tall'?", options: ["little", "Big", "Short", "Heavy"], answer: "Short" },
    { question: "155. Which word is a conjunction in this sentence: 'I like apples and bananas'?", options: ["Apples", "Bananas", "And", "Like"], answer: "And" },
    { question: "156. What is the comparative form of 'small'?", options: ["Smallest", "More small", "Smaller", "Most small"], answer: "Smaller" },
    { question: "157. Which sentence uses the correct form of the verb 'to be'?", options: ["They is running to the park.", "She are walking home.", "He is playing football.", "They was reading a book."], answer: "He is playing football." },
    { question: "158. Which word completes the sentence: 'He is ___ the ball'?", options: ["Into", "On", "Throwing", "Jumping"], answer: "Throwing" },
    { question: "159. What is the past tense of 'see'?", options: ["Sees", "Seen", "Saw", "Seeing"], answer: "Saw" },
    { question: "160. Which sentence is in the future tense?", options: ["I am going to the store now.", "I will go to the store tomorrow.", "I went to the store.", "I going to the store tomorrow."], answer: "I will go to the store tomorrow." },
    { question: "161. Which word is a verb in this sentence: 'The dog jumped over the fence'?", options: ["Fence", "Jumped", "Over", "Dog"], answer: "Jumped" },
    { question: "162. What is the opposite of 'new'?", options: ["Old", "Fresh", "Nice", "Tall"], answer: "Old" },
    { question: "163. What is the superlative form of 'big'?", options: ["Bigger", "Biggest", "More big", "Bigest"], answer: "Biggest" },
    { question: "164. Which sentence uses correct punctuation?", options: ["Where did you go,", "Where did you go!", "Where did you go?", "Where did you go"], answer: "Where did you go?" },
    { question: "165. Which word is an adjective in this sentence: 'The red balloon floated away'?", options: ["Balloon", "Floated", "Red", "Away"], answer: "Red" },
    { question: "166. What is the correct spelling?", options: ["Tomorrow", "Tomorrow", "Tomoroww", "Tommorow"], answer: "Tomorrow" },
    { question: "167. What is the past tense of 'bring'?", options: ["Bringed", "Brings", "Brought", "Bringing"], answer: "Brought" },
    { question: "168. Which sentence is in the past tense?", options: ["They will visit the zoo.", "They are visiting the zoo.", "They visited the zoo yesterday.", "They visit the zoo every week."], answer: "They visited the zoo yesterday." },
    { question: "169. What is the opposite of 'clean'?", options: ["Neat", "Tidy", "Dirty", "Shiny"], answer: "Dirty" },
    { question: "170. What is the plural of 'deer'?", options: ["Deers", "Deeres", "Deer", "Deerses"], answer: "Deer" },
    { question: "171. Which word is an adverb in this sentence: 'She ran quickly to the door'?", options: ["She", "Ran", "Quickly", "Door"], answer: "Quickly" },
    { question: "172. What is the opposite of 'empty'?", options: ["Small", "Full", "Clean", "Hard"], answer: "Full" },
    { question: "173. Which sentence is written in the past tense?", options: ["They played soccer yesterday.", "They will play soccer.", "They are playing soccer.", "They plays soc"], answer: "They played soccer yesterday." }

];
