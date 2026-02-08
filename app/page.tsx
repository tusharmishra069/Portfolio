import Hero from "@/components/Hero";
import IconScroll from "@/components/IconScroll";
import WorkEducation from "@/components/WorkEducation";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import { LetsConnect } from "@/components/letsconnect";
import { Services } from '@/components/services'

export default function Home() {
    return (
        <>
            <Hero />
            {/* <IconScroll /> */}
            <WorkEducation />
            <Skills />
            <FeaturedProjects />
            <Services />
            <LetsConnect />
        </>
    );
}
