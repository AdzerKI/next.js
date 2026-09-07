import fs from 'node:fs'
import path from 'node:path'

// Render the installed versions at build time: in deploy tests the remote
// build has access to `node_modules` while the deployed function may not.
export const dynamic = 'force-static'

function getInstalledVersion(packageName: string): string {
  const manifestPath = path.join(
    process.cwd(),
    'node_modules',
    ...packageName.split('/'),
    'package.json'
  )
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8')).version
}

export default function Page() {
  const versions = {
    next: getInstalledVersion('next'),
    thirdParties: getInstalledVersion('@next/third-parties'),
  }
  return <p id="versions">{JSON.stringify(versions)}</p>
}
