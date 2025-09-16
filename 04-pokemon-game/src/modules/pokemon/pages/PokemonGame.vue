<template>
  <section
    v-if="isLoading || randomPokemon?.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Wait please</h1>
    <h3 class="animate-pulse">Loading pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="flex justify-evenly">
      <PokemonCount :title="'Lost'" :count-number="gameCount.defeats" />
      <PokemonCount :title="'Win'" :count-number="gameCount.victories" />
    </div>
    <h1 class="m-5">How is this Pokemon?</h1>
    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        @click="getNextRound(4)"
        class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        data-test-id="btn-new-game"
      >
        Tornar-ho a intentar
      </button>
    </div>

    <!-- Pokemon Picture-->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- Pokemon Option-->
    <PokemonOptions
      :options-list="options"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonCount from '../components/PokemonCount.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonOptions: options,
  gameCount,
  checkAnswer,
  getNextRound,
} = usePokemonGame();
</script>
