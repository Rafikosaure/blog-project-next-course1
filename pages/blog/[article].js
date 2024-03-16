
export default function Article(props) {

    return (
        <div className='container mt-5'>
            <h1 className="text-center mb-4">{props.currentPost.title}</h1>
            <p>{props.currentPost.body}</p>
        </div>
    )
}

export async function getStaticProps(context) {
    const slug = parseInt(context.params.article)
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    const currentPost = posts.find(post => post.id === slug)

    return {
        props: {
            currentPost: currentPost
        }
    }
}

export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    const paths = posts.map(article => ({
        params: {article: article.id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}