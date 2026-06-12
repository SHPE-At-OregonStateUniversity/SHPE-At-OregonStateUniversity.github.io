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
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </span>
  </div>

  <div class="split-row">
    <img class="media" src="/testImage.jpg" alt="SHPE OSU" />
    <div class="copy">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </div>

  <div class="split-row split-row--reverse">
    <img class="media" src="/testImage.jpg" alt="SHPE OSU" />
    <div class="copy">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </div>
</div>

<style>
  /* Layout */
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

  .page-body {
    padding-bottom: var(--size-400);
    max-width: 80ch;
  }

  .split-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--size-800);
    align-items: center;
    width: min(100%, var(--max-width));
  }

  .split-row img {
    width: 50%;
    height: auto;
  }

  .split-row--reverse .media {
    order: 2;
    justify-self: end;
  }

  .split-row--reverse .copy {
    order: 1;
  }

  /* Logo + intro copy */
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

  .logo p,
  .description p {
    font-size: var(--size-200);
    font-weight: 400;
    color: var(--color-brand-dark);
  }

  .description {
    padding-left: var(--size-500);
  }

  .osu p {
    color: var(--color-brand-primary);
  }

  /* Baseline paragraph style */
  p {
    font-size: var(--size-080);
    font-weight: 100;
    color: var(--color-brand-dark);
  }
</style>