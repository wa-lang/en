<script setup lang="ts">
import { COMMUNITIES, CONTRIBUTORS, FRIENDLY_LINK } from '../constants'
</script>

<template>
  <div class="content">
    <div class="title">
      Contributors
    </div>
    <div class="list">
      <div v-for="(ctr, idx) in CONTRIBUTORS" :key="idx" class="card">
        <span class="card__name">{{ ctr.name }}</span>
        <span class="card__points">Contribution points: {{ ctr.points }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 2rem;
  margin-top: 60px;
}

.list {
  display: grid;
  gap: 16px;
  margin: 0 auto;
  max-width: 1152px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}

.card {
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  text-align: center;
}

.card__name {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text);
}

.card__points {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.card__logo {
  height: 34px;
  margin: 0 auto;
}

.title {
  margin: 16px 0 32px;
  color: #909AA3;
  padding-top: 24px;
  letter-spacing: -.02em;
  line-height: 32px;
  font-size: 24px;
  text-align: center;
}
</style>
