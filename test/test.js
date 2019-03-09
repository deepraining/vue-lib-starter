import './init';
import { mount } from '@vue/test-utils';
import { Hello } from '../src';

test('Hello component', () => {
  const hello = mount(Hello, {
    propsData: {
      name: 'test',
    },
  });

  expect(hello.classes('starter-hello')).toBe(true);
  expect(hello.text()).toBe('Hello, test!');
});
