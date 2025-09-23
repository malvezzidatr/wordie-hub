import { ElementType } from "react"

interface IconCardProps {
  icon: ElementType;
  background: string;
  iconColor: string;
}

export const IconCard = ({
  icon: Icon,
  background,
  iconColor,
}: IconCardProps) => {
  return (
    <div className={`w-16 h-16 ${background} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}>
      <i className={`text-2xl ${iconColor}`}>
        <Icon />
      </i>
    </div>
  )
}