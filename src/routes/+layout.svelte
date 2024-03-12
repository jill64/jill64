<script lang="ts">
  import header from '$lib/assets/header.png'
  import icon from '$lib/assets/jill.png'
  import {
    FlipButton,
    OGP,
    ThemeManager,
    Toaster,
    theme
  } from '@jill64/svelte-suite'
  import '../app.postcss'

  const title = 'jill64'
  const description = 'Independent Web Developer'
</script>

<Toaster dark={$theme === 'dark'} />
<ThemeManager />
<OGP {title} {description} site_name={title} image={header} />

<svelte:head>
  <link rel="icon" href={icon} />
  <link rel="apple-touch-icon" href={icon} />
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<header class="fixed flex flex-wrap items-center justify-end w-screen p-2">
  <FlipButton />
</header>

<slot />
