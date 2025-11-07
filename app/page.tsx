import Image from "next/image";
import { CTA } from "./components/cta";
import { InstagramIcon } from "./components/instagram";
import { TalkToMe } from "./components/talk-to-me";
import { ThreadsIcon } from "./components/threads";
import { TiktokIcon } from "./components/tiktok";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center space-y-4 bg-[url(/background.png)] bg-center bg-cover bg-fixed bg-no-repeat p-4 text-neutral-50 xl:space-y-5">
        <div className="relative size-44">
          <Image
            alt="Foto de perfil"
            className="rounded-full object-cover"
            fill
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
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 p-2 shadow-md md:col-span-2">
            <a
              className="flex h-full w-full items-center justify-center gap-2 text-lg md:text-2xl"
              href="https://www.instagram.com/laurabarretomkt?igsh=dDZjdTQ0azh1dnh3"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
              laurabarretomkt
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 p-2 shadow-md">
            <a
              className="flex h-full w-full items-center justify-center gap-2 text-lg md:text-2xl"
              href="https://www.threads.com/@laurabarretomkt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ThreadsIcon />
              laurabarretomkt
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 p-2 shadow-md">
            <a
              className="flex h-full w-full items-center justify-center gap-2 text-lg md:text-2xl"
              href="https://www.tiktok.com/@alaurabarreto?_r=1&_t=ZM-91ChHv4rGa8"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TiktokIcon />
              laurabarretomkt
            </a>
          </div>
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
