import { defineComponent, type PropType } from 'vue';
import type { Account } from '@/shared/types/account';
import AccountRow from '../AccountRow.vue';

export default defineComponent({
  name: 'AccountList',
  components: {
    AccountRow
  },
  props: {
    accounts: {
      type: Array as PropType<Account[]>,
      required: true
    }
  }
});
