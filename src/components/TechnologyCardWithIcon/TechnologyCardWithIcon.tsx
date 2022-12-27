import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

type Props = {
  icon: string;
  text: string;
  description: string;
};

export default function TechnologyCardWithIcon({
  icon,
  text,
  description,
}: Props) {
  const iconPath = "/img/icons/" + icon + "/" + icon + "-original.svg";
  return (
    <div className="mx-4 flex min-w-[32px] cursor-pointer flex-col items-center justify-center gap-1 py-2 text-white hover:opacity-75">
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <img src={iconPath} alt={text} className="h-[30px] w-[30px]" />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" sideOffset={5}>
            <div className="flex max-w-sm flex-col items-start gap-2 bg-black p-8 text-white">
              <img className="max-w-[50px]" src={iconPath} alt={text} />
              <div className="flex flex-col gap-2">
                <div>
                  <div className="font-bold">{text}</div>
                  <div className="cursor-pointer text-blue-600 hover:text-blue-500">
                    @{text}
                  </div>
                </div>
                <div className="Text">{description}</div>
                <div style={{ display: "flex", gap: 15 }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    <div className="Text bold">0</div>{" "}
                    <div className="Text faded">Following</div>
                  </div>
                  <div style={{ display: "flex", gap: 5 }}>
                    <div className="Text bold">2,900</div>{" "}
                    <div className="Text faded">Followers</div>
                  </div>
                </div>
              </div>
            </div>

            <HoverCard.Arrow className="HoverCardArrow" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
}
