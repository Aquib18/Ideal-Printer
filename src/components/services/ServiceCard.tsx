import { ArrowRight } from "lucide-react";

import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";

interface ServiceCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard = ({
  image,
  icon,
  title,
  description,
  tags,
}: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9963E]">
      {/* Image */}

      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9963E]/10 text-[#C9963E]">
            {icon}
          </div>

          <h3 className="text-2xl font-bold text-[#1E1E1E]">
            {title}
          </h3>
        </div>

        <p className="flex-1 leading-7 text-gray-600">
          {description}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>
              {tag}
            </Badge>
          ))}
        </div>

        {/* Button */}

        <Button className="mt-8 w-full">
          <span>Request Quote</span>

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;