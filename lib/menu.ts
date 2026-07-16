export type MenuLabel = "popular" | "favorito da casa" | "novo" | ""
export type MenuCategory =
  | "Bebidas com Espresso"
  | "Bebidas Geladas"
  | "Doces"
  | "Salgados"
  | "Sanduíches"

export interface MenuItem {
  categoria: MenuCategory
  nome: string
  descricao: string
  preco: number
  etiqueta: MenuLabel
  imageUrl: string
  imageAlt: string
}

const px = (id: number) => `/images/pexels-${id}.webp`

export const menuItems: MenuItem[] = [
  // ── Bebidas com Espresso ──────────────────────────────────────────────────
  {
    categoria: "Bebidas com Espresso",
    nome: "Espresso",
    descricao:
      "Dose de espresso extraída lentamente com crema dourada e aroma intenso de caramelo tostado",
    preco: 7.0,
    etiqueta: "",
    imageUrl: px(312418),
    imageAlt: "Xícara de espresso com crema dourada",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Espresso Duplo",
    descricao:
      "Dose dupla para quem não abre mão de mais intensidade e corpo no café",
    preco: 10.0,
    etiqueta: "",
    imageUrl: px(374885),
    imageAlt: "Dose dupla de espresso em xícara pequena",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Americano",
    descricao:
      "Espresso diluído em água quente na proporção certa — suave sem perder o sabor",
    preco: 9.0,
    etiqueta: "",
    imageUrl: px(302899),
    imageAlt: "Café americano em copo transparente",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Cappuccino",
    descricao:
      "Espresso equilibrado com leite vaporizado e microespuma sedosa polvilhado com cacau em pó",
    preco: 13.0,
    etiqueta: "popular",
    imageUrl: px(312418),
    imageAlt: "Cappuccino com espuma polvilhada de cacau",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Flat White",
    descricao:
      "Ristretto com leite microespumado em proporção concentrada — mais café menos espuma",
    preco: 14.0,
    etiqueta: "",
    imageUrl: px(302899),
    imageAlt: "Flat white com arte latte em copo pequeno",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Latte",
    descricao:
      "Espresso suave com muito leite vaporizado cremoso e arte latte feita na hora",
    preco: 14.5,
    etiqueta: "favorito da casa",
    imageUrl: px(374885),
    imageAlt: "Latte com arte em folha desenhada no leite",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Latte de Caramelo",
    descricao:
      "Latte clássico enriquecido com calda de caramelo artesanal e finalizado com espuma de leite",
    preco: 16.5,
    etiqueta: "popular",
    imageUrl: px(312418),
    imageAlt: "Latte de caramelo com fio dourado de calda",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Mocha",
    descricao:
      "Espresso com chocolate belga derretido e leite vaporizado finalizado com chantilly e raspas de chocolate",
    preco: 17.0,
    etiqueta: "popular",
    imageUrl: px(302899),
    imageAlt: "Mocha com chantilly e raspas de chocolate",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Macchiato",
    descricao:
      "Espresso marcado com uma colherada generosa de espuma de leite fresco",
    preco: 10.0,
    etiqueta: "",
    imageUrl: px(374885),
    imageAlt: "Macchiato em xícara pequena com espuma",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Cortado",
    descricao:
      "Espresso cortado na mesma proporção de leite vaporizado quente — redondo e sem amargor",
    preco: 11.0,
    etiqueta: "",
    imageUrl: px(312418),
    imageAlt: "Cortado em copo de vidro duplo",
  },
  {
    categoria: "Bebidas com Espresso",
    nome: "Affogato",
    descricao:
      "Bola de sorvete de creme artesanal afogada em espresso recém-extraído",
    preco: 19.0,
    etiqueta: "favorito da casa",
    imageUrl: px(302899),
    imageAlt: "Affogato: sorvete afogado em espresso",
  },

  // ── Bebidas Geladas ───────────────────────────────────────────────────────
  {
    categoria: "Bebidas Geladas",
    nome: "Cold Brew",
    descricao:
      "Café extraído a frio por 16 horas — sabor suave naturalmente adocicado e sem acidez",
    preco: 18.0,
    etiqueta: "favorito da casa",
    imageUrl: px(1395964),
    imageAlt: "Cold brew em copo alto com gelo",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Iced Latte",
    descricao:
      "Espresso extraído sobre gelo fino com leite gelado cremoso servido em copo alto",
    preco: 16.0,
    etiqueta: "popular",
    imageUrl: px(1395964),
    imageAlt: "Iced latte em copo transparente com gelo",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Caramel Frappuccino",
    descricao:
      "Blend gelado de espresso café caramelo artesanal e gelo coberto com chantilly e fio de caramelo",
    preco: 22.0,
    etiqueta: "popular",
    imageUrl: px(1395964),
    imageAlt: "Frappuccino de caramelo com chantilly",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Chocolate Frappuccino",
    descricao:
      "Blend cremoso de chocolate belga leite integral e gelo coberto com chantilly e cacau",
    preco: 21.0,
    etiqueta: "",
    imageUrl: px(312418),
    imageAlt: "Frappuccino de chocolate com cacau polvilhado",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Milkshake de Café",
    descricao:
      "Sorvete de creme artesanal batido com espresso duplo e leite integral na hora",
    preco: 25.0,
    etiqueta: "",
    imageUrl: px(1395964),
    imageAlt: "Milkshake de café em copo americano",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Matcha Latte Gelado",
    descricao:
      "Matcha japonês de primeira colheita batido com leite de aveia sobre gelo — suave e terroso",
    preco: 19.0,
    etiqueta: "novo",
    imageUrl: px(1395964),
    imageAlt: "Matcha latte gelado em copo alto verde",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Limonada com Espresso",
    descricao:
      "Limonada artesanal de limão siciliano com espresso gelado e xarope de açúcar de cana",
    preco: 17.0,
    etiqueta: "novo",
    imageUrl: px(1395964),
    imageAlt: "Limonada com espresso gelado e fatia de limão",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Chá Gelado de Pêssego",
    descricao:
      "Blend de chá preto e chá branco com polpa de pêssego fresco e gelo em pedra",
    preco: 14.0,
    etiqueta: "",
    imageUrl: px(1395964),
    imageAlt: "Chá gelado de pêssego com gelo em pedra",
  },
  {
    categoria: "Bebidas Geladas",
    nome: "Chocolate Gelado Belga",
    descricao:
      "Chocolate belga derretido com leite gelado e gelo servido em jarra com chantilly",
    preco: 20.0,
    etiqueta: "",
    imageUrl: px(312418),
    imageAlt: "Chocolate gelado belga em jarra com chantilly",
  },

  // ── Doces ─────────────────────────────────────────────────────────────────
  {
    categoria: "Doces",
    nome: "Croissant de Amêndoas",
    descricao:
      "Croissant de manteiga francesa recheado com creme de amêndoas e coberto com lâminas douradas tostadas",
    preco: 12.0,
    etiqueta: "favorito da casa",
    imageUrl: px(291528),
    imageAlt: "Croissant de amêndoas com lâminas tostadas",
  },
  {
    categoria: "Doces",
    nome: "Muffin de Blueberry",
    descricao:
      "Muffin artesanal com mirtilos frescos embutidos na massa e açúcar demerara crocante por cima",
    preco: 9.0,
    etiqueta: "popular",
    imageUrl: px(1580466),
    imageAlt: "Muffin de blueberry com açúcar demerara",
  },
  {
    categoria: "Doces",
    nome: "Brownie de Chocolate Belga",
    descricao:
      "Brownie denso e úmido feito com chocolate 70% borda crocante e miolo cremoso quase cru",
    preco: 11.0,
    etiqueta: "popular",
    imageUrl: px(291528),
    imageAlt: "Brownie de chocolate belga com borda crocante",
  },
  {
    categoria: "Doces",
    nome: "Cookie de Baunilha e Chocolate",
    descricao:
      "Cookie grande assado na hora com chunks de chocolate amargo crocante por fora e mole por dentro",
    preco: 8.0,
    etiqueta: "",
    imageUrl: px(1580466),
    imageAlt: "Cookie com chunks de chocolate amargo",
  },
  {
    categoria: "Doces",
    nome: "Cheesecake New-Yorkino",
    descricao:
      "Fatia generosa de cheesecake cremoso com base de biscoito e coulis de frutas vermelhas frescas",
    preco: 16.0,
    etiqueta: "favorito da casa",
    imageUrl: px(291528),
    imageAlt: "Fatia de cheesecake new-yorkino com coulis",
  },
  {
    categoria: "Doces",
    nome: "Bolo de Cenoura com Ganache",
    descricao:
      "Bolo de cenoura artesanal fofo e úmido com cobertura generosa de ganache de chocolate amargo",
    preco: 12.0,
    etiqueta: "",
    imageUrl: px(1580466),
    imageAlt: "Fatia de bolo de cenoura com ganache",
  },
  {
    categoria: "Doces",
    nome: "Cinnamon Roll",
    descricao:
      "Rolo de canela artesanal assado na hora com recheio de canela e açúcar mascavo e glacê de cream cheese",
    preco: 14.0,
    etiqueta: "novo",
    imageUrl: px(291528),
    imageAlt: "Cinnamon roll recém-assado com glacê de cream cheese",
  },
  {
    categoria: "Doces",
    nome: "Macaron de Lavanda e Mel",
    descricao:
      "Macaron parisiense com ganache de lavanda e mel silvestre — leve crocante e floral",
    preco: 9.0,
    etiqueta: "",
    imageUrl: px(1580466),
    imageAlt: "Macaron parisiense de lavanda lilás",
  },
  {
    categoria: "Doces",
    nome: "Fatia de Torta de Limão",
    descricao:
      "Torta com massa sablée de manteiga creme de limão siciliano e merengue italiano dourado",
    preco: 14.0,
    etiqueta: "",
    imageUrl: px(291528),
    imageAlt: "Fatia de torta de limão com merengue dourado",
  },
  {
    categoria: "Doces",
    nome: "Financier de Pistache",
    descricao:
      "Bolinho francês de manteiga noisette com farinha de pistache e amêndoas laminadas",
    preco: 8.0,
    etiqueta: "novo",
    imageUrl: px(1580466),
    imageAlt: "Financier de pistache com amêndoas laminadas",
  },

  // ── Salgados ──────────────────────────────────────────────────────────────
  {
    categoria: "Salgados",
    nome: "Pão de Queijo Artesanal",
    descricao:
      "Pão de queijo mineiro feito com queijo canastra maturado servido quentinho — 3 unidades",
    preco: 9.0,
    etiqueta: "favorito da casa",
    imageUrl: px(1640777),
    imageAlt: "Pão de queijo artesanal quentinho em cestinha",
  },
  {
    categoria: "Salgados",
    nome: "Quiche Lorraine",
    descricao:
      "Torta salgada com bacon defumado queijo gruyère e creme de ovos em massa folhada crocante",
    preco: 14.0,
    etiqueta: "",
    imageUrl: px(1640777),
    imageAlt: "Quiche lorraine com bacon e gruyère",
  },
  {
    categoria: "Salgados",
    nome: "Mini Croissant de Presunto e Brie",
    descricao:
      "Croissant de manteiga recheado com presunto de parma e queijo brie cremoso levemente aquecido",
    preco: 13.0,
    etiqueta: "popular",
    imageUrl: px(1640777),
    imageAlt: "Mini croissant com presunto de parma e brie",
  },
  {
    categoria: "Salgados",
    nome: "Tortinha de Espinafre e Ricota",
    descricao:
      "Torta individual com recheio cremoso de espinafre fresco ricota e noz-moscada em massa quebrada",
    preco: 12.0,
    etiqueta: "",
    imageUrl: px(1640777),
    imageAlt: "Tortinha individual de espinafre e ricota",
  },
  {
    categoria: "Salgados",
    nome: "Wrap de Frango Defumado",
    descricao:
      "Tortilla de espinafre com frango defumado cream cheese temperado rúcula e tomate cereja",
    preco: 19.0,
    etiqueta: "",
    imageUrl: px(1640777),
    imageAlt: "Wrap de frango defumado com rúcula e tomate",
  },
  {
    categoria: "Salgados",
    nome: "Focaccia de Alecrim e Azeite",
    descricao:
      "Focaccia assada na hora com azeite extravirgem alecrim fresco e flor de sal siciliano",
    preco: 11.0,
    etiqueta: "popular",
    imageUrl: px(1640777),
    imageAlt: "Focaccia artesanal com alecrim e azeite",
  },
  {
    categoria: "Salgados",
    nome: "Bolinho de Carne Seca com Coalho",
    descricao:
      "Bolinho assado recheado com carne seca desfiada e queijo coalho em massa de mandioca",
    preco: 10.0,
    etiqueta: "favorito da casa",
    imageUrl: px(1640777),
    imageAlt: "Bolinho de carne seca com queijo coalho",
  },

  // ── Sanduíches ────────────────────────────────────────────────────────────
  {
    categoria: "Sanduíches",
    nome: "Caprese Artesanal",
    descricao:
      "Focaccia artesanal com mozzarella de búfala fresca tomate heirloom manjericão e azeite trufado",
    preco: 28.0,
    etiqueta: "favorito da casa",
    imageUrl: px(1633578),
    imageAlt: "Sanduíche caprese com mozzarella de búfala e tomate heirloom",
  },
  {
    categoria: "Sanduíches",
    nome: "Club Sandwich Brew & Co",
    descricao:
      "Pão de forma tostado com frango grelhado bacon alface americana tomate e maionese de ervas finas",
    preco: 26.0,
    etiqueta: "popular",
    imageUrl: px(1633578),
    imageAlt: "Club sandwich clássico em três camadas",
  },
  {
    categoria: "Sanduíches",
    nome: "Panini de Pesto e Tomate Seco",
    descricao:
      "Ciabatta grelhada com pesto de manjericão fresco tomate seco rúcula e grana padano ralado",
    preco: 24.0,
    etiqueta: "",
    imageUrl: px(1633578),
    imageAlt: "Panini grelhado com pesto e tomate seco",
  },
  {
    categoria: "Sanduíches",
    nome: "Smash Burger Artesanal",
    descricao:
      "Pão brioche com hambúrguer smash de 150g queijo cheddar curado picles crocante e molho especial",
    preco: 32.0,
    etiqueta: "novo",
    imageUrl: px(1633578),
    imageAlt: "Smash burger artesanal em pão brioche",
  },
  {
    categoria: "Sanduíches",
    nome: "Bagel de Salmão Defumado",
    descricao:
      "Bagel artesanal com salmão defumado fatiado cream cheese com ervas alcaparras e pepino",
    preco: 30.0,
    etiqueta: "",
    imageUrl: px(1633578),
    imageAlt: "Bagel com salmão defumado e cream cheese",
  },
  {
    categoria: "Sanduíches",
    nome: "Sanduíche de Brie e Geleia de Figo",
    descricao:
      "Pão rústico com queijo brie derretido geleia de figo artesanal rúcula e nozes tostadas",
    preco: 27.0,
    etiqueta: "favorito da casa",
    imageUrl: px(1633578),
    imageAlt: "Sanduíche de brie com geleia de figo em pão rústico",
  },
  {
    categoria: "Sanduíches",
    nome: "Wrap Vegetariano de Grão-de-Bico",
    descricao:
      "Tortilla integral com grão-de-bico temperado abacate cream cheese e salada de folhas mistas",
    preco: 22.0,
    etiqueta: "novo",
    imageUrl: px(1633578),
    imageAlt: "Wrap vegetariano de grão-de-bico e abacate",
  },
]

export const categories: MenuCategory[] = [
  "Bebidas com Espresso",
  "Bebidas Geladas",
  "Doces",
  "Salgados",
  "Sanduíches",
]

export const categoryColorClass: Record<MenuCategory, string> = {
  "Bebidas com Espresso": "bg-cat-coffee",
  "Bebidas Geladas": "bg-cat-drinks",
  "Doces": "bg-cat-bakery",
  "Salgados": "bg-cat-tea",
  "Sanduíches": "bg-cat-coffee",
}

export const popularItems = menuItems.filter(
  (item) => item.etiqueta === "popular" || item.etiqueta === "favorito da casa"
)

export const itemsByCategory = categories.reduce<Record<MenuCategory, MenuItem[]>>(
  (acc, cat) => {
    acc[cat] = menuItems.filter((item) => item.categoria === cat)
    return acc
  },
  {} as Record<MenuCategory, MenuItem[]>
)
