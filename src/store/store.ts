import RegistrationReducer from "./registrationReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
	registration: RegistrationReducer,
};

export const store = configureStore({
	reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
