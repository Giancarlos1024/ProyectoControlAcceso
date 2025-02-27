import { useState, useEffect, createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    dni: "",
    company: "",
    position: ""
  });
  const [dniToDelete, setDniToDelete] = useState("");
  const [dniOptions, setDniOptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Función para obtener la lista de DNIs (para el datalist)
  const fetchDniOptions = async () => {
    try {
      const response = await fetch("http://localhost:1880/get-dnis");
      const data = await response.json();
      console.log("data dni",data);
      setDniOptions(data);
    } catch (error) {
      console.error("Error fetching DNI options:", error);
    }
  };

  // Función para obtener la lista completa de usuarios
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:1880/get-users");
      const data = await response.json();
      console.log("Usuarios obtenidos:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  

  useEffect(() => {
    fetchDniOptions();
    fetchUsers();
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.secondLastName) newErrors.secondLastName = "Second last name is required.";
    if (!formData.dni) {
      newErrors.dni = "DNI is required.";
    } else if (!/^[0-9]{8}$/.test(formData.dni)) {
      newErrors.dni = "DNI must be exactly 8 digits.";
    }
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.position) newErrors.position = "Position is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const response = await fetch("http://localhost:1880/registro-usuario", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
          throw new Error(data.message || "Error en el registro.");
      }

      setStatus(data.message || "Usuario registrado con éxito");
      setFormData({
          firstName: "",
          secondName: "",
          lastName: "",
          secondLastName: "",
          dni: "",
          company: "",
          position: "",
      });

      fetchDniOptions();
      fetchUsers();

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Error en el registro:", error);
      setStatus(error.message);
    }
  };


  const handleDelete = async () => {
    if (!dniToDelete || !/^[0-9]{8}$/.test(dniToDelete)) {
      alert("Enter a valid DNI");
      return;
    }
    await fetch(`http://localhost:1880/delete-user/${dniToDelete}`, {
      method: "DELETE"
    });
    alert("User successfully deleted");
    setDniToDelete("");
    fetchDniOptions();
    fetchUsers();
  };

  return (
    <UsersContext.Provider
      value={{
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
        handleDelete,
        fetchUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
