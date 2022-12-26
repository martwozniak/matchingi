import React from "react";
import TechnologyCardWithIcon from "../TechnologyCardWithIcon/TechnologyCardWithIcon";

export default function SelectMenu() {
  return (
    <div className="bg-grey-700 hidden min-h-[60px] w-full sm:flex">
      <div className="flex">
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
          icon="cpp"
          text="C++"
          description="Programming language with more than 6000 companies using it worldwide"
        />
        <TechnologyCardWithIcon
          icon="dotnet"
          text=".NET"
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
      </div>
    </div>
  );
}
