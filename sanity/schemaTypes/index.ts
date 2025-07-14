import { type SchemaTypeDefinition } from 'sanity'


//Hero
import {heroSchema} from './heroSchema'

//Navigation
import { navigationSchema } from"./navigationSchema"
import {navigationLinks} from "./subSchema/Navigation/navigationLinks"

//Menu
import { menuSchema } from './menuSchema'
import { menuPreludeSchema } from './menuPreludeSchema'
import {foodMenu} from './subSchema/Menu/foodMenu'
import { comboFoodMenu } from './subSchema/Menu/comboFoodMenu'

//About
import { aboutSchema } from './aboutSchema'

//Contact
import {contactSchema} from './contactSchema'

//Hours
import { hoursSchema } from './hoursSchema'
import { storeScheduleSchema } from './subSchema/Hours/storeScheduleSchema'
import { socialMediaIcons } from './subSchema/Navigation/socialMediaIcons'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSchema,navigationSchema,navigationLinks,
    menuSchema,menuPreludeSchema,foodMenu, comboFoodMenu,
    aboutSchema,
    contactSchema,hoursSchema,storeScheduleSchema,socialMediaIcons
    
  ],
}
