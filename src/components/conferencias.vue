<script setup>
  import { patrocinadores } from '@/data/patrocinadores.js';

  const getImageUrl = imageName => {
    return new URL(`/src/assets/img/patrocinadores/${imageName}`, import.meta.url).href;
  };
</script>

<template>
  <section id="section2" class="max-w-7xl mx-auto px-6 py-20">
    <!-- <div data-aos="fade-down" data-aos-anchor-placement="top-center">
      <h2 class="titulo-seccion">Conferencias</h2>
      <p class="titulo">Gracias a las empresas que hacen posible este evento</p>
      <p>
        En nuestra área de exposición se presentan
        <span class="font-bold">proveedores confiables</span>
        que conocen ampliamente las necesidades de las SOFIPOS y ofrecen servicios a la medida, alineados con las tendencias de mercado.
      </p>
    </div>
    <div class="container grid grid-cols-2 gap-4 justify-items-center items-center lg:py-12 md:grid-cols-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div class="max-w-sm rounded-2xl h-full flex flex-col" v-for="(patrocinador, index) in patrocinadores" :key="patrocinador.id">
        <div class="flex-1">
          <a :href="patrocinador.url" :aria-label="patrocinador.alt" target="_blank">
            <img class="" :src="getImageUrl(patrocinador.imagen)" :alt="patrocinador.alt" :data-aos-delay="index * 200" data-aos="flip-right" data-aos-duration="3000" loading="lazy" />
          </a>
        </div>
      </div>
    </div> -->

    <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">Mis Conferencias</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-cardGreen p-10 rounded-[30px] hover:-translate-y-2 transition-transform duration-300">
        <div class="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center text-2xl mb-6">🎤</div>
        <h3 class="text-2xl font-extrabold mb-4 tracking-tight">El Poder de la Palabra</h3>
        <p class="text-textMuted">Estructura un mensaje impactante que persuada y motive a tus equipos de ventas.</p>
      </div>

      <div class="bg-cardPurple p-10 rounded-[30px] hover:-translate-y-2 transition-transform duration-300">
        <div class="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center text-2xl mb-6">🚀</div>
        <h3 class="text-2xl font-extrabold mb-4 tracking-tight">Comunicación Líder</h3>
        <p class="text-textMuted">Desarrolla las habilidades para guiar a tu equipo con claridad y visión estratégica.</p>
      </div>

      <div class="bg-cardYellow p-10 rounded-[30px] hover:-translate-y-2 transition-transform duration-300">
        <div class="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center text-2xl mb-6">💡</div>
        <h3 class="text-2xl font-extrabold mb-4 tracking-tight">Storytelling Corporativo</h3>
        <p class="text-textMuted">Aprende a usar historias para conectar emocionalmente y construir una marca fuerte.</p>
      </div>
    </div>
  </section>
</template>
