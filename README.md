# Seller App Assignment

## Description

This project is a **Seller App** that leverages **React** for the front-end and **Chart.js** for graphical representations. The app features a dynamic interface where users can toggle between **dark** and **light modes**, change the **country**, and see the values in the **stats container** update accordingly. It also utilizes **local storage** to persist user settings, such as selected country and theme preference, even when the page is refreshed.

### Features

- **Dark & Light Mode Toggle**: Allows users to switch between light and dark themes for a customized user experience.
- **Country Selector**: Users can select a country, and the statistics in the stats container will dynamically update based on the chosen country.
- **Chart.js Integration**: Displays statistics using interactive graphs powered by Chart.js.
- **Persistence**: Uses local storage to save user preferences (country selection and theme) across sessions, even after a page refresh.

## Technologies Used

- **React**: The JavaScript library used to build the front-end of the app.
- **Chart.js**: A powerful library used for rendering the graphs and charts.
- **Local Storage**: For saving user settings (theme and country) to ensure persistence across page reloads.
- **CSS/SCSS**: For styling the app with custom styles for both light and dark themes.

## Deployed Link

You can view the deployed app here:

[Deployed Seller App](https://anuradhahariharan.github.io/seller-app/)

## Installation

To run the project locally, follow the steps below:

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://anuradhahariharan.github.io/seller-app/
    ```

2. Navigate into the project directory:

    ```bash
    cd seller-app-dashboard
    ```

3. Install the dependencies using **npm**:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

   This will run the app on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Toggle between Dark and Light Mode**: Use the toggle button available in the header to switch themes.
2. **Change Country**: Select the desired country from the dropdown, and the stats container will update with the new values corresponding to that country.
3. **Persist Settings**: Your selected country and theme mode will be saved and persisted even after a page refresh due to the use of local storage.

## How it works

- The **Country Selector** component allows users to choose a country. When a country is selected, the app fetches the corresponding stats (e.g., Total income,profit etc) and updates the **StatsContainer** with the new data.
- The **Theme Toggle** allows users to switch between **dark** and **light** mode. This preference is saved to **localStorage** and is applied every time the page is loaded.
- **Chart.js** is used to generate visual representations of the data in a dynamic graph. The graph updates based on the selected country, providing an interactive data visualization.
- **Persistence**: The app stores the selected country and theme preferences in the browser's **localStorage**, ensuring that user settings are retained across page reloads.

## Screenshots
<img width="767" alt="Screenshot 2024-11-27 at 2 01 33 PM" src="https://github.com/user-attachments/assets/acd4e371-7197-4273-a6db-9ecfdbc379b3">
<img width="763" alt="Screenshot 2024-11-27 at 2 01 03 PM" src="https://github.com/user-attachments/assets/d9b7e932-906f-49f7-a603-fb7cc08574e6">
<img width="758" alt="Screenshot 2024-11-27 at 2 03 10 PM" src="https://github.com/user-attachments/assets/4bb4308b-cc9d-410c-b0a8-fa62dc31dfb9">





