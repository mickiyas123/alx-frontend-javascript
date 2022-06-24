interface Teacher {
    readonly firstName: String;
    readonly lastName: String;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}