---
title: Data type
description: Explica los data types en DragBuilder
sidebar:
  order: 0
---

# Data Types en DragBuilder

En DragBuilder, los **Data Types** te permiten definir estructuras personalizadas que representan modelos de datos complejos dentro de tu aplicación. Al crear data types, podés manejar y manipular conjuntos agrupados de propiedades relacionadas, haciendo que tu app sea más organizada y escalable.

---

## ¿Qué son los Data Types?

- Los **Data Types** son colecciones de propiedades definidas a medida que representan una entidad o modelo específico en tu app.
- Te permiten manejar estructuras de datos complejas como unidades individuales.
- Los data types se pueden usar para vincular datos a componentes de UI, pasar datos entre pantallas e interactuar con APIs externas.

---

## Ejemplo: Crear un Data Type `ArticleItem`

Imaginá que estás construyendo una app de noticias y necesitás representar artículos con atributos específicos.

### Propiedades de `ArticleItem`:

- **title**: El título del artículo.
- **description**: Un resumen breve del contenido del artículo.
- **headerImageUrl**: Una URL a la imagen de cabecera del artículo.
- **createdDate**: La fecha de publicación del artículo.

Al definir un data type `ArticleItem`, podés manejar y mostrar artículos fácilmente en toda tu app.

![Ejemplo de data type](/image/datatype_example.png)

---

## Cómo crear un Data Type en DragBuilder

### Paso 1: Navegá al menú de Data Types

1. **Abrí tu proyecto**: Iniciá tu proyecto de DragBuilder donde querés agregar el data type.
2. **Accedé a Data Types**:
    - En el **Project Explorer** del lado izquierdo, ubicá y hacé clic en la sección **"Data Types"**.

### Paso 2: Agregá un nuevo Data Type

1. **Creá el Data Type**:
    - Hacé clic en el botón **"+"** junto a **"Data Types"**.
    - Va a aparecer un diálogo o panel para crear un nuevo data type.

2. **Definí las propiedades del Data Type**:
    - **Name**: Ingresá un nombre para tu data type (por ejemplo, **"ArticleItem"**).
    - **Properties**: Agregá las propiedades del data type:
        - **title**: Configurá el tipo como **String**.
        - **description**: Configurá el tipo como **String**.
        - **headerImageUrl**: Configurá el tipo como **String**.
        - **createdDate**: Configurá el tipo como **Instant** o **String**, según tu preferencia.

3. **Guardá el Data Type**:
    - Hacé clic en **"Save"** o **"Create"** para agregar el data type a tu proyecto.

---

## Usar Data Types en tu app

### Vincular Data Types a componentes de UI

- Mirá [número dinámico de elementos](/advanced_ui/dynamic_items)

### Popular datos

- **Datos estáticos**:
    - Creá manualmente instancias del data type con valores predefinidos para hacer pruebas.
- **Datos dinámicos**:
    - Obtené datos de APIs externas o bases de datos y mapeá los resultados a tu data type.
    - Usá actions como **"Call External API"** para obtener datos.

---

## Manejar Data Types

### Editar un Data Type

- **Actualizar propiedades**:
    - Navegá a la sección **"Data Types"**.
    - Seleccioná el data type que querés editar.
    - Agregá, quitá o modificá propiedades según sea necesario.

### Eliminar un Data Type

- **Quitar Data Types sin uso**:
    - En la sección **"Data Types"**, seleccioná el data type.
    - Hacé clic en **"Delete"** o **"Remove"** para eliminarlo de tu proyecto.

<orbit-callout intent="caution">
Asegurate de que el data type no esté en uso antes de eliminarlo, para evitar errores.
</orbit-callout>
