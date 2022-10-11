<template>
  <div class="banner">
    <div class="banner-inner" v-if="visible">
      <a href="#">듣고 싶은 클래스, 14일 무료 체험하기 &gt;</a>
      <button class="close" @click="visible = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
            fill="white"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  data() {
    return {
      visible: true,
    };
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
  background-color: rgb(243, 33, 59);
}
.banner-inner {
  width: 1216px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner a {
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  line-height: 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
}
.close {
  border: none;
  padding: 0;
  margin: 0;
  background: none;
}
</style>
