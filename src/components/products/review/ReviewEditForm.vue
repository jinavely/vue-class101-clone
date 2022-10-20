<template>
  <Loader v-if="loading" />
  <div v-else class="review-form">
    dsaf
  </div>
</template>

<script>
import Loader from '@/components/common/Loader.vue';
import { postCreateReviews } from '@/api/index';

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
  methods: {
    async fetchSubmitForm() {
      try {
        const response = await postCreateReviews({
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

        if (response.status == 201) {
          this.$router.push('/reviewPage');
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },

    onFileChange() {
      console.log(this.form);
      // this.form.avatar = event.target.files[0].name;
      // this.$emit('update:modelValue', event.target.files[0]);
    },
    handleMax(event) {
      let val = event.target.value;
      const maxlength = event.target.attributes.maxlength.nodeValue;
      const max = event.target.attributes.max.nodeValue;

      this.form.rating = val.substr(0, maxlength);
      if (Number(max) < Number(val)) {
        alert('올바른 숫자를 넣어주세요');
        this.form.rating = '';
        return;
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
