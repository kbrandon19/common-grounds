// app/menu/page.tsx
import { client } from "@/sanity/lib/client";
import { Menu } from "@/lib/interface";
import MenuClient from "./MenuClient";

async function getData(): Promise<Menu | null> {
  const query = `
    *[_type == 'menu'][0] {
      menusection[]{
        foodCategory,
        foodCategoryIcon,
        plate[]{
          dishPhoto,
          dishName,
          dishDescription,
          price
        }
      }
    }
  `;
  return client.fetch(query);
}

export default async function MenuPage() {
  const menuData = await getData();
  return <MenuClient initialData={menuData} />;
}
