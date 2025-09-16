import { useTranslations } from "next-intl";
import { FaPlay } from "react-icons/fa6";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="bg-white min-h-screen items-center justify-center text-black">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Master Languages Faster with Smart, Adaptive Flashcards</h1>
            <p className="py-6">
              Boost your vocabulary, grammar, and conversation skills with our intelligent flashcard system – personalized learning designed to help language learners succeed quickly and effectively.
            </p>
            <button className="btn btn-neutral rounded-sm">
              <FaPlay />
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
