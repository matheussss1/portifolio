import { IconGithub } from "@/components/icon-github";
import { IconLinkedin } from "@/components/icon-linkedin";

import { JobCard } from "@/components/job-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:max-w-screen-xl lg:mx-auto lg:flex-row ">
      <header className="flex flex-col py-8 pb-12 gap-12 flex-1 lg:h-svh lg:sticky lg:top-0 px-4">
        <div className="flex flex-col gap-12">
          <Image
            loading="lazy"
            src="/profile.webp"
            alt="Profile picture"
            className="block w-44 lg:w-64 rounded-md"
            width={176}
            height={176}
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-semibold">Matheus Carvalho</h1>
            <h2 className="text-xl font-medium">Software Engineer</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 mt-4 items-center">
              <a
                href="https://www.linkedin.com/in/matheus-f-carvalho/"
                target="_blank"
                aria-label="Linkedin"
                className="size-8"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://github.com/matheussss1"
                aria-label="Github"
                target="_blank"
                className="size-8"
              >
                <IconGithub />
              </a>
            </div>
            <a
              href="https://www.buymeacoffee.com/matheus.carvalho"
              target="_blank"
              aria-label="Buy me a coffee"
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
      <main className="flex flex-col flex-1 lg:py-8 gap-12 min-h-96">
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
              description={
                <>
                  Led a cross-functional team of 4 developers while maintaining
                  hands-on development responsibilities.
                  <br />
                  Spearheaded the implementation of robust banking integrations
                  and independently maintained the mobile application.
                  <br />
                  Orchestrated daily operations including sprint planning, code
                  reviews, and technical decision-making while collaborating
                  with CTO on strategic initiatives.
                  <br />
                  <br />
                  <strong className="text-white">Key Contributions: </strong>
                  <ul>
                    <li>
                      - Managed team efficiency through ClickUp implementation
                      and agile ceremonies
                    </li>
                    <li>
                      - Architected and implemented secure banking integration
                      systems
                    </li>
                    <li>
                      - Developed, launched and maintained mobile application
                    </li>
                  </ul>
                </>
              }
              companyIcon={
                <Image
                  src="/marvee-icon.webp"
                  alt="Marvee - Financeiro por Assinatura"
                  width={58}
                  height={58}
                />
              }
              stack={["ClickUp", "NodeJs", "AWS", "React", "Flutter", "N8N"]}
            />
            <JobCard
              type="Remote"
              role="Full Stack Software Engineer"
              level="Mid"
              companyName="Marvee - Financeiro por Assinatura"
              description={
                <>
                  Spearheaded the complete redesign and modernization of the
                  company's core platform, transforming a proof-of-concept MVP
                  into a scalable SaaS solution.
                  <br />
                  Led the successful migration of existing customers while
                  implementing modern development practices and infrastructure
                  improvements.
                  <br />
                  <br />
                  <strong className="text-white">Key Achievements:</strong>
                  <ul>
                    <li>
                      - Rebuilt core platform features with focus on
                      maintainability and scalability
                    </li>
                    <li>
                      - Scaled system capacity from 100 to 500+ users with zero
                      downtime
                    </li>
                    <li>
                      - Implemented CI/CD pipelines to ensure reliable
                      deployments
                    </li>
                    <li>
                      - Successfully transformed internal platform into a
                      customer-facing SaaS product
                    </li>
                  </ul>
                </>
              }
              companyIcon={
                <Image
                  src="/marvee-icon.webp"
                  alt="Marvee - Financeiro por Assinatura"
                  width={58}
                  height={58}
                />
              }
              duration="2023 — Present"
              stack={[
                "NodeJs",
                "React",
                "AWS",
                "Docker",
                "PostgreSQL",
                "Redis",
                "CI/CD",
                "",
              ]}
            />
            {/* 
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
                  width={58}
                  height={58}
                  loading="lazy"
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
              description={}
            /> */}
            <JobCard
              description={
                <>
                  Led development and maintenance of multiple interconnected
                  systems including backoffice platform, customer-facing portal,
                  and mobile application for property management.
                  <br />
                  Mentored 30 interns while managing critical product features
                  and customer-centric solutions.
                  <br />
                  <br />
                  <strong className="text-white">Key Achievements:</strong>
                  <ul>
                    <li>
                      - Led development of property management features
                      including space scheduling, document management, and
                      notification systems
                    </li>
                    <li>
                      - Managed parallel development of web platforms and mobile
                      application
                    </li>
                    <li>
                      - Structured and delivered technical training program with
                      97% success rate
                    </li>
                    <li>
                      - Developed customer-focused problem-solving approach,
                      prioritizing end-user value in technical decisions
                    </li>
                    <li>
                      - Created curriculum based on industry-standard resources
                      like FreeCodeCamp, MDN, roadmap.sh
                    </li>
                    <li>
                      - Led interns through full-stack development journey from
                      programming basics to complete CRUD applications using PHP
                      and JavaScript
                    </li>
                  </ul>
                </>
              }
              type="Hybrid"
              role="Full Stack Developer"
              level="Mid"
              companyName="SCI - Sistemas Contábeis Integrados"
              duration="2023 — 2023"
              companyIcon={
                <Image
                  src="/sci-icon.webp"
                  alt="SCI - Sistemas Contábeis Integrados"
                  width={58}
                  height={58}
                  loading="lazy"
                  className="h-full w-full block"
                />
              }
              stack={[
                "Python",
                "React",
                "AWS",
                "GitLab",
                "PHP",
                "MySQL",
                "PostgreSQL",
                "React Native",
                "Docker",
                "CI/CD",
              ]}
            />
            <JobCard
              description={
                <>
                  Played a key role in the innovation sector, developing
                  new-generation legal and property management solutions.
                  <br />
                  Led development of a LGPD-compliant legal system with focus on
                  security and data protection.
                  <br />
                  Expanded technical expertise into mobile development while
                  building a comprehensive property management solution.
                  <br />
                  <br />
                  <strong>Key Contributions:</strong>
                  <ul>
                    <li>
                      - Developed a comprehensive property management system
                    </li>
                    <li>- Spearheaded development of a secure legal system</li>
                    <li>
                      - Architected and launched a secure legal system MVP with
                      advanced encryption and hashing
                    </li>
                  </ul>
                </>
              }
              type="Hybrid"
              role="Full Stack Developer"
              level="Junior"
              companyName="SCI - Sistemas Contábeis Integrados"
              duration="2021 — 2022"
              companyIcon={
                <Image
                  src="/sci-icon.webp"
                  alt="SCI - Sistemas Contábeis Integrados"
                  width={58}
                  height={58}
                  loading="lazy"
                  className="h-full w-full block"
                />
              }
              stack={["Python", "React", "AWS", "MySQL", "Docker", "GitLab"]}
            />
            <JobCard
              type="Hybrid"
              description={
                <>
                  Contributed to maintaining and enhancing a comprehensive
                  15-year-old intranet system serving critical business
                  functions.
                  <br />
                  Gained extensive experience working across various modules of
                  a mature enterprise system.
                  <br />
                  <br />
                  <strong>Key Contributions:</strong>
                  <ul>
                    <li>
                      - Maintained and enhanced multiple system modules from
                      employee communication to customer reporting
                    </li>
                    <li>
                      - Developed solutions for both internal operations and
                      customer-facing reporting
                    </li>
                    <li>
                      - Collaborated within a small, high-performance team on
                      business-critical applications
                    </li>
                    <li>
                      - Rapidly acquired proficiency in legacy system
                      maintenance and enhancement
                    </li>
                  </ul>
                </>
              }
              level="Intern"
              role="Full Stack Developer"
              companyName="SCI - Sistemas Contábeis Integrados"
              duration="2020 — 2021"
              companyIcon={
                <Image
                  src="/sci-icon.webp"
                  alt="SCI - Sistemas Contábeis Integrados"
                  width={58}
                  height={58}
                  loading="lazy"
                  className="h-full w-full block"
                />
              }
              stack={["FTP", "PHP", "Docker", "JQuery", "MySQL"]}
            />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
