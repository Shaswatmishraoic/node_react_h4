const profile = (req,res) =>{
    return res.send([
        {
            name:"shaswat",
            email:"email@gmail.com",
            pfofileimg:"anundsu",
        },
    ]);
}

const Dashboard = (req,res) =>{
    return res.send([
        {
            randomArticle:"random article"
        },
    ]);
}

module.exports = {Dashboard,profile};