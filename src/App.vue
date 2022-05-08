<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue"
import ProfileImage from "./components/ProfileImage.vue"

// カルーセル用のプロフィール画像
const images = ref([
  { id: 1, src: "src/assets/profile/my_profile_image1.jpg" },
  { id: 2, src: "src/assets/profile/my_profile_image2.jpg" },
  { id: 3, src: "src/assets/profile/my_profile_image3.jpg" },
]);
</script>

<template>
  <Header id="header"></Header>
  <section id="about" class="py-5">
    <h1 class="font-bold">About me</h1>
    <ProfileImage :images="images"></ProfileImage>
    <div class="row pt-3">
      <h3 class="text-center">小松 真也（Shinya Komatsu）</h3>
    </div>
  </section>
  <section id="profile" class="py-5">
    <div class="container">
      <div class="row justify-content-md-center ">
        <div class="col col-lg-8">
          <div class="icon">
            <i class="fas fa-user"></i>
            <span>自己紹介・経歴</span>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center pt-3">
        <div class="col col-md-8">
          <p>29歳エンジニア。趣味で10年ほどマジシャンもしていますので宴会芸はお任せください！</p>
          <p>2017年に同志社大学大学院 理工学研究科 情報工学専攻を修了。</p>
          <p>2017年から3年間、教育市場向けIT商社のシステムエンジニアとして、インフラ構築からアプリケーション開発まで幅広い領域の業務を経験する。</p>
          <p>2020年にIT商社を退職し、開発エンジニアとしてのキャリアを積むためプログラミングの学習を本格的に開始。</p>
          <p>2021年よりEdTech自社サービス企業へ転職し、フロントエンド、バックエンド、インフラに関わる業務を担当。スキルセットは下記の Skill の項目から御覧ください！</p>
        </div>
      </div>
    </div>
  </section>
  <section id="skill" class="py-5">
    <div class="front_text title fw-bold">skill<span class="back_text fw-bold">skill</span></div>
    <div class="container">
      <div class="row justify-content-md-center pt-3">
        <div class="col-sm-6">
          <div class="card my-3 p-3 pb-5 animation-box scroll-hidden">
            <div class="icon mb-2">
              <i class="fas fa-desktop"></i>
              <span>Programming skills</span>
            </div>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th class="text-center">技術</th>
                  <th class="text-center">経験年数</th>
                  <th class="text-center">習熟度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/html-5.svg" alt="HTML5" class="icon-image">
                    </div>
                    <p class="text-center">HTML</p>
                  </td>
                  <td class="align-middle"><p class="text-center">5年以上</p></td>
                  <td class="align-middle"><p class="text-center">★★★★★</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/css-3.svg" alt="CSS" class="icon-image">
                    </div>
                    <p class="text-center">CSS</p>
                  </td>
                  <td class="align-middle"><p class="text-center">5年以上</p></td>
                  <td class="align-middle"><p class="text-center">★★★★★</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/javascript.svg" alt="JavaScript" class="icon-image">
                    </div>
                    <p class="text-center">JavaScript</p>
                  </td>
                  <td class="align-middle"><p class="text-center">3年</p></td>
                  <td class="align-middle"><p class="text-center">★★★★☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/python.svg" alt="Python" class="icon-image">
                    </div>
                    <p class="text-center">Python</p>
                  </td>
                  <td class="align-middle"><p class="text-center">半年</p></td>
                  <td class="align-middle"><p class="text-center">★★☆☆☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/swift.svg" alt="Swift" class="icon-image">
                    </div>
                    <p class="text-center">Swift</p>
                  </td>
                  <td class="align-middle"><p class="text-center">半年</p></td>
                  <td class="align-middle"><p class="text-center">★★☆☆☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/database.png" alt="SQL" class="icon-image">
                    </div>
                    <p class="text-center">SQL</p>
                  </td>
                  <td class="align-middle"><p class="text-center">4年</p></td>
                  <td class="align-middle"><p class="text-center">★★★★★</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/rails.svg" alt="Rails" class="icon-image">
                    </div>
                    <p class="text-center">Rails</p>
                  </td>
                  <td class="align-middle"><p class="text-center">1年</p></td>
                  <td class="align-middle"><p class="text-center">★★★☆☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/laravel.svg" alt="Laravel" class="icon-image">
                    </div>
                    <p class="text-center">Laravel</p>
                  </td>
                  <td class="align-middle"><p class="text-center">1年</p></td>
                  <td class="align-middle"><p class="text-center">★★★☆☆</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card my-3 p-3 animation-box scroll-hidden">
            <div class="icon mb-2">
              <i class="fas fa-desktop"></i>
              <span>Other skills</span>
            </div>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th class="text-center">技術</th>
                  <th class="text-center">経験年数</th>
                  <th class="text-center">習熟度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/aws.svg" alt="AWS" class="icon-image">
                    </div>
                    <p class="text-center">AWS</p>
                  </td>
                  <td class="align-middle"><p class="text-center">1年</p></td>
                  <td class="align-middle"><p class="text-center">★★★☆☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/mysql.svg" alt="MySQL" class="icon-image">
                    </div>
                    <p class="text-center">MySQL</p>
                  </td>
                  <td class="align-middle"><p class="text-center">3年</p></td>
                  <td class="align-middle"><p class="text-center">★★★★☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/github-icon.svg" alt="GitHub" class="icon-image">
                    </div>
                    <p class="text-center">GitHub</p>
                  </td>
                  <td class="align-middle"><p class="text-center">2年</p></td>
                  <td class="align-middle"><p class="text-center">★★★★☆</p></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="./image/docker-icon.svg" alt="Docker" class="icon-image">
                    </div>
                    <p class="text-center">Docker</p>
                  </td>
                  <td class="align-middle"><p class="text-center">1年</p></td>
                  <td class="align-middle"><p class="text-center">★★★☆☆</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card my-3 p-3 pb-1 animation-box scroll-hidden">
            <div class="icon mb-2">
              <i class="fas fa-desktop"></i>
              <span>Qualifications</span>
            </div>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th class="text-center">資格名</th>
                  <th class="text-center">取得年</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle"><p class="text-center">応用情報技術者試験</p></td>
                  <td class="align-middle"><p class="text-center">2017年</p></td>
                </tr>
                <tr>
                  <td class="align-middle"><p class="text-center">情報セキュリティマネジメント試験</p></td>
                  <td class="align-middle"><p class="text-center">2018年</p></td>
                </tr>
                <tr>
                  <td class="align-middle"><p class="text-center">データベーススペシャリスト試験</p></td>
                  <td class="align-middle"><p class="text-center">2019年</p></td>
                </tr>
                <tr>
                  <td class="align-middle"><p class="text-center">JDLA Deep Learning for GENERAL 2019#2</p></td>
                  <td class="align-middle"><p class="text-center">2019年</p></td>
                </tr>
                <tr>
                  <td class="align-middle"><p class="text-center">CompTIA​Security+</p></td>
                  <td class="align-middle"><p class="text-center">2020年</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row p-3">
        <p>※習熟度について</p>
        <table>
          <tr>
            <td class="align-top">★☆☆☆☆</td>
            <td>触れたことがある、チュートリアルを終えた程度。実務では使用できないレベル</td>
          </tr>
          <tr>
            <td class="align-top">★★☆☆☆</td>
            <td>入門用資料・書籍を読んだ、もしくは読んでいる途中。実務で使用するには不安があるレベル</td>
          </tr>
          <tr>
            <td class="align-top">★★★☆☆</td>
            <td>入門は一通り終えて、取り急ぎ簡易な業務には取りかかれるレベル</td>
          </tr>
          <tr>
            <td class="align-top">★★★★☆</td>
            <td>業務を進める上で問題となることは少ないが一部フォローが必要なレベル</td>
          </tr>
          <tr>
            <td class="align-top">★★★★★</td>
            <td>業務を進める上で問題となることが殆どないと推測されるレベル</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
  <section id="works" class="py-5">
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
  </section>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <p class="title fw-bold">©︎Shinya Komatsu. 2021 All Rights Reserved.</p>
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
