<template>
  <div class="home">
    <AcompanhamentoView></AcompanhamentoView>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AcompanhamentoView from "./acompanhamento/AcompanhamentoView.vue";

@Options({
  components: {
    AcompanhamentoView,
  },
})
export default class HomeView extends Vue { }
</script>
