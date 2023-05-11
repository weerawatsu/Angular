import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , catchError, throwError } from 'rxjs';
import { MovieData } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://638492184ce192ac605bc39a.mockapi.io/Movie';

  constructor(private http: HttpClient) { }

  getMovieDatabyId(id: string): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.apiUrl}/${id}`);
  }
}
