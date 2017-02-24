import * as angular from 'angular';
import 'angular-local-storage'

class FooService {
  constructor(private localStorageService: angular.local.storage.ILocalStorageServiceProvider) {

  }
}
