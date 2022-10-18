<template>
  <div class="search">
    <Loader v-if="loading" />
    <ul class="search-list" v-else>
      <li v-for="item in searchData" :key="item.id">
        <a href="/">
          <img
            :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
            :alt="item.title"
            v-if="item.backdrop_path"
          />
          <div class="empty-image" v-else />

          <h5>{{ item.title }}</h5>
          <p class="text">{{ item.overview }}</p>
          <p class="search-info">
            <span>평점: {{ item.vote_average }}</span
            ><span>조회수: {{ item.vote_count }}</span>
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
        const keyword = new URL(location.href).searchParams.get('keyword');
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
