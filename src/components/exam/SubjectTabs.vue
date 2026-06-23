<script setup>
import { useExamSessions } from '@/stores/useExamSessions'

const examStore = useExamSessions()
// const { examData, currentSubjectIndex, currentQuestionIndex } = examStore()

const switchSubject = (index) => {
  console.log('Switching to subject:', index)
  examStore.currentSubjectIndex = index
  examStore.currentQuestionIndex = 0 // Reset grid context view to first item
}
</script>

<template>
  <div class="tabs-container">
    <!-- <p>{{ examStore.examData }} exam store</p> -->
    <button
      v-for="(subject, index) in examStore.examData.subjects"
      :key="subject.id"
      class="tab-btn"
      :class="{ 'active-tab': examStore.currentSubjectIndex === index }"
      @click="switchSubject(index)"
    >
      {{ subject.name }}
    </button>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  background: #2c3e50;
  padding: 5px 5px 0 5px;
  gap: 4px;
}
.tab-btn {
  background: #34495e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
}
.active-tab {
  background: #ecf0f1;
  color: #2c3e50;
}
</style>
