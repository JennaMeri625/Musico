import { ObjectId } from 'mongodb';

export default interface User {
    _id?: ObjectId;
    fullName: string;
    phoneNumber: string;
    zipCode: string;
    email: string;
    userName: string;
    password: string;
    musician: boolean;
}