import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppDataService extends Service {
  @tracked isCounterDisabled = false;

  @action
  toggleCounterState() {
    this.isCounterDisabled = !this.isCounterDisabled;
  }
}
