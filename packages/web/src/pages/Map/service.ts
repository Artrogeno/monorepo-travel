// import { env } from '@traveler/environment'
import { EntryI } from '../../shared/interfaces/entry'

const env = { NODE_HOST: 'http://localhost:3002' }

export const listEntries = async (): Promise<EntryI[]> => {
  const response = await fetch(`${env.NODE_HOST}/api/logs`)
  return response.json()
}

export const createEntry = async (entry: EntryI): Promise<void> => {
  await fetch(`${env.NODE_HOST}/api/logs`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  })
}
