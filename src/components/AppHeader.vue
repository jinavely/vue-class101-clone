<template>
  <fragment>
    <HeaderBanner />

    <header>
      <div class="inner">
        <router-link to="/"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 33">
            <path
              d="M121.876 27.225a10.721 10.721 0 1 0 .001-21.443 10.721 10.721 0 0 0-.001 21.443Zm-4.168-15.071a5.92 5.92 0 0 1 4.198-1.75 5.915 5.915 0 0 1 4.199 1.75 6.035 6.035 0 0 1 1.682 4.382 5.936 5.936 0 0 1-1.682 4.33 5.945 5.945 0 0 1-8.397 0 5.96 5.96 0 0 1-1.682-4.33 6.026 6.026 0 0 1 1.682-4.382ZM137.329 26.796h4.912V6.21h-8.577v4.919h3.665v15.667ZM104.091 26.796h4.912V6.21h-8.577v4.919h3.665v15.667ZM45.764 23.043h8.665l1.447 3.753h5.408L52.707 6.21h-5.194L38.91 26.796h5.441l1.414-3.753ZM50.1 11.926l2.64 6.748h-5.254l2.614-6.748ZM72.757 22.447a3.759 3.759 0 0 1-2.225.583c-2.207 0-3.547-1.012-4.02-3.036l-5.208 1.012a6.232 6.232 0 0 0 2.895 4.577 10.823 10.823 0 0 0 6.078 1.642 10.052 10.052 0 0 0 6.031-1.75 5.695 5.695 0 0 0 2.42-4.898c0-3.127-1.88-5.12-5.636-5.977l-4.302-.945c-1.1-.248-1.656-.818-1.656-1.716a1.804 1.804 0 0 1 .771-1.487 3.156 3.156 0 0 1 2.01-.597 3.753 3.753 0 0 1 2.299.75 3.385 3.385 0 0 1 1.287 2.132l4.958-1.012a6.802 6.802 0 0 0-2.848-4.37 9.623 9.623 0 0 0-5.635-1.574 9.328 9.328 0 0 0-5.884 1.742 5.69 5.69 0 0 0-2.238 4.691c0 3.127 1.838 5.109 5.515 5.944l4.289.918c.55.077 1.065.31 1.487.67.288.319.437.738.416 1.166a1.815 1.815 0 0 1-.804 1.535ZM89.831 27.225c2.146.076 4.26-.537 6.031-1.75a5.696 5.696 0 0 0 2.42-4.898c0-3.127-1.88-5.12-5.636-5.977l-4.262-.945c-1.1-.248-1.655-.818-1.655-1.716a1.802 1.802 0 0 1 .77-1.487 3.156 3.156 0 0 1 2.01-.597 3.753 3.753 0 0 1 2.299.75 3.384 3.384 0 0 1 1.287 2.132l4.959-1.012a6.802 6.802 0 0 0-2.849-4.37 9.622 9.622 0 0 0-5.635-1.574 9.328 9.328 0 0 0-5.884 1.742 5.683 5.683 0 0 0-2.231 4.691c0 3.127 1.836 5.109 5.508 5.944l4.289.918c.55.077 1.066.31 1.488.67.287.319.436.738.415 1.166a1.815 1.815 0 0 1-.81 1.535 3.759 3.759 0 0 1-2.226.583c-2.202 0-3.542-1.012-4.02-3.036l-5.247 1.012a6.234 6.234 0 0 0 2.894 4.577 10.837 10.837 0 0 0 6.085 1.642ZM10.885 27.225a10.816 10.816 0 0 0 6.828-2.178 9.382 9.382 0 0 0 3.498-5.97h-5.26c-.32.936-.89 1.768-1.649 2.405a5.36 5.36 0 0 1-3.444 1.146 5.549 5.549 0 0 1-4.155-1.763 6.44 6.44 0 0 1 0-8.711 5.582 5.582 0 0 1 4.155-1.75 5.474 5.474 0 0 1 3.478 1.12 5.031 5.031 0 0 1 1.528 2.13h5.347a9.214 9.214 0 0 0-3.598-5.729 10.916 10.916 0 0 0-6.701-2.144 10.635 10.635 0 0 0-7.734 3.11 10.722 10.722 0 0 0 0 15.238 10.647 10.647 0 0 0 7.707 3.096ZM38.56 22.373H28.422V6.21h-5.073v20.586h13.389l1.822-4.423Z"
            ></path>
          </svg>
        </router-link>
        <div class="navbar-wrap">
          <ul class="navbar">
            <li><router-link to="/">구독</router-link></li>
            <li><router-link to="/products">스토어</router-link></li>
          </ul>
          <form
            class="searchbox"
            @mouseleave="searchHide"
            @submit="handleSubmit"
          >
            <input
              ref="inputRef"
              type="text"
              placeholder="찾으시는 영화가 있나요?"
              @focus="visible = true"
              @change="onChangeValue"
            />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="m22.925 21.16-5.605-5.605A8.453 8.453 0 0 0 19 10.5 8.5 8.5 0 0 0 10.5 2 8.5 8.5 0 0 0 2 10.5a8.5 8.5 0 0 0 8.5 8.5c1.895 0 3.64-.63 5.055-1.68l5.605 5.605c.1.1.255.1.355 0l1.415-1.415a.246.246 0 0 0-.005-.35ZM4.5 10.5c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z"
                ></path>
              </svg>
            </button>

            <div class="search-popup" v-if="visible">
              <div class="search-box">
                <h4>최근 검색어<button>전체삭제</button></h4>
                <ul class="recent-list">
                  <!-- <li v-if="keyword">
                    <button>{{ keyword }}</button>
                    <button class="btn-delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m13.75 12 7.2-7.15c.1-.1.1-.25 0-.35L19.5 3.05c-.1-.1-.25-.1-.35 0L12 10.25l-7.15-7.2c-.1-.1-.25-.1-.35 0L3.05 4.5c-.1.1-.1.25 0 .35l7.2 7.15-7.2 7.15c-.1.1-.1.25 0 .35l1.45 1.45c.1.1.25.1.35 0l7.15-7.2 7.15 7.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L13.75 12Z"
                        ></path>
                      </svg>
                    </button>
                  </li> -->
                </ul>
              </div>
              <div class="search-box">
                <h4>인기 검색어</h4>
                <ol class="popular-list">
                  <li v-for="(item, index) in popularSearchData" :key="item.id">
                    <button>
                      <em>{{ index + 1 }}</em
                      ><span>{{ item.title }}</span>
                    </button>
                  </li>
                </ol>
              </div>
            </div>
          </form>
        </div>
        <ul class="utils">
          <li><router-link to="/">크리에이터 지원</router-link></li>
          <li><router-link to="/">기업교육</router-link></li>
          <li><router-link to="/login">로그인</router-link></li>
        </ul>
      </div>
    </header>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import { getPopularSearch } from '@/api/index';
