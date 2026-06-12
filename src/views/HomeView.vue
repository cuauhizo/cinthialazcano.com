<script setup>
  import { ref } from 'vue'
  import { useHead } from '@vueuse/head'
  import { useGtm } from '@gtm-support/vue-gtm'

  const gtm = useGtm()

  // SEO Actualizado para Cinthia
  useHead({
    title: 'Cinthia Lazcano | Especialista en Comunicación Estratégica',
    meta: [
      { name: 'description', content: 'En el mundo de los negocios y en la vida en general, quien comunica mejor, gana. Conferencias y entrenamientos de alto nivel por Cinthia Lazcano.' },
      { name: 'keywords', content: 'comunicación ejecutiva, media training, storytelling, neurocomunicación, Cinthia Lazcano, Tolko Comunicación, Tolko Group' },
      { property: 'og:title', content: 'Cinthia Lazcano | Conferencista' },
      { property: 'og:description', content: 'Transforma la comunicación en un activo y consolida conexiones humanas profundas que aceleren el éxito.' },
      { property: 'og:type', content: 'website' },
    ],
  })

  // Variables reactivas para el formulario
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const formStatus = ref('') // Para mostrar mensaje de éxito o error

  const enviarFormulario = async () => {
    isSubmitting.value = true
    formStatus.value = ''

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // REEMPLAZA ESTO CON LA LLAVE QUE TE LLEGÓ AL CORREO:
          access_key: '25c74615-c4c9-4fb5-b53d-b5c06468675c',
          name: formData.value.name,
          email: formData.value.email,
          phone: formData.value.phone,
          message: formData.value.message,
          subject: 'Nueva solicitud de conferencia desde la Web',
        }),
      })

      const result = await response.json()

      if (result.success) {
        formStatus.value = 'success'

        if (gtm) {
          gtm.trackEvent({
            event: 'form_submission',
            category: 'Lead',
            action: 'Formulario de Contacto Exitoso',
            label: formData.value.name,
          })
        }

        // Limpiar formulario tras éxito
        formData.value = { name: '', email: '', phone: '', message: '' }
      } else {
        formStatus.value = 'error'
      }
    } catch (error) {
      console.error('Error enviando el formulario:', error)
      formStatus.value = 'error'
    } finally {
      isSubmitting.value = false
      setTimeout(() => {
        formStatus.value = ''
      }, 5000) // 5000 milisegundos = 5 segundos
    }
  }
</script>

