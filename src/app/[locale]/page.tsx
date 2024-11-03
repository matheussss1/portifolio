import { ChangeLocale } from "@/components/change-locale";
import { IconGithub } from "@/components/icon-github";
import { IconLinkedin } from "@/components/icon-linkedin";

import { JobCard } from "@/components/job-card";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const runtime = 'edge';

export default function Home() {
    const t = useTranslations();



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
                    <ChangeLocale />
                    <div className="flex flex-col gap-6">
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
                            aria-label={t("header.buyMeCoffee")}
                            className="w-max flex items-center gap-2 bg-gray-300/25 px-3 py-1.5 rounded-lg text-md font-semibold"
                        >
                            <span className="text-xl">☕</span>
                            <span>{t("header.buyMeCoffee")}</span>
                        </a>
                    </div>
                </div>
                <nav className="flex-col gap-4 hidden lg:flex">
                    <a href="#about" className="text-md text-zinc-700 dark:text-zinc-400">
                        {t("header.nav.about")}
                    </a>
                    <a
                        href="#experience"
                        className="text-md text-zinc-700 dark:text-zinc-400"
                    >
                        {t("header.nav.experience")}
                    </a>
                </nav>
            </header >
            <main className="flex flex-col flex-1 lg:py-8 pb-20 gap-12 min-h-96">
                <div id="about">
                    <h2 className="text-md uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4">
                        {t("about.title")}
                    </h2>
                    <p className="px-4 text-gray-400">
                        <span className="text-gray-200 font-semibold">
                            {t("about.intro")}
                        </span>{" "}
                        {t("about.passion")}{" "}
                        <span className="text-gray-200 font-semibold">
                            {t("about.passion2")}
                        </span>{" "}
                        {t("about.description")}
                        <br />
                        <br />
                        {t.rich("about.technologies", {
                            react: <span key="react" className="text-blue-400">React</span> as any,
                            nodejs: <span key="nodejs" className="text-green-400">Node.js</span> as any,
                            cloud: <span key="cloud" className="text-orange-400">{t("about.technologiesCloudTech")}</span> as any,
                        })}{" "}
                        <span className="text-gray-200 font-semibold">
                            {t("about.technologies2")}
                        </span>
                        <br />
                        <br />
                        <span className="text-gray-200 font-semibold">
                            {t("about.proudest")}
                        </span>{" "}
                        {t("about.achievement1")}{" "}
                        <span className="text-gray-200 font-semibold">
                            {t("about.achievement2")}
                        </span>
                        {t("about.achievement3")}{" "}
                        <span className="text-gray-200 font-semibold">
                            {t("about.impact")}
                        </span>
                        {t("about.impact2")}{" "}
                        <span className="text-purple-300">
                            {t("about.passion3")}
                        </span>
                        <br />
                        <br />
                        {t("about.personal")}{" "}
                        {t.rich("about.skills", {
                            craftingClean: <span key="craftingClean" className="text-white font-semibold">{t("about.skillsCraftingClean")}</span> as any,
                            experiencesAndOptimizing: <span key="experiencesAndOptimizing" className="text-white font-semibold">{t("about.skillsExperiencesAndOptimizing")}</span> as any,
                            frontend: <span key="frontend" className="text-blue-400 font-semibold">{t("about.skillsFrontend")}</span> as any,
                            backend: <span key="backend" className="text-green-400 font-semibold">{t("about.skillsBackend")}</span> as any,
                            performance: <span key="performance" className="text-white font-semibold">{t("about.skillsPerformance")}</span> as any,
                        })}{" "}
                        {t("about.devops")}
                        <br />
                        <br />
                        {t("about.teaching")}{" "}
                        <span className="text-gray-200 font-semibold">
                            {t("about.teaching2")}
                        </span>{" "}
                        {t("about.teaching3")}{" "}
                        <span className="text-gray-200 font-semibold">
                            {t("about.teaching4")}
                        </span>
                    </p>
                </div>
                <hr className="border-gray-300 dark:border-gray-400/35 w-1/2 mx-auto hidden lg:block" />
                <div id="experience">
                    <h2 className="text-md uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4">
                        {t("experience.title")}
                    </h2>
                    <div className="flex flex-col gap-12 px-4">
                        <JobCard
                            type={t("experience.job1.type")}
                            level={t("experience.job1.level")}
                            companyName={t("experience.job1.companyName")}
                            role={t("experience.job1.role")}
                            duration={t("experience.job1.duration")}
                            description={
                                <>
                                    {t("experience.job1.description.1")}
                                    <br />
                                    {t("experience.job1.description.2")}
                                    <br />
                                    {t("experience.job1.description.3")}
                                    <br />
                                    <br />
                                    <strong className="text-white">{t("general.keyContributions")}: </strong>
                                    <ul>
                                        <li>
                                            - {t("experience.job1.description.keyContributions.1")}
                                        </li>
                                        <li>
                                            - {t("experience.job1.description.keyContributions.2")}
                                        </li>
                                        <li>
                                            - {t("experience.job1.description.keyContributions.3")}
                                        </li>
                                    </ul>
                                </>
                            }
                            companyIcon={
                                <Image
                                    src="/marvee-icon.webp"
                                    alt={t("experience.job1.companyName")}
                                    width={58}
                                    height={58}
                                />
                            }
                            stack={["ClickUp", "NodeJs", "AWS", "React", "Flutter", "N8N"]}
                        />
                        <JobCard
                            type={t("experience.job2.type")}
                            level={t("experience.job2.level")}
                            companyName={t("experience.job2.companyName")}
                            role={t("experience.job2.role")}
                            duration={t("experience.job2.duration")}
                            description={
                                <>
                                    {t("experience.job2.description.1")}
                                    <br />
                                    {t("experience.job2.description.2")}
                                    <br />
                                    <br />
                                    <strong className="text-white">{t("general.keyContributions")}:</strong>
                                    <ul>
                                        <li>
                                            - {t("experience.job2.description.keyContributions.1")}
                                        </li>
                                        <li>
                                            - {t("experience.job2.description.keyContributions.2")}
                                        </li>
                                        <li>
                                            - {t("experience.job2.description.keyContributions.3")}
                                        </li>
                                        <li>
                                            - {t("experience.job2.description.keyContributions.4")}
                                        </li>
                                    </ul>
                                </>
                            }
                            companyIcon={
                                <Image
                                    src="/marvee-icon.webp"
                                    alt={t("experience.job2.companyName")}
                                    width={58}
                                    height={58}
                                />
                            }
                            stack={[
                                "NodeJs",
                                "React",
                                "AWS",
                                "Docker",
                                "PostgreSQL",
                                "Redis",
                                "CI/CD",
                            ]}
                        />
                        <JobCard
                            type={t("experience.job3.type")}
                            level={t("experience.job3.level")}
                            companyName={t("experience.job3.companyName")}
                            role={t("experience.job3.role")}
                            duration={t("experience.job3.duration")}
                            description={
                                <>
                                    {t("experience.job3.description.1")}
                                    <br />
                                    {t("experience.job3.description.2")}
                                    <br />
                                    <br />
                                    <strong className="text-white">{t("general.keyContributions")}:</strong>
                                    <ul>
                                        <li>
                                            - {t("experience.job3.description.keyContributions.1")}
                                        </li>
                                        <li>
                                            - {t("experience.job3.description.keyContributions.2")}
                                        </li>
                                        <li>
                                            - {t("experience.job3.description.keyContributions.3")}
                                        </li>
                                        <li>
                                            - {t("experience.job3.description.keyContributions.4")}
                                        </li>
                                        <li>
                                            - {t("experience.job3.description.keyContributions.5")}
                                        </li>
                                        <li>
                                            - {t("experience.job3.description.keyContributions.6")}
                                        </li>
                                    </ul>
                                </>
                            }
                            companyIcon={
                                <Image
                                    src="/sci-icon.webp"
                                    alt={t("experience.job3.companyName")}
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
                            type={t("experience.job4.type")}
                            level={t("experience.job4.level")}
                            companyName={t("experience.job4.companyName")}
                            role={t("experience.job4.role")}
                            duration={t("experience.job4.duration")}
                            description={
                                <>
                                    {t("experience.job4.description.1")}
                                    <br />
                                    {t("experience.job4.description.2")}
                                    <br />
                                    {t("experience.job4.description.3")}
                                    <br />
                                    <br />
                                    <strong>{t("general.keyContributions")}:</strong>
                                    <ul>
                                        <li>
                                            - {t("experience.job4.description.keyContributions.1")}
                                        </li>
                                        <li>
                                            - {t("experience.job4.description.keyContributions.2")}
                                        </li>
                                        <li>
                                            - {t("experience.job4.description.keyContributions.3")}
                                        </li>
                                    </ul>
                                </>
                            }
                            companyIcon={
                                <Image
                                    src="/sci-icon.webp"
                                    alt={t("experience.job4.companyName")}
                                    width={58}
                                    height={58}
                                    loading="lazy"
                                    className="h-full w-full block"
                                />
                            }
                            stack={["Python", "React", "AWS", "MySQL", "Docker", "GitLab"]}
                        />
                        <JobCard
                            type={t("experience.job5.type")}
                            level={t("experience.job5.level")}
                            companyName={t("experience.job5.companyName")}
                            role={t("experience.job5.role")}
                            duration={t("experience.job5.duration")}
                            description={
                                <>
                                    {t("experience.job5.description.1")}
                                    <br />
                                    {t("experience.job5.description.2")}
                                    <br />
                                    <br />
                                    <strong>{t("general.keyContributions")}:</strong>
                                    <ul>
                                        <li>
                                            - {t("experience.job5.description.keyContributions.1")}
                                        </li>
                                        <li>
                                            - {t("experience.job5.description.keyContributions.2")}
                                        </li>
                                        <li>
                                            - {t("experience.job5.description.keyContributions.3")}
                                        </li>
                                        <li>
                                            - {t("experience.job5.description.keyContributions.4")}
                                        </li>
                                    </ul>
                                </>
                            }
                            companyIcon={
                                <Image
                                    src="/sci-icon.webp"
                                    alt={t("experience.job5.companyName")}
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
        </div >
    );
}
