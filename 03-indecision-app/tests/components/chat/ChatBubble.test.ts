import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('ChatBubble', () => {
  test('renders own message correctly', () => {
    const message = 'Hola món';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly without image', () => {
    const message = 'Hola món';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBe(false);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
  });

  test('renders received message correctly with image', () => {
    const message = 'Hola món';
    const image = 'https://yesno.wtf/assets/yes/2.gif';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
        image: image,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
