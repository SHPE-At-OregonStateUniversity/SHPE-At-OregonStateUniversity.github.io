<script lang="ts">
  import NavBar from './NavBar.svelte';
  import logo from '$lib/assets/logo.png';
</script>

<div class="site-header">
  <img src={logo} alt="SHPE OSU Logo" />
  <div class="nav-slot">
    <NavBar />
  </div>
</div>

<style>
  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-100) 0;
    gap: var(--size-080);
  }

  .site-header img {
    width: var(--size-800);
    height: auto;
    flex-shrink: 0;
  }

  .nav-slot {
    flex: 1;
    min-width: 0;
  }

  @media (min-width: 36rem) {
    .site-header img {
      width: 4rem;
    }
  }

  @media (max-width: 36rem) {
    .site-header {
      justify-content: flex-start;
      gap: 0;
    }
  }
</style>