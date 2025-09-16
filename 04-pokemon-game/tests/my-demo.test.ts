import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';
import { describe, test } from 'vitest';

describe('pokemon API ', () => {
  test('should be configured as expected', () => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon';

    expect(pokemonApi.defaults.baseURL).toBe(baseURL);
  });
});
