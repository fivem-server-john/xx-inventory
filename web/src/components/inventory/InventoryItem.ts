export interface InventoryItem {
    name: string;
    label: string;
    amount: number;

    desc: string;
    quality: number;
}

// Test item
export const testItem: InventoryItem = {
    name: "ammo-9",
    label: "9mm ammo",
    amount: 10000,
    desc: "This is a test item",

    quality: 66,
}