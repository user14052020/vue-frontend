<template>
  <section class="card">
    <header class="card__header">
      <div>
        <h2 class="card__title">Аккаунты</h2>
        <p class="card__subtitle">Добавляйте учетные записи и храните только валидные данные.</p>
      </div>
      <button class="add-button" type="button" @click="store.addAccount">+</button>
    </header>

    <LabelHint />

    <AccountList :accounts="store.accounts" />
  </section>
</template>

<script lang="ts" src="./scripts/AccountsPage.ts"></script>
<style scoped src="./styles/AccountsPage.css"></style>
