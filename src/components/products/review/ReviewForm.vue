<template>
  <Loader v-if="loading" />
  <div v-else class="review-form">
    <div class="review-student">
      <h4>수강생 후기 작성</h4>
      <a href="/reviewPage" class="btn">후기 리스트가기</a>
    </div>

    <form action="#" @submit.prevent="fetchSubmitForm">
      <div class="form-control">
        <label>아바타</label>
        <input type="file" value="" />
      </div>
      <div class="form-control">
        <label>닉네임</label>
        <input type="text" value="" required v-model="form.nickname" />
        <p class="invalid">아이디를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>점수 매기기</label>
        <input
          type="number"
          value=""
          required
          min="0"
          max="5"
          v-model="form.rank"
        />
        <p class="invalid">점수를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>수강 프로세스</label>
        <input
          type="number"
          value=""
          required
          min="0"
          max="100"
          v-model="form.process"
        />
        <p class="invalid">수강 프로세스를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>컨텐츠</label>
        <textarea required maxlength="200" v-model="form.text"></textarea>
        <p class="invalid">컨텐츠를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>댓글수</label>
        <input
          type="number"
          value=""
          required
          min="0"
          max="1000"
          v-model="form.reply"
        />
        <p class="invalid">댓글수를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>좋아요</label>
        <input type="number" value="" v-model="form.good" />
      </div>

      <input type="hidden" value="" v-model="form.month" />
      <input type="hidden" value="" v-model="form.day" />
      <input type="hidden" value="" v-model="form.link" />

      <button type="submit" class="btn-submit">확인</button>
    </form>
  </div>
</template>

<script>
import Loader from '@/components/common/Loader.vue';
import { postCreateReviews } from '@/api/index';

export default {
  name: 'ReviewForm',
  components: {
    Loader,
  },
  data() {
    return {
      loading: false,

      // Form
      realData: {},
      form: {
        link: '',
        avatar: 'https://class101.net/images/default-user.png',
        nickname: '닉네임',
        rank: 0,
        process: 0,
        text: 'ㄴㅁㅇㄹ',
        reply: 0,
        good: 0,
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      },
    };
  },
  methods: {
    async fetchSubmitForm() {
      try {
        const response = await postCreateReviews({
          link: this.form.link,
          avatar: this.form.avatar,
          nickname: this.form.nickname,
          rank: this.form.rank,
          process: this.form.process,
          text: this.form.text,
          reply: this.form.reply,
          good: this.form.good,
          month: this.form.month,
          day: this.form.day,
        });

        console.log(response);

        if (response.status == 201) {
          this.$router.push('/reviewPage');
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.review-form {
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

  .form-control {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 20px 0;
    label {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px 0px 4px;
      color: rgba(58, 58, 58, 1);
    }
    textarea,
    input {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0;
      border: 1px solid rgba(239, 239, 239, 1);
      background-color: white;
      height: 48px;
      flex: 1 1 auto;
      width: 100%;
      color: rgba(26, 26, 26, 1);
      box-sizing: border-box;
      padding: 0px 16px;
      border-radius: 3px;
    }
    textarea {
      height: 100px;
    }
    .invalid {
      display: none;
      font-size: 0.7rem;
      color: #f00;
      margin-top: 5px;
    }
    textarea:invalid ~ .invalid,
    input:invalid ~ .invalid {
      display: block;
    }
  }
  .btn-submit {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: white;
    background-color: #ff5600;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.2px;
    padding: 0px 20px;
    height: 48px;
    transition: background-color 0.1s ease 0s;
    -webkit-text-decoration-line: none;
    text-decoration-line: none;
    &:hover {
      background-color: #cc4500;
    }
  }
}
</style>
