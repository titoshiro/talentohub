import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CardLargas from "../componentes/cardlargas";
import Footer from "../componentes/footer";

const Redessociales = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://res.cloudinary.com/dcwloh062/image/upload/v1697464056/wepik-export-202310161346261dJJ_tkcaxq.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <Promociones />
        <h1 className="tituloweb">Redes Sociales </h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404365/Online_world-bro_okywew.png"}
                titulo={"Plan Basico"}
                informacion={[
                  "• Creación y optimización de perfiles en las principales redes sociales ",
                  "• Desarrollo de una estrategia de contenido inicial ",
                  "• Publicación regular y programada en las redes sociales ",
                  "• Interacción básica con seguidores ",
                  "• Informe mensual de rendimiento ",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"redessociales"}
              />
            </div>
            <div className="col-6">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Social_Growth-cuate_odloga.png"}
                titulo={"Plan Premium"}
                informacion={[
                  "• Creación y optimización de perfiles en las principales redes sociales ",
                  "• Desarrollo y ejecución de una estrategia de contenido avanzada ",
                  "• Publicación regular y estratégica para maximizar el alcance ",
                  "• Interacción activa con seguidores, gestión de comentarios y mensajes directos ",
                  "• Gestión de anuncios en redes sociales ",
                  "• Informe detallado de rendimiento con recomendaciones para la mejora continua ",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"redessociales"}
              />
            </div>
          </div>
        </div>
        <div className="container">
  <div className="row">
    <div className="col-12 mb-4">
    <CardLargas
  imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016115840HNzB_ub8prt.png"
  texto1={"En la fase de diseño y desarrollo, nuestros creativos toman la iniciativa para dar vida al proyecto, fusionando la creatividad con la funcionalidad. Nos esforzamos por superar tus expectativas, personalizando cada aspecto según tus requisitos para asegurar un producto verdaderamente único"}/>

      
     
    </div>
    <div className="col-12 mb-4">
    <CardLargas
      imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016120822H2bc_subkpz.png"}
      texto1={"Nuestro equipo altamente cualificado lleva a cabo la implementación del proyecto, ajustándose a la planificación estratégica inicial. Cada detalle se perfecciona cuidadosamente para garantizar que el resultado final cumpla con tus expectativas y necesidades específicas."}/>
   
    </div>
    <div className="col-12 mb-4">
    <CardLargas
      imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697458207/wepik-export-202310161149598ypy_hgk9ku.png"}
      texto1={"En el corazón de nuestro compromiso está la entrega de un proyecto completamente funcional. Los desarrolladores de TalentoHuB se aseguran de que cada aspecto del proyecto esté operativo, respaldado por evaluaciones previas exhaustivas para garantizar su correcto funcionamiento y tu satisfacción total"}/>
   
    </div>
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};

export default Redessociales;
