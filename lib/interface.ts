
import {Image} from "sanity";

// Navigation
export interface Navigation{
title:string;
logo:Image;
navigationlinks: navLinks[];
socialMediaLinks: socialMediaLinks[];
}

export interface navLinks{
linkname:string;
}

//Social Media Links
export interface socialMediaLinks{
icon:Image;
socialName:string;
socialLink:string;
}

// Hero

export interface Hero{
    backgroundImage:Image;
    sectiontext:string;

}

// Menu
export interface Menu{
   
    menusection:MenuItemsArr[];
}

export interface MenuPrelude{
    sectiontitle:string;
    sectiontagline:string;
    sectiontext:string;
}

export interface MenuItemsArr{
    foodCategoryIcon:Image;
    foodCategory:string;
    plate:plateItemsArr[];
}

export interface plateItemsArr{
    dishPhoto:Image;
    dishName:string;
    dishDescription:string;
    price:string;
}

//Contact
export interface Contact{
    sectiontitle:string;
    sectiontext:string;
    whatsappNumber:string;
    
}
//Store Hours
export interface Hours{
    storehours:StoreSchedule[];
}

// Store Schedule
export interface StoreSchedule {
    day: string;
    openHours: number; // Format HHMM
    closeHours: number; // Format HHMM
}
//About

export interface AboutSection{
    sectiontagline:string;
    sectiontitle:string;
    sectionImage:Image;
    bodyText:Block[];
    sideImage:Image;
}

//Block
export interface Block {
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: Array<{
      _key: string;
      _type: string;
       // You can define specific fields if known
    }>;
    style: string;
    // To handle any additional fields that might be present
  }