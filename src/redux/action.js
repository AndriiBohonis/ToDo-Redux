import {
  CREATE_POST,
  FETCH_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  DELETE_POST,
} from "./types";

export function createPost(posts) {
  return {
    type: CREATE_POST,
    payload: posts,
  };
}
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function deletePost(posts) {
  return {
    type: DELETE_POST,
    payload: posts,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function showAlert(text) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
export function fetctPosts() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const respons = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=7"
      );
      const json = await respons.json();
      setTimeout(() => {
        dispatch({ type: FETCH_POST, payload: json });
        dispatch(hideLoader());
      }, 1000);
    } catch (err) {
      dispatch(showAlert("Щось пішло не так!!!"));
      dispatch(hideLoader());
    }
  };
}
