<template>
    <div class="Dashboard">
        <div class="header">
            <h2>Dashboard</h2>
        </div>
        <div class="content">
            <div class="card">
                <div class="charts">
                    <div class="chart-category">
                        <canvas id="category"></canvas>
                    </div>
                    <div class="chart-pie">
                        <canvas id="pie"></canvas>
                    </div>
                </div>
                <div class="companies">
                    <div class="header">
                        <h4>Listagem de Empresas</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

export default class Dashboard extends Vue {
    categoryData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [{
            label: 'Meu Primeiro Dataset',
            data: [65, 59, 80, 80, 56, 55, 40],
            backgroundColor: [
            ],
            borderColor: [
            ],
            borderWidth: 1
        }]
    };

    pieData = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 934, 129, 129],
            }
        ]
    };
    createPieChartConfig() {
        return {
            type: 'pie',
            data: this.pieData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                }
            },
        } as ChartConfiguration;

    }

    createCategoryChartConfig() {
        return {
            type: 'bar',
            data: this.categoryData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        } as ChartConfiguration;
    }

    createChart(id: string, config: ChartConfiguration) {
        const ctx = (document.getElementById(id) as HTMLCanvasElement).getContext('2d');
        if (ctx) {
            new Chart(ctx, config);
        }
    }

    mounted() {
        this.createChart("category", this.createCategoryChartConfig())
        this.createChart("pie", this.createPieChartConfig())
    }
}
</script>

<style style="scss">
.Dashboard {
    .header {
        display: flex;
        justify-content: space-between;
        margin-left: 0px;
        margin-right: auto;
    }

    .content {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
        padding: 0 12px 0 0;
    }

    .card {
        flex: 1;
        flex-direction: column;
        border-radius: 8px;
        min-height: 350px;
        padding: 20px;
        background-color: #ededed;
        box-shadow: 0px 5px 7px #cec9c9;
    }

    .charts{
        display:flex;
        justify-content: space-between;
        height: 400px;
    }
    .chart-pie,
    .chart-category {
        display: flex;
        width: 48%;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
}
</style>
