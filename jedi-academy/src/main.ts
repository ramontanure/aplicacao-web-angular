import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*O bootstrap que seria o ponto de inicialização carrega o arquivo main
Que carrega o modulo principal o modulo principal vai dizer qual é o componente de bootstrap e o angular vai pegar o template de componente de bootstrap e colocar exatamente no conteudo que tem nessa pagina
*/
