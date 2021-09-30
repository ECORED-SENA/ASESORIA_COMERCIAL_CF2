<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Relación del mercadeo y los clientes

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right" data-aos-delay="300")
        p.mb-0 El marketing relacional de acuerdo con Gronroos (1994), es el “conjunto de relaciones a largo plazo que las empresas pretenden crear, mantener y fomentar con clientes, con el objetivo de alcanzar una relación sólida y duradera, mantener el mayor número de negocios con sus clientes y obtener el mayor beneficio” (p.142). 
          br
          br
          | La empresa toma de las herramientas del mercadeo y de su portafolio de oferta la mejor manera de crear valor que le signifique una relación a largo plazo con el cliente. Lo siguiente son aspectos básicos de la gestión de clientes, cómo captarlos y fidelizarlos a través del desarrollo de acciones de promoción y la atención a sus quejas y reclamaciones.
      .col-lg-6(data-aos="fade-left" data-aos-delay="300")
        figure
          img(src="@/assets/curso/tema2-imagen1.png")

    p.mb-5(data-aos="fade-up" data-aos-delay="300") De acuerdo con esto, Gronroos (1990) (en Agüero, 2014, p. 8) propone las siguientes funciones del marketing relacional que debe llevar una empresa:

    .row.justify-content-center.mb-5
      .col-md-11(data-aos="fade-right" data-aos-delay="300")
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span Funciones del marketing relacional
      .col-md-10(data-aos="fade-left" data-aos-delay="300")
        figure
          img(src="@/assets/curso/tema2-imagen2.svg")
    
    .row.justify-content-center
      .col-lg-5.mb-5.mb-lg-0(data-aos="fade-left" data-aos-delay="300")
        .h5 Con base en lo anterior, se concluye que toda empresa que quiera alcanzar el éxito dentro del mercado debe enfocarse en el cliente. 
      .col-lg-7(data-aos="fade-right" data-aos-delay="300")
        span Solo las empresas que conocen y entienden de mejor manera las necesidades, los intereses y deseos de sus clientes, son aquellas capaces de preparar las mejores propuestas de productos para ser entregados al mercado .
    
    Separador

    #t_2_1.titulo-segundo(data-aos="fade" data-aos-delay="300")
      h2 2.1  Atraer clientes

    p.mb-5(data-aos="fade" data-aos-delay="300") Para atraer clientes a la empresa, soportados en el portafolio de productos y su valor agregado, esta debe seguir un proceso de captación. Hay que destacar que cada empresa y cada tipo de cliente necesita un proceso adaptado a sus características y particularidades propias. A continuación,  se presenta un proceso general que sirve de modelo para aquellas empresas que quieren mantener una base de clientes sólida y en crecimiento:

    .row.justify-content-center.mb-5(data-aos="fade" data-aos-delay="300")
      .col-lg-10
        LineaTiempoD.color-primario
          div.text-small.px-4.py-3(numero="1" titulo="Identificar a los clientes")
            p.mb-0 Se logra mediante la prospección de clientes potenciales. La empresa debe buscar aquellos clientes que podrían convertirse en compradores y hacer todo lo mercadológicamente posible para captarlos y que puedan reportar beneficios. 
              br
              br
              | Aquí la segmentación de esos clientes juega un papel muy importante, pues se trata de dividirlos en grupos homogéneos a los que se les pueda dirigir la oferta de la empresa. En este punto se trata de observar e identificar tantos segmentos como se pueda y luego ver cuáles son de interés. La empresa debe mirar a qué otros tipos de clientes podría dirigirse además de los actuales. Por ejemplo:
              br
              br
              | <strong>a.</strong> Clientes fáciles de captar y de retener.
              br
              | <strong>b.</strong> Clientes fáciles de captar, pero difíciles de retener.
              br
              | <strong>c.</strong> Clientes difíciles de captar, pero fáciles de retener.
              br
              | <strong>d.</strong> Clientes difíciles de captar y de retener.
          div.text-small.px-4.py-3(numero="2" titulo="Seleccionar clientes")
            p.mb-4 Luego que se identifican los segmentos, se procede a analizarlos y se determina si son clientes potenciales y con ello, tomar una decisión sobre si se invertirá tiempo y dinero en ellos o no. Este análisis se tendrá que llevar a cabo durante todo el proceso de venta a medida que se va obteniendo más datos de este nuevo consumidor. 
              br
              br
              | La empresa debe determinar quiénes son esos clientes, cuya adquisición no solo va a aumentar la cuota de mercado a corto plazo, sino que elevará la rentabilidad y los beneficios de la empresa a largo plazo.
              br
              br
              | Determinar el segmento de mercado es más atractivo para la empresa pues se pueden plantear diversas cuestiones como:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | El volumen de productos o servicios demandado.
              li 
                i.lista-ul__vineta
                | Conocer los atributos del producto o servicio que se están demandando y que tiene la competencia.
              li 
                i.lista-ul__vineta
                | Mirar el tiempo de permanencia como clientes.
              li 
                i.lista-ul__vineta
                | Su distribución geográfica.
              li 
                i.lista-ul__vineta
                | La posibilidad de generar boca a boca.
              li 
                i.lista-ul__vineta
                | Tener en cuenta el comportamiento de compra.

          div.text-small.px-4.py-3(numero="3" titulo="Captar clientes")
            p.mb-0 La captación de clientes es el proceso de incorporar nuevos clientes a la empresa, con el propósito de que compren los productos de la misma y se conviertan en una fuente de utilidad para el negocio. Por tanto, una vez que se seleccionan los segmentos más representativos, el siguiente paso es establecer a través de qué medios hay que dirigirse a dichos segmentos. 
              br
              br
              | Para ello, la empresa debe destinar recursos humanos, monetarios y de tiempo que deben ser tenidos en cuenta a la hora de realizar la comunicación para captar clientes. Todo lo anterior con el objetivo de obtener pleno conocimiento en la forma como estos se comportan en un proceso de compra.

    
    p.mb-5(data-aos="fade" data-aos-delay="300") De acuerdo con Promove Consultoría e formación SLNE (2012), existen acciones establecidas para captar clientes:

    FlipCards.mb-5(:items="flips1")

    p.mb-5(data-aos="fade" data-aos-delay="300") Todas estas acciones aplicadas a los segmentos seleccionados y con un conocimiento de la competencia, se podrán realizar planes de captación de clientes en los que se definan claramente los segmentos de clientes de mayor a menor valor a captar, así como los recursos comerciales y de mercadeo que se deben asignar a cada segmento.

    Separador(data-aos="fade" data-aos-delay="300")

    #t_2_2.titulo-segundo(data-aos="fade" data-aos-delay="300")
      h2 2.2  Retener clientes

    .row.justify-content-center.mb-5
      .col-md-5(data-aos="fade-right" data-aos-delay="300")
        p.mb-0
          strong Sucede cuando una empresa planifica un conjunto de estrategias de fidelización y acciones con la finalidad de mantener a los clientes actuales a largo plazo. 
      .col-md-7(data-aos="fade-left" data-aos-delay="300")
        p.mb-0 Retener a un cliente que viene comprando,  es más económico que conseguir uno nuevo al que hay que invertir muchos recursos . 
    
    p.mb-5(data-aos="fade" data-aos-delay="300") En este sentido, las empresas deben revisar aquellos clientes que compraron y que no volvieron hacerlo por alguna razón. Esos clientes están registrados en la base de datos o en la cartera aparecen como inactivos. De tal manera, que junto a las acciones que se utilizan para captar clientes debe unirse acciones para mantener a los actuales y ofrecerles, de acuerdo con su perfil y segmento, elementos promocionales como: descuentos, ofertas, cupones promocionales, vinculaciones a apps, invitaciones a participar en focus group, entre otros que son más detallados en las estrategias de fidelización para los clientes nuevos y los actuales. La siguiente figura presenta algunas recomendaciones:

    .row.justify-content-center.mb-5(data-aos="fade" data-aos-delay="300")
      .col-md-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span Recomendaciones
        figure
          img(src="@/assets/curso/tema2-imagen11.svg")
    
    Separador(data-aos="fade" data-aos-delay="300")

    #t_2_3.titulo-segundo(data-aos="fade" data-aos-delay="300")
      h2 2.3  Fidelizar clientes

    p.mb-5(data-aos="fade" data-aos-delay="300") La fidelización se entiende como una acción dirigida a conseguir que los clientes mantengan relaciones estables y continuadas con la empresa a lo largo del tiempo.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0(data-aos="fade-right" data-aos-delay="300")
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-bold Es un proceso que consiste en desarrollar una relación positiva entre los consumidores y la empresa, para que regresen a comprar tus productos o servicios.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0.text-regular  (Escamilla, 2020 ).
      .col-lg-6(data-aos="fade-left" data-aos-delay="300")
        p.mb-0 Un cliente es leal basado en un conjunto de interacciones satisfactorias con la empresa. La fidelización busca principalmente: 1) que el cliente siga comprando a lo largo del tiempo, y 2) aumentar el volumen de compra.
          br
          br
          | Basado en lo anterior, el siguiente video expone lo que conlleva el proceso de fidelización de un cliente, sus grados de satisfacción y la estrategia que se utiliza bajo los pasos del mercado relacional:
    
    figure.mb-5(data-aos="fade" data-aos-delay="300")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5(data-aos="fade" data-aos-delay="300") La empresa debe incluir en su plan de fidelización programas que procuren mantener un vínculo de comunicación entre la empresa y los clientes. Entre los más utilizados se encuentran los siguientes.

    FlipCards(:items="flips2")
  
