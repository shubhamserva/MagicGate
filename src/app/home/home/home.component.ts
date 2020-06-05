import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AmazonLink()
  {
    console.log("Amazon clicked");
    window.open("http://amzn.to/2lXaZvi");
  }
  FlipkartLink()
  {
    console.log("Amazon clicked");
    window.open("https://dl.flipkart.com/dl/?affid=shubhamse5");
  }
  MyntraLink()
  {
    console.log("Amazon clicked");
    window.open("https://linksredirect.com/?cid=25155&source=linkkit&url=https%3A%2F%2Fwww.myntra.com%2F");
  }
  PaytmLink()
  {
    console.log("Amazon clicked");
    window.open("https://linksredirect.com/?cid=25155&source=linkkit&url=https%3A%2F%2Fpaytm.com");
  }
  BookMyShowLink()
  {
    console.log("Amazon clicked");
    window.open("https://linksredirect.com/?cid=25155&source=linkkit&url=https%3A%2F%2Fin.bookmyshow.com%2F");
  }
  NykaaLink()
  {
    console.log("Amazon clicked");
    window.open("https://linksredirect.com/?cid=25155&source=linkkit&url=https%3A%2F%2Fwww.nykaafashion.com%2F");
  }


}
