import React from "react";
import UserListElement from "./UserListElement";
import PropTypes from 'prop-types';

export default class UserList extends React.Component {

    render() {
        return (
            <table>
                <thead><tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Job</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr></thead>
                <tbody>
                {this.props.users.map((user, idx) => {
                    return (
                        <UserListElement key={user.id} user={user}/>
                    );
                })}
                </tbody>
            </table>
        );
    }

}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

