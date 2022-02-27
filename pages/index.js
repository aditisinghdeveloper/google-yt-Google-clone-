import Head from 'next/head'
import Image from 'next/image'
import Avatar from "../components/Avatar"



export default function Home() {
  return (
<div >
<Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
</Head>


<header className="flex w-full p-5 justify-between text-sm text-gray-700">
<div className="flex space-x-4 items-center">
  <p className="link">About</p>
  <p className="link">Store</p>
  </div>

<div className="flex space-x-4 items-center">
  <p className="link">Gmail</p>
  <p className="link">Images</p>
    <Avatar url="https://github.com/aditisinghdeveloper/google-yt-Google-clone-/blob/main/assets/tatti.jpg?raw=true" />   

</div>


</header>

     


</div>
  )
}
