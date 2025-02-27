import { useState } from "react";
import Card from "../../components/ui/Card";
import { CarFront, Users, Pickaxe, CircleChevronRight, CircleChevronLeft, ChevronFirst, ChevronLast } from "lucide-react";
import { SearchComponente } from "../../components/ui/SearchComponente";
import UserProfile from "../../components/ui/User/UserProfile";
import { useApi } from "../../context/EventosContext";

export const HomeDashboard = () => {
  const { datosSuperficie, datosInteriorMina } = useApi();

  // Filtrar personas y unidades móviles de interior mina y superficie
  const personasSuperficie = datosSuperficie.filter(evento => evento.TypeBeacon === "PERSONA");
  const unidadesMovilesSuperficie = datosSuperficie.filter(evento => evento.TypeBeacon === "UNIDAD MOVIL");
  const personasInteriorMina = datosInteriorMina.filter(evento => evento.TypeBeacon === "PERSONA");
  const unidadesMovilesInteriorMina = datosInteriorMina.filter(evento => evento.TypeBeacon === "UNIDAD MOVIL");

  // Estados para la paginación de cada tabla
  const [pageInteriorMina, setPageInteriorMina] = useState(1);
  const [itemsPerPageInteriorMina, setItemsPerPageInteriorMina] = useState(5);
  const [pageSuperficie, setPageSuperficie] = useState(1);
  const [itemsPerPageSuperficie, setItemsPerPageSuperficie] = useState(5);
  const [pageUnidadesMina, setPageUnidadesMina] = useState(1);
  const [itemsPerPageUnidadesMina, setItemsPerPageUnidadesMina] = useState(5);
  const [pageUnidadesSuperficie, setPageUnidadesSuperficie] = useState(1);
  const [itemsPerPageUnidadesSuperficie, setItemsPerPageUnidadesSuperficie] = useState(5);

  // Función de paginación
  const paginate = (data, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  // Función para calcular el total de páginas
  const totalPages = (data, itemsPerPage) => Math.ceil(data.length / itemsPerPage);

  // Función para obtener las páginas visibles
  const getVisiblePages = (currentPage, totalPages) => {
    const maxPagesToShow = 3;
    const pages = [];
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="">
      <div className="flex items-center gap-5 justify-between mb-6">
        <div>
          <h1 className="font-bold text-xl">Dashboard</h1>
        </div>
        <div className="flex gap-4">
          <SearchComponente />
          <UserProfile />
        </div>
      </div>
      <div className="flex w-full p-0 m-0 gap-2">
        <section className="lg:w-full">
          <section>
            <div className="flex gap-2">
              <Card icon={<Users />} title={"Total Personas"} cantidad={`${personasSuperficie.length + personasInteriorMina.length}`} porcentaje={"+2.98%"} />
              <Card icon={<Pickaxe className="text-red-600" />} title={"Personas en Interior Mina"} cantidad={personasInteriorMina.length} porcentaje={"-1.45%"} />
              <Card icon={<Users className="text-green-500" />} title={"Personas en Superficie"} cantidad={personasSuperficie.length} porcentaje={"+3.75%"} />
              <Card icon={<CarFront />} title={"Total de U.M"} cantidad={`${unidadesMovilesSuperficie.length + unidadesMovilesInteriorMina.length}`} porcentaje={"+2.98%"} />
              <Card icon={<CarFront className="text-red-600" />} title={"U.M en Interior Mina"} cantidad={unidadesMovilesInteriorMina.length} porcentaje={"+2.98%"} />
              <Card icon={<CarFront className="text-green-500" />} title={"U.M en Superficie"} cantidad={unidadesMovilesSuperficie.length} porcentaje={"+2.98%"} />
            </div>
          </section>
        </section>
      </div>

      {/* Tablas y paginación */}
      <div className=" flex flex-wrap mt-10">
        {[ 
          { title: "PERSONAS - INTERIOR MINA", data: personasInteriorMina, page: pageInteriorMina, setPage: setPageInteriorMina, itemsPerPage: itemsPerPageInteriorMina, setItemsPerPage: setItemsPerPageInteriorMina },
          { title: "PERSONAS - SUPERFICIE", data: personasSuperficie, page: pageSuperficie, setPage: setPageSuperficie, itemsPerPage: itemsPerPageSuperficie, setItemsPerPage: setItemsPerPageSuperficie },
          { title: "U.M - INTERIOR MINA", data: unidadesMovilesInteriorMina, page: pageUnidadesMina, setPage: setPageUnidadesMina, itemsPerPage: itemsPerPageUnidadesMina, setItemsPerPage: setItemsPerPageUnidadesMina },
          { title: "U.M - SUPERFICIE", data: unidadesMovilesSuperficie, page: pageUnidadesSuperficie, setPage: setPageUnidadesSuperficie, itemsPerPage: itemsPerPageUnidadesSuperficie, setItemsPerPage: setItemsPerPageUnidadesSuperficie }
        ].map(({ title, data, page, setPage, itemsPerPage, setItemsPerPage }, index) => (
          <div key={index} className="w-1/2 mb-5 pr-2">
            <section>
              <div className="overflow-x-auto bg-white py-2 shadow-md rounded-lg mb-6">
                <h3 className="font-semibold text-xl p-4">{title}</h3>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-sky-600 text-left">
                      <th className="px-4 text-white text-xs py-3 border-b">Nombre Completo</th>
                      <th className="px-4 text-white text-xs py-3 border-b">DNI</th>
                      <th className="px-4 text-white text-xs py-3 border-b">Mac Address</th>
                      <th className="px-4 text-white text-xs py-3 border-b">Asistencia</th>
                      <th className="px-4 text-white text-xs py-3 border-b">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginate(data, page, itemsPerPage).map((evento, index) => (
                      <tr key={evento.id || index} className="hover:bg-gray-50">
                        <td className="px-4 text-xs py-1.5 border-b">{`${evento.FirstName} ${evento.SecondName} ${evento.LastName} ${evento.SecondLastName}`}</td>
                        <td className="px-4 text-xs py-1.5 border-b">{evento.DNI}</td>
                        <td className="px-4 text-xs py-1.5 border-b">{evento.MacAddressiB}</td>
                        <td className="px-4 text-xs py-1.5 border-b">{evento.Asistencia}</td>
                        <td className="px-4 text-xs py-1.5 border-b">{evento.Fecha}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Selector de registros por página para esta tabla */}
                <div className="flex justify-center my-4">
                  <label htmlFor="itemsPerPage" className="text-sm mr-2">Mostrar registros por página:</label>
                  <select
                    id="itemsPerPage"
                    className="border p-1 rounded-sm"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>

                {/* Paginación */}
                <nav className="flex justify-center">
                  <ul className="flex items-center space-x-2">
                    <li>
                      <button
                        onClick={() => setPage(1)}
                        disabled={page === 1}
                        className="cursor-pointer p-1 rounded-sm text-black text-xs"
                      >
                        <ChevronFirst className="text-sky-600" />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="cursor-pointer p-1 rounded-sm text-black text-xs"
                      >
                        <CircleChevronLeft className="text-sky-600" />
                      </button>
                    </li>

                    {getVisiblePages(page, totalPages(data, itemsPerPage)).map(p => (
                      <li key={p}>
                        <button
                          onClick={() => setPage(p)}
                          className={`cursor-pointer p-1 rounded-sm text-black text-xs ${page === p ? 'bg-sky-600 text-white' : ''}`}
                        >
                          {p}
                        </button>
                      </li>
                    ))}

                    <li>
                      <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages(data, itemsPerPage)}
                        className="cursor-pointer p-1 rounded-sm text-black text-xs"
                      >
                        <CircleChevronRight className="text-sky-600" />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setPage(totalPages(data, itemsPerPage))}
                        disabled={page === totalPages(data, itemsPerPage)}
                        className="cursor-pointer p-1 rounded-sm text-black text-xs"
                      >
                        <ChevronLast className="text-sky-600" />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
