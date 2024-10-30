import { IconGithub } from "@/components/icon-github";
import { IconLinkedin } from "@/components/icon-linkedin";
import { IconMarvee } from "@/components/icon-marvee";
import { IconSci } from "@/components/icon-sci";
import { JobCard } from "@/components/job-card";
import Script from "next/script";
export const runtime = "edge";
export default function Home() {
  return (
    <div className="flex flex-col lg:max-w-screen-xl lg:mx-auto lg:flex-row ">
      <header className="flex flex-col py-12 gap-20 flex-1 lg:h-svh lg:sticky lg:top-0 px-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">Matheus</h1>
          <h2 className="text-lg font-medium">Software Engineer</h2>
          <p className="dark:text-zinc-400 text-zinc-700">
            I Build scalable, efficient, and secure software solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#about" className="size-8">
              <IconLinkedin />
            </a>
            <a href="" className="size-8">
              <IconGithub />
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
      <main className="flex flex-col flex-1 py-12 gap-32">
        <div id="about">
          <h2 className="text-sm uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4">
            About
          </h2>
          <p className="px-4">
            I’ve been crafting robust backend solutions since 2019, delivering
            reliable and efficient solutions. Throughout my journey, I’ve had
            the pleasure of serving 250+ happy clients worldwide, building
            robust software for a leading telemedicine company, maintaining a
            remote community platform, and tackling a variety of projects in PHP
            and Node.js. In my leisure time, I enjoy creating browser extensions
            and web applications, which have been used by thousands of users.
            I’m passionate about my work and always up for new challenges. And
            if you’re looking for someone to bring your project to life, I’m
            available for hire —let’s make something great together!
          </p>
        </div>
        <div id="experience">
          <h2 className="text-sm uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4">
            Experience
          </h2>
          <div className="flex flex-col gap-4 px-4">
            <JobCard
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
            <div id="section1">
              <JobCard
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
        </div>
      </main>
      <footer></footer>
      <Script src="gradient.js" />
    </div>
  );
}
