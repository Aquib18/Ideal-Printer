
import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesGrid from "../components/industries/IndustriesGrid";
import IndustriesCTA from "../components/industries/IndustriesCTA";

import WhatsAppButton from "../components/common/WhatsAppButton";

const IndustriesPage = () => {
  return (
    <>
     

      <main>
        <IndustriesHero />

        <IndustriesGrid />

        <IndustriesCTA />
      </main>

      <WhatsAppButton />
    </>
  );
};

export default IndustriesPage;