import { Pool } from '@neondatabase/serverless';

// Create a connection pool using the Neon connection string from environment variables
const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_NEON_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false // Required for Neon's connection pooling
  }
});

export { pool };
