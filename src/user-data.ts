type UserData = {
    userID: number;
    name: string;
    ingredients: string[]; // the user's saved ingredients
    locations: string[]; // the user's saved locations
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
            "Mum's House",
            "Big Y"
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
            "Stop & Shop",
            "Mum's House"
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
            "Don Quijote Market",
            "Big Y"
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
            "Nubian Markets",
            "Don Quijote Market"
        ]
    }
]

export {USER_DATA};
export type {UserData};