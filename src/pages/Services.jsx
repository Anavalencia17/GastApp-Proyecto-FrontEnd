import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
function Services() {
  return (
    <main>
      <Navbar />
      <section className="container">
        <h1>Servicios</h1>
        <section>
          <Card />
          <Card />
          <Card />
        </section>
        <Footer />
      </section>
    </main>
  );
}
export default Services
