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
                        <tr>
                            <td>Embraer</td>
                            <td>Lucas</td>
                            <td>05/03/2024</td>
                            <td>-</td>
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
    created() {
        console.log("im here")
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
</style>
