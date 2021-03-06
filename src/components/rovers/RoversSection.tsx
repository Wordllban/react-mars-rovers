import React from "react";

// rover images
import curiosity from "../../assets/images/curiosity_rover.jpg";
import oportunity from "../../assets/images/opportunity_rover.jpg";
import spirit from "../../assets/images/spirit_rover.jpg";

// components
import { Rover } from "./Rover";

export const RoversSection = () => {
  const curiosityInfo: string =
    "Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC.";
  const curiosityWiki: string =
    "https://en.wikipedia.org/wiki/Curiosity_(rover)";
  const opportunityInfo: string =
    "Opportunity, also known as MER-B or MER-1, is a robotic, active from 2004 mid-2018. Opportunity was operational on Mars for 5110 sols (5250 days). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet.";
  const opportunityWiki: string =
    "https://en.wikipedia.org/wiki/Opportunity_(rover)";
  const spiritInfo: string =
    "Spirit, also known as MER-A or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet.";
  const spiritWiki: string = "https://en.wikipedia.org/wiki/Spirit_(rover)";

  return (
    <section
      id="rovers"
      className='mb-36 relative before:content-[""] before:rotate-[30deg] before:absolute
         before:h-[30rem] before:w-[14rem] before:blur-[75px] before:bg-gradient-to-r before:left-[-15%] before:lg:left-[-1%] before:bottom-[5%] before:lg:bottom-[35%]
       before:from-fuchsia-600/50 before:via-cyan-600/20 before:to-indigo-600/50 overflow-hidden'
    >
      <div className="container mx-auto relative z-10">
        <h2>Mars Rovers</h2>

        <Rover
          name="Curiosity"
          photo={curiosity}
          info={curiosityInfo}
          launchDate="2011-11-26"
          landingDate="2012-08-06"
          wikiURL={curiosityWiki}
        />

        <Rover
          name="Opportunity"
          photo={oportunity}
          info={opportunityInfo}
          launchDate="2011-11-26"
          landingDate="2011-11-26"
          wikiURL={opportunityWiki}
        />

        <Rover
          name="Spirit"
          photo={spirit}
          info={spiritInfo}
          launchDate="2011-11-26"
          landingDate="2011-11-26"
          wikiURL={spiritWiki}
        />
      </div>
    </section>
  );
};
