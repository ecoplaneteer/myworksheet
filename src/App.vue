<template>
  <div id="app">
    <b-navbar class="nav-bar" type="dark">
      <b-navbar-brand href="#">My WorkSheet Maker</b-navbar-brand>
    </b-navbar>
    <MatchingSheet />
  </div>
</template>

<script>
import MatchingSheet from './containers/MatchingSheet.vue'

export default {
  name: 'App',
  components: {
    MatchingSheet,
  },
}
</script>
<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
#app {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.nav-bar {
  background-color: #715dd6;
  color: white;
  display: flex;
  flex-direction: column;
}
</style>
