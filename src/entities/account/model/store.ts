import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Account, AccountFormValues } from '@/shared/types/account';
import { STORAGE_KEY, createId, mapFormToAccount } from '@/shared/lib/account';

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<Account[]>([]);
  const validIds = ref<Record<string, boolean>>({});

  const load = () => {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      accounts.value = [];
      validIds.value = {};
      return;
    }

    try {
      const parsed = JSON.parse(raw) as Account[];
      accounts.value = Array.isArray(parsed) ? parsed : [];
      validIds.value = accounts.value.reduce<Record<string, boolean>>((acc, account) => {
        acc[account.id] = true;
        return acc;
      }, {});
    } catch {
      accounts.value = [];
      validIds.value = {};
    }
  };

  const persistValid = () => {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const validAccounts = accounts.value.filter((account) => validIds.value[account.id]);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(validAccounts));
  };

  const addAccount = () => {
    const newAccount: Account = {
      id: createId(),
      type: 'LOCAL',
      login: '',
      password: '',
      labels: []
    };
    accounts.value = [...accounts.value, newAccount];
    validIds.value[newAccount.id] = false;
  };

  const removeAccount = (id: string) => {
    accounts.value = accounts.value.filter((account) => account.id !== id);
    delete validIds.value[id];
    persistValid();
  };

  const upsertAccount = (id: string, values: AccountFormValues, shouldPersist: boolean) => {
    const mapped = mapFormToAccount(id, values);
    const index = accounts.value.findIndex((account) => account.id === id);
    if (index === -1) {
      accounts.value = [...accounts.value, mapped];
    } else {
      const updated = [...accounts.value];
      updated[index] = mapped;
      accounts.value = updated;
    }

    validIds.value[id] = shouldPersist;
    if (shouldPersist) {
      persistValid();
    }
  };

  return {
    accounts,
    load,
    addAccount,
    removeAccount,
    upsertAccount
  };
});
