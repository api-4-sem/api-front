<template>
    <div class="acompanhamento">
        <div class="acompanhamento__header">
            <h2>Acompanhamento de Parceiros</h2>
        </div>
        <div class="acompanhamento__content">
            <div class="acompanhamento__card">
                <table>
                    <thead>
                        <th>Parceiro</th>
                        <th>Usuario</th>
                        <th>Vencimento</th>
                        <th>Criticidade</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in data">
                            <td>{{ item.nomeEmpresa }}</td>
                            <td>{{ item.nomeColaborador }}</td>
                            <td><span v-for="trilhas in data.dadosTrilha"></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { Options, Vue } from "vue-class-component"
import axios from 'axios'

@Options({

})
export default class AcompanhamentoView extends Vue {
    data = []

    created() {
        this.getAllPartners()
    }

    getAllPartners() {
        axios.get("api/progresso-colaborador/progresso/1")
            .then(response => data = response);
    }

    getCriticity(item) {
        const startedAt = new Date(); //from item
        const today = new Date();
        const dueDate = new Date(); //from item

        const diffTime = (dueDate.getTime() - startedAt.getTime());
        const diffTimeRatio = (today.getTime() - startedAt.getTime());
        const ratio = diffTime / Math.max(diffTimeRatio, 1);

        if (diffTime <= 0 || ratio <= 1) return "criticity__danger"
        if (ratio <= 2) return "criticity__warning"
        return "criticity__safe";
    }
}
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
}

table {
    width: 100%;
}

.criticity {
    &__danger {
        background-color: darkred;
    }

    &__warning {
        background-color: yellow;
    }

    &__safe {
        background-color: greenyellow;
    }
}
</style>
