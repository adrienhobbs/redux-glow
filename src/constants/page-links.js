import Immutable from 'immutable';

const Links = Immutable.List([
  // Immutable.Map({name: 'home', path: '/', type: 'logo'}),
  Immutable.Map({name: 'work', path: '/work', type: 'normal'}),
  Immutable.Map({name: 'services', path: '/services', type: 'normal'}),
  Immutable.Map({name: 'about', path: '/about', type: 'normal'}),
  Immutable.Map({name: 'careers', path: '/careers', type: 'normal'}),
  Immutable.Map({name: 'connect', path: '/connect', type: 'normal'})
  // Immutable.Map({name: 'Twitter', path: 'twitter.com', type: 'twitter'})
]);

export default Links;
