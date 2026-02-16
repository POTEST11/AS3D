# Plataforma Web para Gestión y Cotización de Servicios de Impresión 3D 
🔗 **Documentación y Diseño del Proyecto**  
- 📘 Documentación técnica y planificación (Notion):  
  https://www.notion.so/AsThreeD-20f75e9228b7807fa9ffefc9815a2578?source=copy_link  
- 🎨 Diseño UI/UX y prototipos (Figma):  
  https://www.figma.com/design/qV8JKZ5ksSLsNmdAHWZfyb/AS3D-001?node-id=12-4&t=2UIE0gJdiKzKHEiB-1  


##  Descripción General

Este proyecto consiste en el desarrollo de una **plataforma web moderna, escalable y automatizada** que funcionará como la **tienda digital oficial de un negocio de impresión 3D**. La plataforma permitirá a los clientes **cotizar, gestionar y compartir modelos 3D** de manera sencilla e intuitiva.

El sistema está diseñado para automatizar la mayoría de los procesos asociados al servicio de impresión 3D, al mismo tiempo que fomenta la creación de una **comunidad activa de usuarios**, donde se puedan compartir modelos, inspirarse mutuamente y acceder a una biblioteca de diseños listos para imprimir.

Desde el punto de vista técnico, la plataforma se compone de:
- Una **interfaz de usuario (cliente)**.
- Una **interfaz administrativa (gestión interna)**.
- Un **backend en Python** que centraliza la lógica del negocio.
- Una **base de datos relacional**.
- Integraciones con herramientas de **automatización y mensajería**.

---

## 🧱 Componentes Principales del Sistema

### 1️⃣ Tienda virtual con catálogo de modelos 3D
- Visualización de modelos prediseñados y más populares.
- Filtros por tipo de objeto, complejidad, tamaño, impresora compatible y material sugerido.
- Vista previa interactiva de modelos 3D.
- Usuarios registrados pueden compartir modelos de forma pública o privada.

### 2️⃣ Cotizador inteligente
- Subida de archivos STL/OBJ.
- Análisis automático del archivo para calcular volumen y peso estimado.
- Cotización basada en:
  - Tipo de impresora
  - Material (filamento o resina)
  - Cantidad de material
  - Tiempo estimado de impresión
- Resumen descargable del costo y fecha estimada de entrega.

### 3️⃣ Sistema de cuentas de usuario
- Registro e inicio de sesión seguro.
- Gestión de archivos subidos y cotizaciones.
- Historial de impresiones.
- Opciones de privacidad para modelos.
- Perfil con favoritos, comentarios y estadísticas de descargas.

### 4️⃣ Agenda e inventario de impresión
- Registro de impresoras con estado y capacidad.
- Gestión del inventario de materiales.
- Alertas por bajo stock.
- Agenda para asignar trabajos según disponibilidad.

### 5️⃣ Interfaz administrativa
- Acceso exclusivo para el equipo del negocio.
- Gestión del catálogo oficial de modelos.
- Control total del inventario.
- Edición de la agenda de impresión.
- Gestión de usuarios y solicitudes personalizadas.

### 6️⃣ Automatización y comunicación
- Integración con **n8n** para automatizar procesos internos.
- Integración con **WhatsApp** mediante API para asistencia al administrador.
- Chat web embebido con agente automatizado y escalamiento humano.

### 7️⃣ Tecnologías base
- **Frontend:** React + TailwindCSS (diseño en Figma).
- **Backend:** Python (Django o FastAPI).
- **Base de datos:** PostgreSQL.
- **Automatización:** n8n (o Zapier / Make).
- **Análisis 3D:** Scripts en Python para STL/OBJ.

---

## 🔹 FASE 1 — Planificación y Diseño

| Paso | Tareas | Herramientas |
|----|------|-------------|
| 1.1 | Definición de requerimientos funcionales y no funcionales | Google Docs / Notion |
| 1.2 | Definición de roles y vistas | Figma / FigJam |
| 1.3 | Wireframes y prototipo del diseño web | Figma |

---

## 🔹 FASE 2 — Configuración del Entorno

| Paso | Tareas | Herramientas |
|----|------|-------------|
| 2.1 | Creación del repositorio y estructura base | GitHub / GitLab |
| 2.2 | Integración de autenticación en frontend | Firebase Auth + React |

---

## 🔹 FASE 3 — Desarrollo del Frontend (React + Tailwind) ✅

| Módulo | Funcionalidad | Herramientas |
|------|--------------|-------------|
| 3.1 | Landing page y navegación | React + TailwindCSS |
| 3.2 | Registro e inicio de sesión | Firebase Auth |
| 3.3 | Panel de usuario | React + Backend |
| 3.4 | Subida y vista previa STL/OBJ | react-dropzone + Three.js |
| 3.5 | Catálogo y buscador | React + API |
| 3.6 | Panel admin (roles protegidos) | React Router + Firebase Claims |
| 3.7 | Chat en vivo | socket.io / backend intermediario |

---

## 🔹 FASE 4 — Desarrollo del Backend (Python + PostgreSQL)

| Módulo | Funcionalidad | Herramientas |
|------|--------------|-------------|
| 4.1 | Validación de tokens JWT | Firebase Admin SDK |
| 4.2 | Análisis de archivos STL/OBJ | numpy-stl / trimesh / open3d |
| 4.3 | Lógica de cotización | Python |
| 4.4 | API REST protegida | FastAPI / Django REST |
| 4.5 | Agenda e inventario | PostgreSQL |
| 4.6 | CRUD de modelos | SQLAlchemy / Django ORM |
| 4.7 | Comunicación con n8n | Webhooks |
| 4.8 | Sistema de pagos | Stripe |

---

## 🔹 FASE 5 — Automatización e Integraciones (n8n)

| Proceso | Objetivo | Integración |
|------|---------|------------|
| 5.1 | WhatsApp admin automático | n8n + WhatsApp API |
| 5.2 | Actualización de inventario | n8n + Backend |
| 5.3 | Agente automático en chat | n8n + OpenAI API |
| 5.4 | Notificaciones y registros | Email / Telegram / Sheets |

---

## 🔹 FASE 6 — Despliegue y DevOps

| Paso | Tareas | Herramientas |
|----|------|-------------|
| 6.1 | Hosting frontend | Firebase Hosting / Vercel |
| 6.2 | Hosting backend | Railway / Render / VPS |
| 6.3 | Hosting base de datos | Supabase / NeonDB |
| 6.4 | CI/CD | GitHub Actions |

---

## 🔹 FASE 7 — Testing y Lanzamiento

| Paso | Tareas | Herramientas |
|----|------|-------------|
| 7.1 | Tests de autenticación | Firebase Emulator |
| 7.2 | Tests de API | Postman + Pytest |
| 7.3 | Tests de frontend | Jest + RTL |
| 7.4 | Pruebas reales con usuarios | Sesiones cerradas |

---

## 🔹 FASE 8 — Escalamiento y Comunidad

- Expansión del catálogo colaborativo.
- Sistema de reputación para creadores.
- Blog o sección de comunidad.
- Monetización de modelos premium.

---

## 📎 Notas Finales

Este proyecto está pensado como una **plataforma profesional y escalable**, ideal tanto para un negocio real de impresión 3D como para un proyecto académico avanzado en desarrollo web, automatización e integración de servicios.

