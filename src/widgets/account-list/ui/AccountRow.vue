<template>
  <div class="row">
    <div class="field">
      <input
        :id="fieldIds.label"
        v-model="form.labelInput"
        class="field__input"
        :class="{ 'field__input--error': errors.labelInput }"
        type="text"
        placeholder="Введите метки"
        maxlength="50"
        @blur="commit"
      />
      <p class="field__error" :class="{ 'field__error--visible': errors.labelInput }">
        {{ errors.labelInput }}
      </p>
    </div>

    <div class="field">
      <select
        :id="fieldIds.type"
        v-model="form.type"
        class="field__select"
        :class="{ 'field__input--error': errors.type }"
        @change="handleTypeChange"
      >
        <option v-for="option in typeOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <p class="field__error" :class="{ 'field__error--visible': errors.type }">
        {{ errors.type }}
      </p>
    </div>

    <div class="field">
      <input
        :id="fieldIds.login"
        v-model="form.login"
        class="field__input"
        :class="{ 'field__input--error': errors.login }"
        type="text"
        placeholder="Введите логин"
        maxlength="100"
        @blur="commit"
      />
      <p class="field__error" :class="{ 'field__error--visible': errors.login }">
        {{ errors.login }}
      </p>
    </div>

    <div class="field row__password">
      <template v-if="form.type === 'LOCAL'">
        <div class="password-field">
          <input
            :id="fieldIds.password"
            v-model="form.password"
            class="field__input field__input--with-icon"
            :class="{ 'field__input--error': errors.password }"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Введите пароль"
            maxlength="100"
            @blur="commit"
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
        <p class="field__error" :class="{ 'field__error--visible': errors.password }">
          {{ errors.password }}
        </p>
      </template>
      <div v-else class="row__password-spacer" aria-hidden="true"></div>
    </div>

    <div class="row__actions">
      <button class="delete-button" type="button" @click="remove">
        Удалить
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./scripts/AccountRow.ts"></script>
<style scoped src="./styles/AccountRow.css"></style>
