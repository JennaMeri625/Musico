import axios from "axios";
import User from "../models/User";

export async function getUsers() {
    const response = await axios.get('http://localhost:3000/LogIn').then(response => response.data);
}
export async function addUser(user: User) {
    const response = await axios.post('http://localhost:3000/LogIn', user).then(response => response.data);
}