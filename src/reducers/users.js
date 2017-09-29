export default function users(state = {}, action) {
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "users.modalDeleteShow":
            Object.assign(new_state, {
                modal: {
                    list_delete: {
                        show: true,
                        id: action.id,
                        username: action.username,
                    }
                }
            });
            return new_state;

        case "users.modalDeleteHide":
            Object.assign(new_state, {
                modal: {
                    list_delete: {
                        show: false,
                        id: 0,
                        username: "",
                    }
                }
            });
            return new_state;

        case "users.userDelete":

            for (const index in new_state.list) {
                if (new_state.list[index].id === action.id) {
                    new_state.list.splice(index, 1);
                    break;
                }
            }

            return new_state;

        default:
            return state;
    }
}
