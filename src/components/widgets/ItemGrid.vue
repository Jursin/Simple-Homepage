<template>
  <div class="itemGrid">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="gridItem"
      :data-name="item.name"
    >
      <template v-if="item.custom">
        <!-- 自定义SVG图标 -->
        <svg width="40" height="40" viewBox="0 0 24 24" :fill="item.fill || 'currentColor'">
          <path :d="item.svg" :fill="item.fill || 'currentColor'"/>
        </svg>
      </template>
      <template v-else>
        <!-- 普通图标 -->
        <Icon :icon="item.icon" width="40" height="40" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.itemGrid {
  display: flex;
  flex-wrap: wrap;
}

.gridItem {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--techItem-background);
  border: 2px solid var(--card-border-color);
  position: relative;
  margin: 0 0.2rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.gridItem::before {
  content: attr(data-name);
  position: absolute;
  top: -1.5rem;
  left: 50%;
  color: var(--tip-color);
  font-size: 14px;
  background: #2d2d2d;
  width: max-content;
  padding: 0 5px;
  text-align: center;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  transform: translate(-50%, 20px);
  opacity: 0;
}

.gridItem:hover::before {
  transform: translate(-50%, 0);
  opacity: 1;
}
</style>
