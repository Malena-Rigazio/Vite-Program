import '../estilos/caja.css';
import '../imagenes/gatito1.jpg';
function caja() {
    return (
        <div className='card'>
            <img className='contendorImagen'
                 src={gatito1.jpg} width={300}
                 />
            <h3>
                Gatito 1
            </h3>
            <button className='botonMasInfo'>
                Ver más
            </button>
        </div>
    );
}

export default caja;