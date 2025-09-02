import type { Product } from "@/types/product"

//TODO: extract data from some blockchain that exposes a listing feature (Kreivo?)

export const products: Product[] = [
  {
    id: "1",
    name: "Plato Irregular Santorini",
    description: "Plato con forma y pinturas únicas. Disponible para solicitar con resultado nuevamente único, siguiendo el claro estilo de la fotografía.",
    price: 45,
    image: "/cer1.jpeg",
    category: "Plato",
    available: true,
  },
  {
    id: "2",
    name: "Porta Sahumerios Kitty",
    description: "Divertido portasahumerios, personalizable con el pelaje de tu felino.",
    price: 65,
    image: "/cer2.jpeg",
    category: "Decoración",
    available: true,
  },
  {
    id: "3",
    name: "Plato Pequeño Flor",
    description: "Plato pequeño con variadas pinturas irregulares, colores y formas a elección, manteniendo el estilo de la fotografía.",
    price: 35,
    image: "/cer3.png",
    category: "Vajilla",
    available: true,
  },
  {
    id: "4",
    name: "Taza Café Roja",
    description: "Taza de café con esmalte rojo brillante. Diseño ergonómico y cómodo.",
    price: 28,
    image: "/cer1.jpeg",
    category: "Vajilla",
    available: false,
  },
  {
    id: "5",
    name: "Maceta Pequeña",
    description: "Maceta artesanal perfecta para plantas suculentas. Con plato incluido.",
    price: 22,
    image: "/cer4.png",
    category: "Jardín",
    available: true,
  },
  {
    id: "6",
    name: "Fuente Ovalada",
    description: "Fuente ovalada grande para servir. Esmalte crema con detalles en azul.",
    price: 85,
    image: "/cer5.png",
    category: "Vajilla",
    available: true,
  },
]
