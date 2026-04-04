<script lang="ts">
  import NavBar from './NavBar.svelte';
  import logo from '$lib/assets/logo.png';
</script>

<div class="site-header">
  <img src={logo} alt="SHPE OSU Logo" />
	<NavBar />
</div>

<style>
  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-100) 0;
    gap: var(--size-080);
  }
</style>