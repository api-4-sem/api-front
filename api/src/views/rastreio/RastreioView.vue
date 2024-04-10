<template>
  <div>
    <h2 style="padding-right: 800px">Rastreio</h2>

    <div class="container">

      <select class="select" v-model="selectedParceiro" @change="filtroNomeParceiro(selectedParceiro)">
        <option value="0">Cancelar filtro</option>
        <option v-for="nome in nomeColaborador" :key="nome.id" :value="nome.id">{{ nome.nome }}</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Parceiro</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nome in nomeColaboradorFiltrado.length > 0 ? nomeColaboradorFiltrado : nomeColaborador" :key="nome.nome" value="id">
            <td>{{ nome.nome }}</td>
            <td>
              <button type="button" class="btn btn-secondary" @click="abrirModal"
              
              >
                Status
              </button>
            </td>
            <td>
              <router-link to="/trilhas">
                <button type="button" class="btn btn-light">
                  Acompanhar trilhas
                </button>
              </router-link>
              <button type="button" @click="solicitarFeedback(nome.id)" class="btn btn-info" style="
                margin-right: -20;
                margin-left: 20px;
              ">
                  Solicitar Feedback
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Swal from "sweetalert2";

import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
@Options({
  name: "RastreioView",
  components: {
    RouterLink,
  },
})
export default class RastreioView extends Vue {
  nomeColaborador: {
    id: number,
    nome: string
  }[] = [];
  status: boolean = false;
  modalAberto: boolean = false;
  acompanhamentoTrilha: {
    nomeDatrilha: string;
    porcentagemEmanadamento: string;
  }[] = [];
  nomeColaboradorFiltrado: {
    id: number,
    nome: string
  }[] = [];
  selectedParceiro: number = 0;

  mounted() {
    this.getNomeParceiro();
  }


  async getNomeParceiro() {
    axios.get("/colaborador/1").then((response) => {
      this.nomeColaborador = response.data;
    });
  }

  filtroNomeParceiro(id: number) {
    if (id === 0) {
      this.nomeColaboradorFiltrado = [];
    } else {
      this.nomeColaboradorFiltrado = this.nomeColaborador.filter((nome) => nome.id === id);
    }
  }

  abrirModal() {
    this.modalAberto = true;

    axios
      .get("/progresso-colaborador/1")
      .then((response) => {
        this.acompanhamentoTrilha = [];
        this.acompanhamentoTrilha = response.data.map((item: any) => ({
          nomeDatrilha: item.nomeTrilha,
          porcentagemEmanadamento: item.porcentagemAndamento,
        }));

        if (this.acompanhamentoTrilha.length > 0) {
          this.acompanhamentoTrilha.forEach((item) => {
            Swal.fire({
              title: "Status",
              html: `
              <p>Nome da trilha: ${item.nomeDatrilha}</p>
              <p>Progresso do colaborador: ${item.porcentagemEmanadamento}</p>
            `,
              showCloseButton: true,
              showConfirmButton: false,
            });
          });
        } else {
          Swal.fire({
            title: "Aviso",
            text: "Nenhum dado disponível para exibir",
            icon: "warning",
            showCloseButton: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Erro",
          text: "Erro ao obter dados da trilha",
          icon: "error",
          showCloseButton: true,
        });
      });
  }

  solicitarFeedback(colaboradorId: number) {
    console.log('sending to ->', colaboradorId)
    axios.post("feedback/" + colaboradorId).then((r) => {
      Swal.fire({
        html: `Feedback solicitado ao parceiro`,
        showCloseButton: true,
        showConfirmButton: false,
      });
    });
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
</script>

<style>
table {
  padding-bottom: 200px;
}

th {
  padding-right: 100px;
}

td {
  padding-right: 100px;
  padding-bottom: 20px;
}

select {
  position: absolute;
  width: 110px;
  height: 35px;
  top: 210px;
  left: 310px;
  opacity: 1;
  background-color: #bfb8b8;
  border-radius: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1099px;
  height: 380px;
  margin: auto;
  border-radius: 20px;
  background-color: #ededed;
  opacity: 1;
}
</style>
