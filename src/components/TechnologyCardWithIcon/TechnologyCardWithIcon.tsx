import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { SplideSlide } from '@splidejs/react-splide';

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
  // TODO: Change to value from database
  const iconPath = '/img/icons/' + icon + '/' + icon + '-original.svg';

  const handleClick = (event: any) => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('opacity-60');

    // min-h-[52px] min-w-[52px] flex items-center justify-center

    event.currentTarget.classList.toggle('border-2');
    event.currentTarget.classList.toggle('border-green-500');
    event.currentTarget.classList.toggle('bg-gray-600/60');
    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  };

  return (
<<<<<<< Updated upstream
    <SplideSlide>
      <div className=" mx-4 flex min-h-[32px] min-w-[32px]  cursor-pointer flex-col items-center justify-center gap-1 py-2 text-white ">
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <div
              className="flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-white/10 p-2 opacity-60 hover:opacity-100"
              onClick={handleClick}
            >
              <img src={iconPath} alt={text} className="h-[32px] w-[32px]" />
            </div>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="HoverCardContent" sideOffset={5}>
              <div className="flex max-w-sm flex-col items-start gap-2 rounded-xl border border-white/10 bg-gray-900 p-8  text-white backdrop-blur-lg">
                <img className="max-w-[50px]" src={iconPath} alt={text} />
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="font-bold">{text}</div>
                    <div className="cursor-pointer text-blue-600 hover:text-blue-500">
                      @{text}
                    </div>
=======
    <div className="mx-4 flex min-w-[32px] cursor-pointer flex-col items-center justify-center gap-1 py-2 text-white hover:opacity-75">
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <img src={iconPath} alt={text} className="h-[30px] w-[30px]" />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" sideOffset={5}>
            <div className="flex max-w-sm  flex-col items-start gap-2 bg-black p-8 text-white">
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
>>>>>>> Stashed changes
                  </div>
                  <div className="Text">{description}</div>
                  <div style={{ display: 'flex', gap: 15 }}>
                    <div style={{ display: 'flex', gap: 5 }}>
                      <div className="Text bold text-xs">0</div>{' '}
                      <div className="Text faded text-xs">Following</div>
                    </div>
                    <div style={{ display: 'flex', gap: 5 }}>
                      <div className="Text bold text-xs">2,900</div>{' '}
                      <div className="Text faded text-xs">Followers</div>
                    </div>
                  </div>
                </div>
              </div>

              <HoverCard.Arrow className="HoverCardArrow" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </SplideSlide>
  );
}
