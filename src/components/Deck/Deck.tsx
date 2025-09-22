import { FaFlag } from "react-icons/fa6"

export const Deck = () => {
  return (
    <div className="card w-96 card-md shadow-sm">
        <div className="flex items-center justify-between mb-4 w-full px-6 pt-6">
          <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
            <FaFlag className="text-neutral-600 text-md" />
          </div>
          <p className="text-sm text-neutral-500 justify-self-end">24 cards</p>
        </div>
      <div className="card-body">
        <h2 className="card-title text-xl text-neutral-900">Title</h2>
        <p className="text-neutral-600">Vocabulario para iniciantes</p>
        <div className="w-full flex items-center gap-4">
          <progress className="progress progress-neutral w-full" value="90" max="100"></progress>
          <p className="text-sm text-neutral-600">90%</p>
        </div>
      </div>
    </div>
  )
}