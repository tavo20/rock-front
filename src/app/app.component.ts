import { Component } from '@angular/core';
import { menu } from '../app/utils/menu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  menuItems = menu

  title = 'casa-de-moda';
  constructor( ) { }

  ngOnInit() {
    // this.mainService.get('http://localhost:8085/api/user/all').subscribe({
    //   next: (response) => {
    //     console.log(response)
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }

    // })

    let user = {
      name: 'Gustavo Jimenez',
      email: 'gustavojilie@gmail.com',
      password: 'orito123',
      role:  'ADMIN',
      phoneNumber: 3214757821,
      city: 'Bogotá',
      country: 'Colombia',
    }

    // this.mainService.post('http://localhost:8085/api/auth/signup',user ).subscribe({
    //   next: (response) => {
    //     console.log(response)
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   },
    //   complete: () => {
    //     console.log('complete')
    //   }
    // })

  }
}
