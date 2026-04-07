<script lang="ts">
  import { page } from '$app/state';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/officers', label: 'Officers' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/shpetinas', label: 'Shpetinas' }
  ] as const;
</script>

<nav>
  <ul id="primary-navigation" class="primary-navigation">
    {#each links as { href, label } (href)}
      <li class="nav-link">
        <a
          {href}
          class:active={page.url.pathname === href}
          aria-current={page.url.pathname === href ? 'page' : undefined}
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .primary-navigation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--size-060);
  }

  .primary-navigation .nav-link:first-child {
    grid-column: 1 / -1;
  }

  @media (min-width: 36rem) {
    nav {
      flex: 1;
    }

    .primary-navigation {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--size-010);
    }

    .primary-navigation .nav-link:first-child {
      grid-column: auto;
    }
  }

  .nav-link {
    min-width: 0;
  }

  .nav-link a {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--size-060) var(--size-080);
    border-radius: 999em;
    border: 2px solid var(--color-brand-dark);
    text-align: center;
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 36rem) {
    .nav-link a{
      font-size: var(--size-200);
      padding: var(--size-010) var(--size-080);
    }
  }
</style>
