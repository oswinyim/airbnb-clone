import Image, { StaticImageData } from "next/image";

interface PROPS {
  img: string | StaticImageData;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard = ({ img, title, description, buttonText }: PROPS) => {
  return (
    <div className="relative py-16 ">
      <div className="relative h-96 min-w-[250px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-1/4 px-12 text-center sm:px-24 md:px-36 lg:px-72 xl:px-96">
        <h3 className="text-4xl mb-3">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 rounded-lg px-4 py-2 mt-5 hover:scale-105 transition transform divide-fuchsia-400 ease-out">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
