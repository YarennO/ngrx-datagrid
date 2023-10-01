import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SocialMediaModel} from "../../model/SocialMediaDto";


const getSocialMediaState = createFeatureSelector<SocialMediaModel>('socialMedia')

export const getSocialMediaList = createSelector(getSocialMediaState, (state) => {
  return state.list
})

export const getSocialMedia = createSelector(getSocialMediaState, (state) => {
  return state.socialMediaObj;
})
