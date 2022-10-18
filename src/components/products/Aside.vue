<template>
  <div class="aside">
    <div class="aside__inner">
      <div class="content-box">
        <p class="description">
          {{ asideData.channel }} · {{ asideData.director }}
        </p>
        <h2 class="title">{{ asideData.title }}</h2>
        <div class="chips">
          <span
            class="chip"
            :class="index === 0 ? 'red' : null"
            v-for="(chip, index) in asideData.chips"
            :key="chip"
          >
            {{ chip }}
          </span>
        </div>
        <p class="discount">{{ asideData.monthlyInstallment }}개월 할부</p>
        <div class="class-payment">
          <div class="sale-info">
            클래스 할인가
            <button class="sale-info__popup" @click="handleOpenPopup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#1a1a1a"
                fill-rule="evenodd"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11 18h2v-2h-2v2zm1-12a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 00-4-4zm0 15a9 9 0 100-18 9 9 0 100 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
                ></path>
              </svg>
            </button>

            <!-- 할인 및 할부 안내 팝업 -->
            <LayerPopup
              :visible="saleVisible"
              title="할인 및 할부 안내"
              @handleClosePopup="handleClosePopup"
            >
              <div slot="body" class="sale-info__body">
                <h3>할인가 안내</h3>
                <dl>
                  <div>
                    <dt>정가</dt>
                    <dd>
                      {{
                        asideData.price
                          | currency('원', 0, {
                            symbolOnLeft: false,
                            spaceBetweenAmountAndSymbol: false,
                          })
                      }}
                    </dd>
                  </div>
                  <div>
                    <dt>기본 할인 금액</dt>
                    <dd>
                      {{
                        -(asideData.price * (asideData.sale * 0.01)).toFixed(0)
                          | currency('원', 0, {
                            symbolOnLeft: false,
                            spaceBetweenAmountAndSymbol: false,
                          })
                      }}
                    </dd>
                  </div>
                  <div>
                    <dt>{{ asideData.monthlyInstallment }}개월 할부</dt>
                    <dd>
                      {{ (asideData.sale / 100) | percent }}
                      월
                      {{
                        (
                          asideData.price / asideData.monthlyInstallment -
                          (asideData.price / asideData.monthlyInstallment) *
                            (asideData.sale * 0.01)
                        ).toFixed(0)
                          | currency('원', 0, {
                            symbolOnLeft: false,
                            spaceBetweenAmountAndSymbol: false,
                          })
                      }}
                    </dd>
                  </div>
                </dl>
                <h3>카드사 무이자 할부 안내</h3>
                <ol class="card-list">
                  <li>
                    1. 신한카드: 2, 3, 4, 5, 6, 7 개월 무이자
                  </li>
                  <li>
                    2. 현대카드: 2, 3, 4, 5, 6, 7 개월 무이자
                  </li>
                  <li>
                    3. 삼성카드: 2, 3, 4, 5, 6 개월 무이자
                  </li>
                  <li>
                    4. 우리카드: 2, 3, 4, 5, 6, 7 개월 무이자
                  </li>
                  <li>
                    5. 국민카드: 2, 3, 4, 5, 6, 7 개월 무이자
                  </li>
                  <li>
                    6. 롯데카드: 2, 3, 4 개월 무이자
                  </li>
                  <li>
                    7. 농협카드: 2, 3, 4, 5, 6, 7, 8 개월 무이자
                  </li>
                  <li>
                    8. 하나카드: 2, 3, 4, 5, 6, 7, 8 개월 무이자
                  </li>
                  <li>
                    9. BC카드: 2, 3, 4, 5, 6, 7 개월 무이자
                  </li>
                  <li>
                    10. 전북카드: 2, 3, 4, 5 개월 무이자
                  </li>
                </ol>
                <div class="notice">
                  <p class="title">[유의사항]</p>
                  <ul class="notice__list">
                    <li>
                      ※ 상기행사는 카드사 사정에 의해 변경 및 중단될 수
                      있습니다. 자세한 사항은 각 카드사 홈페이지를 참조
                      바랍니다.
                    </li>
                    <li>
                      ※ 법인/기업(개인사업자)/체크/선불/GIFT/하이브리드/
                      은행계열 카드 등 제외
                    </li>
                    <li>
                      ※ 무이자/부분무이자 적용 시, 포인트/마일리지 적립 불가.
                    </li>
                    <li>
                      ※ 상점부담
                      무이자/직계약/특별제휴가맹점,오프라인(비인증),대학등록금,지방세(세외수입,상수도),제약(B2B),주유,자동차,승차권,방송수신료,보험
                      등 제외
                    </li>
                    <li>
                      ※ 하나카드는 PG업종 외 서적, 학원, 면세점 등 별도업종 및
                      환금성가맹점 제외
                    </li>
                  </ul>
                </div>
              </div>
            </LayerPopup>
          </div>
          <div class="price-box">
            <span class="discount-rate">{{
              (asideData.sale / 100) | percent
            }}</span
            ><span class="discount-price"
              >월
              {{
                asideData.price
                  | currency('원', 0, {
                    symbolOnLeft: false,
                    spaceBetweenAmountAndSymbol: false,
                  })
              }}</span
            >
          </div>
        </div>
        <div class="class-evaluation">
          <ul class="class-evaluation__list">
            <li v-for="(item, index) in asideData.classInfo" :key="item">
              <svg
                v-if="index === 0"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#1a1a1a"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 12L10 9v6l5.5-3z"></path>
                <path
                  fill-rule="evenodd"
                  d="M3 3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2H3zm0 16h18V5H3v14z"
                ></path>
              </svg>
              <svg
                v-else-if="index === 1"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M21 6h-3.337c.216-.455.337-.963.337-1.5A3.5 3.5 0 0014.5 1 3.49 3.49 0 0012 2.051 3.49 3.49 0 009.5 1 3.5 3.5 0 006 4.5c0 .537.121 1.045.337 1.5H3a1 1 0 00-1 1v4a1 1 0 001 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 001-1V7a1 1 0 00-1-1zM4 8v2h7V8H4zm9 0v2h7V8h-7zm-2 4H5v7h6v-7zm2 7v-7h6v7h-6zm2-13.085a1.5 1.5 0 01-.5.085H13V4.5c0-.175.03-.344.085-.5A1.5 1.5 0 1115 5.915zM11 4.5V6H9.5a1.5 1.5 0 111.415-2c.055.156.085.325.085.5z"
                  fill="#1a1a1a"
                ></path>
              </svg>
              <svg
                v-else-if="index === 2"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 23 22"
              >
                <path
                  d="M14.7084 10.9082C16.0834 9.89984 17 8.29567 17 6.50817C17.0459 3.529 14.6625 1.054 11.7292 0.916503C8.56671 0.779003 6.00004 3.29984 6.00004 6.4165C6.00004 8.24984 6.91671 9.89984 8.29171 10.9082C4.80837 12.1915 2.33337 15.5373 2.33337 19.479C2.33337 19.6165 2.33337 19.7998 2.33337 19.9373C2.33337 20.0748 2.42504 20.1665 2.56254 20.1665H4.39587C4.53337 20.1665 4.62504 20.0748 4.62504 19.9373C4.62504 19.7998 4.62504 19.6623 4.62504 19.479C4.62504 15.6748 7.69587 12.604 11.5 12.604C15.3042 12.604 18.375 15.6748 18.375 19.479C18.375 19.6165 18.375 19.754 18.375 19.9373C18.375 20.0748 18.4667 20.1665 18.6042 20.1665H20.4375C20.575 20.1665 20.6667 20.0748 20.6667 19.9373C20.6667 19.7998 20.6667 19.6165 20.6667 19.479C20.6667 15.5373 18.1917 12.1915 14.7084 10.9082ZM11.5 9.62484C9.71254 9.62484 8.29171 8.204 8.29171 6.4165C8.29171 4.629 9.71254 3.20817 11.5 3.20817C13.2875 3.20817 14.7084 4.629 14.7084 6.4165C14.7084 8.204 13.2875 9.62484 11.5 9.62484Z"
                  fill="#1a1a1a"
                ></path>
              </svg>
              <svg
                v-else-if="index === 3"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#1a1a1a"
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
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="social">
          <button class="btn-social">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M20.5 9c0-2-1.5-3.9-3.7-3.9-2.3 0-3.8 1.63-4.8 3.33-1-1.7-2.5-3.33-4.8-3.33C5 5.1 3.5 6.867 3.5 9c0 4.62 4.949 7.667 8.5 9.623 3.551-1.956 8.5-5.003 8.5-9.623zm-19-.176C1.5 5.607 3.962 3 7 3c2.7 0 4 1 5 2.2C13 4 14.3 3 17 3c3.038 0 5.5 2.607 5.5 5.824C22.5 14.827 16.684 18.52 12 21 7.316 18.52 1.5 14.827 1.5 8.824z"
                fill="#1a1a1a"
              ></path>
            </svg>
            {{ asideData.goodNumber }}
          </button>
          <button class="btn-social">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M20 19v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7h16zM13 5.829l3.586 3.587L18 8.001 12 2 6 8.001l1.414 1.414L11 5.829v10.173h2V5.829z"
                fill="#1a1a1a"
              ></path>
            </svg>
            공유하기</button
          ><button class="btn-social">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M21 6h-3.337c.216-.455.337-.963.337-1.5A3.5 3.5 0 0014.5 1 3.49 3.49 0 0012 2.051 3.49 3.49 0 009.5 1 3.5 3.5 0 006 4.5c0 .537.121 1.045.337 1.5H3a1 1 0 00-1 1v4a1 1 0 001 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 001-1V7a1 1 0 00-1-1zM4 8v2h7V8H4zm9 0v2h7V8h-7zm-2 4H5v7h6v-7zm2 7v-7h6v7h-6zm2-13.085a1.5 1.5 0 01-.5.085H13V4.5c0-.175.03-.344.085-.5A1.5 1.5 0 1115 5.915zM11 4.5V6H9.5a1.5 1.5 0 111.415-2c.055.156.085.325.085.5z"
                fill="#1a1a1a"
              ></path>
            </svg>
            선물하기
          </button>
        </div>
        <div class="btn-summit">
          <router-link to="/login">수강 옵션 구경하기</router-link>
        </div>
      </div>
      <button class="content-box" @click="handleOpenServicePopup">
        <div class="service">
          <div>
            <p class="service__title">{{ asideData.bannerTitle }}</p>
            <p class="service__sub">
              {{ asideData.bannerDesc }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="#cacaca"
                fill-rule="evenodd"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11 18h2v-2h-2v2zm1-12a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 00-4-4zm0 15a9 9 0 100-18 9 9 0 100 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
                ></path>
              </svg>
            </p>
          </div>
          <span class="service__logo"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 33">
              <path
                d="M30.603 6.187v7.027l-.043.053-.069-.215-.073-.214a10.546 10.546 0 0 0-9.901-7.088h-.018a10.545 10.545 0 0 0-9.909 7.095l-.073.215-.068.214-.046-.052V6.187H.3v20.621h10.103v-7.027l.046-.053.068.215.073.212a10.545 10.545 0 0 0 9.902 7.09h.017a10.545 10.545 0 0 0 9.902-7.09l.073-.212.068-.215.043.053v7.035h10.103V6.186H30.603Z"
              ></path>
            </svg>
          </span>
        </div>
      </button>
      <!-- 클래스101, 서비스 소개 보기 -->
      <LayerPopup
        :visible="serviceVisible"
        :title="`준비물과 함께\n언제 어디서든 수강하세요`"
        @handleClosePopup="handleCloseServicePopup"
      >
        <div slot="body" class="service-info__body">
          <p class="description">
            필요한 모든 준비물을 무료배송으로 보내드려요.<br />언제 어디서든
            편하게 시작해보세요
          </p>
          <ul class="service-info__list">
            <li>모든 디바이스 지원</li>
            <li>수강 기간 내 무제한 반복수강</li>
          </ul>
        </div>
      </LayerPopup>
    </div>
  </div>
</template>

<script>
import { getAside } from '@/api/index';
import LayerPopup from '../common/LayerPopup.vue';

export default {
  name: 'Aside',
  components: { LayerPopup },
  data() {
    return {
      // getAside
      asideData: {},

      // 팝업
      saleVisible: false,
      serviceVisible: false,
    };
  },
  created() {
    // getAside
    this.fetchAside();
  },
  methods: {
    // getAside
    async fetchAside() {
      try {
        const { data } = await getAside();
        this.asideData = data;
      } catch (error) {
        console.log(error);
      }
    },
    // 클래스 할인가 팝업
    handleOpenPopup() {
      this.saleVisible = true;
    },
    handleClosePopup() {
      this.saleVisible = false;
    },

    // 클래스101, 서비스 소개 보기 팝업
    handleOpenServicePopup() {
      this.serviceVisible = true;
    },
    handleCloseServicePopup() {
      this.serviceVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.aside {
  width: 400px;

  &__inner {
    position: sticky;
    top: 78px;
    z-index: 10;

    .content-box {
      width: 100%;
      padding: 24px;
      border-radius: 3px;
      box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
      border: 1px solid rgba(255, 255, 255, 1);
      margin-bottom: 12px;
    }
    .service {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      cursor: pointer;

      &__title {
        font-size: 14px;
        font-weight: 700;
        color: rgba(26, 26, 26, 1);
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 0px;
      }
      &__sub {
        font-size: 11px;
        line-height: 16px;
        letter-spacing: normal;
        margin: 4px 0px 0px;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: rgba(202, 202, 202, 1);

        svg {
          margin: -2px 0 0 5px;
        }
      }
    }
    .service__logo {
      display: block;
      width: auto;
      height: 36px;

      svg {
        display: block;
        width: auto;
        height: 100%;
        fill: rgba(0, 0, 0, 1);
      }
    }
    .description {
      font-size: 14px;
      font-weight: 500;
      color: rgba(26, 26, 26, 1);
      line-height: 20px;
      letter-spacing: -0.15px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      color: rgba(26, 26, 26, 1);
      line-height: 28px;
      margin: 5px 0 0 0;
    }
    .chips {
      margin-bottom: -4px;

      .chip {
        display: inline-block;
        margin-right: 4px;
        border-radius: 3px;
        margin-top: 8px;
        padding: 3px 6px;
        background-color: rgba(248, 248, 248, 1);
        font-size: 11px;
        font-weight: 600;
        line-height: 16px;
        color: rgba(162, 162, 162, 1);
        &.red {
          color: red;
        }
      }
    }
    .discount {
      font-size: 11px;
      font-weight: normal;
      color: rgba(162, 162, 162, 1);
      line-height: 16px;
      letter-spacing: normal;
      margin: 10px 0 0 0;
      display: flex;
      justify-content: flex-end;
    }
    .class-payment {
      display: flex;
      align-items: center;
      position: relative;

      .sale-info {
        font-size: 14px;
        font-weight: 500;
        color: rgba(26, 26, 26, 1);
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 0px;

        &__popup {
          vertical-align: middle;
          margin: 3px 0 0 3px;
        }
      }
    }
    .price-box {
      display: flex;
      align-items: center;
      margin-left: auto;

      .discount-rate {
        font-size: 16px;
        font-weight: normal;
        color: rgba(26, 26, 26, 1);
        line-height: 24px;
        letter-spacing: -0.3px;
        margin: 0 10px 0 0;
      }
      .discount-price {
        font-size: 18px;
        font-weight: 700;
        color: rgba(26, 26, 26, 1);
        line-height: 24px;
        letter-spacing: -0.45px;
        margin: 0px;
      }
    }

    .class-evaluation {
      margin-top: 16px;
      padding: 20px 0px;
      border-top: 1px solid rgba(248, 248, 248, 1);

      .class-evaluation__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;

        li {
          width: calc(50% - 20px);
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 500;
          color: rgba(26, 26, 26, 1);
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;

          svg {
            margin-right: 5px;
          }
        }
      }
    }
    .social {
      position: relative;
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .btn-social {
      flex: 1 1 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      color: rgba(26, 26, 26, 1);
      background-color: rgba(248, 248, 248, 1);
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.2px;
      padding: 16px;
      transition: background-color 0.1s ease 0s;
      text-decoration-line: none;

      &:hover {
        background-color: rgba(223, 223, 223, 1);
      }
    }
    .btn-summit {
      margin-top: 12px;

      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 86, 0, 1);
        font-weight: 700;
        font-size: 16px;
        letter-spacing: -0.2px;
        padding: 0px 20px;
        height: 48px;
        transition: background-color 0.1s ease 0s;
        text-decoration-line: none;

        &:hover {
          background-color: rgb(204, 69, 0);
        }
      }
    }
  }

  .sale-info__body {
    h3 {
      font-size: 18px;
      font-weight: bold;
      color: rgba(26, 26, 26, 1);
      line-height: 24px;
      letter-spacing: -0.45px;
      margin: 0px;
    }
    > dl {
      margin: 16px 0;
      padding: 16px 0;
      border-top: 1px solid rgba(248, 248, 248, 1);
      border-bottom: 1px solid rgba(248, 248, 248, 1);
      > div {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        dt {
          font-size: 14px;
          font-weight: normal;
          color: rgba(26, 26, 26, 1);
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
        }
        dd {
          font-size: 14px;
          font-weight: normal;
          color: rgba(26, 26, 26, 1);
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
        }
      }
    }
    .card-list {
      margin-top: 16px;
      li {
        font-size: 14px;
        font-weight: normal;
        color: rgba(26, 26, 26, 1);
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 8px 0;
      }
    }
    .notice {
      margin-top: 32px;
      .title {
        font-size: 14px;
        font-weight: normal;
        color: #625f5f;
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 8px 0 0 18px;
        text-indent: -18px;
      }
      &__list {
        li {
          font-size: 14px;
          font-weight: normal;
          color: #625f5f;
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 8px 0 0 18px;
          text-indent: -18px;
        }
      }
    }
  }
  .service-info__body {
    max-height: 600px;
    overflow-y: auto;
    padding: 10px 0;
    line-height: 1.5;
    .description {
      font-size: 14px;
      font-weight: normal;
      color: rgba(26, 26, 26, 1);
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px;
    }
    .service-info__list {
      display: flex;
      li {
        font-size: 11px;
        line-height: 16px;
        letter-spacing: normal;
        margin: 12px 16px 0 0;
        display: flex;
        font-weight: 600;
        color: rgba(255, 61, 0, 1);
      }
    }
  }
}
</style>
