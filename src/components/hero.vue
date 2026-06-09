<template>
  <section id="section1" class="container flex flex-wrap justify-items-center items-center min-h-lvh gap-12 py-[5rem] md:flex-nowrap md:justify-items-center xl:min-h-screen">
    <div class="w-full md:w-8/12 mx-auto space-y-6" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <h1 class="hero-text font-lemon-bold text-[2.244rem] md:text-[3.196rem] font-bold">En el mundo de los negocios y en la vida en general, quien comunica mejor, gana.</h1>
      <p>Conferencias y entrenamientos de alto nivel diseñados con un propósito claro: transformar la comunicación en un activo y consolidar conexiones humanas profundas que aceleren el éxito de las personas y las empresas.</p>
      <a href="#contacto" class="inline-block bg-accentNeon text-accentDark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200">Agenda conferencia</a>
      <!-- </div>
    <div class="space-y-6 md:space-y-8 w-full md:w-1/2" data-aos="fade-left">
      <img src="../../public/cinthialazcano.jpg" alt="Cinthia Lazcano" class="w-4/5 mx-auto" /> -->
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-6 pt-12 pb-20 flex flex-col lg:flex-row items-center gap-12">
    <div class="flex-1 min-w-[300px]">
      <span class="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Speaker & Mentor</span>
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-6">COMUNICAR ES EL ARTE DE IMPACTAR.</h1>
      <p class="text-lg md:text-xl text-textMuted mb-10 max-w-lg">Eleva el mensaje de tu equipo con conferencias y estrategias diseñadas para conectar y persuadir.</p>
      <a href="#contacto" class="inline-block bg-accentNeon text-accentDark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200">Agendar Fecha</a>
    </div>

    <div class="flex-1 w-full flex gap-5 relative min-h-[400px] md:min-h-[500px]">
      <!-- <div class="w-[55%] h-[400px] md:h-[480px] bg-cardPurple rounded-[40px] bg-cover bg-center" style="background-image: url('/ruta-a-tu-foto-1.jpg')"></div> -->
      <div class="w-[55%] h-[400px] md:h-[480px] bg-cardPurple rounded-[40px] bg-cover bg-center" style="background-image: url('/public/cinthialazcano.jpg')"></div>
      <div class="w-[40%] flex flex-col gap-5 mt-12">
        <div class="h-[200px] bg-cardYellow rounded-[30px] bg-cover bg-center" style="background-image: url('/ruta-a-tu-foto-2.jpg')"></div>
        <div class="h-[230px] bg-cardGreen rounded-[30px] bg-cover bg-center" style="background-image: url('/ruta-a-tu-foto-3.jpg')"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import amextra from '@/assets/img/sofipos/amextra.png';
  import asp from '@/assets/img/sofipos/asp.png';
  import bbcd from '@/assets/img/sofipos/bbcd.png';
  import bienestar from '@/assets/img/sofipos/bienestar.png';
  import broxel from '@/assets/img/sofipos/broxel.png';
  import capital_activo from '@/assets/img/sofipos/capital_activo.png';
  import credicapital from '@/assets/img/sofipos/credicapital.png';
  import crediclub from '@/assets/img/sofipos/crediclub.png';
  import fincomun from '@/assets/img/sofipos/fincomun.png';
  import fin_amigo from '@/assets/img/sofipos/fin_amigo.png';
  import fondedora from '@/assets/img/sofipos/fondedora.png';
  import grensa from '@/assets/img/sofipos/grensa.png';
  import klar from '@/assets/img/sofipos/klar.png';
  import kubo from '@/assets/img/sofipos/kubo.png';
  import monte_de_piedad from '@/assets/img/sofipos/monte_de_piedad.png';
  import paso_seguro from '@/assets/img/sofipos/paso_seguro.png';
  import porvenir from '@/assets/img/sofipos/porvenir.png';
  import premu from '@/assets/img/sofipos/premu.png';
  import progressa from '@/assets/img/sofipos/progressa.png';
  import resuelve from '@/assets/img/sofipos/resuelve.png';
  import sofiexpress from '@/assets/img/sofipos/sofiexpress.png';
  import stori from '@/assets/img/sofipos/stori.png';
  import sumate from '@/assets/img/sofipos/sumate.png';
  import unagra from '@/assets/img/sofipos/unagra.png';
  import xepelin from '@/assets/img/sofipos/xepelin.png';

  const sofipos = ref([
    { id: 1, url: 'https://amextrafinanzas.com/', src: amextra, alt: 'Amextra Finanzas' },
    { id: 2, url: 'https://www.aspintegraopciones.com/fr/home/', src: asp, alt: 'ASP Integra Opciones' },
    { id: 3, url: 'https://bbdcdigital.com.mx/', src: bbcd, alt: 'BBDC Digital' },
    { id: 4, url: 'https://www.ahorrosbienestar.com/', src: bienestar, alt: 'Bienestar' },
    { id: 5, url: 'https://broxel.com/', src: broxel, alt: 'Broxel' },
    { id: 6, url: 'https://capitalactivo.com.mx/', src: capital_activo, alt: 'Capital Activo' },
    { id: 7, url: 'https://credicapital.com.mx/', src: credicapital, alt: 'Credi Capital' },
    { id: 8, url: 'https://www.crediclub.com/', src: crediclub, alt: 'CrediClub' },
    { id: 10, url: 'https://www.finamigo.com.mx/', src: fin_amigo, alt: 'Finamigo' },
    { id: 15, url: 'https://financieramontedepiedad.com.mx/', src: monte_de_piedad, alt: 'Financiera Monte de Piedad' },
    { id: 9, url: 'https://www.fincomun.com.mx/', src: fincomun, alt: 'Fincomún' },
    { id: 11, url: 'https://empresarial.fondeadora.com/', src: fondedora, alt: 'Fondeadora' },
    { id: 12, url: 'https://grensa.com/', src: grensa, alt: 'Grensa' },
    { id: 24, url: 'https://unagra.com.mx/', src: unagra, alt: 'Unagra' },
    { id: 13, url: 'https://www.klar.mx/', src: klar, alt: 'Klar' },
    { id: 14, url: 'https://www.kubofinanciero.com/', src: kubo, alt: 'Kubo Financiero' },
    { id: 16, url: 'https://www.pasoseguro.com.mx/', src: paso_seguro, alt: 'Paso Seguro' },
    { id: 17, url: 'https://porvenirsofipo.mx/', src: porvenir, alt: 'Porvenir SFP' },
    { id: 18, url: 'https://premo.mx/', src: premu, alt: 'Premo' },
    { id: 19, url: 'https://progressa.com.mx/', src: progressa, alt: 'Progressa' },
    { id: 20, url: 'https://resuelvetusfinanzas.com/', src: resuelve, alt: 'Resuelve' },
    { id: 21, url: 'https://sofiexpress.com.mx/home/', src: sofiexpress, alt: 'Sofi Express' },
    { id: 22, url: 'https://www.storicard.com/', src: stori, alt: 'Stori' },
    { id: 23, url: 'https://www.financierasumate.com.mx/', src: sumate, alt: 'Sumate' },
    { id: 25, url: 'https://xepelin.com/mx', src: xepelin, alt: 'Xepelin' },
  ]);
</script>

<style scoped></style>
