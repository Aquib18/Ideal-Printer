
import Container from "./Container";

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
}

const PageHeader = ({
  badge,
  title,
  highlight,
  description,
}: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-[#1E1E1E] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,150,62,.15),transparent_55%)]"></div>

      <Container>
        <div className="relative z-10 max-w-3xl">
          {badge && (
            <span className="rounded-full bg-[#C9963E]/10 px-5 py-2 text-sm font-semibold text-[#F5BD61]">
              {badge}
            </span>
          )}

          <h1 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            {title}

            {highlight && (
              <span className="block text-[#F5BD61]">
                {highlight}
              </span>
            )}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;