<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { Icon } from "@iconify/vue";

const hitokoto = ref("加载中...");
const nextHitokoto = ref(null); // 存储下一条要显示的内容

// 打字机相关状态
const displayedText = ref("");
const showCursor = ref(true);
const currentIndex = ref(0);
const isDeleting = ref(false);

const typingSpeed = 150;
const deletingSpeed = 100;
const delayAfterTyping = 2000;
const delayAfterDeleting = 150;

let timeoutId = null;
let intervalId = null;

// 获取一言数据
const fetchHitokoto = async () => {
  try {
    const response = await fetch('https://international.v1.hitokoto.cn/?c=d&c=h&c=i');
    const data = await response.json();
    // 将新内容存入中间变量，而不是直接更新显示
    nextHitokoto.value = data.hitokoto || "智慧需要沉淀，积累才能够饱满。";
  } catch (error) {
    console.error('获取一言失败:', error);
    nextHitokoto.value = "智慧需要沉淀，积累才能够饱满。"; // 默认内容
  }
};

// 打字动画逻辑
const typeText = () => {
  const textToType = hitokoto.value;

  if (!isDeleting.value) {
    if (currentIndex.value < textToType.length) {
      displayedText.value += textToType.charAt(currentIndex.value);
      currentIndex.value++;
      timeoutId = setTimeout(typeText, typingSpeed);
    } else {
      // 打字完成，准备删除
      timeoutId = setTimeout(() => {
        isDeleting.value = true;
        typeText();
      }, delayAfterTyping);
    }
  } else {
    if (currentIndex.value > 0) {
      displayedText.value = textToType.substring(0, currentIndex.value - 1);
      currentIndex.value--;
      timeoutId = setTimeout(typeText, deletingSpeed);
    } else {
      isDeleting.value = false;

      // 删除完成，触发更新逻辑
      handleTypingComplete();

      // 重置索引，准备开始新的打字
      currentIndex.value = 0;
      timeoutId = setTimeout(typeText, delayAfterDeleting);
    }
  }
};

// 在删除完成后更新显示内容
const handleTypingComplete = () => {
  // 如果有新内容，则更新显示
  if (nextHitokoto.value) {
    hitokoto.value = nextHitokoto.value;
    nextHitokoto.value = null;
    displayedText.value = ""; // 重置显示文本
  }
  // 获取下一条内容
  fetchHitokoto();
};

onMounted(() => {
  // 加载一言数据
  fetchHitokoto();
  
  // 启动打字动画
  typeText();

  // 光标闪烁
  intervalId = setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
    <div class="Hitokoto card">
        <h3 style="margin: 0 0 5px 0;">
            <Icon icon="fluent-color:chat-48" /> 一言
        </h3>
        <div class="quote-top">
            <Icon icon="carbon:quotes" width="16" height="16" />
        </div>
        <div class="quote-content">
            <div class="typewriter">
                <span>{{ displayedText }}</span>
                <span class="cursor" :class="{ blink: showCursor }">|</span>
            </div>
        </div>
        <div class="quote-bottom">
            <Icon icon="ph:quotes-fill" width="16" height="16" />
        </div>
    </div>
</template>

<style scoped>
.Hitokoto {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
}

.card {
  min-height: 154px !important;
}

.quote-top {
  align-self: flex-start;
  padding: 0 0 0 10px;
}

.quote-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
}

.quote-bottom {
  align-self: flex-end;
  padding: 0 10px 0 0;
}

.typewriter {
  font-family: monospace;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
}

.cursor {
  font-weight: bolder;
  margin-left: 2px;
  opacity: 1;
  transition: opacity 0.1s;
}

.cursor.blink {
  opacity: 0;
}
</style>