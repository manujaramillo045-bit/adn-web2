const convencionales = [
    { nombre: "Abdomen total", descripcion: "Evalúa hígado, vesícula, páncreas, bazo, riñones y vejiga en un solo estudio. Requiere 5 horas de ayuno." },
    { nombre: "Hepatobiliar", descripcion: "Se enfoca en hígado, vesícula y vías biliares; permite detectar cálculos, inflamación o alteraciones en estos órganos." },
    { nombre: "Obstétrica", descripcion: "Permite ver el desarrollo del bebé durante el embarazo: crecimiento, posición, latido cardiaco y cantidad de líquido amniótico." },
    { nombre: "Cadera", descripcion: "Evalúa las estructuras de la articulación de la cadera; en bebés se usa para descartar displasia de cadera." },
    { nombre: "Vías urinarias", descripcion: "Evalúa riñones y vejiga para detectar cálculos, infecciones o alteraciones. Se realiza con la vejiga llena." },
    { nombre: "Mama", descripcion: "Examina el tejido mamario para evaluar nódulos o cambios detectados en el autoexamen o en una mamografía." },
    { nombre: "Transvaginal", descripcion: "Evalúa el útero y los ovarios con un transductor interno, con mayor detalle que la ecografía abdominal." },
    { nombre: "Tiroides o cuello", descripcion: "Evalúa el tamaño y la estructura de la tiroides y los ganglios del cuello." },
    { nombre: "Próstata", descripcion: "Evalúa el tamaño y la forma de la próstata." },
    { nombre: "Testicular", descripcion: "Evalúa los testículos y estructuras cercanas para detectar quistes, inflamación u otras alteraciones." },
    { nombre: "Tejidos blandos", descripcion: "Evalúa masas, quistes o inflamación en músculos, grasa o piel en cualquier parte del cuerpo." },
    { nombre: "Articular de rodilla y mano", descripcion: "Evalúa tendones, ligamentos y líquido articular en estas zonas." },
    { nombre: "Articular de hombro y codo", descripcion: "Evalúa tendones y estructuras del hombro o el codo, útil en lesiones deportivas o dolor persistente." }
];

const doppler = [
    { nombre: "Doppler venoso", descripcion: "Evalúa el flujo sanguíneo en las venas, usado sobre todo para descartar trombosis en piernas o brazos." },
    { nombre: "Doppler arterial", descripcion: "Evalúa el flujo sanguíneo en las arterias, útil para detectar obstrucciones o mala circulación." },
    { nombre: "Doppler testicular", descripcion: "Evalúa el flujo sanguíneo en los testículos, clave para descartar torsión testicular u otras urgencias." },
    { nombre: "Doppler renal", descripcion: "Evalúa el flujo sanguíneo hacia y desde los riñones." }
];
function pintarServicios(lista, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = lista
        .map(servicio => `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="servicio-card" role="button" data-bs-toggle="modal" data-bs-target="#modalServicio"
             data-nombre="${servicio.nombre}" data-descripcion="${servicio.descripcion}">
          ${servicio.nombre}
        </div>
      </div>`)
        .join("");
}

pintarServicios(convencionales, "lista-convencionales");
pintarServicios(doppler, "lista-doppler");

document.getElementById("modalServicio").addEventListener("show.bs.modal", function (evento) {
    const tarjeta = evento.relatedTarget;
    document.getElementById("modalServicioTitulo").textContent = tarjeta.getAttribute("data-nombre");
    document.getElementById("modalServicioTexto").textContent = tarjeta.getAttribute("data-descripcion");
});


