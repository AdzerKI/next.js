import { Suspense } from 'react'

function Items() {
  return (
    <ul id="items">
      {Array.from({ length: 500 }, (_, index) => (
        <li key={index}>{`${index}: ${'x'.repeat(100)}`}</li>
      ))}
    </ul>
  )
}

export default function Page() {
  return (
    <main>
      <Suspense fallback={<p id="fallback">Loading</p>}>
        <Items />
      </Suspense>
    </main>
  )
}
