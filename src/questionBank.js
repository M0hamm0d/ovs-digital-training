// questionBank.js
export const SUBJECT_MAPS = {
  science: ['Mathematics', 'English Language', 'Physics', 'Chemistry'],
  commercial: ['Mathematics', 'English Language', 'Commerce', 'Accounting'],
  art: ['Mathematics', 'English Language', 'Government', 'Literature'],
}

export const REAL_QUESTIONS = {
  Mathematics: [
    {
      id: 'math-q1',
      text: 'Solve for x if 2x + 5 = 15.',
      options: { A: '5', B: '10', C: '15', D: '20' },
      correctAnswer: 'A',
    },
    {
      id: 'math-q2',
      text: 'Find the value of x if log_10 x = 3.',
      options: { A: '30', B: '100', C: '300', D: '1000' },
      correctAnswer: 'D',
    },
    {
      id: 'math-q3',
      text: 'If P = {1, 2, 3, 5, 7} and Q = {2, 4, 6, 8}, find P ∩ Q.',
      options: { A: '{2}', B: '{1, 3, 5, 7}', C: '{4, 6, 8}', D: '{}' },
      correctAnswer: 'A',
    },
    {
      id: 'math-q4',
      text: 'Find the 4th term of a Geometric Progression (G.P.) whose first term is 3 and common ratio is 2.',
      options: { A: '18', B: '24', C: '48', D: '54' },
      correctAnswer: 'B',
    },
    {
      id: 'math-q5',
      text: 'Calculate the mean of the following set of scores: 4, 7, 8, 9, and 12.',
      options: { A: '7', B: '8', C: '9', D: '10' },
      correctAnswer: 'B',
    },
  ],
  'English Language': [
    {
      id: 'eng-q1',
      text: "Choose the option nearest in meaning to the underlined word: The manager's decision was **irreversible**.",
      options: { A: 'Temporary', B: 'Permanent', C: 'Flawed', D: 'Acceptable' },
      correctAnswer: 'B',
    },
    {
      id: 'eng-q2',
      text: 'Choose the option opposite in meaning to the underlined word: The speaker was exceptionally **verbose** during the seminar.',
      options: { A: 'Laconic', B: 'Wordy', C: 'Eloquent', D: 'Arrogant' },
      correctAnswer: 'A',
    },
    {
      id: 'eng-q3',
      text: 'Identify the correct option to fill the gap: Neither the principal nor the teachers _______ present at the meeting yesterday.',
      options: { A: 'is', B: 'was', C: 'were', D: 'are' },
      correctAnswer: 'C',
    },
    {
      id: 'eng-q4',
      text: 'Choose the option that best completes the sentence: By the time the police arrived, the thieves _______ escaped.',
      options: { A: 'have', B: 'had', C: 'has', D: 'were' },
      correctAnswer: 'B',
    },
    {
      id: 'eng-q5',
      text: 'Select the option that has the same vowel sound as the underlined word: This **seat** is reserved.',
      options: { A: 'sit', B: 'great', C: 'meet', D: 'set' },
      correctAnswer: 'C',
    },
  ],
  Physics: [
    {
      id: 'phy-q1',
      text: 'Which of the following is a fundamental quantity?',
      options: { A: 'Velocity', B: 'Length', C: 'Force', D: 'Density' },
      correctAnswer: 'B',
    },
    {
      id: 'phy-q2',
      text: 'A car accelerates uniformly from rest at $4\\text{ m/s}^2$. Calculate its velocity after $5$ seconds.',
      options: { A: '0.8 m/s', B: '9 m/s', C: '20 m/s', D: '40 m/s' },
      correctAnswer: 'C',
    },
    {
      id: 'phy-q3',
      text: 'The process whereby a liquid changes into vapor at all temperatures is known as:',
      options: { A: 'Boiling', B: 'Evaporation', C: 'Sublimation', D: 'Condensation' },
      correctAnswer: 'B',
    },
    {
      id: 'phy-q4',
      text: 'The resistance of a wire depends on all the following factor EXCEPT:',
      options: { A: 'Length', B: 'Cross-sectional area', C: 'Mass', D: 'Temperature' },
      correctAnswer: 'C',
    },
    {
      id: 'phy-q5',
      text: 'An object is placed 10 cm in front of a concave mirror of focal length 15 cm. The image formed is:',
      options: {
        A: 'Real and magnified',
        B: 'Virtual and magnified',
        C: 'Real and diminished',
        D: 'Virtual and diminished',
      },
      correctAnswer: 'B',
    },
  ],
  Chemistry: [
    {
      id: 'chm-q1',
      text: 'Which of the following elements has the electronic configuration $2, 8, 8, 1$?',
      options: { A: 'Sodium', B: 'Magnesium', C: 'Calcium', D: 'Potassium' },
      correctAnswer: 'D',
    },
    {
      id: 'chm-q2',
      text: 'The gas that turns lime water milky is:',
      options: { A: 'Oxygen', B: 'Carbon dioxide', C: 'Nitrogen', D: 'Hydrogen' },
      correctAnswer: 'B',
    },
    {
      id: 'chm-q3',
      text: 'What is the oxidation number of sulfur in $\\text{H}_2\\text{SO}_4$?',
      options: { A: '+2', B: '+4', C: '+6', D: '-2' },
      correctAnswer: 'C',
    },
    {
      id: 'chm-q4',
      text: 'Which type of chemical bond is formed by the sharing of electrons between two non-metal atoms?',
      options: { A: 'Ionic bond', B: 'Covalent bond', C: 'Metallic bond', D: 'Dative bond' },
      correctAnswer: 'B',
    },
    {
      id: 'chm-q5',
      text: "According to Le Chatelier's principle, an increase in pressure on a gaseous system at equilibrium will favor the reaction that results in:",
      options: {
        A: 'A decrease in temperature',
        B: 'An increase in volume',
        C: 'A decrease in the number of molecules',
        D: 'An increase in the number of molecules',
      },
      correctAnswer: 'C',
    },
  ],
  Commerce: [
    {
      id: 'com-q1',
      text: 'The process of buying, selling, and distributing goods and services is broadly termed:',
      options: { A: 'Industry', B: 'Commerce', C: 'Marketing', D: 'Advertising' },
      correctAnswer: 'B',
    },
    {
      id: 'com-q2',
      text: 'A formal document issued by a captain of a ship acknowledging the receipt of goods for transportation is a:',
      options: {
        A: 'Bill of Lading',
        B: 'Delivery Note',
        C: 'Invoice',
        D: 'Certificate of Origin',
      },
      correctAnswer: 'A',
    },
    {
      id: 'com-q3',
      text: 'Which of the following business organizational setups possesses a separate legal entity?',
      options: {
        A: 'Sole Proprietorship',
        B: 'Partnership',
        C: 'Public Limited Company',
        D: 'Unregistered Club',
      },
      correctAnswer: 'C',
    },
    {
      id: 'com-q4',
      text: 'A market structure where there are very many buyers and sellers dealing in homogeneous products is called:',
      options: {
        A: 'Monopoly',
        B: 'Oligopoly',
        C: 'Perfect Competition',
        D: 'Monopolistic Competition',
      },
      correctAnswer: 'C',
    },
    {
      id: 'com-q5',
      text: 'Which function of commercial banks involves allowing a customer to draw more than the actual balance in their current account?',
      options: {
        A: 'Fixed Deposit',
        B: 'Bank Overdraft',
        C: 'Discounting Bills',
        D: 'Letters of Credit',
      },
      correctAnswer: 'B',
    },
  ],
  Accounting: [
    {
      id: 'acc-q1',
      text: 'Which of the following accounting concepts states that a business is treated as distinct from its owners?',
      options: {
        A: 'Going Concern Concept',
        B: 'Business Entity Concept',
        C: 'Dual Aspect Concept',
        D: 'Money Measurement Concept',
      },
      correctAnswer: 'B',
    },
    {
      id: 'acc-q2',
      text: 'The ledger account that records temporary structural reductions in asset values due to wear and tear is:',
      options: {
        A: 'Appreciation Account',
        B: 'Depreciation Account',
        C: 'Revaluation Account',
        D: 'Disposal Account',
      },
      correctAnswer: 'B',
    },
    {
      id: 'acc-q3',
      text: 'If Sales total $\\$50,000$ and Gross Profit margin is $20\\%$ of sales, what is the Cost of Goods Sold?',
      options: { A: '$\\$10,000$', B: '$\\$30,000$', C: '$\\$40,000$', D: '$\\$60,000$' },
      correctAnswer: 'C',
    },
    {
      id: 'acc-q4',
      text: 'Which of the following books of original entry is used to record items bought on credit?',
      options: { A: 'Sales Journal', B: 'Purchases Journal', C: 'Cash Book', D: 'General Journal' },
      correctAnswer: 'B',
    },
    {
      id: 'acc-q5',
      text: 'The golden rule of double-entry bookkeeping states that you should:',
      options: {
        A: 'Debit the giver and credit the receiver',
        B: 'Debit the receiver and credit the giver',
        C: 'Debit expenses and credit assets',
        D: 'Debit income and credit liabilities',
      },
      correctAnswer: 'B',
    },
  ],
  Government: [
    {
      id: 'gov-q1',
      text: 'The absolute power of a state to make and enforce laws within its territory without external interference is:',
      options: { A: 'Authority', B: 'Sovereignty', C: 'Legitimacy', D: 'Power' },
      correctAnswer: 'B',
    },
    {
      id: 'gov-q2',
      text: 'A system of government where power is constitutionally shared between a central authority and component units is called:',
      options: { A: 'Unitary System', B: 'Federal System', C: 'Confederal System', D: 'Monarchy' },
      correctAnswer: 'B',
    },
    {
      id: 'gov-q3',
      text: 'The body charged with the responsibility of registering political parties and conducting elections in Nigeria is:',
      options: { A: 'NUC', B: 'INEC', C: 'EFCC', D: 'NPC' },
      correctAnswer: 'B',
    },
    {
      id: 'gov-q4',
      text: 'The core component of the Principle of Separation of Powers is intended to prevent:',
      options: {
        A: 'Checks and balances',
        B: 'Tyranny and dictatorship',
        C: 'Rule of law',
        D: 'Political parties',
      },
      correctAnswer: 'B',
    },
    {
      id: 'gov-q5',
      text: 'Which branch of government is primarily responsible for interpreting the laws of the state?',
      options: { A: 'Executive', B: 'Legislature', C: 'Judiciary', D: 'Civil Service' },
      correctAnswer: 'C',
    },
  ],
  Literature: [
    {
      id: 'lit-q1',
      text: 'The expression "The sun greeted the flowers in the morning" is an example of which literary device?',
      options: { A: 'Metaphor', B: 'Simile', C: 'Personification', D: 'Oxymoron' },
      correctAnswer: 'C',
    },
    {
      id: 'lit-q2',
      text: 'The main or central character around whom a literary plot revolves is known as the:',
      options: { A: 'Antagonist', B: 'Protagonist', C: 'Foil', D: 'Caricature' },
      correctAnswer: 'B',
    },
    {
      id: 'lit-q3',
      text: 'A poem written in praise of a person, object, or event, often marked by serious and elevated tone, is an:',
      options: { A: 'Elegy', B: 'Epic', C: 'Ode', D: 'Ballad' },
      correctAnswer: 'C',
    },
    {
      id: 'lit-q4',
      text: 'A sudden turning point or reversal of fortune in a dramatic or narrative work is called:',
      options: { A: 'Climax', B: 'Peripeteia', C: 'Denouement', D: 'Exposition' },
      correctAnswer: 'B',
    },
    {
      id: 'lit-q5',
      text: 'What literary genre is primarily intended to be performed on stage before an audience?',
      options: { A: 'Prose fiction', B: 'Poetry', C: 'Drama', D: 'Biography' },
      correctAnswer: 'C',
    },
  ],
}
