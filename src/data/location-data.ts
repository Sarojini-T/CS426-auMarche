import { ItemData, ITEM_DATA } from "./item-data";

type LocationData = {
    name: string;
    items: ItemData[];
    city: string;
}

const LOCATION_DATA: LocationData[] = [
    {
        name: "Big Y",
        items: [ITEM_DATA[3]],
        city: "Amherst"
    },
    {
        name: "Mum's House",
        items: [ITEM_DATA[1], ITEM_DATA[2]],
        city: "Amherst"
    },
    {
        name: "Stop & Shop",
        items: [ITEM_DATA[0], ITEM_DATA[2]],
        city: "Amherst"
    },
    {
        name: "Big Y",
        items: [ITEM_DATA[2], ITEM_DATA[4], ITEM_DATA[5]],
        city: "Amherst"
    },
    {
        name: "Don Quijote Market",
        items: [ITEM_DATA[0], ITEM_DATA[2]],
        city: "Amherst"
    },
    {
        name: "Nubian Markets",
        items: [ITEM_DATA[2], ITEM_DATA[4], ITEM_DATA[5]],
        city: "Amherst"
    }
]

export { LOCATION_DATA }
export type { LocationData }