<template>
  <div class="community">
    <section>
      <h3>
        커뮤니티
        <span class="num">{{ communityData.length }}개의 글</span>
        <button class="btn-write">글 작성하기</button>
      </h3>

      <swiper class="review-swiper" ref="swiper" :options="swiperOptions">
        <fragment v-for="item in communityData" :key="item.id">
          <swiper-slide
            v-if="item.name === '주언규PD' || item.name === '클래스101'"
          >
            <header>
              <span class="avatar"
                ><img :src="item.avatar" :alt="item.alt"
              /></span>
              <div class="review-info">
                <p class="name">{{ item.name }}</p>
                <p class="date">{{ item.date }}</p>
              </div>
            </header>
            <p class="text" v-html="item.text" />
            <footer>
              <router-link to="/">전체보기</router-link
              ><router-link to="/" class="replay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.368 21.632l.594-5.347A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.967 9.967 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.384.268.137A7.96 7.96 0 0012 20a8 8 0 100-16 8 8 0 00-8 8 7.96 7.96 0 00.878 3.648l.138.268-.384 3.452zM8 13a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2z"
                    fill="#a2a2a2"
                  ></path>
                </svg>
                {{ item.reply.length }}
              </router-link>
            </footer>
          </swiper-slide>
        </fragment>

        <!-- pagination -->
        <div class="swiper-pagination" slot="pagination"></div>

        <!-- navigation -->
        <button class="swiper-button-prev" slot="button-prev"></button>
        <button class="swiper-button-next" slot="button-next"></button>
      </swiper>

      <div
        class="review-box"
        v-for="review in communitySliceData"
        :key="review.id"
      >
        <header>
          <span class="avatar"
            ><img :src="review.avatar" :alt="review.alt"
          /></span>
          <div class="review-info">
            <p class="name">{{ review.name }}</p>
            <p class="date">{{ review.date }}</p>
          </div>
        </header>
        <p class="text" v-html="review.text" />
        <div class="reply-box" v-for="reply in review.reply" :key="reply.id">
          <header>
            <span class="avatar"
              ><img :src="reply.avatar" :alt="reply.alt"/></span
            ><span class="name">{{ reply.name }}</span
            ><span class="date">{{ reply.date }}</span>
          </header>
          <p class="text" v-html="reply.text" />
        </div>
        <fieldset class="reply-write">
          <legend>댓글입력</legend>
          <span class="plus"
            ><img
              src="https://class101.net/images/ic-new-file-input-button.png"
              alt=""
            />
          </span>
          <textarea placeholder="댓글을 입력해주세요."></textarea
          ><button class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M6 11h4a1 1 0 110 2H6v6l13-7L6 5v6zm.948 9.761C5.616 21.478 4 20.513 4 19V5c0-1.513 1.616-2.478 2.948-1.761l13 7c1.402.755 1.402 2.767 0 3.522l-13 7z"
                fill="#e5e5e5"
              ></path>
            </svg>
          </button>
        </fieldset>
      </div>

      <Btn text="더보기" @click="onClick" /><!-- 더보기 버튼 -->
    </section>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment';
import { getCommunity } from '@/api/index';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import Btn from '../common/Btn.vue';

