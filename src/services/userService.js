import api from "./api";

async function signUp(signUpData) {
    const response = await api.post("/sign-up", signUpData);
    return response.data
  }
  
async function signIn(signInData) {
    const response = await api.post("/sign-in", signInData);
    return response.data
}
const userService = {
    signUp,
    signIn
}

export default userService;

