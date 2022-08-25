import { OUTPUT } from "../data/constant.js";

export function outputUser(data) {
    let output = document.getElementById(OUTPUT);
    while (output.firstChild) {
        output.firstChild.remove();
    }
    output.innerHTML += `<div class="output">
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
            </tr>
            <tr>
                <th>${data.id}</th>
                <th>${data.name}</th>
                <td>${data.company.name}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Username</th>
                <td>${data.username}</td>
            </tr>
            <tr>
                <th>Website</th>
                <td>${data.website}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${data.email}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>${data.address.city}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>${data.phone}</td>
            </tr>
            <tr>
                <th>Zipcode</th>
                <td>${data.address.zipcode}</td>
            </tr>
        </table>
    </div>`
}