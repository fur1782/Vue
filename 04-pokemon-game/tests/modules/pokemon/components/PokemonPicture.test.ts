import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPicture />', () => {
  test('should render the hidden image when showPokeon prop is false', () => {
    const classes = 'brightness-0';

    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    // Opció per valorar més d'un attribut a la vegada
    // const attributes = wrapper.find('img').attributes();

    // expect(attributes).toEqual(
    //   expect.objectContaining({
    //     class: 'brightness-0 h-[200px]',
    //     src: imageSource,
    //   })
    // )

    expect(wrapper.find('img').classes()[0]).toBe(classes);
  });

  test('should render the image when showPokeon prop is true', () => {
    const classes = 'fade-in';

    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: true,
      },
    });

    expect(wrapper.find('img').classes()[0]).toBe(classes);
  });

  test('should render the img correctly', () => {
    const id = 1;

    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: id,
        showPokemon: false,
      },
    });

    const srcImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    expect(wrapper.find('img').attributes('src')).toBe(srcImg);
  });
});
