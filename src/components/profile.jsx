import "../styles/profile.css"

export default function Profile ({ profile, setProfile }) {

    return (
        <section className="profile">
            <h1>Profile</h1>
            <div className="row">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})}/>
            </div>

            <div className="row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
            </div>

            <div className="row">
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone"/>
            </div>

            <button>Save</button>
        </section>
    )
}

   