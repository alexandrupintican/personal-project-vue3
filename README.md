# Personal Portfolio – Vue 3

A modern personal portfolio website built with **Vue 3**, **TypeScript**, and **Vite**. The project is structured using reusable components, composables, and a clean architecture to create a fast, maintainable, and responsive single-page application.

## Features

- ⚡ Built with Vue 3 and Vite
- 🟦 TypeScript support
- 🎨 SCSS styling with global theme variables
- 📱 Responsive layout
- 🧩 Reusable UI components
- 🌸 Dedicated project/flower showcase pages
- 🧭 Vue Router navigation
- ♻️ Composition API with reusable composables
- 🖼️ SVG asset support
- 🐳 Docker support for containerized deployment

---

## Tech Stack

| Technology | Purpose                           |
| ---------- | --------------------------------- |
| Vue 3      | Frontend framework                |
| TypeScript | Static typing                     |
| Vite       | Build tool and development server |
| Vue Router | Client-side routing               |
| SCSS       | Styling                           |
| Docker     | Deployment and containerization   |

---

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── style/
│   │   └── svg/
│   │
│   ├── components/
│   │   ├── content/
│   │   ├── footer/
│   │   ├── header/
│   │   └── ui/
│   │
│   ├── composables/
│   ├── layouts/
│   ├── models/
│   ├── pages/
│   ├── plugins/
│   ├── router/
│   ├── App.vue
│   ├── entry.ts
│   └── main.ts
│
├── Dockerfile
├── package.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn (recommended)

### Installation

```bash
git clone https://github.com/alexandrupintican/personal-project-vue3.git

cd personal-project-vue3

yarn install
```

---

## Development

Start the development server:

```bash
yarn dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Production Build

Build the project:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

---

## Docker

Build the Docker image:

```bash
docker build -t personal-project-vue3 .
```

Run the container:

```bash
docker run -p 8080:80 personal-project-vue3
```

---

## Architecture

The project follows a modular structure:

- **Pages** contain route-level views.
- **Layouts** define reusable page layouts.
- **Components** contain reusable UI elements and feature-specific components.
- **Composables** encapsulate reusable Composition API logic.
- **Models** provide shared application types and interfaces.
- **Plugins** register application-wide functionality.
- **Router** manages navigation between pages.

This separation keeps the application scalable and easy to maintain.

---

## Styling

Styling is organized using SCSS partials:

- Variables
- Mixins
- Theme
- Animations
- Global styles

This makes it easy to maintain a consistent design system throughout the application.

---

## Available Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `yarn dev`     | Start development server |
| `yarn build`   | Build for production     |
| `yarn preview` | Preview production build |

---

## Future Improvements

Potential enhancements include:

- Unit testing
- End-to-end testing
- CI/CD pipeline
- Dark mode
- Accessibility improvements
- Performance optimization
- Content management integration

---

## License

This project is available under the MIT License unless otherwise specified.

---

## Author

Developed by **Alexandru Pintican**.
