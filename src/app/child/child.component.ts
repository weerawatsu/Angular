import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { MovieData } from '../movie.model';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  @Input()movieId : string | undefined;
  @Output() movieData: EventEmitter<MovieData> = new EventEmitter<MovieData>();
  public movie_Data: MovieData | undefined;

  constructor(
    private movieService : MovieService,
    ) {}

  ngOnInit(){
    
  }

  GetMovieById(){
    if (this.movieId) {
      this.movieService.getMovieDatabyId(this.movieId).subscribe(res => {
        this.movie_Data = res;
        this.movieData.emit(this.movie_Data);
      });
    }
  }
}
