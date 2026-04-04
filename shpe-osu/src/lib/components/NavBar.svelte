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
  <ul id="primary-navigation" class="primary-navigation flex">
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
  @media (min-width: 35em) {
    nav {
      flex: 1;
    }

    .flex {
      gap: var(--size-080);
    }
  }

  .flex {
    display: flex;
    gap: var(--size-080);
  }

  .nav-link {
    flex: 1;
    font-size: var(--size-100);
    min-width: 0;
  }

  .nav-link a {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--size-010) var(--size-080);
    border-radius: 999em;
    border: 2px solid var(--color-brand-dark);
    text-align: center;
    text-decoration: none;
    color: inherit;
  }
</style>
