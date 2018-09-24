const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
    {
        title: "Google C.E.O. Denies Allegations of Political Bias in Search Results",
        url: "https://www.nytimes.com/2018/09/21/technology/google-search-political-bias.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=rank&module=package&version=highlights&contentPlacement=2&pgtype=sectionfront",
        date: new Date(Date.now())
    },
    {
        title: "The Week in Tech: Are Robots Coming for Your Job? Eventually, Yes.",
        url: "https://www.nytimes.com/2018/09/21/technology/artificial-intelligence-jobs.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront",
        date: new Date(Date.now())
    },
    {
        title: "Windows on How Cities Change Can Be All Too Captivating",
        url: "https://www.nytimes.com/2018/09/19/technology/personaltech/windows-on-how-cities-change-can-be-all-too-captivating.html?rref=collection%2Fsectioncollection%2Fpersonaltech",
        date: new Date(Date.now())
    },
    {
        title: "Just Don’t Call It Privacy",
        url: "https://www.nytimes.com/2018/09/22/sunday-review/privacy-hearing-amazon-google.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront",
        date: new Date(Date.now())
    },
    {
        title: "iPhone XS and XS Max review: Apple's latest are the best yet. But do you need them?",
        url: "https://money.cnn.com/2018/09/19/technology/iphone-xs-and-max-review/index.html",
        date: new Date(Date.now())
    },
    {
        title: "How Jack Ma went from English teacher to tech billionaire",
        url: "https://money.cnn.com/2018/09/09/technology/business/jack-ma-alibaba-bio/index.html",
        date: new Date(Date.now())
    },
    {
        title: "You can now get kicked off Uber in Australia for being rude to drivers",
        url: "https://money.cnn.com/2018/09/05/technology/uber-australia-new-zealand-riders/index.html",
        date: new Date(Date.now())
    },
    {
        title: "China bet big on quantum computing. Now the US races to keep up.",
        url: "https://money.cnn.com/2018/09/14/technology/quantum-computing-china/index.html",
        date: new Date(Date.now())
    },
    {
        title: "The Pentagon is investing $2 billion into artificial intelligence",
        url: "https://money.cnn.com/2018/09/07/technology/darpa-artificial-intelligence/index.html",
        date: new Date(Date.now())
    },
    {
        title: "How Facebook -- yes, Facebook -- might make MRIs faster",
        url: "https://money.cnn.com/2018/08/20/technology/facebook-mri-ai-nyu/index.html",
        date: new Date(Date.now())
    },
    {
        title: "Google might return to China. Here's why that's so controversial",
        url: "https://money.cnn.com/2018/08/02/technology/google-china-censorship/index.html",
        date: new Date(Date.now())
    },
    {
        title: "Google discussed promoting pro-immigration search results",
        url: "https://money.cnn.com/2018/09/21/technology/business/google-search-results/index.html",
        date: new Date(Date.now())
    },
    {
        title: "These iOS 12 features may improve your life",
        url: "https://money.cnn.com/2018/09/17/technology/ios-12-features/index.html",
        date: new Date(Date.now())
    },
    {
        title: "Why it's smart for Apple to be the Christian Dior of tech",
        url: "https://money.cnn.com/2018/09/12/technology/john-sculley-apple-iphones/index.html",
        date: new Date(Date.now())
    },
    {
        title: "Billion Dollar Start Ups",
        url: "https://money.cnn.com/interactive/technology/billion-dollar-startups/index.html",
        date: new Date(Date.now())
    },
    {
        title: "This could be the Rolls-Royce of flying taxis",
        url: "https://money.cnn.com/2018/07/16/technology/rolls-royce-flying-taxi/index.html",
        date: new Date(Date.now())
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
