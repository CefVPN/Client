import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Titlebar from '../components/Titlebar'
import Link from 'next/link'
import Dash from './Dash'
import Settings from './config'

export default function Home() {
  return (
    <div className="main_cnt bg-main_dbg select-none">
      <Head>
        <title>CefVPN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
      </Head>
      <Dash />
      <Titlebar />
      <Sidebar /> 
    </div>
  )
}
