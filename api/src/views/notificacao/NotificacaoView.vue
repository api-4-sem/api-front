<template>
    <div class="notificacao">
        <div class="notificacao__header">
            <h2>Configuração de Notificações</h2>

        </div>
        <div class="notificacao__content">
            <div class="notificacao__card">
                <div class="notificacao__row">
                    <div class="notificacao__row-header">
                        <h4>Solicitações</h4>
                    </div>
                    <hr>
                    <div class="notificacao__input">
                        <h6>Dias para solicitar feedback</h6>
                        <input class="form-control" v-model="feedback">
                    </div>
                </div>
                <div class="notificacao__row">
                    <div class="notificacao__row-header">
                        <h4>Avisos</h4>
                    </div>
                    <hr>
                    <div class="notificacao__input">
                        <h6>Dias para avisar sobre vencimento da trilha</h6>
                        <input class="form-control" v-model="vencimentoTrilha">
                    </div>
                </div>
                <div class="notificacao__row--right">
                    <button class="btn btn-outline-success">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import axios from 'axios'
import { onMounted, ref } from 'vue';
vencimentoTrilha = 0
feedback = 0


onMounted(() => {

    axios.get("configuracao")
        .then(x => {
            console.log(x)
        })
})

</script>

<style lang="scss">
.notificacao {
    &__row {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 30px;

        &--right {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-end;
            margin-top: 15px;
        }
    }

    &__input {
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 30px;
        gap: 40px;
        justify-content: center;
        flex-wrap: wrap;
    }

    &__row-header {
        display: flex;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        margin-left: 0px;
        margin-right: auto;
    }

    &__legend {
        display: flex;
        justify-content: flex-end;
        padding: 0px;
        width: 30%;
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

        td,
        th {
            padding: 0px 15px;
        }
    }

    hr {
        width: 100%;
    }
}
</style>
