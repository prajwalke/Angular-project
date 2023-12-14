import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  searchItem: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnIt(): void {
    this.route.params.subscribe((parms) => {
      if (parms['searchItem']) this.searchItem = parms['searchItem'];
    });
  }
  search(): void {
    if (this.searchItem)
     this.router.navigateByUrl('/search/' + this.searchItem);
  }
}
