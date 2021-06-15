import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  restaurantList: Restaurant[] = [];

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): any {
    this.service.getAllRestaurants().subscribe(
      (response: any) => {
        response.businesses.forEach((b: any) => {
          let restaurant: Restaurant = {
            name: b.name,
            address: b.location.address1,
            city: b.location.city,
            state: b.location.state,
            zip: b.location.zip_code,
            openNow: b.is_closed,
            type: b.categories,
            img: b.image_url
          }
          this.restaurantList.push(restaurant);
        })
      }
    );
  }
}