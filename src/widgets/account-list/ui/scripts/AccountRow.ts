import { defineComponent, reactive, watch, computed, ref, type PropType } from 'vue';
import { useAccountStore } from '@/entities/account/model/store';
import type { Account, AccountFormValues, AccountType, AccountValidationErrors } from '@/shared/types/account';
import { formatLabels, validateAccount } from '@/shared/lib/account';

export default defineComponent({
  name: 'AccountRow',
  props: {
    account: {
      type: Object as PropType<Account>,
      required: true
    }
  },
  setup(props) {
    const store = useAccountStore();

    const typeOptions = [
      { value: 'LOCAL', label: 'Локальная' },
      { value: 'LDAP', label: 'LDAP' }
    ];

    const form = reactive<AccountFormValues>({
      type: props.account.type,
      login: props.account.login,
      password: props.account.password ?? '',
      labelInput: formatLabels(props.account.labels)
    });

    const errors = reactive<AccountValidationErrors>({});
    const showPassword = ref(false);

    const fieldIds = computed(() => ({
      label: `label-${props.account.id}`,
      type: `type-${props.account.id}`,
      login: `login-${props.account.id}`,
      password: `password-${props.account.id}`
    }));

    const syncFromStore = (account: Account) => {
      form.type = account.type;
      form.login = account.login;
      form.password = account.password ?? '';
      form.labelInput = formatLabels(account.labels);
    };

    watch(
      () => props.account,
      (value) => {
        syncFromStore(value);
      }
    );

    const commit = () => {
      const validation = validateAccount(form);
      Object.keys(errors).forEach((key) => {
        delete errors[key as keyof AccountValidationErrors];
      });
      Object.assign(errors, validation);
      const isValid = Object.keys(validation).length === 0;
      store.upsertAccount(props.account.id, form, isValid);
    };

    const handleTypeChange = (event: Event) => {
      const value = (event.target as HTMLSelectElement).value as AccountType;
      form.type = value;
      if (value === 'LDAP') {
        form.password = '';
      }
      commit();
    };

    const remove = () => {
      store.removeAccount(props.account.id);
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      form,
      errors,
      typeOptions,
      fieldIds,
      showPassword,
      commit,
      handleTypeChange,
      togglePassword,
      remove
    };
  }
});
