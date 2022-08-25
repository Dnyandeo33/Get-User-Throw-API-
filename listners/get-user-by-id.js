import { USER_INPUT, MOUSE_EVENT, GET_USER_BY_ID } from "../data/constant.js";
import { getUserById } from "../handler/get-user-by-id.js"

export const userInputId = () => {
    document.getElementById(GET_USER_BY_ID).addEventListener(MOUSE_EVENT, (event) => {
        event.preventDefault();
        const userInput = document.getElementById(USER_INPUT);
            getUserById(userInput.value);
            userInput.value = '';
        });
}

