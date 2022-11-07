export class AppUser {
    id: number = 0;
    username: string = "";
    email: string = "";
}

export class AuthUser {
    username: string = "";
    password: string = "";
}

export class UserToken {
    username: string = "";
    token: string = "";
}

export class RegisterUser {
    username: string = "";
    password: string = "";
    email: string = "";
    dateOfBirth: Date = new Date();
    knowAs: string = "";
    gender: string = "";
    introduction: string = "";
    city: string = "";
    avatar: string = "";
}