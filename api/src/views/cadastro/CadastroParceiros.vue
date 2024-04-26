<template>
  <div>
    <h2 style="width: 1100px; margin: 1rem auto; text-align: left;">Cadastro de Parceiros</h2>
    <button class="button">Cadastrar</button>
    
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" v-model="nome" required placeholder="Danilo">
          </div>
          <div class="form-group">
            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" v-model="cidade" required placeholder="SJC">
          </div>
          <div class="form-group">
            <label for="pais">País</label>
            <input type="text" id="pais" name="pais" v-model="pais" required placeholder="Brasil">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" required placeholder="gabriel@email" style="color: dodgerblue;">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
  name: "CadastroParceiros",
  components: {
    RouterLink,
  },
})
export default class CadastroParceiros extends Vue {
  nome: string = "";
  cidade: string = "";
  pais: string = "";
  email: string = "";
}
</script>

<style lang="scss">
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(79, 79, 79, 1);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 17%;
  right: 18%;

  &:hover {
    background-color: #0e0e0e;
  }
}

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
  gap: 2rem;
  padding: 2rem 5rem;
  box-shadow: 3px 5px 10px #555;

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: black;

    label {
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      border-radius: 10px;
      border: 1px solid #ccc;
      height: 30px;
    }
  }
}
</style>
