<template>
   
   
    <div class="section">
        <div class="container">
            <form class="box" @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input v-model="name" class="input" type="text" placeholder="Name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="e.g. alex@example.com">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="*******">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="button is-link is-fullwidth" type="submit" placeholder="Text input">
                    </div>
                </div>
            </form>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { registro} from '../api/index'


const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');

 const onSubmit = async()=> {
     await registro(email.value, password.value);
     router.push({ name: 'home'})
 }


</script>
<style scoped>
</style>