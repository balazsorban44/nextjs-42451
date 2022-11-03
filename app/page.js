import Link from 'next/link'

export default function Page(props) {
  return (
    <div>
      <Link href="/?page=1">Page 1</Link>
      <Link href="/?page=2">Page 2</Link>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
