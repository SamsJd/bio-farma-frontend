import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4
            			    bg-orange-400 text-white'>

        <div className="container flex justify-between text-lg">
          <Link to='/home' className="text-2xl font-bold">BioFarma</Link>

          <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            {/* Produto */}
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
            {/* Perfil
            Sair */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar