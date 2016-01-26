import du from 'domutil';
import { isElement, isEmpty } from 'lodash';

let titleEl;

export default function setPageTitle (title) {
  titleEl = (isElement(titleEl)) ? titleEl : document.getElementsByTagName('title')[0];
  const pageTitle = (isEmpty(title))
    ? 'GLOW'
    : 'GLOW - ' + title;
  du.content(titleEl, pageTitle);
}
