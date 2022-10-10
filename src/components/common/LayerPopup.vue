<template>
  <div class="modal" v-if="visible">
    <div class="modal__dialog">
      <header class="modal__header">
        <h2>{{ title }}</h2>
        <button class="btn-close" @click="handleClosePopup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
              fill="#1a1a1a"
            ></path>
          </svg>
        </button>
      </header>
      <div class="modal__body">
        <slot name="body"></slot>
      </div>
      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *
 * @param {*} props
 * visible: 팝업 open 여부
 * title: 타이틀 텍스트
 * handleClosePopup: 팝업 닫기 버튼
 * @returns
 */

export default {
  name: 'LayerPopup',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      require: true,
      default: '제목',
    },
  },
  methods: {
    handleClosePopup(e) {
      this.$emit('handleClosePopup', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  inset: 0px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.72);
  opacity: 1;
  visibility: visible;
  overscroll-behavior: contain;

  &__dialog {
    display: flex;
    flex-direction: column;
    padding: 32px;
    width: 480px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px, rgba(0, 0, 0, 0.2) 0px 6px 4px,
      rgba(0, 0, 0, 0.3) 0px 9px 6px, rgba(0, 0, 0, 0.3) 0px 16px 12px,
      rgba(0, 0, 0, 0.8) 0px 24px 24px;
  }
  &__header {
    position: relative;
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      margin: 0;
      white-space: pre-wrap;
    }
  }
  &__body {
    max-height: 600px;
    overflow-y: auto;
    padding: 10px 0;
    line-height: 1.5;
  }
}
</style>
