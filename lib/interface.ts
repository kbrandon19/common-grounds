import {Image} from "sanity";

// Navigation
export interface Navigation{
title:string;
logo:Image;
navigationlinks: navLinks[];
}

export interface navLinks{
linkname:string;
}

// Hero

export interface Hero{
    backgroundImage:Image;
    sectiontext:string;

}

// Menu
export interface Menu{
    sectiontitle:string;
    sectiontagline:string;
    sectiontext:string;
    menusection:MenuItemsArr[];
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