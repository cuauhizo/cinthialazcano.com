<script setup></script>

<template>
  <section id="section5" class="max-w-3xl mx-auto px-6 py-20">
    <div class="bg-white p-10 md:p-14 rounded-[40px] text-center shadow-2xl shadow-gray-200/50">
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Cotiza tu Conferencia</h2>
      <form @submit.prevent="enviarFormulario" class="flex flex-col gap-4 text-left">
        <input type="text" placeholder="Tu Nombre o Empresa" required class="w-full px-6 py-4 bg-bgLight border border-gray-200 rounded-2xl focus:outline-none focus:border-accentNeon focus:ring-2 focus:ring-accentNeon/20 transition-all font-sans" />
        <input
          type="email"
          placeholder="Tu Correo Electrónico"
          required
          class="w-full px-6 py-4 bg-bgLight border border-gray-200 rounded-2xl focus:outline-none focus:border-accentNeon focus:ring-2 focus:ring-accentNeon/20 transition-all font-sans" />
        <textarea
          rows="4"
          placeholder="Háblame de tu evento..."
          required
          class="w-full px-6 py-4 bg-bgLight border border-gray-200 rounded-2xl focus:outline-none focus:border-accentNeon focus:ring-2 focus:ring-accentNeon/20 transition-all font-sans resize-none"></textarea>
        <button type="submit" class="w-full bg-accentNeon text-accentDark font-bold py-4 rounded-2xl mt-4 hover:scale-[1.02] transition-transform text-lg">Enviar Solicitud</button>
      </form>
    </div>
  </section>
</template>
