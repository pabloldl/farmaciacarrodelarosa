# Farmacia Carro de la Rosa

Landing estática creada desde cero con HTML5, CSS3 y JavaScript vanilla. Trabajo exclusivamente local, sin despliegues ni modificaciones de otros proyectos.

## Abrir

Abre `index.html` con Live Server. También se puede abrir directamente como archivo: todo el contenido y la navegación están disponibles; copiar el teléfono utiliza un campo seleccionable si el portapapeles no está disponible. No hay instalación, compilación, fuentes externas, bibliotecas de producción, analítica, cookies propias ni formularios.

```text
farmacia-carro-de-la-rosa/
├── index.html
├── css/style.css
├── js/script.js
├── img/mortero.webp
├── favicon.svg
├── .gitignore
└── README.md
```

## Dirección creativa

Identidad tipográfica y de señalética: placa de nombre, franja de dirección con número de portal, índice circular de cuatro capítulos, registro de consultas A/B/C, ficha de destino y línea telefónica integrada. La portada no utiliza fotografía, columnas imagen/texto ni mosaicos. La fotografía aparece después como referencia visual al oficio, sin atribuir prestaciones.

Paleta: blanco cálido `#F5F5EF`, petróleo `#263E45`, salvia `#A8B8A4`, arena `#D9C7B5` y blanco. Tipografía de sistema Bahnschrift con alternativas Segoe UI y Arial; no requiere descargas. El símbolo geométrico de rosa y el favicon son SVG originales del proyecto. No se afirma que sean el logotipo oficial registrado del negocio.

En móvil la dirección se reorganiza con el número del portal, las acciones ocupan una fila de dos celdas, las consultas usan un margen de letras y el contacto tiene su propia distribución. Los cuatro enlaces del menú permanecen visibles: no se necesita desplegable ni JavaScript para navegar.

## Investigación y decisiones editoriales

Revisión realizada el **26 de octubre de 2026**. Los datos publicados de nombre, dirección y teléfono son los proporcionados en el encargo. Se encontraron referencias coincidentes, pero **no se obtuvo confirmación directa actual del titular ni una ficha oficial completa**. La investigación también encontró directorios contradictorios: no se presenta esa coincidencia como certificación oficial.

| Dato | Resultado y decisión |
| --- | --- |
| Nombre comercial | Se conserva Farmacia Carro de la Rosa, facilitado en el encargo y presente en directorios públicos. |
| Dirección y teléfono | Se conservan Plaza de la Constitución, 7, 11670 El Bosque, Cádiz y 956 716 268. Algunas referencias publican nº 11 o un teléfono distinto; se documenta la discrepancia y no se sustituye el dato facilitado. |
| Horario oficial actualizado | No confirmado. Se invita a llamar; no se publican horas ni estado de apertura. |
| Servicios adicionales | No confirmados en una fuente propia u oficial. No se publican catálogos, especialidades, reparto, pruebas ni prestaciones clínicas. Solo presentación general como farmacia. |
| Web y redes oficiales | No se localizó un sitio propio ni un perfil social inequívocamente verificable. Una mención genérica a facebook.com en un directorio no valida una cuenta: no se enlaza. |
| Fotos reales autorizadas | No se encontró permiso verificable para fotos del establecimiento. Se usa un bodegón con licencia, identificado de forma visible como ilustrativo. |
| Guardias | Se enlaza al buscador del Colegio Oficial de Farmacéuticos de Cádiz; no se atribuye un turno, calendario o disponibilidad a la farmacia. |

Fuentes consultadas:

