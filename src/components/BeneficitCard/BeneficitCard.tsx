import { ElementType } from "react";
import { FaLanguage } from "react-icons/fa6";

interface BeneficitCardProps {
  title: string;
  description: string;
  icon: ElementType;
}

export const BeneficitCard = ({
  title,
  description,
  icon: Icon,
}: BeneficitCardProps) => {
  return (
    <div className="flex items-center flex-col p-6">
      <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
        <i className="text-neutral-600 text-xl">
          <Icon />
        </i>
      </div>
      <h3 className="text-lg text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 w-58 text-center">{description}</p>
    </div>
  );
}