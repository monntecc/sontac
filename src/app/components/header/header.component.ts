import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TMDBService } from '../../services/api/tmdb.service';
import { MultiSearchModel } from '../../models/multi-search.model';
import { TranslateService } from '@ngx-translate/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  responsiveOpened: boolean = false;
  searchOpened: boolean = false;
  discoverOpened: boolean = false;
  contactFormOpened: boolean = false;
  isLoaded: boolean = false;
  @ViewChild('searchInput', { static: true }) searchInput:
    | ElementRef
    | undefined;

  searchContainer!: MultiSearchModel;

  onClickTimeout(value: boolean) {
    setTimeout(() => value, 3000);
  }

  stageLoading() {
    this.isLoaded = false;
    window.onload = () => (this.isLoaded = true);
  }

  onChangeMode() {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const themeToggleDarkIcon: HTMLElement | null = document.getElementById(
      'theme-toggle-dark-icon',
    );
    const themeToggleLightIcon: HTMLElement | null = document.getElementById(
      'theme-toggle-light-icon',
    );

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleLightIcon?.classList.remove('hidden');
    } else {
      themeToggleDarkIcon?.classList.remove('hidden');
    }

    const themeToggleBtn: HTMLElement | null =
      document.getElementById('theme-toggle');

    themeToggleBtn?.addEventListener('click', function () {
      // toggle icons inside button
      themeToggleDarkIcon?.classList.toggle('hidden');
      themeToggleLightIcon?.classList.toggle('hidden');

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

  page: number = 1;

  constructor(private http: TMDBService) {}

  ngAfterViewInit(): void {
    fromEvent(this.searchInput?.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap((): void => {
          const keyword = this.searchInput?.nativeElement.value;
          this.initializeMultiSearch(keyword, this.page);
        }),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.onChangeMode();
    this.stageLoading();
  }

  initializeMultiSearch(keyword: string, page: number): void {
    this.http.getMultiSearch(keyword, page).subscribe((search) => {
      this.searchContainer = search;
    });
  }
}
