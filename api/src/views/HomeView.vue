<template>
  <div class="home">
    <RastreioView></RastreioView>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RastreioView from "./rastreio/RastreioView.vue";

@Options({
  components: {
    RastreioView,
  },
})
export default class HomeView extends Vue { }
</script>
