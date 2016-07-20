import { bootstrap }    from '@angular/platform-browser-dynamic';
import { SecurityService } from './services/SecurityService';
import { Configuration } from './app.constants';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [SecurityService,
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration
]);
