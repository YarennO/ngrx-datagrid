import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SocialMedia} from "../../model/SocialMediaDto";
import * as uuid from 'uuid';
import {addSocialMedia} from "../../store/social-media/social-media-action";
import { Store } from '@ngrx/store';
import {DynamicDialogRef} from "primeng/dynamicdialog";
@Component({
  selector: 'app-add-social-media',
  templateUrl: './add-social-media.component.html',
  styleUrls: ['./add-social-media.component.scss']
})
export class AddSocialMediaComponent {

  socialMediaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store, private dynamicDialogRef: DynamicDialogRef) {
    this.socialMediaForm = formBuilder.group({
        name: [null, Validators.required],
        link: [null, Validators.required],
        description: [null, Validators.required],

    })
  }

  save() {
    if (this.socialMediaForm.valid) {
      const object: SocialMedia = {
        id: uuid.v4(),
        link: this.socialMediaForm.get('link')?.value,
        name: this.socialMediaForm.get('name')?.value,
        description: this.socialMediaForm.get('description')?.value
      }
        this.store.dispatch(addSocialMedia({ data: object }))
        //todo: update bak
        // this.store.dispatch(updateSocialMedia({ data: object }))

    }
  }


  cancel() {
    this.dynamicDialogRef.close()
  }
}
