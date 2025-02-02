import Experience from "./experience";
import { useState } from "react";
import "../styles/experience.css"

export default function ExperienceWrapper({ experience, setExperience }) {
    const [id, setId] = useState(1); 

    function addExperience() {
        setExperience([...experience, {"id": id, "company": '', "position": '', "startDate": '', "endDate": '', "responsibilities": ''}]);
        setId(id + 1);
    }

    return (
        <section className="experience-wrapper">
            <h1>Experiences</h1>
            {experience.map((e) => <Experience experience={experience} setExperience={setExperience} id={e.id} key={e.id}></Experience>)}
            <button type="button" onClick={addExperience}>Add Experience</button>
        </section>
    )
}