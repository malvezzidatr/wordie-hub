"use client";

import { BeneficitCard } from "@/components/BeneficitCard/BeneficitCard";
import { Card } from "@/components/Card/Card";
import { CardStack } from "@/components/CardStack/CardStack";
import { Deck } from "@/components/Deck/Deck";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { useTranslations } from "next-intl";
import { FaPlay, FaLayerGroup, FaFire, FaChartLine, FaCheck, FaComment, FaBrain } from "react-icons/fa6";

export default function Home() {
  const t = useTranslations('HomePage');

  const flashcardExamples = [
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

  return (
    <div className="bg-white min-h-screen px-32 items-center justify-center text-black">
      <HeroSection
        title={t('title')}
        subtitle={t('subtitle')}
        buttonText={t('heroButtonText')}
        icon={FaPlay}
      />

      <div className="w-full mt-24 flex items-center justify-between gap-8 mb-14">
        <Card iconColor="text-blue-500" backgroundIcon="bg-gradient-to-tl from-blue-500 to-blue-100" icon={FaLayerGroup} title={t('cardTitleActiveDeck')} countText="24" />
        <Card iconColor="text-orange-500" backgroundIcon="bg-gradient-to-tl from-orange-500 to-orange-100" icon={FaFire} title={t('cardTitleDayStreak')} countText="47" />
        <Card iconColor="text-green-500" backgroundIcon="bg-gradient-to-tl from-green-500 to-green-100" icon={FaChartLine} title={t('cardTitleAccuracy')} countText="89%" />
      </div>
      <div className="mb-10">
        <p className="text-3xl text-neutral-900 mb-4 text-center">Interactive Learning Experience</p>
        <p className="text-lg text-neutral-600 text-center">Flip cards to reveal answers and track your progress</p>
        <CardStack flashcards={flashcardExamples} />
      </div>
      <div className="flex w-full items-center justify-between mb-6">
        <p className="text-3xl text-neutral-900">Your language decks</p>
        <button className="btn btn-neutral rounded-md">Novo deck</button>
      </div>
      <div className="flex items-center gap-4 justify-between flex-wrap">
        <Deck description="description 1" howManyCard="24" percentage="30" title="title 1" />
        <Deck description="description 2" howManyCard="12" percentage="42" title="title 2"/>
        <Deck description="description 3" howManyCard="80" percentage="61" title="title 3"/>
        <Deck description="description 4" howManyCard="34" percentage="5" title="title 4"/>
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
        <div className="flex flex-col mb-12 items-center">
          <h2 className="text-3xl text-neutral-900 mb-4">Why choose Wordie?</h2>
          <p className="text-lg text-neutral-600">Designed specifically for language learning success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <BeneficitCard title="Smart Algorithm" description="Adaptive learning that focuses on your weak points" icon={FaBrain} />
          <BeneficitCard title="Smart Algorithm" description="Adaptive learning that focuses on your weak points" icon={FaBrain} />
          <BeneficitCard title="Smart Algorithm" description="Adaptive learning that focuses on your weak points" icon={FaBrain} />
          <BeneficitCard title="Smart Algorithm" description="Adaptive learning that focuses on your weak points" icon={FaBrain} />

        </div>
      </div>
    </div>
  );
}
