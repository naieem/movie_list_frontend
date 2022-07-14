export interface IAuth {
    login(payload: IloginPayload): Promise<any>;
    getLoggedInUserInfo():void
}
export interface IloginPayload {
    email: String;
    password: String;
}