import { configureStore} from "@reduxjs/toolkit";
import articleCardSlice from './articleCard'

export const store= configureStore({
    reducer:{
        articleCard:articleCardSlice
    }
})