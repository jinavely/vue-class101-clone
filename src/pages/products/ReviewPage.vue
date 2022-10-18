<template>
  <div class="review-pages">
    <ReviewItems />
  </div>
</template>

<script>
import ReviewItems from '../../components/products/review/ReviewItems.vue';

export default {
  name: 'ReviewPage',
  components: {
    ReviewItems,
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
