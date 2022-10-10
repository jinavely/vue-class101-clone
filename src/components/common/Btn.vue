<template>
  <button v-if="button" class="btn-more" @click="onClick" :text="text">
    {{ text }}
  </button>
  <router-link
    v-else
    class="btn-more"
    :target="target"
    :to="link"
    :text="text"
    >{{ text }}</router-link
  >
</template>

<script>
/**
 *
 * @param {*} props
 * button: button or a
 * target: 새창 여부
 * link: 링크 주소
 * text: 텍스트
 * onClick: click 메서드
 * @returns
 */

export default {
  name: 'Btn',
  components: {},
  props: {
    button: {
      type: Boolean,
      require: false,
      default: true,
    },
    target: {
      type: String,
      require: false,
      default: '_blank',
    },
    link: {
      type: String,
      require: false,
      default: 'https://www.naver.com',
    },
    text: {
      type: String,
      require: true,
      default: '더보기',
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgba(26, 26, 26, 1);
  background-color: rgba(248, 248, 248, 1);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  margin-top: 24px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  &:hover {
    background-color: rgba(223, 223, 223, 1);
  }
}
</style>
