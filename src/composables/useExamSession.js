import router from '@/router'
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 1. Shared Reactive States
const currentSubjectIndex = ref(0)
const currentQuestionIndex = ref(0)
const timeRemaining = ref(180)
const showSubmitModal = ref(false)

// Mock Data structure mirroring your database relationships
const examData = ref({
  subjects: [
    {
      id: 'sub-1',
      name: 'English Language',
      questions: [
        {
          id: 'eng-1',
          text: 'Choose the option nearest in meaning: The manager acted with aplomb.',
          options: { A: 'Pride', B: 'Confidence', C: 'Hesitation', D: 'Anger' },
        },
        {
          id: 'eng-2',
          text: 'Complete the sentence: Neither the teacher nor the students ______ present.',
          options: { A: 'was', B: 'were', C: 'is', D: 'are' },
        },
        {
          id: 'eng-3',
          text: 'Select the correct past tense: She ____ to the market yesterday.',
          options: { A: 'go', B: 'goes', C: 'went', D: 'gone' },
        },
      ],
    },
    {
      id: 'sub-2',
      name: 'Mathematics',
      questions: [
        {
          id: 'math-1',
          text: 'Solve for x: 2x + 5 = 15',
          options: { A: '5', B: '10', C: '15', D: '20' },
        },
        {
          id: 'math-2',
          text: 'What is the derivative of f(x)=x^2?',
          options: { A: 'x', B: '2x', C: 'x^2', D: '2' },
        },
        {
          id: 'math-3',
          text: 'Simplify: (3/4) + (1/4)',
          options: { A: '1/2', B: '1', C: '3/4', D: '4/4' },
        },
      ],
    },
    {
      id: 'sub-3',
      name: 'Physics',
      questions: [
        {
          id: 'phy-1',
          text: 'What is the SI unit of force?',
          options: { A: 'Newton', B: 'Joule', C: 'Watt', D: 'Pascal' },
        },
        {
          id: 'phy-2',
          text: 'Which law explains action and reaction?',
          options: { A: 'First law', B: 'Second law', C: 'Third law', D: 'Law of gravitation' },
        },
        {
          id: 'phy-3',
          text: 'What quantity is measured in volts?',
          options: { A: 'Current', B: 'Voltage', C: 'Resistance', D: 'Power' },
        },
      ],
    },
    {
      id: 'sub-4',
      name: 'Chemistry',
      questions: [
        {
          id: 'chem-1',
          text: 'What is Avogadro number associated with?',
          options: { A: 'Mass', B: 'Mole', C: 'Volume', D: 'Pressure' },
        },
        {
          id: 'chem-2',
          text: 'pH of a neutral solution is?',
          options: { A: '0', B: '7', C: '14', D: '1' },
        },
        {
          id: 'chem-3',
          text: 'Which is a noble gas?',
          options: { A: 'Oxygen', B: 'Nitrogen', C: 'Helium', D: 'Hydrogen' },
        },
      ],
    },
  ],
})

const selectedAnswers = ref({})
const flaggedQuestions = ref({})

export function useExamSession() {
  const currentSubject = computed(() => examData.value.subjects[currentSubjectIndex.value])
  const currentQuestion = computed(
    () => currentSubject.value?.questions[currentQuestionIndex.value],
  )

  const nextQuestion = () => {
    if (currentQuestionIndex.value < currentSubject.value.questions.length - 1) {
      currentQuestionIndex.value++
    } else if (currentSubjectIndex.value < examData.value.subjects.length - 1) {
      currentSubjectIndex.value++
      currentQuestionIndex.value = 0
    }
  }

  const prevQuestion = () => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    } else if (currentSubjectIndex.value > 0) {
      currentSubjectIndex.value--
      currentQuestionIndex.value =
        examData.value.subjects[currentSubjectIndex.value].questions.length - 1
    }
  }

  const selectOption = (option) => {
    if (!currentQuestion.value) return
    selectedAnswers.value[currentQuestion.value.id] = option
  }

  const toggleFlag = () => {
    if (!currentQuestion.value) return
    const qId = currentQuestion.value.id
    flaggedQuestions.value[qId] = !flaggedQuestions.value[qId]
  }

  const reverseOption = () => {
    if (!currentQuestion.value) return
    delete selectedAnswers.value[currentQuestion.value.id]
  }

  const triggerSubmit = () => {
    router.push('/')
  }

  const closeSubmitModal = () => {
    showSubmitModal.value = false
  }

  // Initialize exam subjects based on chosen stream (science | commercial | art)
  const setStream = (stream) => {
    const map = {
      science: ['Mathematics', 'English Language', 'Physics', 'Chemistry'],
      commercial: ['Mathematics', 'English Language', 'Commerce', 'Accounting'],
      art: ['Mathematics', 'English Language', 'Government', 'Literature'],
    }

    const subjects = (map[stream] || map.science).map((name, sIdx) => {
      const questions = Array.from({ length: 3 }).map((_, qIdx) => ({
        id: `q-${stream}-${sIdx}-${qIdx + 1}`,
        text: `Sample ${name} question ${qIdx + 1}: Choose the best answer.`,
        options: {
          A: 'Option A',
          B: 'Option B',
          C: 'Option C',
          D: 'Option D',
        },
      }))

      return {
        id: `sub-${stream}-${sIdx}`,
        name,
        questions,
      }
    })

    examData.value.subjects = subjects
    currentSubjectIndex.value = 0
    currentQuestionIndex.value = 0
  }

  const handleKeyboard = (e) => {
    const key = e.key.toUpperCase()
    if (showSubmitModal.value) {
      if (key === 'Y') alert('Exam finalized and recorded successfully!')
      if (key === 'R') closeSubmitModal()
      return
    }

    if (['A', 'B', 'C', 'D'].includes(key)) selectOption(key)
    else if (key === 'N') nextQuestion()
    else if (key === 'P') prevQuestion()
    else if (key === 'F') toggleFlag()
    else if (key === 'R') reverseOption()
    else if (key === 'S') triggerSubmit()
  }

  return {
    examData,
    currentSubjectIndex,
    currentQuestionIndex,
    currentSubject,
    currentQuestion,
    timeRemaining,
    selectedAnswers,
    flaggedQuestions,
    showSubmitModal,
    nextQuestion,
    prevQuestion,
    selectOption,
    toggleFlag,
    triggerSubmit,
    closeSubmitModal,
    setStream,
    handleKeyboard,
  }
}
