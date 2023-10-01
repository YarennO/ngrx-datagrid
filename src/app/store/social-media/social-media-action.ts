import {createAction, props} from "@ngrx/store";
import {SocialMedia} from "../../model/SocialMediaDto";

//default data icin
export const LOAD_SOCIAL_MEDIA = '[Social Media Page] load social media';
export const LOAD_SOCIAL_MEDIA_SUCCES = '[Social Media Page] load social media succes';
export const LOAD_SOCIAL_MEDIA_FAIL = '[Social Media Page] load social media fail';

//social media hesabi eklemek icin

export const ADD_SOCIAL_MEDIA = '[Add Social Media Page] load social media';
export const ADD_SOCIAL_MEDIA_SUCCES = '[Add Social Media Page] load social media succes';
export const ADD_SOCIAL_MEDIA_FAIL = '[Add Social Media Page] load social media fail';



export const loadSocialMedia = createAction(LOAD_SOCIAL_MEDIA)
export const loadSocialMediaSucces = createAction(LOAD_SOCIAL_MEDIA_SUCCES, props<{list: SocialMedia[]}>())
export const loadSocialMediaFail = createAction(LOAD_SOCIAL_MEDIA_FAIL, props<{errorMessage: string}>())


export const addSocialMedia = createAction(ADD_SOCIAL_MEDIA, props<{data: SocialMedia}>())
export const addSocialMediaSucces = createAction(ADD_SOCIAL_MEDIA_SUCCES, props<{data: SocialMedia}>())
export const addSocialMediaFail = createAction(ADD_SOCIAL_MEDIA_FAIL, props<{errorMessage: string}>())
