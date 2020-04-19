import { storiesOf } from '@storybook/vue'
import About from '../components/About'
import Works from '../components/Works'

storiesOf('About', module)
  .add('default', () => ({
    components: { About },
    template: `<About />`
  }));

  storiesOf('Works', module)
  .add('default', () => ({
    components: { Works },
    template: `<Works />`
  }));