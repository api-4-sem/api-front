<template>
    <div class="acompanhamento">
        <div class="acompanhamento__header">
            <h2>Acompanhamento de Parceiros</h2>
        </div>
        <div class="acompanhamento__content">
            <div class="acompanhamento__card">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Parceiro</th>
                            <th>Usuario</th>
                            <th>Progresso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in progressos">
                            <td :key="1">{{ item.nomeEmpresa }}</td>
                            <td :key="2">{{ item.nomeColaborador }}</td>
                            <td>
                                <table class="acompanhamento__subtable">
                                    <thead>
                                        <tr>
                                            <th>Trilha</th>
                                            <th>Vencimento</th>
                                            <th>Criticidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="trilha in item.dadosTrilha">
                                            <td>{{ trilha.nomeTrilha }}</td>
                                            <td>{{ Intl.DateTimeFormat('pt-BR').format(new
                                                Date(trilha.dataConclusaoTrilha)) }}</td>
                                            <td>
                                                <span :class="getCriticity(trilha)">&nbsp</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { DadosProgresso, DadosProgressoTrilha } from './acompanhamento.model';
import { onMounted, ref } from 'vue';

let progressos = ref<DadosProgresso[] | null>(null)

function getAllPartners() {
    axios.get("progresso-colaborador/progresso/1")
        .then(response => {
            progressos.value = [response.data as DadosProgresso];
        });
}

function getCriticity(item: DadosProgressoTrilha) {
    const startedAt = new Date(item.dataConclusaoTrilha);
    const today = new Date();
    const dueDate = new Date(startedAt);

    const diffTime = (dueDate.getTime() - startedAt.getTime());
    const diffTimeRatio = (today.getTime() - startedAt.getTime());
    const ratio = diffTime / Math.max(diffTimeRatio, 1);

    if (diffTime <= 0 || ratio <= 1) return "bg-danger"
    if (ratio <= 2) return "bg-warning"
    return "bg-success";
}

onMounted(() => {
    getAllPartners();
})
</script>

<style lang="scss">
.acompanhamento {
    &__header {
        display: flex;
        justify-content: flex-start;
        margin-left: 0px;
        margin-right: auto;
    }

    &__content {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
    }

    &__card {
        flex: 1;
        border-radius: 8px;
        min-height: 350px;
        padding: 20px;
        background-color: #ededed;
        box-shadow: 0px 5px 7px #cec9c9;
    }

    td,
    th {
        padding: 0px 15px;
    }

    &__subtable {
        width: 80%;
        height: 80px;
        overflow-y: auto;
        margin: auto;

        span {
            width: 30px;
            height: 30px;
            display: block;
            margin: auto;
            border-radius: 30px;
        }

        td,
        th {
            padding: 0px 15px;
        }
    }
}
</style>
