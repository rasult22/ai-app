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
        <div class="profile-auth__user-title">
          @username2227994
        </div>
      </div>
      <div class="profile-auth__no-works">
        <img class="profile-auth__no-works-image" :src="require('src/assets/pictures.png')" alt="">
        <div class="profile-auth__title">
          У вас пока нет художественных работ
        </div>
        <div class="profile-auth__no-works-btn">
          <BaseButton yellow>Создать</BaseButton>
        </div>
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
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-title {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
      }
    }
    &__img {
      max-width: 68px;
      img {
        width: 100%;
      }
    }
    &__title {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0px;
      max-width: 328px;
      text-align: center;
    }
    &__no-works{
      padding-top: 20vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-image {
        max-width: 200px;
        text-align: center;
      }
      &-btn {
        padding: 16px;
        position: absolute;
        bottom: 16px;
        width: 100%;
      }
    }
  }
}
.login-btn {
  color: rgba(25, 118, 210, 1);
}
</style>
