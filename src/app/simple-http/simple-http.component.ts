import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  makeRequest() {
    this.loading = true;
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }

  makePost() {
    this.loading = true;
    this.http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify({
      body: 'bar',
      title: 'foo',
      userId: 1
    })).subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }

  makeDelete() {
    this.loading = true;
    this.http.delete("https://jsonplaceholder.typicode.com/posts/1").subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }
}
