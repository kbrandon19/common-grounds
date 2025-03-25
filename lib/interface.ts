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
