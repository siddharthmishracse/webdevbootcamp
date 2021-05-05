const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogs = [
    {
        title: 'About Football',
        img: 'https://c4.wallpaperflare.com/wallpaper/443/1003/706/football-player-portugal-cristiano-ronaldo-wallpaper-preview.jpg',
        author: 'Siddharth Mishra',
        content: 'Football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.'
    },
    {
        title: 'Origin Of Football',
        img: 'https://blog.rackonnect.com/wp-content/uploads/2019/12/History-of-Badminton-1280x720.png',
        author: 'Siddharth Mishra',
        content: 'Modern football originated in Britain in the 19th century. Though “folk football” had been played since medieval times with varying rules, the game began to be standardized when it was taken up as a winter game at public schools. The Football Association, formed in 1863, codified the rules of the game and hosted the first cup competition between regional football clubs in Britain.'
    },
    {
        title: 'World Cup',
        img: 'https://miro.medium.com/max/12000/1*0A8eTfcCEI4vQdErHdrwEQ.jpeg',
        author: 'Siddharth Mishra',
        content: 'The FIFA World Cup, often simply called the World Cup, is an international association football competition contested by the senior men national teams of the members of the Fédération Internationale de Football Association (FIFA), the sports global governing body. The championship has been awarded every four years since the inaugural tournament in 1930, except in 1942 and 1946 when it was not held because of the Second World War. The current champion is France, which won its second title at the 2018 tournament in Russia.'
    },
    {
        title: 'Uefa Champions League',
        img: 'https://editorial.uefa.com/resources/025f-0fd4721b794c-4ea59eab6693-1000/tottenham_hotspur_v_liverpool_-_uefa_champions_league_final.jpeg',
        author: 'Siddharth Mishra',
        content: 'The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a group and knockout format.'
    },
    {
        title: 'Uefa Euro',
        img: 'https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/003/840/461/hi-res-5436a4aded938d8f80f34888080fc606_crop_north.jpg',
        author: 'Siddharth Mishra',
        content: 'The UEFA European Football Championship,[1] commonly known as the UEFA European Championship and informally as the Euros, is the primary association football competition contested by the senior mens national teams of the members of the Union of European Football Associations (UEFA), determining the continental champion of Europe. The competition has been held every four years since 1960, except for 2020, when it was postponed due to the ongoing COVID-19 pandemic in Europe. Scheduled to be in the even-numbered year between World Cup tournaments, it was originally called the European Nations Cup, changing to the current name in 1968. Starting with the 1996 tournament, specific championships are often referred to in the form "UEFA Euro [year]"; this format has since been retroactively applied to earlier tournaments.'
    },
    
];

const seedDB = async () => {
    await Blog.insertMany(blogs);
    console.log('DB Seeded');
}

module.exports = seedDB;