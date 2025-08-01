import { createSlice } from "@reduxjs/toolkit";

const articleInitialState = {
  notesCard: [
    {
      id: 1,
      title: "react-useState",
      excerpt: "",
      author: "HaoWhite",
      date: "2023-07-15",
      readTime: "8分钟阅读",
      to: "",
    },
    {
      id: 2,
      title: "react-useEffect",
      excerpt: "",
      author: "HaoWhite",
      date: "2023-07-15",
      readTime: "8分钟阅读",
      to: "",
    },
    {
      id: 3,
      title: "react-useContext",
      excerpt: "",
      author: "HaoWhite",
      date: "2023-07-15",
      readTime: "8分钟阅读",
      to: "",
    },
  ],
  currentArticle: null,
};

const articleCardSlice = createSlice({
  name: "articleCard",
  initialState: articleInitialState,
  reducers: {
    setCurrentArticle(state, action) {
      state.currentArticle = action.payload;
    },
    clearCurrentArticle(state) {
      state.currentArticle = null;
    },
  },
});



// eslint-disable-next-line react-refresh/only-export-components
export const{setCurrentArticle,clearCurrentArticle}=articleCardSlice.actions

export const SelectNotesCard=(state)=>state.articleCard.notesCard
export const SelectCurrentArticle=(state)=>state.articleCard.currentArticle



export default articleCardSlice.reducer;
