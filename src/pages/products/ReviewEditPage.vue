<template>
  <div class="review-edit-pages">
    <ReviewEditForm />
  </div>
</template>

<script>
import ReviewEditForm from '../../components/products/review/ReviewEditForm.vue';

export default {
  name: 'ReviewEditPage',
  components: {
    ReviewEditForm,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.review-edit-pages {
  width: 800px;
  margin: 0 auto;
  padding: 0 0 100px 0;
}
</style>
