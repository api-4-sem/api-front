<template>
  <select id="" style="
      margin-right: 700px;
      width: 200px; 
  ">
    <!-- <option value="" disabled selected hidden></option> -->
    <option value="colaborador1">Colaborador 1</option>
    <option value="colaborador2">Colaborador 2</option>
  </select>

  <div class="container">
    <h2>Tabela com Três Colunas</h2>

    <table style="
    margin-right: 30px;
    margin-left: 450px;
">
      <thead>
        <tr>
          <th>Parceiro</th>
          <th>Status</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ nome }}</td>
          <td>
            <button @click="abrirModal">status</button>
          </td>
          <td>
            <router-link to="/trilhas">Ação</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Modal -->
  <div v-show="modalAberto" class="modal">
    <div class="modal-content">
      <span class="fechar" @click="fecharModal">&times;</span>
      <p>Modal de status</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import axios from "axios";
@Options({
  name: "RastreioView",
  components: {
    RouterLink
  }
})
export default class RastreioView extends Vue {
  nome: string = "";
  status: boolean = false;
  modalAberto: boolean = false;

  mounted() {
    this.getNomeParceiro();
  }

  getNomeParceiro() {
    axios.get<{ nome: string; id: number }>('/colaborador/1')
      .then(x => {
        console.log(x)
      });
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
</script>

<style>
.container {
  background-color: white;
  padding: 20px;
  border-radius: 20%;
}

/* Estilos para o modal */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.fechar {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.fechar:hover,
.fechar:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>