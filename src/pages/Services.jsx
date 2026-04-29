import { useEffect, useState } from "react";
import { getServices } from "../services/api";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(data => {
      console.log(data); // 👈 ESTO ES CLAVE
      setServices(data);
    });
  }, []);

  return (
    <div>
      {services.map(s => (
        <p key={s.id}>{s.title}</p>
      ))}
    </div>
  );
}
export default Services;