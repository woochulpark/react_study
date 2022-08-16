import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
};

const UserList = () => {
    const users = [
        {email: "ryu@email.com", name: "유재석"},
        {email: "kim@email.com", name: "김종국"},
        {email: "ha@email.com", name: "하하"},
        {email: "song@email.com", name: "송지효"}

    ];

    return (
        <tabel>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =><User userData={user} />)}
            </tbody>
        </tabel>   
    );
};

export default UserList