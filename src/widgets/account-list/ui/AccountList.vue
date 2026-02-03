<template>
  <div class="list">
    <div class="list__labels">
      <span>Метки</span>
      <span>Тип записи</span>
      <span>Логин</span>
      <span>Пароль</span>
      <span></span>
    </div>

    <div v-if="accounts.length === 0" class="list__empty">
      Нажмите «+», чтобы добавить первую учетную запись.
    </div>

    <AccountRow v-for="account in accounts" :key="account.id" :account="account" />
  </div>
</template>

<script lang="ts" src="./scripts/AccountList.ts"></script>
<style scoped src="./styles/AccountList.css"></style>
