import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    //Preparació
    const a = 1;
    const b = 2;

    // Estímul
    const result = sum(a, b);

    // Comportament esperat
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('check array reduce', () => {
    //Prparació
    const arr = [5, 5, 5];

    //Estímul
    const result = addArray(arr);

    //Comportament esperat
    expect(result).toBe(15);
  });

  test('check empty array reduce return 0', () => {
    //Prparació
    const arr = [];

    //Estímul
    const result = addArray(arr);

    //Comportament esperat
    expect(result).toBe(0);
  });
});
