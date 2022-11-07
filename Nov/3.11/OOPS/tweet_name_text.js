// Path: 


class Tweet {
    constructor(username, text) {
        this.username = username;
        this.text = text;
        this.date = new Date();
    }
    
    toString() {
        return `${this.username} - ${this.text} - ${this.date}`;
    }
}

const tweet1 = new Tweet('Joy', 'I love Javascript');
    
console.log(tweet1.toString());

// The class keyword creates a class with a constructor method.