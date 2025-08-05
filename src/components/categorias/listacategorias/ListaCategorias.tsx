import { useState } from "react";
import CardCategorias from "../cardcategorias/CardCategorias";
import type Categoria from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";


function ListaCategorias() {

  const navigate = useNavigate()

    const [categorias, setCategorias] = useState<Categoria[]>([])

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 
                          lg:grid-cols-3 gap-8">
            <CardCategorias />
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias;