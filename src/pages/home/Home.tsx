import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="bg-orange-400 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Seja Bem Vindo à BioFarma
            </h2>
            <p className='text-xl'>
              Aqui você tem os melhores produtos e promoções!
            </p>

            <div className="flex justify-around gap-4">
              <div className='rounded text-white 
                            border-white border-solid border-2 py-2 px-4'
                >
                <Link to='/categorias' className='hover:underline'>Todas as categorias</Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/qctfo1npt/farmacia.png"
              alt="Imagem da Página Home"
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home