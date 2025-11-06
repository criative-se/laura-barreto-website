import Image from "next/image";
import { InstagramIcon } from "./components/instagram";
import { ThreadsIcon } from "./components/threads";
import { TiktokIcon } from "./components/tiktok";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[url(/background.png)] bg-no-repeat bg-cover bg-center bg-fixed flex flex-col items-center p-4 space-y-4 xl:space-y-5">
        <div className="size-44 relative">
          <Image
            src="/avatar.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold md:text-5xl italic">Laura Barreto</h1>
        <h2 className="font-sans text-base md:text-2xl text-center"><strong>Estrategista digital</strong> especialista em reputação e posicionamento</h2>

        <section className="container mx-auto flex flex-col gap-4 xl:grid xl:grid-cols-2">
          <div className="flex h-40 flex-col justify-between py-2 px-4 bg-white/10 rounded-2xl shadow-md xl:h-56 xl:py-4">
            <h3 className="font-serif text-xl md:text-2xl italic font-bold xl:text-3xl">Consultoria estratégica</h3>
            <span className="font-sans text-sm md:text-base w-full xl:text-lg">Em 2 meses te ensino a se posicionar, construir sua reputação digital e<br /> <strong>vender mais com estratégia.</strong></span>
            <button className="font-sans bg-pink-500 rounded-2xl text-sm md:text-base text-neutral-50 font-medium p-1 md:p-2 xl:text-lg"><strong>Quero acessar</strong> a consultoria</button>
          </div>

          <div className="flex h-40 flex-col justify-between py-2 px-4 bg-white/10 rounded-2xl shadow-md xl:h-56 xl:py-4">
            <h3 className="font-serif text-xl md:text-2xl italic font-bold xl:text-3xl">Serviços de design & estratégia</h3>
            <span className="font-sans text-sm md:text-base w-full xl:text-lg">Construa a reputação digital do seu negócio com a estratégia e comunicação certa.</span>
            <button className="font-sans bg-pink-500 rounded-2xl text-sm md:text-base text-neutral-50 font-medium p-1 md:p-2 xl:text-lg"><strong>Quero acessar</strong> a consultoria</button>
          </div>

          <div className="flex h-40 flex-col justify-between py-2 px-4 bg-white/10 rounded-2xl shadow-md xl:h-56 xl:py-4">
            <h3 className="font-serif text-xl md:text-2xl italic font-bold xl:text-3xl">Storymaker</h3>
            <span className="font-sans text-sm md:text-base w-full xl:text-lg">Produção de vídeos mobile para eventos como casamentos, aniversários, chás de bebê e eventos corporativos.</span>
            <button className="font-sans bg-pink-500 rounded-2xl text-sm md:text-base text-neutral-50 font-medium p-1 md:p-2 xl:text-lg"><strong>Quero acessar</strong> a consultoria</button>
          </div>

          <div className="flex h-40 flex-col justify-center py-2 px-4 bg-white/10 rounded-2xl shadow-md xl:h-56 xl:py-4">
            <h3 className="font-serif text-4xl text-center italic font-bold underline decoration-3 underline-offset-3 decoration-pink-500">Fale comigo!</h3>
          </div>
        </section>

        <h4 className="font-sans font-medium text-lg md:text-2xl">Me acompanhe nas redes sociais</h4>

        <section className="container mx-auto grid grid-cols-2 justify-center gap-4">
          <div className="flex col-span-2 items-center justify-center gap-2 bg-white/10 rounded-2xl shadow-md p-2">
            <InstagramIcon />
            <span className="text-lg md:text-2xl">laurabarretomkt</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white/10 rounded-2xl shadow-md p-2">
            <ThreadsIcon />
            <span className="text-lg md:text-2xl">laurabarretomkt</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white/10 rounded-2xl shadow-md p-2">
            <TiktokIcon />
            <span className="text-lg md:text-2xl">laurabarretomkt</span>
          </div>
        </section>
      </main>

      <footer className="relative w-full bg-neutral-50 text-sm font-sans p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 gap-4 xl:text-lg">
            <div className="flex flex-col space-y-2">
              <p className="text-neutral-950 font-serif italic font-bold text-2xl">
                Laura Barreto
              </p>
              <p className="text-neutral-950">
                Estrategista digital especialista em reputação e posicionamento
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-neutral-950">
                Canais de atendimento
              </p>
              <p className="text-neutral-950">
                (Informações, dúvidas e orçamentos)
              </p>
              <p className="text-neutral-950">
                lauramachado039@gmail.com
              </p>
              <p className="text-neutral-950">+55 (48) 99196-5786</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-neutral-950">
                Serviços
              </p>
              <p className="text-neutral-950">Gerenciamento de mídias sociais</p>
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
