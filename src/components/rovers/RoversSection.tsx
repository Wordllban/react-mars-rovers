import React from 'react'

// rover images
import curiosity from "../../assets/images/curiosity_rover.jpg";
import oportunity from "../../assets/images/opportunity_rover.jpg"
import spirit from "../../assets/images/spirit_rover.jpg"

// components
import { Rover } from './Rover'

export const RoversSection = () => {
    const curiosityInfo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam.";
    const oportunityInfo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam.";
    const spiritInfo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quisquam.";

    return (
        <section>
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Mars Rovers</h2>
                <Rover name="Curiosity" photo={curiosity} info={curiosityInfo} launchDate="2011-11-26" landingDate="2012-08-06"/>
                <Rover name="Oportunity" photo={oportunity} info={oportunityInfo} launchDate="2011-11-26" landingDate="2011-11-26"/>
                <Rover name="Spirit" photo={spirit} info={spiritInfo} launchDate="2011-11-26" landingDate="2011-11-26"/>
            </div>
        </section>
    )
}
