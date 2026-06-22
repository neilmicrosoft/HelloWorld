class MyClass {
    constructor() {
        this.message = 'Hello Neil';
        rivets.bind($('body'), { data: this });
    }
    async btnClick() {
        this.message = 'Please Wait...'
        var url = 'https://www.neilb.net/wordjumblebackend/api/word/generategame';
        var data = await $.get(url);
        console.log(data);
        this.message = 'Number of rounds: ' + data.rounds.length;
    }
}
let myClass = new MyClass();
