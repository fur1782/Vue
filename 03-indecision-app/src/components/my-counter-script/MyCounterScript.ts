import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { counter, counterSquare } = useCounter(props.value);

    return {
      counter,
      counterSquare,
    };
  },
});
