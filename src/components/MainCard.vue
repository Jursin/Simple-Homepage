<template>
  <div class="mainCard">
    <div class="header">
      <div class="avatar" :emjoi="profile.emjoi">
        <img :src="profile.avatarUrl" alt="avatar" />
      </div>

      <div class="sayHi">
        <h1>
          Hi, I'm
          <span class="name" :data-text="profile.name">
            {{ profile.name }}
          </span>
        </h1>

        <div class="infoTags">
          <div v-if="profile.infoTags.sex === '男'" class="tag hover">
            <span class="boy"> ♂ </span>
          </div>
          <div v-else-if="profile.infoTags.sex === '女'" class="tag hover">
            <span class="girl"> ♀ </span>
          </div>
          <div v-else class="tag hover">
            {{ profile.infoTags.sex }}
          </div>
          <div class="tag hover"><Icon icon="mdi:location" width="16" height="16" /> {{ profile.infoTags.province }}</div>
          <div class="tag hover"><Icon icon="ep:school" width="16" height="16" /> {{ profile.infoTags.school }}</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="leftBox">
        <!-- 一言卡片 -->
        <HitokotoCard />

        <!-- Wakatime 卡片 -->
        <WakatimeCard />
      </div>

      <div class="rightBox">
        <div class="card">
          <p>你好呀，很高兴认识你👋</p>
          <p>
            我是
            <b>{{ profile.name }}</b>
            （ {{ profile.age }}年的 <b class="zodiac">{{ profile.zodiac }}</b> ），
            是一名
            <span v-for="(i, index) in profile.professions" :key="index">
              <b>{{ i }}</b>
              <span v-if="index < profile.professions.length - 1">、</span>
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
        <LinkBox :linkBtns="linkBtns.linkBtn" />
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
import profile from "../config/profile.json";
import linkBtns from "../config/linkBtn.json";
import techStack from "../config/techStack.json";
import devTools from "../config/devTools.json";
import cloudPlatforms from "../config/cloudPlatforms.json";
import { Icon } from "@iconify/vue";
import LinkBox from "./widgets/LinkBox.vue";
import ItemGrid from "./widgets/ItemGrid.vue";
import HitokotoCard from "./widgets/HitokotoCard.vue";
import WakatimeCard from "./widgets/WakatimeCard.vue";
</script>

<style>
@import url(../styles/index.css);
</style>
