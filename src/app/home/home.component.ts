import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
onSubmit($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  foods: Foods[] = [];
condition: any;
res_cnt: any;
res_list: any;
prevText: any;
searchValue: any;


  constructor(private fs: FoodService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter((food) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.foods = this.fs.getAll();
    });

  }
}
