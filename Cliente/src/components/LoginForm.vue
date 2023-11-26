<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0">Iniciar Sesión</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="Ingrese su correo electrónico"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Contraseña:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
              <br />
              <button type="submit" class="btn btn-primary btn-block">
                Iniciar Sesión
              </button>

              <!-- Nuevas funcionalidades para el Consumidor -->
              <button type="button" class="btn btn-info btn-block mt-3" @click="verificarOfertas">Verificar Ofertas</button>
              <input v-model="productoBuscado" class="form-control mt-3" placeholder="Buscar producto" />
              <button type="button" class="btn btn-success btn-block" @click="buscarProductos">Buscar Productos</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      productoBuscado: "",
    };
  },
  methods: {
    login() {
      // Lógica para procesar el inicio de sesión
      console.log("Correo Electrónico:", this.email);
      console.log("Contraseña:", this.password);
      // Aquí puedes realizar una solicitud HTTP para autenticar al usuario
    },
    verificarOfertas() {
      // Lógica para verificar ofertas
      console.log("Verificar ofertas");
      // Aquí puedes realizar una solicitud HTTP para verificar ofertas
    },
    buscarProductos() {
      // Lógica para buscar productos
      console.log("Buscar productos", this.productoBuscado);
      // Aquí puedes realizar una solicitud HTTP para buscar productos
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el componente si es necesario */
</style>
