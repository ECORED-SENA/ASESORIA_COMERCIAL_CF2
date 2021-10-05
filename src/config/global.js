export default {
  global: {
    componenteFormativo: 'Prospección de clientes',
    descripcionCurso:
      'En este componente se identifica el conjunto de actividades que realiza una empresa para seleccionar a sus clientes. Así mismo, se expondrá su tipología, los mercados en los cuales se desenvuelven y las estrategias que se utilizan con el fin de atraerlos, retenerlos y fidelizarlos. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mercado de consumo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mercados industriales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mercados de revendedores',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Mercados de gobierno',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Mercados internacionales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Relación del mercadeo y los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Atraer clientes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Retener clientes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Fidelizar clientes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Clasificación de clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Prospección de los clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agüero, C. (2014). Estrategia de fidelización de clientes. Universidad de Cantabria. ',
    },
    {
      referencia:
        'Escamilla, G. (2020). Fidelización del cliente: concepto, importancia, consejos y métricas. RD Station. ',
      link: 'https://www.rdstation.com/co/blog/fidelizacion-del-cliente/',
    },
    {
      referencia:
        'González, M. (2002). Concepto de mercado y sus tipos. Gestiópolis. ',
      link: 'https://www.gestiopolis.com/concepto-mercado-tipos/',
    },
    {
      referencia:
        'González Camacho, M. (2018). Segmentación, Definición de Público Objetivo y Posicionamiento. Universidad Interamericana para el desarrollo. ',
      link:
        'http://docplayer.es/53991436-Segmentacion-definicion-de-publico-objetivo-y-posicionamiento.html',
    },
    {
      referencia:
        'Gronroos, C. (1994). <i>Marketing</i> y Gestión de servicios. Diaz de Santos. 1a Edición. ',
    },
    {
      referencia:
        'Hatch, H. (2016). La fidelización de clientes no sólo tiene forma de tarjeta. ',
      link: 'https://soy.marketing/la-fidelizacion-de-clientes/',
    },
    {
      referencia:
        'INSTIPP. (2020). <i>Marketing</i>. Instituto Superior Tecnológico Ismael Pérez Pazmiño. ',
      link:
        'http://instipp.edu.ec/instipp/assets/pdf/guias/contabilidad/CO-S5-MK.pdf',
    },
    {
      referencia:
        'Promove Consultoría e Formación SLNE. (2012). Atraer y fidelizar clientes. CEEI Galicia. ',
      link: 'https://issuu.com/josevalencia/docs/atraer_y_fidelizar_clientes',
    },
    {
      referencia:
        'Pursell, S. (2021). Clientes potenciales: qué son, qué tipos existen y cómo identificarlos. HobSpot. ',
      link: 'https://blog.hubspot.es/marketing/tipos-de-clientes-potenciales',
    },
    {
      referencia: 'Quiroa, M. (2020). Cliente. Economipedia.',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      referencia:
        'Redacción emprendedores (2021). ¿Qué significa modelo de negocio? Emprendedores.es. ',
      link:
        'https://www.emprendedores.es/estrategia/que-significa-modelo-de-negocio/',
    },
    {
      referencia:
        'Schnarch, A. (2013). <i>Marketing</i> para pymes. Alfa Omega. ',
    },
    {
      referencia:
        'Torres Morales, V. (2014). Administración de ventas. Grupo Editorial Patria. ',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'es la persona o entidad que accede a un producto o servicio por medio de una transacción financiera (dinero) u otro medio de pago.',
    },
    {
      termino: 'Fidelizar',
      significado:
        'una acción dirigida a conseguir que los clientes mantengan relaciones estables y continuadas con la empresa a lo largo del tiempo (Hatch, 2016).',
    },
    {
      termino: 'Mercado de consumo',
      significado:
        'se compone por todas aquellas personas que adquieren o compran bienes y servicios y luego lo utilizan para satisfacer sus necesidades finales.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'es una herramienta previa al plan de negocio que te permitirá definir con claridad qué vas a ofrecer al mercado, cómo lo vas a hacer, a quién se lo vas a vender, cómo se lo vas a vender y de qué forma vas a generar ingresos. (Redacción emprendedores, 2021).',
    },
    {
      termino: 'Prospecto',
      significado:
        'es un cliente potencial que encaja con las características del cliente ideal, dispone de los medios para comprar (dinero) y está autorizado a tomar decisiones de compra.',
    },
    {
      termino: 'Retener',
      significado:
        'sucede cuando una empresa planifica un conjunto de estrategias de fidelización y acciones con la finalidad de mantener a los clientes actuales a largo plazo.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'es un grupo de consumidores, en su mayoría homogéneo, ya sea por determinadas características o por sus necesidades, los cuales son identificados como un mercado que presenta deseos o hábitos de compra parecidas y que potencialmente responderían similar a la estrategia desarrollada por el mix de <i>marketing</i>. (Quiroa, 2020)',
    },
  ],
  complementario: [
    {
      texto: 'Quiroa, M. (2021). Cliente. Economipedia.',
      tipo: 'Pagina web',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      texto:
        'Pursell, S. (2021). Clientes potenciales: qué son, qué tipos existen y cómo identificarlos. HobSpot. ',
      tipo: 'Pagina web',
      link: 'https://blog.hubspot.es/marketing/tipos-de-clientes-potenciales',
    },
    {
      texto:
        'Pacheco, J. (2020). <i>Web</i> y empresas. Mercado de Consumo (definición, características y clasificación). <i>Web</i> y empresa. ',
      tipo: 'Pagina web',
      link:
        'https://www.webyempresas.com/mercado-de-consumo-definicion-caracteristicas-y-clasificacion/',
    },
    {
      texto:
        'González, M. (2002). Concepto de mercado y sus tipos. Gestiopolis. ',
      tipo: 'Pagina web',
      link: 'https://www.gestiopolis.com/concepto-mercado-tipos/',
    },
    {
      texto: 'Quiroa, M. (2020). Captación de clientes. Economipedia. ',
      tipo: 'Pagina web',
      link: 'https://economipedia.com/definiciones/captacion-de-clientes.html',
    },
    {
      texto:
        'Escamilla, G. (2020). Fidelización del cliente: concepto, importancia, consejos y métricas. RD Station. ',
      tipo: 'Pagina web',
      link: 'https://www.rdstation.com/co/blog/fidelizacion-del-cliente/',
    },
    {
      texto:
        'Bee Digital. (2020). Tipos de clientes: características y cómo tratarlos. ',
      tipo: 'Pagina web',
      link:
        'https://www.beedigital.es/experiencia-de-cliente/tipos-de-clientes-caracteristicas/',
    },
    {
      texto:
        'Da Silva (2020). Zendesk. Qué es prospección de clientes y 5 claves para implementar su estrategia. Zendesk. ',
      tipo: 'Pagina web',
      link: 'https://www.zendesk.com.mx/blog/que-es-prospeccion-clientes/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Javier del Carmen Martínez Pérez',
        cargo: 'Instructor técnico',
        centro: 'Centro de Comercio y Servicios - Regional Bolívar',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
