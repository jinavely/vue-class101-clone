<template>
  <div class="container">
    <Loader v-if="loading" />
    <fragment v-else>
      <!-- Visual -->
      <Visual />

      <div class="container__inner">
        <div class="contents">
          <nav ref="Nav">
            <li v-for="(item, index) in navigation" :key="index">
              <button @click="handleMoveTo($event, item)">
                {{ item }}
                <span v-if="item === '커뮤니티'"
                  >&nbsp;{{ communityData.length }}개</span
                >
              </button>
            </li>
          </nav>

          <a class="banner-board" target="_blank" :href="leaderBoardData.url">
            <dl>
              <dt>{{ leaderBoardData.title }}</dt>
              <dd>
                {{ leaderBoardData.description }}
              </dd>
            </dl>
            <div class="banner-board__info">
              <img
                :src="leaderBoardData.imageURL"
                :alt="leaderBoardData.imageAlt"
              />
            </div>
          </a>
          <section class="class-info">
            <h2>클래스 정보</h2>
            <dl>
              <dt>클래스 분량</dt>
              <dd>
                {{ curriculumData.length }}개 챕터,&nbsp; {{ totalFn() }}개
                세부강의
              </dd>
              <dt>수강 가능일</dt>
              <dd>{{ leaderBoardData.coursesDate }}</dd>
              <dt>자막 포함 여부</dt>
              <dd>{{ leaderBoardData.included }}</dd>
            </dl>
          </section>

          <!-- 후기 -->
          <Reviews ref="Reviews" />

          <!-- 클래스 소개 -->
          <Intro ref="Intro" />

          <!-- 커리큘럼 -->
          <Curriculum ref="Curriculum" />

          <!-- 크리에이터 -->
          <Creator ref="Creator" />

          <!-- 커뮤니티 -->
          <Community ref="Community" />
        </div>

        <!-- Aside -->
        <Aside />
      </div>

      <!-- TodayProduct -->
      <TodayProduct />
    </fragment>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment';
