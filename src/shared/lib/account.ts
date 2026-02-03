import type { Account, AccountLabel, AccountFormValues, AccountValidationErrors } from '@/shared/types/account';

export const STORAGE_KEY = 'account-manager.records';

export const createId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const parseLabels = (raw: string): AccountLabel[] => {
  return raw
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((text) => ({ text }));
};

export const formatLabels = (labels: AccountLabel[]): string => {
  return labels.map((label) => label.text).join('; ');
};

export const sanitizeFormValues = (values: AccountFormValues): AccountFormValues => {
  return {
    ...values,
    login: values.login.trim(),
    password: values.password.trim(),
    labelInput: values.labelInput.trim()
  };
};

export const validateAccount = (values: AccountFormValues): AccountValidationErrors => {
  const errors: AccountValidationErrors = {};
  const trimmed = sanitizeFormValues(values);

  if (trimmed.labelInput.length > 50) {
    errors.labelInput = 'Максимум 50 символов';
  }

  if (!trimmed.type) {
    errors.type = 'Выберите тип записи';
  }

  if (!trimmed.login) {
    errors.login = 'Логин обязателен';
  } else if (trimmed.login.length > 100) {
    errors.login = 'Максимум 100 символов';
  }

  if (trimmed.type === 'LOCAL') {
    if (!trimmed.password) {
      errors.password = 'Пароль обязателен';
    } else if (trimmed.password.length > 100) {
      errors.password = 'Максимум 100 символов';
    }
  }

  return errors;
};

export const isAccountValid = (values: AccountFormValues): boolean => {
  return Object.keys(validateAccount(values)).length === 0;
};

export const mapFormToAccount = (id: string, values: AccountFormValues): Account => {
  return {
    id,
    type: values.type,
    login: values.login.trim(),
    password: values.type === 'LOCAL' ? values.password.trim() : null,
    labels: parseLabels(values.labelInput)
  };
};
