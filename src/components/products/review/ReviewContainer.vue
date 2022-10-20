<template>
  <Loader v-if="loading" />
  <div v-else class="review-items">
    <div class="review-student">
      <h4>실제 수강생 후기</h4>
      <a href="/reviewCreatePage" class="btn">후기 작성하기</a>
    </div>

    <ReviewItems
      :reviewsData="reviewsData"
      @handlePopupOpen="handlePopupOpen"
      @handleModify="handleModify"
      @handleDelete="handleDelete"
    />

    <LayerPopup
      :visible="reviewVisible"
      :title="reviewDetail.name"
      @handleClosePopup="handleCloseReviewPopup"
    >
      <div slot="body" class="review-info__body">
        <p class="description">
          {{ reviewDetail.text }}
        </p>
      </div>
    </LayerPopup>
  </div>
</template>

<script>
import { getRealReviews, postDeleteReviews } from '../../../api';
import Loader from '@/components/common/Loader.vue';
import LayerPopup from '../../common/LayerPopup.vue';
import ReviewItems from './ReviewItems.vue';

export default {
  name: 'ReviewWrap',
  components: {
    Loader,
    LayerPopup,
    ReviewItems,
  },
  data() {
    return {
      reviewVisible: false,
      loading: false,

      // reviewsData
      reviewsData: [],
      reviewDetail: [],
    };
  },
  created() {
    // getReviews
    this.getReviewProduct();
  },
  methods: {
    // getReviews
    async getReviewProduct() {
      try {
        const { data } = await getRealReviews();
        this.reviewsData = data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.log(error);
      }
    },

    // deleteReviews
    async deleteReviewProduct(_id) {
      try {
        if (confirm('삭제하시겠습니까?')) {
          console.log(_id);
          await postDeleteReviews(_id);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // 리뷰 삭제
    handleDelete(_id) {
      this.deleteReviewProduct(_id);
    },

    // 리뷰 수정
    handleModify() {
      this.$route.push('/');
    },

    // popup
    handlePopupOpen(i) {
      this.reviewVisible = true;
      this.reviewDetail = this.reviewsData[i];
    },
    handleCloseReviewPopup() {
      this.reviewVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.review-items {
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
}
</style>
