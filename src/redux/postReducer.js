import { CREATE_POST, FETCH_POST, DELETE_POST } from "./types";
const initialState = {
  posts: [],
  fetctPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    case FETCH_POST:
      return {
        ...state,
        fetctPosts: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts].filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
