# Bakery Website

This website is an informational website for a bakery to be viewed by potential customers and updated by authorized persons. The website allows for bakery owners to easily update menu information including the uploading of images and other information.

## Week 7

- Created home page
- Created menu page
- Created 3 sub-menu pages
- Created login page

## Week 8

- Added functionality to home page allowing it to show whether the bakery is open or not depending on the time of the day
- Created pop-ups to display information about specific menu items

## Week 9

- Re-styled login screen and added validation to the form
- Tweaked UI of the nutrition pop-ups
- Re-designed menu screen so that it now displays in a grid format
- Each item will now have a paragraph below listing size and price

## Week 10

- Set up Supabase and connected it to project
- Set up Multer middleware allowing for the uploading of images

## Week 11

- Created registration page (in the future this may be changed so that not all users can create an account, however for the sake of the project I will keep it as is for now)
- Updated login page allowing for easy access to registration page
- Linked login form to supabase auth
- Set up confirmation email through supabase
- Created button that only appears to logged in user allowing for them to add to the menu

## Week 12

- Set up API calls to Spoonacular allowing for a random baking recipe to be selected each day
- Created "Recipe of the Day" page

## Week 13

- Completely updated UI to fit the bakery theme better
   - Changed color scheme
   - Re-designed pop-ups
   - Re-designed login and register pages
   - Re-designed menu and sub-menu pages
- The sub-menus now read from supabase
- Each item in the sub-menu has a nutrition pop-up that also reads from supabase
- Added logging
- Implemented rendering to user friendly error page
- Fixed issue in which recipe of the day would reset along with server, information is now stored in a json

## Features

- 🚀 **Node.js 20** + **Express 4** - Modern JavaScript backend
- 🎨 **EJS** - Server-side templating
- 🗄️ **PostgreSQL** - Reliable relational database
- 🔒 **Security First** - Helmet, CSRF protection, secure sessions
- 📝 **Clean Code** - ESLint, Prettier, best practices
- 🎓 **Educational** - Well-documented, instructional code

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd cs346-semester-project-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Set up PostgreSQL database**
   ```bash
   # Create database (adjust credentials as needed)
   createdb your_database_name
   ```

5. **Run migrations**
   ```bash
   npm run migrate
   ```

6. **Seed database (optional)**
   ```bash
   npm run seed
   ```

7. **Start the application**
   ```bash
   npm run dev
   ```

8. **Open your browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── src/
│   ├── config/             # Supabase setup
│   ├── server.js           # Server entry point
│   ├── app.js              # Express app configuration
│   ├── routes/             # Route definitions
│   ├── services/           # API handling
│   ├── controllers/        # Request handlers
│   ├── models/             # Database models
│   ├── views/              # EJS templates
│   └── public/             # Static files (CSS, JS, images)
├── db/
│   ├── migrations/         # Database migrations
│   ├── seeds/              # Database seeds
│   ├── migrate.js          # Migration runner
│   ├── seed.js             # Seed runner
│   └── reset.js            # Database reset script
├── docs/                   # Documentation
│   ├── README.md           # Documentation overview
│   ├── SETUP.md            # Setup guide
│   └── ARCHITECTURE.md     # Architecture details
├── .env.example            # Environment variables template
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with sample data
- `npm run reset` - Reset database (WARNING: deletes all data!)
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Fix linting errors automatically
- `npm run format` - Format code with Prettier

## Security Features

- **Helmet**: Sets security-related HTTP headers
- **express-session**: Secure session management with httpOnly cookies
- **csurf**: Cross-Site Request Forgery (CSRF) protection
- **Parameterized SQL**: SQL injection prevention with prepared statements
- **Environment Variables**: Sensitive data kept out of source code

## Documentation

Comprehensive documentation is available in the `docs/` folder:

- [docs/README.md](docs/README.md) - Documentation overview
- [docs/SETUP.md](docs/SETUP.md) - Detailed setup instructions
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Architecture and design patterns

- [src/views/index.ejs] - Homepage
- [src/views/menu.ejs] - Displays links to three sub-menus
- [src/views/users/login.ejs] - Login Page
- [src/views/bakery-menu.ejs] - Menu that contains all items falling underneath the bakery category, this menu will display      items stored in database as entered by logged in users
- [src/views/foods-menu.ejs] - Menu that contains all items falling underneath the food category, this menu will display      items stored in database as entered by logged in users
- [src/views/drinks-menu.ejs] - Menu that contains all items falling underneath the drinks category, this menu will display      items stored in database as entered by logged in users

## Technology Stack

- **Runtime**: Node.js 20
- **Framework**: Express 4
- **Templating**: EJS
- **Database**: PostgreSQL (with pg driver)
- **Security**: Helmet, express-session, csurf
- **Development**: ESLint, Prettier, Nodemon

## Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [OWASP Security Guide](https://owasp.org/)

## Contributing

This is a teaching template. Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Use it for your own projects

## License

ISC