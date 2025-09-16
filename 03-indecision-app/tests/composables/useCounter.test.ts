import { useCounter } from '@/composables/useCounter';
import { describe, expect, test } from 'vitest';

describe('useCounter', () => {
  test('Initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, counterSquare } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(counterSquare.value).toBe(initialValue * initialValue);
  });

  test('Initializes counter without provided initial value', () => {
    const initialValue = 5;
    const { counter, counterSquare } = useCounter();

    expect(counter.value).toBe(initialValue);
    expect(counterSquare.value).toBe(initialValue * initialValue);
  });

  test('increments counter correctly', () => {
    const { counter, counterSquare } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(counterSquare.value).toBe(6 * 6);
  });
});
