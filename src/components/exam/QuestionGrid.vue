<script setup>
import { storeToRefs } from 'pinia'
import { useExamSessions } from '@/stores/useExamSessions' // Adjust matching path to your store file

const examStore = useExamSessions()
const { currentSubject, currentQuestionIndex, flaggedQuestions } = storeToRefs(examStore)

const getGridClass = (question, index) => {
  if (currentQuestionIndex.value === index) return 'active'
  if (flaggedQuestions.value[question.id]) return 'flagged'
  if (question.selectedAnswer) return 'answered'
  return 'unanswered'
}
</script>

<template>
  <div class="grid-card" v-if="currentSubject">
    <h4>Question Navigator</h4>
    <div class="matrix">
      <button
        v-for="(q, idx) in currentSubject.questions"
        :key="q.id"
        class="grid-tile"
        :class="getGridClass(q, idx)"
        @click="currentQuestionIndex = idx"
      >
        {{ idx + 1 }}
      </button>
    </div>

    <div class="legend">
      <div><span class="dot active"></span> Current</div>
      <div><span class="dot answered"></span> Answered</div>
      <!-- <div><span class="dot flagged"></span> Flagged</div> -->
    </div>
  </div>
</template>

<style scoped>
.grid-card {
  background: #fff;
  padding: 15px;
  border: 1px solid #dcdde1;
}
.matrix {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
}
.grid-tile {
  padding: 10px 0;
  font-weight: bold;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
}

.active {
  background: #2c3e50 !important;
  color: #fff;
}
.answered {
  background: #2ecc71;
  color: #fff;
  border-color: #27ae60;
}
.flagged {
  background: #e74c3c;
  color: #fff;
  border-color: #c0392b;
}
.unanswered {
  background: #f5f6fa;
  color: #2f3640;
}
.legend {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  font-size: 0.85rem;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding-top: 10px;
}
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
}
</style>
