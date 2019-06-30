// db.js
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

    // Create 1000 users
    for (let i = 0; i < 500; i++) {
        data.vehicles.push({ id: i, name: `user${i}` })
    }
    return data
}
