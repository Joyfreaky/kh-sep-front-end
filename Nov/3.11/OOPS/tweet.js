// Class
// Path: Nov/3.11/OOPS/tweet.js

class Tweet {
    constructor(text) {
        this.text = text;
    }
    getLength() {
        return this.text.length;
    }
}

const tweet = new Tweet('Hello World');

console.log(tweet.getLength());

// The class keyword creates a class with a constructor function.



