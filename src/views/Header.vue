<template>
  <header>
    <div class="header-content">
      <!-- LOGO 圖片 -->
      <div class="logo-and-title">
        <img src="../assets/vue.svg" alt="Logo" class="logo" />
        <h1>Vue-Practive</h1>
      </div>
      <nav>
        <router-link to="/">介紹</router-link> |
        <router-link to="/about">關於</router-link>|
        <router-link to="/Courses">課程</router-link>|
        <router-link to="/Environment">環境</router-link>|
        <router-link to="/Contact">參考</router-link>
      </nav>
    </div>
  </header>
</template>

<script></script>

<style>
header {
  max-width: 1024px; /* 最大寬度為 1024px */
  margin: 0 auto; /* 上下邊距為 0，左右自動（自動居中） */
  background-color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 高於其他元素 */
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-and-title {
  display: flex;
  align-items: center;
  min-width: 250px; /* 或根據您的具體需求調整 */
  flex-shrink: 0; /* 防止容器在空間不足時縮小 */
}

.logo {
  height: 50px; /* 或您希望的大小 */
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
}

h1 {
  font-size: xx-large;
  color: #333;
  margin: 0; /* 移除預設的邊距 */
}

nav {
  background-color: #79d19b; /* 馬卡龍粉紅背景顏色 */
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #ffffff; /* 亮白色文字，以保證對比度 */
  font-size: 18px;
  margin: 0 15px;
  font-family: "Arial", sans-serif;
  transition: color 0.3s; /* 平滑顏色變化 */
}

nav a:hover {
  color: #dafbe8; /* 懸浮時的淺粉紅色 */
}
</style>
