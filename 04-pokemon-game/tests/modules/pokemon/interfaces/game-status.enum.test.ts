import { GameStatus } from '@/modules/pokemon/interfaces';

describe('GameStatus enum', () => {
  test('should have a value of "play"', () => {
    expect(GameStatus.Playing).toBe('play');
  });
  test('should have a value of "won"', () => {
    expect(GameStatus.Won).toBe('won');
  });
  test('should have a value of "lost"', () => {
    expect(GameStatus.Lost).toBe('lost');
  });
});
