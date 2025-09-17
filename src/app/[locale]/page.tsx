import { Card } from "@/components/Card/Card";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { useTranslations } from "next-intl";
import { FaPlay, FaLayerGroup, FaFire, FaChartLine } from "react-icons/fa6";

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

      <div className="w-full mt-24 flex items-center justify-around px-8 gap-8">
        <Card icon={FaLayerGroup} title={t('cardTitleActiveDeck')} countText="24" />
        <Card icon={FaFire} title={t('cardTitleDayStreak')} countText="47" />
        <Card icon={FaChartLine} title={t('cardTitleAccuracy')} countText="89%" />
      </div>

    </div>
  );
}
