import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-change-password-init',
  templateUrl: './change-password-init.component.html',
  styleUrls: ['./change-password-init.component.scss'],
})
export class ChangePasswordInitComponent implements OnInit {
  cpi: FormGroup;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() dataEvent = new EventEmitter<string>();
  // eslint-disable-next-line @typescript-eslint/member-ordering

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private readonly router: Router) { }

  ngOnInit() {
    this.cpi = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
    });
  }
  public sendOtp(){
    this.authService.sendOtp(this.cpi.value).subscribe(
      (data: any) => {
        alert('init-2'+ data.message);
        if(data.obj===true){
          this.router.navigate(['/auth/change-password/finish']).then(r => console.log(r));
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }

  onSubmit() {
    this.sendOtp();
    window.sessionStorage.setItem('email',this.cpi.value.email);
  }

}
