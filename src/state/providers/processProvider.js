import { store } from "../global.state";

export const getProcessData = (key) => {
    const processData = store.getState().process;
    switch(key) {
        case 'ticket': return processData.code;
        default: return null;
    }
}