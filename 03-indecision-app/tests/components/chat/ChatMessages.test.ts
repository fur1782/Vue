import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { test, describe, expect, vi } from 'vitest';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola món?', itsMine: true },
  { id: 2, message: 'no', itsMine: false, image: 'image-example.jpg' },
];

describe('<ChatMessage />', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages: messages },
  });

  test('renders chat correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test("scrolls down when messages is update and doesn't fit", async () => {
    const scrollToMock = vi.fn();

    // console.log(wrapper.vm.$refs); llistat de les referencies

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey', itsMine: true }],
    });

    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(scrollToMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});
