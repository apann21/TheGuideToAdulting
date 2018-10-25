import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { BrowsePage } from '../pages/browse/browse';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FinancialPage } from '../pages/financial/financial';
import { HealthPage } from '../pages/health/health';
import { CookPage } from '../pages/cook/cook';
import { EmergencyPage } from '../pages/emergency/emergency';
import { EverydayPage } from '../pages/everyday/everyday';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    BrowsePage,
    FavoritesPage,
    AboutPage,
    FinancialPage,
    HealthPage,
    CookPage,
    EmergencyPage,
    EverydayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    BrowsePage,
    FavoritesPage,
    AboutPage,
    FinancialPage,
    HealthPage,
    CookPage,
    EmergencyPage,
    EverydayPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
