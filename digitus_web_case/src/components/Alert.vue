<template>
  <div v-if="isVisible" class="fixed inset-0 flex justify-center top-10">
    <div class="bg-blue-400 p-4 rounded-lg text-white absolute ">
      <p> Not Implemented</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      timerID: null,
    };
  },
  mounted() {
    this.isVisible = false;
  },
  computed: {
    alertObject() {
      console.log('computed')
      return this.$store.state.alertObject;
    },
  },
  watch: {
    '$store.state.alertObject.message': {
      handler(newValue) {
        console.log('watcher');
        this.showAlert();
      },
      immediate: true,
    },
  },
  methods: {
    showAlert() {
      this.isVisible = true;
      this.timeout = 300;
      this.hideAfterTimeout();
      console.log('showAlert');
    },

    hideAfterTimeout() {
      if (this.timerID) {
        clearTimeout(this.timerID);
      }
      this.timerID = setTimeout(() => {
        this.$store.dispatch('hideAlert');
        this.isVisible = false;
      }, this.timeout);
    },
    hideAlert() {
      this.$store.dispatch('hideAlert');
      this.isVisible = false;
    },
  },
};
</script>

