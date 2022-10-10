<template>
  <div class="curriculum">
    <section class="curriculum__inner">
      <h3>커리큘럼</h3>
      <p class="description">
        클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
        쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
      </p>
      <ol class="curriculum-list">
        <li v-for="item in curriculumData" :key="item.bigMenu.id">
          {{ item.bigMenu.name }}
          <ol class="class-list">
            <li v-for="inItem in item.menuLink" :key="inItem.id">
              <router-link :to="inItem.link" v-if="inItem.free">
                <span class="number">{{ inItem.id }}</span
                >{{ inItem.name }}
                <span class="chips" v-if="inItem.free">무료 공개</span>
              </router-link>
              <div class="no-link" v-else>
                <span class="number">{{ inItem.id }}</span
                >{{ inItem.name }}
                <span class="chips" v-if="inItem.free">무료 공개</span>
              </div>
            </li>
          </ol>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
import { getCurriculum } from '@/api/index';

export default {
  name: 'Curriculum',
  data() {
    return {
      // getCurriculum
      curriculumData: [],
    };
  },
  created() {
    // getCurriculum
    this.fetchCurriculum();
  },
  methods: {
    // getCurriculum
    async fetchCurriculum() {
      try {
        const { data } = await getCurriculum();
        this.curriculumData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.curriculum {
  &__inner {
    padding: 48px 0px;
    h3 {
      font-size: 24px;
      font-weight: bold;
      line-height: 34px;
      letter-spacing: -0.4px;
      margin: 0px;
      color: rgba(26, 26, 26, 1);
    }
    .description {
      margin: 12px 0px 16px;
      font-size: 14px;
      line-height: 24px;
      text-align: left;
      color: rgba(26, 26, 26, 1);
    }

    .curriculum-list {
      padding: 0;
      > li:not(:first-child) {
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid rgba(248, 248, 248, 1);
      }
      .class-list {
        padding: 0;
        li {
          margin-top: 12px;
          .chips {
            font-size: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(58, 58, 58, 1);
            border-radius: 3px;
            padding: 4px 5px;
            color: #fff;
            margin-left: auto;
            white-space: nowrap;
          }
          a,
          .no-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-size: 13px;
            font-weight: normal;
            line-height: 20px;
            letter-spacing: -0.15px;
            margin: 0px;
            color: rgba(26, 26, 26, 1);
          }
          .number {
            font-size: 10px;
            font-weight: normal;
            line-height: 16px;
            letter-spacing: normal;
            margin: 0px 16px 0px 0px;
            background-color: rgba(248, 248, 248, 1);
            color: rgba(98, 98, 98, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            border-radius: 100%;
          }
        }
      }
    }
  }
}
</style>
