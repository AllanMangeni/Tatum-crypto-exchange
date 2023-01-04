import React, {useState, useEffect } from 'react';

function UserProfile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Fetch user data from API
        fetch('/api/user')
        .then(response => response.json()
        .then(data => setUser(data)));
    }, []);

    const handleSubmit = event => {
        event.preventDefault();

        // Validate form data and update user data in API
    };

    return (
        <div>
            <h2>My Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <buton type="submit"> Update Profile</buton>
            </form>
        </div>
    );
}

export default UserProfile;