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

  public typeViewPassword = 'password';


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
    event.preventDefault();
    if (!this.loginForm.valid) {
      alert('Por favor llena todos los campos')
      return
    }

    let { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (response: any) => {
        console.log('response', response);

        if(response.success) {
          const data = response.data;
          this.authService.saveTokenUser(data.token, response);
          this.router.navigateByUrl('/sensors/home-sensors');
        } else {
          alert('Ocurrio un error. Intenta mas tarde');
        }

      }, error: (error) => {
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


  public onViewPassword() {
    if(this.typeViewPassword === 'password') {
      this.typeViewPassword = 'text';
      return
    }

    this.typeViewPassword = 'password';
  }

}
