<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <div
        class="px-2 d-flex justify-content-between align-items-center"
        block
        variant="info"
      >
        {{ title }}
        <b-button class="btn-circle" variant="danger" @click="onRemove">X</b-button>
      </div>
    </b-card-header>

    <b-card-body>
      <b-form-input v-model="matchA" placeholder="Words"></b-form-input>
      <b-form-input
        class="mt-1"
        v-model="matchB"
        placeholder="Definition"
      ></b-form-input>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'Match',
  props: {
    onChange: Function,
    onRemove: Function,
    title: Number,
    value: Object,
  },
  mounted() {
    this.matchA = this.value.matchA
    this.matchB = this.value.matchB
  },
  data() {
    return {
      matchA: '',
      matchB: '',
    }
  },
  watch: {
    matchA(val) {
      this.onChange({
        matchA: val,
        matchB: this.matchB,
      })
    },
    matchB(val) {
      this.onChange({
        matchA: this.matchA,
        matchB: val,
      })
    },
  },
}
</script>

<style scoped>
.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
</style>
