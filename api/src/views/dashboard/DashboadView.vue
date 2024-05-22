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
import axios from 'axios';

Chart.register(...registerables);

interface ProgressoItem {
    progresso: {
        [key: string]: {
            expertiseId: number;
            status: string;
        };
    };
}


export default class Dashboard extends Vue {
    selectedCompany: number = 1;
    selectedExpertise: number = 3;

    createPieChartConfig(data: ProgressoItem[]) {
        const concluded = data
            .filter(x => Object.values(x.progresso)[0].status == "NAO_CONCLUIDO")
            .map(x => Object.keys(x.progresso)[0])

        const notConcluded = data
            .filter(x => Object.values(x.progresso)[0].status == "CONCLUIDO")
            .map(x => Object.keys(x.progresso)[0])

        const status = data.reduce((total, item) => {
            const status = Object.values(item.progresso)[0].status;
            total[status] = (total[status] || 0) + 1;
            return total;
        }, {} as { [key: string]: number });

        const pieData = {
            labels: ['Concluído', 'Não Concluído'],
            datasets: [
                {
                    label: '',
                    data: [status['CONCLUIDO'], status['NAO_CONCLUIDO']],
                },
            ]
        };

        return {
            type: 'pie',
            data: pieData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            title: (a: any, d: any) => {
                                const index = a[0].dataIndex
                                return index == 1 ? concluded.join("\n") : notConcluded.join("\n")
                            }
                        }
                    }
                },
            },
        } as ChartConfiguration;

    }

    createCategoryChartConfig() {
        const categoryData = {
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

        return {
            type: 'bar',
            data: categoryData,
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

        axios.get(`dash/expertises/empresa/${this.selectedCompany}/trilha/${this.selectedExpertise}`)
            .then(data => {
                this.createChart("pie", this.createPieChartConfig(data.data))
            })
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

    .charts {
        display: flex;
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
