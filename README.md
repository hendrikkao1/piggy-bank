# Piggy bank

## How to use

### Using Docker

- Install [Docker](https://docs.docker.com/get-docker/) on your machine.
- Build your container: `docker build -t piggy-bank .`
- Run your container: `docker run -p 3000:3000 --rm --env NUMBER_OF_GENERATED_EXPENSES=11 piggy-bank`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Locally

- Install dependencies: `npm install`
- Create a `.env.local` file: `cp .env.local.example .env.local`
- Run the development server: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
