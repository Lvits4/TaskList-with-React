# 📝 TaskList React

Una aplicación web moderna y elegante para la gestión de notas y tareas, desarrollada con React y TypeScript. Permite a los usuarios crear, editar, buscar y organizar sus notas personales con una interfaz intuitiva y un diseño atractivo.

## ✨ Características Principales

### 🔐 Autenticación de Usuarios
- **Registro de usuarios**: Creación de cuentas con validación de formularios
- **Inicio de sesión**: Autenticación segura con email y contraseña
- **Validación robusta**: Implementada con React Hook Form y Yup para validaciones en tiempo real
- **Mensajes de error claros**: Feedback visual inmediato para el usuario

### 📋 Gestión de Notas
- **Crear notas**: Agregar nuevas notas con título, descripción y fondo personalizado
- **Editar notas**: Modificar notas existentes desde un sidebar interactivo
- **Eliminar notas**: Borrar notas con confirmación visual
- **Buscar notas**: Sistema de búsqueda en tiempo real para filtrar notas
- **Fondos personalizados**: Selección de fondos decorativos para cada nota
- **Interfaz responsive**: Diseño adaptable a diferentes tamaños de pantalla

### 🎨 Interfaz de Usuario
- **Diseño moderno**: Interfaz limpia con paleta de colores morada/violeta
- **Componentes modulares**: Arquitectura basada en componentes reutilizables
- **Notificaciones**: Sistema de notificaciones toast para feedback del usuario
- **Animaciones suaves**: Transiciones y efectos visuales mejoran la experiencia

## 🛠️ Tecnologías Utilizadas

### Core
- **React 18.3.1**: Biblioteca principal para la construcción de la interfaz
- **TypeScript 5.6.2**: Tipado estático para mayor seguridad y mantenibilidad
- **Vite 6.0.5**: Herramienta de construcción rápida y eficiente

### Estilos y UI
- **Tailwind CSS 4.0**: Framework de utilidades CSS para diseño rápido
- **PrimeReact 10.9.2**: Biblioteca de componentes UI profesionales
- **React Icons 5.4.0**: Colección completa de iconos

### Formularios y Validación
- **React Hook Form 7.54.2**: Manejo eficiente de formularios
- **Yup 1.6.1**: Validación de esquemas de formularios
- **@hookform/resolvers 3.10.0**: Integración de Yup con React Hook Form

### Navegación y Estado
- **React Router DOM 7.1.3**: Enrutamiento del lado del cliente
- **React Hot Toast 2.5.1**: Notificaciones toast elegantes

### Desarrollo
- **ESLint 9.17.0**: Linter para mantener calidad de código
- **TypeScript ESLint 8.18.2**: Reglas de linting específicas para TypeScript

## 📁 Estructura del Proyecto

```
tasklist-react/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── btnGeneric/      # Botón genérico
│   │   ├── btnOpenModal/    # Botón para abrir modal
│   │   ├── cardNotes/       # Tarjeta de nota
│   │   ├── cardWelcome/     # Tarjeta de bienvenida
│   │   ├── carouselBackground/  # Carrusel de fondos
│   │   ├── formAddNote/     # Formulario para agregar nota
│   │   ├── inputPassword/   # Input de contraseña
│   │   ├── modal/           # Componente modal
│   │   ├── searchInput/     # Input de búsqueda
│   │   └── sidebar/         # Sidebar para edición
│   ├── context/             # Context API (preparado para uso futuro)
│   ├── enums/               # Enumeraciones
│   │   └── dataCarouselBackground.ts
│   ├── hooks/               # Custom hooks
│   ├── services/            # Servicios de datos
│   │   ├── authUser.ts      # Autenticación de usuarios
│   │   ├── findItem.ts      # Búsqueda de items
│   │   ├── getDataLocal.ts  # Obtener datos de localStorage
│   │   ├── getDataSession.ts # Obtener datos de sessionStorage
│   │   └── setDataLocal.ts  # Guardar datos en localStorage
│   ├── types/               # Definiciones de tipos TypeScript
│   │   ├── tpDataLogin/     # Tipos para login
│   │   ├── tpDataRegister/  # Tipos para registro
│   │   └── tpNote/          # Tipos para notas
│   ├── validations/         # Validaciones
│   ├── views/               # Vistas principales
│   │   ├── auth/            # Vistas de autenticación
│   │   │   ├── auth/        # Layout de autenticación
│   │   │   ├── login/       # Vista de login
│   │   │   └── register/    # Vista de registro
│   │   └── client/          # Vistas del cliente
│   │       ├── home/        # Layout principal
│   │       └── inicio/      # Vista de inicio (dashboard)
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── dist/                    # Build de producción
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior recomendada)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica):
```bash
git clone <url-del-repositorio>
cd tasklist-react
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
   - La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)

## 📜 Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo con Vite
- **`npm run build`**: Compila el proyecto para producción (TypeScript + Vite build)
- **`npm run lint`**: Ejecuta ESLint para verificar la calidad del código
- **`npm run preview`**: Previsualiza el build de producción localmente

## 💾 Almacenamiento de Datos

La aplicación utiliza almacenamiento local del navegador:

- **localStorage**: Almacena todos los usuarios registrados y sus notas de forma persistente
- **sessionStorage**: Mantiene la sesión del usuario actual durante la navegación

### Estructura de Datos

**Usuario:**
```typescript
{
  id: number,
  name: string,
  email: string,
  password: string,
  notes: Note[]
}
```

**Nota:**
```typescript
{
  id: number,
  title: string,
  description: string,
  background: string
}
```

## 🎯 Funcionalidades Detalladas

### Sistema de Autenticación
- Validación de email con formato correcto
- Validación de contraseñas (con opción de confirmación en registro)
- Mensajes de error descriptivos
- Navegación automática después de login/registro exitoso

### Gestión de Notas
- **Crear**: Modal con formulario para agregar nueva nota
- **Editar**: Sidebar lateral para modificar notas existentes
- **Eliminar**: Botón de eliminación con confirmación
- **Buscar**: Filtrado en tiempo real por título o descripción
- **Fondos**: Selección de 6 patrones de fondo diferentes

### Experiencia de Usuario
- Mensajes de bienvenida personalizados
- Notificaciones toast para acciones exitosas/fallidas
- Interfaz responsive que se adapta a móviles, tablets y desktop
- Transiciones suaves entre estados

## 🎨 Diseño

La aplicación utiliza una paleta de colores en tonos morados/violetas:
- Color principal: `#E2D2FE` (fondo claro)
- Color secundario: `#B49BE0` (modales y sidebars)
- Color de acento: `#9c7cd4` (botones)

## 🔒 Seguridad

**Nota importante**: Esta aplicación utiliza almacenamiento local del navegador. Las contraseñas se almacenan en texto plano en localStorage. **No es adecuada para uso en producción** sin implementar:
- Encriptación de contraseñas
- Autenticación con backend seguro
- Tokens de sesión
- HTTPS

## 📝 Notas de Desarrollo

- El proyecto está configurado con TypeScript para type safety
- Se utiliza HashRouter para compatibilidad con despliegues estáticos
- Los componentes están organizados de forma modular
- Se preparó un contexto global (comentado) para futuras mejoras

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---
**Versión**: 1.0
**Última actualización**: 2024
