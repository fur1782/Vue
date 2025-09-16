import { useChat } from '@/composables/useChat';
import { describe, expect, test, vi } from 'vitest';

describe('useChat', () => {
  test('Add message correctly when onMessage is called', async () => {
    const text = 'Hola món!';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    // expect(messages.value[0].itsMine).toBe(true);
    // expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('Add nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('Gets response when message ends with "?"', async () => {
    const text = 'Vols venir?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, otherMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(otherMessage.itsMine).toBe(false);
    expect(otherMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false,
    });

    expect(myMessage).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });
  });

  test('mock respoonse - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = 'Vols venir?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 1600));
    const [, otherMessage] = messages.value;

    expect(otherMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false,
    });
  });
});
