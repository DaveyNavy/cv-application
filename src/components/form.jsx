import Profile from "./profile";
import Education from "./education";
import "../styles/form.css"


function Form ( { hide, profile, setProfile, education, setEducation } ) {
    return (
        !hide && 
        <>
        <form action="">
            <Profile profile={profile} setProfile={setProfile}></Profile>
            <Education education={education} setEducation={setEducation}></Education>

        </form>
        
        
        </>
    )
}

export default Form;