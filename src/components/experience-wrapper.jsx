import Experience from "./experience";
import { useState } from "react";
import "../styles/experience.css"

export default function ExperienceWrapper({ experience, setExperience }) {
    const [experiences, setExperiences] = useState([0]);

    function addExperience() {
        setExperiences([...experiences, experiences.length]);
    }

    console.log(experiences)
    return (
        <section className="experience-wrapper">
            <h1>Experiences</h1>
            {experiences.map((e) => <Experience experience={experience} setExperience={setExperience} id={e} key={e}></Experience>)}
            <button type="button" onClick={addExperience}>Add Experience</button>
        </section>
    )
}