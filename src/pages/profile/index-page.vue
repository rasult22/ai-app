<script lang="ts" setup>
import BaseButton from 'src/ui/buttons/base-button.vue';

const isAuthorized = true
</script>

<template>
  <div class="profile full-width q-px-md">
    <div v-if="!isAuthorized" class="profile-unauth">
      <div class="profile-unauth__title">
        Добро пожаловать в ...
      </div>
      <div class="profile-unauth__text">
        Зарегистрироваться, чтобы получить доступ к работам в вашей галерее
      </div>
      <div class="profile-unauth__bottom">
        <BaseButton class="profile-unauth__btn" yellow>
          Зарегистрироваться через почту
        </BaseButton>
        <BaseButton class="profile-unauth__btn" black>
          Зарегистрироваться с Apple
        </BaseButton>
        <BaseButton class="profile-unauth__btn" green>
          Зарегистрировать с Google
        </BaseButton>

        <BaseButton >
          Уже есть аккаунт? <span class="login-btn">Войти</span>
        </BaseButton>
      </div>
    </div>
    <div class="profile-auth">
      <div class="profile-auth__user">
        <img class="profile-auth__img" :src="require('src/assets/user-profile.png')" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  &-unauth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    &__title {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: center;
    }
    &__text {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: center;
      color: rgba(0, 0, 0, 0.3);
    }
    &__btn {
      margin-top: 16px;
    }
    &__bottom {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 16px 20px;
    }
  }
  &-auth {
    &__user {

    }
    &__img {
      max-width: 48px;
    }
  }
}
.login-btn {
  color: rgba(25, 118, 210, 1);
}
</style>
