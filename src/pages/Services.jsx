import { useEffect, useState } from "react";
import { getServices } from "../services/api";
import { mapService } from "../model/serviceModel";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();

        // 👇 Aplicamos DTO (HU11)
        const mappedData = data.map(mapService);

        console.log(mappedData); // evidencia HU6 + HU11
        setServices(mappedData.slice(0, 10)); // limitar para que no sea gigante
      } catch (error) {
        console.error("Error al obtener servicios:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Servicios</h1>

      <section>
        {services.map(service => (
          <div key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;