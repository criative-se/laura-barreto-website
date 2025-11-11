import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

async function generateBlur() {
  const buffer = await fs.readFile("public/laura-barreto.webp");
  const { base64 } = await getPlaiceholder(buffer, { size: 10 });
  console.log("Novo blurDataURL:", base64);
}

generateBlur();
