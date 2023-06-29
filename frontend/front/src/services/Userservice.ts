import axios from "axios";
import User from "../../../../backend/functions/src/models/User";

export async function getUsers() {
    const response = await axios.get('http://localhost:3000/Users').then(response => response.data);
}
export async function addUser(user: User) {
    const response = await axios.post('http://127.0.0.1:5001/musico-80127/us-central1/api/users', user).then(response => response.data);
}