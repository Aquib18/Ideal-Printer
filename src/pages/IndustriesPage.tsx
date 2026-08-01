import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesGrid from "../components/industries/IndustriesGrid";
import IndustriesCTA from "../components/industries/IndustriesCTA";
import FAQ from "../components/industries/FAQ";
import WhatsAppButton from "../components/common/WhatsAppButton";

const IndustriesPage = () => {
  return (
    <>
      <main>
        <IndustriesHero />

        <IndustriesGrid />
        <FAQ />
        <IndustriesCTA />
      </main>

      <WhatsAppButton />
    </>
  );
};

export default IndustriesPage;
