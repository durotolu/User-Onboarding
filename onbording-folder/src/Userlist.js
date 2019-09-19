import React from 'react';

function Users(props) {
    const { usersList } = props;

    return (
        <div>
            {usersList.length 
                ? usersList.map(user => (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </div>
                )) : 'Users yet to be onboarded'
            }
        </div>
        
    )
}

export default Users;