import { GET_USER, MOUSE_EVENT} from "../data/constant.js";
import { getInformation } from "../handler/get-user.js";

export const getUser = () =>{
    document.getElementById(GET_USER).addEventListener(MOUSE_EVENT, getInformation);
}
