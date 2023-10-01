import {createReducer, on} from "@ngrx/store";
import {SocialMediaState} from "./social-media-state";
import {addSocialMediaSucces, loadSocialMediaFail, loadSocialMediaSucces} from "./social-media-action";


const _socialMediaReducer = createReducer(SocialMediaState,

// @ts-ignore
  on(loadSocialMediaSucces, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errorMessage: ''
    }
  }),

// @ts-ignore
  on(loadSocialMediaFail, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage
    }
  }),
// @ts-ignore
  on(addSocialMediaSucces, (state, action) => {
    const newSocialMedia = { ...action.data };
    return {
      ...state,
      list: [...state.list, newSocialMedia],
      errormessage: ''
    }
  }),

  )
export function SocialMediaReducer(state: any, action: any) {
  return _socialMediaReducer(state, action);
}
