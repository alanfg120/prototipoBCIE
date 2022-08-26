import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function MSALIntanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
   auth: {
    clientId: "",
    redirectUri: ""
   }
  })
}  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALIntanceFactory 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
