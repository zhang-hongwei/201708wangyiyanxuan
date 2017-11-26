import {get} from "./index"
export function fetchSliders() {
    return get("/sliders");
}
export function fetchHome() {
    return get("/home");
}
