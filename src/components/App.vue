<template>
  <Transition name="fade" appear>
    <Loading v-if="showLoading" />
  </Transition>
  <main>
    <main-card></main-card>
  </main>
  <div class="reThemeBtn" :aria-label="`切换为${theme === 'light' ? '深色' : '浅色'}主题`" @click="changeTheme">
    {{ theme === "light" ? "🔆" : "🌙" }}
  </div>
</template>

<script setup>
import MainCard from "./MainCard.vue";
import Loading from "./Loading.vue";
import { onMounted, ref } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");
const showLoading = ref(true);

onMounted(() => {
  document.body.style.overflow = "hidden";
  document.body.setAttribute("theme", theme.value);
  
  showLoading.value = false;
  setTimeout(() => {
    document.body.style.overflow = "";
  }, 300);
});

const changeTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  onTheme(theme.value);
};

const onTheme = (newTheme) => {
  document.body.setAttribute("theme", newTheme);
  localStorage.setItem("theme", newTheme);
};
</script>

<style>
@import '../styles/index.css';
</style>
