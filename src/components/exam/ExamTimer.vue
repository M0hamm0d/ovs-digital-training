<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
// import { useExamSession } from '../../composables/useExamSession'
import { useExamSessions } from '@/stores/useExamSessions'
import router from '@/router'
const examStore = useExamSessions()
// const { timeRemaining, triggerSubmit } = useExamSession()

let intervalId = null

const formattedTime = computed(() => {
  const hours = Math.floor(examStore.timeRemaining / 3600)
    .toString()
    .padStart(2, '0')
  const minutes = Math.floor((examStore.timeRemaining % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (examStore.timeRemaining % 60).toString().padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
})

const isTimeCritical = computed(() => examStore.timeRemaining < 30)

onMounted(() => {
  intervalId = setInterval(() => {
    if (examStore.timeRemaining > 0) {
      examStore.timeRemaining--
    } else {
      clearInterval(intervalId)
      examStore.resetExam()
      router.push('/')
      // examStore.triggerSubmit()
    }
  }, 1000)
})

onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <div class="timer-box" :class="{ 'critical-red': isTimeCritical }">
    <span class="label">Time Remaining:</span>
    <span class="clock">{{ formattedTime }}</span>
  </div>
</template>

<style scoped>
.timer-box {
  font-family: monospace;
  padding: 8px 15px;
  border: 2px solid #ccc;
  background: #f9f9f9;
  font-size: 1.2rem;
  font-weight: bold;
}
.critical-red {
  border-color: #dc3545;
  background: #fdf2f2;
  color: #dc3545;
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
