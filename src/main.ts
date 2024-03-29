import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var jQuery:any;
declare var $:any;

if (environment.production) {
  enableProdMode();
}
/*Author: Hernan Mitchel Camacho Valdez*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
