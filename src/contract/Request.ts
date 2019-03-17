/**
 * @module http
 */

/**
 * @adonisjs/framework
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { UrlWithStringQuery } from 'url'
import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from 'http'

export interface IRequest {
  parsedUrl: UrlWithStringQuery
  request: IncomingMessage
  response: ServerResponse
  setInitialBody (body: any): void
  updateBody (body: any): void
  updateRawBody (body: string): void
  updateQs (data: any): void
  get (): { [key: string]: string | string[] }
  post (): { [key: string]: string | string[] }
  original (): { [key: string]: string | string[] }
  all (): { [key: string]: string | string[] }
  raw (): string | null
  input (key: string, defaultValue?: any): any
  except (keys: string[]): { [key: string]: string | string[] }
  only (keys: string[]): { [key: string]: string | string[] }
  method (): string
  intended (): string
  headers (): IncomingHttpHeaders
  header (key: string, defaultValue?: any): string | undefined
  ip (): string
  ips (): string[]
  protocol (): string
  secure (): boolean
  subdomains (): string[]
  hostname (): string | null
  ajax (): boolean
  pjax (): boolean
  url (includeQueryString?: boolean): string
  completeUrl (includeQueryString?: boolean): string
  is (types: string[]): string | null
  accepts (types: string[]): string | null
  types (): string[]
  language (languages: string[]): string | null
  languages (): string[]
  encoding (encodings: string[]): string | null
  encodings (): string[]
  charset (charsets: string[]): string | null
  charsets (): string[]
  hasBody (): boolean
  fresh (): boolean
  stale (): boolean
}