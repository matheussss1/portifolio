import { IconGithub } from "@/components/icon-github";
import { IconLinkedin } from "@/components/icon-linkedin";
import { IconMarvee } from "@/components/icon-marvee";
import { IconSci } from "@/components/icon-sci";
import { JobCard } from "@/components/job-card";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col px-6 lg:max-w-screen-xl lg:mx-auto py-12 lg:flex-row h-full">
      <header className="flex flex-col flex-1 gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">Matheus</h1>
          <h2 className="text-lg font-medium">Software Engineer</h2>
          <p className="dark:text-zinc-400 text-zinc-700">
            I Build scalable, efficient, and secure software solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="" className="size-8">
              <IconLinkedin />
            </a>
            <a href="" className="size-8">
              <IconGithub />
            </a>
          </div>
        </div>
        <nav className="flex flex-col gap-4">
          <a href="" className="text-md text-zinc-700 dark:text-zinc-400">
            About
          </a>
          <a href="" className="text-md text-zinc-700 dark:text-zinc-400">
            Experience
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <p>
          I’ve been crafting robust backend solutions since 2019, delivering
          reliable and efficient solutions. Throughout my journey, I’ve had the
          pleasure of serving 250+ happy clients worldwide, building robust
          software for a leading telemedicine company, maintaining a remote
          community platform, and tackling a variety of projects in PHP and
          Node.js. In my leisure time, I enjoy creating browser extensions and
          web applications, which have been used by thousands of users. I’m
          passionate about my work and always up for new challenges. And if
          you’re looking for someone to bring your project to life, I’m
          available for hire —let’s make something great together!
        </p>
        <div className="flex flex-col gap-4">
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
        </div>
      </main>
      <footer></footer>
      <Script src="gradient.js" />
    </div>
  );
}
