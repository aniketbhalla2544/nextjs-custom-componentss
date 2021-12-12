import Head from 'next/head';
import Link from "next/link";
import Dropdown from '../components/Dropdown';
import Navbar from './Navbar';

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Here you'll learn how to code in Next.js app." />
      </Head>

      <header id="header" className='w-100 px-5 bg-light fs-1 bg-dark'>
        <Link href='/'>
          <a className='text-white text-decoration-none fw-bolder text-uppercase'>blogs</a>
        </Link>

        <Navbar />
      </header>

      {/* <Dropdown btnStyle="" name='blogs'>
        <Dropdown.Option optionStyle="" href="/blogs/1">blog1</Dropdown.Option>
        <Dropdown.Option optionStyle="" href="/blogs/2">blog2</Dropdown.Option>
        <Dropdown.Option optionStyle="" href="/blogs/3">blog3</Dropdown.Option>
        <Dropdown.Option optionStyle="" href="/">Home Page</Dropdown.Option>
      </Dropdown> */}


      <main className='py-5'>
        <div className="container">
          {children}
        </div>
      </main>

      <footer className='py-4 bg-secondary px-5 position-absolute fixed-bottom'>
        <h1 className='fw-bold text-white fs-3 m-0'>Footer</h1>
      </footer>
    </>
  )
}


