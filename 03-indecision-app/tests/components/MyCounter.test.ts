import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const initialValue = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: initialValue,
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    // expect(wrapper.find('h3').text()).toContain(`Counter: ${initialValue}`);
    // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
    //   `Square: ${initialValue * initialValue}`,
    // );

    expect(counterLabel.text()).toContain(`Counter: ${initialValue}`);
    expect(squareLabel.text()).toContain(`Square: ${initialValue * initialValue}`);
  });

  test('increments the counter when +1 button is clicked', () => {
    const initialValue = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: initialValue,
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const btnIncrement = wrapper.find('button');

    btnIncrement.trigger('click').then(() => {
      expect(counterLabel.text()).toContain(`Counter: ${initialValue + 1}`);
      expect(squareLabel.text()).toContain(`Square: ${(initialValue + 1) * (initialValue + 1)}`);
    });
  });

  test('decrement the counter when -1 button is clicked twice', async () => {
    const initialValue = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: initialValue,
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const btnDecrement = wrapper.find('[data-testid="substract-button"]');

    // btnDecrement.trigger('click').then(() => {
    //   expect(counterLabel.text()).toContain(`Counter: ${currentValue - 1}`);
    //   expect(squareLabel.text()).toContain(`Square: ${(currentValue - 1) * (currentValue - 1)}`);
    // });

    // btnDecrement.trigger('click').then(() => {
    //   expect(counterLabel.text()).toContain(`Counter: ${currentValue - 2}`);
    //   expect(squareLabel.text()).toContain(`Square: ${(currentValue - 2) * (currentValue - 2)}`);
    // });

    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${initialValue - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(initialValue - 2) * (initialValue - 2)}`);
  });
});
