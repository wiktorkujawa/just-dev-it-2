import { createAction, props } from '@ngrx/store';
import { Post, addPostModel } from '../model/post';

export const loadPosts = createAction(
  'LOAD_POSTS'
);

export const loadPostsSuccess = createAction(
  'LOAD_POSTS_SUCCESS',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  'LOAD_POSTS_FAILURE',
  props<{ error: any }>()
);

export const addPost = createAction(
  'ADD_POST',
  props<{ post: addPostModel }>()
);

export const addPostSuccess = createAction(
  'ADD_POST_SUCCESS',
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  'ADD_POST_FAILURE',
  props<{ error: any }>()
);