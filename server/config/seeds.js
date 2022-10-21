const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Climbing' },
    { name: 'Slacklining' },
    { name: 'Rope Access' },
    { name: 'Sewing Service' },
    { name: 'Bags' },
    { name: 'Rope Pro' },
    { name: 'Webbing' },
    { name: 'Accesories' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Duct Tape',
      description:
        `Looking for a lightweight, low stretch parkline webbing at an unbeatable price, look no further, duct tape is the answer. 
        At only 27.5 grams per meter it's the second lightest slackline webbing in the world, and the comfiest UHMWPE, you'll hardly notice it in your backpack or underfoot.
        
        Width - 25mm
        Construction - UHMWPE centre and purple nylon edges
        Weight Per Meter - 27.5g
        MBS (weblock) - 13.7kn
        MBS Sewn Loop - 13.7kn
        WLL - 4.5kn
        
        Stretch between 3.5kn and 4.5kn - 2%`,
      image: 'cookie-tin.jpg',
      category: [categories[1]._id, categories[6]._id],
      price: $79,
      quantity: 20
    },
    {
      name: 'Bum Bag V2.0',
      description:
        `V2.0 Is here!

        The new buckle system is the most secure on the market, it will not unclip accidentally and it will not loosen over time, A tricky thing to accomplish but here it is!
        
        Other changes include upgrading the zips to the world leading YKK style and changing the clip loop location to the other side of the bag (Greater security for your keys).
        
        At 110 grams, its still lightweight as ever and ready for your next adventure.
        
         
        
        Designed by big wall climbing legend John Middendorf (inventor of the modern-day portaledge), this is a must-have for any vertical explorers. 
        
         
        
        Constructed from 1000D Cordura Nylon and ultra-strong V135 UV stabilized thread, this piece of kit will be with you for years. Built with heavy abuse in mind, it is ideal for scaping up chimneys, everyday use in Rope Access, or simply for keeping your things on you at a festival.
        
         
        
        Climbing
        
        The Wall Ace / D4 Bum Bag is the ideal multi-pitch companion. Big enough to comfortably fit your phone, keys, snacks, and 750mL water bottle (flexible type) but not too big to get in the way. For tight squeezes or awkward jams, simply rotate the bag around your body.
        
         
        
        Highlining
        
        Whether rigging on small ledges, sessioning a trickline, or going for huge crossings, the ability to safely and securely carry your phone and other essentials is invaluable.
        
         
        
        Rope Access
        
        A great way to free up space and weight on your harness and keep your phone and valuables free from accidental crushing. Enough room for a buff, sunscreen, sunglasses, phone, wallet, keys, and more.
        
         
        
        Caving
        
        For caves with moderately small passages, the Wall Ace Bum Bag is an excellent way to ditch the backpack, taking only what you need. Simply rotate it onto your back for stomach crawls or vice versa.
        
        For tight squeezes and narrow passages, check out the Wall Ace Leg Bag, a one of a kind, designed to fit through any constriction.
        
         
        
        Festivals
        
        These contrasting colours and retro design matches with any festival outfit, a great way to avoid losing valuables and always having what you need, when you need it. `,
      image: 'canned-coffee.jpg',
      category: [categories[0]._id, categories[2]._id, categories[2]._id, categories[4]._id],
      price: 55,
      quantity: 10
    },
    {
      name: 'Steel Cable - 25mm UHMWPE High Strength Webbing',
      category: [categories[1]._id, categories[6]._id],
      description:
        `The comfiest low stretch webbing at an unbeatable price, seriously we'll match any comparable UHMWPE webbing on the market*.

        This is a complete mainline and backup line combo. 
        75m main, 83m backup with 4x sewn loops included.
        This webbing has been used to break the Austalian length record at 777m and is set to continue helping slackliners push the boundries. 
        
        These modular rigs make long slacklines a breeze. Simply connect more together to extend your webbing.
        The offset loop sizes, a Wall Ace innovation, provides the most lightweight and seamless connection possible. The reviews have been unanimous, leash rings simply don't get caught!
        
        Width - 25mm
        Construction - UHMWPE centre and purple nylon edges
        Total Weight - 6.0kg
        Weight Per Meter - 37.5g
        MBS (weblock) - 27kn
        MBS Sewn Loop - 27kn
        WLL - 6.5kn
        
        Stretch between 3.5kn and 4.5kn - 2% 
        
        Limited stock remaining
        
        Please read and understand all associated disclaimers before use. Product photos are for demonstration only and are not intended as rigging advice or instruction.
        *Price match is only valid for comparable UHMWPE webbings designed and sold for slackline use, price match is only related to retail price of comparable goods including measure, cutting and sewing costs (not inculding shipping).`,
      price: 599,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
