import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FieldError',
  props: {
    error: {
      type: String,
      default: ''
    }
  }
});
