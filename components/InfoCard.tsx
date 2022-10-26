import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { useState } from "react";

interface InfoCardProps {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: number;
  lat: number;
  long: number;
  total: number;
}

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  lat,
  long,
  total,
}: InfoCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out transform first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          {isLiked && (
            <HeartIconSolid
              className="h-7 cursor-pointer"
              onClick={() => {
                setIsLiked(false);
              }}
            />
          )}
          {!isLiked && (
            <HeartIcon
              className="h-7 cursor-pointer"
              onClick={() => {
                setIsLiked(true);
              }}
            />
          )}
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{`$ ${price} / night`}</p>
            <p className="text-right font-extralight">{`$ ${
              price * total
            } total`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
