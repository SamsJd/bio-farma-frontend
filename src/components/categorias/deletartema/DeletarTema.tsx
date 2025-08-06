import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {});
    } catch (error) {
      console.error("Erro ao buscar categoria por ID:", error);
    }
  }

  async function deletarCategoria() {
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      console.log("Categoria deletada com sucesso.");
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function cancelar() {
    navigate("/categorias");
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          {categoria.nome || "Carregando..."}
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.descricao || "Sem descrição"}
        </p>
        <div className="flex">
          <button
            onClick={cancelar}
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
          >
            Não
          </button>
          <button
            onClick={deletarCategoria}
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
          >
            {isLoading ? "Deletando..." : "Sim"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;