import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  languageMenuOpened: boolean = false;
  discordClicked: boolean = false;
  discord = 'nylestroke#9372';

  language= localStorage['language'];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pl', 'ru']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.translate.use(localStorage['language']);
  }

  useLanguage(language: string) {
    localStorage['language'] = language;
    this.language = language;
    this.translate.use(language);
    this.languageMenuOpened = false;
    window.location.reload();
  }

}
