type GenerateId = () => string;
export const generateId: GenerateId = () => {
    return Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
};