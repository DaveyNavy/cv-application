import Profile from "./profile";
import "../styles/form.css"


function Form ( { hide, profile, setProfile } ) {
    return (
        <>
        <form action="" hidden={hide}>
            <Profile profile={profile} setProfile={setProfile}></Profile>
        </form>
        
        
        </>
    )
}

export default Form;