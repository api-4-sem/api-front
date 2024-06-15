<template>
    <div class="VisualizacaoParceiros">
        <div class="header">
            <h2>Visualização de Partners</h2>
            <button @click="changePage" class="button">Cadastrar</button>
        </div>
        <div class="container">
            <div class="card">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Partner</th>
                            <th>Cidade</th>
                            <th>Código</th>
                            <th>País</th>
                            <th>Nome Admin</th>
                            <th>E-mail Admin</th>
                        </tr>
                    </thead>
                    <tbody v-if="listaParceiros && listaParceiros.length > 0">
                        <tr v-for="parceiro in listaParceiros">
                            <td>{{ parceiro.nome }}</td>
                            <td>{{ parceiro.cidade }}</td>
                            <td>{{ parceiro.codigo }}</td>
                            <td>{{ parceiro.pais }}</td>
                            <td>{{ parceiro.adminNome }}</td>
                            <td>{{ parceiro.adminEmail }}</td>
                        </tr>
                    </tbody>
                    <div v-else>
                        Nenhum partner encontrado.
                    </div>
                </table>


            </div>

        </div>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";


@Options({
    name: "visualizacaoParceiros",
    components: {
        RouterLink,
    },
})
export default class VisualizacaoParceiros extends Vue {
    listaParceiros: any[] = [];

    async mounted() {
        await this.getParceiros();
    }

    async getParceiros() {
        try {
            const response = await axios.get("carregar-empresas");
            console.log(response.data);
            this.listaParceiros = response.data;
        } catch (error) {
            console.log("Erro:", error);
        }
    }

    changePage(){
        this.$router.push({ name: 'cadastro' });
    }
}
</script>

<style lang="scss">
.VisualizacaoParceiros {
    .header {
        margin-bottom: 10px;
        padding-right: 12px;
        display: flex;
        justify-content: space-between;
        margin-left: 0px;
        margin-right: auto;
    }

    .container {
        padding-left: 0px;
        max-width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
    }

    .card {
        flex: 1;
        border-radius: 8px;
        min-height: 350px;
        padding: 20px;
        background-color: #ededed;
        box-shadow: 0px 5px 7px #cec9c9;
    }

    .button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: rgba(79, 79, 79, 1);
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: #0e0e0e;
        }
    }

}
</style>
