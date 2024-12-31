import { init } from '@jill64/sentry-sveltekit-cloudflare/client'
import { toast } from '@jill64/svelte-suite'

const onError = init(
  'https://b60ad64620e680a1132d402e54add065@o4505814639312896.ingest.us.sentry.io/4506897338662912'
)

export const handleError = onError((e) => {
  if (e instanceof Error) {
    toast.error(e.message)
  }
})
