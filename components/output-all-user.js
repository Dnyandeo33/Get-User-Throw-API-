import { OUTPUT } from "../data/constant.js";

export function outputAllUser(data) {
    debugger;
    let output = document.getElementById(OUTPUT);
    while (output.firstChild) {
        output.firstChild.remove();
    }
    data.map((user) => {
        output.innerHTML += `<div class="output">
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
        </tr>
        <tr>
            <th>${user.id}</th>
            <th>${user.name}</th>
            <td>${user.company.name}</td>
        </tr>
    </table>
    <table>
        <tr>
            <th>Username</th>
            <td>${user.username}</td>
        </tr>
        <tr>
            <th>Website</th>
            <td>${user.website}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${user.email}</td>
        </tr>
        <tr>
            <th>City</th>
            <td>${user.address.city}</td>
        </tr>
        <tr>
            <th>Phone</th>
            <td>${user.phone}</td>
        </tr>
        <tr>
            <th>Zipcode</th>
            <td>${user.address.zipcode}</td>
        </tr>
    </table>
</div>`
    })
}