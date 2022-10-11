<template>
  <div class="creator">
    <section>
      <header>
        <h3 v-html="creatorData.title" />
        <img :src="creatorData.avatar" :alt="creatorData.summary" />
      </header>
      <p class="exposure">
        <img :src="creatorData.snsImageUrl" :alt="creatorData.snsSummary" />{{
          creatorData.nickname
        }}
      </p>
      <p class="last-activity">
        마지막 활동
        <strong>{{ creatorData.answer }}시간 전 미션 답변 작성</strong>
      </p>
      <div class="text" :class="show ? 'active' : null">
        <p>
          <img :src="creatorData.image" :alt="creatorData.alt" />
        </p>
        <p v-html="creatorData.text" />
      </div>

      <Btn text="더보기" @click="onClick" Nav="Nav" /><!-- 더보기 버튼 -->
    </section>
  </div>
</template>

<script>
import { getCreator } from '@/api/index';
import Btn from '../common/Btn.vue';

export default {
  name: 'Creator',
  components: { Btn },
  data() {
    return {
      // 더보기
      show: false,

      // getCreator
      creatorData: {},
    };
  },
  created() {
    // getCreator
    this.fetchCreator();
  },
  methods: {
    // getCreator
    async fetchCreator() {
      try {
        const { data } = await getCreator();
        this.creatorData = data;
      } catch (error) {
        console.log(error);
      }
    },

    // 더보기
    onClick(e) {
      const headerH = document.querySelector('header').clientHeight + 48;

      this.show = !this.show;
      this.show
        ? (e.target.innerText = '접기')
        : (e.target.innerText = '더보기');

      if (!this.show) {
        const scrollTop = e.target.offsetParent.offsetTop - headerH;
        window.scrollTo({ top: scrollTop });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.creator {
  > section {
    position: relative;
    padding: 48px 0px;

    header {
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: 24px;
        font-weight: normal;
        line-height: 34px;
        letter-spacing: -0.4px;
        margin: 0px;
        color: rgba(26, 26, 26, 1);
      }
      img {
        object-fit: cover;
        width: 64px;
        height: 64px;
        border: 1px solid rgba(248, 248, 248, 1);
        border-radius: 100%;
      }
    }

    .exposure {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 10px;
      color: rgba(162, 162, 162, 1);
      img {
        width: 18px;
        height: 18px;
      }
    }
    .last-activity {
      font-size: 11px;
      font-weight: normal;
      color: rgba(26, 26, 26, 1);
      line-height: 16px;
      letter-spacing: normal;
      margin: 10px 0 0 0;
    }
    .text {
      position: relative;
      max-height: 384px;
      overflow: hidden;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(248, 248, 248, 1);

      &.active {
        max-height: 100%;
        &:after {
          display: none;
        }
      }
      p {
        margin-top: 10px;
        white-space: pre-wrap;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 90px;
        background-image: linear-gradient(
          rgba(255, 255, 255, 0) 0%,
          rgb(255, 255, 255) 100%
        );
      }
    }
  }
}
</style>
