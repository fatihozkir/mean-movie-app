import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface CoinInfoModel {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
  column8: string;
  column9: string;
  column10: string;
  column11: string;
  column12: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
  onLogin() {
    if (!this.loginForm.valid) return;
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    this.isLoading = false;
  }
  //#region  Binance
  // coins = ['BTC'];
  // types = ['1d', '2h', '4h', '1m'];
  // private request(coin: string, type: string) {
  //   const url = `https://www.binance.com/api/v3/klines?symbol=${coin}USDT&interval=${type}`;

  //   this.httpClient
  //     .get<any[]>(url)
  //     .pipe(
  //       map((resData) => {
  //         return resData.map((item) => {
  //           const modelItem: CoinInfoModel = {
  //             column1: item[0],
  //             column2: item[1],
  //             column3: item[2],
  //             column4: item[3],
  //             column5: item[4],
  //             column6: item[5],
  //             column7: item[6],
  //             column8: item[7],
  //             column9: item[8],
  //             column10: item[9],
  //             column11: item[10],
  //             column12: item[11],
  //           };
  //           return modelItem;
  //         });
  //       })
  //     )
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  // onTypeClick(type: string) {
  //   // setInterval(() => {
  //   //   this.coins.forEach((coin) => {
  //   //     this.request(coin, type);
  //   //   });
  //   // }, 2000);

  //   this.coins.forEach((coin) => {
  //     this.request(coin, type);
  //   });
  // }
  //#endregion
}
