<template>
    <div class="lacuna">
        <div class="lacuna__header">
            <h4>Lacunas e Habilidades</h4>
        </div>
        <div class="lacuna__content">
            <div class="lacuna__card">
            <select class="form-select form-select-sm" @change="getProgressoTrilhas()" v-model="colaboradorSelecionado" aria-label=".form-select-sm example">
                <option disabled value="selected"></option>
                <option v-for="item in listmodal" :key="item.id" :value="item.id">{{ item.nome
        }}
        </option>
      </select>
            </div>
            <div class="lacuna__card1">
                <h3>Trilha</h3>
                <br>
                <div v-for="trilha in integracoes">
                    <div class="lacuna__trilha">
                        <table class="table table-striped">
                            <tbody>
                                <thead>
                                    <tr>
                                        <th  colspan="2"><i>{{ trilha.nomeTrilha }}</i></th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Trilhas do curso    
                                        </th>
                                        <th>
                                            Trilhas concluidas    
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span v-for="naoConcluida in trilha.expertisesPorTrilha.nome">{{naoConcluida}}</span><br/></td>
                                        <td><span  v-for="concluida in trilha.expertisesConcluidas.nome">{{concluida}}</span><br/></td>
                                    </tr>
                                </tbody>
                            </tbody>
                        </table>
                        <canvas id="trilha"></canvas>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from 'axios';
import { Chart, ChartItem } from "chart.js/auto";

@Options({

})
export default class LacunaView extends Vue {
    listmodal = [
        {
            id:0,
            nome:''
        }
    ];
    integracoes = []
    colaboradorSelecionado = 0;
    data = {
        labels: "Completude",
        datasets: [{
            axis: 'y',
            label: 'Completude',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            ],
            borderWidth: 1
        }]
    } as any;

    created() {
        let empresaId = +this.$route.params.id 
        this.getColaboradores(empresaId);
    }

    getColaboradores(idEmpresa: number){
        axios.get("colaborador/"+idEmpresa)
            .then(x => this.listmodal = (x.data))
    }

    getProgressoTrilhas(){
        axios.get('progresso-colaborador/habilidades/'+this.colaboradorSelecionado)
            .then(x => {
                this.integracoes = x.data
                var chart = new Chart("trilha", {
                    type: 'bar',
                    data: this.data,
                    options:{
                        indexAxis: 'y'
                    } 
                });
            })
    }
}
</script>

<style lang="scss">
.lacuna {
    &__header {
        display: flex;
        justify-content: left;
    }

    &__content {
        gap: 5%;
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: row;
    }

    &__card {
        width: 20%;
        border-radius: 8px;
        min-height: 250px;
        padding: 20px;
        background-color: #ededed;
        box-shadow: 0px 5px 7px #cec9c9;
    }

    &__card1 {
        flex: 1;
        border-radius: 8px;
        min-height: 250px;
        padding: 20px;
        background-color: #ededed;
        box-shadow: 0px 5px 7px #cec9c9;
    }
    
    &__trilha{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}

</style>
