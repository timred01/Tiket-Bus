import crypto from 'crypto-js'
import { env } from '../vite-env.d'

const Encrypt = (data: string): string => {
  return crypto.AES.encrypt(
    JSON.stringify(data),
    env.VITE_APP_SALT
  ).toString()
}

export default Encrypt
