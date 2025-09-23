import { ElementType } from "react";

interface HeroSection {
  title: string;
  subtitle: string;
  buttonText: string;
  icon: ElementType;
}

export const HeroSection = ({
  buttonText,
  subtitle,
  title,
  icon: Icon,
}: HeroSection) => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-950 to-teal-400 bg-clip-text text-transparent mb-4">{title}</h1>
          <p className="py-6 text-neutral-600">{subtitle}</p>
          <button className="btn btn-xl gap-4 hover:scale-105 transition-all text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl h-16">
            <Icon />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}