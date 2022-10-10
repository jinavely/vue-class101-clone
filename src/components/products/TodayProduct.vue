<template>
  <div class="today-products">
    <h3>오늘본상품</h3>
    <swiper class="swiper" ref="swiper" :options="swiperOptions">
      <swiper-slide v-for="item in todayProductData" :key="item.id">
        <router-link :to="item.url">
          <img :src="item.imageUrl" :alt="item.summary" />
        </router-link>
      </swiper-slide>

      <!-- pagination -->
      <div class="swiper-pagination" slot="pagination"></div>

      <!-- navigation -->
      <button class="swiper-button-prev" slot="button-prev"></button>
      <button class="swiper-button-next" slot="button-next"></button>
    </swiper>
  </div>
</template>

<script>
import { getTodayProduct } from '@/api/index';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'TodayProduct',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      // todayProductData
      todayProductData: [],
    };
  },
  created() {
    // getTodayProduct
    this.getTodayProduct();
  },
  methods: {
    // getTodayProduct
    async getTodayProduct() {
      try {
        const { data } = await getTodayProduct();
        this.todayProductData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.today-products {
  max-width: 1216px;
  margin: 50px auto;

  h3 {
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    letter-spacing: -0.4px;
    margin: 0px;
    color: rgba(26, 26, 26, 1);
  }
}
.swiper {
  margin-top: 24px;
  padding: 10px 0;
  .swiper-slide {
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: 0.3s;
      border-radius: 4px;
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 20px;

    ::v-deep .swiper-pagination-bullet {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0px px 8px;
      border-radius: 3px;
      background-color: rgba(102, 102, 102, 1);
      opacity: 0.56;
      transition: 0.3s;

      &.swiper-pagination-bullet-active {
        width: 24px;
        background-color: rgba(102, 102, 102, 1);
        opacity: 1;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    box-shadow: rgba(41, 42, 43, 0.1) 0px 1px 3px,
      rgba(0, 0, 0, 0.4) 0px 0px 0.5px;
    width: 32px;
    height: 32px;
    background-image: none;
    margin: 0px;
    position: absolute;
    top: inherit;
    left: inherit;
    right: 0;
    bottom: 0;
    cursor: pointer;

    &:after {
      font-size: 18px;
      color: #000;
    }
    &.swiper-button-disabled,
    &.swiper-button-disabled {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .swiper-button-prev {
    right: 40px;
  }
}
</style>
