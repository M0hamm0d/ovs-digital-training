<!-- <script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// import { useExamSession } from '../composables/useExamSession'
import ExamTimer from '../components/exam/ExamTimer.vue'
import SubjectTabs from '../components/exam/SubjectTabs.vue'
import QuestionPanel from '../components/exam/QuestionPanel.vue'
import QuestionGrid from '../components/exam/QuestionGrid.vue'
import { useExamSessions } from '@/stores/useExamSessions'
function submittedClicked() {
  router.push('/')
}

const examStore = useExamSessions()
onMounted(() => window.addEventListener('keydown', examStore.handleKeyboard))
onUnmounted(() => window.removeEventListener('keydown', examStore.handleKeyboard))
</script> -->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ExamTimer from '../components/exam/ExamTimer.vue'
import SubjectTabs from '../components/exam/SubjectTabs.vue'
import QuestionPanel from '../components/exam/QuestionPanel.vue'
import QuestionGrid from '../components/exam/QuestionGrid.vue'
import { useExamSessions } from '@/stores/useExamSessions'

const router = useRouter()
const examStore = useExamSessions()

// Intercept tab closing, reloading, or F5 keys
const handleBeforeUnload = (e) => {
  e.preventDefault()
  e.returnValue = '' // Required by modern browsers to trigger the dialog box
}

function submittedClicked() {
  // 1. Remove the event listener first so the user can leave cleanly
  window.removeEventListener('beforeunload', handleBeforeUnload)

  // 2. Clear out the exam state since they have submitted
  examStore.resetExam()

  // 3. Route away safely
  router.push('/')
}

onMounted(() => {
  window.addEventListener('keydown', examStore.handleKeyboard)
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onUnmounted(() => {
  window.removeEventListener('keydown', examStore.handleKeyboard)
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>
<template>
  <div class="exam-layout">
    <!-- Top Bar Structure -->
    <header class="exam-header">
      <div class="user-meta">
        <strong>Candidate:</strong> Olokiki Training Student | <strong>Reg No:</strong> 2026884192XX
      </div>
      <ExamTimer />
    </header>
    <SubjectTabs />

    <div class="workspace-split">
      <main class="left-workspace">
        <QuestionPanel />
      </main>
      <aside class="right-workspace">
        <QuestionGrid />
      </aside>
    </div>

    <!-- Bottom Actions Controls Footer -->
    <footer class="control-footer">
      <button class="footer-btn action-prev" @click="examStore.prevQuestion">Previous (P)</button>
      <!-- <button class="footer-btn action-flag" @click="toggleFlag">Flag Question (F)</button> -->
      <button class="footer-btn action-next" @click="examStore.nextQuestion">Next (N)</button>
      <button class="footer-btn action-submit" @click="examStore.triggerSubmit">
        Submit Exam (S)
      </button>
    </footer>
    <div v-if="examStore.showSubmitModal" class="modal-overlay">
      <div class="modal-card">
        <h3>Are you sure you want to end your exam?</h3>
        <p>
          Press <strong>Y</strong> on your keyboard to Submit, or click
          <strong>Return (R)</strong> to go back.
        </p>
        <div class="modal-actions">
          <button class="modal-btn confirm" @click="submittedClicked">Yes, Submit (Y)</button>
          <button class="modal-btn cancel" @click="examStore.closeSubmitModal">
            Return to Exam (R)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exam-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f8f9fa;
  font-family: system-ui, sans-serif;
}
.exam-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-bottom: 1px solid #dcdde1;
}
.workspace-split {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 15px;
  padding: 15px;
  flex-grow: 1;
  overflow: hidden;
}
.left-workspace,
.right-workspace {
  overflow-y: auto;
}
.control-footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #fff;
  border-top: 1px solid #dcdde1;
  gap: 10px;
}
.footer-btn {
  padding: 12px 24px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.action-prev {
  background: #7f8c8d;
  color: white;
}
.action-next {
  background: #2980b9;
  color: white;
}
.action-flag {
  background: #f39c12;
  color: white;
}
.action-submit {
  background: #d63031;
  color: white;
  margin-left: auto;
}
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  max-width: 450px;
}
.modal-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}
.modal-btn {
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.confirm {
  background: #2ecc71;
  color: white;
}
.cancel {
  background: #7f8c8d;
  color: white;
}
</style>
