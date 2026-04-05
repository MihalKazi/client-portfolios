import { experience } from './experience'
import { investigation } from './investigation'
import { header } from './header'
import { methodology } from './methodology'
import { brief } from './brief'

// Keep only ONE export const schema block
export const schema = {
  types: [header, brief, experience, investigation, methodology],
}