import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class StorageService {

  setStorageValue<T>(key: string, value: T) {
    const old = localStorage[key];
    localStorage[key] = JSON.stringify(value);
    this.fireUpdate(key, localStorage[key], old);
  }

  clearStorageValue(key: string) {
    const old = localStorage[key];
    delete localStorage[key];
    this.fireUpdate(key, undefined, old);
  }

  private fireUpdate(key: string, newValue: any, oldValue: any) {
    const event = new StorageEvent('storage', {
      key,
      oldValue,
      newValue,
      storageArea: localStorage
    });
    window.dispatchEvent(event);
  }

  getStorageValue<T>(key: string, defaultValue?: never): T | undefined;
  getStorageValue<T>(key: string, defaultValue: T): T;
  getStorageValue<T>(key: string, defaultValue?: T): T | undefined {
    try {
      return JSON.parse(localStorage[key]);
    } catch(e) {
      return defaultValue;
    }
  }

  subscribeStorageValue<T>(key: string, defaultValue?: never): Observable<T | undefined>;
  subscribeStorageValue<T>(key: string, defaultValue: T): Observable<T>;
  subscribeStorageValue<T>(key: string, defaultValue?: T): Observable<T | undefined> {
    return new Observable<T>(observer => {
      observer.next(this.getStorageValue<T>(key, defaultValue!));
      const handler = (event: StorageEvent) => {
        if (event.storageArea !== localStorage || event.key != key) return;
        observer.next(this.getStorageValue<T>(key, defaultValue!));
      };

      window.addEventListener('storage', handler);
      return {
        unsubscribe: () => window.removeEventListener('storage', handler),
      };
    });
  }

}
