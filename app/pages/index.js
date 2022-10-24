import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-main_dbg">
      <Head>
        <title>CefVPN</title>
      </Head>
      <Sidebar />
    </div>
  )
}
