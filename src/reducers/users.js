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

        case "users.add":

            const id = Number(Math.random()*1000000).toPrecision(6);

            new_state.list.push({
                id: Number(id),
                username: action.username,
                job: action.job,
            });

            return new_state;

        case "users.edit":

            for (const user of new_state.list) {
                if (user.id === action.id) {
                    user.id = action.id;
                    user.username = action.username;
                    user.job = action.job;
                    break;
                }
            }

            return new_state;

        default:
            return state;
    }
}
