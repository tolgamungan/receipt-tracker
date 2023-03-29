# Receipt Tracker
Receipt Tracker is a simple MERN stack application for tracking receipts and expenses. It allows you to easily keep track of your spending and manage your budget.

## Features

* Create and manage receipts
* View a list of all receipts
* Delete receipts
* Update receipts
* User authentication


## Getting Started

To get started, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website, and install MongoDB by following the instructions on the MongoDB website.

Once you have Node.js and MongoDB installed, you can clone this repository and install the dependencies:

```bash
git clone https://github.com/tolgamungan/receipt-tracker.git
cd receipt-tracker
npm install

```
Next, create a .env file in the server directory and set the following environment variables:

```bash
PORT=8080
DATABASE_URL=mongodb://localhost:27017/receipt-tracker
JWT_SECRET=mysecretkey
LOG_LEVEL=info

```
You can replace the DATABASE_URL value with the URL of your MongoDB server, and change the JWT_SECRET value to a secret of your choice.

To start the development server, run the following command:

```bash
npm run dev
```

You can then access the application at http://localhost:8080.


## Contributing

Contributions are always welcome! If you find a bug or have a suggestion for a new feature, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.