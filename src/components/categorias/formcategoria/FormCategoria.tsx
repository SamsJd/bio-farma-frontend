import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
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
      await buscar(`/categorias/${id}`, setCategoria , {});
    } catch (error) {
      console.error("Erro ao buscar categoria por ID:", error);
    }
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await atualizar(`/categorias`, categoria, setCategoria, {});
        console.log("Categoria atualizada com sucesso.");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria, {});
        console.log("Categoria cadastrada com sucesso.");
      }
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className='border flex flex-col rounded-2xl items-center bg-orange-100 overflow-hidden justify-between'>
      <header className="text-4xl text-center my-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </header>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col text-center gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome da categoria"
            name="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col text-center gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva sua categoria"
            name="descricao"
            value={categoria.descricao}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 
                    hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Salvando..." : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;