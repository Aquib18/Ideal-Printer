import WhatsAppButton from "../components/common/WhatsAppButton";
import AboutHero from "../components/AboutPage/AboutHero";
import CompanyStory from "../components/AboutPage/CompanyStory";
import MissionVision from "../components/AboutPage/MissionVision";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CompanyStats from "../components/AboutPage/CompanyStats";
import OurTeam from "../components/AboutPage/OurTeam";
import Timeline from "../components/AboutPage/Timeline";
import Certifications from "../components/AboutPage/Certifications";
import ContactCTA from "../components/home/ContactCTA";

const AboutPage = () => {
  return (
    <>
      

      <main>
        <AboutHero />
        <CompanyStory />
        <CompanyStats />

        <MissionVision />

        <WhyChooseUs />

        

        <OurTeam />

        <Timeline />

        <Certifications />

        <ContactCTA />
      </main>
      <WhatsAppButton />
    </>
  );
};

export default AboutPage;