import { useState } from "react"
import Form from "./components/form"





export default function App () {
    const [showResults, setShowResults] = useState(false)
    const [profile, setProfile] = useState({})

    function toggleView() {
        setShowResults(!showResults);
    }
    
    console.log(profile)
    return (
        <>
            <Form hide={showResults} profile={profile} setProfile={setProfile} />
            <button onClick={toggleView}>View</button>
        </>
       

    )

}

