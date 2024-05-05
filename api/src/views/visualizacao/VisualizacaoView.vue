<template>
  <div class="visualizacao__container">
    <div class="header">
      <h2>Visualização de Dados</h2>
      <div class="buttons">
        <select
          class="select"
          id="select_visu"
          @change="getProgresso($event.target?.value)"
        >
          <option :value="0">Selecione Parceiro...</option>
          <option
            v-for="colaborador in listaDeColaboradores"
            :key="colaborador.id"
            :value="colaborador.id"
          >
            {{ colaborador.nome }} #{{ colaborador.id }}
          </option>
        </select>
        <button class="btn btn-outline-success" v-on:click="extrairRelatorio()">Extrair Dados</button>
      </div>
    </div>
    <div class="card">
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

@Options({
  name: "VisualizacaoView",
  components: {
    RouterLink,
    Bar,
  },
})
export default class VisualizacaoView extends Vue {
  listaDeColaboradores: {
    id: number;
    nome: string;
  }[] = [];
  chartData: any = {
    labels: [],
    datasets: [{ data: [] }],
  };
  chartOptions = {
    backgroundColor: ["rgba(54, 162, 235, 0.2)"],
    borderColor: ["rgba(54, 162, 235)"],
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          callback: function (value: number) {
            return value + "%";
          },
        },
      },
    },
  };

  mounted() {
    this.getColaboradores();
  }

  download(data:any){
    var a = document.createElement("a") as any;
    document.body.appendChild(a);
    a.style = "display: none";
    var blob =  new Blob([data], {
                type: 'application/vnd.ms-excel'})
        , url = window.URL.createObjectURL(blob);
    a.href = url;
    a.click();
    window.URL.revokeObjectURL(url);
}

extrairRelatorio() {
    axios.get("relatorio/1").then(x=>this.download(x.data));
}

  async getColaboradores() {
    const response = await axios.get("colaborador/1");
    this.listaDeColaboradores = response.data;
  }

  async getProgresso(colaboradorId: string | null | any) {
    if (colaboradorId === null || colaboradorId === "0") {
      this.chartData = {
        labels: [],
        datasets: [{ data: [] }],
      };
      return;
    }

    const response = await axios.get(`progresso-colaborador/${colaboradorId}`);
    const progresso = response.data as {
      porcentagemAndamento: number;
      nomeTrilha: string;
    }[];

    this.chartData = {
      labels: progresso.map((p) => p.nomeTrilha),
      datasets: [{ data: progresso.map((p) => p.porcentagemAndamento) }],
    };
  }
}


</script>

<style>
.visualizacao__container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 30vh;

  .header {
    display: flex;
    justify-content: space-between;
    }

  #select_visu {
    border-radius: 4px;
    padding: 0.6rem;
    width: 170px;
    font-size: 0.8rem;
    margin-right: 10px;;
  }

  .container_head {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 1099px;
    margin: auto;
    border-radius: 20px;
    opacity: 1;
    gap: 0.5rem;
    padding: 2rem 5rem;
  }

  .card {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 8px;
    background-color: #ededed;
    margin-bottom: 10px;
    padding: 20px;
    box-shadow: 3px 5px 10px #555;
  }
}
</style>
