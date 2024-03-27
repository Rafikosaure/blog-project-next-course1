import Link from 'next/link'

export default function Users(props) {

    return (
        <div className='container mb-5'>
            <h1 className='mt-4 text-center'>La liste des utilisateurs</h1>

            <div className='row g-3 mt-4 flex-column  align-items-center'>
                {props.users.map(user => (
                    <div className='col-4' key={user.id}>
                        <div className="card" style={{overflow: "hidden"}}>
                            <div className="card-body d-flex flex-row justify-content-between" style={{height: 60}}>
                                <p className="card-text">{user.username}</p>
                                <p className='text-decoration-underline text-primary'><Link href={`/users/${user.id}`}>Contacter</Link></p>
                            </div>
                        </div>
                    </div>
                ))}           
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    
    return {
        props: {
            users
        }
    }
}