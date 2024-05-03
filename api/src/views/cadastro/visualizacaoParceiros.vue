<template>
    <div>
        
        <h2 style="width: 1100px; margin: 1rem auto; text-align: left;">Visualização de Parceiros</h2>
        <div class="container">

        </div>
    </div>


</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import Swal from "sweetalert2";

@Options({
  name: "visualizacaoParceiros",
  components: {
    RouterLink,
  },
})
export default class visualizacaoParceiros extends Vue {}

</script>

<style lang="scss">


.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1099px;
  min-height: 60vh;
  margin: auto;
  border-radius: 20px;
  background-color: #ededed;
  opacity: 1;
  gap: 3rem;
  padding: 2rem 5rem;
  box-shadow: 3px 5px 10px #555;


    
    
  }
  


</style>