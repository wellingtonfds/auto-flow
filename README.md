
# Auto-Flow

Auto-Flow is a fleet management system built with NestJS and SQLite. It handles the management of cars, drivers, and their history through well-structured domain layers.

## Requirements

- Node.js 20.x
- No additional configuration is needed for SQLite.

## Project Structure

The project is organized into different domains, each responsible for a specific entity within the fleet management system. The domains are:

- **Car**
- **Driver**
- **History**

Each domain contains the following directories:

1. **dto** - Data Transfer Objects for structuring input and output data.
2. **repository** - Manages database interactions.
3. **controller** - Handles incoming HTTP requests and sends responses.
4. **module** - The module file that integrates services and controllers.
5. **service** - Contains business logic for the respective domain.

### Shared Module

In addition to the domains, there is a **shared** directory that contains:

- **dto** - Common data structures shared between domains.
- **exception** - Shared exceptions that can be used across different modules.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/auto-flow.git
   ```
2. Navigate to the project directory:
   ```bash
   cd auto-flow
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application in development mode:
   ```bash
   npm run start:dev
   ```

The application will automatically use SQLite, and no additional configuration is required.

## API Documentation

This project uses **Swagger** for API documentation. Once the application is running, you can access the Swagger UI at the following route:

```
http://localhost:3000/api
```

## Folder Structure

```
auto-flow/
│
├── car/
│   ├── dto/
│   ├── repository/
│   ├── controller/
│   ├── module/
│   └── service/
│
├── driver/
│   ├── dto/
│   ├── repository/
│   ├── controller/
│   ├── module/
│   └── service/
│
├── history/
│   ├── dto/
│   ├── repository/
│   ├── controller/
│   ├── module/
│   └── service/
│
└── shared/
    ├── dto/
    └── exception/
```

## License

This project is licensed under the MIT License.
