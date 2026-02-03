import { defineComponent, onMounted } from 'vue';
import { useAccountStore } from '@/entities/account/model/store';
import AccountList from '@/widgets/account-list/ui/AccountList.vue';
import LabelHint from '@/shared/ui/LabelHint.vue';

export default defineComponent({
  name: 'AccountsPage',
  components: {
    AccountList,
    LabelHint
  },
  setup() {
    const store = useAccountStore();

    onMounted(() => {
      store.load();
    });

    return {
      store
    };
  }
});
