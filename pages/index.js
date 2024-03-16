import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Ce blog est un exercice d'apprentissage de NextJS" />
      </Head>
      <main className='container'>
        <div className='pt-4'>
          <h1>Bienvenue sur Code.io</h1>
          <h2 className='fs-6'>Le blog communautaire des afficionados de développement web.</h2>
        </div>
        <div className="row pt-4">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title fs-5 fw-semibold">Lisez les articles</h3>
                <p className='card-text text-secondary fw-semibold'>Maximisez votre culture web</p>
                <p className="card-text">Chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
                <p className='text-decoration-underline text-primary'><Link href='/blog'>Visite le blog</Link></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title fs-5 fw-semibold">Faites un tour vers la liste de membres</h3>
                <p className='card-text text-secondary fw-semibold'>Faites-vous des amis</p>
                <p className="card-text">Ajoutez, invitez et discuter avec les différents membres.</p>
                <p className='text-decoration-underline text-primary'><Link href='/users'>Découvre la liste de membres</Link></p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}
