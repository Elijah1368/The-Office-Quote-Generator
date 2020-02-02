import {addQuotes} from '../actions/index';


test('basic adding', () => {
    expect(addQuotes({}, 
    [{
        "name": "Dwight Schrute",
        "quote": "Jim is gone. He's gone. I miss him so much. Ooooh I cry myself to sleep, Jim! False. I do not miss him."
    }, {
        "character": "Michael Scott",
        "quote": "I. Declare. Bankruptcy!",
        "pic": "<img src='./img/Michael_Scott.jpg'>"
    }])).toBe({
        "Dwight Schrute": "Jim is gone. He's gone. I miss him so much. Ooooh I cry myself to sleep, Jim! False. I do not miss him.",
        "Michael Scott": "I. Declare. Bankruptcy!"
    });
});

