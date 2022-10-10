<template>
  <div>
    <Loader v-if="loading" />
    <fragment v-else>
      <div>Login</div>
    </fragment>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Loader from '../components/common/Loader.vue';

export default {
  name: 'Login',
  components: {
    Fragment,
    Loader,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style></style>
