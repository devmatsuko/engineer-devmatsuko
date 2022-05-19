<script setup lang="ts">
import SkillListTable from "../components/SkillListTable.vue"

const skillTitles = [
  {id: 0, text: '言語・フレームワーク'},
	{id: 1, text: '経験年数'}
]
const skillBodies = [
  {id: 0, texts: ['HTML','5年以上']},
  {id: 1, texts: ['CSS','5年以上']},
  {id: 2, texts: ['JavaScript','3年']},
  {id: 3, texts: ['Laravel(PHP)','1年']},
  {id: 4, texts: ['Vue.js','1年']},
  {id: 5, texts: ['Rails(Ruby)','半年']},
  {id: 6, texts: ['SQL','5年以上']},
  {id: 7, texts: ['Swift','半年']},
]
const otherSkillTitles = [
  {id: 0, text: 'サービス・ツール'},
	{id: 1, text: '経験年数'}
]
const otherSkillBodies = [
  {id: 0, texts: ['AWS','1年']},
  {id: 1, texts: ['MySQL','3年']},
  {id: 2, texts: ['GitHub','2年']},
  {id: 3, texts: ['Docker','1年']},
]
const certificationTitles = [
  {id: 0, text: '資格'},
	{id: 1, text: '取得年'}
]
const certificationBodies = [
  {id: 0, texts: ['応用情報技術者試験','2017年']},
  {id: 1, texts: ['情報セキュリティマネジメント試験','2018年']},
  {id: 2, texts: ['データベーススペシャリスト試験','2019年']},
  {id: 3, texts: ['JDLA Deep Learning for GENERAL 2019#2','2019年']},
  {id: 4, texts: ['CompTIA​Security','2020年']},
  {id: 5, texts: ['AWS Certified Solutions Architect – Associate','2022年']},
]

</script>

<template>
  <section id="skills" class="py-5">
    <h1 class="font-bold">Skills</h1>
    <div class="container">
      <div class="grid grid-cols-8 gap-10">
        <div class="col-start-2 col-span-2 flex justify-center">
          <SkillListTable :titles="skillTitles" :bodies="skillBodies"></SkillListTable>
        </div>
        <div class="col-span-2 flex justify-center">
          <SkillListTable :titles="otherSkillTitles" :bodies="otherSkillBodies"></SkillListTable>
        </div>
        <div class="col-span-2 flex justify-center">
          <SkillListTable :titles="certificationTitles" :bodies="certificationBodies"></SkillListTable>
        </div>
      </div>
    </div>
  </section>
</template>