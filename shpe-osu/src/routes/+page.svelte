<svelte:head>
    <title>Homepage</title>
</svelte:head>

<div class="content">
  <div class="hero">

    <div class="logo">
      <span class="est">est. 2010</span>
      <h1>SHPE</h1>
      <p>@oregonstate</p>
    </div>

    <div class="description">
      <p>We are the society of Hispanic Professional Engineers at </p>
      <div class="osu">
        <p>Oregon State University.</p>
      </div>
    </div>

  </div>

  <div class="page-body">
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-200);
    max-width: 20rem;
    padding-bottom: var(--size-500);
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--size-020);
  }
  .logo h1,
  .logo p,
  .logo .est {
    margin: 0;
  }
  .logo h1 {
    font-size: var(--size-1000);
    font-weight: 400;
    color: var(--color-brand-dark);
    line-height: 0.9;
  }
  .logo p,
  .logo .est {
    line-height: 1;
  }

  .logo p {
    font-size: var(--size-200);
    font-weight: 400;
    color: var(--color-brand-dark);
  }
  .description {
    margin-left: var(--size-500);
  }
  .description p {
    font-size: var(--size-200);
    font-weight: 400;
    color: var(--color-brand-dark);
  }
  .osu p {
    color: var(--color-brand-primary);
  }
  p {
    font-size: var(--size-080);
    font-weight: 100;
    color: var(--color-brand-dark);
  }
  .page-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>