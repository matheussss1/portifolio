import { IconGithub } from "@/components/icon-github";
import { IconLinkedin } from "@/components/icon-linkedin";
import { IconMarvee } from "@/components/icon-marvee";
import { IconSci } from "@/components/icon-sci";
import { JobCard } from "@/components/job-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:max-w-screen-xl lg:mx-auto lg:flex-row ">
      <header className="flex flex-col py-8 pb-12 gap-12 flex-1 lg:h-svh lg:sticky lg:top-0 px-4">
        <div className="flex flex-col gap-12">
          <img src="/profile.jpeg" className="block w-44 lg:w-64 rounded-md" />
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-semibold">Matheus Carvalho</h1>
            <h2 className="text-xl font-medium">Software Engineer</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 mt-4 items-center">
              <a
                href="https://www.linkedin.com/in/matheus-f-carvalho/"
                className="size-8"
              >
                <IconLinkedin />
              </a>
              <a href="https://github.com/matheussss1" className="size-8">
                <IconGithub />
              </a>
            </div>
            <a
              href="https://www.buymeacoffee.com/matheus.carvalho"
              target="_blank"
              className="w-max flex items-center gap-2 bg-gray-300/25 px-3 py-1.5 rounded-lg text-md font-semibold"
            >
              <span className="text-xl">☕</span>
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
        <nav className="flex-col gap-4 hidden lg:flex">
          <a href="#about" className="text-md text-zinc-700 dark:text-zinc-400">
            About
          </a>
          <a
            href="#experience"
            className="text-md text-zinc-700 dark:text-zinc-400"
          >
            Experience
          </a>
        </nav>
      </header>
      <main className="flex flex-col flex-1 lg:py-8 gap-12">
        <div id="about">
          <h2 className="text-md uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4">
            About
          </h2>
          <p className="px-4 text-gray-400">
            <span className="text-gray-200 font-semibold">
              Hi there! I'm Matheus Carvalho
            </span>{" "}
            - a tech lead who found his passion in{" "}
            <span className="text-gray-200 font-semibold">
              turning outdated systems into modern, scalable solutions.
            </span>{" "}
            My coding journey started with self-taught experiments, but quickly
            evolved into something bigger than I imagined.
            <br />
            <br />
            These days, I orchestrate a mix of{" "}
            <span className="text-blue-400">React</span>,{" "}
            <span className="text-green-400">Node.js</span>, and{" "}
            <span className="text-orange-400">cloud technologies</span> to build{" "}
            <span className="text-gray-200 font-semibold">
              systems that actually make a difference.
            </span>
            <br />
            <br />
            <span className="text-gray-200 font-semibold">
              My proudest achievement?
            </span>{" "}
            Leading the{" "}
            <span className="text-gray-200 font-semibold">
              transformation at Marvee
            </span>
            , where we turned a basic internal tool into a robust banking
            platform{" "}
            <span className="text-gray-200 font-semibold">
              serving hundreds of users
            </span>
            . Nothing beats the feeling of seeing your code making{" "}
            <span className="text-purple-300">people's work lives easier!</span>
            <br />
            <br />
            I'm that developer who gets excited about both{" "}
            <span className="text-gray-200 font-semibold">
              crafting clean <span className="text-blue-400">frontend</span>{" "}
              experiences and optimizing{" "}
              <span className="text-green-400">backend</span> performance.
            </span>{" "}
            DevOps? Count me in! I love the whole puzzle of making applications
            not just work, but thrive at scale.
            <br />
            <br />
            When I'm not deep in code, you might find me sharing knowledge with
            aspiring developers -{" "}
            <span className="text-gray-200 font-semibold">
              teaching basics to newcomers
            </span>{" "}
            reminds me why I fell in love with programming in the first place.{" "}
            <span className="text-gray-200 font-semibold">
              Always up for learning something new or tackling an interesting
              challenge!
            </span>
          </p>
        </div>
        <hr className="border-gray-300 dark:border-gray-400/35 w-1/2 mx-auto hidden lg:block" />
        <div id="experience">
          <h2 className="text-md uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4">
            Experience
          </h2>
          <div className="flex flex-col gap-12 px-4">
            <JobCard
              type="Remote"
              level="Senior"
              companyName="Marvee - Financeiro por Assinatura"
              role="Tech Lead"
              duration="2024 — Present"
              companyIcon={<IconMarvee />}
              stack={[
                "JavaScript",
                "NodeJs",
                "ExpressJS",
                "React",
                "Next.js",
                "PHP",
                "Laravel",
                "MySQL",
                "Deployment",
              ]}
            />
            <JobCard
              type="Remote"
              level="Senior"
              companyName="Plenor"
              role="CTO"
              duration="2023 — Present"
              companyIcon={
                <Image
                  src="/logo-plenor-dark.png"
                  alt="plenor"
                  width={40}
                  height={40}
                  className="h-full w-full block"
                />
              }
              stack={[
                "JavaScript",
                "NodeJs",
                "ExpressJS",
                "React",
                "Next.js",
                "PHP",
                "Laravel",
                "MySQL",
                "Deployment",
              ]}
            />
            <JobCard
              type="Remote"
              role="Full Stack Software Engineer"
              level="Mid"
              companyName="Marvee - Financeiro por Assinatura"
              companyIcon={<IconMarvee />}
              duration="2023 — 2024"
              stack={[
                "JavaScript",
                "NodeJs",
                "ExpressJS",
                "React",
                "Next.js",
                "PHP",
                "Laravel",
                "MySQL",
                "Deployment",
              ]}
            />
            <JobCard
              type="Remote"
              role="Full Stack Developer"
              level="Mid"
              companyName="Freelance"
              duration="2022 — 2022"
              companyIcon={
                <Image
                  src="/freelance.webp"
                  alt="freelance"
                  width={40}
                  height={40}
                  className="h-full w-full block"
                />
              }
              stack={[
                "JavaScript",
                "NodeJs",
                "ExpressJS",
                "React",
                "Next.js",
                "PHP",
                "Laravel",
                "MySQL",
                "Deployment",
              ]}
            />
            <JobCard
              type="Hybrid"
              role="Full Stack Developer"
              level="Junior"
              companyName="SCI - Sistemas Contábeis Integrados"
              duration="2021 — 2023"
              companyIcon={<IconSci />}
              stack={[
                "JavaScript",
                "NodeJs",
                "ExpressJS",
                "React",
                "Next.js",
                "PHP",
                "Laravel",
                "MySQL",
                "Deployment",
              ]}
            />
            <JobCard
              type="Hybrid"
              level="Intern"
              role="Full Stack Developer"
              companyName="SCI - Sistemas Contábeis Integrados"
              duration="2020 — 2021"
              companyIcon={<IconSci />}
              stack={[
                "JavaScript",
                "NodeJs",
                "ExpressJS",
                "React",
                "Next.js",
                "PHP",
                "Laravel",
                "MySQL",
                "Deployment",
              ]}
            />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
