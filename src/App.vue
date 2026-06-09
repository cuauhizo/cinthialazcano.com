<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  // import Responsive from '@/components/responsive.vue'

  const anio = ref(new Date().getFullYear());
  const showScrollTopButton = ref(false);
  const activeSection = ref(null);
  const sectionIds = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    showScrollTopButton.value = scrollTop > 0;

    // Detectar sección activa
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeSection.value = id;
          break;
        }
      }
    }
  };

  const cerrarMenu = () => {
    const checkbox = document.getElementById('menu');
    if (checkbox) checkbox.checked = false;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = index => {
    const element = document.getElementById(`section${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<template>
  <!-- Header -->
  <header class="mt-2">
    <div class="fixed z-30 w-full nav-menu bg-white bg-opacity-15">
      <nav class="container h-30 flex items-center justify-between px-5 py-3 relative">
        <!-- <a href="./" class="w-1/3 max-w-[126px]">
          <img src="@/assets/img/logo-convension.svg" alt="Logo" class="w-full" width="127" height="32" loading="lazy" />
        </a> -->
        <a href="./">
          <div class="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
            <div class="w-6 h-6 bg-accentNeon rounded-full"></div>
            cinthialazcano
          </div>
        </a>
        <div class="flex items-center justify-end gap-2 text-base">
          <input type="checkbox" id="menu" class="peer hidden" />
          <label for="menu" class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
          <div class="fixed inset-0 bg-gradient-to-b from-white/20 to-[#3a3a82]/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
            <ul class="absolute inset-x-0 top-24 p-10 items-center bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-6 shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:shadow-none">
              <li>
                <a
                  href="#inicio"
                  class="py-2 px-2 rounded-full hover:bg-accentNeon hover:text-accentDark hover:py-1 hover:px-2"
                  @click="
                    scrollToSection(1);
                    cerrarMenu();
                  ">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#conferencias"
                  :class="['py-2 px-2 rounded-full hover:bg-accentNeon hover:text-accentDark', activeSection === 'section2' ? 'bg-accentNeon text-accentDark' : '']"
                  @click="
                    scrollToSection(2);
                    cerrarMenu();
                  ">
                  Conferencias
                </a>
              </li>
              <li>
                <a
                  href="#ponentes"
                  :class="['py-2 px-2 rounded-full hover:bg-accentNeon hover:text-accentDark', activeSection === 'section3' ? 'bg-accentNeon text-accentDark' : '']"
                  @click="
                    scrollToSection(3);
                    cerrarMenu();
                  ">
                  Ponentes
                </a>
              </li>
              <li>
                <a
                  href="#programa"
                  :class="['py-2 px-2 rounded-full hover:bg-accentNeon hover:text-accentDark', activeSection === 'section4' ? 'bg-accentNeon text-accentDark' : '']"
                  @click="
                    scrollToSection(4);
                    cerrarMenu();
                  ">
                  Programa
                </a>
              </li>
              <li>
                <a
                  href="#stands"
                  @click="
                    scrollToSection(5);
                    cerrarMenu();
                  "
                  :class="['py-2 px-2 rounded-full hover:bg-accentNeon hover:text-accentDark', activeSection === 'section5' ? 'bg-accentNeon text-accentDark' : '']">
                  Stands
                </a>
              </li>
              <li>
                <a
                  href="#sede"
                  :class="['py-2 px-2 rounded-full hover:bg-accentNeon hover:text-accentDark', activeSection === 'section6' ? 'bg-accentNeon text-accentDark' : '']"
                  @click="
                    scrollToSection(6);
                    cerrarMenu();
                  ">
                  Sede
                </a>
              </li>

              <li>
                <a href="#" class="flex items-center gap-2 bg-black text-white w-fit mx-auto rounded-full shadow-sm py-1 px-1.5 pr-2 transition-all duration-500">
                  <i><img src="@/assets/img/icon-contacto.svg" alt="icono contacto" /></i>
                  <span style="vertical-align: inherit"><span style="vertical-align: inherit">Contratar</span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- Main -->
  <main>
    <router-view></router-view>
    <button class="btn-irArriba" @click="scrollToTop" v-show="showScrollTopButton" aria-label="Ir al inicio">
      <span class="sr-only">Ir Arriba</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </main>

  <!-- Footer -->
  <footer>
    <div class="container py-10 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
        <div class="text-[15px] md:col-span-4 xl:col-span-6 max-w-md">
          <a href="./">
            <div class="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
              <div class="w-6 h-6 bg-accentNeon rounded-full"></div>
              cinthialazcano
            </div>
          </a>
          <!-- Social Icons -->
          <div class="mt-4">
            <span class="inline-flex gap-2.5 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a href="#" alt="Linkedin" target="_blank">
                <div class="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-sm">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </div>
              </a>
              <a href="#" alt="Instagram" target="_blank">
                <div class="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full flex items-center justify-center text-white shadow-sm">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </div>
              </a>

              <a href="#" alt="LinkedIn" target="_blank">
                <div class="w-10 h-10 bg-[#0e76a8] rounded-full flex items-center justify-center text-white shadow-sm">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </div>
              </a>

              <a href="https://x.com/amsofipo" alt="X" target="_blank">
                <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-sm">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div class="hidden md:block md:col-span-1 lg:hidden"></div>
        <div class="grid grid-cols-1 text-sm sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 col-span-1 md:col-span-7 xl:col-span-6 gap-y-8 sm:gap-x-8 md:gap-x-8 xl:gap-x-3">
          <div class="sm:col-span-2 xl:col-span-3">
            <h3 class="mb-3 font-bold">Dirección</h3>
            <p>Ave. Insurgentes Sur #2047 Esq. Cracovia Edificio "B", Colonia San Ángel, Del. Álvaro Obregón C.P. 01000, CDMX</p>
          </div>
          <div class="sm:col-span-1 xl:col-span-2">
            <h3 class="mb-3 font-bold">Contacto</h3>
            <nav class="mb-10 list-none">
              <ul>
                <li class="mt-3">
                  <a class="cursor-pointer hover:text-gray-500" href="mailto:contacto@amsofipo.mx">contacto@amsofipo.mx</a>
                </li>
                <li class="">
                  <a href="tel:+5550014851" class="cursor-pointer hover:text-gray-500">+55 5001 4851</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="sm:col-span-1 md:col-span-1 xl:-ml-3">
            <h3 class="mb-3 font-bold">Ligas de interés</h3>
            <nav class="mb-10 list-none">
              <ul>
                <li class="">
                  <a href="#" target="_blank" alt="enlace a SHCP" class="cursor-pointer hover:text-gray-500">Tolko Group</a>
                </li>
                <li class="">
                  <a href="#" target="_blank" alt="enlace a CNBV" class="cursor-pointer hover:text-gray-500">Tolko Producciones</a>
                </li>
                <li class="">
                  <a href="#" target="_blank" alt="enlace a CONDUSEF" class="cursor-pointer hover:text-gray-500">Lecciones de vuelo</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="mt-16 pt-6 border-t border-[#3A3482]">
        <div class="flex flex-col text-sm justify-center items-center text-center md:flex-row md:justify-between">
          <div class="flex space-x-6 mb-4 md:mb-0">
            <a href="#" class="cursor-pointer hover:text-gray-500">Aviso de privacidad</a>
          </div>
          <div class="">
            <p class="">Todos los derechos reservados. AMS® {{ anio }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- <Responsive/> -->
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }

  nav {
    margin: 0 auto;
    width: 100%;
  }

  .nav-menu::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    background: rgba(255 255 255 0.16);
  }

  /* Estilos opcionales para el botón de ir arriba */
  .btn-irArriba {
    padding: 15px;
    background-color: #3a3a82;
    color: #fff;
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    z-index: 50;
    border: 1px solid #000;
  }
</style>
