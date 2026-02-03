<template>
  <div class="app-shell">
    <header class="hero">
      <div class="hero__copy">
        <p class="hero__eyebrow">Управление доступами</p>
        <h1 class="hero__title">Учетные записи</h1>
        <p class="hero__subtitle">
          Соберите пары логин/пароль, добавьте метки и храните только валидные записи.
        </p>
      </div>
      <div class="hero__orb"></div>
    </header>

    <main class="page">
      <AccountsPage />
    </main>
  </div>
</template>

<script lang="ts" src="./scripts/App.ts"></script>
<style scoped src="./styles/App.css"></style>
