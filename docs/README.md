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
- Added error message on login screen if incorrect credentials were entered
- Added validation along with error messages to registration screen to ensure passwords match and are at least 8 characters long

## Overview

This is a teaching template for building web applications with:
- **Node.js 20**: JavaScript runtime
- **Express 4**: Web application framework
- **EJS**: Templating engine
- **PostgreSQL**: Relational database
- **Vanilla JavaScript**: Client-side scripting (no frameworks)

## Security Features

- **Helmet**: Sets security-related HTTP headers
- **express-session**: Secure session management
- **CSRF Protection**: Cross-Site Request Forgery protection
- **Parameterized SQL Queries**: SQL injection prevention

## Project Structure

```
.
├── src/
│   ├── server.js           # Server entry point
│   ├── app.js              # Express app configuration
│   ├── routes/             # Route definitions
│   │   ├── index.js        # Main routes
│   │   └── users.js        # User routes
│   ├── controllers/        # Request handlers
│   │   ├── indexController.js
│   │   └── userController.js
│   ├── models/             # Database models
│   │   ├── db.js           # Database connection
│   │   └── User.js         # User model
│   ├── views/              # EJS templates
│   │   ├── index.ejs       # Home page
│   │   ├── error.ejs       # Error page
│   │   └── layout.ejs      # Layout template (optional)
│   └── public/             # Static files
│       ├── css/
│       │   └── style.css   # Stylesheet
│       └── js/
│           └── main.js     # Client-side JavaScript
├── db/
│   ├── migrate.js          # Migration runner
│   ├── seed.js             # Seed runner
│   ├── reset.js            # Database reset script
│   ├── migrations/         # Database migrations
│   │   └── 001_create_users_table.sql
│   └── seeds/              # Database seeds
│       └── 001_seed_users.sql
├── docs/                   # Documentation
│   ├── README.md           # This file
│   ├── SETUP.md            # Setup instructions
│   └── ARCHITECTURE.md     # Architecture overview
├── .env.example            # Environment variables template
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies and scripts
└── README.md               # Project README
```

## Getting Started

See [SETUP.md](./SETUP.md) for detailed setup instructions.

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture information.

## Development

### Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with auto-reload
- `npm run migrate`: Run database migrations
- `npm run seed`: Seed the database with sample data
- `npm run reset`: Reset the database (drop all tables and re-run migrations and seeds)
- `npm run lint`: Check code for linting errors
- `npm run lint:fix`: Fix linting errors automatically
- `npm run format`: Format code with Prettier

### Code Style

This project uses:
- **ESLint** for JavaScript linting
- **Prettier** for code formatting

Run `npm run lint` to check for issues and `npm run format` to format your code.

## Security Best Practices

1. **Environment Variables**: Never commit `.env` file. Use `.env.example` as a template.
2. **Password Hashing**: Always hash passwords using bcrypt before storing.
3. **Input Validation**: Validate and sanitize all user input.
4. **SQL Injection**: Use parameterized queries ($1, $2, etc.) for all database operations.
5. **CSRF Protection**: Include CSRF tokens in all forms.
6. **Session Security**: Use secure, httpOnly cookies in production.

## Database Operations

### Migrations

Migrations are SQL files in `db/migrations/` that create or modify database tables.

To create a new migration:
1. Create a new file: `db/migrations/00X_description.sql`
2. Write your SQL (CREATE TABLE, ALTER TABLE, etc.)
3. Run `npm run migrate`

### Seeds

Seeds are SQL files in `db/seeds/` that populate the database with initial or test data.

To create a new seed:
1. Create a new file: `db/seeds/00X_description.sql`
2. Write your INSERT statements
3. Run `npm run seed`

### Parameterized Queries

Always use parameterized queries to prevent SQL injection:

```javascript
// ❌ Bad (SQL injection vulnerable)
const result = await db.query(`SELECT * FROM users WHERE email = '${email}'`);

// ✅ Good (parameterized)
const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
```

## Contributing

When contributing to this project:
1. Follow the existing code style
2. Run `npm run lint` before committing
3. Test your changes thoroughly
4. Update documentation as needed

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Helmet Documentation](https://helmetjs.github.io/)
