import { useState, useEffect, createContext, useCallback } from "react";

export const BeaconsContext = createContext();

export const BeaconsProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    MacAddressiB: "",
    TypeBeacon: "",
  });


  const [macToDelete, setMacToDelete] = useState("");
  const [beacons, setBeacons] = useState([]); 
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // 🚀 Mejor manejo de errores en `fetchBeacons`
  const fetchBeacons = useCallback(() => {
    fetch("http://localhost:1880/get-beacons")
      .then((response) => response.json())
      .then((data) => {
        console.log("📌 Respuesta del backend:", data);
        setBeacons(Array.isArray(data) ? data : data.BDBeacons || []);
      })
      .catch((error) => console.error("❌ Error obteniendo beacons:", error));



  }, []);

  useEffect(() => {
    fetchBeacons();
  }, [fetchBeacons]);

  // 📌 Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 📌 Validación separada para mayor claridad
  const validateForm = () => {
    let newErrors = {};
    const { MacAddressiB, TypeBeacon } = formData;

    if (!MacAddressiB) {
      newErrors.MacAddressiB = "El campo MacAddressiB es obligatorio.";
    } else if (MacAddressiB.length !== 12 || !MacAddressiB.startsWith("C30000")) {
      newErrors.MacAddressiB = "Debe tener 12 caracteres y empezar con 'C30000'.";
    }

    if (!TypeBeacon) {
      newErrors.TypeBeacon = "El campo TypeBeacon es obligatorio.";
    } else if (TypeBeacon.length > 50) {
      newErrors.TypeBeacon = "Máximo 50 caracteres permitidos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 📌 Enviar datos al backend (con mejor manejo de errores)
  const handleSubmit = async () => {
    if (!validateForm()) return;
  
    const exists = beacons.some(beacon => beacon.MacAddressiB === formData.MacAddressiB);
    if (exists) {
      setStatus("El Beacon con esta dirección MAC ya está registrado.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:1880/registro-beacon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok || data.error) {
        throw new Error(data.error || "Error en el registro.");
      }
  
      setStatus(data.message || "Se registró correctamente.");
      setFormData({ MacAddressiB: "", TypeBeacon: "" });
      fetchBeacons();
    } catch (error) {
      console.error("Error:", error);
      setStatus(error.message);
    }
  
    setTimeout(() => setStatus(""), 3000);
  };

  const handleDeleteBeacon = async () => {
    if (!macToDelete.trim()) {
      alert("Por favor, ingresa una dirección MAC válida.");
      return;
    }
  
    const beaconExists = beacons.some(beacon => beacon.MacAddressiB === macToDelete);
    if (!beaconExists) {
      alert("El beacon con esta dirección MAC no existe.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:1880/delete-beacon/${macToDelete}`, {
        method: "DELETE",
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Beacon eliminado correctamente.");
        setBeacons(prevBeacons => prevBeacons.filter(beacon => beacon.MacAddressiB !== macToDelete));
        setMacToDelete(""); // Limpiar el input
      } else {
        throw new Error(data.error || "No se pudo eliminar el beacon.");
      }
    } catch (error) {
      console.error("Error eliminando beacon:", error);
      alert("Ocurrió un error eliminando el beacon. Intenta nuevamente.");
    }
  };
  
  

  return (
    <BeaconsContext.Provider value={{ 
        formData, 
        setFormData, 
        handleChange, 
        handleSubmit,
        macToDelete,
        setMacToDelete, 
        beacons,
        handleDeleteBeacon, 
        errors, 
        status }}>
      {children}
    </BeaconsContext.Provider>
  );
};
