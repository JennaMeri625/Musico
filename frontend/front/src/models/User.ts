import { ObjectId} from 'mongodb';

export default interface User {
    _id?: ObjectId;
    fullName: string;
    phoneNumber: number;
    zipCode: number;
    email: string;
    userName: string;
    password: string;
}