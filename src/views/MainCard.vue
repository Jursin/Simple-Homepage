<template>
  <div class="mainCard">
    <div class="header">
      <div class="avatar" :emjoi="config.emjoi">
        <img :src="config.avatarUrl" alt="" />
      </div>

      <div class="sayHi">
        <h1>
          Hi, I'm
          <span class="name" :data-text="config.name">
            {{ config.name }}
          </span>
        </h1>

        <div class="infoTags">
          <div v-if="config.infoTags.sex === '男'" class="tag hover">
            <span class="boy"> ♂ </span>
          </div>
          <div v-else-if="config.infoTags.sex === '女'" class="tag hover">
            <span class="girl"> ♀ </span>
          </div>
          <div v-else class="tag hover">
            {{ config.infoTags.sex }}
          </div>
          <div class="tag hover"><Icon icon="mdi:location" width="16" height="16" /> {{ config.infoTags.province }}</div>
          <div class="tag hover"><Icon icon="ep:school" width="16" height="16" /> {{ config.infoTags.school }}</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="leftBox">
          <!-- 打字机卡片 -->
          <div class="typew card">
            <h3 style="margin: 0 0 5px 0;"><Icon icon="fluent-color:chat-48" /> 一言</h3>
            <div class="quote-top">
              <Icon icon="carbon:quotes" width="16" height="16" />
            </div>
            <div class="quote-content">
                <Typewriter :text="hitokoto" @typingComplete="handleTypingComplete" />
              </div>
            <div class="quote-bottom">
              <Icon icon="ph:quotes-fill" width="16" height="16" />
            </div>
          </div>

        <!-- 时间显示 -->
        <div class="card" style="padding: 25px 16px;" >
          <div class="time-progress">
            <h3><Icon icon="noto:hourglass-not-done" /> Wakatime 周统计</h3>
            <img src="https://github-readme-stats-indol-phi-94.vercel.app/api/wakatime?username=Jursin&card_width=400&hide_title=true&theme=transparent&locale=cn" alt="wakatime">
          </div>
        </div>
      </div>

      <div class="rightBox">
        <div class="card">
          <p>你好呀，很高兴认识你👋</p>
          <p>
            我是
            <b>{{ config.name }}</b>
            （ {{ config.age }}年的 <b class="zodiac">{{ config.zodiac }}</b> ），
            是一名
            <span v-for="(i, index) in config.professions" :key="index">
              <b>{{ i }}</b>
              <span v-if="index < config.professions.length - 1">、</span>
            </span>
          </p>

          <!-- 技术栈 -->
          <h3>🫡使用的技术栈</h3>
          <ItemGrid :items="techStack.techStack" />
          
          <h3>🛠️使用的编程工具</h3>
          <ItemGrid :items="devTools.devTools" />

          <h3>☁️使用的云服务平台</h3>
          <ItemGrid :items="cloudPlatforms.cloudPlatforms" />
        </div>

        <!-- 外链按钮 -->
        <div class="linkBox card">
          <link-btn
            v-for="(i, index) in linkBtns.linkBtn"
            :key="index"
            :icon="i.icon"
            :text="i.text"
            :color="i.color"
            :url="i.url"
          ></link-btn>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>
        <img src="/miit.ico"><a href="http://beian.miit.gov.cn/" target="_blank" >鄂ICP备2025157296号-1</a> | 版权所有 © 2025 Jursin
      </p>
    </div>
  </div>
</template>

<script setup>
import config from "../config/config.json";
import linkBtns from "../config/linkBtn.json";
import techStack from "../config/techStack.json";
import devTools from "../config/devTools.json";
import cloudPlatforms from "../config/cloudPlatforms.json";
import { Icon } from "@iconify/vue";
import LinkBtn from "../components/LinkBtn.vue";
import ItemGrid from "../components/ItemGrid.vue";
import { onMounted, ref } from "vue";
import Typewriter from "../components/Typewriter.vue";

const now = ref(new Date());
const hitokoto = ref("加载中...");
const nextHitokoto = ref(null); // 存储下一条要显示的内容

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

// 在删除完成后更新显示内容
const handleTypingComplete = () => {
  // 如果有新内容，则更新显示
  if (nextHitokoto.value) {
    hitokoto.value = nextHitokoto.value;
    nextHitokoto.value = null;
  }
  // 获取下一条内容
  fetchHitokoto();
};

onMounted(() => {
  setInterval(() => {
    now.value = new Date();
  }, 1000);
  
  // 加载一言数据
  fetchHitokoto();
});
</script>

<style>
@import url(../assets/css/MainCard.css);
</style>
