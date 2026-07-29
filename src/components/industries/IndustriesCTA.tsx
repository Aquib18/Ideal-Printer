import Button from "../common/Button";
import Section from "../common/Section";

const IndustriesCTA = () => {
  return (
    <Section className="bg-[#1E1E1E]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold uppercase text-[#C9963E] md:text-5xl">
          Not on the list?
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Our capabilities extend far beyond the standard. We partner with
          innovators in every field to create bespoke printing solutions that
          defy convention.
        </p>

        <div className="mt-10">
          <Button>
            Start a Custom Project
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default IndustriesCTA;