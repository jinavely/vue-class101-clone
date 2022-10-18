<template>
  <div class="reviews">
    <section>
      <h3>{{ reviewsData.title }}</h3>
      <div class="review-contraction">
        <a
          target="_blank"
          href="/https://class101.net/klasses/627ca2501c4dcb000f2fac4e/reviews"
          ><p class="obj">클래스 한줄평</p>
          <p class="sbj">
            {{
              reviewsData.oneLineReviews
                ? reviewsData.oneLineReviews.length
                : null
            }}
          </p>
        </a>
        <a
          target="_blank"
          href="/https://class101.net/klasses/627ca2501c4dcb000f2fac4e/reviews"
          ><p class="obj">수강생 만족도</p>
          <p class="sbj">{{ satisfy() }}<em>%</em></p></a
        >
      </div>
      <ul class="review-list" v-if="reviewsData.oneLineReviews">
        <li
          v-for="item in reviewsData.oneLineReviews.slice(0, 4)"
          :key="item.id"
        >
          <router-link target="_blank" :to="item.link"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M.899 14.526l.001.211C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.401 28.401 0 00-2.932 4.281C1.613 9.97.9 12 .9 14.314l-.001.212zm12 0l.001.211C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.401 28.401 0 00-2.932 4.281C13.613 9.97 12.9 12 12.9 14.314l-.001.212z"
                fill="#1B1C1D"
              ></path>
            </svg>
            <p class="text" v-html="item.text" />
            <p class="name">{{ item.name ? item.name : '이름없음' }} 님의 글</p>
          </router-link>
        </li>
      </ul>
      <div class="review-student">
        <h4>실제 수강생 후기</h4>
        <router-link to="/reviewCreatePage" class="btn"
          >후기 작성하기</router-link
        >
      </div>
      <div class="review-total">
        <a
          target="_blank"
          href="/https://class101.net/reviews/list?klassId=61137c012ae747000d32b1fb"
        >
          <div class="ratings">
            <div v-for="item in [1, 2, 3, 4, 5]" :key="item.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                v-if="item <= Math.round(courseEvaluation())"
              >
                <path
                  class="active"
                  d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                v-else
              >
                <path
                  d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
                ></path>
              </svg>
            </div>

            <span class="average">
              {{ courseEvaluation() }}
            </span>
            <span class="total"
              >총
              {{
                reviewsData.realReviews ? reviewsData.realReviews.length : null
              }}개</span
            >
          </div>
          <ul class="reply-list">
            <li>
              친절하고 자세하게 설명해주세요.<span class="empathy"
                >{{ reviewsData.empathy1 }}명 공감</span
              >
            </li>
            <li>
              커리큘럼이 잘 짜여져있어요.<span class="empathy"
                >{{ reviewsData.empathy2 }}명 공감</span
              >
            </li>
            <li>
              재미있고 몰입되는 시간이었어요.<span class="empathy"
                >{{ reviewsData.empathy3 }}명 공감</span
              >
            </li>
          </ul></a
        >
      </div>
      <ul class="thumbs-list">
        <li>
          <img
            src="https://cdn.class101.net/images/e050269e-7213-4c69-818e-a41053dcba74"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.class101.net/images/f8f64c96-abdc-4bed-8722-944331405f96"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.class101.net/images/23899222-fce8-4160-addc-b320db24e171"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.class101.net/images/103b3546-3b71-42dd-8f19-054ff43986ed"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.class101.net/images/5ec4f59a-a27b-4088-9cef-76104f50479b"
            alt=""
          />
        </li>
      </ul>
      <ul class="real-review-list" v-if="reviewsData.realReviews">
        <li v-for="item in reviewsData.realReviews.slice(0, 4)" :key="item.id">
          <a :href="item.link">
            <header>
              <div class="avatar">
                <img :src="item.avatar" :alt="item.name" />
              </div>
              <div class="review-info">
                <p class="name">{{ item.name }}</p>
                <div class="review-info__top">
                  <div class="rating">
                    <span v-for="r in [1, 2, 3, 4, 5]" :key="r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        v-if="r <= item.rating"
                      >
                        <path
                          class="active"
                          fill-rule="evenodd"
                          d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        v-else
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.673 19.972c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <span class="date">{{ item.month }}월 {{ item.day }}일</span
                  ><span class="realtime-write"
                    >{{ item.progress }}% 수강 후 작성</span
                  >
                </div>
              </div>
            </header>
            <p class="text" v-html="item.text" />
          </a>
          <div class="reply-box">
            <button class="btn-reply">
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
              {{ item.reply }}
            </button>
            <button class="btn-good">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#a2a2a2"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.139 10l.844-5.066a2 2 0 00-1.279-2.205l-.419-.155-2.604 7.205V20h8.8l1.467-8.836A1 1 0 0018.961 10h-5.822zm-5.458-.571L11.089 0l2.308.853a4 4 0 012.559 4.41L15.5 8h3.461a3 3 0 012.96 3.491l-1.573 9.477C20.25 21.566 19.779 22 19.23 22H7.681V9.429z"
                ></path>
                <path
                  d="M3.135 9.429C2.503 9.429 2 9.989 2 10.68v10.069C2 21.427 2.508 22 3.135 22h2.273V9.429H3.135z"
                ></path>
              </svg>
              {{ item.good }}명에게 도움됨
            </button>
            <button class="btn-report">신고하기</button>
          </div>
        </li>
      </ul>

      <Btn
        :text="
          `${
            reviewsData.realReviews
              ? reviewsData.realReviews.slice(4).length
              : null
          }개의 후기 더보기`
        "
        :button="false"
        link="/reviewPage"
        target="_self"
      /><!-- 더보기 버튼 -->
    </section>
  </div>
