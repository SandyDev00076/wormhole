import { store } from "../global.state";

export const setTicket = (code) => store.dispatch({ type: 'SET_TCKT', payload: code });