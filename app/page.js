import Image from "next/image";
import { ArrowUpRight, Mouse } from "lucide-react";
import { LANGUAGES, SECTIONS, SHORADO, SHORADO_BUILD_STEPS, SHORADO_STACK, STACK, WHAT_I_BUILD } from "./config";
import { Suspense } from "react";
import { DecorativeLineComponent } from "./components/decorative/decorative.line.component";
import { Container } from "./components/decorative/container.component";
import { LocationMouseCords } from "./components/suspense/location.mouse.cords";
import { CardComponent } from "./components/card.component";

export default function Home() {
  return (
    <div
      className="w-full space-y-5"
    >
      <Container
        styles="flex flex-col justify-around" 
      >
        <div
          className="w-full flex items-center z-100 justify-between"
        >    
          <span
            className="font-mono text-text font-semibold text-sm"
          >
            MUNICH, DE - 2026
          </span>

          <Suspense>
            <LocationMouseCords />
          </Suspense>
        </div>  

        <div
          className="space-y-3 z-11 max-w-145"
        >
          <h1
            className="font-extrabold text-text font-heading tracking-tight text-4xl sm:text-5xl md:text-7xl"
          >
            Yevhenii
            <br />
            Shorobura
          </h1>

          <figure>
            <blockquote
              cite="https://www.linkedin.com/in/yevhenii-shorobura/"
            >
              <p
                className="font-mono"
              >
                I dreaming about making products whats be used milions peoples every day
              </p>

              <figcaption className="font-mono mt-2.5">
                - Yevhenii Shorobura, <cite>About me</cite>
              </figcaption>
            </blockquote>
          </figure>

          <a
            href="#about"
            className="font-mono text-sm flex items-center gap-5 text-muted mt-10" 
          > 
            <Mouse size={20} /> Scroll to Explore 
          </a>
        </div>

        <Image 
          width={500}
          height={500}
          loading="eager"
          quality={100}
          className="h-full top-0 left-0 rounded-xl absolute w-full object-cover z-5 pointer-events-none object-right md:object-center"
          alt="Yevhenii Shorobura Picture"
          src={"/me/assets/me.webp"}
        />

        <div 
          className="absolute h-screen inset-0 z-10 top-0 pointer-events-none bg-gradient-to-t from-bg to-transparent"
        />
      </Container>   

      <Container
        id={SECTIONS[0].id}
        styles="flex flex-col justify-around"
      >
        <div
          className="flex  items-center w-full justify-between"
        >
          <h4
            className="font-semibold font-mono text-sm"
          >
            01 - {SECTIONS[0].label}
          </h4>
        </div>

        <p
          className="max-w-xl text-lg font-mono font-semibold"
        >
          My name is Yevhenii Shorobura i am a full-stack engineer and product builder originally from 
          Ukraine Kyiv, but now i am based in Munich. I am a self-taught - every part of my stack has been 
          learned by milions of mistakes and errors and by shipping a real product rather than following a curriculum.

        </p>

        <p className="max-w-xl text-lg font-mono font-semibold">
          Since 2024 i be a the solo engineer behind <a href="#shorado" className="text-accent underline">Shorado</a>, a Ukrainian platform running 
          in production - designing the interface, writing the backend, and operating the infrastructure
          the holds it together.
        </p>
        
        <p className="max-w-xl text-lg font-mono font-semibold">
          My interest sits at the seam between product and system: not just how a screen looks,
          but what has to be true underneath it for the screen to be honest.
        </p>

        <DecorativeLineComponent />
      </Container>

      <Container
        id={SECTIONS[1].id}
        styles="flex flex-col justify-around py-5"
      >
          <div
          className="space-y-3"
        >
          <h4
            className="font-mono text-sm font-semibold"
          >
            07 - {SECTIONS[1].label}
          </h4>

          <h3
            className="font-mono text-lg font-semibold max-w-xl"
          >
            Interfaces, applications, backends, and the systems that connect them.
          </h3>
        </div>

        {WHAT_I_BUILD.map((tech, ind) => (
          <CardComponent 
            key={`wtb-${ind}`}
            ind={ind}
            title={tech.t}
            description={tech.d}
            isLast={(WHAT_I_BUILD.length - 1) === ind}
          >
            <div
              className="flex items-center gap-3 pt-1.5"
            >
              {tech.tags.map((tag, ind) => (
                <div
                  key={`wtb-tag-${ind}`}
                  className="text-text border bg-surface font-mono text-sm font-semibold py-1.5 border-line rounded-full px-3"
                >
                  {tag}
                </div>
              ))}
            </div>
          </CardComponent>
        ))}

        <DecorativeLineComponent />
      </Container>

      <Container 
        id={SECTIONS[2].id}
        styles="flex flex-col justify-evenly"
      >
        <div
          className="space-y-3"
        >
          <h4
            className="font-semibold font-mono text-sm"
          >
            03 - {SECTIONS[2].label}
          </h4>

          <h3
            className="max-w-xl text-lg font-mono font-semibold"
          >
            The stack, grouped by what it's for.
          </h3>
        </div>

        <div
          className="grid grid-cols-4 gap-8"
        >
          {STACK.map((stack, ind) => (
            <div
              key={stack.title + ind}
              className="space-y-2"
            >
              <h5
                className="font-mono font-bold"
              >
                {stack.title}
              </h5>

              <ul
                className="space-y-1"
              >
                {stack.list.map((tech, ind) => (
                  <li
                    key={tech + ind}
                    className="font-mono text-sm text-muted font-semibold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <DecorativeLineComponent />
      </Container>

        <Container
          id={SECTIONS[3].id}
          styles="py-5 flex flex-col justify-evenly"
        >
          <h4
            className="font-semibold font-mono text-sm"
          >
            04 - {SECTIONS[3].label}
          </h4>
          
          <div
            className="space-y-3 py-5"
          >
            <h3
              className="font-heading text-xl"
            >
              Shorado
            </h3>

            <p
              className="font-mono font-semibold max-w-xl text-lg"
            >
              A Ukrainian marketplace built solo, exploring how listings should be discovered and ranked when visibility isn't for sale.
            </p>     

            {SHORADO.map((prob, ind) => (
              <CardComponent 
                ind={ind}
                key={`sh-${ind}`}
                title={prob.t}
                isLast={(SHORADO.length - 1) === ind}
                description={prob.d}
              />
            ))}       
          </div>

          <figcaption>
            <Image
              className="row-span-1 col-start-2 row-start-4 col-span-1 bg-white min-h-50 rounded-xl w-full"
              src={"/me/assets/shorado-screenshot.webp"}
              alt="Screenshot of Shorado interfaces"
              width={500}
              height={500}
            />

            <p className="pt-8 pb-3 font-mono text-sm text-muted text-center font-semibold">
              Shorado - product interface
            </p>
          </figcaption>

        <DecorativeLineComponent />
      </Container>

      <Container
        id={SECTIONS[4].id}
        styles="flex flex-col justify-evenly py-5"
      >
        <div
          className="space-y-3"
        >
          <h4
            className="font-mono font-semibold text-sm"
          >
            05 - {SECTIONS[4].label}
          </h4>

          <h3
            className="font-semibold font-mono text-lg"
          >
            Where the stack gets tested before it's trusted.
          </h3>
        </div>
          
        {SHORADO_STACK.map((prob, ind) => (
          <CardComponent 
            ind={ind}
            key={`sh-stack-${ind}`}
            title={prob.t}
            isLast={(SHORADO_STACK.length - 1) === ind}
            description={prob.d}
          />
        ))}       

        <DecorativeLineComponent />
      </Container>

      <Container
        id={SECTIONS[5].id}
        styles="flex flex-col justify-evenly"
      >
        <div
          className="space-y-3"
        >
          <h4
            className="font-mono text-sm font-semibold"
          >
            06 - {SECTIONS[5].label}
          </h4>

          <h3
            className="font-mono text-lg font-semibold"
          >
            Capability, not chronology.
          </h3>
        </div>

        <div
          className="grid grid-cols-2"
        >
          {SHORADO_BUILD_STEPS.map((step, ind) => (
            <div
              key={`sh-step-${ind}`}
              className="border-x border-line px-5"
            >
              <CardComponent 
                key={ind}
                title={step.s}
                description={step.d}
              />
            </div>
          ))}
        </div>

        <DecorativeLineComponent />
      </Container>

      <Container
        id={SECTIONS[6].id}
        styles="flex flex-col justify-evenly gap-5"
      >
        <div
          className="space-y-3"
        >
          <h4
            className="font-mono text-sm font-semibold"
          >
            07 - {SECTIONS[6].label}
          </h4>

          <h3
            className="font-mono text-lg font-semibold"
          >
            End
          </h3>
        </div>

        <figure>
          <blockquote>
            <p
              className="font-mono max-w-xl"
            >
              The measure of who we are is what we do with what we have.
            </p>

            <figcaption className="font-mono mt-2.5">
              - Vince Lombardi 
            </figcaption>
          </blockquote>
        </figure>

        <div
          className="space-y-3"
        >
          <h5
            className="font-heading"
          >
            Have a project?
            Let's build something.
          </h5>
        
          <p className="font-mono font-semibold text-text">
            i can speak in this languages: 
          </p>

          <ul
            className="space-y-1 pb-3"
          >
            {LANGUAGES.map((lng, ind) => (
              <li
                key={`lng-${ind}`}
                className="text-muted text-sm font-semibold font-mono"
              >
                {lng.title} {lng.lv}
              </li>
            ))}
          </ul>
        </div>
        
        <div
          className="space-y-3"
        >
          <a
            className="font-mono font-semibold text-lg flex text-accent items-center gap-3"
            href="https://www.linkedin.com/in/yevhenii-shorobura/"
          >
            linkedin <ArrowUpRight />
          </a>

          <a
            className="font-mono font-semibold text-lg flex text-accent items-center gap-3"
            href="https://github.com/mczheniok"
          >
            github <ArrowUpRight />
          </a>
          
          <a
            className="font-mono font-semibold text-lg flex text-accent items-center gap-3"
            href="mailto:hello@shorado.com.ua"
          >
            hello@shorado.com.ua <ArrowUpRight />
          </a>
        </div>
      </Container>
    </div>
  );
};