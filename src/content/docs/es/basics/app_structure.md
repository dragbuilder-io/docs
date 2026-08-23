---
title: Estructura de la app
description: Explica qué es un proyecto en DragBuilder
sidebar:
  order: 0
---

# Estructura de la app en DragBuilder

En el núcleo de la arquitectura de DragBuilder está el **Project**. Una app en DragBuilder se estructura dentro de un proyecto, que sirve como contenedor de todos los elementos necesarios para construir y desplegar tu aplicación. El proyecto engloba todo, desde los diseños de la interfaz de usuario hasta los modelos de datos y las integraciones externas.

---

## Estructura del proyecto

Un proyecto de DragBuilder está compuesto por varios elementos clave:

1. **Screens**
2. **App States**
3. **Data Types**
4. **External API Definitions**
5. **Assets and Resources**
6. **Settings and Configurations**

Cada componente cumple un rol fundamental en el proceso de desarrollo. A continuación, una explicación detallada de cada uno.

---

### 1. Screens

Las **Screens** (pantallas) son los bloques visuales de tu aplicación. Representan las distintas interfaces o páginas con las que interactúan los usuarios.

- **Diseño con UI Builder drag-and-drop**: DragBuilder ofrece una interfaz amigable para diseñar pantallas usando un UI builder de arrastrar y soltar.
- **Components Library**: Accedé a un amplio set de componentes de UI como botones, campos de texto, imágenes y más.
- **Layout Management**: Organizá los componentes usando layout managers para asegurar responsividad entre distintos dispositivos.
- **Navigation**: Definí cómo navegan los usuarios entre pantallas usando componentes de navegación.

**Ejemplo**:

- **Home Screen**: Muestra un mensaje de bienvenida y el menú principal.
- **Profile Screen**: Permite a los usuarios ver y editar la información de su perfil.
- **Settings Screen**: Ofrece opciones para personalizar las preferencias de la app.

---

### 2. App States

Los **App States** manejan los aspectos dinámicos de tu aplicación, controlando cómo se comporta en respuesta a interacciones del usuario o cambios de datos.

- **State Management**: Usá variables de state para hacer seguimiento de información como input del usuario, estado de autenticación o estados de carga.
- **Reactividad**: DragBuilder se asegura de que los componentes de UI se actualicen automáticamente cuando cambia el state subyacente.
- **Manejo de eventos**: Definí actions que ocurren en respuesta a eventos como clicks de botones o la obtención de datos.

**Ejemplo**:

- **LoggedIn State**: Determina qué componentes de UI se muestran cuando un usuario está autenticado.
- **Loading State**: Muestra un indicador de carga mientras se obtienen datos de una API.

---

### 3. Data Types

Los **Data Types** definen la estructura de los datos usados dentro de tu aplicación.

- **Modelos de datos personalizados**: Creá data types personalizados para representar entidades como usuarios, productos o mensajes.
- **Type Safety**: Asegurá la consistencia de los datos definiendo los tipos de datos esperados para variables y funciones.
- **Data Binding**: Vinculá data types a componentes de UI para mostrar contenido dinámico.

**Ejemplo**:

- **User Data Type**: Contiene campos como `username`, `email` y `profilePicture`.
- **Product Data Type**: Incluye propiedades como `productName`, `price` y `description`.

---

### 4. External API Definitions

Las **External API Definitions** permiten que tu aplicación se comunique con servicios y APIs externos.

- **Integración de APIs**: Conectate a servicios externos como APIs RESTful o endpoints GraphQL.
- **Obtención de datos**: Obtené y enviá datos hacia fuentes externas.
- **Autenticación**: Manejá mecanismos de autenticación de API como API keys o tokens OAuth.

**Ejemplo**:

- **Integración con Firebase**: Usá las APIs de Firebase para autenticación de usuarios y base de datos en tiempo real.
- **Weather API**: Obtené datos del clima de un servicio de terceros para mostrarlos en tu app.

---

### 5. Themes

Los **Themes** te permiten manejar el aspecto general de tu aplicación, incluyendo colores, tipografía y otros elementos de estilo. Al definir themes, podés asegurar una interfaz de usuario consistente en toda tu app y hacer cambios de estilo globales fácilmente.

- **Color Scheme**: Definí un set de colores para primary, secondary, background, surface, error y otros elementos. Esto ayuda a mantener consistencia visual y soporta funcionalidades como el modo oscuro.
- **Typography**: Personalizá fuentes, tamaños, pesos y estilos para distintos elementos de texto como headings, body text, captions y botones.

### 6. Assets and Resources

Manejá los assets y recursos de tu app dentro del proyecto.

- **Imágenes e íconos**: Incluí assets visuales como logos, imágenes de fondo e íconos.
- **Archivos de localización**: Soportá múltiples idiomas proveyendo strings localizados.

**Ejemplo**:

- **App Logo**: Un archivo de imagen usado en el header de la app.
- **Custom Font**: Un archivo de fuente específico aplicado a componentes de texto.

---

### 7. Settings and Configurations

Configurá los ajustes globales que afectan a toda la aplicación.

- **App Metadata**: Definí el nombre de la app, versión e identificadores de paquete.
- **Firebase configuration**: Definí el ID del proyecto de Firebase y otras configuraciones.
- **Platform-Specific Settings**: Configurá ajustes específicos para Android, iOS o Web.

**Ejemplo**:

- **App Version**: Configurá la versión actual de tu app para el release.
- **Android Package Name**: Definí el identificador único de tu app de Android.

---
