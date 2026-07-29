import ServicesHero from "../components/services/PageHeader";
import ServicesGrid from "../components/services/ServiceGrid";
import ServicesCTA from "../components/services/ServiceCTA";
import WhatsAppButton from "../components/common/WhatsAppButton";

const ServicesPage = () => {
  return (
    <>
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>

      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
