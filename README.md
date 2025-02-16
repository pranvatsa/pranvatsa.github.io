# Pranav Srivatsa's Personal Website

Welcome to the repository for Pranav Srivatsa's personal website, hosted at [pranvatsa.github.io](https://pranvatsa.github.io). This project is built using Astro, Vue and Tailwind CSS to create a modern, responsive, and visually appealing personal profile site.

## Project Overview

This website serves as a personal portfolio for Pranav Srivatsa.

## Technologies Used

- **Astro**
- **Vue**
- **Tailwind CSS**

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pranvatsa/pranvatsa.github.io.git
   cd pranvatsa.github.io
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   The development server will start, and you can view the website at `http://localhost:4321`.

## Building for Production

To build the project for production, run the following command:

```bash
npm run build
```

The built files will be output to the `dist` directory.

## Formatting Code

To format the code using Prettier, run the following command:

```bash
npm run format
```

## Deployment

Deployment is handled automatically via GitHub Actions. The workflow is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). On every push to the `main` branch, the site is built and deployed to GitHub Pages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
