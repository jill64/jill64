import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { ogpAttach, onRender } from '@jill64/svelte-suite'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = init(
  'https://b60ad64620e680a1132d402e54add065@o4505814639312896.ingest.us.sentry.io/4506897338662912'
)

export const handle = onHandle(sequence(onRender(), ogpAttach))
export const handleError = onError()
