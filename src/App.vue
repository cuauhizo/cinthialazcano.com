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
          <a href="#ejecutiva" class="hover:text-tolko-red transition-colors">Com. Ejecutiva</a>
          <a href="#personal" class="hover:text-tolko-red transition-colors">Com. Personal</a>
          <a href="#sobre-mi" class="hover:text-tolko-red transition-colors">Sobre Mí</a>
          <a href="#contacto" class="bg-tolko-red text-white px-6 py-2 rounded-full hover:bg-black transition-colors">Contratar</a>
        </div>

        <button @click="toggleMenu" class="md:hidden text-2xl text-tolko-red">☰</button>
      </nav>

      <div v-show="isMenuOpen" class="md:hidden bg-white shadow-lg absolute w-full left-0 top-full flex flex-col font-bold uppercase text-sm">
        <a @click="toggleMenu" href="#ejecutiva" class="p-4 border-b">Com. Ejecutiva</a>
        <a @click="toggleMenu" href="#personal" class="p-4 border-b">Com. Personal</a>
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

        <div class="flex flex-col md:flex-row gap-6 font-bold text-sm tracking-widest uppercase">
          <a href="#" class="hover:text-tolko-red transition-colors">TOLKO</a>
          <a href="#" class="hover:text-tolko-red transition-colors">Tolko Producciones</a>
          <a href="#" class="hover:text-tolko-red transition-colors">Lecciones de Vuelo</a>
        </div>
      </div>
      <div class="text-center text-gray-500 text-xs mt-12 border-t border-gray-800 pt-6">&copy; {{ anio }} Cinthia Lazcano. Todos los derechos reservados.</div>
    </footer>
  </div>
</template>
