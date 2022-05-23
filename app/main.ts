import { sayHello } from './hello';
import { loadDataFromAPI } from './async';

sayHello('World');

loadDataFromAPI()
  .then((response) => {
    console.debug(' ... and here later.');
    console.warn('[Resolve] Response:');
    console.log(response);
  })
  .catch((err) => {
    console.error('[Reject] Error:');
    console.log(err);
  });

console.debug("I'm here first ... ");
