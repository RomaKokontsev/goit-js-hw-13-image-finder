import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function onShowImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src='${e.target.dataset.source}'>
    `,
    )
    .show();
}
