export default function users(state = {}, action) {
    let new_state;
    switch (action.type) {
        case "users.modalDeleteShow":
            new_state = JSON.parse(JSON.stringify(state));
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

        default:
            return state;
    }
}
