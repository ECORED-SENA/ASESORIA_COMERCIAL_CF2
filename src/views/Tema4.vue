<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Prospección de los clientes

    p.mb-5(data-aos="fade" data-aos-delay="300") Se puede interpretar a la prospección  como la búsqueda, localización e identificación de prospectos potenciales a través de actividades planeadas y métodos técnicos. La prospección de clientes hace parte del primer paso del proceso de la venta y consiste en encontrar posibles clientes de una empresa que tiene  grandes posibilidades de serlo.
      br
      br
      | Los pasos necesarios en la realización de una venta son los siguientes:  

    .row.justify-content-center.mb-5(data-aos="fade-right" data-aos-delay="300")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 10
          span Funciones del marketing relacional
        figure
          img(src="@/assets/curso/tema4-imagen1.svg")
    
    p.mb-5(data-aos="fade" data-aos-delay="300") El siguiente video profundiza un poco más sobre el proceso de prospección: 

    figure.mb-5(data-aos="fade-left" data-aos-delay="300")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5(data-aos="fade" data-aos-delay="300") Al contar con una base de datos muy elaborada con clientes segmentados según la oferta de productos de la empresa, se busca el acercamiento con cada prospecto y se pueden señalar dos puntos importantes:

    .row.justify-content-center.mb-5 
      .col-md-5.mb-5.mb-md-0.d-flex(data-aos="fade-left" data-aos-delay="300")
        .box-rounded.soft.blue.px-4.py-5
          h1.mb-2 A.
          p.mb-0 Tiene como propósito identificar prospectos e iniciar la comunicación con el cliente.
      .col-md-5.mb-5.mb-md-0.d-flex(data-aos="fade-right" data-aos-delay="300")
        .box-rounded.blue.px-4.py-5
          h1.mb-2 B.
          p.mb-0  Requiere de un análisis previo del modelo de negocio (propio) y conocimiento detallado del negocio (mercado) en el cual se encuentra el o los clientes objetivo.

    p.mb-5(data-aos="fade" data-aos-delay="300") Se compone de los siguientes pasos:

    .row.justify-content-center.mb-5(data-aos="fade-down" data-aos-delay="300")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 11
          span Pasos que componen un prospecto
        figure
          img(src="@/assets/curso/tema4-imagen2.svg")

    .row.justify-content-center.mb-5(data-aos="fade" data-aos-delay="300")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 12
          span Ciclo de los prospectos
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4-imagen3.svg', alt='Texto que describa la imagen')

          .tarjeta.color-amarillo.p-4.text-small.shadow(x="35.1%" y="7%")
            .h5.mb-2 Prospecto 
            p Investigación de las particularidades de cada cliente en perspectiva. Se busca información más específica del cliente.
              br
              br
              | a. Nombres completos
              br
              | b. Rango de edad  
              br
              | c. Género
              br
              | d. Hábitos
              br
              | e. Estado civil
              br
              | f. Nivel de educación

          .tarjeta.color-amarillo.p-3.text-small.shadow(x="68%" y="36%")
            .h5.mb-2 Contacto antes de la cita
            p Con la información del cliente en las manos, se prepara una presentación de ventas adaptada a las necesidades o deseos de cada uno en perspectiva. 
              br
              br
              | Se deben conocer todas las características, beneficios del producto y las ventajas que tiene para el cliente. También, es necesario planificar una entrada que atraiga la atención del cliente, las preguntas que mantendrán su interés, los aspectos que despertarán su deseo, las respuestas a posibles preguntas u objeciones y la forma en la que se puede efectuar el cierre, induciendo a la acción de comprar. 

          .tarjeta.color-amarillo.p-3.text-small.shadow(x="59.7%" y="81%")
            .h5.mb-2 Cita o planificación de la visita en frío
            p Inmediatamente se busca el momento del encuentro con el posible cliente procurando ajustarse a sus condiciones de fecha, horario, entre otras. También se puede hacer visitas en frío, pero esta se puede decir no es una visita planeada. 

          .tarjeta.color-amarillo.p-3.text-small.shadow(x="5.9%" y="81%")
            .h5.mb-2 Entrega el producto o demostración
            p Luego de concretar la cita con el cliente, se puede entregar o dejar muestras o folletos para la preparación del siguiente paso de la venta.

          .tarjeta.color-amarillo.p-3.text-small.shadow(x="4%" y="36%")
            .h5.mb-2 Servicio
            p En caso de ser un servicio lo que se presta, se debe dejar claro el tipo de servicio que es, para que se haga más entendible el siguiente paso del proceso de la venta: la entrevista.
  
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
