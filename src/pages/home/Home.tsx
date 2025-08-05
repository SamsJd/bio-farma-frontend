function Home() {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div>
        <div className="max-w-7xl flex flex-col items-center">
            <h2>Seja Bem Vinde à BioFarma</h2><br/>
            <p>Aqui você tem os melhores produtos e promoções!</p><br/>
          </div>

          <div className="max-w-7xl flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/qctfo1npt/farmacia.png"
              alt="Imagem da Página Home"
              width="250px"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home