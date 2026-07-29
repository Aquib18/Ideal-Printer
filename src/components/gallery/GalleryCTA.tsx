// src/components/gallery/GalleryCTA.tsx

import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";

interface GalleryCTAProps {
  onStartProject?: () => void;
  onDownloadPortfolio?: () => void;
}

/**
 * GalleryCTA
 * Closing call-to-action band shown at the bottom of the Gallery page.
 */
const GalleryCTA: React.FC<GalleryCTAProps> = ({
  onStartProject,
  onDownloadPortfolio,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#1E1E1E] px-5 py-[120px]">
      <Container>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-extrabold text-[#C9963E] md:text-4xl">
            Ready to print your vision?
          </h2>
          <p className="mb-10 text-lg text-[#F5F1EA]/70">
            Experience the meticulous precision of Ideal Printers for your
            next project. From concept to physical reality, we ensure every
            detail is perfect.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" onClick={onStartProject}>
              Start a Project
            </Button>
            <Button variant="outline" size="lg" onClick={onDownloadPortfolio}>
              Download Portfolio
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GalleryCTA;