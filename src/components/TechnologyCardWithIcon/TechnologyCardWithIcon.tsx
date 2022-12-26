import React from "react";

type Props = {
  icon: string;
  text: string;
};

export default function TechnologyCardWithIcon({ icon, text }: Props) {
  const iconPath = "/img/icons/" + icon + "/" + icon + "-original.svg";
  return (
    <div className="mx-4 flex cursor-pointer flex-col items-center justify-center gap-1 py-2 text-white hover:opacity-75">
      <img src={iconPath} alt={text} className="h-[30px] w-[30px]" />
    </div>
  );
}
