import Card from "../common/Card";
import Badge from "../common/Badge";

interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
  aspect?: string;
}

const GalleryCard = ({
  image,
  title,
  category,
  aspect = "aspect-[4/5]",
}: GalleryCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-xl border-t-4 border-[#C9963E] p-0">
      {/* Image */}

      <div className={`overflow-hidden ${aspect}`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Badge className="mb-3 w-fit bg-[#C9963E] text-white">
          {category}
        </Badge>

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default GalleryCard;