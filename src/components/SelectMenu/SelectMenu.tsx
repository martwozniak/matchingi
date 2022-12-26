import React from "react";
import TechnologyCardWithIcon from "../TechnologyCardWithIcon/TechnologyCardWithIcon";

export default function SelectMenu() {
  return (
    <div className="bg-grey-700 min-h-[60px] w-full">
      <div className="flex">
        <TechnologyCardWithIcon icon="react" text="React.js" />
        <TechnologyCardWithIcon icon="typescript" text="TypeScript" />
        <TechnologyCardWithIcon icon="javascript" text="JavaScript" />
        <TechnologyCardWithIcon icon="python" text="Python" />
        <TechnologyCardWithIcon icon="java" text="Java" />
        <TechnologyCardWithIcon icon="php" text="PHP" />
        <TechnologyCardWithIcon icon="ruby" text="Ruby" />
        <TechnologyCardWithIcon icon="c" text="C" />
        <TechnologyCardWithIcon icon="cpp" text="C++" />
        <TechnologyCardWithIcon icon="dotnet" text=".NET" />
        <TechnologyCardWithIcon icon="wordpress" text="WordPress" />
        <TechnologyCardWithIcon icon="unix" text="Admin" />
        <TechnologyCardWithIcon icon="webflow" text="Webflow" />
        <TechnologyCardWithIcon icon="putty" text="Admin" />
        <TechnologyCardWithIcon icon="flutter" text="Mobile" />
      </div>
    </div>
  );
}
