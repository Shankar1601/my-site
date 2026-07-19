# Shankar A - Full Stack Developer Portfolio

A modern, responsive, and highly optimized personal portfolio built with React and Vite. The UI has been completely refactored utilizing a custom **Surrealism UI** design system, featuring glassmorphism, ethereal ambient background animations, and neon glowing accents.

## 🚀 Features

- **Surrealism UI Aesthetic:** Custom CSS architecture featuring floating elements, heavy blurs, glass panels, and seamless keyframe animations.
- **Modular Architecture:** Cleanly separated React components (Hero, About, Experience, Projects, Skills, Education, Footer) for easy scalability and maintenance.
- **Mobile-First Responsive Design:** Fluid CSS Grid and Flexbox layouts that adapt perfectly to any screen size without relying heavily on media queries.
- **SEO Optimized:** Comprehensive meta tags, Open Graph implementation, and semantic HTML structure.
- **Performance Focused:** Built with Vite for lightning-fast HMR and optimized production builds.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Custom CSS3 (CSS Variables, Glassmorphism, Keyframes)
- **Icons:** [FontAwesome](https://fontawesome.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
├── public/
│   ├── dp.jpg                        # Profile Picture
│   ├── Shankar_A_Full_Stack...pdf    # Resume
│   └── BG.jpg                        # Legacy background (optional)
├── src/
│   ├── components/                   # Modular React Components
│   │   ├── About.jsx / .css
│   │   ├── BackgroundBlobs.jsx
│   │   ├── Education.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   └── Skills.jsx / .css
│   ├── App.jsx                       # Main Application Component
│   ├── index.css                     # Global Styles & CSS Variables
│   └── main.jsx                      # React Application Entry Point
├── index.html                        # HTML Template & SEO Meta Tags
├── package.json                      # Project Dependencies & Scripts
├── vercel.json                       # Vercel Deployment Configuration
└── vite.config.js                    # Vite Configuration