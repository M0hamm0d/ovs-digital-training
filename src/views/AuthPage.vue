<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useExamSession } from '../composables/useExamSession'
import { useExamSessions } from '@/stores/useExamSessions'

const router = useRouter()
// const { setStream } = useExamSession()

const jambRegNumber = ref('')
const accessCode = ref('')
const loading = ref(false)
const showStreamModal = ref(false)
const examStore = useExamSessions()

const STREAM_MAP = {
  science: ['Mathematics', 'English Language', 'Physics', 'Chemistry'],
  commercial: ['Mathematics', 'English Language', 'Commerce', 'Accounting'],
  art: ['Mathematics', 'English Language', 'Government', 'Literature'],
}

function proceedToStart() {
  if (!jambRegNumber.value || !accessCode.value) {
    alert('Please fill in both fields.')
    return
  }
  loading.value = true
  setTimeout(() => {
    loading.value = false
    if (jambRegNumber.value === '1234AB' && accessCode.value === '1234') {
      showStreamModal.value = true
    } else {
      alert('Invalid JAMB Registration Number or Access Code.')
    }
  }, 800)
}

function startExamWithStream(stream) {
  examStore.setStream(stream)
  router.push('/exam')
}

function closeStreamModal() {
  showStreamModal.value = false
}
</script>
<template>
  <div class="background-wrapper">
    <div class="login-card">
      <h2>JAMB CBT Simulator</h2>

      <form>
        <div class="input-group">
          <input v-model="jambRegNumber" type="text" placeholder="JAMB Registration Number" />
        </div>

        <div class="input-group">
          <input v-model="accessCode" type="password" placeholder="Exam Access Code / PIN" />
        </div>

        <button @click="proceedToStart" :disabled="loading" class="primary-button">
          {{ loading ? 'Processing...' : 'Login to Start' }}
        </button>
      </form>
      <div v-if="showStreamModal" class="stream-overlay">
        <div class="stream-card">
          <h3>Select your stream</h3>
          <p class="muted">Choose the subject combination for your exam.</p>

          <div class="stream-options">
            <button class="stream-option" @click="startExamWithStream('science')">
              <div class="stream-title">Science</div>
              <div class="stream-list">{{ STREAM_MAP.science.join(' • ') }}</div>
            </button>

            <button class="stream-option" @click="startExamWithStream('commercial')">
              <div class="stream-title">Commercial</div>
              <div class="stream-list">{{ STREAM_MAP.commercial.join(' • ') }}</div>
            </button>

            <button class="stream-option" @click="startExamWithStream('art')">
              <div class="stream-title">Art</div>
              <div class="stream-list">{{ STREAM_MAP.art.join(' • ') }}</div>
            </button>
          </div>

          <button class="stream-cancel" @click="closeStreamModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.background-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f6f7fd;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.login-card {
  background-color: white;
  width: 90%;
  max-width: 460px;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 35px;
  color: #1a1a1a;
}

.input-group {
  margin-bottom: 12px;
}

input {
  width: 100%;
  padding: 16px 18px;
  background-color: #f1f3f8;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  color: #333;
  transition: background-color 0.2s;
}

input::placeholder {
  color: #7d8495;
  opacity: 1;
}

input:focus {
  outline: none;
  background-color: #eaedf5;
}

.primary-button {
  width: 100%;
  padding: 16px;
  margin-top: 15px;
  background-color: #212121;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
}

.primary-button:hover {
  background-color: #333;
}

/* Stream selection modal styles */
.stream-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(23, 23, 23, 0.45);
}
.stream-card {
  background: #fff;
  width: 92%;
  max-width: 720px;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 20px 50px rgba(8, 17, 34, 0.18);
  text-align: left;
}
.stream-card h3 {
  margin: 0 0 6px 0;
  color: #1a1a1a;
}
.muted {
  color: #6b7280;
  margin-bottom: 18px;
}
.stream-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.stream-option {
  background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  border: 1px solid #e6eef8;
  padding: 18px;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease;
}
.stream-option:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(33, 37, 41, 0.08);
}
.stream-title {
  font-weight: 700;
  color: #212121;
  margin-bottom: 8px;
}
.stream-list {
  color: #4b5563;
  font-size: 0.95rem;
}
.stream-cancel {
  margin-top: 18px;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 10px 12px;
}

@media (max-width: 640px) {
  .stream-options {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- <template>
  <div class="auth-container">
    <h2>{{ isLogin ? 'Student Login' : 'Create Student Account' }}</h2>

    <form @submit.prevent="handleAuth">
      <div v-if="!isLogin">
        <input v-model="fullName" type="text" placeholder="Full Name" required />
        <input v-model="phoneNumber" type="text" placeholder="Phone Number" />
        <input v-model="schoolName" type="text" placeholder="School Name" />
      </div>

      <input v-model="email" type="email" placeholder="Email Address" required />
      <input v-model="password" type="password" placeholder="Password" required />

      <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
    </form>

    <p @click="isLogin = !isLogin">
      {{ isLogin ? 'New user? Register here' : 'Already have an account? Login' }}
    </p>
  </div>
</template>

<style scoped>
/* Add simple styling to center the box and style input fields */
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
p {
  color: blue;
  cursor: pointer;
  margin-top: 15px;
}
</style> -->
