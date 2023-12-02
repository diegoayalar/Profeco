<template>
    <div class="container mt-4">
        <router-link to="/productos/nuevo">
            <button class="btn btn-success mb-3">Agregar Producto</button>
        </router-link>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Existencias</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>Precio descontado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto in productos" :key="producto._id">
                        <td>{{ producto._id }}</td>
                        <td>{{ producto.nombre }}</td>
                        <td>{{ producto.stock }}</td>
                        <td>${{ producto.precio }}</td>
                        <td>{{ producto.conDescuento ? "Si" : "No" }}</td>
                        <td>${{ producto.precioDescuento }}</td>
                        <td>
                            <router-link
                                :to="'/productos/editar/' + producto._id"
                            >
                                <button class="btn btn-primary btn-sm">
                                    <span class="material-icons align-middle"
                                        >edit</span
                                    >
                                </button>
                            </router-link>
                            <span style="margin-right: 5px"></span>
                            <button
                                class="btn btn-danger btn-sm"
                                @click="mostrarModal(producto)"
                            >
                                <span class="material-icons align-middle"
                                    >delete</span
                                >
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Ventana de Confirmación -->
        <div v-if="mostrarConfirmacion" class="confirmacion">
            <div class="confirmacion-contenido">
                <p>
                    ¿Estás seguro de que deseas eliminar
                    <strong>{{
                        productoAEliminar ? productoAEliminar.nombre : ""
                    }}</strong
                    >?
                </p>
                <div class="confirmacion-botones">
                    <button
                        class="btn btn-secondary"
                        @click="cancelarEliminacion"
                    >
                        Cancelar
                    </button>
                    <button class="btn btn-danger" @click="eliminarProducto">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
        <!-- Fin de la Ventana de Confirmación -->
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            productos: [],
            mostrarConfirmacion: false,
            productoAEliminar: null,
            mercado: null,
        };
    },
    methods: {
        eliminarProducto() {
            if (this.productoAEliminar) {
                const productoId = this.productoAEliminar._id;
                const mercadoId = this.mercado._id;

                // Elimina el producto de la lista sin recargar toda la tabla
                this.productos = this.productos.filter(
                    (producto) => producto._id !== productoId
                );

                axios
                    .delete(
                        `http://localhost:3000/api/productos/${productoId}`,
                        {
                            headers: {
                                Authorization: `${localStorage.getItem(
                                    "token"
                                )}`,
                            },
                        }
                    )
                    .then(() => {
                        // Actualiza el array productosIds del mercado eliminando el ID del producto
                        axios
                            .put(
                                `http://localhost:3000/api/mercados/${mercadoId}`,
                                {
                                    productosIds: this.productos.map(
                                        (producto) => producto._id
                                    ),
                                },
                                {
                                    headers: {
                                        Authorization: `${localStorage.getItem(
                                            "token"
                                        )}`,
                                    },
                                }
                            )
                            .then(() => {
                                console.log(
                                    "Producto y mercado actualizados exitosamente"
                                );
                                this.cancelarEliminacion(); // Cerrar la ventana después de eliminar
                            })
                            .catch((error) => {
                                console.error(
                                    "Error al actualizar el mercado después de eliminar el producto:",
                                    error
                                );
                            });
                    })
                    .catch((error) => {
                        console.error("Error al eliminar producto:", error);
                    });
            }
        },
        mostrarModal(producto) {
            this.productoAEliminar = producto;
            this.mostrarConfirmacion = true;
        },
        cancelarEliminacion() {
            this.mostrarConfirmacion = false;
            this.productoAEliminar = null;
        },
        obtenerMercadoPorUsuario() {
            const id = localStorage.getItem("id");
            console.log(id);
            axios
                .get(`http://localhost:3000/api/mercados/usuario/${id}`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`,
                    },
                })
                .then((response) => {
                    this.mercado = response.data;
                    this.productos = this.mercado.productos;
                })
                .catch((error) => {
                    console.error(
                        "Error al obtener el mercado por usuario:",
                        error
                    );
                });
        },
    },
    mounted() {
        this.obtenerMercadoPorUsuario();
    },
};
</script>

<style scoped>
.confirmacion {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirmacion-contenido {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.confirmacion-botones {
    margin-top: 15px;
}

.confirmacion-botones button {
    margin-right: 5px;
}
</style>
