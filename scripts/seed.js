const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

const bookSeed = [
  {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
  },
  {
    authors: ["Seanan McGuire"],
    description: "New York Times bestselling and Alex, Nebula, and Hugo-Award-winning author Seanan McGuire introduces readers to a world of amoral alchemy, shadowy organizations, and impossible cities in the standalone fantasy, Middlegame. Meet Roger. Skilled with words, languages come easily to him. He instinctively understands how the world works through the power of story. Meet Dodger, his twin. Numbers are her world, her obsession, her everything. All she understands, she does so through the power of math. Roger and Dodger aren’t exactly human, though they don’t realise it. They aren’t exactly gods, either. Not entirely. Not yet.",
    image: "",
    link: "",
    title: "Middlegame",
  },
  {
    authors: [""],
    description: "",
    image: "",
    link: "",
    title: "",
  },
  {
    authors: ["Seanan McGuire"],
    description: "",
    image: "",
    link: "",
    title: "",
  }
]

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
