import "../styles/cv.css"

export default function CV({ hide, profile, education, experience }) {
    const accomplishments = education.achievements.split(/\n/);

    return (
        hide && 
        <div className="cv">
            <section className="cv-profile">
                <h1>{profile.name}</h1>
                <h2>{profile.email} | {profile.phone} </h2>
            </section>

            <section className="cv-education">
                <h1>EDUCATION</h1>
                <hr />

                <div className="content">
                    <div className="heading">
                        <h3>{education.name} - {education.major}</h3>
                        <h3>{education.startDate} - {education.endDate}</h3>
                    </div>
                    
                    {accomplishments.map((e) => {
                        return <p key={e} style={{paddingLeft: "1rem"}}> - {e}</p>;
                    })}
                </div>
            </section>

            <section className="cv-experience">
                <h1>EXPERIENCE</h1>
                <hr />
                
                {
                    experience.map((e)=> {
                        return (
                            <div className="content" key={e.div}>
                                <div className="heading">
                                    <h3>{e.position} - {e.company}</h3>
                                    <h3>{e.startDate} - {e.endDate}</h3>
                                </div>
                                
                                {e.responsibilities.split(/\n/).map((ele, i) => {
                                    return <p key={i} style={{paddingLeft: "1rem"}}> - {ele}</p>;
                                })}
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}