import { InstagramIcon } from "./instagram";
import { ThreadsIcon } from "./threads";
import { TiktokIcon } from "./tiktok";

export function SocialMedias() {
  return (
    <>
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
    </>
  );
}
