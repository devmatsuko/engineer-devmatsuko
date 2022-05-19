<script setup lang="ts">
import { ref } from "vue";
import ProfileImage from "../components/ProfileImage.vue"
import { AcademicCapIcon } from '@heroicons/vue/solid'

// カルーセル用のプロフィール画像
const images = ref([
  { id: 1, src: "src/assets/profile/my_profile_image1.jpg" },
  { id: 2, src: "src/assets/profile/my_profile_image2.jpg" },
  { id: 3, src: "src/assets/profile/my_profile_image3.jpg" },
]);
</script>

<template>
  <section id="about" class="py-5">
    <h1 class="font-bold">About me</h1>
    <ProfileImage :images="images"></ProfileImage>
    <h2>小松 真也（Shinya Komatsu）</h2>
    <div class="container">
      <div class="icon">
        <span class="text-xl"><AcademicCapIcon class="h-8 w-8 inline"></AcademicCapIcon> 自己紹介・経歴</span>
      </div>
      <div class="pt-3">
        <p>30歳エンジニア。趣味で10年ほどマジシャンもしていますので宴会芸はお任せください！</p>
        <p>2017年に同志社大学大学院 理工学研究科 情報工学専攻を修了。</p>
        <p>2017年から3年間、教育市場向けIT商社のシステムエンジニアとして、インフラ構築からアプリケーション開発まで幅広い領域の業務を経験する。</p>
        <p>2020年にIT商社を退職し、開発エンジニアとしてのキャリアを積むためプログラミングの学習を本格的に開始。</p>
        <p>2021年よりEdTech自社サービス企業へ転職し、フロントエンド、バックエンド、インフラに関わる業務を担当。</p>
        <p>スキルセットは下記の Skill の項目から御覧ください！</p>
      </div>
    </div>
  </section>
</template>