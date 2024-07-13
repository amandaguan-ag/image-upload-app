# Image Upload and Preview App

This project is a simple image upload and preview application with dark and light theme support. It allows users to drag and drop an image file or browse files to upload. The app displays a loader while the image is being uploaded and provides options to copy the image URL or download the image once uploaded.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Features

- Drag and drop or browse files to upload an image.
- Supports dark and light themes.
- Displays a loader while the image is being uploaded.
- Provides options to copy the image URL to the clipboard or download the image.
- Accessible and responsive design.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amandaguan-ag/image-upload-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd image-upload-app
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```

2. Open your browser and navigate to:
   ```sh
   http://localhost:5173
   ```

3. Use the app to upload an image, toggle themes, and interact with the uploaded image.

## Accessibility

This app is designed with accessibility in mind. Here are some of the accessibility features:

- **Semantic HTML Elements**: Used `<header>`, `<main>`, and other semantic elements to provide meaningful structure.
- **ARIA Attributes**: Added ARIA attributes like `aria-label` to enhance the app's accessibility for screen readers.
- **Improved Contrast**: Ensured sufficient color contrast between text and background for better readability.
- **Keyboard Navigation**: All interactive elements are accessible via keyboard navigation.
- **Focus Styles**: Clear focus styles are provided for interactive elements to improve visibility for keyboard users.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **FileReader API**: To read the contents of files asynchronously.
- **HTML5**: For the app structure and semantics.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact:

- **Name**: Amanda Guan
- **Email**: ag.amandaguan@gmail.com