- [Colegio Oficial de Farmacéuticos de Cádiz](https://www.cofcadiz.es/): su portada identifica el Colegio y presenta los buscadores de farmacias y guardias.
- [Buscador de guardias del Colegio](https://www.cofcadiz.eu/farmacias-de-guardia-abiertas/): fuente oficial enlazada como recurso externo, sin extraer turnos. Su contenido se identificó en resultados indexados; la apertura directa mediante el navegador de investigación devolvió HTTP 403. No se afirma haber comprobado la consulta interactiva ni las guardias actuales.
- [Directorio Perfumería García](https://perfumeria-garcia.es/farmacia-carro-de-la-rosa/): coincide con los datos facilitados. Fuente secundaria, insuficiente para acreditar horarios, servicios o autorización fotográfica.
- [Búsqueda Local](https://www.busqueda-local.es/el-bosque/farmacia-carro-de-la-rosa-aY2Ozh.html) y [Firmania](https://firmania.es/el-bosque-cadiz-andalucia/farmacia-carro-de-la-rosa-1740773): se detectaron dirección o teléfono diferentes; no se incorporan.

No se incluyen reseñas, años de experiencia, profesionales, sellos, promociones, recomendaciones médicas, horarios o datos de accesibilidad física no confirmados. La ilustración del mortero no anuncia formulación magistral, fitoterapia ni venta de preparados.

## Fotografía: procedencia, licencia y validación

- Archivo final: `img/mortero.webp`.
- Autor: **MART PRODUCTION**.
- Fuente: [White Ceramic Mortar and Pestle — Pexels, foto 8450505](https://www.pexels.com/photo/white-ceramic-mortar-and-pestle-8450505/).
- Descarga: `https://images.pexels.com/photos/8450505/pexels-photo-8450505.jpeg?auto=compress&cs=tinysrgb&w=1600`.
- [Licencia Pexels](https://www.pexels.com/license/), consultada el 26/10/2026: permite uso comercial y modificación. No se insinúa respaldo del fotógrafo ni se incorpora la fotografía a la marca.
- Descarga JPEG convertida con Sharp a WebP real, calidad 83, **1400 × 934 px, 44.226 bytes**. Decodificación completa comprobada y visualización revisada tanto como archivo como en la página.
- La imagen se conserva localmente; no hay hotlinking. Tiene dimensiones HTML, texto alternativo y carga diferida. El contenido permanece visible sin JavaScript.
- Se descartó una imagen de estanterías por mostrar medicamentos concretos; no se utiliza ni se distribuye. Una descarga alternativa de Wikimedia devolvió 429 y tampoco se incorporó.

## Accesibilidad y comportamiento

HTML semántico, un solo H1, enlace para saltar al contenido, navegación nativa por anclas, controles con nombre accesible y foco visible. La copia anuncia su resultado con `role="status"` y `aria-live`, y ofrece un campo de copia manual si falla la API o el contexto no es seguro. El botón solo aparece cuando se ejecuta JavaScript.

Animación limitada a scroll nativo y microinteracciones de enlaces, botones e imagen. No hay elementos ocultos a la espera de animaciones, carruseles ni scroll secuestrado. `prefers-reduced-motion` desactiva las transiciones y el desplazamiento suave.

El año se actualiza en la zona Europe/Madrid y tiene 2026 como valor estático de respaldo. Todos los enlaces telefónicos usan `tel:+34956716268`; Google Maps recibe la dirección textual, sin coordenadas inventadas. Los enlaces externos tienen `noopener noreferrer`.

## SEO

Title, descripción, Open Graph, idioma español y JSON-LD `Pharmacy` con los datos facilitados. No se añaden horarios, servicios ni valoraciones al marcado. Al no existir dominio de publicación, no se inventan canonical, `og:url` o URL de negocio. La imagen Open Graph es relativa para el trabajo local: antes de una publicación futura, convertirla a una URL absoluta del dominio real.

## Auditoría de originalidad

Se revisaron el HTML y los estilos disponibles de `el-bosque-informatica`, `guadalinfo-el-bosque`, `carniceria-rafael`, `panaderia-marchenilla`, `abaceria-de-julian` y `venta-mateo`. No se copiaron archivos, fotografías, tipografías ni componentes. Comparación de código y estructura; no se afirma haber realizado una comparación visual en navegador de esos proyectos.

La propuesta evita sus titulares condensados monumentales, portadas fotográficas, nombres fragmentados, narrativa gastronómica, interfaces de ventana y navegaciones inferiores. Utiliza una placa de farmacia, un registro de información y una ficha de dirección; contacto claro sobre fondo cálido y pie de firma compacto. Se emplean convenciones web comunes cuando favorecen la accesibilidad, como enlaces nativos, teléfono y foco visible.

## Verificación ejecutada

Pruebas locales con **Playwright y Microsoft Edge en modo headless**, usando módulos ya presentes en el workspace, sin instalarlos ni modificar otros proyectos. Servidor temporal detenido al finalizar.

- Capturas de página completa en **375, 768, 1440 y 1920 px**: imagen cargada y cero desbordamientos horizontales.
- Revisión visual de las capturas de escritorio, tableta y móvil.
- Ningún error JavaScript ni recurso local con respuesta HTTP fallida.
- Todas las anclas apuntan a destinos existentes; clic real en Contactar comprobado en 375 px.
- Foco por teclado y activación del enlace de salto al contenido comprobados.
- Portapapeles: escritura real, lectura de resultado y anuncio de confirmación comprobados.
- Error de portapapeles forzado: campo visible, enfocado y completamente seleccionado.
- Enlaces `tel:` y parámetros de las tres rutas de Maps comprobados. No se realizaron llamadas ni se probó el trayecto físico o la interfaz externa de Google Maps.
- Preferencia de movimiento reducido comprobada en el estilo calculado.
- Con JavaScript desactivado: titular, imagen, teléfono y navegación disponibles; control de copiar oculto.
- Imagen WebP identificada y decodificada completamente; dimensiones y peso comprobados.
- Sintaxis JavaScript comprobada con `node --check`.

Evidencia y script auxiliar en `.qa/` (ignorado por Git y prescindible para servir la web). No se realizó una auditoría con lector de pantalla, una certificación WCAG completa ni pruebas en dispositivos físicos. No se desplegó el proyecto.
