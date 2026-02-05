export type User = {
    id: string;
    email: string;
    role: 'ADMIN' | 'OPERATOR';
}

export type LoginResponse = {
    accessToken: string;
}