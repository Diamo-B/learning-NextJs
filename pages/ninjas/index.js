import Head from "next/head";
import Link from "next/link";
import Styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    return {
        props :{ninjas: data}
    };
}

const Ninjas = ({ninjas}) => {

    return ( 
        <>
            <Head>
            <title>Node Ninja | Ninja Listing</title>
            <meta name='keywords' content='ninjas'/>
            </Head>
            <h1>All ninjas</h1>
            {ninjas.map((ninja)=>(
                <Link href={"/ninjas/"+ninja.id} key={ninja.id}>
                    <a className={Styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </>
    );
}
 
export default Ninjas;