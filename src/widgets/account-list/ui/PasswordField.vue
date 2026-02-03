<template>
  <div class="password-field">
    <input
      :id="id"
      :value="modelValue"
      class="field__input field__input--with-icon"
      :class="{ 'field__input--error': Boolean(error) }"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="onInput"
      @blur="$emit('blur')"
    />
    <button class="password-toggle" type="button" @click="togglePassword">
      <span class="sr-only">Показать или скрыть пароль</span>
      <svg v-if="!showPassword" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 3l18 18M10.5 10.5a2.5 2.5 0 003.5 3.5M6.4 6.4C4.2 8 2.7 10.1 2 12c1.7 4.5 6 7.5 10 7.5 1.7 0 3.3-.5 4.7-1.3M9.2 4.7C10.1 4.4 11 4.3 12 4.3c4 0 8.3 3 10 7.5-.4 1-1 2-1.7 2.8"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.8"
        />
      </svg>
      <svg v-else viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.8"
        />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" src="./scripts/PasswordField.ts"></script>
<style scoped src="./styles/PasswordField.css"></style>
