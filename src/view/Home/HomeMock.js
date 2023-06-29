import Image1 from '../../assets/image/test1.png'
import Image2 from '../../assets/image/test2.png'
import Image3 from '../../assets/image/test3.png'
import Image4 from '../../assets/image/test4.png'
import Image5 from '../../assets/image/test5.svg'

import ImageCreatedEvent1 from '../../assets/image/Image1Strategies.svg'

import ImageCreatedEvent2 from '../../assets/image/testCreatedEvents.png'
import ImageCreatedEvent3 from '../../assets/image/createdEvents3.png'

import { subDays, subHours } from 'date-fns';

const now = new Date();
export const productsLoans=[
  {
    id: '5ece2c077e39da27658aa8a9',
    image: '/assets/products/product-1.png',
    name: 'Healthcare Erbology',
    updatedAt: subHours(now, 6).getTime()
  },
  {
    id: '5ece2c0d16f70bff2cf86cd8',
    image: '/assets/products/product-2.png',
    name: 'Makeup Lancome Rouge',
    updatedAt: subDays(subHours(now, 8), 2).getTime()
  },
  {
    id: 'b393ce1b09c1254c3a92c827',
    image: '/assets/products/product-5.png',
    name: 'Skincare Soja CO',
    updatedAt: subDays(subHours(now, 1), 1).getTime()
  },
  {
    id: 'a6ede15670da63f49f752c89',
    image: '/assets/products/product-6.png',
    name: 'Makeup Lipstick',
    updatedAt: subDays(subHours(now, 3), 3).getTime()
  },
  {
    id: 'bcad5524fe3a2f8f8620ceda',
    image: '/assets/products/product-7.png',
    name: 'Healthcare Ritual',
    updatedAt: subDays(subHours(now, 5), 6).getTime()
  }
]
export const SliderData = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  }
];

export const ListEvents = [
  {
    id: 1,
    iconName: "note_add",
    relationTo: 'CONFOTUR',
    title: 'SOLICITUD DE NO OBJECIÓN DE SUELO',
    subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
    onRequestPress: "",
    OnViewInformationPress: "",
    img: Image1
  },
  {
    id: 2,
    iconName: "receipt",
    relationTo: 'CONFOTUR',
    title: 'CLASIFICACIÓN PROVISIONAL',
    subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
    onRequestPress: "",
    OnViewInformationPress: "",
    img: Image2
  },
  {
    id: 3,
    iconName: "apartment",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'HOTELES, RESTAURANTES, BARES Y SPA',
    subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
    onRequestPress: "",
    OnViewInformationPress: '',
    img: Image3
  },
  {
    id: 4,
    iconName: "kayaking",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'TURISMO DE AVENTURA',
    subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
    onRequestPress: "",
    OnViewInformationPress: '',
    img: Image4
  },
  {
    id: 5,
    iconName: "storefront",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'GIFT SHOPS',
    subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
    onRequestPress: "",
    OnViewInformationPress: '',
    img: Image5
  },
  {
    id: 6,
    iconName: "person_pin_circle",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'GUÍAS TURISTICOS',
    subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
    onRequestPress: "",
    OnViewInformationPress: "",
    img: Image4
  },

  {
    id: 7,
    iconName: "person_pin_circle",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    subTitle: 'We’ll get you directly seated and inside for you to enjoy the show.',
    onRequestPress: "",
    OnViewInformationPress: "",
    img: Image1
  },
  {
    id: 8,
    iconName: "person_pin_circle",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    subTitle: 'We’ll get you directly seated and inside for you to enjoy the show.',
    onRequestPress: "",
    OnViewInformationPress: "",
    img: Image3
  },

  {
    id: 9,
    iconName: "person_pin_circle",
    relationTo: 'EMPRESAS Y SERVICIOS',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    subTitle: 'We’ll get you directly seated and inside for you to enjoy the show.',
    onRequestPress: "",
    OnViewInformationPress: "",
    img: Image1
  },
]


export const MockEventsCreated = [
  {
    id: 1,
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    subTitle: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    img: ImageCreatedEvent3
  },
  {
    id: 2,
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    subTitle: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    img: ImageCreatedEvent2
  },
  {
    id: 3,
    title: 'Introducing Workspaces: Work smarter, not harder with new navigations',
    subTitle: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    img: ImageCreatedEvent3
  },
  {
    id: 4,
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    subTitle: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    img: ImageCreatedEvent3
  },
  {
    id: 5,
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    subTitle: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    img: ImageCreatedEvent2
  },
  {
    id: 6,
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    subTitle: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    img: ImageCreatedEvent3
  },


]
export const SearchEvents = [
  {
    value: 1,
    label: 'Konser Jazz',
  },
  {
    value: 2,
    label: 'Rock Summer',
  },
  {
    value: 3,
    label: 'Baseball Invernal',
  },

]

export const placeEvent = [
  {
    value: 1,
    label: 'Santo Domingo',
  },
  {
    value: 2,
    label: 'Santiago',
  },
  {
    value: 3,
    label: 'Puerto Plata',
  },

]

export const hourEvent = [
  {
    value: 1,
    label: 'Noche',
  },
  {
    value: 2,
    label: 'Tarde',
  },
  {
    value: 3,
    label: 'Dia',
  },

]
