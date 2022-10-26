<template>
<!-- <div> -->
      <!-- <article v-if="auth.isAuth" class="message">
          <div class="message-body">
            
            <router-link :to="{ name: 'home' }"> Ir a Home </router-link>
          </div>
      </article>
  </div> -->

  <div class="section">
    <div class="box alerta"> En construcción...
<progress class="progress is-dark" max="100">30%</progress>

</div>

    <div class="container">
      <form class="box" @submit.prevent="onSubmit">
        <div class="field">
            <label class="label">Seleccionar foto de perfil: </label>
    <input type="file" @change="onFile" />
    <img :src="imgSrc" v-if="imgSrc" />
        </div>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
       
        <!-- <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="e.g. alex@example.com"
              required
            />
          </div>
        </div> -->
        <!-- <label class="label">Cambiar contraseña</label> -->
        <div class="field">
          <label class="label">Contraseña actual</label>
          <div class="control">
            <input
              v-model="pass1"
              class="input"
              type="password"
              placeholder="********"
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Nueva contraseña</label>
          <div class="control">
            <input
              v-model="pass1"
              class="input"
              type="password"
              placeholder="*******"
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar Nueva contraseña</label>
          <div class="control">
            <input
              v-model="pass2"
              class="input"
              type="password"
              placeholder="*******"
              required
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="button is-success is-light is-outlined"
              type="submit"
              placeholder="Text input"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  </template>
  <script>


  //TODO pasar para composite

  export default {
    data() {
      return {
        imgSrc: ''
      }
    },
    methods: {
      onFile(e) {
        const files = e.target.files
        if (!files.length) return
  
        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = () => (this.imgSrc = reader.result)
      }
    }
  }
  
  </script>
  <style>
img{
    border-radius: 40%;
    height: 100px;
    
}
.alerta{
    margin-top: 50px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: rgb(190, 137, 137);
    font-weight: bold;
}
</style>