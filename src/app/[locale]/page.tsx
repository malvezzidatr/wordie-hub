import { Card } from "@/components/Card/Card";
import { FlashcardExample } from "@/components/FlashcardExample/FlashcardExample";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { useTranslations } from "next-intl";
import { FaPlay, FaLayerGroup, FaFire, FaChartLine, FaCheck, FaComment } from "react-icons/fa6";

export default function Home() {
  const t = useTranslations('HomePage');

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

      <div className="flex flex-col items-center justify-center mt-10">
        <FlashcardExample
          backTitle={t('flashcardExampleBackTitle')}
          backLanguage={t('flashcardExampleBackLanguage')}
          title={t('flashcardExampleTitle')}
          language={t('flashcardExampleLanguage')}
          subtitle={t('flashcardExampleClickToReveal')}
        />
        <div className="flex mt-4">
          <button className="btn btn-accent btn-wide rounded-md">I didn't know</button>
          <button className="btn btn-neutral btn-wide rounded-md">I knew this</button>
        </div>

      </div>
    </div>
  );
}
