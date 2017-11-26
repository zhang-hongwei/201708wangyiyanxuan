import { get } from "./index"

export function getList() {
    return get("/list");
}