import { getLeaderBoard, getCommunity, getCurriculum } from '@/api/index';
import Aside from '../components/products/Aside.vue';
import Visual from '../components/products/Visual.vue';
import TodayProduct from '../components/products/TodayProduct.vue';
import Intro from '../components/products/Intro.vue';
import Reviews from '../components/products/review/Reviews.vue';
import Curriculum from '../components/products/Curriculum.vue';
import Creator from '../components/products/Creator.vue';
import Community from '../components/products/Community.vue';
import Loader from '../components/common/Loader.vue';
export default {
  name: 'Products',
  components: {
    Fragment,
    Aside,
    Visual,
    TodayProduct,
    Intro,
    Reviews,
    Curriculum,
    Creator,
    Community,
    Loader,
  },
  data() {
    return {
      loading: false,

      navigation: {
        reviews: '후기',
        intro: '클래스 소개',
        curriculum: '커리큘럼',
        creator: '크리에이터',
        community: '커뮤니티',
      },

      // getLeaderBoard
      leaderBoardData: {},
      // getCurriculum
      curriculumData: [],
      // getCommunity
      communityData: [],
    };
  },
  created() {
    // fetchData
    this.fetchData();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  },
  methods: {
    // fetchData
    async fetchData() {
      try {
        this.loading = true;
        const { data: lData } = await getLeaderBoard();
        this.leaderBoardData = lData;

        const { data: cData } = await getCurriculum();
        this.curriculumData = cData;

        const { data: c2Data } = await getCommunity();
        this.communityData = c2Data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    totalFn() {
      const total = [];
      this.curriculumData.map((item) =>
        item.menuLink.map((el, i) => total.push(i))
      );
      return total.length;
    },

    // Nav scrollspy Click
    handleMoveTo(e, itemRef) {
      const headerH =
        document.querySelector('header').clientHeight +
        this.$refs.Nav.offsetHeight;
      let scrollTop = 0;

      switch (itemRef) {
        case '후기':
          scrollTop = this.$refs.Reviews.$el.offsetTop - headerH;
          break;
        case '클래스 소개':
          scrollTop = this.$refs.Intro.$el.offsetTop - headerH;
          break;
        case '커리큘럼':
          scrollTop = this.$refs.Curriculum.$el.offsetTop - headerH;
          break;
        case '크리에이터':
          scrollTop = this.$refs.Creator.$el.offsetTop - headerH;
          break;
        case '커뮤니티':
          scrollTop = this.$refs.Community.$el.offsetTop - headerH;
          break;
        default:
          break;
      }
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });

      // 활성화, 비활성화 UI
      Array.from(this.$refs.Nav.children).map((el) =>
        el.classList.remove('active')
      );
      e.target.parentNode.classList.add('active');
    },
    // Nav scrollspy Scroll
    handleScroll() {
      const reviewsTop = this.$refs.Reviews.$el.offsetTop;
      const introTop = this.$refs.Intro.$el.offsetTop;
      const curriculumTop = this.$refs.Curriculum.$el.offsetTop;
      const creatorTop = this.$refs.Creator.$el.offsetTop;
      const communityTop = this.$refs.Community.$el.offsetTop;
      const navRef = this.$refs.Nav;
      const headerH =
        document.querySelector('header').clientHeight + navRef.offsetHeight;
      let scrollY = window.scrollY;

      if (navRef) {
        Array.from(navRef.children).map((el) => el.classList.remove('active'));
      }
      if (reviewsTop <= scrollY + headerH && introTop > scrollY + headerH) {
        navRef.children[0].classList.add('active');
      } else if (
        introTop <= scrollY + headerH &&
        curriculumTop > scrollY + headerH
      ) {
        navRef.children[1].classList.add('active');
      } else if (
        curriculumTop <= scrollY + headerH &&
        creatorTop > scrollY + headerH
      ) {
        navRef.children[2].classList.add('active');
      } else if (
        creatorTop <= scrollY + headerH &&
        communityTop > scrollY + headerH
      ) {
        navRef.children[3].classList.add('active');
      } else if (
        communityTop <= scrollY + headerH &&
        communityTop + this.$refs.Community.$el.clientHeight > scrollY + headerH
      ) {
        navRef.children[4].classList.add('active');
      } else {
        if (navRef) {
          Array.from(navRef.children).map((el) =>
            el.classList.remove('active')
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 100px;
  &__inner {
    display: flex;
    justify-content: space-between;
    width: 1216px;
    height: 100%;
    margin: 24px auto 0 auto;

    .contents {
      width: 800px;
    }
  }
  .contents {
    nav {
      position: sticky;
      top: 78px;
      z-index: 5;
      background: #fff;
      display: flex;
      align-items: center;
      gap: 20px;

      li {
        button {
          text-decoration: none;
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: -0.15px;
          padding: 14px 0;
          display: flex;
          align-items: center;
          color: rgb(162, 162, 162);
        }
        &.active button {
          color: #000;
        }
      }
    }
    .banner-board {
      width: 100%;
      margin-top: 10px;
      border-bottom: 1px solid rgba(248, 248, 248, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(0, 0, 0, 1);
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
      padding: 0 0 0 24px;

      dl {
        dt,
        dd {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.3px;
          margin: 0px;
          font-weight: bold;
          color: inherit;
        }
        dd {
          font-size: 11px;
        }
      }
      &__info {
        width: 120px;
      }
    }
    .class-info {
      padding-top: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(248, 248, 248, 1);

      h2 {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        margin: 0px 0px 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      dl {
        display: flex;
        dt,
        dd {
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px 12px 0px 0px;
          color: rgba(162, 162, 162, 1);
        }
        dd {
          margin: 0px 48px 0px 0px;
          color: rgba(26, 26, 26, 1);
        }
      }
    }
  }
}
</style>
