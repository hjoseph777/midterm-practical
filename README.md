# Computer Parts Catalog
## [click Url link main page](https://hjoseph777.github.io/midterm-practical/)

A modern, responsive web application for browsing and managing computer parts inventory. Built as a practical demonstration of React concepts for the midterm project.

## Features

- **Browse Computer Parts**: View a curated list of high-quality computer components
- **Search Functionality**: Easily find parts by name using the search feature
- **Detailed Information**: Click any part to see comprehensive specifications
- **Add New Parts**: Expand the catalog with your own computer parts

## Technologies Used

- Next.js (React framework)
- TypeScript for type safety
- CSS Modules for component-scoped styling
- Local state management with React hooks

## Principal Modules

- [**HomePage.tsx**](src/components/HomePage.tsx) - Main component that handles application state, search functionality, and layout structure
- [**ListComponent.tsx**](src/components/ListComponent.tsx) - Displays the list of computer parts with filtering and selection capabilities, includes the add new part form
- [**DetailsComponent.tsx**](src/components/DetailsComponent.tsx) - Shows detailed information about the selected computer part
- [**ComputerPartsData_code.json**](src/data/ComputerPartsData_code.json) - Contains the initial data for computer parts

## Screenshots

### Home Page with Component List
![Home Page](/public/images/screenshot1.png)

### Part Details View
![Details View](/public/images/screenshot2.png)

### Add New Part Form
![Add Part Form](/public/images/screenshot3.png)

## Project Structure

The application demonstrates several important React concepts:

- State management and lifting state up
- Component composition and reusability
- Conditional rendering (4 distinct examples)
- Event handling with user interactions
- Responsive design principles

## Project Files and Directory Structure
 <Pre>
📁 midterm-practical
 ┣ 📄 README.md                      # Project documentation
 ┣ 📄 package.json                   # Project dependencies and scripts
 ┣ 📄 next.config.js                 # Next.js configuration
 ┣ 📄 tsconfig.json                  # TypeScript configuration
 ┣ 📁 public                         # Static files
 ┃ ┗ 📁 images                       # Screenshots and images
 ┃   ┣ 📄 screenshot1.png            # Home page screenshot
 ┃   ┣ 📄 screenshot2.png            # Details view screenshot
 ┃   ┗ 📄 screenshot3.png            # Add form screenshot
 ┗ 📁 src                           # Source code
   ┣ 📄 App.css                      # Global styles
   ┣ 📁 app                          # Next.js app directory
   ┃ ┗ 📄 layout.tsx                 # Root layout component
   ┣ 📁 components                   # React components
   ┃ ┣ 📄 HomePage.tsx               # Main page component
   ┃ ┣ 📄 HomePage.module.css        # HomePage styles
   ┃ ┣ 📄 ListComponent.tsx          # List display component
   ┃ ┣ 📄 ListComponent.module.css   # ListComponent styles
   ┃ ┣ 📄 DetailsComponent.tsx       # Detail display component
   ┃ ┗ 📄 DetailsComponent.module.css # DetailsComponent styles
   ┗ 📁 data                         # Data files
     ┗ 📄 ComputerPartsData_code.json # Computer parts data
</Pre>

## How to Use
- Browse the list of computer parts on the left side
- Search for specific parts using the search box
- Click on any part to view its detailed specifications on the right
- Add new parts to the catalog using the "Add New Part" button

