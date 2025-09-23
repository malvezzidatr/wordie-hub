import { ElementType } from "react"
import { FaLayerGroup } from "react-icons/fa6"
import { IconCard } from "../IconCard/IconCard";

interface Card {
  icon: ElementType;
  title: string;
  countText: string;
  backgroundIcon: string;
  iconColor: string;
}

export const Card = ({
  countText,
  icon: Icon,
  title,
  backgroundIcon,
  iconColor
}: Card) => {
  return (
    <div className="card w-96 shadow-md rounded-2xl shadow-blue-100">
      <div className="card-body items-center flex justify-center">
        <IconCard icon={Icon} iconColor={iconColor} background={backgroundIcon} />
        <p className="text-3xl text-neutral-900 mb-2 font-bold">{countText}</p>
        <h2 className="text-neutral-600 text-lg">{title}</h2>
      </div>
    </div>
  )
}