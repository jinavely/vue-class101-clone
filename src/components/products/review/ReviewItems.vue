<template>
  <ul class="real-review-list" v-if="reviewsData" :reviewsData="reviewsData">
    <li v-for="(item, index) in reviewsData" :key="item.id">
      <div class="popup">
        <button class="popup__box" @click="handlePopupOpen(index)">
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
                <span class="date">{{ item.month }}??? {{ item.day }}???</span>
                <span class="realtime-write"
                  >{{ item.process }}% ?????? ??? ??????</span
                >
              </div>
            </div>
          </header>
          <p class="text" v-html="item.text" />
        </button>
        <div class="btn-group">
          <button class="btn-edit" @click="handleEdit(item.id)">
            ??????
          </button>
          <button class="btn-delete" @click="handleDelete(item.id)">
            ??????
          </button>
        </div>
      </div>
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
          {{ item.good }}????????? ?????????
        </button>
        <button class="btn-report">????????????</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ReviewItems',
  components: {},
  props: {
    reviewsData: {
      type: Array,
      require: true,
    },
  },
  methods: {
    // popup
    handlePopupOpen(i) {
      this.$emit('handlePopupOpen', i);
    },

    // ??????
    handleEdit(_id) {
      this.$emit('handleEdit', _id);
    },

    // ??????
    handleDelete(_id) {
      this.$emit('handleDelete', _id);
    },
  },
};
</script>

<style lang="scss" scoped>
.real-review-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  li {
    width: 100%;
    margin-top: 30px;
    .popup {
      position: relative;
      display: flex;

      &:hover {
        .btn-group {
          display: block;
        }
      }
      &__box {
        width: 100%;
        text-decoration: none;
        color: #000;
        text-align: left;
      }
      .btn-group {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: none;
        margin-left: auto;
        white-space: nowrap;
        button {
          margin-left: 5px;
        }
      }
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
      white-space: break-spaces;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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
</style>
