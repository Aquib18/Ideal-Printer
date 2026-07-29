import { ArrowRight } from "lucide-react";
import Container from "../common/Container";

const products = [
  {
    title: "Business Cards",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiAi6TG-Pn9hSwdskBra0ayH7On0z0erTfc6EoWiLIEnxYxhjrx1TwfNecZpAW6Cj3RvuAqsgtfggVQItjI7M7ZGnVFj6pmu33-y6vbffj0_6nuVn6gyWKfajGctfYupJG5cCM4hQgocc4DRFqb05ii_h58U4NVBdRhRMJrcjXrN192qPa2z_8kNgK5byUr3mfZ2ii5oJosmmav7V7GOdmYLjUy7mte2KEJNwarGPoRax3AdEaZ2nP",
  },
  {
    title: "Wedding Cards",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIKYpbPVTPAlCOQCeDwKPtqsbsUMd9cl20lCpz_2wBRe7GUNhTLasPIVY3pOxBHwAb6gKoOevsEybTZd3l1lGhUuxDKZNaCw9AcFDyIbIKm9fxLIg882eoi8xiq9V28yMLMXr26_h3mvbMLxLdHlTaYGBEnanFgQVJoJo3L6qlr-OYhbScFl31P-dNenTWoHMylkzgTY-697QYXBtneSgdOi60c1fF2OjZYFTIFIBqB2l7TgRzXgXW",
  },
  {
    title: "Packaging",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCC1IdJtJa72kPtz5mFnpxJD8DpVTSffjYVCyx9wf22q0Y5kg0WyWSQ_jcejFEI9Wt2m4XCJi3hxWuBkXgD1lAg8xdOxxr4BHWFt_6Cfe3ijLpwALunRgzHtOXzdSqVj60Z73zKdiaDsBjGMg4pZYxjc4laYPCOm8ukFq-aP6IRTsuJN__mOJIQJf373b2j4nPB07dnOUDXs4ss6ZjK8hieOEi3tdVDgY_rzL2DZpKxkC2Uh5g2-1kB",
  },
  {
    title: "Banners",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBceSceKpToEJT2NlqzEQqfeTPUQfTBi08D0Kdqd9cc1PYsDvcj_Ta0U0fJH-Yd7H04REC4Ddq1fJQP8jZht8EENSeBfphP3xl4S6KjIOaCXvVl1crYZ8uR9KDby6Ve4KdLPGVYd34loVeUoS3V9sbRYnMfUckruO_trCxF7GqY1kaUe1HnTLQkHeE2VNCGPDU8diUH653rJTSQ-XdWN_Q_lJWYy_9XOHfK6Ylmi1gtNPxobIAwPcHq",
  },
  {
    title: "Brochures",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBju6JVTJixqIdzqL0x4gLTvGtxlBA4Io9FNNVipWD11cYjWXSfaplXbDkZlF8-Bh5c4z-n2fArZlfIRSlatodVdJj54p6ByIwhm0CznefKqVvXhB89UlYhs5FRAkyFptyQGw6rqTBIK6FJzEQATe3ru52v0AyXRnDtRisLxmWaoJmwlKbSo64uIWekS14HOqtY-5eXlTOg_mXSS-eLQjdgYoSGfaqoRgtR98bpeISIegYyHJuZxbuC",
  },
  {
    title: "Stationery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzjpXDRg942GhpAWCi5JjPq5hqCoJtqOh9XEQjoCRQrNhh0Savqlb47FmH4lfSvMrKvWaH_yaP4EnpC2lsUJaA5EOBirrCMg05qX8v26B5cVF-TtyzaVbPIQrTbTu6jcbOk4NDtwLTPc-6ETnIIiWTgm-ufiJv9EidJfombXBgxul87ShsFQIZ-giqmqKNF9Q-80_tuUJs1QlUAP6-SaMP1IslJkiqUvDXXnP7Ot8blQUStTsYdHE_",
  },
  {
    title: "Promotional",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-t_MwM-U79ea7ndT9jMiMi2HDFaC8HHSm0A0x2eQYYze-A_GsbzEpNsR4QvaZYA9RmwzYu9x_xucYcrL51Us34qQxKoVOxp4ohTgDtpvO0qEmxlqar3cGB9xjKMWZMPVTBw4sNW8ovof_jwOeq8SnKvnLVpcOIrXEzI2kdAEtGdILfPyjhNzCCrkNruZRsPJJBdb6GyVmjKJB3LDXW8XU5pg06MU28zT2uYF3deOYpKXxlXn2cI68",
  },
  {
    title: "Flyers",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5Dcl6luhIGdga8_uzzs1sFdI-B968yZ9OTWGukl2reG_QuxVztZviUG7C70nIK3NNg-sUCAcQWxpKiLEjVIFghlM1YVzY0iGbCG83fJEVaRTdbJakrcu0Xw2-C526Q_wkwHnikBNCsyXEluIZCMOStpAYa9nFPKZtoVmeNz-H8AmykGaWjUfhju895UejMeW6jpHV5TklIMD73MQJPqdu2gCHpLjlDgEOqrimaVt0jfpHgUM-Tbe",
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Best Selling Products
            </h2>

            <div className="w-16 h-1 bg-[#C9963E] mt-3 rounded-full"></div>
          </div>

          <button className="hidden md:flex items-center gap-2 text-[#7F5700] font-bold hover:gap-4 transition-all">
            View All Products
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ProductShowcase;