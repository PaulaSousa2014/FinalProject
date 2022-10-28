<template>
  <!-- Pestaña de Calendario. A principio fue creada para vizualizar las taareas con fecha 
    de finaliazación en un calendario. Pero todavia esta en construcción-->
    <div>
<br>
<!-- Verifica si el usuario esta logeado, sino lo redirecciona al componente Login -->
    <div class="loginLink" v-if="!auth.isAuth">
        <Login />
          
    </div>

   <div v-else class="box alerta"> En construcción...
    <br>
<progress class="progress is-dark" max="100">1%</progress>




</div>
</div>
</template>
<script setup>
import Login from "../components/Login.vue";
import { useAuthStore } from "../store";
const auth = useAuthStore();


</script>

<style>
.alerta{
    margin-top: 50px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: rgb(190, 137, 137);
    font-weight: bold;
}
</style>


<!-- <template>
  <div>
    <vue-tailwind-datepicker
      ref="myRef"
      :formatter="formatter"
      v-model="dateValue"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import VueTailwindDatepicker from 'vue-tailwind-datepicker';

export default {
  components: {
    VueTailwindDatepicker
  },
  setup() {
    const myRef = ref(null);
    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM'
    });

    return {
      myRef,
      dateValue,
      formatter
    };
  }
};
</script> -->
