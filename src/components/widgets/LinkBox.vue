<template>
  <div class="linkBox card">
    <a
      v-for="(i, index) in linkBtns"
      :key="index"
      class="linkBtn hover"
      :href="i.url ? i.url : '#'"
      target="_blank"
      :style="{ background: i.color }"
    >
      <Icon :icon="i.icon" width="30" height="30" />
      <span>{{ i.text }}</span>
    </a>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  linkBtns: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.linkBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}

.linkBox :deep(a::before) {
  display: none;
}

.linkBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 30px;
  border-radius: 16px;
  padding: 0.5rem 0.7rem;
  margin: 0.5rem 0;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.linkBtn:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.linkBtn span {
  margin-left: 0.5rem;
}

.linkBtn::before {
  display: none;
}

@media (max-width: 768px) {
  .linkBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: stretch;
  }

  .linkBtn {
    width: 40%;
  }
}
</style>
