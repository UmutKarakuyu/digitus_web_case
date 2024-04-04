<template>
  <div v-if="show" class="fixed inset-0 flex justify-center items-center">
    <div class="bg-blue-400 p-4 rounded-lg text-white absolute top-20">
      <p>Not Implemented Yet!</p>
    </div>
  </div>
</template>


<script>
import { ref, watch } from 'vue';

export default {
  props: {
    initialShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const show = ref(props.initialShow);

    watch(
      () => props.initialShow,
      (newValue) => {
        show.value = newValue;
        if (newValue) {
          setTimeout(() => {
            show.value = false;
          }, 3000);
        }
      }
    );
    return {
      show,
    };
  },
};
</script>

<style>

</style>
