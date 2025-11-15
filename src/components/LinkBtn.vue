<template>
  <a
    class="linkBtn hover"
    :href="url ? url : '#'"
    target="_blank"
    :style="{ background: color }"
  >
    <Icon :icon="icon" width="30" height="30" />
    <span>{{ text }}</span>
  </a>
</template>
<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: String,
  text: String,
  color: String,
  url: String,
});
</script>
<style>
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

  & span {
    margin-left: 0.5rem;
  }
}
</style>
