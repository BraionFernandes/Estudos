import Criador from "./components/Criador/Criador";

export default function Home() {
  return (
    <div className="bg-red-950 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-225 h-175 rounded-4xl">

        <div className="flex flex-col items-center p-10">

          <div className="p-10 mb-5">
            <h1 className="font-bold text-3xl font-sans">ToDo Básico com Next.js</h1>
          </div>

          <div className="p-5">
            <Criador/>
          </div>

        </div>

        <hr className="mx-2 text-gray-300"/>

        <div className="flex items-center flex-col p-5 m-10 overflow-scroll overflow-x-auto h-75 min-w-0 min-h-0">

          <div className="bg-gray-400 w-125 p-2 m-1.25 flex justify-between items-center rounded-md">
            <span className="font-semibold text-lg indent-1.25">Arrumar a casa</span>
            <button className="p-2 bg-red-800 text-white rounded-md font-medium text-lg">Remover</button>
          </div>
          <div className="bg-gray-400 w-125 p-2 m-1.25 flex justify-between items-center rounded-md">
            <span className="font-semibold text-lg indent-1.25">Fazer trabalho de casa</span>
            <button className="p-2 bg-red-800 text-white rounded-md font-medium text-lg">Remover</button>
          </div>
          <div className="bg-gray-400 w-125 p-2 m-1.25 flex justify-between items-center rounded-md">
            <span className="font-semibold text-lg indent-1.25">Estudar</span>
            <button className="p-2 bg-red-800 text-white rounded-md font-medium text-lg">Remover</button>
          </div>
          <div className="bg-gray-400 w-125 p-2 m-1.25 flex justify-between items-center rounded-md">
            <span className="font-semibold text-lg indent-1.25">Estudar</span>
            <button className="p-2 bg-red-800 text-white rounded-md font-medium text-lg">Remover</button>
          </div>
          <div className="bg-gray-400 w-125 p-2 m-1.25 flex justify-between items-center rounded-md">
            <span className="font-semibold text-lg indent-1.25">Estudar</span>
            <button className="p-2 bg-red-800 text-white rounded-md font-medium text-lg">Remover</button>
          </div>

        </div>

      </div>
    </div>
  );
}
