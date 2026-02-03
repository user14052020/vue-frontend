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
        <input
          :id="fieldIds.password"
          v-model="form.password"
          class="field__input"
          :class="{ 'field__input--error': errors.password }"
          type="password"
          placeholder="Введите пароль"
          maxlength="100"
          @blur="commit"
        />
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
