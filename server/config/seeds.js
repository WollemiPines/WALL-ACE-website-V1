const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Climbing' }, //0
    { name: 'Slacklining' }, //1
    { name: 'Rope Access' }, //2
    { name: 'Sewing Service' }, //3
    { name: 'Bags' }, //4
    { name: 'Rope Pro' }, //5
    { name: 'Webbing' }, //6
    { name: 'Accesories' } //7
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
      image: ['cookie-tin.jpg'],
      category: [categories[1]._id, categories[6]._id],
      price: 79,
      quantity: 20
    },
    {
      name: 'Bum Bag V2.0',
      description:
        `V2.0 Is here!

        The new buckle system is the most secure on the market, it will not unclip accidentally and it will not loosen over time, A tricky thing to accomplish but here it is! Other changes include upgrading the zips to the world leading YKK style and changing the clip loop location to the other side of the bag (Greater security for your keys). At 110 grams, its still lightweight as ever and ready for your next adventure. Designed by big wall climbing legend John Middendorf (inventor of the modern-day portaledge), this is a must-have for any vertical explorers. Constructed from 1000D Cordura Nylon and ultra-strong V135 UV stabilized thread, this piece of kit will be with you for years. Built with heavy abuse in mind, it is ideal for scaping up chimneys, everyday use in Rope Access, or simply for keeping your things on you at a festival.
        
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
      category: [categories[0]._id, categories[1]._id, categories[2]._id, categories[4]._id],
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
        image: [
        '5.jpg'],
        price: 599,
      quantity: 20
    },
    {
      name: 'Abseil Pro - Rope Protection',
      category: [categories[0]._id, categories[1]._id, categories[2]._id, categories[5]._id],
      description:
       `Constructed from super strong 12oz Canvas Eyre Tearlock, these lightweight pieces will protect your ropes against abrasive edges. Designed to pack small and fit un-noticed in any backpack, they're the ultimate in easy and affordable rope pro, without sacrificing durability. 

       Availible in either single or double layer. 
       Choose single layer for lightweight and suple protection when abseiling and general use.
       Choose double layer for a longer lifespan or more aggresive use (pulling ropes up over it). 
       
      
       Abseil Pro - 55cm
       
       Forget annoying prussic's and cord tie-offs, these medium length rope pros are the easiest to secure on the market. The innovative design allows you to simply cinch the cord down, holding it securely in position. Features Include;
     
       - Enough room to fit 3 strands of 11mm rope
       
       - Simply fix two or more alongside each other to create more room inside. Two stacked together comfortably fit a couple of spansets.
       
       - Revolutionary cinch design, the easiest to use on the market.
       
       - Only 75 grams per piece (single layer) and 115g for double layer`,
      price: 20,
      quantity: 50
    },
    {
      name: 'DC Rope Apparel - The Bowtie (Small)',
      category: [categories[0]._id, categories[1]._id, categories[2]._id, categories[5]._id],
      description:
        `Dress your ropes up in the latest DC (Dirt Cheap) Rope Apparel from Wall Ace. 
 
        Designed to maximise your protection at a minimum of bucks, the Bowtie is the smallest option in the range. At 350mm long by 100mm wide (when opened), it's perfect for single ropes or multiples of thinner cords, think dyneema whoopies and 8mm static. 
        Made from single layer heavy duty 18oz canvas in a sneaky black with 25mm purple velcro. This snazzy combo is the very definition of business casual. 
        
        Don't be fooled, this is in no way inferior to other rope pro options on the market, in fact it's heavier duty than most, Wall Ace can achive such low costs purely by stripping out all the unessecary extras. This means no neat trims, fancy clip loops or even branded labels. The DC Rope Apparel Range is 100% pure abrasion resistance. 
        
        Don't forget to check out the larger sizes and bulk order discounts too!`,
      price: 6.50,
      quantity: 100
    },
    {
      name: 'DC Rope Apparel - The Blazer',
      category: [categories[0]._id, categories[1]._id, categories[2]._id, categories[5]._id],
      description:
        `Dress your ropes up in the latest DC (Dirt Cheap) Rope Apparel from Wall Ace. 
 
        Designed to maximise your protection at a minimum of bucks, the Blazer is the medium option in the range. At 450mm long by 130mm wide (when opened), it's perfect for single spansets or multiples of ropes, think BFK anchor padding. 
        Made from single layer heavy duty 18oz canvas in a sneaky black with 25mm purple velcro. This snazzy combo is the very definition of business casual. 
        
        Don't be fooled, this is in no way inferior to other rope pro options on the market, in fact it's heavier duty than most, Wall Ace can achive such low costs purely by stripping out all the unessecary extras. This means no neat trims, fancy clip loops or even branded labels. The DC Rope Apparel Range is 100% pure abrasion resistance. 
        
        Don't forget to check out the other sizes and bulk order discounts too!`,
      image: 'camera.jpg',
      price: 8.50,
      quantity: 100
    },
    {
      name: 'Bomber Pro - Rope Protection',
      category: [categories[0]._id, categories[1]._id, categories[2]._id, categories[5]._id],
      description:
       `Need an easy and elegant solution to protecting gnarley edges, the Wall Ace Bomber Pro is it. Constructed from heavy-duty carpet and lined with a bomber 12oz canvas, these adjustable rope pros are made to last.

       - Adjustable size, fits several strands of spansets at its maximum (12cm wide) or cinches tight around a single sling at its minimum (6cm)
       - Easy to use
       - Multiple bombproof clip off points
       - Soft outer layer is easy on sensitive structures and painted walls.
       - Comes with 2x velcro straps, making it the most versatile piece of rope protection in your kit. Simply lay it out flat, protecting a large section of edge, and strap your anchor or ropes securely to it. 
       - Heavy duty but still lightweight at only 350g per piece`,
      image: 'tablet.jpg',
      price: 40,
      quantity: 2
    },
    {
      name: 'The Tuxedo - Rope Pro Assortment',
      category: [categories[0]._id, categories[1]._id, categories[2]._id, categories[5]._id],
      description:
       `Just as the carpenter can never have enough clamps and the influencer, enough shoes, the highliner can never have enough rope pros. This tidy kit will supply you with a nice amount for a standard highline rig.
       Save $15 when you get this complete rope pro kit and go buy yourself a nice hot meal... or you could spend it on something else here and then maybe I can afford to eat food too.

       The Bowtie's - 35cm (Thats the 3x small ones)
       
       These mirco rope pros are ideal for padding 8mm rope or whoppie slings around boulders and other rough edges
       

       The Blazers's - 45cm (Thats the 3x medium ones)
       
       These medium size pros are an all round exellent choice for all things anchors. Enough space to fit a spanset inside or multiple strands of thick static rope (hint fix two along side each other for even more room).
       
       
       Abseil Pro - 55cm (Thats the 2x orange ones)
       
       Forget annoying prussic's and cord tie-offs, these medium to long rope pros are the easiest to secure on the market. The innovative design allows you to simply cinch the cord down, holding it securely in position. Features Include;
       
       - Enough room to fit 3 strands of 11mm rope
       
       - Simply fix two or more alongside each other to create more room inside. Two stacked together comfortably fit a couple of spansets.
       
       - Revolutionary cinch design, the easiest to use on the market.
       
       - Only 90 grams per piece
       
       Bomber Pro (Thats the big fuzzy bomber one in the back)
       Constructed from heavy-duty carpet and lined with a bomber 16oz canvas, these adjustable rope pros are made to last.
       
       - Adjustable size, fits several strands of spansets at its maximum (12cm wide) or cinches tight around a single sling at its minimum (6cm)
       
       - Easy to use
       
       - Multiple bombproof clip off points
       
       - Soft outer layer is easy on sensitive structures and painted walls.- Comes with 2x velcro straps, making it the most versatile piece of rope protection in your kit. Simply lay it out flat, protecting a large section of edge, and strap your anchor or ropes securely to it.
       
       - Heavy duty but still lightweight at only 350g per piece`,
      image: 'bedtime-book.jpg',
      price: 120,
      quantity: 2
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
