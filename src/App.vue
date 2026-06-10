<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const anio = ref(new Date().getFullYear());
  const showScrollTopButton = ref(false);
  const isMenuOpen = ref(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    showScrollTopButton.value = window.scrollY > 100;
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div class="font-raleway text-gray-800 bg-gray-50 min-h-screen flex flex-col">
    <header class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="font-lemon-bold text-2xl tracking-tighter text-black flex items-center gap-2">
          <span class="w-4 h-4 bg-tolko-red rounded-full inline-block"></span>
          Cinthia Lazcano
        </a>

        <div class="hidden md:flex gap-8 items-center font-bold text-sm uppercase tracking-wide">
          <a href="#ejecutiva" class="hover:text-tolko-red transition-colors">Comunicación Ejecutiva</a>
          <a href="#personal" class="hover:text-tolko-red transition-colors">Comunicación Personal</a>
          <a href="#sobre-mi" class="hover:text-tolko-red transition-colors">Sobre Mí</a>
          <a href="#contacto" class="bg-tolko-red text-white px-6 py-2 rounded-full hover:bg-black transition-colors">Contratar</a>
        </div>

        <button @click="toggleMenu" class="md:hidden text-2xl text-tolko-red">☰</button>
      </nav>

      <div v-show="isMenuOpen" class="md:hidden bg-white shadow-lg absolute w-full left-0 top-full flex flex-col font-bold uppercase text-sm">
        <a @click="toggleMenu" href="#ejecutiva" class="p-4 border-b">Comunicación Ejecutiva</a>
        <a @click="toggleMenu" href="#personal" class="p-4 border-b">Comunicación Personal</a>
        <a @click="toggleMenu" href="#sobre-mi" class="p-4 border-b">Sobre Mí</a>
        <a @click="toggleMenu" href="#contacto" class="p-4 text-tolko-red">Contratar</a>
      </div>
    </header>

    <main class="flex-grow pt-24">
      <router-view></router-view>

      <button class="fixed right-6 bottom-6 bg-tolko-red text-white p-3 rounded-full shadow-lg z-50 hover:scale-110 transition-transform" @click="scrollToTop" v-show="showScrollTopButton">↑</button>
    </main>

    <footer class="bg-black text-white py-12">
      <div class="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 class="font-lemon-bold text-2xl mb-2">Cinthia Lazcano</h2>
          <p class="text-gray-400 text-sm mb-4">Especialista en comunicación estratégica, personal y empresarial.</p>
          <span class="inline-flex gap-2.5 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="https://www.linkedin.com/in/cinthialazcanoroa/" alt="LinkedIn" target="_blank">
              <div class="w-10 h-10 bg-[#0e76a8] rounded-full flex items-center justify-center text-white shadow-sm">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </div>
            </a>
          </span>
        </div>
        <div class="flex flex-col md:flex-row gap-6 font-bold text-sm tracking-widest uppercase items-center">
          <img src="./assets/img/logo-tolko.svg" class="h-8 w-8" alt="Logo Tolko" />
          <a href="https://tolkogroup.com/" target="_blank" class="hover:text-tolko-red transition-colors">Tolko Comunicación</a>
          <a href="https://tolkoproducciones.com/" target="_blank" class="hover:text-tolko-red transition-colors">Tolko Producciones</a>
          <a href="https://leccionesdevuelo.com/" target="_blank" class="hover:text-tolko-red transition-colors">Lecciones de Vuelo</a>
        </div>
      </div>
      <div class="text-center text-gray-500 text-xs mt-12 border-t border-gray-800 pt-6">&copy; {{ anio }} Cinthia Lazcano. Todos los derechos reservados.</div>
    </footer>
  </div>
</template>
