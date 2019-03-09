import Welcome from './Welcome';

Welcome.install = function(Vue) {
  Vue.component(Welcome.name, Welcome);
};

export default Welcome;
