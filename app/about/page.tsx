import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nós — Brew & Co.",
  description:
    "A história de Elena Marchetti e James Okafor, e como nasceu o Brew & Co. em Dalston, Londres.",
}

const VALUES = [
  {
    emoji: "🌱",
    title: "Matéria-prima honesta",
    description:
      "Trabalhamos diretamente com produtores de Etiópia, Guatemala e Colômbia. Cada grão tem nome, origem e história — e assim você também sabe o que está bebendo.",
  },
  {
    emoji: "🤝",
    title: "Técnica com calor humano",
    description:
      "Craft não é rigidez. É consistência com cuidado. Cada preparo é feito à mão por alguém que se importa com o resultado tanto quanto com você.",
  },
  {
    emoji: "🪑",
    title: "Um lugar para ficar",
    description:
      "Nada aqui foi projetado para ser consumido rápido. As cadeiras são confortáveis de propósito. Fique quanto quiser — outro café sai quando você precisar.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/pexels-683039.webp"
          alt="Barista preparando espresso no Brew & Co."
          fill
          className="object-cover object-center"
          preload={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
              Desde 2019 · Dalston, London
            </p>
            <h1 className="font-display font-black text-[clamp(2.25rem,5vw,3.5rem)] text-foam leading-tight tracking-tight text-balance">
              Uma xícara.
              <br />
              Uma história.
            </h1>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
                A história
              </p>
              <h2 className="font-display font-black text-[clamp(1.75rem,3.5vw,2.5rem)] text-espresso leading-tight tracking-tight mb-8 text-balance">
                Começou em Trieste, numa sala de aromas de torra.
              </h2>

              <div className="space-y-5 text-espresso-muted leading-relaxed">
                <p>
                  Elena Marchetti cresceu em Bolonha numa família que comandava
                  uma pequena cafeteria perto da universidade. Ela sabia desde
                  cedo que café nunca é só café — é o centro da vida social de
                  um bairro. Depois de estudar ciência dos alimentos em Parma,
                  foi fazer um curso de torrefação em Trieste, em 2014.
                </p>
                <p>
                  James Okafor cresceu em Bristol, filho de um arquiteto
                  nigeriano e uma professora inglesa. Estudou design industrial
                  na Universidade de Bristol, mas foram três anos na cena do
                  café em Melbourne — primeiro como barista, depois ajudando a
                  projetar interiores de cafeterias em Fitzroy — que mostraram a
                  ele o que um espaço bem desenhado pode fazer por um bairro.
                </p>
                <p>
                  Eles se conheceram naquela sala em Trieste. Elena ensinava
                  James a avaliar perfis de torra; ele ensinava ela que o copo
                  importa tanto quanto o que está dentro. Ficaram em contato por
                  continentes — ligações, links compartilhados, pacotes ocasionais
                  de grãos de origem única.
                </p>
                <p>
                  Em 2018, os dois estavam na White Label Coffee Fair em
                  Shoreditch. Em pé numa fila para um pour-over, Elena disse:
                  &ldquo;Estou pensando em Londres.&rdquo; James respondeu:
                  &ldquo;Eu também.&rdquo;
                </p>
                <p>
                  Seis meses depois, encontraram uma antiga gráfica numa rua
                  lateral em Dalston — tijolos aparentes, pé-direito alto, uma
                  janela voltada para o sul que jogava luz pelo piso todas as
                  tardes. Assinaram o contrato em setembro de 2018 e abriram as
                  portas em março de 2019.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-3184418.webp"
                alt="Elena e James, fundadores do Brew & Co."
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 px-6 md:px-12 bg-parchment">
        <div className="max-w-[80rem] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4 text-center">
            Os fundadores
          </p>
          <h2 className="font-display font-black text-[clamp(1.75rem,3.5vw,2.5rem)] text-espresso leading-tight tracking-tight mb-12 text-center text-balance">
            As pessoas por trás do café
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Elena */}
            <div className="bg-foam rounded-2xl p-8 shadow-[0_4px_24px_rgba(35,26,16,0.09)]">
              <div className="w-16 h-16 rounded-full bg-cat-bakery flex items-center justify-center text-2xl mb-6">
                🫘
              </div>
              <h3 className="font-display font-bold text-xl text-espresso mb-1">
                Elena Marchetti
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
                Co-fundadora · Torra e Origem
              </p>
              <p className="text-espresso-muted text-sm leading-relaxed">
                Elena cuida dos relacionamentos com os produtores e de todo o
                processo de torra. Ela viaja até as fazendas pelo menos duas
                vezes por ano — e quando encontra algo extraordinário, traz de
                volta pra Dalston. É ela quem guia as sessões de degustação aos
                sábados, com paciência infinita para quem está descobrindo
                specialty coffee pela primeira vez.
              </p>
            </div>

            {/* James */}
            <div className="bg-foam rounded-2xl p-8 shadow-[0_4px_24px_rgba(35,26,16,0.09)]">
              <div className="w-16 h-16 rounded-full bg-cat-drinks flex items-center justify-center text-2xl mb-6">
                🏠
              </div>
              <h3 className="font-display font-bold text-xl text-espresso mb-1">
                James Okafor
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
                Co-fundador · Espaço e Experiência
              </p>
              <p className="text-espresso-muted text-sm leading-relaxed">
                James projetou cada detalhe do espaço — os balcões de carvalho
                reaproveitado, os assentos de couro no tom terracota, as
                cadeiras improvavelmente confortáveis. Ele cuida da operação
                cotidiana e de garantir que a experiência de entrar no Brew &
                Co. seja sempre a mesma: um alívio silencioso no meio da cidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[80rem] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4 text-center">
            O que nos guia
          </p>
          <h2 className="font-display font-black text-[clamp(1.75rem,3.5vw,2.5rem)] text-espresso leading-tight tracking-tight mb-12 text-center text-balance">
            Três coisas que nunca abrimos mão
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ emoji, title, description }) => (
              <div
                key={title}
                className="bg-foam rounded-2xl p-8 shadow-[0_4px_24px_rgba(35,26,16,0.09)]"
              >
                <span className="text-4xl block mb-5">{emoji}</span>
                <h3 className="font-display font-bold text-lg text-espresso mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-espresso-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-4 px-6 md:px-12 pb-20">
        <div className="max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-1581554.webp"
                alt="Interior do Brew & Co."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-3879493.webp"
                alt="Barista preparando espresso"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-894695.webp"
                alt="Grãos de café de origem única"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
