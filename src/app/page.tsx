import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InsightSection } from "@/components/InsightSection";
import { InvestorSection } from "@/components/InvestorSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { PulseLine } from "@/components/PulseLine";
import { RoadmapSection } from "@/components/RoadmapSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamRecruitmentSection } from "@/components/TeamRecruitmentSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WhyNowSection } from "@/components/WhyNowSection";

const MolecularBackground = dynamic(
  () =>
    import("@/components/MolecularBackground").then((mod) => mod.MolecularBackground),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <MolecularBackground />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <PulseLine variant="divider" />
        <ProblemSection />
        <PulseLine variant="divider" />
        <InsightSection />
        <PulseLine variant="divider" />
        <ProductSection />
        <PulseLine variant="divider" />
        <WhyNowSection />
        <PulseLine variant="divider" />
        <RoadmapSection />
        <PulseLine variant="divider" />
        <TeamRecruitmentSection />
        <PulseLine variant="divider" />
        <InvestorSection />
        <PulseLine variant="divider" />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
