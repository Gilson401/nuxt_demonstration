<template>
  <div>
    <h1 id="idh10">{{ this.$hello("test from compenent Usa this.$hello.") }}</h1>
    <h1 id="idh11">{{ $hello("test from compenent Usa apenas $hello") }}</h1>

    <button @click="addOne" id="btn1">Add</button>
    <button @click="lessOne" id="btn2">Remove</button>
    <button @click="reStart" id="btn3">ResStart</button>

    <h1 id="value0">{{ value}}</h1>

  </div>
</template>

<script>
export default {
  name: "exampel-component",
  data: function () {
    return {
      value: 1,
    };
  },
  methods: {
    addOne() {
        this.value = this.value + 1
    },
    lessOne() {
        this.value = this.value - 1
    },
    reStart() {
        this.value = 0
    },
  },

};
</script>

<style>
</style>