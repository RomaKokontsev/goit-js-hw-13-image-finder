import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const errorNotification = () => {
  PNotify.error({
    text: 'WARNING: Images not found.',
    delay: 2000,
  });
};

export { errorNotification };
