<template>
  <div class="review-pages">
    <ReviewContainer />
  </div>
</template>

<script>
import ReviewContainer from '../../components/products/review/ReviewContainer.vue';

export default {
  name: 'ReviewPage',
  components: {
    ReviewContainer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.review-pages {
  width: 800px;
  margin: 0 auto;
  padding: 0 0 100px 0;
}
</style>
