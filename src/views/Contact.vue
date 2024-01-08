<template>
  <div>
    <div v-for="item in items" :key="item.url">
      <div class="card">
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    name: "這是我的 Vue.js 筆記，不知道有沒有機會幫到你",
    url: "https://ithelp.ithome.com.tw/users/20162483/ironman/6512",
  },
];
</script>

<style scoped></style>
