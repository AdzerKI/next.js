import { nextTestSetup } from 'e2e-utils'
import { load } from 'cheerio'

describe('experimental.progressiveChunkSize', () => {
  const { next } = nextTestSetup({ files: __dirname })

  it('keeps a completed Suspense boundary above the default size inline', async () => {
    const $ = load(await (await next.fetch('/')).text())

    expect($('main #items li')).toHaveLength(500)
    expect($('main #fallback')).toHaveLength(0)
    expect($('[hidden] #items')).toHaveLength(0)
  })
})
