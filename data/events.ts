export interface Event {
  id: string
  title: string
  description: string
  dayOfWeek: string
  time: string
  imageUrl: string
  imageAlt: string
}

export const events: Event[] = [
  {
    id: "open-mic",
    title: "Open Mic Night",
    description:
      "Toda sexta a partir das 19h — músicos locais, poetas e convidados surpresa. Traga seu talento ou venha só pelo clima.",
    dayOfWeek: "Sextas-feiras",
    time: "19h00",
    imageUrl:
      "/images/pexels-1763075.webp",
    imageAlt: "Músico se apresentando em uma cafeteria intimista",
  },
  {
    id: "coffee-tasting",
    title: "Degustação de Café com Elena",
    description:
      "Sábados às 10h — Elena guia você pela seleção de cafés de origem única, processo de torra e notas de sabor. Vagas limitadas a 12 pessoas.",
    dayOfWeek: "Sábados",
    time: "10h00",
    imageUrl:
      "/images/pexels-894695.webp",
    imageAlt: "Sessão de degustação e cupping de café",
  },
]
