import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {AddSocialMediaComponent} from "../add-social-media/add-social-media.component";
import {SocialMedia} from "../../model/SocialMediaDto";
import {Store} from "@ngrx/store";
import {loadSocialMedia} from "../../store/social-media/social-media-action";
import {getSocialMediaList} from "../../store/social-media/social-media-selector";

@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss'],
  providers: [DialogService]
})
export class SocialMediaListComponent implements OnInit {
  readonly allowedPageSizes = [4, 10, 'all'];

  socialMediaList!: SocialMedia[]
  filteredData: SocialMedia[] = [];
  searchText: string = '';

  //datagrid ayarlari
  displayMode = 'compact';
  showPageSizeSelector = true;
  showNavButtons = true;
  columns: ({ field: string; caption: string, allowSorting: boolean })[] = [
    {field: 'link', caption: 'Sosyal Medya Linki', allowSorting: true},
    {field: 'name', caption: 'Sosyal Medya Adı', allowSorting: true},
    {field: 'description', caption: 'Açıklama', allowSorting: false}
  ];

  constructor(private dialogService:DialogService, private store: Store ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadSocialMedia());
    this.store.select(getSocialMediaList).subscribe(item => {
      console.log(item)
      this.socialMediaList = item;
    });  }

  openAddSocialMediaDialog() {
    this.dialogService.open(AddSocialMediaComponent, {
      width: '50%',
      height: '50%',
    }).onClose.subscribe()
  }

  /**bu fonksiyon ile arama islemi yapiyoruz eger search icin bir input girilmediyse bütün datayi gösterir.
   * arama islemi hem linkte hem isimde hem de aciklama kismi dahil edilerek yapilir.
   */
  filterData(searchText: string): void {

    if (!searchText) {
      this.filteredData = this.socialMediaList;
    } else {
      this.filteredData = this.socialMediaList?.filter(item =>
        item.link.includes(searchText) ||
        item.name.includes(searchText) ||
        item.description.includes(searchText)
      );
    }
  }




}
