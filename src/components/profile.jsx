import "../styles/profile.css"

export default function Profile ({ profile, setProfile }) {

    return (
        <section className="profile">
            <h1>Profile</h1>
            <div className="row">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@example.com" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" placeholder="555-555-5555" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})}/>
            </div>
        </section>
    )
}

   