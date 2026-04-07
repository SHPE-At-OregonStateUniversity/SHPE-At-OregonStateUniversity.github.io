<script lang="ts">
  import { page } from '$app/state';
  import logo from '$lib/assets/logo.png';
</script>

<div class="site-footer">
	<div class="socials">
		<div class="header">
			<p>Socials</p>
		</div>
		<p>Instagram</p>
		<p>Tik Tok</p>
	</div>
	<div class="club-links">
		<div class="header">
			<p>Club Links</p>
		</div>
		<p>Ideal Logic</p>
		<p>OSU Club Site</p>
	</div>
	<img src={logo} alt="SHPE OSU Logo" />
</div>

<style>
  .site-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	.header {
		font-size: var(--size-200);
		font-weight: 600;
		color: var(--color-brand-dark);
	}
</style>