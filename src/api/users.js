export default class ApiUsers {

    static getList(action) {
        const timeout = 1000;
        return new Promise(resolve => {
            setTimeout(() => {
                let users = [];

                for (let x=1; x<=28; x++) {
                    users.push({
                        id: x,
                        username: "Johny " + x,
                        job: "Employee " + x,
                    });
                }

                resolve(users);
            }, timeout);
        });
    }

}
