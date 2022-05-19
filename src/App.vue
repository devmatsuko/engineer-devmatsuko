<script setup lang="ts">
import Header from "./components/Header.vue"
import About from "./components/About.vue"
import SkillList from "./components/SkillList.vue"
</script>

<template>
  <Header></Header>
  <About></About>
  <SkillList ></SkillList>
  <!-- <section id="works" class="py-5">
    <div class="front_text title fw-bold">Works<span class="back_text fw-bold">Works</span></div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-md-center">
        <div class="col">
          <div class="card p-2 h-100 animation-box scroll-hidden">
            <img src="./image/prophecy.png" class="card-img-top img-thumbnail work-image" alt="ProphecyApp">
            <div class="card-body">
              <h5 class="card-title text-center mb-2">Prophecy〜予言マジック〜</h5>
              <div class="works-icon mb-3 fw-bold">
                <i class="fas fa-chalkboard"></i>
                <span>アプリの概要</span>
              </div>
              <p>
                「誰でも簡単に手品ができる」をコンセプトに開発した手品アプリです。<br>
                2020年の外出自粛期間に家でも楽しめるコンテンツを提供したいと思い、開発しました。<br>
              </p>
              <a href="https://apps.apple.com/jp/app/prophecy-%E4%BA%88%E8%A8%80%E3%83%9E%E3%82%B8%E3%83%83%E3%82%AF/id1528918453" rel="nofollow">App Storeからダウンロード</a><br>
              <a href="https://www.youtube.com/watch?v=yabrcQwxoSY" rel="nofollow">実演動画</a>
              <div class="works-icon my-3 fw-bold">
                <i class="far fa-lightbulb"></i>
                <span>こだわりポイント</span>
              </div>
              <p>
                「誰でも簡単に手品ができる」を実現するために、実演動画や操作方法の動画リンクをアプリ内に実装しました。<br>
                ボタンのデザインもマジックアプリらしいデザインで実装しました。<br>
              </p>
              <div class="works-icon my-3 fw-bold">
                <i class="fas fa-code"></i>
                <span>使用技術・ソースコード</span>
              </div>
              <p>
                開発言語：Swift<br>
                GitHub：<a href="https://github.com/devmatsuko/ProphecyMagicApp" rel="nofollow">ProphecyMagicApp</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card p-2 h-100 animation-box scroll-hidden">
            <img src="./image/MagiciansSociety.png" class="card-img-top img-thumbnail work-image" alt="Magician's Society">
            <div class="card-body">
              <h5 class="card-title text-center mb-2">Magician's Society</h5>
              <div class="works-icon mb-3 fw-bold">
                <i class="fas fa-chalkboard"></i>
                <span>アプリの概要</span>
              </div>
              <p>
                「マジシャンのマジシャンによるマジシャンのためのSNS」をコンセプトに開発したSNSサイトです。<br>
                マジックの演技動画の投稿や、自身が作成したトリック・製品の販売・購入などを行うサイトです。<br>
                ※本サイトはポートフォリオサイトとして作成したものであるため、実際に運用はしておりません。
                ※余談ですがいくつか私の手品動画を載せています。
              </p>
              <a href="https://magicians-society.com/" rel="nofollow">Magician's Society</a>
              <div class="works-icon my-3 fw-bold">
                <i class="far fa-lightbulb"></i>
                <span>こだわりポイント</span>
              </div>
              <p>
                AWS S3を用いて動画を投稿、保存、再生する動画投稿機能を実装しました。<br>
                また既存のSNSサイトを参考に、ユーザーが直感的にサイトを利用できるようシンプルなUIで実装しました。<br>
              </p>
              <div class="works-icon my-3 fw-bold">
                <i class="fas fa-code"></i>
                <span>使用技術・ソースコード</span>
              </div>
              <p>
                フロントエンド：HTML、CSS、JavaScript、jQuery、Ajax<br>
                バックエンド：Ruby/Rails<br>
                インフラ：AWS(EC2、RDS、S3、IAMなど）<br>
                GitHub：<a href="https://github.com/devmatsuko/Magicians-Society" rel="nofollow">Magician's Society</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="py-5">
    <div class="front_text title fw-bold">Contact me<span class="back_text fw-bold">Contact me</span></div>
    <div class="container">
      <div class="row justify-content-md-center pt-3">
        <div class="col-md-8">
          <p class="text-center">
            最後までご覧いただきありがとうございました。<br>
            このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。<br>
            もしこのサイトや私について何かコメントがありましたら、TwitterのDMでご連絡ください。
          </p>
        </div>
      </div>
      <div class="row justify-content-md-center pt-3">
        <div class="col-md-2 d-flex justify-content-center">
          <div class="m-2">
            <a href="https://twitter.com/devmatsuko" target="”_blank”" rel="”noopener”"><img src="./image/twitter.png" alt="twitter" height="48px"></a>
          </div>
          <div class="m-2">
            <a href="https://github.com/devmatsuko" target="”_blank”" rel="”noopener”"><img src="./image/github.png" alt="GitHub" height="48px"></a>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <p class="title fw-bold">©︎Shinya Komatsu. 2022 All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
