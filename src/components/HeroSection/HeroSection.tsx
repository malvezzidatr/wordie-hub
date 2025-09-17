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
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          <button className="btn btn-neutral rounded-md">
            <Icon />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}