import { useState } from "react"
import refresh from "../assets/refresh.svg"
import "../styles/education.css"

export default function Education ({ education, setEducation }) {
    const [lock, setLock] = useState(false);

    function reset () {
        let newProfile = {};
        for (let [key, value] of Object.entries(education)) {
            newProfile[key] = "";
        }
        setEducation(newProfile);
    }


    return (
        <section className={`education ${lock? "inactive" : ""}`}>
            <div className="header">
                <h1>Education</h1>
                <img src={refresh} alt="" onClick={() => reset()}/>
            </div>            <div className="row">
                <label htmlFor="school-name">Institution Name</label>
                <input type="text" id="school-name" name="school-name" placeholder="Hogwarts School of Witchcraft and Wizardry" disabled={lock} value={education.name} onChange={(e) => setEducation({...education, name: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="major">Major</label>
                <input type="text" id="major" name="major" placeholder="Herbology" disabled={lock} value={education.major} onChange={(e) => setEducation({...education, major: e.target.value})}/>
            </div>

            <div className="row">
                <p>Dates Attended</p>

                <div className="dates">
                    
                    <p className="row">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="start-date" disabled={lock} value={education.startDate} onChange={(e) => setEducation({...education, startDate: e.target.value.toString()})}/>
                    </p>
                    
                    <p className="row">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="end-date" disabled={lock} value={education.endDate} onChange={(e) => setEducation({...education, endDate: e.target.value.toString()})}/>
                    </p>
                </div>
            </div>

            <div className="row">
                <label htmlFor="achievements">Achievements</label>
                <textarea id="achievements" name="achievements" disabled={lock} value={education.achievements} onChange={(e) => setEducation({...education, achievements: e.target.value})}/>
            </div>

            <button type="button" hidden={lock} onClick={() => setLock(true)}>Save</button>
            <button type="button" hidden={!lock} onClick={() => setLock(false)}>Edit</button>
        </section>
    )
}
