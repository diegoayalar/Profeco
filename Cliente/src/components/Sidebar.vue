<template>
  <div v-if="hasToken">
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
      <div class="logo">
        <img :src="logoURL" alt="Vue" />
      </div>

      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
          <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
      </div>

      <h3>Menu</h3>
      <div class="menu">
        <router-link v-for="route in menuRoutes" :key="route.path" :to="route.path" class="button">
          <span class="material-icons">{{ route.icon }}</span>
          <span class="text">{{ route.name }}</span>
        </router-link>
      </div>

      <div class="flex"></div>

      <h3>Usuario</h3>
      <div class="menu">
        <button class="button" @click="logout">
          <span class="material-icons">logout</span>
          <span class="text">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import logoURL from "../assets/vue.svg";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const router = useRouter();

const hasToken = computed(() => !!localStorage.getItem("token"));

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};

const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};

const menuRoutes = [
  { path: "/", name: "Inicio", icon: "home" },
  { path: "/productos", name: "Productos", icon: "list" },
  // Add more routes as needed
];

// Watch for route changes and reload only when navigating to login
watch(
  () => router.currentRoute.value,
  (to, from) => {
    if (to.path === '/login' && hasToken.value) {
      window.location.reload();
	}
	if (to.path === '/' && !hasToken.value) {
      window.location.reload();
	}
  }
);
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;

    background-color: var(--dark);
    color: var(--light);

    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;
            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    // Updated styles for responsive and fixed position
    position: fixed;
    top: 0;
    height: 100vh;
    overflow-y: auto;

    @media (max-width: 1024px) {
        position: static;
        width: 100%;
    }
}
</style>