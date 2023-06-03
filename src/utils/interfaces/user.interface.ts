import {IRole} from "@/utils/interfaces/role.interface";

export interface IUser {
    username: string
    email: string
    roles: IRole[]
}