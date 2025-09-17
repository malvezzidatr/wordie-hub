import { ElementType } from "react"
import { FaLayerGroup } from "react-icons/fa6"

interface Card {
  icon: ElementType;
  title: string;
  countText: string;
}

export const Card = ({
  countText,
  icon: Icon,
  title,
}: Card) => {
  return (
    <div className="card w-96 shadow-md">
      <div className="card-body items-center flex justify-center">
        <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <i className="text-neutral-600 text-xl">
            <Icon />
          </i>
        </div>
        <p className="text-2xl text-neutral-900 mb-2 font-bold">{countText}</p>
        <h2 className="text-neutral-600 text-lg">{title}</h2>
      </div>
    </div>
  )
}