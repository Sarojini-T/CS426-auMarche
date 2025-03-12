import { LocationData, LOCATION_DATA } from "./location-data";
type UserData = {
    userID: number;
    name: string;
    ingredients: string[]; // the user's saved ingredients
    locations: LocationData[]; // the user's saved locations
}
  
const USER_DATA: UserData[] = [
    {
        userID: 1,
        name: "Sarah",
        ingredients: [
            "Dashi powder",
            "Kikurage",
            "Moyashi"
        ],
        locations: [
            LOCATION_DATA[1],
            LOCATION_DATA[0]
        ]
    },
    {
        userID: 2,
        name: "Sarojini",
        ingredients: [
            "Kimchi",
            "Gochugaru",
            "Ssamjang"
        ],
        locations: [
            LOCATION_DATA[2],
            LOCATION_DATA[1]
        ]
    },
    {
        userID: 3,
        name: "Danny",
        ingredients: [
            "Shaoxing Wine",
            "Juniper Berries",
            "Achiote paste"
        ],
        locations: [
            LOCATION_DATA[4],
            LOCATION_DATA[3]
        ]
    },
    {
        userID: 4,
        name: "Snigdha",
        ingredients: [
            "Militon",
            "Malanga Root",
            "Taro"
        ],
        locations: [
            LOCATION_DATA[5],
            LOCATION_DATA[4]
        ]
    }
]

export { USER_DATA };
export type { UserData };