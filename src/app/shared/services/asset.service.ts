import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Asset } from '../models/asset.model';
import { mockAssetHttpResponse, mockAssets } from './asset.test';
import { catchError, delay, tap } from 'rxjs/operators';
import { getRandomInt } from '../functions';

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  constructor() {
  }

  getAll(): Observable<any> {
    return of(mockAssetHttpResponse).pipe(
      delay(getRandomInt(1000) + 3000), // fake random http delay
      tap(() => { // a small chance for the data fetch to error
        if (getRandomInt(10) % 10 === 0) {
          console.error('HTTP Error: Failed to fetch assets.');
          throw Error('Http error');
        } 
      }),
      catchError(err => {
        return throwError(() => {
          err
          console.log('ERRRRRRRR', err)
        });
      })
      // tap(assets => {
      //   console.log('Assets fetched successfully:', assets); 
      // })
    );
  }
}