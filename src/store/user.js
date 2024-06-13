import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const signUpWithEmail = createAsyncThunk(
    'auth/signUpWithEmail',
    async ({ email, password }) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
);

export const signInWithEmail = createAsyncThunk(
    'auth/signInWithEmail',
    async ({ email, password }) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
);

export const signOutUser = createAsyncThunk('auth/signOutUser', async () => {
    await signOut(auth);
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
          state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(signUpWithEmail.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(signUpWithEmail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
          })
          .addCase(signUpWithEmail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(signInWithEmail.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(signInWithEmail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
          })
          .addCase(signInWithEmail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(signOutUser.fulfilled, (state) => {
            state.status = 'idle';
            state.user = null;
          });
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;