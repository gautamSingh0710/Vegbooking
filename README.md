# VegBooking

VegBooking is a web-based vegetable ordering platform that allows users to select vegetables, calculate the total bill, and place orders through WhatsApp. The project uses Firebase Realtime Database to store orders and manage live vegetable prices.

## Features

* Vegetable listing with live price display
* Quantity selection in grams or kilograms
* Automatic bill calculation
* Order placement through WhatsApp
* Firebase Realtime Database integration
* Admin login page
* Admin dashboard to view and manage orders
* Order status update functionality
* Delete order functionality
* Search customer orders
* View today's orders
* Download orders as CSV
* Daily sales graph using Chart.js
* Admin price panel to update vegetable prices in real time

## Tech Stack

* HTML
* CSS
* JavaScript
* Firebase Realtime Database
* Firebase Hosting
* Chart.js

## Project Structure

```text
VegBooking/
│
├── index.html
├── login.html
├── dashboard.html
├── admin-price.html
├── script.js
├── style.css
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

## How It Works

1. Users enter their name and address.
2. Users select vegetables and quantity.
3. The application calculates the total bill.
4. Order details are saved in Firebase Realtime Database.
5. The user is redirected to WhatsApp with the order message.
6. Admin can view all orders from the dashboard.
7. Admin can update order status, delete orders, filter today's orders, and download order data.
8. Admin can update vegetable prices from the price panel.

## Firebase Database Structure

```text
prices/
  Aloo
  Tamatar
  Mirchi
  Adrak
  Lasun
  Nimbu
  Kheera
  Pyaaz

orders/
  orderId/
    name
    address
    items
    total
    date
    time
    status
```

## Screenshots

Add screenshots here:

```text
assets/home-page.png
assets/admin-login.png
assets/admin-dashboard.png
assets/price-panel.png
```

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/gautamSingh0710/Vegbooking.git
```

2. Open the project folder:

```bash
cd Vegbooking
```

3. Open `index.html` in a browser.

4. To use Firebase, replace the Firebase configuration in `script.js`, `dashboard.html`, and `admin-price.html` with your own Firebase project configuration.

5. Enable Firebase Realtime Database from the Firebase Console.

6. Deploy using Firebase Hosting:

```bash
firebase deploy
```

## Future Improvements

* Add secure Firebase Authentication for admin login
* Add user order history
* Add payment gateway integration
* Add product images from database
* Improve mobile responsiveness
* Add order delivery tracking

## Author

Gautam Singh
GitHub: https://github.com/gautamSingh0710
