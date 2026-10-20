# Security Policy

SatCore Solutions toma en serio la seguridad de sus proyectos y de la información que puedan procesar.

## Alcance

Esta política aplica al código y a los componentes mantenidos dentro del repositorio **Menú digital con QR**.

El proyecto es una aplicación web desarrollada con Next.js y TypeScript. De acuerdo con su implementación actual, el menú utiliza datos definidos en el propio proyecto y no requiere una base de datos, autenticación de usuarios ni un sistema propio de almacenamiento de información personal.

Los servicios externos, proveedores de alojamiento y dependencias de terceros están sujetos a sus propias políticas de seguridad.

## Reportar una vulnerabilidad

Si encuentras una posible vulnerabilidad de seguridad, evita crear un Issue público con información que pueda permitir su explotación.

Utiliza un canal privado para comunicar el problema al responsable del proyecto. Los canales oficiales de contacto se encuentran indicados en el README del repositorio.

## Información recomendada

Cuando sea posible, incluye:

- descripción de la vulnerabilidad;
- pasos para reproducirla;
- impacto potencial;
- versión afectada;
- evidencia técnica;
- posible solución o mitigación.

No incluyas información personal, credenciales, tokens, claves API u otros secretos.

## Qué no hacer

No publiques en Issues, Pull Requests u otros espacios públicos:

- contraseñas;
- API keys;
- tokens;
- credenciales;
- secretos de infraestructura;
- información personal;
- configuraciones sensibles;
- información que permita acceder a sistemas sin autorización.

## Gestión de vulnerabilidades

Las vulnerabilidades reportadas serán evaluadas teniendo en cuenta:

- severidad;
- impacto;
- alcance;
- facilidad de explotación;
- versiones afectadas;
- posibilidad de mitigación.

Cuando corresponda, SatCore Solutions desarrollará una corrección y actualizará la documentación o la versión afectada.

## Dependencias

Las dependencias del proyecto deben mantenerse razonablemente actualizadas.

Cuando sea necesario, se revisarán vulnerabilidades conocidas mediante las herramientas disponibles en el ecosistema de Node.js y npm.

Los usuarios y responsables de despliegues deben revisar las dependencias antes de utilizar el proyecto en entornos de producción.

## Código QR y seguridad

El código QR generado por la aplicación representa una URL.

La generación del código QR no publica, protege ni valida automáticamente la aplicación. La seguridad y disponibilidad de la URL dependen del entorno donde se encuentre desplegado el proyecto.

Antes de distribuir un código QR públicamente, se recomienda verificar que la URL de destino sea correcta y utilice HTTPS cuando el proyecto se encuentre publicado en producción.

## Datos y privacidad

La aplicación no debe considerarse un sistema de almacenamiento de información personal simplemente por generar o mostrar un código QR.

Si futuras versiones incorporan formularios, autenticación, analítica, cookies, APIs, bases de datos u otros mecanismos que procesen información personal, esta política y la documentación de privacidad deberán actualizarse de acuerdo con dichas funcionalidades.

## Contacto

Para reportes relacionados con seguridad, consulta los canales oficiales indicados en el README del proyecto.

**SatCore Solutions**

Soluciones digitales seguras, accesibles y funcionales para todos.
