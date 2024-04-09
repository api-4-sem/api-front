<template>
    <div>
        <h2 style="width: 1099px; margin: 1rem auto; text-align: left;">Visualização de Dados</h2>
        <div class="container">
            <div class="select-row">
                <select class="select">
                    <option>Selecione Parceiro...</option>
                    <option value="parceiro1">Parceiro 1</option>
                    <option value="parceiro2">Parceiro 2</option>
                    <option value="parceiro3">Parceiro 3</option>
                </select>
            </div>
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


@Options({
    name: "VisualizacaoView",
    components: {
        RouterLink,
        Bar
    },
})
export default class VisualizacaoView extends Vue {
    data() {
        return {
            chartData: {
                labels: ['Application Integration', 'Big Data', 'Data Lake', 'Data Science'],
                datasets: [{ data: [100, 70, 40, 20] }]
            },
            chartOptions: {
                responsive: true,
                indexAxis: 'y',
            }
        }
    }
}
</script>

<style>
.select-row {
    display: flex;
    align-items: start;
}

select {
    opacity: 1;
    background-color: #bfb8b8;
    border-radius: 8px;
    padding: 0.5rem;
    padding-right: 2rem;
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