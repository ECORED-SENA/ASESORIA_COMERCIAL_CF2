<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-5.mb-5.mb-lg-0
        p.mb-0
          strong.fs-5 La prospección de clientes es una técnica o metodología que se utiliza para buscar y encontrar clientes potenciales. 
      .col-lg-7
        p.mb-0 De ahí la importancia de comprenderlos tanto desde su perspectiva como desde la organización. El siguiente video expone brevemente lo que se desarrollará en el transcurso de este componente, a partir del cliente:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-CJCy0eYYlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
