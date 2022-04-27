<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="from_name" />
    <input type="submit" value="Send" />
  </form>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "gmail",
          "template_dyvlfqm",
          this.$refs.form,
          "user_UCVQB9AIUbJaobUtpSXnz"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
