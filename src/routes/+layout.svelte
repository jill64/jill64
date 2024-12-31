<script lang="ts">
  import icon from '$lib/assets/jill.png'
  import image from '$lib/assets/og-image.png'
  import {
    FlipButton,
    OGP,
    ThemeManager,
    Toaster,
    theme
  } from '@jill64/svelte-suite'
  import '../app.postcss'

  const title = 'jill64'
  const description = 'Independent Web Developer | Embedded Engineer'
</script>

<Toaster dark={theme.isDark} />
<ThemeManager />
<OGP {title} {description} site_name={title} {image} />

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
