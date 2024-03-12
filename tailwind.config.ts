import { tailwindConfig } from '@jill64/svelte-tailwind'

/** @type {import('@jill64/svelte-tailwind').TailwindConfig} */
export default tailwindConfig({
  theme: {
    extend: {
      screens: {
        xs: '375px'
      }
    }
  }
})
