<script setup>
  import { useHead } from '@vueuse/head';

  // SEO Actualizado para Cinthia
  useHead({
    title: 'Cinthia Lazcano | Especialista en Comunicación Estratégica',
    meta: [
      { name: 'description', content: 'En el mundo de los negocios y en la vida en general, quien comunica mejor, gana. Conferencias y entrenamientos de alto nivel por Cinthia Lazcano.' },
      { name: 'keywords', content: 'comunicación ejecutiva, media training, storytelling, neurocomunicación, Cinthia Lazcano, Tolko Comunicación' },
      { property: 'og:title', content: 'Cinthia Lazcano | Conferencista' },
      { property: 'og:description', content: 'Transforma la comunicación en un activo y consolida conexiones humanas profundas que aceleren el éxito.' },
      { property: 'og:type', content: 'website' },
    ],
  });
</script>

<template>
  <div>
    <section class="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
      <div class="flex-1">
        <h1 class="font-lemon-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-black">
          En el mundo de los negocios y en la vida en general,
          <br />
          <span class="text-tolko-red">quien comunica mejor, gana.</span>
        </h1>
        <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          Conferencias y entrenamientos de alto nivel diseñados con un propósito claro: transformar la comunicación en un activo y consolidar conexiones humanas profundas que aceleren el éxito de las personas y las empresas.
        </p>
        <a href="#contacto" class="inline-block bg-black text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-tolko-red transition-colors shadow-xl shadow-tolko-red/20">Agendar Fecha</a>
      </div>
    </section>

    <section id="ejecutiva" class="bg-white py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <h2 class="font-lemon-bold text-4xl md:text-5xl mb-4 text-black">Comunicación Ejecutiva</h2>
          <p class="text-lg text-gray-600 max-w-3xl">
            Asesoría en comunicación de alto nivel para ejecutivos en posiciones de liderazgo, a través de sesiones especiales en las que -en un ambiente constructivo, eficiente y de confianza- se les habilita para representar exitosamente a la
            compañía a través de sus palabras, presencia y comunicación no verbal.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-10 rounded-[30px] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:border-tolko-red/30 transition-all group">
            <span class="text-xs font-bold text-tolko-red uppercase tracking-widest mb-4 block">Plática</span>
            <h3 class="font-lemon-bold text-2xl mb-4 group-hover:text-tolko-red transition-colors">El Poder de la Comunicación de Alto Nivel: impacto ejecutivo</h3>
            <p class="text-gray-600 mb-4">
              En los niveles más altos de la organización, la capacidad técnica ya se da por sentada; lo que define el éxito y el legado es la presencia ejecutiva. Cada vez que un líder habla, la reputación y el valor de la compañía están en juego.
            </p>
            <p class="text-gray-600 font-medium mb-4">Esta conferencia está diseñada exclusivamente para que la alta dirección domine la arena pública con autoridad, claridad e influencia.</p>
            <p class="text-gray-600 font-medium">Se trata de comunicar intencionalmente, con energía y poder para mover voluntades, alinear visiones y consolidar el liderazgo en cualquier escenario.</p>
          </div>

          <div class="p-10 rounded-[30px] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:border-tolko-red/30 transition-all group">
            <span class="text-xs font-bold text-tolko-red uppercase tracking-widest mb-4 block">Plática</span>
            <h3 class="font-lemon-bold text-2xl mb-4 group-hover:text-tolko-red transition-colors">Comunicación en tiempos de crisis: conectar en la incertidumbre</h3>
            <p class="text-gray-600 mb-4">En un entorno empresarial hiperconectado y volátil, el silencio o un mensaje mal colocado pueden dañar la reputación de una compañía en cuestión de minutos.</p>
            <p class="text-gray-600 font-medium">
              Esta conferencia dota a la alta dirección de las herramientas de contención y gestión necesarias para liderar la narrativa corporativa cuando la presión es máxima. Los ejecutivos aprenderán a diseñar mensajes de alta claridad y empatía,
              a neutralizar la especulación entre los stakeholders y a proyectar templanza ante los equipos de trabajo. Se trata de gobernar el mensaje en momentos de caos, para transformar la vulnerabilidad en un testimonio de liderazgo firme, ético
              y de alto estatus.
            </p>
          </div>

          <div class="p-10 rounded-[30px] bg-tolko-red text-white shadow-xl shadow-tolko-red/20 transform md:-translate-y-4">
            <span class="text-xs font-bold text-white/80 uppercase tracking-widest mb-4 block">Asesoría</span>
            <h3 class="font-lemon-bold text-2xl mb-4">Entrenamiento de medios</h3>
            <p class="text-white/90 mb-4">
              Este entrenamiento de medios intensivo y de alta confidencialidad prepara a los líderes de la organización para enfrentar cualquier escenario periodístico —ruedas de prensa y entrevistas— con absoluta seguridad y énfasis estratégico.
            </p>
            <p class="font-medium">Los ejecutivos aprenderán a dejar de "responder preguntas" y comenzarán a controlar la narrativa, asegurando que los mensajes clave de la compañía sean los que realmente se conviertan en el foco de la nota.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="personal" class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <h2 class="font-lemon-bold text-4xl md:text-5xl mb-4 text-black">Comunicación Personal</h2>
          <p class="text-lg text-gray-600 max-w-3xl">
            Detrás de cada estrategia y de cada gran objetivo corporativo, hay personas que tratan de conectar con otras, y eso es algo que ninguna tecnología podrá sustituir. La comunicación personal no es una habilidad blanda secundaria; es el
            tejido conector que transforma los objetivos de una empresa en realidades tangibles, porque las empresas hacen negocios con seres humanos, y quien comunica mejor a nivel personal, gana.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-l-4 border-tolko-red">
            <h3 class="font-lemon-bold text-xl mb-4">Comunica con energía: el poder de tus palabras</h3>
            <p class="text-gray-600 mb-4">
              Las palabras tienen el poder de construir imperios o derrumbar proyectos, pero la energía con la que las dices es lo que determina si tu mensaje se queda en la mente de las personas o se evapora al segundo siguiente. Comunicar con
              energía significa alinear tu mente, tu cuerpo y tu voz en una misma frecuencia para proyectar seguridad que contagia, inspira y mueve a la acción.
            </p>
            <p class="text-gray-600 mb-4">
              Se enseñan herramientas prácticas para dominar la voz, aprovechar el lenguaje no verbal como un amplificador de confianza, y estructurar discursos con ritmo dinámico que mantengan la atención de cualquier audiencia.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-l-4 border-black">
            <h3 class="font-lemon-bold text-xl mb-4">Sé memorable: comunica para trascender</h3>
            <p class="text-gray-600 mb-4">
              Hay personas que hablan y se les escucha por educación; hay otras que hablan y sus palabras se quedan grabadas. En la era de la distracción masiva, el desafío va más allá de retener la atención por cinco minutos, sino de ser recordado.
              La diferencia entre un comunicador promedio y uno memorable radica en una sola palabra: trascendencia, lo que convierte la comunicación informativa en una comunicación transformadora, fusionando estrategia de negocios, storytelling y
              propósito.
            </p>
            <p class="text-gray-600 mb-4">
              Esta conferencia enseña a los asistentes a ver su comunicación como un activo estratégico. Aprenderán a estructurar la narrativa (su historia de valor), a alinear los mensajes con sus objetivos y a dominar el arte de hablar clara y
              eficientemente para dejar una huella imborrable en pitches, eventos, reuniones de networking o interacciones del día a día.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-l-4 border-gray-400">
            <h3 class="font-lemon-bold text-xl mb-4">Comunica con empatía: conecta con la mente del otro</h3>
            <p class="text-gray-600 mb-4">
              En un entorno hiperconectado y saturado de ruido digital, la empatía se ha convertido en una ventaja competitiva crítica y rentable. Ningún líder puede influir con éxito, y ninguna fuerza de ventas puede cerrar un negocio de alto valor,
              sin antes consolidar un puente de conexión legítimo que desarme barreras y valide al interlocutor. La comunicación empática es, hoy más que nunca, el verdadero diferenciador de los negocios.
            </p>
            <p class="text-gray-600 mb-4">
              Esta conferencia habilita a las personas a convertir las interacciones transaccionales en conexiones más profundas, tanto con su equipo como con usuarios y clientes finales, escuchando para comprender y construir confianza, y
              descifrando lo que el otro dice.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre-mi" class="py-24 bg-black text-white">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div class="flex-1 w-full relative">
          <div class="aspect-[4/5] bg-gray-800 rounded-[40px] overflow-hidden bg-cover bg-center" style="background-image: url('/cinthialazcano.jpg')"></div>
          <div class="absolute -bottom-6 -right-6 bg-tolko-red text-white p-8 rounded-[30px] font-lemon-bold text-2xl shadow-2xl">
            +20
            <br />
            <span class="text-sm font-raleway font-normal tracking-widest uppercase">Años de Exp.</span>
          </div>
        </div>

        <div class="flex-1">
          <h2 class="font-lemon-bold text-5xl mb-8">Cinthia Lazcano</h2>
          <div class="space-y-6 text-gray-300 text-lg">
            <p>
              Cinthia Lazcano es especialista en comunicación estratégica, personal y empresarial. Con una trayectoria sólida de más de 20 años en el desarrollo de competencias de comunicación, Cinthia ha transformado la manera en que líderes,
              empresas, comités directivos y equipos articulan sus mensajes, tanto en el día a día como en entornos de alta presión.
            </p>
            <p>
              Es fundadora y CEO de Tolko Comunicación desde 2014, con más de una década de experiencia previa en liderar la comunicación de empresas transnacionales. A lo largo de su carrera, ha asesorado a decenas de compañías y ejecutivos de
              primer nivel, abordando la comunicación de manera estratégica, blindando la reputación de las organizaciones y gestionando la narrativa, tanto a nivel interno como externo.
            </p>
            <p>
              Cinthia es reconocida por su estilo dinámico y práctico enfocado en convertir la comunicación en un activo rentable, capaz de unificar culturas corporativas, cerrar acuerdos de alto valor, y consolidar liderazgos y relaciones
              memorables, integrando elementos de neurocomunicación y storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-lemon-bold text-4xl mb-4 text-black">Quiero que Cinthia nos ayude a mejorar nuestra comunicación</h2>
        <p class="text-gray-600 mb-12">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>

        <form class="bg-gray-50 p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-6 text-left">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre o Empresa</label>
              <input type="text" required class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-red focus:ring-1 focus:ring-tolko-red transition-all" />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
              <input type="email" required class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-red focus:ring-1 focus:ring-tolko-red transition-all" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Cuéntanos sobre tus necesidades</label>
            <textarea rows="5" required class="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-tolko-red focus:ring-1 focus:ring-tolko-red transition-all resize-none"></textarea>
          </div>
          <button type="submit" class="bg-tolko-red text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-black transition-colors shadow-lg shadow-tolko-red/20 mt-4">Enviar Solicitud</button>
        </form>
      </div>
    </section>
  </div>
</template>
