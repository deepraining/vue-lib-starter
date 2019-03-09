import { storiesOf } from '@storybook/vue';

import '../src/styles/index.less';
import { Welcome } from '../src';

storiesOf('Welcome', module)
  .add('Welcome JavaScript', () => ({
    components: { Welcome },
    template: '<welcome name="JavaScript" />',
  }))
  .add('Welcome TypeScript', () => ({
    components: { Welcome },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <welcome name={'TypeScript'} />;
    },
  }));
