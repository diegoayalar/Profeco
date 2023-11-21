<template>
  <div class="container mt-4">
      <div class="row justify-content-center">
          <div class="col-md-6">
              <div class="card">
                  <div class="card-header bg-primary text-white">
                      <h4 class="mb-0">
                          {{ isEditing ? "Actualizar" : "Agregar nuevo" }} producto
                      </h4>
                  </div>
                  <div class="card-body">
                      <form @submit.prevent="validateAndSubmit">
                          <div class="form-group mb-3">
                              <label for="nombre">Nombre</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  id="nombre"
                                  v-model="nuevoProducto.nombre"
                                  required
                              />
                          </div>
                          <div class="form-group mb-3">
                              <label for="stock">Existencias</label>
                              <input
                                  type="number"
                                  class="form-control"
                                  id="stock"
                                  v-model="nuevoProducto.stock"
                                  required
                              />
                          </div>
                          <div class="form-group mb-3">
                              <label for="precio">Precio</label>
                              <div class="input-group">
                                  <div class="input-group-prepend">
                                      <span class="input-group-text">$</span>
                                  </div>
                                  <input
                                      type="number"
                                      class="form-control"
                                      id="precio"
                                      v-model="nuevoProducto.precio"
                                      required
                                  />
                              </div>
                          </div>
                          <div class="form-check mb-3">
                              <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="descuento"
                                  v-model="nuevoProducto.tieneDescuento"
                              />
                              <label class="form-check-label" for="descuento"
                                  >¿Tiene Descuento?</label
                              >
                          </div>
                          <div
                              v-if="nuevoProducto.tieneDescuento"
                              class="form-group mb-3"
                          >
                              <label for="precioDescuento"
                                  >Precio Descuento</label
                              >
                              <div class="input-group">
                                  <div class="input-group-prepend">
                                      <span class="input-group-text">$</span>
                                  </div>
                                  <input
                                      type="number"
                                      class="form-control"
                                      id="precioDescuento"
                                      v-model="nuevoProducto.precioDescuento"
                                  />
                              </div>
                          </div>
                          <div class="d-flex justify-content-end">
                              <router-link
                                  to="/productos"
                                  class="btn btn-secondary"
                                  >Cancelar</router-link
                              >
                              <button
                                  type="submit"
                                  class="btn btn-primary"
                                  style="margin-left: 16px;"
                              >
                                  {{ isEditing ? "Actualizar" : "Agregar" }}
                              </button>
                          </div>
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
          isEditing: false,
          nuevoProducto: {
              nombre: "",
              stock: 0,
              precio: 0,
              tieneDescuento: false,
              precioDescuento: 0,
          },
      };
  },
  methods: {
      checkEditing() {
          this.isEditing = this.$route.path.includes("/editar/");
      },
      fetchProductData() {
          if (this.isEditing) {
              const productoId = this.$route.params.id;
              axios
                  .get(`http://localhost:3000/api/productos/${productoId}`)
                  .then((response) => {
                      this.nuevoProducto = response.data;
                  })
                  .catch((error) => {
                      console.error("Error al obtener el producto:", error);
                  });
          }
      },
      validateAndSubmit() {
          if (this.nuevoProducto.precio === 0) {
              alert(
                  "El precio no puede ser 0. Por favor, ingrese un precio válido."
              );
          } else {
              this.handleSubmit();
          }
      },
      handleSubmit() {
          if (this.isEditing) {
              this.actualizarProducto();
          } else {
              this.agregarProducto();
          }
      },
      agregarProducto() {
          if (
              this.nuevoProducto.tieneDescuento &&
              this.nuevoProducto.precioDescuento === 0
          ) {
              this.nuevoProducto.precioDescuento = this.nuevoProducto.precio;
          }

          axios
              .post("http://localhost:3000/api/productos", this.nuevoProducto)
              .then((response) => {
                  this.$router.push("/productos");
              })
              .catch((error) => {
                  console.error("Error al agregar producto:", error);
              });
      },
      actualizarProducto() {
          const productoId = this.$route.params.id;

          if (
              this.nuevoProducto.tieneDescuento &&
              this.nuevoProducto.precioDescuento === 0
          ) {
              this.nuevoProducto.precioDescuento = this.nuevoProducto.precio;
          }

          axios
              .put(
                  `http://localhost:3000/api/productos/${productoId}`,
                  this.nuevoProducto
              )
              .then(() => {
                  console.log("Producto actualizado exitosamente");
                  this.$router.push("/productos");
              })
              .catch((error) => {
                  console.error("Error al actualizar el producto:", error);
              });
      },
  },
  mounted() {
      this.checkEditing();
      this.fetchProductData();
  },
};
</script>
