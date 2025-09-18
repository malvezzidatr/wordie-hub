"use client";

import { Card } from "@/components/Card/Card";
import { FlashcardExample } from "@/components/FlashcardExample/FlashcardExample";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaPlay, FaLayerGroup, FaFire, FaChartLine, FaCheck, FaComment } from "react-icons/fa6";

export default function Home() {
  const t = useTranslations('HomePage');
  const [movingTop, setMovingTop] = useState<number | null>(null);
  const [isTop, setIsTop] = useState<boolean>();
  const [zIndex, setZindex] = useState<number>(10);
  const [flashcardExamples, setFlashcardExamples] = useState([
    {
      title: t("flashcardExampleTitle1"),
      language: t("flashcardExampleLanguage1"),
      subtitle: t("flashcardExampleClickToReveal1"),
      backTitle: t("flashcardExampleBackTitle1"),
      backLanguage: t("flashcardExampleBackLanguage1"),
    },
    {
      title: t("flashcardExampleTitle2"),
      language: t("flashcardExampleLanguage2"),
      subtitle: t("flashcardExampleClickToReveal2"),
      backTitle: t("flashcardExampleBackTitle2"),
      backLanguage: t("flashcardExampleBackLanguage2"),
    },
    {
      title: t("flashcardExampleTitle3"),
      language: t("flashcardExampleLanguage3"),
      subtitle: t("flashcardExampleClickToReveal3"),
      backTitle: t("flashcardExampleBackTitle3"),
      backLanguage: t("flashcardExampleBackLanguage3"),
    },
    {
      title: t("flashcardExampleTitle4"),
      language: t("flashcardExampleLanguage4"),
      subtitle: t("flashcardExampleClickToReveal4"),
      backTitle: t("flashcardExampleBackTitle4"),
      backLanguage: t("flashcardExampleBackLanguage4"),
    },
    {
      title: t("flashcardExampleTitle5"),
      language: t("flashcardExampleLanguage5"),
      subtitle: t("flashcardExampleClickToReveal5"),
      backTitle: t("flashcardExampleBackTitle5"),
      backLanguage: t("flashcardExampleBackLanguage5"),
    },
  ]
)
  const [removing, setRemoving] = useState<number | null>(null);


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
    <div className="bg-white min-h-screen items-center justify-center text-black">
      <HeroSection
        title={t('title')}
        subtitle={t('subtitle')}
        buttonText={t('heroButtonText')}
        icon={FaPlay}
      />

      <div className="w-full mt-24 flex items-center justify-around px-8 gap-8 mb-14">
        <Card icon={FaLayerGroup} title={t('cardTitleActiveDeck')} countText="24" />
        <Card icon={FaFire} title={t('cardTitleDayStreak')} countText="47" />
        <Card icon={FaChartLine} title={t('cardTitleAccuracy')} countText="89%" />
      </div>

      <p className="text-3xl text-neutral-900 mb-4 text-center">Interactive Learning Experience</p>
      <p className="text-lg text-neutral-600 text-center">Flip cards to reveal answers and track your progress</p>
      <div className="w-full flex items-center justify-center mt-20">
        <div className="stack relative mx-auto">
          <style jsx>{`
            @keyframes riseAndFall {
              0% { transform: rotate(0deg); }
              50% { transform: translateY(-550px); scale: 0.6;}
              60% { scale: 0.5;}
              75% { scale: 0.4;}
              90% { scale: 0.2;}
              100% { transform: translateY(0px) translateX(0px);}
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
                className={`bg-white w-full cursor-pointer ${
                  movingThis ? `absolute animate-rise-fall` : "relative translate-y-0 opacity-100"
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
    </div>
  );
}
