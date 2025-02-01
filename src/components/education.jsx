import "../styles/education.css"

export default function Education ({ education, setEducation }) {

    return (
        <section className="education">
            <h1>Education</h1>
            <div className="row">
                <label htmlFor="school-name">Institution Name</label>
                <input type="text" id="school-name" name="school-name" placeholder="Hogwarts School of Witchcraft and Wizardry" value={education.name} onChange={(e) => setEducation({...education, name: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="major">Major</label>
                <input type="email" id="major" name="major" placeholder="Herbology" value={education.major} onChange={(e) => setEducation({...education, major: e.target.value})}/>
            </div>

            <div className="row">
                <p>Dates Attended</p>

                <div className="dates">
                    
                    <p className="row">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="start-date" value={education.startDate} onChange={(e) => setEducation({...education, startDate: e.target.value.toString()})}/>
                    </p>
                    
                    <p className="row">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="end-date" value={education.endDate} onChange={(e) => setEducation({...education, endDate: e.target.value.toString()})}/>
                    </p>
                </div>
            </div>

            <div className="row">
                <label htmlFor="achievements">Achievements</label>
                <textarea id="achievements" name="achievements" value={education.achievements} onChange={(e) => setEducation({...education, achievements: e.target.value})}/>
            </div>

            <button type="button">Save</button>
        </section>
    )
}
