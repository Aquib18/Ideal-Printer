import ContactHero from "../components/contact/ContactHero";

import ContactInfo from "../components/contact/ContactInfo";

import WhatsAppButton from "../components/common/WhatsAppButton";

const ContactPage = () => {
  return (
    <>
      <main>
        <ContactHero />
         <ContactInfo />

      </main>
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;