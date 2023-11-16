import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private alertsService: AlertsService,
    private authService: AuthService,
    public router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user')) {
			this.router.navigate(['/users/view-users']);
		}
  }

  /**
	* We build the form
	*/
	public buildForm() {
		this.loginForm = this.formBuilder.group({
			email: ["", [Validators.required]],
			password: ["", Validators.required],
		});
	}

  public onLogin(event: Event) {
    console.log('onLogin')
    event.preventDefault();

    console.log('this.loginForm.value', this.loginForm.value);

    if (!this.loginForm.valid) {
      // this.alertsService.info({ 
      //   message: 'Por favor llena todos los campos', 
      //   title: '', 
      //   config: { duration: 3000  }
      // });
      alert('Por favor llena todos los campos')
      return
    }

    let { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (response: any) => {
        console.log('response', response);

        if(response._id) {
          this.authService.saveTokenUser(response.token, response);
          this.router.navigateByUrl('/users/view-users');
        } else {
          alert(response);
        }



      }, error: (error) => {
        console.log('error', error);
        if(error.status === 400) {
          this.alertsService.info({
            message: error.error, 
            title: '', 
           config: { duration: 3000 } 
        });
        }
      }
    })
  }

}
