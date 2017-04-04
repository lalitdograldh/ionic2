import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login-page';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { PostDetail } from '../pages/post-detail/post-detail';
import { FacebookModule } from 'ng2-facebook-sdk';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PostDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp),FacebookModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PostDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
