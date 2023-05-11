import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MovieData } from '../movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  movieId : string = '';
  Movieid : string = '';
  MovieType : string = '';
  MoviePrice : Number | undefined;
  MovieName : string = '';
  form : any;
  public movieData : MovieData | undefined;

  constructor(
    private formBuilder : FormBuilder) {}

  ngOnInit(): void {
      this.form = this.formBuilder.group({id: ['']});
  }

  submit(): void {
      this.movieId = this.form.get('id') ?. value;
  }

  GetMovieData(data : MovieData): void {
      this.movieData = data;
      this.Movieid = this.movieData.Movieid;
      this.MovieType = this.movieData.TypeMovie;
      this.MoviePrice = this.movieData.MoviePrice;
      this.MovieName = this.movieData.NameMovie ?? '';
  }
}
