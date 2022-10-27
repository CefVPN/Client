import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Titlebar from '../components/Titlebar'
import Dash from './Dash'

export default function Home() {
  return (
    <div className="bg-main_dbg">
      <Head>
        <title>CefVPN</title>
      </Head>
      <div className="app">
        <Dash />
        <Titlebar />
      </div>
      <Sidebar /> 
    </div>
  )
}
