<template>
    <div class="acompanhamento">
        <div class="table">
        </div>
    </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
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
    width: inherit;
    height: inherit;
}

.table {
    width: 100%;
    background-color: #d4d3d3;
}
</style>
