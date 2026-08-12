import Image from "next/image";
import { ShoradoLogoComponent } from "./components/logos/shorado.logo.component";
import { ButtonLink } from "./components/buttons/button.link.component";
import { ChevronRight } from "lucide-react";
import { HERO_LINKS } from "./config";

export default function Home() {
  return (
    <div
      className=""
    >
      <div
        className="w-full min-h-screen grid md:grid-cols-[1fr_40%] gap-5 items-center" 
      >
        <div
          className="space-y-3 z-11 max-w-145"
        >
          <h1
            className="font-extrabold text-orange-400 font-heading tracking-tight text-5xl"
          >
            Yevhenii Shorobura
          </h1>

          <p
            className="text-3xl font-sans font-semibold"
          >
            19 Year Old based in Germany Full Stack Web Developer & founder of 
              <span
                className="text-orange-400 ml-3 font-heading"
              >
                Shorado
              </span>
          </p>

          <div
            className="flex item-center gap-5 mt-5 w-8"
          >
            <ButtonLink
              shape="pill"
              border=""
              style="dark"
              padding="lg"
              href="/projects"
              className="w-40 text-center"
            > 
              Projects
            </ButtonLink>

            <ButtonLink
              style="transparent"
              href="/contanct"
              shape="pill"
              padding="lg"
              border=""
              className="flex items-center gap-5"
            >
              Contact <ChevronRight />
            </ButtonLink>
          </div>
        </div>

        <Image 
          width={500}
          height={500}
          loading="eager"
          quality={100}
          className="h-full top-0 left-0 absolute w-full rounded-2xl object-cover z-5"
          alt="Yevhenii Shorobura Picture"
          src="/assets/me.webp"
        />

        <div 
          className="absolute inset-0 z-10 top-0 pointer-events-none bg-gradient-to-t from-background to-transparent"
        />
      </div>   


      <div
        className="z-100 absolute bottom-0 w-full py-1.5 px-3"
      >
        {HERO_LINKS.map((item ,ind) => {
          <ButtonLink
            border=""
            style="transparent"
            href={item.href}
            key={item.href + item.title}
          >
            {item.title}
          </ButtonLink>
        })}
      </div>
    </div>
  );
}
