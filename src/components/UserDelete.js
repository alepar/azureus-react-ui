import React from "react";

import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

class UserDelete extends React.Component {

    render() {
        return(
            <Modal show={this.props.modal_delete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <strong>{this.props.modal_delete.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={() => this.modalDeleteHide()}>No</Button>
                    <Button bsStyle={"primary"} onClick={() => this.deleteUser()}>Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    modalDeleteHide(event) {
        this.props.dispatch({
            type: "users.modalDeleteHide",
        });
    }

    deleteUser(event) {
        this.props.dispatch({
            type: "users.saga.delete",
            id: this.props.modal_delete.id,
        });

        this.props.dispatch({
            type: "users.userDelete",
            id: this.props.modal_delete.id,
        });

        this.modalDeleteHide(event);
    }
}

function mapStateToProps(state) {
    let modal_delete;
    if (state.users.modal && state.users.modal.list_delete) {
        modal_delete = state.users.modal.list_delete;
    } else {
        modal_delete = {
            show: false,
            id: 0,
            username: "",
        };
    }

    return {
        modal_delete: modal_delete,
    };
}
export default connect(mapStateToProps)(UserDelete);
