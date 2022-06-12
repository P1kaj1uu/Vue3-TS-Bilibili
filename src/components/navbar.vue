<template>
  <div class="navbar">
    <div class="logo">
      <!-- logo区域 -->
      <i></i>
    </div>
    <div class="user">
      <!-- 搜索区域 -->
      <img src="../assets/images/search.png" alt="搜索" class="search">
      <!-- 登录区域 -->
      <img src="../assets/images/login.png" alt="登录" class="login">
      <!-- 下载区域 -->
      <van-button round type="primary" class="download">下载App</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 50px;
}

.logo {
  display: flex;
  align-items: center;
  margin: 5px 10px;
  width: 90px;
  height: 45px;

  i {
    width: 100%;
    height: 100%;
    background-image:url('data:image/png;base64,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');
  }
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user .search {
  margin: 5px 10px;
  width: 22px;
  height: 22px;
}

.user .login {
  margin: 5px 10px;
  width: 25px;
  height: 25px;
}

.user .download {
  margin: 5px 10px;
  background: #fb7299;
  border-radius: 10%;
  border: 0;
  width: 90px;
  height: 30px;
}
</style>
