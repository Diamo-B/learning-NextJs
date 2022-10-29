export const getStaticPaths = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    let paths = data.map((ninja) => {
        return {
            params: {id: ninja.id.toString()}
        };
    })

    return {
        paths,
        fallback: false
    }
} 

export const getStaticProps = async (context) => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users/'+context.params.id);
    let data = await res.json();

    return {
        props: {ninja: data}
    }
}


const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <h3>{ninja.email}</h3>
            <h3>{ninja.website}</h3>
            <h3>{ninja.address.city}</h3>
        </div>
    );
}
 
export default Details;