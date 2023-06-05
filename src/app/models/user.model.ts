import { Role } from './role.enum';

export class User{

    idUser: number | undefined;
    name: string ="";
    
    surname: string ="";
    password: string ="";
    email: string ="";
    activated: boolean;
    firstUsage: boolean;
    createdTime: string = "";
    token: string ="";
    role: Role;
    lastUpdate: string = "";


    constructor(idUser?: number, role?:Role, name?: string, surname?: string, password?: 
        string,email?: string, createdTime?: string, activated?: boolean,lastUpdate?:string){
        this.idUser = idUser;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.activated = activated;
        this.email = email;
        this.createdTime = createdTime;
        this.role = role;
        this.lastUpdate = lastUpdate;
        
    }
}