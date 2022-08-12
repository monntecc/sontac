import {Component, Input, ViewEncapsulation} from "@angular/core";
import SwiperCore, {Pagination} from "swiper";
import {MovieModel} from "../../models/movie.model";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() container: MovieModel[] = [];
}
