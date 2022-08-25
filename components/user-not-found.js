import { OUTPUT } from "../data/constant.js";

export const userNotFound = (err) => {
    let output = document.getElementById(OUTPUT);
    while (userNotFound.firstChild) {
        userNotFound.firstChild.remove();
    }
    output.innerHTML = `<div class="user-not-found">
<p>${err}</p>
</div>`
};