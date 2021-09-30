<template lang="pug">
  .row.justify-content-center
    .col-lg-3.col-md-4.col-sm-6.col-12.mb-5(v-for="item in items" :key="item.key")(data-aos="fade" data-aos-delay="400")
      .tarjeta.tarjeta-flip.color-blanco(@mouseover="item.indicadorTarjetaFlip = false")
        .indicador--hover(v-if="item.indicadorTarjetaFlip")
        .tarjeta-flip__contenedor
          .tarjeta-flip__img.especial(:style="{'background-image': `url(${item.img})`}")
            .div-title.px-4.py-2(v-if="item.frontTitleBackgroundColor && item.frontTitleFontColor" :style="{'background-color': `${item.frontTitleBackgroundColor}`, 'color': item.frontTitleFontColor}") {{ item.title }}
          .tarjeta-flip__contenido.flipper-especial(:style="{'background-image': `url(${item.img})`}")
            div(:style="{'background-color': `${item.reverseBackgroundColor}`}")
            p.mb-0.p-4(:style="{'color': `${item.reverseFontColor}`}")
              strong {{ item.title }}
              br
              br
              | {{ item.content }}
</template>

<script>
export default {
  name: 'FlipCards',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
