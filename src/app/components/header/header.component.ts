import {Component, OnInit} from '@angular/core';
import {TMDBService} from "../../services/api/tmdb.service";
import {MultiSearchModel} from "../../models/multi-search.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  responsiveOpened: boolean = false;
  searchOpened: boolean = false;
  discoverOpened: boolean = false;
  contactFormOpened: boolean = false;

  searchContainer!: MultiSearchModel;

  onClickTimeout(value: any) {
    setTimeout(() => {
      value
    }, 3000);
  }

  onChangeMode() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }

    const themeToggleDarkIcon: any = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon: any = document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
    }

    const themeToggleBtn: any = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }

    });
  }

  query: string = '';
  page: number = 1;

  constructor(private http: TMDBService) {
  }

  ngOnInit(): void {
    this.onChangeMode();
  }

  onTyping() {
      this.initializeMultiSearch();
  }

  initializeMultiSearch() {
    this.http.getMultiSearch(this.query, this.page).subscribe(search => {
      this.searchContainer = search;
    });
  }

}
