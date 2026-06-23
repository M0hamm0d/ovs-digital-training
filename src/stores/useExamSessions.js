import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { SUBJECT_MAPS, REAL_QUESTIONS } from '../questionBank'
import router from '@/router'

export const useExamSessions = defineStore(
  'examSession',
  () => {
    const currentStream = ref(null)
    const examData = ref({ subjects: [] })
    const currentSubjectIndex = ref(0)
    const currentQuestionIndex = ref(0)
    const flaggedQuestions = ref({})
    const showSubmitModal = ref(false)
    const timeRemaining = ref(180)

    const currentSubject = computed(() => {
      return examData.value.subjects?.[currentSubjectIndex.value] || null
    })

    const currentQuestion = computed(() => {
      return currentSubject.value?.questions?.[currentQuestionIndex.value] || null
    })

    const setStream = (stream) => {
      const validStream = SUBJECT_MAPS[stream] ? stream : 'science'
      currentStream.value = validStream

      const targetSubjects = SUBJECT_MAPS[validStream]

      const subjects = targetSubjects.map((subjectName, sIdx) => {
        const rawQuestions = REAL_QUESTIONS[subjectName] || []

        return {
          id: `sub-${validStream}-${sIdx}`,
          name: subjectName,
          questions: rawQuestions.map((q, qIdx) => ({
            id: q.id || `q-${validStream}-${sIdx}-${qIdx}`,
            text: q.text,
            options: q.options,
            selectedAnswer: null,
          })),
        }
      })

      examData.value.subjects = subjects
      currentSubjectIndex.value = 0
      currentQuestionIndex.value = 0
      flaggedQuestions.value = {}
      showSubmitModal.value = false
    }

    const nextQuestion = () => {
      if (!currentSubject.value) return

      if (currentQuestionIndex.value < currentSubject.value.questions.length - 1) {
        currentQuestionIndex.value++
      } else if (currentSubjectIndex.value < examData.value.subjects.length - 1) {
        currentSubjectIndex.value++
        currentQuestionIndex.value = 0
      }
    }

    const prevQuestion = () => {
      if (!currentSubject.value) return

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
      currentQuestion.value.selectedAnswer = option
    }

    const toggleFlag = () => {
      if (!currentQuestion.value) return
      const qId = currentQuestion.value.id
      flaggedQuestions.value[qId] = !flaggedQuestions.value[qId]
    }

    const reverseOption = () => {
      if (!currentQuestion.value) return
      currentQuestion.value.selectedAnswer = null
    }

    const triggerSubmit = () => {
      showSubmitModal.value = true
    }

    const closeSubmitModal = () => {
      showSubmitModal.value = false
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

    const resetExam = () => {
      currentStream.value = null
      examData.value.subjects = []
      currentSubjectIndex.value = 0
      currentQuestionIndex.value = 0
      flaggedQuestions.value = {}
      showSubmitModal.value = false
      timeRemaining.value = 180
    }

    return {
      currentStream,
      examData,
      currentSubjectIndex,
      currentQuestionIndex,
      timeRemaining,
      flaggedQuestions,
      showSubmitModal,
      currentSubject,
      currentQuestion,
      currentSubject,
      setStream,
      nextQuestion,
      prevQuestion,
      selectOption,
      toggleFlag,
      reverseOption,
      triggerSubmit,
      closeSubmitModal,
      handleKeyboard,
      resetExam,
    }
  },
  {
    persist: true,
  },
)
