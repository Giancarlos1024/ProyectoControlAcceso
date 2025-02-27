import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";

export const UsuariosDashboard = () => {
  const {
    formData,
    setFormData,
    dniToDelete,
    setDniToDelete,
    dniOptions,
    users,
    errors,
    status,
    handleChange,
    handleSubmit,
    handleDelete
  } = useContext(UsersContext);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar usuarios por cualquier campo (ignorando mayúsculas/minúsculas)
  const filteredUsers = users && users.length > 0 ? users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      (user.FirstName && user.FirstName.toLowerCase().includes(term)) ||
      (user.SecondName && user.SecondName.toLowerCase().includes(term)) ||
      (user.LastName && user.LastName.toLowerCase().includes(term)) ||
      (user.SecondLastName && user.SecondLastName.toLowerCase().includes(term)) ||
      (user.DNI && user.DNI.toLowerCase().includes(term)) ||
      (user.Company && user.Company.toLowerCase().includes(term)) ||
      (user.Position && user.Position.toLowerCase().includes(term))
    );
  }) : [];
  
  
  
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Register User */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Registrar Usuario</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* ... (los inputs del formulario de registro) */}
          <div>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="p-2 border rounded w-full"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <input
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              placeholder="Second Name"
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-2 border rounded w-full"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div>
            <input
              name="secondLastName"
              value={formData.secondLastName}
              onChange={handleChange}
              placeholder="Second Last Name"
              className="p-2 border rounded w-full"
            />
            {errors.secondLastName && <p className="text-red-500 text-sm">{errors.secondLastName}</p>}
          </div>
          <div>
            <input
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="DNI (8 digits)"
              className="p-2 border rounded w-full"
            />
            {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
          </div>
          <div>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="p-2 border rounded w-full"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          <div className="col-span-2">
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Position"
              className="p-2 border rounded w-full"
            />
            {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button onClick={handleSubmit} className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">
            Enviar
          </button>
          <button
            onClick={() => {
              setFormData({
                firstName: "",
                secondName: "",
                lastName: "",
                secondLastName: "",
                dni: "",
                company: "",
                position: ""
              });
              setErrors({});
              setStatus("");
            }}
            className="border cursor-pointer px-4 py-2 rounded"
          >
            Limpiar
          </button>
        </div>
        {status && (
          <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            {status}
          </div>
        )}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Eliminar Usuario</h2>
        <input
          type="text"
          list="dniList"
          value={dniToDelete}
          onChange={(e) => setDniToDelete(e.target.value)}
          placeholder="User DNI"
          className="p-2 border rounded w-full mb-2"
        />
        <datalist id="dniList">
          {dniOptions.map((option, index) => (
            <option key={index} value={option.DNI} />
          ))}
        </datalist>
        <button onClick={handleDelete} className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded mt-4">
          Eliminar
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por nombre, DNI, empresa o cargo..."
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-sky-600 text-left">
              <th className="px-4 py-3 text-white text-xs">Nombre Completo</th>
              <th className="px-4 py-3 text-white text-xs">DNI</th>
              <th className="px-4 py-3 text-white text-xs">Empresa</th>
              <th className="px-4 py-3 text-white text-xs">Cargo</th>
            </tr>
          </thead>
          <tbody>
  {
    filteredUsers.map((user, index) => (
      <tr key={user.DNI || index} className="hover:bg-gray-50">
        <td className="px-4 py-2 text-xs border-b">
          {`${user.FirstName} ${user.SecondName || ""} ${user.LastName} ${user.SecondLastName}`}
        </td>
        <td className="px-4 py-2 text-xs border-b">{user.DNI}</td>
        <td className="px-4 py-2 text-xs border-b">{user.Company}</td>
        <td className="px-4 py-2 text-xs border-b">{user.Position}</td>
      </tr>
    ))
  }
</tbody>

        </table>
      </div>
    </div>
  );
};
