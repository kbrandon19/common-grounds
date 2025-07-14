import { defineType } from "sanity";


export const socialMediaIcons = defineType({
    name:'social',
    title:'Social',
    type:'object',
    fields:[ 
        {
            name:'icon',
            title:'Icon',
            type:'image',
            
        },
       {
            name:'socialName',
            title:'Social Name',
            type:'string'
        },
        {
            name:'socialLink',
            title:'Social Link',
            type:'string'
        }
    ],


}) 