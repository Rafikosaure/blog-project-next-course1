import Link from 'next/link'

export default function Blog(props) {

    return (
        <div className='container mb-5'>
            <h1 className='mt-4 text-center'>Bienvenue sur le blog !</h1>
            <h2 className='fs-6 text-center'>Voici les articles</h2>
            <div className='row g-3 mt-4'>
                {props.articles.map(article => (
                    <div className='col-4' key={article.id}>
                        <div className="card" style={{height: 160, overflow: 'hidden'}}>
                            <div className="card-body">
                                <h3 className="card-title fs-5 fw-semibold">{article.title}</h3>
                                <p className="card-text text-truncate">{article.body}</p>
                                <p className='text-decoration-underline text-primary'><Link href={`/blog/${article.id}`}>Lire cet article</Link></p>
                            </div>
                        </div>
                    </div>
                ))}           
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articles = await data.json()
    
    return {
        props: {
            articles
        }
    }
}