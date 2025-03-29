type LocationData = {
    name: string;
    items: number[];
    city: string;
}

const LOCATION_DATA: LocationData[] = [
    {
        name: "Big Y",
        items: [3],
        city: "Amherst"
    },
    {
        name: "Mum's House",
        items: [1, 2],
        city: "Amherst"
    },
    {
        name: "Stop & Shop",
        items: [0, 2],
        city: "Amherst"
    },
    {
        name: "Big Y",
        items: [2, 4, 5],
        city: "Amherst"
    },
    {
        name: "Don Quijote Market",
        items: [0, 2],
        city: "Amherst"
    },
    {
        name: "Nubian Markets",
        items: [2, 4, 5],
        city: "Amherst"
    }
]

export { LOCATION_DATA }
export type { LocationData }