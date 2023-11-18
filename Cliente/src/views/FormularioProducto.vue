<template>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0">Agregar Nuevo Producto</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="agregarProducto">
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="nombre" v-model="nuevoProducto.nombre" required>
                </div>
                <div class="mb-3">
                  <label for="stock" class="form-label">Existencias</label>
                  <input type="number" class="form-control" id="stock" v-model="nuevoProducto.stock" required>
                </div>
                <div class="mb-3">
                  <label for="precio" class="form-label">Precio</label>
                  <input type="number" class="form-control" id="precio" v-model="nuevoProducto.precio" required>
                </div>
                <button type="submit" class="btn btn-primary">Agregar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        nuevoProducto: {
          nombre: "",
          stock: 0,
          precio: 0,
        },
      };
    },
    methods: {
      agregarProducto() {
        axios
          .post("http://localhost:3000/api/productos", this.nuevoProducto)
          .then((response) => {
            // Emitir evento para informar al componente padre sobre la adición exitosa
            this.$emit("producto-agregado", response.data);
  
            // Redirigir a la página /productos
            this.$router.push('/productos');
          })
          .catch((error) => {
            console.error("Error al agregar producto:", error);
          });
      },
    },
  };
  </script>