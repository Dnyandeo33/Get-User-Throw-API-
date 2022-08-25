import { outputUser } from "../components/output-user.js"
import { userNotFound } from "../components/user-not-found.js";

export function getUserById(id) {
    const user = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            if(!res.ok) {
                throw Error(`User ID ${id} does not exist.`)
            }
            return res.json();
        }).then((data) => outputUser(data))
        .catch((err) => userNotFound(err))
};