import React, { useEffect, useRef } from "react";
import TechnologyCardWithIcon from "../TechnologyCardWithIcon/TechnologyCardWithIcon";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function SelectMenu() {

  return (
    <div className=" bg-grey-700 hidden min-h-[60px] max-w-full sm:flex mb-2 overflow-hidden">
      <div> {/*className="scroll flex max-w-full overflow-x-scroll scroll-smooth scrollbar scrollbar-none scrollbar-track-gray-900 scrollbar-thumb-gray-800 gap-4"*/}

        <Splide aria-label="My Favorite Images" className="max-w-full overflow-hidden" options={{
          rewind: true,
          perPage: 20,
          width: 'full',
          gap: '0',
          arrows: false,
          pagination: false,
          lazyLoad: true,
        }}>

          <TechnologyCardWithIcon
            icon="react"
            text="React.js"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="typescript"
            text="TypeScript"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="javascript"
            text="JavaScript"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="python"
            text="Python"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="java"
            text="Java"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="php"
            text="PHP"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="ruby"
            text="Ruby"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="c"
            text="C"
            description="Programming language with more than 6000 companies using it worldwide"
          />

          <TechnologyCardWithIcon
            icon="wordpress"
            text="WordPress"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="unix"
            text="Admin"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="webflow"
            text="Webflow"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="putty"
            text="Admin"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
          <TechnologyCardWithIcon
            icon="flutter"
            text="Mobile"
            description="Programming language with more than 6000 companies using it worldwide"
          />
        </Splide>

      </div>
    </div>
  );
}
