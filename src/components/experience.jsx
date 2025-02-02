import { useState } from "react";
import "../styles/experience.css"

export default function Experience({ experience, setExperience, id }) {
    const [lock, setLock] = useState(false);

    function update(key ,value) {
        const next = experience.map((e) => {
            if (e.id == id) {
                e[key] = value;
                return e;
            } else {
                return e;
            }
        })
        setExperience(next);
    }

    function getValue(key) {
        for (let e of experience) {
            if (e.id == id) {
                return e[key];
            }
        }
    }

    function deleteExp () {
        const next = experience.filter((e) => {
            return (e.id != id);
        })
        setExperience(next);
    }

    return (
        <section className={`experience ${lock? "inactive" : ""}`}>
            <div className="row">
                <label htmlFor="company-name">Company</label>
                <input type="text" id="company-name" name="company-name" placeholder="The Ministry of Magic" disabled={lock} value={getValue("company")} onChange={(e) => update("company", e.target.value)}/>
            </div>

            <div className="row">
                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" placeholder="Auror" value={getValue("position")} disabled={lock} onChange={(e) => update("position", e.target.value)}/>
            </div>

            <div className="row">
                <p>Date</p>

                <div className="dates">
                    
                    <p className="row">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="start-date" value={getValue("startDate")} disabled={lock} onChange={(e) => update("startDate", e.target.value)}/>
                    </p>
                    
                    <p className="row">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="end-date" value={getValue("endDate")} disabled={lock} onChange={(e) => update("endDate", e.target.value)}/>
                    </p>
                </div>
            </div>

            <div className="row">
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea id="responsibilities" name="responsibilities" value={getValue("responsibilities")} disabled={lock} onChange={(e) => update("responsibilities", e.target.value)}/>
            </div>

            <div className="button-tray">
                <button type="button" hidden={id == 0} onClick={() => deleteExp()}>Delete</button>
                <button type="button" hidden={lock} onClick={() => setLock(true)}>Save</button>
                <button type="button" hidden={!lock} onClick={() => setLock(false)}>Edit</button>
            </div>


        </section>
    )
}