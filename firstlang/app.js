
new Vue({
    el: "#app",
    data: {
        texts: {
            title: "My First Language",
            welcome: "Hi! Do you want to become a <b>Programmer</b> but couldn't decide where to start yet? No worries. This app will help you to choose your path. Let's look together and decide which language is the best for you to start 🚀",
            letsRoll: "Lets Roll!",
            footerText: "This app created by <a href='https://kaangokdemir.me'>Kaan Gökdemir</a> based on <a href='https://carlcheo.com/startcoding'>CarlCheo</a>'s chart",
            youShould1: "You should learn ",
            youShould2: " first!",
            popularity: "Popularity:&nbsp;",
            avsalary: "Average Salary:&nbsp;",
            used: "Used to build:&nbsp;",
            again: "Test again 🔁",
        },
        question: {

            q01: "Why do you want to learn programming?",
            q02: "Start with Scratch then move on to...",
            q03: "I want to...",
            q04: "Which platform/field?",
            q05: "Which company do you want to work for most?",
            q06: "Which side do you want to work?",
            q07: "I want to work for...",
            q08: 'What do you think about Microsoft? <i class="devicon-windows8-original"></i>',
            q09: "Do you want to try something new with huge potential, but less mature?",
            q10: "Which one is your favourite toy? 🧸",
            q11: "Which OS? 📱",
            q12: "Have a brilliant idea/platform in mind? 🧠",
            q13: "Which platform/ field?",
            q14: "Does your web app provides info in real-time, like Twitter?",
            q15: "I prefer to learn things...",
            q16: "Auto or Manual car? 🚗",

        },
    
        hero: {
            h01: "The Ent",
            h02: "Gandalf",
            h03: "One Ring",
            h04: "Saruman",
            h05: "Hobbit",
            h06: "Elf",
            h07: "Human",
            h08: "Orc",
            h09: "Smaug"
        },

        quote: {
            q01: "Help little Hobbits (beginners) to understand programming concepts <br><br> Help wizards (computer scientists) to conduct researchs.",
            q02: "Wants peace & works with everyone (portable)",
            q03: "The power of C is known to them all <br> Everyone wants to get its Power 💪",
            q04: "Everyone thinks that he is the good guy <br> But once you get to know him, you will realize he wants the power, not good deeds 😈",
            q05: "Frequently underestimated (powerful 💪) <br> Well-known for the slow, gentle life of the Shire (web browser 🌐)",
            q06: "Beautiful creature (language), used to stay in their land, Rivendell (Microsoft Platform <i class='devicon-windows8-original colored'></i>) but recently started to upon up to their neighbours (open source)"
        },

        last: {
            q01: [{ text: "Widely regarded as the best programming language for beginners" }, { text: "Easiest to learn 👶" }, { text: "Widely used in scientific, technical & academic field i.e. <b>Artificial Intelligence</b>" }, { text: "You can build website using Django, a popular Python web framework</b>" }],
            q02: [{ text: "Very popular on all platforms, OS, and devices due to its portability" }, { text: "One of the most in demand & highest paying programming languages 💰" }, { text: "Slogan: write once, work everywhere" }],
            q03: [{ text: "Lingua franca of programming language" }, { text: "One of the oldest and most widely used language in the world 🌍" }, { text: "Popular language for system and hardware programming" }, { text: "A subset of C++ except the little details" }],
            q04: [{ text: "Complex version of C with a lot more features" }, { text: "Widely used for developing games, industrial and performance-critical applications 👾" }, { text: "Learning C++ is like learning how to manufacture, assemble, and drive a car 🚗" }, { text: "Recommended only if you have a mentor to guide you" }],
            q05: [{ text: '"Java and Javascript are similiar like Car and Carpet are similiar" - Greg Hewgill' }, { text: "Most popular clients-side web scripting language" }, { text: "A must learn for front-end web developer (HTML and CSS as well)" }, { text: "One of the hottest programming language now, due to its increasing popularity as server-side language (node.js) 🔥🔥" }],
            q06: [{ text: "A popular choice for enterprise to create websites and Windows application using .NET framework" }, { text: "Can be used to build website with ASP.NET, a web framework from Microsoft" }, { text: "Similiar to Java in basic syntax and some features" }],
            q07: [{text: "Mostly known for its popular web framework, Ruby on Rails 🛤"},{text: "Focuses on getting things done"},{text: "Designed for fun and productive coding"},{text: "Best for fun and personal projects, startups and rapid developments"}],
            q08: [{text: "Suitable for building small and simple sites within a shor time frame"},{text: "Supported by almost every web hosting services with lower price"}],
            q09: [{text: "Primary language used by Apple for Mac OS X % iOS <i class='devicon-apple-original colored'></i>"}, {text: "Choose this if you want to focus on developing iOS or OSX apps only"},{text: "Consider to learn Swift (newly introduced by Apple in 2014) as your next language"}],
        },

        answer: {
            a0101: "For my kids 👶",
            a0102: "Make money 🤑",
            a0103: "Improve myself 💪",
            a0104: "I just have interest 🔎",
            a0105: "Just for fun 💃",
            a0106: "I don't know, just pick one for me 🤔",
            a0201: "Show me! 👀",
            a0301: "Get a job 👔",
            a0302: "I have a startup idea 💡",
            a0401: "I want to work for big tech companies 📈",
            a0402: "Doesn't matter, I just want 💲💲💲",
            a0403: "Web 💻",
            a0404: "Enterprise 🏢",
            a0405: "Mobile 📱",
            a0406: "3D/Gaming 🎮",
            a0501: "Facebook",
            a0502: "Google",
            a0503: "Apple",
            a0504: "Microsoft",
            a0601: "Front-End (web interface 💻)",
            a0602: 'Back-End ("brain" behind a website 🧠)',
            a0701: "Corporate 🤝",
            a0702: "Startup 🤙",
            a0801: "I'm a fan! 😁",
            a0802: "Not Bad 🤨",
            a0803: "It Sucks 👎",
            a0901: "Yes ✅",
            a0902: "No ❌",
            a0903: "Not Sure 🤔",
            a1001: "Lego",
            a1002: "Play-Doh",
            a1003: "I've an old & ugly toy, but I love it so much!",
            a1101: "iOS",
            a1102: "Android",
            a1201: "YES",
            a1202: "Nope 😔 Just want to get started",
            a1301: "3D/Gaming 🎮",
            a1302: "Mobile 📱",
            a1303: "Enterprise 🏢",
            a1304: "Web 💻",
            a1401: "Yes ✅",
            a1402: "No ❌",
            a1501: "The easy way 👶",
            a1502: "The best way 👌",
            a1503: "The slightly harder way 😮",
            a1504: "The really hard way 😱",
            a1601: "Auto",
            a1602: "Manual",

        },
        entered: true,
        started: false,
        resulted: false,
        stars: 0,
        salary: "0",
        used: "",
        myQuestion: "",
        situation: "",
        myHero: "",
        myLang: "",
        heroPic: "",
        langPic: "",
        myQuote: "",
        myList: [],

    },
    methods: {
        letsStart() {
            this.entered = false;
            this.resulted = false;
            this.situation = "q01";
            this.started = true;
            this.myQuestion = this.question.q01;
        },

        pr01() {
            this.situation = "q02";
            this.myQuestion = this.question.q02;
        },
        pr02() {
            this.situation = "q03";
            this.myQuestion = this.question.q03;
        },
        pr03() {
            this.situation = "q04";
            this.myQuestion = this.question.q04;
        },
        pr04() {
            this.situation = "q05";
            this.myQuestion = this.question.q05;
        },
        pr05() {
            this.situation = "q06";
            this.myQuestion = this.question.q06;
        },
        pr06() {
            this.situation = "q07";
            this.myQuestion = this.question.q07;
        },
        pr07() {
            this.situation = "q08";
            this.myQuestion = this.question.q08;
        },
        pr08() {
            this.situation = "q09";
            this.myQuestion = this.question.q09;
        },
        pr09() {
            this.situation = "q10";
            this.myQuestion = this.question.q10;
        },
        pr10() {
            this.situation = "q11";
            this.myQuestion = this.question.q11;
        },
        pr11() {
            this.situation = "q12";
            this.myQuestion = this.question.q12;
        },
        pr12() {
            this.situation = "q13";
            this.myQuestion = this.question.q13;
        },
        pr13() {
            this.situation = "q14";
            this.myQuestion = this.question.q14;
        },
        pr14() {
            this.situation = "q15";
            this.myQuestion = this.question.q15;
        },
        pr15() {
            this.situation = "q16";
            this.myQuestion = this.question.q16;
        },
        rr01() { //Python
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 9;
            this.salary = "<b>107,000$</b>";
            this.myLang = "PYTHON"
            this.used = "YouTube, Instagram, Spotify";
            this.myHero = "The Ent";
            this.heroPic = "./images/h01.jpg";
            this.langPic = "./images/h01.svg";
            this.myQuote = this.quote.q01;
            this.myList = this.last.q01;
        },
        rr02() { //Java
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 10;
            this.salary = "<b>102,000$</b>";
            this.myLang = "JAVA"
            this.used = "Gmail, Minecraft, Most Android Apps, Enterprise Applications";
            this.myHero = "Gandalf";
            this.heroPic = "./images/h02.jpg";
            this.langPic = "./images/h02.svg";
            this.myQuote = this.quote.q02;
            this.myList = this.last.q02;
        },
        rr03() { //C
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 10;
            this.salary = "<b>102,000$</b>";
            this.myLang = "C"
            this.used = "Operating systems and hardware";
            this.myHero = "One Ring";
            this.heroPic = "./images/h03.jpg";
            this.langPic = "./images/h03.svg";
            this.myQuote = this.quote.q03;
            this.myList = this.last.q03;
        },
        rr04() { //C++
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 9;
            this.salary = "<b>104,000$</b>";
            this.myLang = "C++"
            this.used = "Operating systems, hardware and browsers";
            this.myHero = "Saruman";
            this.heroPic = "./images/h04.jpg";
            this.langPic = "./images/h04.svg";
            this.myQuote = this.quote.q04;
            this.myList = this.last.q04;
        },
        rr05() { //JavaScript
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 8;
            this.salary = "<b>99,000$</b>";
            this.myLang = "JavaScript"
            this.used = "Paypal, front-end of majority websites";
            this.myHero = "Hobbit";
            this.heroPic = "./images/h05.jpg";
            this.langPic = "./images/h05.svg";
            this.myQuote = this.quote.q05;
            this.myList = this.last.q05;
        },
        rr06() { //C#
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 9;
            this.salary = "<b>94,000$</b>";
            this.myLang = "C#"
            this.used = "Enterprise and Windows applications";
            this.myHero = "Elf";
            this.heroPic = "./images/h06.jpg";
            this.langPic = "./images/h06.svg";
            this.myQuote = this.quote.q06;
            this.myList = this.last.q06;
        },
        rr07() { //Ruby
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 10;
            this.salary = "<b>107,000$</b>";
            this.myLang = "Ruby"
            this.used = "Hulu, Groupon, Slideshare";
            this.myHero = "Man (Middle Earth)";
            this.heroPic = "./images/h07.jpg";
            this.langPic = "./images/h07.svg";
            this.myQuote = this.quote.q07;
            this.myList = this.last.q07;
        },
        rr08() { //PHP
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 8;
            this.salary = "<b>89,000$</b>";
            this.myLang = "PHP"
            this.used = "Wordpress, Wikipedia, Flickr";
            this.myHero = "Orc";
            this.heroPic = "./images/h08.jpg";
            this.langPic = "./images/h08.svg";
            this.myQuote = this.quote.q08;
            this.myList = this.last.q08;
        },
        rr09() { //Objective-C
            this.myQuestion = "";
            this.situation = "";
            this.started = false;
            this.resulted = true;
            this.stars = 6;
            this.salary = "<b>107,000$</b>";
            this.myLang = "Objective-C"
            this.used = "Most iOS Apps and part of Mac OS X";
            this.myHero = "Smaug";
            this.heroPic = "./images/h09.jpg";
            this.langPic = "./images/h09.svg";
            this.myQuote = this.quote.q09;
            this.myList = this.last.q09;
        },




    },
    watch: {

    }


})