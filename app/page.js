import Image from "next/image";
import { ShoradoLogoComponent } from "./components/logos/shorado.logo.component";
import { ButtonLink } from "./components/buttons/button.link.component";
import { ChevronRight, MapPin, MapPinHouse } from "lucide-react";
import { STACK } from "./config";
import { ShoradoLogoAnimatedComponent } from "./components/logos/shorado.logo.animated.component";
import { Suspense } from "react";
import { CategorySkillCardComponent } from "./components/skills.view.component";



export default function Home() {
  return (
    <div
      className="p-5"
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
            Full-stack developer building 
              <span
                className="text-orange-400 mx-3 font-heading"
              >
                Shorado
              </span>
            from Munich
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
          className="h-full top-0 left-0 absolute w-full rounded-2xl object-cover z-5 pointer-events-none"
          alt="Yevhenii Shorobura Picture"
          src="/assets/me.webp"
        />

        <div 
          className="absolute h-screen inset-0 z-10 top-0 pointer-events-none bg-gradient-to-t from-background to-transparent"
        />
      </div>   

      <section
        className="grid grid-cols-6 min-h-[600px] h-auto w-full grid-rows-6 text-black gap-4"
      >
        <div
          className="flex items-center justify-between col-start-1 col-end-5 row-start-1 row-end-3 bg-white rounded-3xl"
        >
          <div
            className="p-5 w-full flex flex-col items-start h-full justify-between"
          >
            <ShoradoLogoComponent 
              height="60"
              width="60"
            />

            <div
              className="flex flex-col gap-1 items-start px-3"
            >
              <div
                className="flex items-center gap-2.5 text-gray-600/30"
              >
                <MapPinHouse
                  size={20}
                />

                <h5 className="font-bold tracking-tight">
                  Ukraine
                </h5>
              </div>

              <span 
                className="ml-2 inline-block border-r-[3px] rounded-full border-dotted text-gray-600/30 h-10"
              />

              <div
                className="flex items-center justify-start gap-2.5"
              >
                <MapPin 
                  className="text-orange-400"
                  size={20}
                />

                <h5 className="font-bold tracking-tight text-black">
                  Germany
                </h5>
              </div>
            </div>
          </div>
          
          <div
            className="relative w-70 h-full p-5"
          >
            <div
              className="bg-gray-300 ml-1.5 rounded-3xl w-full h-full"
            >

            </div>

            <div 
              className="absolute bg-black left-0 -top-2.5 w-5 h-5 rounded-full"
            />

            <div className="h-full absolute left-2 border-2 top-5 bottom-5 border-dashed"/>

            <div 
              className="absolute bg-black left-0 -bottom-2.5 w-5 h-5 rounded-full"
            />
          </div>
        </div>

        <div
          className="flex items-start p-5 text-black justify-between col-start-5 col-end-7 row-start-1 row-end-2 bg-white rounded-3xl"
        > 
          <div
            className="flex flex-col h-full justify-between"
          >
            <h4
              className="font-heading text-xl text-orange-400"
            > 
              2 Years of
            </h4>

            <p
              className="text-black text-lg font-sans font-extrabold"
            >
              building Shorado, solo
            </p>
          </div>

          <Suspense>
            <ShoradoLogoAnimatedComponent 
              width="60"
              height="60"
              speed={40}
              meridianCount={4}  
            
            />
          </Suspense>
        </div>

        <div
          className="col-start-5 col-end-7 row-start-2 row-end-4 bg-white p-5 rounded-3xl"
        >
          <p
            className="text-xl font-extrabold"
          >
            currently living in Munich — and for the past two years I've been building 
              <b
                className="inline-block mr-1.5 text-orange-400 font-heading "
              >
                Shorado:
              </b> 
              
              <span className="mx-0.5"/>a marketplace where ad visibility is determined by the seller's reputation, not the size of your 
              <b className="text-green-400 font-extrabold ml-2">wallet</b>.
          </p>
        </div>

        <div
          className="z-100 col-start-1 col-end-5 row-start-3 row-end-5 bg-yellow-300 rounded-3xl flex flex-col items-start p-5 gap-2.5"
        >
          <h4
            className="font-heading tracking-wider text-xl"
          >
            Frontend
          </h4>

          <div
            className="flex flex-row flex-wrap w-full gap-2 max-w-2xl" 
          >
            {STACK.frontend.map((skill, ind) => (
              <span
                key={skill + ind}
                className="font-bold tracking-wider bg-black text-white px-2.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <CategorySkillCardComponent 
          title={"Frontend"}
          category={"frontend"}
          items={STACK.frontend}
          className="col-start-1 col-end-5 row-start-3 row-end-5"
        />

        <CategorySkillCardComponent 
          title={"Infra and (CI & CD)"}
          category={"infra"}
          items={STACK.infra}
          className="col-start-1 col-end-4 row-start-5 row-end-7"
        />

        <CategorySkillCardComponent 
          title={"Backend"}
          category={"backend"}
          items={STACK.backend}
          className="col-start-4 col-end-7 row-start-4 row-end-6 justify-end items-end"
        />

        <ButtonLink
          border="secondary"
          shape="pill"
          padding="xl"
          style="transparent"
          href="/projects"
          className="flex items-center text-white justify-between col-start-4 col-end-7 row-start-6 row-end-7 bg-orange-400 rounded-3xl"
        >
          <h3
            className="font-heading text-xl"
          >
            View Projects  
          </h3><ChevronRight 
            size={30}
          />
        </ButtonLink>
      </section>
    </div>
  );
}


//         I'm self-taught. No formal CS education — everything I know about backend, databases, authorization, or infrastructure I learned while building a real product, not reading textbooks. Shorado started with a simple problem: my father, a realtor, asked me to make a website to show ads to clients. It turned out that on existing platforms, the top of the search results is simply bought — and no one sees those who don't pay. This seemed wrong to me, and that's how Shorado was born.

//         I work on my own — from the design system and database architecture to authentication, real-time chats, and SEO. I like to understand things at the level of details: how to make a passkey authorization that doesn't break; how to compress images so that the page loads instantly; how to build a system where a new seller gets as much attention as an experienced one.