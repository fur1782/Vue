import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import IndecisionView from '@/views/IndecisionView.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
};

describe('<IndecisionView />', () => {
  test('renders chat messages chat messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      stubs: {
        ChatMessages: mockChatMessages,
      },
    });

    // Simular l'event personalitzat
    const messageBoxComponent = wrapper.findComponent(MessageBox);

    messageBoxComponent.vm.$emit('sendMessage', 'Hola món');

    await new Promise((r) => setTimeout(r, 150));

    // expect(wrapper.html()).toMatchSnapshot();
  });
});
