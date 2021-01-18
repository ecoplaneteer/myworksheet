<template>
  <b-container class="matching-sheet-container p-3" fluid>
    <b-row class="h-100">
      <b-col cols="3">
        <b-container class="input-container py-2" fluid>
          <template v-for="(match, index) in matches">
            <Match
              :key="index"
              :value="match"
              :title="index"
              :onChange="(val) => handleChange(val, index)"
              :onRemove="() => handleRemove(index)"
            />
          </template>
          <b-button class="add-new-item mt-1" @click="addNewItem()">
            + Add new item
          </b-button>
        </b-container>
      </b-col>
      <b-col cols="9">
        <div>
          <v-stage ref="stage" :config="stageSize">
            <v-layer>
              <v-text
                :config="{
                  text: 'Matching Worksheet',
                  fontSize: 30,
                  fill: 'white',
                }"
              />
              <template v-for="(match, index) in matches">
                <div :key="index">
                  <v-text
                    :config="{
                      x: 0,
                      y: 40 + 60 * index,
                      text: match.matchA,
                      fontSize: 20,
                      fill: 'white',
                    }"
                  />
                  <v-text
                    :config="{
                      x: stageSize.height - 100,
                      y: 40 + 60 * index,
                      text: match.matchB,
                      fontSize: 20,
                      fill: 'white',
                    }"
                  />
                  <v-line
                    :config="{
                      x: 100,
                      y: 40 + 30 * index - 30,
                      points: [
                        0,
                        40 + 30 * index,
                        stageSize.height - 300,
                        40 + 30 * index,
                      ],
                      tension: 0.5,
                      closed: true,
                      stroke: 'white',
                    }"
                  />
                </div>
              </template>
            </v-layer>
            <v-layer ref="dragLayer"></v-layer>
          </v-stage>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import Match from '../components/Match.vue'

const width = (window.innerWidth * 3) / 4 - 30
const height = window.innerHeight

export default {
  components: { Match },
  name: 'MatchingSheet',
  data() {
    return {
      stageSize: {
        width: width,
        height: height,
      },
      matches: [
        {
          matchA: '',
          matchB: '',
        },
      ],
    }
  },
  methods: {
    handleChange(val, index) {
      Vue.set(this.matches, index, val)
    },
    handleRemove(index) {
      this.matches.splice(index, 1)
    },
    addNewItem() {
      this.matches.push({
        matchA: '',
        matchB: '',
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.matching-sheet-container {
  flex: 1;
  background-color: #343a40;
}
.input-container {
  background-color: white;
  height: 100%;
  overflow-y: auto;
  text-align: center;
}
.add-new-item {
  background-color: #00b36f;
}
</style>
