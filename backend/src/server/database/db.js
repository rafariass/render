import pkg from 'pg'

const { Pool } = pkg

const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  allowExitOnIdle: true,
  ssl: {
    rejectUnauthorized: true
  }
}

const pool = new Pool(config)

const db = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: '[ERROR]', code, message }
    console.log('[DB/ERROR]', error)
    throw error
  })

export default db
