import { type SchemaTypeDefinition } from 'sanity'

//Navigation
import { navigationSchema } from"./navigationSchema"
import {navigationLinks} from "./subSchema/Navigation/navigationLinks"

//Menu
import { menuSchema } from './menuSchema'
import {foodMenu} from './subSchema/Menu/foodMenu'
import { comboFoodMenu } from './subSchema/Menu/comboFoodMenu'

//About
import { aboutSchema } from './aboutSchema'

//Contact
import {contactSchema} from './contactSchema'
import { storeHours } from './subSchema/About/storehours'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navigationSchema,navigationLinks,
    menuSchema,foodMenu, comboFoodMenu,
    aboutSchema,
    contactSchema,storeHours,
    
  ],
}