export default {
  name: 'Community',
  components: {
    Swiper,
    SwiperSlide,
    Fragment,
    Btn,
  },
  data() {
    return {
      // 더보기
      show: false,
      moreData: 2,

      // swiper
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      // getCommunity
      communityData: [],
      communitySliceData: [],
    };
  },
  created() {
    // getCommunity
    this.fetchCommunity();
  },
  methods: {
    // getCommunity
    async fetchCommunity() {
      try {
        const { data } = await getCommunity();
        this.communityData = data;
        this.communitySliceData = data.slice(0, 2);
      } catch (error) {
        console.log(error);
      }
    },

    // 더보기
    async onClick(e) {
      const { data } = await getCommunity();
      this.communitySliceData = data.slice(0, (this.moreData += 1));
      if (this.moreData >= this.communityData.length) {
        this.show = true;
        e.target.style.display = 'none';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.community {
  h3 {
    display: flex;
    align-items: flex-end;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    letter-spacing: -0.4px;
    margin: 0px;
    color: rgba(26, 26, 26, 1);
    .num {
      display: inline-block;
      font-size: 14px;
      line-height: 24px;
      color: rgba(202, 202, 202, 1);
      margin-left: 10px;
    }
    .btn-write {
      margin-left: auto;
      width: auto;
      display: inline-flex;
      align-items: center;
      border-radius: 3px;
      color: rgb(248, 248, 248);
      background-color: rgba(58, 58, 58, 1);
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.2px;
      padding: 0px 16px;
      height: 40px;
      transition: background-color 0.1s ease 0s;
      text-decoration-line: none;
    }
  }

  .review-swiper {
    margin-top: 24px;
    padding: 10px 4px;
    .swiper-slide {
      height: 184px;
      padding: 16px;
      border-radius: 3px;
      box-shadow: rgba(41, 42, 43, 0.1) 0px 2px 5px,
        rgba(41, 42, 43, 0.6) 0px 0px 0.5px;

      header {
        display: flex;
        align-items: center;
        .avatar {
          position: relative;
          display: inline-block;
          margin-right: 10px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 100%;
          }
        }
        .review-info {
          .name {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: normal;
            margin: 0px;
            font-weight: 600;
            color: rgba(26, 26, 26, 1);
          }
          .date {
            font-size: 9px;
            font-weight: normal;
            line-height: 12px;
            letter-spacing: normal;
            margin: 0px;
            color: rgba(202, 202, 202, 1);
          }
        }
      }
      .text {
        font-size: 14px;
        font-weight: normal;
        color: rgba(26, 26, 26, 1);
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 10px auto 0 auto;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 90%;
        height: 60px;
        word-break: keep-all;
      }
      footer {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        a:not(.replay) {
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
          padding: 0px;
          color: rgba(255, 61, 0, 1);
          text-decoration: none;
        }
        .replay {
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: normal;
          color: rgba(162, 162, 162, 1);
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
          text-decoration: none;
        }
      }
    }
    .swiper-pagination {
      position: static;
      margin-top: 20px;
      ::v-deep.swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        margin: 0px px 8px;
        border-radius: 3px;
        background-color: rgba(102, 102, 102, 1);
        opacity: 0.56;
        transition: 0.3s;
        &.swiper-pagination-bullet-active {
          width: 24px;
          background-color: rgb(102, 102, 102);
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
      &:after {
        font-size: 18px;
        color: #000;
      }
    }
    .swiper-button-prev {
      right: 40px;
    }
  }
  .review-box {
    margin-top: 32px;
    padding-top: 32px;

    &:not(:first-of-type) {
      border-top: 1px solid rgb(239, 239, 239);
    }

    header {
      display: flex;
      align-items: center;
      .avatar {
        position: relative;
        display: inline-block;
        margin-right: 10px;
        img {
          object-fit: cover;
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
      }
      .review-info {
        .name {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: normal;
          margin: 0px;
          font-weight: 600;
          color: rgba(26, 26, 26, 1);
        }
        .date {
          font-size: 9px;
          font-weight: normal;
          line-height: 12px;
          letter-spacing: normal;
          margin: 0px;
          color: rgba(202, 202, 202, 1);
        }
      }
    }
    .text {
      font-size: 14px;
      font-weight: normal;
      color: rgba(26, 26, 26, 1);
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 20px 0 0 0;
      word-break: keep-all;
    }
    .reply-box {
      margin: 20px 0 0 50px;
      header {
        display: flex;
        align-items: center;
        .avatar {
          display: inline-block;
          margin-right: 10px;
          img {
            width: 24px;
            height: 24px;
            border-radius: 100%;
          }
        }
        .name {
          display: inline-block;
          font-size: 11px;
          font-weight: bold;
          line-height: 16px;
          margin: 0px 4px 0px 0px;
          color: rgba(58, 58, 58, 1);
        }
        .date {
          font-size: 10px;
          color: rgba(202, 202, 202, 1);
        }
      }
    }

    .reply-write {
      margin: 20px 0 0 0;
      position: relative;
      display: block;
      border-radius: 25px;
      padding: 0px 10px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(229, 229, 229, 1);
      display: flex;
      align-items: center;
      legend {
        position: absolute;
        left: -9999px;
        font-size: 0;
        opacity: 0;
      }
      .plus {
        display: inline-block;
        width: 28px;
        height: 28px;
        img {
          max-height: 100%;
          object-fit: cover;
        }
      }
      textarea {
        font-size: 14px;
        font-weight: normal;
        color: rgba(26, 26, 26, 1);
        letter-spacing: -0.15px;
        width: 100%;
        height: 44px;
        overflow: hidden;
        padding: 12px 10px 8px;
        outline: none;
        border: none;
        background-color: transparent;
        resize: none;
      }
      .btn {
        svg {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
