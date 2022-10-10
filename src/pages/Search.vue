<template>
  <div class="search">
    <Loader v-if="loading" />
    <ul class="search-list" v-else>
      <li v-for="item in searchData" :key="item.id">
        <a href="/">
          <img
            src="https://image.tmdb.org/t/p/w500//VuukZLgaCrho2Ar8Scl9HtV3yD.jpg"
            alt="Venom"
          />
          <!-- <div class="empty-image" /> -->
          <h5>{{ item.title }}</h5>
          <p class="text">
            진실을 위해서라면 몸을 사리지 않고 사회의 부조리를 취재하는 정의로운
            열혈 기자 에디 브록. 거대 기업 라이프 파운데이션의 생체실험에 의혹을
            품고 뒤를 쫓던 그는 이들의 사무실에 잠입했다가 실험실에서 외계
            생물체 심비오트의 기습 공격을 받게 된다. 심비오트가 숙주의 몸과
            정신을 지배할 때 능력을 발휘하는 베놈은 에디의 몸에 기생하며 갖가지
            소동을 일으킨다. 한편 비밀리에 인간과 심비오트를 결합해 새로운
            생명체를 만들려는 시도를 계속하던 라이프 파운데이션의 회장 드레이크
            또한 심비오트의 숙주가 된다.
          </p>
          <p class="search-info">
            <span>평점: 6.8</span><span>조회수: 13749</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSearch } from '@/api/index';
import Loader from '../components/common/Loader.vue';

export default {
  name: 'search',
  components: { Loader },
  data() {
    return {
      // loading
      loading: false,

      // getSearch
      searchData: [],
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
        this.loading = true;
        const keyword = new URLSearchParams(location.search).get('keyword');
        const { results } = await getSearch(keyword);
        this.searchData = results;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1216px;
  margin: 0 auto;

  .search-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
    width: calc(100% + 10px);
    li {
      width: calc(25% - 20px);
      margin: 20px 10px;
      a {
        color: #000;
        text-decoration: none;
        .empty-image {
          position: relative;
          width: 100%;
          height: 200px;
          background: #d7d7d7;
          border-radius: 4px;
          &:after {
            content: '이미지 없음';
            position: absolute;
            top: 0;
            left: 0;
            font-size: 1.25rem;
            width: 100%;
            height: 100%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        > img {
          object-fit: cover;
          width: 100%;
          height: 200px;
          border-radius: 4px;
        }
        h5 {
          margin: 10px 0 0 0;
          font-size: 0.95rem;
        }
        .text {
          font-size: 0.8rem;
          line-height: 1.5;
          margin: 10px 0 0 0;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          word-break: keep-all;
        }
        .search-info {
          font-size: 0.7rem;
          margin: 5px 0 0 0;
          > span {
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
