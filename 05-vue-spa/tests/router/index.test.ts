import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import type { RouteLocationNormalized } from 'vue-router';

//eslint-disable @typescript-eslint/no-explicit-any

describe('Router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  test('should renders HomePage when visiting /', async () => {
    await router.push('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  test('should renders FaturesPage /features', async () => {
    await router.push('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');

    // await router.push('/');
    // await router.push({ name: 'features' });
    // expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('should renders PricingPage /pricing', async () => {
    await router.push('/pricing');
    await router.isReady();
    expect(wrapper.html()).toContain('Plans');
  });

  test('should renders ContactPage /contact', async () => {
    await router.push('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain('Feedback');
  });

  test('should renders LoginPage /pokemon/:id whitout authentication', async () => {
    localStorage.clear();

    await router.push('/pokemon/2');
    await router.isReady();

    expect(wrapper.find('h1').text()).toContain('Login');
  });

  test('should renders LoginPage /pokemon/:id whit authentication', async () => {
    const id = 4;
    localStorage.setItem('userId', 'ABC-123');

    await router.push(`/pokemon/${id}`);
    await router.isReady();

    expect(wrapper.find('h1').text()).toContain(`#${id}`);
    expect(wrapper.html()).toContain(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    );
  });

  test('should convert the segment into numbers', async () => {
    const paramId = 4;

    const route: RouteLocationNormalized = {
      name: undefined,
      params: { id: paramId.toString() },
      matched: [],
      fullPath: `/pokemon/${paramId}`,
      query: {},
      hash: '',
      redirectedFrom: undefined,
      meta: {},
      path: '',
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');

    const { id } = (pokemonRoute?.props as any).default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(paramId);
  });

  test('should return default value if argument is not a number', async () => {
    const paramId = 'anskdjnaknsjkdn';

    const route: RouteLocationNormalized = {
      name: undefined,
      params: { id: paramId },
      matched: [],
      fullPath: `/pokemon/${paramId}`,
      query: {},
      hash: '',
      redirectedFrom: undefined,
      meta: {},
      path: '',
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');

    const { id } = (pokemonRoute?.props as any).default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(1);
  });
});
