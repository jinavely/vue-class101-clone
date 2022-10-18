<template>
  <div class="review-create-pages">
    <ReviewForm />
  </div>
</template>

<script>
import ReviewForm from '../../components/products/review/ReviewForm.vue';

export default {
  name: 'ReviewCreatePage',
  components: {
    ReviewForm,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.review-create-pages {
  width: 800px;
  margin: 0 auto;
  padding: 0 0 100px 0;
}
</style>