<template>
  <div>
    <div class="bg-hero">
      <section class="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div class="flex-1">
          <h1 class="font-lemon-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-black">
            En el mundo de los negocios y en la vida en general,
            <br class="hidden xl:block" />
            <span class="text-tolko-purple">quien comunica mejor, gana.</span>
          </h1>
          <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Conferencias y entrenamientos diseñados con un propósito claro:
            <strong class="font-bold text-black">transformar la comunicación en un activo</strong>
            y consolidar conexiones profundas que
            <strong class="font-bold text-black">aceleren el éxito</strong>
            de personas y empresas.
          </p>
          <a href="#contacto" class="inline-block bg-black text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-tolko-purple transition-colors shadow-xl">Agendar Fecha</a>
        </div>
      </section>
    </div>
    <section id="ejecutiva" class="bg-white py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <h2 class="font-lemon-bold text-4xl md:text-5xl mb-4 text-black">Comunicación Ejecutiva</h2>
          <p class="text-lg text-gray-600 max-w-3xl">
            Asesoría en comunicación de alto nivel para ejecutivos en posiciones de liderazgo, a través de sesiones especiales en las que -en un ambiente constructivo, eficiente y de confianza- se les habilita para
            <strong class="font-bold text-black">representar exitosamente a la compañía</strong>
            a través de sus palabras, presencia y comunicación no verbal.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="relative p-10 rounded-[30px] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:border-tolko-purple/30 transition-all group">
            <span class="text-xs font-bold text-tolko-purple uppercase tracking-widest mb-4 block">Conferencia</span>
            <h3 class="font-lemon-bold text-2xl mb-4 group-hover:text-tolko-purple transition-colors">El Poder de la Comunicación de Alto Nivel: impacto ejecutivo</h3>
            <p class="text-gray-600 mb-4">
              Cada vez que un líder habla, la
              <strong class="font-bold text-black">reputación y el valor</strong>
              de la compañía están en juego. Esta conferencia está diseñada exclusivamente para que la alta dirección domine la arena pública con
              <strong class="font-bold text-black">autoridad, claridad e influencia</strong>.
            </p>
            <div class="h-0.5 w-[90%] bg-tolko-purple absolute right-0 bottom-10"></div>
          </div>

          <div class="relative p-10 rounded-[30px] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:border-tolko-purple/30 transition-all group">
            <span class="text-xs font-bold text-tolko-purple uppercase tracking-widest mb-4 block">Conferencia</span>
            <h3 class="font-lemon-bold text-2xl mb-4 group-hover:text-tolko-purple transition-colors">Comunicación en tiempos de crisis: conectar en la incertidumbre</h3>
            <p class="text-gray-600 mb-4">
              Esta conferencia dota a los líderes de las herramientas de contención y gestión necesarias para
              <strong class="font-bold text-black">liderar la narrativa</strong>
              cuando la presión es máxima. Se trata de
              <strong class="font-bold text-black">gobernar el mensaje</strong>
              y transmitir comunicación firme y ética.
            </p>
            <div class="h-0.5 w-[90%] bg-tolko-purple absolute right-0 bottom-10"></div>
          </div>

          <div class="relative p-10 rounded-[30px] bg-tolko-purple text-white shadow-xl shadow-tolko-purple/20 transform md:-translate-y-4">
            <span class="text-xs font-bold text-white/80 uppercase tracking-widest mb-4 block">Taller</span>
            <h3 class="font-lemon-bold text-2xl mb-4">Entrenamiento de medios</h3>
            <p class="text-white/90 mb-4">
              Preparación para que los líderes enfrenten cualquier escenario periodístico —ruedas de prensa y entrevistas— con
              <strong class="font-bold text-white">absoluta seguridad y énfasis estratégico</strong>, controlando la narrativa.
            </p>
            <div class="h-0.5 w-[90%] bg-white absolute right-0 bottom-10"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="personal" class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <h2 class="font-lemon-bold text-4xl md:text-5xl mb-4 text-black">Comunicación Personal</h2>
          <p class="text-lg text-gray-600 max-w-3xl">
            La comunicación personal es mucho más que una habilidad blanda; es el
            <strong class="font-bold text-tolko-purple">tejido conector que transforma los objetivos de una empresa en realidades tangibles</strong>, porque las empresas hacen negocios con seres humanos, y quien comunica mejor a nivel personal, gana.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-l-4 border-tolko-purple">
            <span class="text-xs font-bold text-tolko-purple uppercase tracking-widest mb-4 block">Conferencia</span>
            <h3 class="font-lemon-bold text-xl mb-4">Comunica con energía: el poder de tus palabras</h3>
            <p class="text-gray-600 mb-4">
              Las palabras tienen un gran poder, pero la energía con la que las dices es lo que determina si tu mensaje se queda en la mente de las personas. Esta conferencia da herramientas prácticas para conectar e inspirar.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-l-4 border-tolko-purple2">
            <span class="text-xs font-bold text-tolko-purple uppercase tracking-widest mb-4 block">Conferencia</span>
            <h3 class="font-lemon-bold text-xl mb-4">Sé memorable: comunica para trascender</h3>
            <p class="text-gray-600 mb-4">
              En la era de la saturación de mensajes, esta conferencia impulsa la
              <strong class="font-bold text-black">comunicación transformadora</strong>, fusionando estrategia de negocios, storytelling y propósito, convirtiéndola en un activo estratégico.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-l-4 border-tolko-purple3">
            <span class="text-xs font-bold text-tolko-purple uppercase tracking-widest mb-4 block">Conferencia</span>
            <h3 class="font-lemon-bold text-xl mb-4">Comunica con empatía: conecta con la mente del otro</h3>
            <p class="text-gray-600 mb-4">
              La comunicación empática es un
              <strong class="font-bold text-black">gran diferenciador en los negocios</strong>. Esta conferencia habilita a las personas a convertir interacciones en conexiones, escuchando para comprender y construir confianza.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre-mi" class="py-24 bg-black text-white">
      <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div class="flex-1 w-full relative">
          <img src="/cinthialazcano.webp" alt="Cinthia Lazcano - Conferencista y Especialista en Comunicación" class="aspect-[4/3] bg-white object-contain rounded-[40px]" />
          <div class="absolute -bottom-6 -right-6 bg-tolko-purple text-white p-8 rounded-[30px] font-lemon-bold text-4xl shadow-2xl">
            +20
            <br />
            <span class="text-sm font-raleway font-normal tracking-widest uppercase">Años de Exp.</span>
          </div>
        </div>

        <div class="flex-1">
          <h2 class="font-lemon-bold text-5xl mb-8">Cinthia Lazcano</h2>
          <div class="space-y-6 text-gray-300 text-lg">
            <p>
              <strong class="font-bold text-white">Especialista en comunicación estratégica, personal y empresarial</strong>, con más de 20 años de en el desarrollo de competencias de comunicación. Cinthia ha transformado la manera en que líderes, empresas, comités directivos y equipos articulan sus mensajes, tanto en el día a día como en
              <strong class="font-bold text-white">entornos de alta presión</strong>
              .
            </p>
            <p>
              Es fundadora y CEO de Tolko Comunicación desde 2014, con más de una década de experiencia previa en liderar la comunicación de empresas transnacionales. Ha asesorado a decenas de compañías y ejecutivos de primer nivel.
              <strong class="font-bold text-white">También es locutora profesional.</strong>
            </p>
            <p>
              Cinthia es reconocida por su estilo dinámico y práctico enfocado en convertir la comunicación en un
              <strong class="font-bold text-white">activo rentable</strong>, capaz de unificar culturas corporativas, cerrar acuerdos de alto valor, y consolidar liderazgos y relaciones memorables, integrando elementos de neurocomunicación y storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-lemon-bold text-4xl mb-4 text-black">Quiero que Cinthia nos ayude a mejorar nuestra comunicación</h2>
        <p class="text-gray-600 mb-12">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>

        <form @submit.prevent="enviarFormulario" class="bg-gray-50 p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-6 text-left">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="nombre" class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre o Empresa</label>
              <input id="nombre" type="text" v-model="formData.name" required class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-purple focus:ring-1 focus:ring-tolko-purple transition-all" />
            </div>
            <div>
              <label for="email" class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
              <input id="email" type="email" v-model="formData.email" required class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-purple focus:ring-1 focus:ring-tolko-purple transition-all" />
            </div>
          </div>

          <div>
            <label for="telefono" class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Teléfono de Contacto</label>
            <input id="telefono" type="tel" v-model="formData.phone" required class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-purple focus:ring-1 focus:ring-tolko-purple transition-all" />
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Cuéntanos sobre tus necesidades</label>
            <textarea
              id="mensaje"
              rows="5"
              v-model="formData.message"
              required
              class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-purple focus:ring-1 focus:ring-tolko-purple transition-all resize-none"></textarea>
          </div>

          <p v-if="formStatus === 'success'" class="text-green-600 font-bold text-center">¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</p>
          <p v-if="formStatus === 'error'" class="text-red-600 font-bold text-center">Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</p>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-tolko-purple text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-black transition-colors shadow-lg shadow-tolko-purple/20 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
            {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitud' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
