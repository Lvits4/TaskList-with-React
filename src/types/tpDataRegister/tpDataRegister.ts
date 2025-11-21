

export type tpDataRegister = {
    name: string,
    email: string,
    password: string,
    id: number
    notes: Object[]
}

export type tpValidateRegister = {
    name: boolean,
    email: boolean,
    password: boolean,
}


export type FormValues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