</template>

<script>
import FlipCards from '../components/FlipCards'
export default {
  name: 'Tema2',
  components: {
    FlipCards,
  },
  data: () => ({
    // variables de vue
    flips1: [
      {
        title: 'Fomentar que los clientes actuales informen o recomienden ',
        content:
          'el establecimiento a otros posibles clientes o bien pongan al empresario en contacto con ellos.',
        img: require('@/assets/curso/tema2-imagen3.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Exposición pública y demostraciones',
        content:
          'Contacto directo con el segmento de clientes que se quiere captar. Por ejemplo, un supermercado puede ofrecer degustaciones gratuitas de determinados productos.',
        img: require('@/assets/curso/tema2-imagen4.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Establecer redes de contacto',
        content:
          'Buscar y contactar con los clientes allí donde estén, por ejemplo, un establecimiento de ropa y complementos deportivos puede financiar un club de fútbol de aficionados.',
        img: require('@/assets/curso/tema2-imagen5.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Localizarlos',
        content:
          'En caso de que los clientes sean otros negocios se puede buscar en registros públicos, directorios, entre otros.',
        img: require('@/assets/curso/tema2-imagen6.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Hacerse ver',
        content:
          'Cartel anunciador, escaparate bien organizado e iluminado, propaganda escrita, anuncios y notas de prensa en medios de comunicación.',
        img: require('@/assets/curso/tema2-imagen7.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Contactar con los clientes utilizando sitios web ',
        content:
          'Disponer de una web, un blog, una cuenta en Facebook o cualquier otra red social vertical u horizontal donde se encuentren los potenciales clientes.',
        img: require('@/assets/curso/tema2-imagen8.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Búsqueda de prescriptores',
        content:
          'Se trata de contactar con personas que puedan recomendar el establecimiento.',
        img: require('@/assets/curso/tema2-imagen9.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
      {
        title: 'Organizar algún evento ',
        content:
          'En el establecimiento que pueda atraer los clientes objetivo.',
        img: require('@/assets/curso/tema2-imagen10.svg'),
        reverseBackgroundColor: '#FFFFFF',
        reverseFontColor: '#12263F',
        showTitleFront: false,
      },
    ],
    flips2: [
      {
        title: 'Tarjetas de fidelización',
        content:
          'Se trata de premiar el consumo con obsequios. Este tipo de tarjetas ofrecen a los titulares una serie de ventajas adicionales como descuentos, puntos canjeables por regalos e incluso la devolución de un tanto por ciento de sus compras.',
        img: require('@/assets/curso/tema2-imagen12.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Cupones de descuento',
        content:
          'El usuario puede recortar un cupón y obtendrá una rebaja en el precio de algún producto o servicio del establecimiento.',
        img: require('@/assets/curso/tema2-imagen13.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Regalos',
        content:
          'El cliente recibe un regalo, vinculado o no a la actividad de la empresa, y es ofrecido en agradecimiento a la compra o uso de un producto o servicio del establecimiento. También se pueden dar por fechas especiales.',
        img: require('@/assets/curso/tema2-imagen14.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: ' Puntos de compra',
        content:
          'Permiten obtener una serie de beneficios en tiempo real.  Como la estrategia de los Almacenes Éxito “Puntos Colombia”.',
        img: require('@/assets/curso/tema2-imagen15.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Gestionar clientes a través de Apps',
        content:
          'Una aplicación en el móvil permite interactuar con los clientes. A este tipo de aplicaciones, se les puede añadir diferentes funcionalidades, como por ejemplo, una búsqueda  de clientes para así, tenerlo todo ordenado y clasificado, según categorías o intereses.',
        img: require('@/assets/curso/tema2-imagen16.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Comunicación personalizada',
        content:
          'Envío directo al cliente de ofertas con descuento exclusivo y personalizado.',
        img: require('@/assets/curso/tema2-imagen17.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'C.R.M',
        content:
          'Montado para tener comunicaciones más fluidas y directas con los clientes.',
        img: require('@/assets/curso/tema2-imagen18.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
      {
        title: 'Club de clientes',
        content:
          'Puede ser por gustos, hábitos o labores que se realicen en la casa.',
        img: require('@/assets/curso/tema2-imagen19.png'),
        reverseBackgroundColor: '#EE7969',
        reverseFontColor: '#FFFFFF',
        showTitleFront: true,
        frontTitleBackgroundColor: '#FFA397',
        frontTitleFontColor: '#12263F',
        indicadorTarjetaFlip: true,
      },
    ],
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
