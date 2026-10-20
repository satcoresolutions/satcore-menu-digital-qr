<div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="180" />

# Menú digital con QR

**Un menú digital accesible para consultar platos, horarios y la oferta de un restaurante desde cualquier dispositivo.**

Desarrollado con Next.js y TypeScript por **SatCore Solutions**.

_Soluciones digitales seguras, accesibles y funcionales para todos._

[![License](https://img.shields.io/badge/License-SCSAL%201.0-132A8E.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Sobre el proyecto

**Menú digital con QR** es una microaplicación web desarrollada por **SatCore Solutions** para facilitar la consulta de los productos y platos ofrecidos por un restaurante.

Permite presentar la información del establecimiento, sus horarios y su menú en una interfaz web adaptable a dispositivos móviles, tabletas y computadores.

La aplicación incluye una función para generar un código QR a partir de la URL actual, facilitando el acceso al menú cuando se encuentra publicado en internet.

El proyecto busca ofrecer una alternativa digital sencilla y práctica para establecimientos gastronómicos que desean compartir su menú sin depender de documentos impresos.

## Características

- **Menú digital:** consulta los platos y la información disponible del restaurante.
- **Información del establecimiento:** configura el nombre y los horarios desde el archivo de datos.
- **Código QR:** genera un código QR a partir de la URL actual de la aplicación.
- **Diseño adaptable:** interfaz preparada para diferentes tamaños de pantalla.
- **Personalización:** permite ajustar los colores de marca mediante variables CSS.
- **Configuración sencilla:** organiza los datos del menú en un archivo centralizado.
- **Despliegue web:** puede publicarse en Vercel o en otro entorno compatible con Next.js.

> La generación del QR facilita el acceso a la dirección web, pero no publica la aplicación por sí misma. Para que otras personas puedan consultar el menú, primero debes desplegarlo en una URL accesible.

## Tecnologías

- [Next.js](https://nextjs.org/) — framework para aplicaciones web.
- [React](https://react.dev/) — biblioteca para interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/) — tipado estático.
- CSS — estilos y personalización visual.
- npm — gestión de dependencias.

El proyecto utiliza las dependencias declaradas en `package.json`. La implementación exacta de la generación del QR depende de la biblioteca utilizada por el repositorio.

## Requisitos

Antes de comenzar, instala:

- [Node.js](https://nodejs.org/) — preferiblemente una versión LTS compatible con la versión de Next.js del proyecto.
- npm — incluido con Node.js.
- [Git](https://git-scm.com/) — para clonar y administrar el repositorio.

## Instalación

### 1. Clonar el repositorio

Reemplaza la URL de ejemplo por la dirección real del repositorio en GitHub.

```bash
git clone https://github.com/satcoresolutions/menu-digital-qr.git
```

Entra en la carpeta del proyecto:

```bash
cd menu-digital-qr
```

### 2. Instalar las dependencias

```bash
npm install
```

Si el repositorio ya incluye un `package-lock.json` actualizado, también puedes instalar las dependencias de forma reproducible con:

```bash
npm ci
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre la siguiente dirección en tu navegador:

http://localhost:3000

La aplicación estará disponible localmente mientras el servidor de desarrollo permanezca activo.

## Configuración del proyecto

### Datos del restaurante y del menú

Edita el archivo:

```text
data/menu.ts
```

Aquí se centralizan los datos configurables del menú, como:

- Nombre del establecimiento.
- Horarios de atención.
- Platos y productos.
- Información adicional definida por la estructura de datos del proyecto.

Antes de modificar los datos, revisa la estructura existente y conserva los nombres de las propiedades y los tipos definidos en TypeScript.

### Colores de marca

Edita las variables CSS definidas en:

```text
app/globals.css
```

Busca el bloque `:root` para localizar los colores y demás variables globales disponibles.

Puedes adaptar la paleta visual al restaurante sin necesidad de modificar los datos del menú.

### Código QR

El botón de QR genera un código a partir de la URL actual de la aplicación.

En desarrollo, esa dirección puede ser `localhost:3000`, que solo es accesible desde el entorno local correspondiente.

Para compartir el QR con clientes:

1. Despliega la aplicación.
2. Obtén la URL pública.
3. Abre la aplicación publicada.
4. Genera el código QR desde esa dirección.
5. Escanea el código con otro dispositivo y verifica que el menú sea accesible.

**Importante:** si cambia el dominio o la URL pública, es posible que debas generar y distribuir un nuevo QR.

## Variables de entorno

La aplicación no requiere necesariamente variables de entorno adicionales para funcionar. Esto depende de las funcionalidades y dependencias implementadas.

Si el proyecto necesita variables de entorno:

1. Consulta el archivo `.env.example`.
2. Crea un archivo `.env.local` en la raíz.
3. Completa las variables requeridas.
4. Reinicia el servidor de desarrollo.

No publiques archivos `.env.local` ni credenciales en GitHub.

## Estructura del proyecto

La estructura puede variar según la versión del repositorio. Como referencia, los archivos principales son:

```text
menu-digital-qr/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data/
│   └── menu.ts
├── public/
│   └── logo.png
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

La carpeta `app/` contiene la aplicación y sus estilos globales. `data/menu.ts` centraliza la información del menú y `public/` almacena los recursos estáticos.

Los componentes adicionales y las demás carpetas dependerán de la implementación concreta del proyecto.

## Compilación para producción

Antes de desplegar, comprueba que el proyecto compile correctamente.

```bash
npm run build
```

Para ejecutar la versión de producción localmente:

```bash
npm start
```

El comando `npm start` requiere que se haya generado previamente la compilación y que exista el script correspondiente en `package.json`.

## Despliegue

### Opción 1. Vercel

[Vercel](https://vercel.com/) es una opción práctica para publicar proyectos Next.js.

Pasos generales:

1. Sube el repositorio a GitHub.
2. Accede a Vercel.
3. Importa el repositorio.
4. Verifica la configuración de compilación.
5. Configura las variables de entorno si son necesarias.
6. Despliega la aplicación.
7. Abre la URL pública y comprueba el funcionamiento del menú.

También puedes utilizar la CLI de Vercel si la tienes instalada y configurada:

```bash
vercel
```

### Opción 2. Servidor compatible con Node.js

En un entorno compatible con Next.js, instala las dependencias, genera la compilación e inicia el servidor:

```bash
npm ci
npm run build
npm start
```

La disponibilidad pública dependerá de la configuración del servidor, el dominio, HTTPS y el entorno de alojamiento.

## Datos y privacidad

La información que muestra el menú se define en `data/menu.ts`, según la implementación actual descrita para este proyecto.

No se debe asumir que la aplicación utiliza una base de datos, un sistema de autenticación o un servicio externo si estos componentes no están implementados.

La generación de un QR basado en la URL permite compartir el acceso al menú; no implica por sí misma el almacenamiento de información personal.

Si en futuras versiones se incorporan analítica, cookies, formularios, APIs u otros servicios que procesen datos personales, se deberá actualizar esta sección para explicar su uso y las medidas de privacidad correspondientes.

## Contribuciones

Las propuestas de mejora y los reportes de errores deben seguir las pautas definidas en [`CONTRIBUTING.md`](./CONTRIBUTING.md), si este archivo está presente en el repositorio.

Para reportar problemas, incluye una descripción clara, los pasos para reproducirlos y la información técnica necesaria.

## Autoría y atribución

Este proyecto fue desarrollado originalmente por:

### SatCore Solutions

**Soluciones digitales seguras, accesibles y funcionales para todos.**

- GitHub: https://github.com/satcoresolutions

El código se distribuye conforme a los términos de la **SatCore Solutions Attribution License (SCSAL) 1.0**, incluidos en el archivo [`LICENSE`](./LICENSE).

La licencia establece las condiciones aplicables al uso, estudio, modificación y redistribución del código, incluida la atribución a SatCore Solutions como fuente original.

Si utilizas este proyecto como base para otro desarrollo, conserva la atribución y cumple las demás condiciones de la licencia.

Ejemplo de atribución:

> Basado en Menú digital con QR, desarrollado originalmente por SatCore Solutions.
>
> Proyecto original: https://github.com/satcoresolutions/menu-digital-qr

Si modificas el código, indica de manera clara que has realizado cambios.

## Marca y elementos visuales

El nombre **SatCore Solutions**, su logotipo, su identidad visual y los demás elementos distintivos de la marca se rigen por las condiciones aplicables a dichos elementos y por la legislación correspondiente.

La licencia del código no concede automáticamente derechos sobre las marcas o los logotipos de SatCore Solutions.

## Licencia

**SatCore Solutions Attribution License — SCSAL 1.0**

Consulta [`LICENSE`](./LICENSE) para conocer los términos completos de uso, modificación y distribución.

La licencia debe interpretarse junto con los derechos de terceros y las licencias de las dependencias utilizadas por el proyecto.

## Autor

**SatCore Solutions**

_Soluciones digitales seguras, accesibles y funcionales para todos._

GitHub: https://github.com/satcoresolutions

---

<div align="center">

**© SatCore Solutions**

_Todos los derechos reservados sobre los elementos protegidos de la marca, conforme a la legislación aplicable y sin perjuicio de los permisos otorgados por la licencia del código._

</div>
