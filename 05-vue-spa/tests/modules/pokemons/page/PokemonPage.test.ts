import { mount, RouterLinkStub } from '@vue/test-utils';
import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';

describe('<PokemonPage />', () => {
  const id = 25;

  const wrapper = mount(PokemonPage, {
    props: {
      id: id,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('should render the component correctly', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    );
  });

  test('should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);

    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: id + 1 } });
  });
});
