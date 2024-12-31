<script lang="ts">
  import { page } from '$app/state'
</script>

<main class="flex flex-col w-screen h-screen items-center justify-center gap-4">
  <h1 class="font-thin text-7xl xs:text-9xl">{page.status}</h1>
  <p class="font-thin text-lg xs:text-xl">
    {page.error?.message ?? 'Unknown Error'}
  </p>
  <a href="/">Back to Home</a>
  <div class="h-10"></div>
</main>
