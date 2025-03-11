import { type SchemaTypeDefinition } from 'sanity'

//Navigation
import { navigationSchema } from"./navigationSchema"
import {navigationLinks} from "./subSchema/navigationLinks"

//Menu
import { menuSchema } from './menuSchema'
import {foodMenu} from './subSchema/foodMenu'
import { comboFoodMenu } from './subSchema/comboFoodMenu'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navigationSchema,navigationLinks,menuSchema,foodMenu, comboFoodMenu
    
  ],
}
