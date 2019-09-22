import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CounterComponent extends Component {
  @tracked
  count = 0;

  @service
  appData;

  get isMaxCountReached() {
    return this.count === this.args.maxCount;
  }

  get isMinCountReached() {
    return this.count === 0;
  }

  @action
  increment() {
    !this.isMaxCountReached && this.count++;
  }

  @action
  decrement() {
    !this.isMinCountReached && this.count--;
  }
}
