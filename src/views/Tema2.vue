<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Relación del mercadeo y los clientes

    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-0 El marketing relacional de acuerdo con Gronroos (1994), es el “conjunto de relaciones a largo plazo que las empresas pretenden crear, mantener y fomentar con clientes, con el objetivo de alcanzar una relación sólida y duradera, mantener el mayor número de negocios con sus clientes y obtener el mayor beneficio” (p.142). 
          br
          br
          | La empresa toma de las herramientas del mercadeo y de su portafolio de oferta la mejor manera de crear valor que le signifique una relación a largo plazo con el cliente. Lo siguiente son aspectos básicos de la gestión de clientes, cómo captarlos y fidelizarlos a través del desarrollo de acciones de promoción y la atención a sus quejas y reclamaciones.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2-imagen1.png")

    p.mb-5 De acuerdo con esto, Gronroos (1990) (en Agüero, 2014, p. 8) propone las siguientes funciones del marketing relacional que debe llevar una empresa:

    .row.justify-content-center.mb-5
      .col-md-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span Funciones del marketing relacional
      .col-md-10
        figure
          img(src="@/assets/curso/tema2-imagen2.svg")
    
    .row.justify-content-center
      .col-lg-5.mb-5.mb-lg-0
        .h5 Con base en lo anterior, se concluye que toda empresa que quiera alcanzar el éxito dentro del mercado debe enfocarse en el cliente. 
      .col-lg-7
        span Solo las empresas que conocen y entienden de mejor manera las necesidades, los intereses y deseos de sus clientes, son aquellas capaces de preparar las mejores propuestas de productos para ser entregados al mercado .
    
    Separator

    #t_2_1.titulo-segundo
      h2 2.1  Atraer clientes

    p.mb-5 Para atraer clientes a la empresa, soportados en el portafolio de productos y su valor agregado, esta debe seguir un proceso de captación. Hay que destacar que cada empresa y cada tipo de cliente necesita un proceso adaptado a sus características y particularidades propias. A continuación,  se presenta un proceso general que sirve de modelo para aquellas empresas que quieren mantener una base de clientes sólida y en crecimiento:

    
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema2',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
