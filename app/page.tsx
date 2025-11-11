import Image from "next/image";
import { CTA } from "./components/cta";
import { SocialMedias } from "./components/social-medias";
import { TalkToMe } from "./components/talk-to-me";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center space-y-4 p-4 text-neutral-50 xl:space-y-5">
        <div className="-z-10 fixed inset-0">
          <Image
            alt="Imagem de fundo do website de Laura Barreto"
            className="object-cover object-center"
            fetchPriority="high"
            fill
            priority
            quality={85}
            sizes="100vw"
            src="/background.png"
          />
        </div>
        <div className="relative size-44">
          <Image
            alt="Retrato profissional de Laura Barreto, especialista em marketing digital"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAA3UlEQVR4nGO4deX2/esPbt98ev3L/6f//z/6///+//8M967fv3/9wfVrj0+cP3Tl1vYrdzc/fHsDKrpz+5G8qMBNSyq2rp9wZO9Ehge3Ht6//qAot6gmwL26tmX9tn1//v2Hiqam5FqY2nh7hUzq6j+2axvD/esP7l2/n5yUoa2qpa2q5eMb0VzVABXNyiwS4xOQFxf3dXCJC4lluHvt7q0rt3Oyi0X4eLRkZXyM9WIjkkCi1y/cbquoF+fh0ZCSctdT9TIzZ7hx8fa1szcKCqu4GZjlBPgsVeTszCwBd1F4b9kFcnEAAAAASUVORK5CYII="
            className="rounded-full object-cover"
            fetchPriority="high"
            fill
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 128px, (max-width: 1200px) 192px, 256px"
            src="/laura-barreto.webp"
          />
        </div>
        <h1 className="font-bold text-4xl italic md:text-5xl">Laura Barreto</h1>
        <h2 className="max-w-80 text-center font-sans text-base md:max-w-full md:text-2xl">
          <strong>Estrategista digital</strong> especialista em reputação e
          posicionamento
        </h2>

        <section className="container mx-auto flex flex-col gap-4 xl:grid xl:grid-cols-2">
          <div className="flex h-40 flex-col justify-between rounded-2xl bg-white/10 px-4 py-2 shadow-md xl:h-56 xl:py-4">
            <h3 className="font-bold font-serif text-xl italic md:text-2xl xl:text-3xl">
              Consultoria estratégica
            </h3>
            <span className="w-full font-sans text-sm md:text-base xl:text-lg">
              Em 2 meses te ensino a se posicionar, construir sua reputação
              digital e<br /> <strong>vender mais com estratégia.</strong>
            </span>
            <CTA />
          </div>

          <div className="flex h-40 flex-col justify-between rounded-2xl bg-white/10 px-4 py-2 shadow-md xl:h-56 xl:py-4">
            <h3 className="font-bold font-serif text-xl italic md:text-2xl xl:text-3xl">
              Serviços de design & estratégia
            </h3>
            <span className="w-full font-sans text-sm md:text-base xl:text-lg">
              Construa a reputação digital do seu negócio com a estratégia e
              comunicação certa.
            </span>
            <CTA />
          </div>

          <div className="flex h-40 flex-col justify-between rounded-2xl bg-white/10 px-4 py-2 shadow-md xl:h-56 xl:py-4">
            <h3 className="font-bold font-serif text-xl italic md:text-2xl xl:text-3xl">
              Storymaker
            </h3>
            <span className="w-full font-sans text-sm md:text-base xl:text-lg">
              Produção de vídeos mobile para eventos como casamentos,
              aniversários, chás de bebê e eventos corporativos.
            </span>
            <CTA />
          </div>

          <TalkToMe />
        </section>

        <h4 className="font-medium font-sans text-lg md:text-2xl">
          Me acompanhe nas redes sociais
        </h4>

        <section className="container mx-auto grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
          <SocialMedias />
        </section>
      </main>

      <footer className="relative w-full bg-neutral-50 p-4 font-sans text-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-3 xl:text-base">
            <div className="flex flex-col space-y-2">
              <p className="font-bold font-serif text-2xl text-neutral-950 italic">
                Laura Barreto
              </p>
              <p className="text-neutral-950">
                Estrategista digital especialista em reputação e posicionamento
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-neutral-950">Canais de atendimento</p>
              <p className="text-neutral-950">
                (Informações, dúvidas e orçamentos)
              </p>
              <p className="text-neutral-950">+55 (48) 98859-3834</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-neutral-950">Serviços</p>
              <p className="text-neutral-950">
                Gerenciamento de mídias sociais
              </p>
              <p className="text-neutral-950">Desenvolvimento de website</p>
              <p className="text-neutral-950">Criação de identidade visual</p>
              <p className="text-neutral-950">Gestão de tráfego pago</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