import HeaderBanner from './HeaderBanner.vue';

export default {
  name: 'AppHeader',
  components: { HeaderBanner, Fragment },
  data() {
    return {
      // 검색 팝업
      visible: false,

      // getPopularSearch
      popularSearchData: [],
      keyword: '',
    };
  },
  created() {
    // getSearch
    this.fetchSearch();
  },
  methods: {
    // getSearch
    async fetchSearch() {
      try {
        const { results: popularSearchResults } = await getPopularSearch();
        this.popularSearchData = popularSearchResults.slice(0, 10);
      } catch (error) {
        console.log(error);
      }
    },

    // 검색 팝업 닫기
    searchHide() {
      this.visible = false;
      this.$refs.inputRef.blur();
    },

    // 검색
    handleSubmit(e) {
      e.preventDefault();
      if (this.keyword !== '') {
        this.$router.push(`/search?keyword=${this.keyword}`);
      } else {
        alert('검색어를 입력해주세요!');
      }
    },
    onChangeValue(e) {
      this.keyword = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  background: #fff;
  backdrop-filter: var(--bg-color);

  .inner {
    display: flex;
    align-items: center;
    max-width: 1216px;
    margin: 0 auto;
    height: 78px;
  }
  svg {
    display: block;
    width: auto;
    height: 24px;
    fill: #1a1a1a;
    margin-top: -3px;
  }
  .navbar-wrap {
    display: flex;
    align-items: center;

    .navbar {
      display: flex;
      align-items: center;
      margin-left: 40px;

      li a {
        border-width: 0;
        color: #1a1a1a;
        margin: 0 10px;
        padding: 0;
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 1.625rem;
        white-space: nowrap;
        text-decoration: none;
      }
    }
  }

  .searchbox {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0;
    width: 370px;
    height: 38px;
    margin-left: 30px;
    background: #f8f8f8;

    input {
      width: calc(100% - 30px);
      height: 100%;
      padding: 0 10px;
      border: none;
      background: transparent;
    }

    > button {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .utils {
    margin-left: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    li a {
      color: var(--system-on-color);
      margin: 0 0 0 24px;
      padding: 0px;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.125rem;
      text-decoration: none;
    }
  }
  .search-popup {
    position: absolute;
    left: 0;
    top: 38px;
    z-index: 1;
    width: 100%;
    padding: 16px;
    background: #fff;
    border: 1px solid #d9d9d9;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    .search-box {
      ~ .search-box {
        margin-top: 30px;
      }
      h4 {
        border-width: 0px;
        color: var(--system-on-color);
        margin: 0px;
        padding: 0px;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25rem;
        display: flex;
        justify-content: space-between;
        > button {
          color: rgba(102, 102, 102, 1);
          font-size: 0.75rem;
          line-height: 1.125rem;
        }
      }
      .recent-list {
        margin-top: 10px;
        li {
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          cursor: pointer;
          margin: 0;
          padding: 6px 0;
          display: flex;
          justify-content: space-between;
          button:not(.btn-delete) {
            text-decoration: none;
            width: 100%;
            border-width: 0px;
            display: inline-block;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #000;
          }
          .btn-delete {
            svg {
              display: block;
              width: 12px;
              height: 12px;
              fill: rgba(102, 102, 102, 1);
            }
          }
        }
      }
      .popular-list {
        display: flex;
        flex-wrap: wrap;
        li {
          position: relative;
          width: 50%;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          cursor: pointer;
          margin: 0;
          padding: 6px 0;
          display: flex;
          justify-content: space-between;
          > button {
            text-decoration: none;
            width: 100%;
            border-width: 0px;
            display: inline-block;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #000;
            em {
              border-width: 0px;
              color: rgba(255, 86, 0, 1);
              margin: 0 8px 0 0;
              padding: 0;
              font-size: 0.875rem;
              font-weight: 700;
              line-height: 1.125rem;
            }
          }
        }
      }
    }
  }
}
</style>
