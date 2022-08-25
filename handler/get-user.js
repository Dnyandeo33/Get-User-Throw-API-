import { outputAllUser } from "../components/output-all-user.js"

export function getInformation() {
    const users = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
        return res.json();
    })
    .then((data)=> outputAllUser(data))
}