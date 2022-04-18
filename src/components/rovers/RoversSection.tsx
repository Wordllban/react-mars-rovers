import React from 'react'

// rover images
import curiosity from "../../assets/images/curiosity_rover.jpg";
import oportunity from "../../assets/images/opportunity_rover.jpg"
import spirit from "../../assets/images/spirit_rover.jpg"

// components
import { Rover } from './Rover'

export const RoversSection = () => {
    const curiosityInfo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam.";
    const curiosityWiki: string = "https://en.wikipedia.org/wiki/Curiosity_(rover)"
    const opportunityInfo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam.";
    const opportunityWiki: string = "https://en.wikipedia.org/wiki/Opportunity_(rover)"
    const spiritInfo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam.";
    const spiritWiki: string = "https://en.wikipedia.org/wiki/Spirit_(rover)"

    return (
        <section id="rovers" className='mb-36 relative before:content-[""] before:rotate-[30deg] before:absolute
         before:h-[30rem] before:w-[14rem] before:blur-[75px] before:bg-gradient-to-r before:left-[-15%] before:lg:left-[-1%] before:bottom-[5%] before:lg:bottom-[35%]
       before:from-fuchsia-600/50 before:via-cyan-600/20 before:to-indigo-600/50 overflow-hidden'>
            <div className='container mx-auto relative z-10'>
                <h2>Mars Rovers</h2>

                <Rover name="Curiosity" photo={curiosity} info={curiosityInfo} launchDate="2011-11-26"
                       landingDate="2012-08-06" wikiURL={curiosityWiki}/>

                <Rover name="Opportunity" photo={oportunity} info={opportunityInfo} launchDate="2011-11-26"
                       landingDate="2011-11-26" wikiURL={opportunityWiki}/>

                <Rover name="Spirit" photo={spirit} info={spiritInfo} launchDate="2011-11-26"
                       landingDate="2011-11-26" wikiURL={spiritWiki} />
            </div>
        </section>
    )
}
