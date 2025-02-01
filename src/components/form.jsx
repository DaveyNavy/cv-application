import Profile from "./profile";
import Education from "./education";
import ExperienceWrapper from "./experience-wrapper";
import "../styles/form.css"


function Form ( { hide, profile, setProfile, education, setEducation, experience, setExperience } ) {
    return (
        !hide && 
        <>
        <form action="">
            <Profile profile={profile} setProfile={setProfile}></Profile>
            <Education education={education} setEducation={setEducation}></Education>
            <ExperienceWrapper experience={experience} setExperience={setExperience}></ExperienceWrapper>
        </form>
        
        
        </>
    )
}

export default Form;