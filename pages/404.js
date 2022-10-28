import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'


const notFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    },[]);
    return ( 
        <>
            <Head>
            <title>Node Ninja | Not Found</title>
            <meta name='keywords' content='ninjas'/>
            </Head>
            <div className="not-found">
                <h1>Oops!!...</h1>
                <h2>The page you are trying to get access to is not found</h2>
                <p>You can go to the <Link href="/"><a>HomePage</a></Link></p>
            </div>
        </>
    );
}
 
export default notFound;