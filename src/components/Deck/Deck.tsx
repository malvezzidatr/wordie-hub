import { FaFlag } from "react-icons/fa6"

interface DeckProps {
  howManyCard: string;
  title: string;
  description: string;
  percentage: string;
}

export const Deck = ({
  description,
  howManyCard,
  title,
  percentage,
}: DeckProps) => {
  return (
    <div className="card w-96 card-md shadow-sm">
        <div className="flex items-center justify-between mb-4 w-full px-6 pt-6">
          <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
            <FaFlag className="text-neutral-600 text-md" />
          </div>
          <p className="text-sm text-neutral-500 justify-self-end">{howManyCard} cards</p>
        </div>
      <div className="card-body">
        <h2 className="card-title text-xl text-neutral-900">{title}</h2>
        <p className="text-neutral-600">{description}</p>
        <div className="w-full flex items-center gap-4">
          <progress className="progress progress-neutral w-full" value={percentage} max="100" />
          <p className="text-sm text-neutral-600">{percentage}%</p>
        </div>
      </div>
    </div>
  )
}