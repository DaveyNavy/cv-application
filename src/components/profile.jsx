import { useState } from "react"
import "../styles/profile.css"
import refresh from "../assets/refresh.svg"

export default function Profile ({ profile, setProfile }) {
    const [lock, setLock] = useState(false);

    function reset () {
        let newProfile = {};
        for (let [key, value] of Object.entries(profile)) {
            newProfile[key] = "";
        }
        setProfile(newProfile);
    }

    return (
        <section className={`profile ${lock? "inactive" : ""}`}>
            <div className="header">
                <h1>Profile</h1>
                <img src={refresh} alt="" onClick={() => reset()}/>
            </div>
            <div className="row">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" disabled={lock} value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@example.com" disabled={lock} value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" placeholder="555-555-5555" disabled={lock} value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})}/>
            </div>

            <button type="button" hidden={lock} onClick={() => setLock(true)}>Save</button>
            <button type="button" hidden={!lock} onClick={() => setLock(false)}>Edit</button>
        </section>
    )
}

   