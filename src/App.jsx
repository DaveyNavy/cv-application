import { useState } from "react"
import Form from "./components/form"
import CV from "./components/cv"

import view from "./assets/view.svg"

export default function App () {
    const [showResults, setShowResults] = useState(false)
    const [profile, setProfile] = useState({"name": '', "email": '', "phone": ''})
    const [education, setEducation] = useState({"name": '', "major": '', "startDate": '', "endDate": '', "achievements": ''})
    const [experience, setExperience] = useState([{"id": 0, "company": '', "position": '', "startDate": '', "endDate": '', "responsibilities": ''}])

    function toggleView() {
        setShowResults(!showResults);
    }

    return (
        <>
            <Form hide={showResults} profile={profile} setProfile={setProfile} 
            education={education} setEducation={setEducation} experience={experience} setExperience={setExperience}/>
            <CV hide={showResults} profile={profile} education={education} experience={experience}/>
            <img className="view-icon" onClick={toggleView} src={view}></img>
        </>
       

    )

}

