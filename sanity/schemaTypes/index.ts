import { type SchemaTypeDefinition } from 'sanity'

//Navigation
import { navigationSchema } from"./navigationSchema"
import {navigationLinks} from "./subSchema/navigationLinks"

//Menu
import { menuSchema } from './menuSchema'
import {foodIcons} from './subSchema/foodIcons'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navigationSchema,navigationLinks,menuSchema,foodIcons
    
  ],
}
