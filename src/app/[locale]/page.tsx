import { ChangeLocale } from "@/components/change-locale";
import { IconGithub } from "@/components/icon-github";
import { IconLinkedin } from "@/components/icon-linkedin";
// import Hero3D from '@/components/hero-3d'; // Original import replaced by dynamic import
import dynamic from 'next/dynamic';

import { JobCard } from "@/components/job-card";
import { useTranslations } from "next-intl";
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// export const runtime = 'edge'; // Commented out as it may conflict with GSAP client-side animations

const Hero3D = dynamic(() => import('@/components/hero-3d'), {
    ssr: false, // Typically, 3D components are client-side only
    loading: () => <div style={{ height: '400px', width: '100%' }} className='rounded-lg bg-accent-purple-deep/10 animate-pulse' /> // Placeholder during load
});

export default function Home() {
    const t = useTranslations();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate job cards on scroll
        gsap.utils.toArray('.job-card-animate').forEach((card: any) => {
            // Scroll-triggered animation
            gsap.fromTo(card,
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100', // Start animation when card is 100px from bottom of viewport
                        toggleActions: 'play none none none', // Play animation once when it enters
                        once: true // Ensure animation only runs once
                    }
                }
            );

            // Hover animation
            const hoverAnimation = gsap.to(card, {
                scale: 1.03,
                borderColor: 'var(--accent-purple-vibrant)',
                duration: 0.3,
                ease: 'power2.out',
                paused: true
            });

            card.addEventListener('mouseenter', () => hoverAnimation.play());
            card.addEventListener('mouseleave', () => hoverAnimation.reverse());
        });

        // Cleanup ScrollTrigger instances on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); // Empty dependency array ensures this runs once on mount



    return (
        <div className="flex flex-col lg:max-w-screen-xl lg:mx-auto lg:flex-row ">
            <header className="flex flex-col py-8 pb-12 gap-12 flex-1 lg:h-svh lg:sticky lg:top-0 px-4">
                <div className="flex flex-col gap-6">
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
                    <div className="flex flex-col gap-2">
                        <span className="text-sm text-gray-400">
                            {t("header.changeLocale")}
                        </span>
                        <ChangeLocale />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 mt-2 items-center">
                            <a
                                href="https://www.linkedin.com/in/matheus-f-carvalho/"
                                target="_blank"
                                aria-label="Linkedin"
                                className="size-8 text-accent-purple-pastel hover:text-accent-purple-vibrant"
                            >
                                <IconLinkedin className="fill-current" />
                            </a>
                            <a
                                href="https://github.com/matheussss1"
                                aria-label="Github"
                                target="_blank"
                                className="size-8 text-accent-purple-pastel hover:text-accent-purple-vibrant"
                            >
                                <IconGithub className="fill-current" />
                            </a>
                        </div>
                        <a
                            href="https://www.buymeacoffee.com/matheus.carvalho"
                            target="_blank"
                            aria-label={t("header.buyMeCoffee")}
                            className="w-max flex items-center gap-2 bg-accent-purple-deep hover:bg-accent-purple-vibrant px-3 py-1.5 rounded-lg text-md font-semibold text-foreground"
                        >
                            <span className="text-xl">☕</span>
                            <span>{t("header.buyMeCoffee")}</span>
                        </a>
                    </div>
                </div>
                <nav className="flex-col gap-4 hidden lg:flex">
                    <a href="#about" className="text-md text-accent-purple-pastel hover:text-accent-purple-vibrant">
                        {t("header.nav.about")}
                    </a>
                    <a
                        href="#experience"
                        className="text-md text-accent-purple-pastel hover:text-accent-purple-vibrant"
                    >
                        {t("header.nav.experience")}
                    </a>
                </nav>
            </header >
            <main className="flex flex-col flex-1 lg:py-8 pb-20 gap-12 min-h-96">
                <Hero3D /> {/* <--- Add the new component here */}
                <div id="about">
                    <h2 className="text-md uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4 text-foreground">
                        {t("about.title")}
                    </h2>
                    <p className="px-4 text-gray-300"> {/* Adjusted from text-gray-400 for better contrast */}
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.intro")}
                        </span>{" "}
                        {t("about.passion")}{" "}
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
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
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.technologies2")}
                        </span>
                        <br />
                        <br />
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.proudest")}
                        </span>{" "}
                        {t("about.achievement1")}{" "}
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.achievement2")}
                        </span>
                        {t("about.achievement3")}{" "}
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.impact")}
                        </span>
                        {t("about.impact2")}{" "}
                        <span className="text-accent-purple-pastel"> {/* Changed from text-purple-300 */}
                            {t("about.passion3")}
                        </span>
                        <br />
                        <br />
                        {t("about.personal")}{" "}
                        {t.rich("about.skills", {
                            craftingClean: <span key="craftingClean" className="text-foreground font-semibold">{t("about.skillsCraftingClean")}</span> as any, /* Adjusted from text-white */
                            experiencesAndOptimizing: <span key="experiencesAndOptimizing" className="text-foreground font-semibold">{t("about.skillsExperiencesAndOptimizing")}</span> as any, /* Adjusted from text-white */
                            frontend: <span key="frontend" className="text-blue-400 font-semibold">{t("about.skillsFrontend")}</span> as any,
                            backend: <span key="backend" className="text-green-400 font-semibold">{t("about.skillsBackend")}</span> as any,
                            performance: <span key="performance" className="text-foreground font-semibold">{t("about.skillsPerformance")}</span> as any, /* Adjusted from text-white */
                        })}{" "}
                        {t("about.devops")}
                        <br />
                        <br />
                        {t("about.teaching")}{" "}
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.teaching2")}
                        </span>{" "}
                        {t("about.teaching3")}{" "}
                        <span className="text-foreground font-semibold"> {/* Adjusted from text-gray-200 */}
                            {t("about.teaching4")}
                        </span>
                    </p>
                </div>
                <hr className="border-accent-purple-deep/50 w-1/2 mx-auto hidden lg:block" />
                <div id="experience">
                    <h2 className="text-md uppercase tracking-widest font-semibold py-4 sticky backdrop-blur lg:sr-only top-0 px-4 text-foreground">
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
                                    <strong className="text-foreground">{t("general.keyContributions")}: </strong> {/* Adjusted from text-white */}
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
                                    <strong className="text-foreground">{t("general.keyContributions")}:</strong> {/* Adjusted from text-white */}
                                    <strong className="text-foreground">{t("general.keyContributions")}:</strong> {/* Adjusted from text-white */}
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
                                    <strong className="text-foreground">{t("general.keyContributions")}:</strong> {/* Adjusted from text-white, and added strong for consistency */}
                                    <strong className="text-foreground">{t("general.keyContributions")}:</strong> {/* Adjusted from text-white, and added strong for consistency */}
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
