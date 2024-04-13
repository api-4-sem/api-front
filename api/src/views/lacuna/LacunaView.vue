<template>
    <div class="lacuna">
        <div class="lacuna__header">
            <h4>Lacunas e Habilidades</h4>
        </div>
        <div class="lacuna__content">
            <div class="lacuna__card">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option disabled value="selected"></option>
                <option v-for="item in listmodal" :key="item.id" :value="item.id">{{ item.nome
        }}
        </option>
      </select>
            </div>
            <div class="lacuna__card1">
                <h3>Trilha 
                    <br>
                    <small class="text-muted"><i>Application Integration</i></small>
                </h3>
            </div>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from 'axios';

@Options({

})
export default class LacunaView extends Vue {
    listmodal = [
        {
            id:0,
            nome:''
        }
    ];

    //*links back-front
    created() {
        this.getColaboradores();
    }

    getColaboradores(){
        axios.get("colaborador/1")
            .then(x => {
                console.log(x.data);
                this.listmodal = (x.data);
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
    
}

</style>
