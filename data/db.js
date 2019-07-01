// db.js

// Load Chance
var Chance = require('chance');

module.exports = () => {
    const data = {
        questions: [
            {
                id: 1,
                question: 'How many people are there in your household?',
                type: 1,
                value: 1,
                countFamily: {
                    min: 3,
                    value: 50
                },
                countSport: {
                    max: 2,
                    value: 50
                }
            },
            {
                id: 2,
                question: 'Do you prefer speed or comfort?',
                type: 2,
                value: null,
                options: [
                    {
                        text: 'Speed',
                        value: 1,
                        countFamily: 0,
                        countSport: 50
                    },
                    {
                        text: 'Comfort',
                        value: 2,
                        countFamily: 50,
                        countSport: 0
                    }
                ]
            },
            {
                id: 3,
                question: 'How important is the look of a car to you?',
                type: 2,
                value: null,
                options: [
                    {
                        text: 'I want people to notice me! ',
                        value: 1,
                        countFamily: 0,
                        countSport: 50
                    },
                    {
                        text: "I'm happy to blend in!",
                        value: 2,
                        countFamily: 50,
                        countSport: 0
                    }
                ]
            }
        ],
        vehicles: []
    };

    // Instantiate Chance so it can be used
    var chance = new Chance();
    var my_random_string = chance.string();

    let typeN = chance.integer({ min: 1, max: 2 });

    // Create 500 vehicles
    for (let i = 0; i < 500; i++) {
        const carType = chance.integer({ min: 1, max: 2 })
        data.vehicles.push({
            id: i,
            image: 'https://loremflickr.com/320/240/' + (carType == 1 ? 'suv,familycar' : 'sportcar' + '?random=1'),
            type: carType,
            year: chance.integer({ min: new Date(0).getFullYear(), max: new Date().getFullYear() }),
            mileage: chance.integer({ min: 1, max: 250000 })
        })
    }
    return data
}
