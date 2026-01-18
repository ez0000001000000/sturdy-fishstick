# Migration Plan: Supabase to Neon for Message Storage

## Overview
This document outlines the steps to migrate message storage from Supabase to Neon, a serverless Postgres database service.

## Current Architecture
- **Storage**: Messages are currently stored in Supabase
- **Authentication**: Using Supabase Auth
- **Realtime**: Using Supabase Realtime

## Migration Steps

### 1. Setup Neon Database
- [ ] Create a new Neon project (if not already done)
- [ ] Set up the database schema for messages
- [ ] Configure connection pooling

### 2. Database Schema Migration
- [ ] Create equivalent tables in Neon
  ```sql
  CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    user_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );
  
  -- Add indexes
  CREATE INDEX idx_messages_user_id ON messages(user_id);
  CREATE INDEX idx_messages_created_at ON messages(created_at);
  ```

### 3. Data Migration
- [ ] Export data from Supabase
- [ ] Transform data if needed
- [ ] Import data into Neon

### 4. Update Application Code
- [ ] Install required packages:
  ```bash
  npm install @neondatabase/serverless
  ```

- [ ] Create a database client utility:
  ```typescript
  // lib/neon.ts
  import { Pool } from '@neondatabase/serverless';
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
  export { pool };
  ```

- [ ] Update message service:
  ```typescript
  // services/messageService.ts
  import { pool } from '@/lib/neon';
  
  export const saveMessage = async (content: string, userId: string) => {
    const { rows } = await pool.query(
      'INSERT INTO messages (content, user_id) VALUES ($1, $2) RETURNING *',
      [content, userId]
    );
    return rows[0];
  };
  
  export const getMessages = async (limit = 50) => {
    const { rows } = await pool.query(
      'SELECT * FROM messages ORDER BY created_at DESC LIMIT $1',
      [limit]
    );
    return rows;
  };
  ```

### 5. Environment Variables
- [ ] Update `.env` file:
  ```
  # Remove Supabase
  # NEXT_PUBLIC_SUPABASE_URL=
  # NEXT_PUBLIC_SUPABASE_ANON_KEY=
  # SUPABASE_SERVICE_ROLE_KEY=
  
  # Add Neon
  DATABASE_URL=postgres://username:password@host/dbname?sslmode=require
  ```

### 6. Realtime Updates (Alternative)
Since Neon doesn't have built-in realtime like Supabase, consider:
- [ ] Using WebSockets
- [ ] Implementing Server-Sent Events (SSE)
- [ ] Using a third-party service like Pusher or Ably

### 7. Testing
- [ ] Unit tests for new database functions
- [ ] Integration tests for API endpoints
- [ ] End-to-end tests for message flow
- [ ] Load testing for performance

### 8. Deployment
- [ ] Deploy schema changes
- [ ] Deploy code changes
- [ ] Monitor for any issues
- [ ] Set up database backups in Neon

### 9. Cleanup
- [ ] Remove Supabase dependencies
- [ ] Update documentation
- [ ] Remove old Supabase code

## Rollback Plan
1. Keep Supabase running in parallel during initial deployment
2. If issues arise, update environment variables to point back to Supabase
3. If needed, restore from Supabase backup

## Estimated Timeline
- Setup and schema migration: 1 day
- Code updates: 2-3 days
- Testing: 1-2 days
- Deployment and monitoring: 1 day

Total: 5-7 business days
