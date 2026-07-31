import {
  Building2,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#C9963E] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9963E]">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#1E1E1E] md:text-5xl">
            Visit Our Printing Studio
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We'd love to discuss your printing requirements. Visit our office,
            call us, or send us an email to get the perfect printing solution.
          </p>
        </div>

        {/* Card + Map */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-3xl bg-[#1E1E1E] p-10 shadow-2xl">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9963E]/15">
                <Building2
                  size={30}
                  className="text-[#C9963E]"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  Ideal Printers
                </h3>

                <p className="mt-1 uppercase tracking-[0.2em] text-[#F5BD61]">
                  Head Office
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin
                  size={22}
                  className="mt-1 shrink-0 text-[#C9963E]"
                />

                <p className="leading-8 text-white/75">
                  Behind Prabhu Chambers, Kalbhornagar,Chinchwad
                  <br />
                  Pune, 411019
                  <br />
                  Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  size={22}
                  className="text-[#C9963E]"
                />

                <span className="text-lg text-white/80">
                  +91 7758874354
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={22}
                  className="text-[#C9963E]"
                />

                <span className="text-lg text-white/80">
                   idealprinters111@gmail.com
                   <br/>
                   yasirmoin81@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Globe
                  size={22}
                  className="text-[#C9963E]"
                />

                <span className="text-lg text-white/80">
                  www.idealprinters.in
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              title="Ideal Printers"
             src="https://www.google.com/maps?q=Behind+Prabhu+Chambers,+Kalbhornagar,+Chinchwad,+Pune,+Maharashtra+411019&output=embed"
              className="h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;