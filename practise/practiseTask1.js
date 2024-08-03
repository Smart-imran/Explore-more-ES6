//task: 1 .console log secondary school location

let data = {
    Sophia:{
        id:33,
        study:[
            {
                primary:[
                    {school_name:"Amnura k.m high school"},
                    {location:"Amnura"},

                ]
            },

            {
                secondary:[
                    {school_name:"Amnura primary school"},
                    {location:"Amnura Rajshahi"},

                ]
            },

        ]
    }
}


let findLocation = data.Sophia.study[1].secondary[1].location;
let findLocation2 = data.Sophia.study[0].primary[1].location;


//console.log(findLocation);
//console.log(findLocation2);

// task.2 find city  

let students = {
    2222:{
        name:"Jack",
        section:"C",
        class:"IX",
        address:{
            "building no":12,
            "street": "St Joson",
            "city":"Petersburg",
            "country":"UK"
        }
    }
}

let findstudents = students[2222].address.city;

//console.log(findstudents);