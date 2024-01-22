import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type filmView = {
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
    Type: string
}

export type film = {
    Poster: string,
    Title: string,
    Year: string,
    Genre: string,
    Runtime: string,
    Director: string,
    Actors: string,
    imdbRating: string

}
type searchState = {
    searchFildValue: string,
    key: string,
    filmList: filmView[],
    loading: boolean,
    favorites: filmView[],
    filmCard?: film
}

const initialState: searchState = {
    searchFildValue: '',
    key: '64405bd2',
    filmList: [],
    loading: false,
    favorites: [],
}

export const fetchFilmList = createAsyncThunk(
    'films/fetch',
    (filmName: string) => {
        const response = fetch(`https://www.omdbapi.com/?apikey=${initialState.key}&s=${filmName}`)
            .then(response => response.json())
            .then(data => data.Search)
        return response
    }
)

export const fetchFilm = createAsyncThunk(
    'film/fetch',
    (filmId: string) => {
        const response = fetch(`https://www.omdbapi.com/?apikey=${initialState.key}&i=${filmId}`)
            .then(response => response.json())
            .then(data => data)
        return response
    }
)

export const slice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setFieldValue: (state, action: PayloadAction<string>) => {
            state.searchFildValue = action.payload
        },
        changeFavorites: (state, action: PayloadAction<filmView[]>) => {
            state.favorites = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchFilmList.fulfilled, (state, action) => {
            state.filmList = action.payload;
            state.loading = false;
        })

        builder.addCase(fetchFilmList.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchFilmList.rejected, (state) => {
            state.loading = false;
            state.filmList = [];
            alert('Error! Try again')
        })

        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            state.filmCard = action.payload
            state.loading = false;
        })

        builder.addCase(fetchFilm.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchFilm.rejected, (state) => {
            state.loading = false;
            state.filmCard = undefined
            alert('Error! Try again')
        })
    }
})


export const { setFieldValue, changeFavorites } = slice.actions;
export default slice.reducer

