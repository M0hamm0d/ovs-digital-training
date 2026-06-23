<script setup>
// import { useExamSession } from '../../composables/useExamSession'
import { useExamSessions } from '@/stores/useExamSessions'

const examStore = useExamSessions()

// const { currentQuestion, currentQuestionIndex, selectedAnswers, selectOption } = useExamSession()
</script>

<template>
  <div class="panel-box" v-if="examStore.currentQuestion">
    <h3 class="q-number">Question {{ examStore.currentQuestionIndex + 1 }}</h3>
    <p class="q-text">{{ examStore.currentQuestion.text }}</p>

    <div class="options-list">
      <label
        v-for="(text, key) in examStore.currentQuestion.options"
        :key="key"
        class="option-item"
        :class="{ 'selected-ui': examStore.currentQuestion.selectedAnswer === key }"
      >
        <input
          type="radio"
          :name="examStore.currentQuestion.id"
          :value="key"
          :checked="examStore.currentQuestion.selectedAnswer === key"
          @change="examStore.selectOption(key)"
        />
        <span class="option-letter">{{ key }}.</span>
        <span class="option-text">{{ text }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.panel-box {
  background: #fff;
  padding: 25px;
  border: 1px solid #dcdde1;
  height: 100%;
  min-height: 350px;
}
.q-number {
  margin-top: 0;
  color: #7f8c8d;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}
.q-text {
  font-size: 1.15rem;
  line-height: 1.6;
  margin: 15px 0;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.option-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #f1f2f6;
  border-radius: 4px;
  cursor: pointer;
}
.option-item:hover {
  background: #f8f9fa;
}
.selected-ui {
  background: #e3f2fd !important;
  border-color: #2196f3;
  font-weight: bold;
}
.option-letter {
  margin: 0 10px;
  font-weight: bold;
}
</style>
