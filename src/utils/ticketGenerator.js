export const generateTicket = () => `WHC-${Math.floor(10000 + Math.random() * 90000).toString()}`;
export const checkCode = (code = '') => code.startsWith('WHC-');