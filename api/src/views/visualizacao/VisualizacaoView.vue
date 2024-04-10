<template>
    <div>
        <h2 style="width: 1099px; margin: 1rem auto; text-align: left;">Visualização de Dados</h2>
        <div class="container">
            <select class="select" @change="getProgresso($event.target?.value)">
                <option :value="0">Selecione Parceiro...</option>
                <option v-for="colaborador in listaDeColaboradores" :key="colaborador.id" :value="colaborador.id">
                    {{ colaborador.nome }} #{{ colaborador.id }}
                </option>
            </select>
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

@Options({
    name: "VisualizacaoView",
    components: {
        RouterLink,
        Bar
    },
})
export default class VisualizacaoView extends Vue {
    listaDeColaboradores: {
        id: number,
        nome: string
    }[] = [];
    chartData: any = {
        labels: [],
        datasets: [{ data: [] }]
    };
    chartOptions = {
        responsive: true,
        indexAxis: 'y',
    };

    mounted() {
        this.getColaboradores();
    }

    async getColaboradores() {
        const response = await axios.get("colaborador/1");
        this.listaDeColaboradores = response.data;
    }

    async getProgresso(colaboradorId: string | null) {
        if (colaboradorId === null || colaboradorId === "0") {
            this.chartData = {
                labels: [],
                datasets: [{ data: [] }]
            };
            return;
        }

        const response = await axios.get(`progresso-colaborador/${colaboradorId}`);
        const progresso = response.data as {
            porcentagemAndamento: number,
            nomeTrilha: string,
        }[];

        this.chartData = {
            labels: progresso.map(p => p.nomeTrilha),
            datasets: [{ data: progresso.map(p => p.porcentagemAndamento) }]
        };
    }
}
</script>

<style>
select {
    opacity: 1;
    background-color: #bfb8b8;
    border-radius: 8px;
    padding: 0.5rem;
    padding-right: 2rem;
    width: auto;
    font-size: 1rem;
}

.container {
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
}
</style>