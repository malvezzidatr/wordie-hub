"use client"

import { useState } from "react";
import { FlashcardExample } from "../FlashcardExample/FlashcardExample";

type flashcard = {
  title: string;
  language: string;
  subtitle: string;
  backTitle: string;
  backLanguage: string;
}

interface CardStackProps {
  flashcards: flashcard[];
}

export const CardStack = ({ flashcards }: CardStackProps) => {
  const [movingTop, setMovingTop] = useState<number | null>(null);
  const [isTop, setIsTop] = useState<boolean>();
  const [zIndex, setZindex] = useState<number>(10);
  const [removing, setRemoving] = useState<number | null>(null);
  const [flashcardExamples, setFlashcardExamples] = useState(flashcards);
  const handleRemove = () => {
    if (flashcardExamples.length === 0) return;

    setRemoving(0);
    setTimeout(() => {
      setFlashcardExamples((prev) => prev.slice(1));
      setRemoving(null);
    }, 300);
  };

  const handleIDidntKnow = () => {
    if (flashcardExamples.length === 0) return;

    setMovingTop(0);
    setTimeout(() => {
      setZindex(0);
    }, 300)

    setTimeout(() => {
      setFlashcardExamples((prev) => {
        const copy = [...prev];
        const top = copy.shift();
        if (top) copy.push(top);
        return copy;
      });
      setMovingTop(null);
      setZindex(10)
    }, 800);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center mt-20">
          <div className="stack relative mx-auto">
            <style jsx>{`
              @keyframes riseAndFall {
                0% { transform: rotate(0deg); }
                50% { transform: translateY(-550px) translateX(240px) rotate(25deg); scale: 0.6;}
                60% { scale: 0.5; transform: translateX(100px) rotate(20deg)}
                75% { scale: 0.4; }
                90% { scale: 0.2; }
                100% { transform: translateY(0px) translateX(0px) rotate(0deg);}
              }
              .animate-rise-fall {
                animation: riseAndFall 0.8s ease-in-out;
              }
            `}</style>
            {flashcardExamples.map((flashcard, i) => {
              const movingThis = i === 0 && movingTop === 0;

              return (
                <div
                  key={flashcard.backTitle + flashcard.language}
                  className={`bg-white cursor-pointer opacity-100 shadow-lg hover:shadow-xl rounded-lg ${
                    movingThis ? `absolute animate-rise-fall` : "relative translate-y-0"
                  }`}
                  style={{
                    zIndex: movingThis ? zIndex : flashcardExamples.length - i,
                  }}
                >
                  <FlashcardExample
                    title={flashcard.title}
                    language={flashcard.language}
                    subtitle={flashcard.subtitle}
                    backTitle={flashcard.backTitle}
                    backLanguage={flashcard.backLanguage}
                  />
                </div>
              );
            })}

          </div>
      </div>
      <div className="flex mt-6 gap-8 justify-center">
        <button  onClick={flashcardExamples.length > 0 ? handleIDidntKnow : undefined}  className="btn btn-ghost hover:btn-error rounded-md">
          I didn't know
        </button>
        <button onClick={isTop ? handleRemove : undefined} className="btn btn-ghost hover:btn-success rounded-md">
          I knew this
        </button>
      </div>
    </>
  )
}