<template>
  <Loader v-if="loading" />
  <div v-else class="review-form">
    <div class="review-student">
      <h4>수강생 후기 수정</h4>
      <a href="/reviewPage" class="btn">후기 리스트가기</a>
    </div>

    <form action="#" @submit.prevent="fetchSubmitForm">
      <div class="form-control">
        <label>아바타</label>
        <input type="file" value="" @change="handleFileChange" />
      </div>
      <div class="form-control">
        <label>닉네임</label>
        <input
          type="text"
          value=""
          required
          v-model="form.name"
          placeholder="닉네임을 넣어주세요"
        />
        <p class="invalid">아이디를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>점수 매기기</label>
        <input
          type="number"
          required
          min="0"
          max="5"
          maxlength="1"
          v-model="form.rating"
        />
        <p class="invalid">0부터 5점 중에 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>수강 프로세스</label>
        <input
          type="number"
          value=""
          required
          min="0"
          max="100"
          maxlength="3"
          v-model="form.process"
        />
        <p class="invalid">0% 부터 100% 수강 프로세스를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>컨텐츠</label>
        <textarea
          required
          maxlength="200"
          v-model="form.text"
          placeholder="컨텐츠 입력"
        ></textarea>
        <p class="invalid">컨텐츠를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>댓글수</label>
        <input
          type="number"
          value=""
          required
          min="0"
          max="500"
          maxlength="4"
          v-model="form.reply"
        />
        <p class="invalid">0부터 500중에 댓글수를 입력해주세요</p>
      </div>
      <div class="form-control">
        <label>좋아요</label>
        <input
          type="number"
          value=""
          required
          min="0"
          max="1000"
          maxlength="4"
          v-model="form.good"
        />
        <p class="invalid">0부터 1000중에 좋아요를 입력해주세요</p>
      </div>

      <input type="hidden" value="" v-model="form.month" />
      <input type="hidden" value="" v-model="form.day" />
      <input type="hidden" value="" v-model="form.link" />
      <input type="hidden" value="" v-model="form.id" />

      <button type="submit" class="btn-submit">확인</button>
    </form>
  </div>
</template>

<script>
import Loader from '@/components/common/Loader.vue';
import { getRealReview, postEditReviews } from '@/api/index';

export default {
  name: 'ReviewEditForm',
  components: {
    Loader,
  },
  data() {
    return {
      loading: false,

      // Form
      form: {
        id: Date.now(),
        link: '',
        avatar: 'https://class101.net/images/default-user.png',
        name: '',
        rating: '',
        process: '',
        text: '',
        reply: '',
        good: '',
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      },
    };
  },
  created() {
    this.fetchReview();
  },
  methods: {
    // 해당 댓글 조회
    async fetchReview() {
      const { data } = await getRealReview(this.$route.params.id);
      this.form.id = data.id;
      this.form.link = data.link;
      this.form.avatar = data.avatar;
      this.form.name = data.name;
      this.form.rating = data.rating;
      this.form.process = data.process;
      this.form.text = data.text;
      this.form.reply = data.reply;
      this.form.good = data.good;
      this.form.month = data.good;
      this.form.day = data.good;
    },
    // 해당 댓글 수정
    async fetchSubmitForm() {
      try {
        await postEditReviews(this.$route.params.id, {
          id: this.form.id,
          link: this.form.link,
          avatar: this.form.avatar,
          name: this.form.name,
          rating: this.form.rating,
          process: this.form.process,
          text: this.form.text,
          reply: this.form.reply,
          good: this.form.good,
          month: this.form.month,
          day: this.form.day,
        });
        this.$router.push('/reviewPage');
      } catch (error) {
        console.log(error);
      }
    },
    // 파일 이미지
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg|gif|webp)$/)) {
        this.form.avatar = window.URL.createObjectURL(file);
        this.prevAvatar = this.form.avatar;
      }
    },
    // validation
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
      color: rgba(26, 26, 26, 0.504);
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
