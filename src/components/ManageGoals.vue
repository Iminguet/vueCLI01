<template>
  <h2>Manage Goals</h2>

  <input type="text" ref="goal" />

  <button @click="setGoal">Set goal</button>

  <!-- El contenido de este compomente se renderizará en la parte de HTML que indiquemos con con el selector CSS -->
  <teleport to="body">
    <ErrorAlert v-if="inputIsInvalid">
      <h1>Input is invalid</h1>
      <h2>Introduce algún dato</h2>
      <button @click="closeDialog">Okay</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: { ErrorAlert },

  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    closeDialog() {
      this.inputIsInvalid = false;
    },
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>
