import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SocialMediaService} from "../../service/social-media.service";
import {
  addSocialMedia,
  addSocialMediaSucces,
  loadSocialMedia,
  loadSocialMediaFail,
  loadSocialMediaSucces
} from "./social-media-action";
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";


@Injectable()
export class SocialMediaEffects {
  constructor(private action$: Actions, private socialMediaService: SocialMediaService) {
  }


  loadSocialMediaEffect = createEffect(() =>
    this.action$.pipe(
      ofType(loadSocialMedia),
      exhaustMap(() => {
        return this.socialMediaService.readAll().pipe(
          map((data) => {
            return loadSocialMediaSucces({list: data})
          }),
          catchError((_error) => of(loadSocialMediaFail({errorMessage: _error.message})))
        )
      })
    )
  )



  addSocialMedia = createEffect(() =>
    this.action$.pipe(
      ofType(addSocialMedia),
      //istek basariliysa social media account eklenir, eger degilse hata atar.
      switchMap((action) => {
        return this.socialMediaService.create(action.data).pipe(
          switchMap((data) => {
            return of(addSocialMediaSucces(
              { data: action.data }))
          }),
          catchError((_error) => of())
        )
        })
      )
  )

}