</template>

<script>
import { getReviews } from '@/api/index';
import Btn from '@/components/common/Btn.vue';

export default {
  name: 'Reviews',
  components: { Btn },
  data() {
    return {
      // getReviews
      reviewsData: {},
    };
  },
  created() {
    // getReviews
    this.fetchReviews();
  },
  methods: {
    // getReviews
    async fetchReviews() {
      try {
        const { data } = await getReviews();
        this.reviewsData = data;
      } catch (error) {
        console.log(error);
      }
    },

    // 수강생 만족도 계산
    satisfy() {
      if (this.reviewsData.oneLineReviews) {
        const sum = this.reviewsData.oneLineReviews.reduce(
          (cnt, item) =>
            cnt + Number(item.rating) / this.reviewsData.oneLineReviews.length,
          0
        );
        return sum.toFixed(2) * 2 * 10; // 5점 만점 * 퍼센트 10
      }
    },

    // 실제 후강 후기 별점
    courseEvaluation() {
      if (this.reviewsData.realReviews) {
        const sum = this.reviewsData.realReviews.reduce(
          (cnt, item) =>
            cnt + Number(item.rating) / this.reviewsData.realReviews.length,
          0
        );
        return sum.toFixed(2); // 5점 만점
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  > section {
    padding: 48px 0px;

    h3 {
      font-size: 24px;
      font-weight: bold;
      line-height: 34px;
      letter-spacing: -0.4px;
      margin: 0px;
      color: rgba(26, 26, 26, 1);
      white-space: pre-wrap;
    }

    .review-contraction {
      margin-top: 24px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      > a {
        width: 50%;
        text-align: center;
        text-decoration: none;
        .obj {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: normal;
          margin: 0px;
          color: rgba(162, 162, 162, 1);
          font-weight: 600;
        }
        .sbj {
          font-size: 32px;
          line-height: 44px;
          letter-spacing: -0.6px;
          margin: 0px;
          font-weight: 800;
          color: rgba(26, 26, 26, 1);
        }
      }
    }

    .review-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin: 16px 0px;
      overflow: hidden;
      padding: 0px;
      li {
        display: block;
        flex: 1 1 auto;
        pointer-events: auto;
        touch-action: auto;
        border-radius: 3px;
        background-color: rgba(248, 248, 248, 1);
        &:last-child a:before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: rgba(27, 28, 29, 0.8);
          border-radius: 3px;
        }
        &:last-child a:after {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: '더보기';
          font-weight: bold;
          color: white;
          text-align: center;
        }
        > a {
          position: relative;
          text-decoration: none;
          height: 176px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 12px 16px;
          text-align: center;
          .text {
            font-size: 11px;
            font-weight: normal;
            line-height: 16px;
            letter-spacing: normal;
            margin: 6px 0px 8px;
            color: rgba(26, 26, 26, 1);
            word-break: break-all;
            max-height: 48px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .name {
            font-size: 9px;
            font-weight: normal;
            color: rgba(202, 202, 202, 1);
            line-height: 12px;
            letter-spacing: normal;
            margin: 0px;
          }
        }
      }
    }
    .review-student {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 48px 0px;
      h4 {
        font-size: 20px;
        font-weight: bold;
        line-height: 34px;
        letter-spacing: -0.4px;
        margin: 0px;
        color: rgba(26, 26, 26, 1);
        vertical-align: middle;
      }
      .btn {
        font-size: 0.75rem;
        cursor: pointer;
        overflow: hidden;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        padding: 6px 7px;
        position: relative;
        text-decoration: none;
        color: #000;
        &:hover {
          color: rgba(12, 12, 12, 1);
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    .review-total {
      > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        .ratings {
          margin-left: 5%;
          display: flex;
          align-items: center;
          .average {
            font-size: 26px;
            line-height: 36px;
            letter-spacing: -0.26px;
            margin: 0px 8px 0px 16px;
            font-weight: 800;
            color: #000;
          }
          .total {
            font-size: 14px;
            font-weight: normal;
            line-height: 18px;
            letter-spacing: -0.14px;
            margin: 12px 0px 0px;
            color: rgba(162, 162, 162, 1);
          }
          svg {
            path {
              fill: #a7a5a5;
              &.active {
                fill: #ffb800;
              }
            }
          }
        }
        .reply-list {
          width: 50%;
          display: flex;
          flex-direction: column;
          li {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            flex: 1 1 0%;
            color: rgba(0, 0, 0, 1);
            margin-top: 10px;
            .empathy {
              font-size: 12px;
              line-height: 16px;
              color: rgba(162, 162, 162, 1);
              white-space: nowrap;
            }
          }
        }
      }
    }
    .thumbs-list {
      display: flex;
      justify-content: space-between;
      gap: 5px;
      margin-top: 60px;
      li {
        flex: 1 100px;
        img {
          object-fit: cover;
          width: 100%;
          height: 144px;
        }
      }
    }
    .real-review-list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      margin-top: 30px;
      li {
        width: calc(50% - 20px);
        margin-top: 30px;
        > a {
          text-decoration: none;
          color: #000;
        }

        header {
          display: flex;
          align-items: center;
          .avatar {
            width: 32px;
            height: 32px;
            img {
              object-fit: cover;
              width: 100%;
              border-radius: 100%;
            }
          }
          .review-info {
            width: 100%;
            margin-left: 10px;
            .name {
              font-weight: bold;
              font-size: 12px;
              line-height: 16px;
              color: inherit;
            }
            &__top {
              display: flex;
              align-items: center;
              margin-top: 5px;
              .rating {
                svg {
                  path {
                    fill: #a7a5a5;
                    &.active {
                      fill: #ffb800;
                    }
                  }
                }
              }
              .date {
                font-weight: normal;
                font-size: 11px;
                line-height: 14px;
                color: rgba(162, 162, 162, 1);
                margin-left: 8px;
              }
              .realtime-write {
                font-weight: normal;
                font-size: 11px;
                line-height: 14px;
                color: rgba(162, 162, 162, 1);
                margin-left: 8px;
              }
            }
          }
        }
        .text {
          font-size: 13px;
          line-height: 1.5;
          margin-top: 10px;
          margin-bottom: 0px;
          flex: 1 1 0%;
          width: 100%;
          min-height: 98px;
          white-space: break-spaces;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .reply-box {
      margin-top: 10px;
      display: flex;
      align-items: center;
      .btn-reply,
      .btn-good,
      .btn-report {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 16px;
        color: rgba(162, 162, 162, 1);
        margin-right: 16px;
      }
      .btn-report {
        font-weight: bold;
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
}
</style>
