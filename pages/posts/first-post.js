import Link from 'next/link'
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <h1>Banan jest zly</h1>
      <h2>
        <Link href="/">pomocy</Link>
      </h2>
    </Layout>
  )
}
