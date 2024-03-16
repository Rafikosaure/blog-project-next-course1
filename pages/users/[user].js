
export default function User(props) {

    return (
        <div className="container">
            <div className="mt-5 d-flex justify-content-center">
                <div className="card w-50">
                    <div className="card-body">
                        <h3 className="card-title fs-5 fw-semibold">{props.currentUser.name}</h3>
                        <p className='card-text text-secondary fw-semibold'>Username : {props.currentUser.username}</p>
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Username : {props.currentUser.username}</li>
                                <li className="list-group-item">Email : {props.currentUser.email}</li>
                                <li className="list-group-item">Site Web : {props.currentUser.website}</li>
                                <li className="list-group-item">Téléphone : {props.currentUser.phone}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps(context) {
    const slug = parseInt(context.params.user)
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    const currentUser = users.find(user => user.id === slug)

    return {
        props: {
            currentUser: currentUser
        }
    }
}

export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    const paths = users.map(user => ({
        params: {user: user.id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}