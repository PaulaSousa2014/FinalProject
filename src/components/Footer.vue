<template>
    
<footer class="footer">
    <div class="content has-text-centered">
    <router-link class="links privacy" :to="{ name: 'privacy' }">Politica de privacidad</router-link>

<br>
<p>Si te ha gustado lo que has visto y quieres conocer 
más sobre mi trabajo, entra en mis redes sociales:</p>
<a class="linkedin"
href="https://www.linkedin.com/in/paula-sousa-68bb52187/"><i class="fa-brands fa-linkedin"></i></a>
<a class="gitLogo" 
href="https://github.com/PaulaSousa2014"><i class="fa-brands fa-github"></i></a>
</div>
</footer>

</template>
<script setup>
</script>
<style scoped>
.footer{   
    justify-content: center;
    background-color: rgb(158, 156, 156);
    height: 100px;
    text-align: center;
}
a{
    margin-left: 5px;
}
.gitLogo{
    color: black;
}
.privacy{
    color: black;
    text-decoration: underline;
    
}
.linkedin{
    color: rgb(41, 41, 205);
}
</style>