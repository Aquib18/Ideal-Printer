import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProductShowcase from "../components/home/ProductShowcase";
import Workflow from "../components/home/WorkFlow";
import Testimonials from "../components/home/Testimonials";
import Brand from "../components/home/Brands";

import ContactCTA from "../components/home/ContactCTA";
import WhatsAppButton from "../components/common/WhatsAppButton";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
          <ProductShowcase />
        <Services />
     
      
        <Workflow />
        <Testimonials />
        <Brand />
        
           <WhyChooseUs />
        <ContactCTA />
      </main>

      <WhatsAppButton />
    </>
  );
};

export default HomePage;
