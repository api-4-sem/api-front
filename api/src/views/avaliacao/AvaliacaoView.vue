<template>
    <div class="avaliacao">
        <div class="avaliacao__header">
            <h4>Avaliação de Parceiros</h4>
        </div>
        <div class="avaliacao__content">
            <div class="avaliacao__card">
                <h3>AA</h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';

 onMounted(() => {

 })
</script>

<style lang="scss">
.avaliacao{
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
        flex: 1;
        border-radius: 8px;
        min-height: 250px;
        padding: 20px;
        background-color: #ededed;
        box-shadow: 0px 5px 7px #cec9c9;
    }


}
</style>
