# code-pranav.github.io

Site at https://code-pranav.github.io

Steps to run

1. Install Dependencies
   ```bash
   npm install
   ```
2. Start development server
   ```bash
   npm run dev
   ```
3. Deploy steps
   ```bash
   # this creates a dist folder
   npm run build

   # github page is deployed out of gh-pages branch
   npm run deploy

   # this pushes contents of dist folder to gh-pages branch which gets deployed by github pages
   ```