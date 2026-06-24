import {IconArrowUpRight} from "@tabler/icons-react"



export interface LearnMoreProps {
  label: string;
  className?: string;
  onClick?: () => void;
  iconClassname?: string;
}

export const LearnMore = ({
  label,
  onClick,
  className,
  iconClassname,
}: LearnMoreProps) => {

  return (
    <button
     onClick={onClick}
     className={`flex py-3.5 px-5.5 items-center rounded-full text-brand-pure font-body font-semibold bg-brand-main-05 ${className}`}
    >
        {label}
        <IconArrowUpRight
        className={`text-brand-pure size-4 ${iconClassname}`}
        />

    </button>
  )
}


export default LearnMore