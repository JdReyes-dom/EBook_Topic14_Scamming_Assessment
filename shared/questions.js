/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 14: A Special Prize
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who is the main character in the story?',
    choices: { a: 'The blue bird mascot', b: 'Mia\'s mother', c: 'The person who sent the message', d: 'Mia' },
    correct: 'd'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What did the message claim Mia had received?',
    choices: { a: 'A special prize', b: 'A free online lesson', c: 'A new tablet', d: 'An invitation to a contest' },
    correct: 'a'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You receive a message saying you won a prize, but you do not remember joining the contest. What should you do?',
    choices: {
      a: 'Click the link first to find out what the prize is.',
      b: 'Give only your name and wait for further instructions.',
      c: 'Ask a trusted adult to check the message with you.',
      d: 'Reply to the sender and ask whether the prize is real.'
    },
    correct: 'c'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'Your friend receives a message from an unfamiliar sender asking for their password to claim a free gift. Based on Mia\'s experience, what should your friend do?',
    choices: {
      a: 'Provide the password but avoid sharing other information.',
      b: 'Click the link and check whether the website looks official.',
      c: 'Reply to the sender and ask why the password is needed.',
      d: 'Avoid the link and ask a trusted adult for help.'
    },
    correct: 'd'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Mia become unsure about the message?',
    choices: {
      a: 'She did not recognize the sender and thought the link looked strange.',
      b: 'She remembered entering a contest but could not remember the prize.',
      c: 'She recognized the sender but was unsure whether the prize was available.',
      d: 'She had received similar prize messages from the same sender before.'
    },
    correct: 'a'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What did Mia do after she realized the message was suspicious?',
    choices: {
      a: 'She replied to the sender to ask for more details.',
      b: 'She showed the message to her mother.',
      c: 'She entered only the information she felt was safe to share.',
      d: 'She searched for the prize by clicking the unfamiliar link.'
    },
    correct: 'b'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What did Mia\'s mother explain about the suspicious message?',
    choices: {
      a: 'The message was probably from a company that Mia had forgotten about.',
      b: 'The prize could be real if Mia provided only some of her information.',
      c: 'Scammers may use exciting prizes to trick people into sharing information or clicking unsafe links.',
      d: 'Unfamiliar links are safe as long as they do not ask for payment.'
    },
    correct: 'c'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why was Mia\'s decision to stop before entering her information important?',
    choices: {
      a: 'It made it more likely that the prize would remain available.',
      b: 'It gave the sender another chance to explain how she could claim the prize.',
      c: 'It allowed her to choose which personal information would be easiest to provide.',
      d: 'It gave her time to check whether the message and sender could be trusted.'
    },
    correct: 'd'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What risk was Mia avoiding by refusing to provide her personal information?',
    choices: {
      a: 'She might miss the opportunity to receive a prize.',
      b: 'Someone behind the message could misuse the information she shared.',
      c: 'The sender might send her another message about the prize.',
      d: 'She might have to explain why she was interested in the offer.'
    },
    correct: 'b'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Which combination of actions best shows what Mia learned from her experience?',
    choices: {
      a: 'Be curious about online offers, respond carefully, and share information only when asked.',
      b: 'Ignore every message about prizes, even when the sender is known.',
      c: 'Think carefully about suspicious messages, avoid unfamiliar links, protect personal information, and ask a trusted adult for help.',
      d: 'Check whether a prize looks interesting before deciding whether to provide personal information.'
    },
    correct: 'c'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;