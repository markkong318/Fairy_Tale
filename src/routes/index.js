import loadDefaultView from '../containers/Default';
import loadBookExampleView from '../books/00_example/index';

export default [
  {
    path: '/',
    component: loadDefaultView,
    exact: true
  },
  {
    path: '/books/00_example',
    component: loadBookExampleView,
    exact: true
  }
];