<template>
  <div class="visual">
    <div class="visual__inner">
      <picture v-for="item in visualData.slice(0, 1)" :key="item.id">
        <button @click="handleOpenPopup(0)">
          <img :src="item.imageUrl" :alt="item.imageAlt" />
        </button>
      </picture>
      <div class="grid-wrap">
        <div
          class="grid"
          v-for="(item, index) in visualData.slice(1)"
          :key="item.id"
        >
          <button @click="handleOpenPopup(index + 1)">
            <img :src="item.imageUrl" :alt="item.imageAlt" />
          </button>
        </div>
      </div>
    </div>

    <div class="popup" v-if="visible">
      <div class="popup__inner">
        <button class="btn-close" @click="handleClosePopup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
              fill="#FFF"
            ></path>
          </svg>
        </button>
        <swiper class="swiper" ref="visualSwiper" :options="swiperOptions">
          <swiper-slide v-for="item in visualData" :key="item.id">
            <img :src="item.imageUrl" :alt="item.imageAlt" />
          </swiper-slide>

          <!-- pagination -->
          <div class="swiper-pagination" slot="pagination"></div>

          <!-- navigation -->
          <button class="swiper-button-prev" slot="button-prev"></button>
          <button class="swiper-button-next" slot="button-next"></button>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { getVisual } from '@/api/index';

export default {
  name: 'Visual',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // 팝업
      visible: false,

      // swiper
      swiperOptions: {
        loop: true,
        autoplay: { disableOnInteraction: false },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      // getVisual
      visualData: [],
    };
  },
  created() {
    // getVisual
    this.fetchVisual();
  },
  methods: {
    // getCreator
    async fetchVisual() {
      try {
        const { data } = await getVisual();
        this.visualData = data;
      } catch (error) {
        console.log(error);
      }
    },

    // 팝업
    handleOpenPopup(i) {
      this.visible = true;
      this.$nextTick(() => {
        if (this.$refs.visualSwiper) {
          this.$refs.visualSwiper.$swiper.slideTo(i + 1, 0, false);
        }
      });
    },
    handleClosePopup() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.visual {
  &__inner {
    display: flex;
    gap: 6px;
    width: 1216px;
    margin: 0 auto;
    height: 520px;
    picture {
      width: 58%;
      button {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .grid-wrap {
      width: 42%;
      display: grid;
      gap: 6px;
      .grid {
        grid-template-columns: 1fr;
        height: 257px;
        &:first-child {
          grid-column: 1 / span 2;
        }
        button {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  .popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 15;
    inset: 0px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.72);
    opacity: 1;
    visibility: visible;
    overscroll-behavior: contain;

    &__inner {
      position: relative;
      max-width: 896px;
      width: 100%;
      .btn-close {
        position: absolute;
        right: 0;
        top: -24px;
        z-index: 11;
        color: #fff;
      }
    }
  }
  .swiper {
    .swiper-slide {
      ::v-deep img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
      }
    }
    .swiper-pagination {
      position: static;
      margin-top: 20px;

      ::v-deep .swiper-pagination-bullet {
        display: inline-block;
        width: 6px;
        height: 6px;
        margin: 0px 4px 8px;
        border-radius: 3px;
        background-color: rgba(102, 102, 102, 1);
        opacity: 1;
        transition: 0.3s;

        &.swiper-pagination-bullet-active {
          width: 24px;
          background-color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 0;
      transition: opacity 0.5s;
      &:after {
        font-size: 30px;
        color: #fff;
      }
    }
    &:hover {
      ::v-deep {
        .swiper-button-prev,
        .swiper-button-next {
          opacity: 1;
        }
      }
    }
  }
}
</style>
