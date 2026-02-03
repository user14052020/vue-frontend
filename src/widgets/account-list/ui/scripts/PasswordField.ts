import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PasswordField',
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 100
    },
    error: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'blur'],
  setup(props, { emit }) {
    const showPassword = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const onInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      emit('update:modelValue', value);
    };

    return {
      showPassword,
      togglePassword,
      onInput
    };
  }
});
