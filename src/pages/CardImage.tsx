// CardImage.tsx
interface CardImageProps {
  image: string;
  alt: string;
  objectClass?: string;
}

const CardImage = ({ image, alt, objectClass }: CardImageProps) => {
  return (
    <div className="h-[45vh] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={alt}
        className={`w-full h-full object-cover ${objectClass ?? ""}`}
      />
    </div>
  );
};

export default CardImage;
