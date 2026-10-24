# Changelog

Todos los cambios importantes del proyecto **Menú digital con QR** se documentarán en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios.

---

## [Unreleased]

### Added

- 

### Changed

- 

### Fixed

- 

### Removed

- 

### Security

- 

---

## [1.2.0] - 2026-10-23

### Added

- Buscador de platos y bebidas por nombre y descripción.
- Navegación por categorías del menú.
- Visualización de los resultados de búsqueda según los productos coincidentes.
- Mensaje informativo cuando no se encuentran productos.
- Opción para limpiar la búsqueda y volver a consultar el menú completo.
- Modal para visualizar y compartir el código QR del menú.
- Opción para descargar el código QR en formato PNG.

### Changed

- Se separa la presentación general de la página de las funcionalidades específicas del menú.
- Se reorganiza la interfaz para mejorar la navegación y la consulta de productos.
- Se ajusta la distribución del contenido del modal para mantener los elementos organizados y centrados.
- Se mejora la presentación del código QR, su descripción y la URL del menú.
- Se unifican los estilos de los componentes con el sistema visual de SatCore Solutions.
- Se optimiza la adaptación de los elementos de la interfaz a diferentes tamaños de pantalla.

### Fixed

- Se corrige la alineación y el centrado del texto descriptivo del código QR.
- Se ajusta la disposición vertical de los elementos del modal.
- Se mejora la presentación del código QR en el modal.
- Se corrige la distribución visual de los elementos de búsqueda y navegación por categorías.

### Removed

- Se elimina la duplicación de elementos de presentación general dentro del componente del menú.

### Security

- Se mantiene la recomendación de utilizar HTTPS en los entornos de despliegue para proteger la conexión y el acceso al menú.

---

## [1.1.0] - 2026-10-20

### Added

- Menú digital adaptable para dispositivos móviles, tabletas y computadores.
- Visualización de la información del establecimiento.
- Visualización de horarios de atención.
- Presentación de platos y productos del menú.
- Generación de código QR a partir de la URL actual de la aplicación.
- Configuración centralizada de los datos del restaurante mediante `data/menu.ts`.
- Personalización de colores mediante variables CSS.
- Identidad visual de SatCore Solutions.
- Soporte para despliegue en entornos compatibles con Next.js.
- Documentación inicial del proyecto.
- Licencia **SatCore Solutions Attribution License (SCSAL) 1.0**.
- Política de seguridad inicial mediante `SECURITY.md`.

### Changed

- 

### Fixed

- 

### Removed

- 

### Security

- Se establecen las primeras directrices para el reporte responsable de vulnerabilidades.
- Se documentan recomendaciones relacionadas con URLs, códigos QR y despliegue mediante HTTPS.