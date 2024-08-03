
// show "Hablu adda"

let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "Habluder adda",
                category: "XYZ",
                price: "20$",
            },
        },

        {
            bookId: 2,
            bookDetails: {
                name: "HIMU-2",
                category: "XYZ",
                price: "40$",
            }
        },

        {
            bookId: 3,
            bookDetails: {
                name: "MISR-ALI",
                category: "XYZ",
                price: "50$",
            },
            bookCategory: "Beginner",
        }
    ]
}

let findData = data2.data[0].bookDetails.name;
//console.log(findData);

let findData2 = data2.data[2].bookCategory;

//  console.log(findData2);