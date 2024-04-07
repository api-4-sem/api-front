<template>
    <div class="lacuna">
        <div class="lacuna__header">
            <h2>Lacunas e Habilidades</h2>
        </div>
        <div class="lacuna__content">
            <div class="lacuna__card">
                <select v-model="selected">
                <option disabled value="">Escolha um item</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
            </select>
            </div>
            <div class="lacuna__card1">
                <h1>Trilha</h1>
                <h3><i>Application Integration</i></h3>
            </div>
    </div>
</div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({

})
export default class LacunaView extends Vue {
    created() {
        console.log("im here")
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
    
    h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
    h2 {
    display: block;
    font-size: 1.2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    }

    h3 {
    display: block;
    font-size: 1em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

    }
}

</style>
