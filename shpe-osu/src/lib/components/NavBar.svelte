<script lang="ts">
  import { page } from '$app/state';
</script>
<nav>
  <a class="nav-link" href="/">Home</a>
  <a class="nav-link" href="/officers">Officers</a>
  <a class="nav-link" href="/gallery">Gallery</a>
  <a class="nav-link" href="/shpetinas">Shpetinas</a>
</nav>

<style>
  nav {
    flex: 1;
    display: flex;
    gap: var(--size-080);
  }

  .nav-link {
    flex: 1;
    font-size: var(--size-100);
    padding: var(--size-010) var(--size-080);
    border-radius: 999em;
    border-color: var(--color-brand-dark);
    border-width: 2px;
    text-align: center;
  }
</style>