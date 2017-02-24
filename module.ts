import * as importedAngular from 'angular';
import 'angular-local-storage'

class FooService {
  constructor(private localStorageService: importedAngular.local.storage.ILocalStorageServiceProvider) {

  }
}
