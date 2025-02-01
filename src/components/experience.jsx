import "../styles/experience.css"

export default function Experience({ experience, setExperience, id }) {
    function update(key, value) {
        const next = experience.map((e, index) => {
            if (index == id) {
                return {...e, key: value};
            } else {
                return e;
            }
        })
        setExperience(next);
    }

    return (
        <section className="experience">
            <div className="row">
                <label htmlFor="company-name">Company</label>
                <input type="text" id="company-name" name="company-name" placeholder="The Ministry of Magic" value={experience.company} onChange={(e) => {update("company", e.target.value)}}/>
            </div>

            <div className="row">
                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" placeholder="Auror" value={experience.position} onChange={(e) => {update("position", e.target.value)}}/>
            </div>

            <div className="row">
                <p>Date</p>

                <div className="dates">
                    
                    <p className="row">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="start-date" value={experience.startDate} onChange={(e) => {update("startDate", e.target.value.toString())}}/>
                    </p>
                    
                    <p className="row">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="end-date" value={experience.endDate} onChange={(e) => {update("endDate", e.target.value.toString())}}/>
                    </p>
                </div>
            </div>

            <div className="row">
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea id="responsibilities" name="responsibilities" value={experience.responsibilities} onChange={(e) => {update("responsibilities", e.target.value)}}/>
            </div>

            <button type="button">Save</button>
        </section>
    )
}