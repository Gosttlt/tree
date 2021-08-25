import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { recursedFile } from "utils/recursedFile";

export const fetchFiles = createAsyncThunk(
    'fileTree/fetchFiles',
    async (_, { rejectWithValue }) => {
        try {
            const todos = await fetch(`http://164.90.161.80:3000/api/content`)
            if (!todos.ok) {
                throw new Error('Server error!')
            }
            const json = await todos.json()
            return json
        }
        catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const fetchChildFiles = createAsyncThunk(
    'fileTree/fetchChildFiles',
    async (id = '', { rejectWithValue }) => {
        try {
            const todos = await fetch(`http://164.90.161.80:3000/api/content?dirId=${id}`)
            if (!todos.ok) {
                throw new Error('Server error!')
            }
            const json = await todos.json()
            return json
        }
        catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState: {
        isLoading: true,
        error: '',
        files: {
            id: 0,
            title: "root",
            children: [
                {
                    id: 20000,
                    title: "archives",
                    children: [],
                },
                {
                    id: 30000,
                    title: "books",
                    children: [],
                },
                {
                    id: 1,
                    title: "empty directory",
                    children: [],
                },
                {
                    id: 40000,
                    title: "images",
                    children: [],
                },
            ],
        },
    },
    reducers: {
        // removeTodos(state) {
        //     state.todos.pop()
        // }
    },
    extraReducers: {
        [fetchFiles.pending]: (state) => {
            state.loadingStatus = true
            state.error = ''
        },
        [fetchFiles.fulfilled]: (state, action) => {
            state.files = action.payload
            state.isLoading = false
        },
        [fetchFiles.rejected]: (state, action) => {
            state.loadingStatus = false
            state.error = action.payload
        },
        [fetchChildFiles.pending]: (state) => {
            state.loadingStatus = true
            state.error = ''
        },
        [fetchChildFiles.fulfilled]: (state, action) => {
            recursedFile(state.files, action.payload)
            state.isLoading = false
        },
        [fetchChildFiles.rejected]: (state, action) => {
            state.loadingStatus = false
            state.error = action.payload
        },
    }
})


export default fileTreeSlice.reducer
