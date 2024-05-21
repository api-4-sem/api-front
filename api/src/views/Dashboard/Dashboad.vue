<template>
    <div>
      <h2 style="width: 1100px; margin: 1rem auto; text-align: left;">Cadastro de Parceiros</h2>
      <div class="container">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue } from 'vue-class-component';
  import { Chart, ChartConfiguration, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default class Dashboard extends Vue {
    mounted() {
      const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
      const data = {
        labels: labels,
        datasets: [{
          label: 'Meu Primeiro Dataset',
          data: [65, 59, 80, 80, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };
  
      const config: ChartConfiguration = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
      if (ctx) {
        new Chart(ctx, config);
      }
    }
  }
  </script>
  
  <style>
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
  