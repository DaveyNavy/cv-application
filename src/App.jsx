import { useState } from "react"
import Form from "./components/form"
import CV from "./components/cv"

export default function App () {
    const [showResults, setShowResults] = useState(false)
    const [profile, setProfile] = useState({name: '', email: '', phone: ''})
    const [education, setEducation] = useState({name: '', location: '', startDate: '', endDate: '', achievements: ''})


    function toggleView() {
        setShowResults(!showResults);
    }
    
    return (
        <>
            <Form hide={showResults} profile={profile} setProfile={setProfile} education={education} setEducation={setEducation} />
            <CV hide={showResults} profile={profile} education={education} />
            <button onClick={toggleView}>View</button>
        </>
       

    )

}

