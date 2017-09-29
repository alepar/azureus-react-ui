import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

import UserListElement from "./UserListElement"

export class UserList extends React.Component {

    render() {
        return (
            <Table bordered hover responsive striped>
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
            </Table>
        );
    }

}


function mapStateToProps(state) {
    return ({
        users: state.users,
    });
}
export default connect(mapStateToProps)(UserList);
