import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Registration {
	firstName: string;
	middleName?: string;
	lastName?: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

const initialState: Registration = {
	firstName: "",
	middleName: "",
	lastName: "",
	email: "Hai",
	password: "",
	passwordConfirm: "",
};

export const RegistrationReducer = createSlice({
	name: "registration",
	initialState,
	reducers: {
		firstName: (state, action: PayloadAction<string>) => {
			state.firstName += action.payload;
		},
		middleName: (state, action: PayloadAction) => {
			state.middleName ? (state.middleName += action.payload) : null;
		},
		lastName: (state, action: PayloadAction) => {
			state.lastName ? (state.lastName += action.payload) : null;
		},
		email: (state, action: PayloadAction) => {
			state.email += action.payload;
		},
		password: (state, action: PayloadAction) => {
			state.password += action.payload;
		},
		passwordConfir: (state, action: PayloadAction) => {
			state.passwordConfirm += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addDefaultCase((state, action) => {});
	},
});

export const {
	firstName,
	middleName,
	lastName,
	email,
	password,
	passwordConfir,
} = RegistrationReducer.actions;

export const registrationSelector = (state: RootState) => state;

export default RegistrationReducer.reducer;
