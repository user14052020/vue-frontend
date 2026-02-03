<template>
  <p class="field__error" :class="{ 'field__error--visible': Boolean(error) }">
    {{ error }}
  </p>
</template>

<script lang="ts" src="./scripts/FieldError.ts"></script>
<style scoped src="./styles/FieldError.css"></style>
