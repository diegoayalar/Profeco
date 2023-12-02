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
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                            >
                                Iniciar Sesión
                            </button>
                            <!-- Display error message if there is one -->
                            <div
                                v-if="errorMessage"
                                class="alert alert-danger mt-3"
                                role="alert"
                            >
                                {{ errorMessage }}
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
import { jwtDecode } from "jwt-decode";

export default {
    data() {
        return {
            email: "",
            password: "",
            errorMessage: "", // Add error message variable
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/usuarios/autenticar",
                    {
                        correoElectronico: this.email,
                        contrasena: this.password,
                    }
                );

                // Si se obtiene un token JWT en la respuesta, almacenarlo y redirigir
                const token = response.data.token;
                if (token) {
                    // Decodificar el token para obtener el ID y el rol del usuario
                    const decodedToken = jwtDecode(token);
                    console.log(decodedToken);
                    const id = decodedToken.usuario.id;
                    const rol = decodedToken.usuario.rol;

                    // Almacenar el ID y el rol del usuario en el almacenamiento local
                    localStorage.setItem("id", id);
                    localStorage.setItem("rol", rol);

                    // Almacenar el token en el almacenamiento local (puedes usar cookies también)
                    localStorage.setItem("token", token);

                    // Redirigir al usuario a la ruta "/"
                    this.$router.push("/");
                } else {
                    // Manejar el caso en el que no se obtiene un token
                    this.errorMessage =
                        "No se obtuvo un token en la respuesta del servidor.";
                }
            } catch (error) {
                // Manejar el error y mostrar un mensaje de error al usuario
                this.errorMessage = `Error al autenticar: ${error.response.data.mensaje}`;
            }
        },
    },
};
</script>
