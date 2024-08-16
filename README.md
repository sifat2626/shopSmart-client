# ShopSmart Frontend

Welcome to the frontend of **ShopSmart**, a full-stack e-commerce application built using React.js and Tailwind CSS. This repository contains the code for the user interface of the ShopSmart application.

## Features

- **Product Listing:** Browse all available products with pagination, sorting, and filtering by category, brand, and price.
- **Product Search:** Easily search for products using keywords.
- **Responsive Design:** Fully responsive design, optimized for mobile, tablet, and desktop devices.
- **Product Details:** View detailed information about each product, including descriptions, pricing, and more.

## Installation

Follow these steps to get the frontend up and running on your local machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/shop-smart-frontend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd shop-smart-frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

Once the application is running, you can:

- Browse products on the home page.
- Filter products by category, brand, and price.
- Search for specific products using the search bar.
- View detailed information about each product by clicking on it.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm eject`: Removes the tool and configuration dependencies.

## Project Structure

Here's an overview of the project's structure:

```
src/
├── components/   # Reusable components like ProductCard, Footer, etc.
├── pages/        # Pages like AllProducts, ProductDetails, etc.
├── hooks/        # Custom hooks like useAxiosPublic.
├── styles/       # Global styles and Tailwind configuration.
├── App.js        # Main app component.
├── index.js      # Entry point of the application.
└── ...
```

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Axios:** For making HTTP requests to the backend API.
- **React Router:** For client-side routing.

## API Endpoints

The frontend interacts with the following API endpoints:

- **GET /products:** Fetches all products with options for pagination, sorting, and filtering.
- **GET /products/:id:** Fetches details of a specific product by ID.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact:

- **Name:** Md. Ashraful Alam Sifat
- **Email:** ashrafulsifat26@gmail.com
- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/ashraful-sifat-ash26/)
