export interface ConfigI {
  NODE_PORT: number | string
  NODE_ENV: string
  JWT_SECRET?: string
  MASTER_KEY?: string
  MONGO_USERNAME?: string
  MONGO_PASSWORD?: string
  MONGO_HOST?: string
  MONGO_PORT?: number
  MONGO_DBNAME?: string
  MONGO_AUTH_SRC?: string
  MONGO_AUTH?: number
}
