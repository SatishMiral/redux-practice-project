import { createSlice } from "@reduxjs/toolkit";

const users = JSON.parse(localStorage.getItem("users"));

const saveUsersToLocal = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
};

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        usersArr: users
    },
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const foundUser = state.usersArr.find(user => user.email === email && user.password === password);

            if (foundUser) {
                state.user = foundUser;
                localStorage.setItem("user", JSON.stringify(foundUser));
            } else {
                alert("Invalid Credentials");
            }
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
        addUser: (state, action) => {
            const { fullName, email, password } = action.payload;

            if (state.usersArr.find(user => user.email === email)) {
                alert("User already exists!");
                return;
            }            

            const newUser = { email, password, role: "user" };
            state.usersArr.push(newUser);
            saveUsersToLocal(state.usersArr);

            alert(`Account created for ${fullName}`);
        }
    }
});

export const { login, logout, addUser } = userSlice.actions;
export default userSlice.reducer;