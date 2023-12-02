<template>
    <div class="mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div class="container">
                <a class="navbar-brand" href="#">Online Store</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Catalogo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Comparar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cart-icon" href="#">
                                <i class="fa fa-shopping-cart"></i> Carrito
                                <span class="badge badge-primary">{{
                                    cartCounter
                                }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <h2 class="mb-4"><b>Catalogo</b></h2>
            <div v-for="market in markets" :key="market.id">
                <h3 class="mb-4">{{ market.usuario.nombre }}</h3>
                <div class="row flex-nowrap overflow-auto scrollable-row">
                    <div
                        v-for="product in market.productos"
                        :key="product.id"
                        class="col-md-2 mb-2"
                    >
                        <div class="card h-100">
                            <img
                                src="https://via.placeholder.com/300"
                                class="card-img-top"
                                alt="Product Image"
                            />
                            <div class="card-body">
                                <h5 class="card-title">{{ product.nombre }}</h5>
                                <p class="card-text">
                                    Precio: ${{ product.precio }}
                                </p>
                                <a
                                    href="#"
                                    class="btn btn-primary"
                                    @click="addToCart(product)"
                                >
                                    Agregar a carrito
                                </a>
                            </div>
                        </div>
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
            markets: [],
            cartCounter: 0,
        };
    },
    methods: {
        async fetchMarkets() {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    console.error(
                        "No token found. User may not be authenticated."
                    );
                    return;
                }

                const response = await axios.get(
                    "http://localhost:3000/api/mercados",
                    {
                        headers: {
                            Authorization: `${token}`,
                        },
                    }
                );

                this.markets = response.data;
            } catch (error) {
                console.error("Error fetching markets:", error);

                if (error.response && error.response.status === 401) {
                    this.logOut();
                }
            }
        },
        addToCart() {
            this.cartCounter++;
        },
        logOut() {
            localStorage.removeItem("token");
            router.push("/login");
        },
    },
    mounted() {
        this.fetchMarkets();
    },
};
</script>

<style>
.navbar {
    border-bottom: 2px solid #ddd; /* Add a border at the bottom */
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.navbar-brand:hover {
    color: #555;
}

.cart-icon {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
}

.cart-icon i {
    font-size: 1.2rem;
    margin-right: 5px;
}

.badge {
    background-color: #007bff;
}

.scrollable-row {
    overflow-x: auto;
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #333 #ccc; /* For Firefox */
}

.scrollable-row::-webkit-scrollbar {
    width: 12px; /* For Chrome, Safari, and Opera */
}

.scrollable-row::-webkit-scrollbar-thumb {
    background-color: #333; /* Thumb color */
    border-radius: 6px; /* Thumb radius */
}

.scrollable-row::-webkit-scrollbar-track {
    background-color: #ccc; /* Track color */
}
</style>
