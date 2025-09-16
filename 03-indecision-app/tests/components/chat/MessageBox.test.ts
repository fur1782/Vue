import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<MessageBOx />', () => {
  const wrapper = mount(MessageBox);
  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola món';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    // expect((wrapper.vm as any).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola món';

    const input = await wrapper.find('input[type="text"]');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('emits sendMessage event when keypress.enter is triggered without message value', async () => {
    const wrapperIn = mount(MessageBox);
    const message = 'Hola món';

    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);
    await input.trigger('keypress.enter');
    await wrapperIn.find('button').trigger('click');

    expect(wrapperIn.emitted('sendMessage')?.[0]).toBeFalsy();
  });
});
