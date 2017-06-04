
const flowers = [
  {
    "id": 1,
    "name": "Alstroemeria",
    "desc": "Alstroemeria, the Peruvian Lily, is a relative newcomer to the flower industry and very popular for use in bouquets or as a straight bunch. For the best shelf-life, buds should be coloured and just opening and leaves fresh and green. Available in most colours.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "https://s-media-cache-ak0.pinimg.com/originals/28/25/80/2825800e3a0654812b1898029907032a.jpg"
  },
  {
    "id": 2,
    "name": "Anemone",
    "desc": "Anemones are round open flowers and come in striking colours, available in white, blue, mauve, pink, purple and red.",
    "months": "Sep - Nov",
    "availability": [
      "sep",
      "oct",
      "nov"
    ],
    url: "http://cdn.homelife.com.au/images/8614/743945-1_ll-20160909165405~q75,dx2400y-u0r1g0,c--.jpg"
  },
  {
    "id": 3,
    "name": "Asiatic Lily",
    "desc": "Asiatic Lilies are available in a vast range of shades of hot pinks, reds, zesty tangerine tones and dusty pink shades including some stunning bi-colours such as orange and yellow shades.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1487279525-a934c44e42febead2/Lilium%20Rosella%20s%20Dream.jpg"
  },
  {
    "id": 4,
    "name": "Bouvardia",
    "desc": "Some random plant",
    "months": "Dec - Feb",
    "availability": [
      "dec",
      "jan",
      "feb"
    ],
    url: "http://www.bunchesdirect.com.au/components/com_virtuemart/shop_image/product/Bouvardia_White__51b2d20fbaa92.jpg"
  },
  {
    "id": 5,
    "name": "Bud Wax",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Apr - Sep",
    "availability": [
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep"
    ],
    url: "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/3714/Bridal%20Pearl.jpg"
  },
  {
    "id": 6,
    "name": "Calla Lily",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Oct - Jan",
    "availability": [
      "oct",
      "nov",
      "dec",
      "jan"
    ],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoPFtvWw_rQ6mAWpg7Li-kQS_QSJfxh3rtZWAQNYhBpz4Cs-u7Q"
  },
  {
    "id": 7,
    "name": "Carnation",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "https://www.hoselink.com.au/assets/images/Carnation.jpg"
  },
  {
    "id": 8,
    "name": "Celosia (Cockscomb)",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Dec - Feb",
    "availability": [
      "dec",
      "jan",
      "feb"
    ],
    url: "http://image.dhgate.com/0x0/f2/albu/g5/M01/92/E8/rBVaJFiqixWAZiMiAADIS4tBpPU207.jpg"
  },
  {
    "id": 9,
    "name": "Daffodil",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jun - Aug",
    "availability": [
      "jun",
      "jul",
      "aug"
    ],
    url: "https://www.floristwithflowers.com.au/blog/wp-content/uploads/2017/05/1-1024x682.jpg"
  },
  {
    "id": 10,
    "name": "Dahlia",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Dec - Mar",
    "availability": [
      "dec",
      "jan",
      "feb",
      "mar"
    ],
    url: "http://cdn.homelife.com.au/images/42729/1086799-1_ll-20151222151238~q75,dx800y-u1r1g0,c--.jpg"
  },
  {
    "id": 11,
    "name": "Daisy",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://www.gardenclinic.com.au/images/how-to-grow/shasta-diasy_Vahan-Abrahamyan-shutterstock_websize.jpg"
  },
  {
    "id": 12,
    "name": "David Austin",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Nov - Jan",
    "availability": [
      "nov",
      "dec",
      "jan"
    ],
    url: "http://flowerona.com/wp-content/uploads/2011/12/David-Austin-Roses-The-Generous-Gardener.jpg"
  },
  {
    "id": 13,
    "name": "Delphinium",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "https://www.hoselink.com.au/assets/images/Delphinium-Centurion-Sky-Blue-(Centurion-Series).jpg"
  },
  {
    "id": 14,
    "name": "Erlicheer Jonquil",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jun - Sep",
    "availability": [
      "jun",
      "jul",
      "aug",
      "sep"
    ],
    url: "https://farm9.static.flickr.com/8711/28587480502_c58f233139_b.jpg"
  },
  {
    "id": 15,
    "name": "Frangipani",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Sep - Feb",
    "availability": [
      "sep",
      "oct",
      "nov",
      "dec",
      "jan",
      "feb"
    ],
    url: "http://www.handyman.net.au/sites/default/files/articles/g-flowers-and-plants-frangipanis-nov13-p118-MAIN.jpg"
  },
  {
    "id": 16,
    "name": "Freesia",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Aug - Sep",
    "availability": [
      "aug",
      "sep"
    ],
    url: "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/9040/Freesia%20Double%20Pink%20Honeymoon.jpg"
  },
  {
    "id": 17,
    "name": "Gardenia",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jan - Feb",
    "availability": [
      "jan",
      "feb"
    ],
    url: "http://cdn.homelife.com.au/images/43880/gardenia-20160105100643~q75,dx800y-u1r1g0,c--.jpg"
  },
  {
    "id": 18,
    "name": "Achillea",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jan - Jun",
    "availability": [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun"
    ],
    url: "http://i.dailymail.co.uk/i/pix/2008/08/25/article-1049014-024385A800000578-790_468x286.jpg"
  },
  {
    "id": 19,
    "name": "Geraldton Waxflower",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jun - Nov",
    "availability": [
      "jun",
      "jul",
      "aug",
      "sep",
      "nov"
    ],
    url: "http://www.australiaplants.com/Chamelaucium_uncinatum.jpg"
  },
  {
    "id": 20,
    "name": "Gerbera",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://www.burkesbackyard.com.au/wp-content/uploads/2013/09/Gerberas.jpg"
  },
  {
    "id": 21,
    "name": "Babies Breath (Gypsophlia)",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Aug - Apr",
    "availability": [
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
      "jan",
      "feb",
      "mar",
      "apr"
    ],
    url: "http://www.flowersdelivered.com.au/wp/wp-content/uploads/2015/10/flowerduet-babysbreath-closeup.jpg"
  },
  {
    "id": 22,
    "name": "Hyacinth",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jun - Sep",
    "availability": [
      "jun",
      "jul",
      "aug",
      "sep"
    ],
    url: "https://www.floristwithflowers.com.au/blog/wp-content/uploads/2015/06/Nature___Flowers_Hyacinth_flowers_at_home_065854_29.jpg"
  },
  {
    "id": 23,
    "name": "Hydrangea",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Dec - Feb",
    "availability": [
      "dec",
      "jan",
      "feb"
    ],
    url: "http://www.burkesbackyard.com.au/wp-content/uploads/2013/09/Mai-Ko-Hydrangeas.jpg"
  },
  {
    "id": 24,
    "name": "Iris",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "May - Oct",
    "availability": [
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct"
    ],
    url: "http://www.flowermeaning.com/flower-pics/Iris-Meaning.jpg"
  },
  {
    "id": 25,
    "name": "Jasmine",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Dec - Feb",
    "availability": [
      "dec",
      "jan",
      "feb"
    ],
    url: "https://s-media-cache-ak0.pinimg.com/736x/ed/79/9d/ed799df11912320a35ae0f79b574b643.jpg"
  },
  {
    "id": 26,
    "name": "Lavender",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Oct - Jan",
    "availability": [
      "oct",
      "nov",
      "jan"
    ],
    url: "http://www.handyman.net.au/sites/default/files/g-flowers-lavender-main_0.jpg"
  },
  {
    "id": 27,
    "name": "Lily of the Valley",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Oct",
    "availability": [
      "oct"
    ],
    url: "https://ak6.picdn.net/shutterstock/videos/3411968/thumb/1.jpg?i10c=img.resize(height:160)"
  },
  {
    "id": 28,
    "name": "Lisianthus",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Dec - Mar",
    "availability": [
      "dec",
      "jan",
      "feb",
      "mar"
    ],
    url: "http://www.beabeeinc.com/wp-content/uploads/2015/09/lisianthus-flowers.jpg"
  },
  {
    "id": 29,
    "name": "Oriental Lilium",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://www.whiteflowerfarm.com/mas_assets/cache/image/b/6/a/2922.Jpg"
  },
  {
    "id": 30,
    "name": "Peony",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Oct - Nov",
    "availability": [
      "oct",
      "nov"
    ],
    url: "http://awhitecarousel.com/wp-content/uploads/2010/12/peony1558.jpg"
  },
  {
    "id": 31,
    "name": "Poppy",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Apr - Aug",
    "availability": [
      "apr",
      "may",
      "jun",
      "jul",
      "aug"
    ],
    url: "http://www.flowermeaning.com/flower-pics/Poppy-Meaning.jpg"
  },
  {
    "id": 32,
    "name": "Rose",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/684/684201-bigthumbnail.jpg"
  },
  {
    "id": 33,
    "name": "Singapore Orchid",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://mithunonthe.net/wp-content/uploads/2012/01/orchid-flower-singapore-botanic-garden.jpg"
  },
  {
    "id": 34,
    "name": "Snapdragon",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Sep",
    "availability": [
      "sep"
    ],
    url: "http://www.flowermeaning.com/flower-pics/Snapdragon-1.jpg"
  },
  {
    "id": 35,
    "name": "Spray Carnation",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://i.telegraph.co.uk/multimedia/archive/01456/carnation_1456816c.jpg"
  },
  {
    "id": 36,
    "name": "Statice",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Sep - Feb",
    "availability": [
      "sep",
      "oct",
      "nov",
      "dec",
      "jan",
      "feb"
    ],
    url: "https://fthmb.tqn.com/orarAosW0zgD6OmJ2cGEsM6bCKw=/960x0/filters:no_upscale()/about/Statice-flowers-486968641-resized-56a300c03df78cf7727b794e.jpg"
  },
  {
    "id": 37,
    "name": "Stock",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "May - Oct",
    "availability": [
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct"
    ],
    url: "http://www.flowerpictures.net/flower_database/addition-2011/600pixels/stock-flower.jpg"
  },
  {
    "id": 38,
    "name": "Sunflower",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Sep - Feb",
    "availability": [
      "sep",
      "oct",
      "nov",
      "dec",
      "jan",
      "feb"
    ],
    url: "https://media1.britannica.com/eb-media/84/73184-004-E5A450B5.jpg"
  },
  {
    "id": 39,
    "name": "Sweet Pea",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "May - Sep",
    "availability": [
      "may",
      "jun",
      "jul",
      "aug",
      "sep"
    ],
    url: "http://3.bp.blogspot.com/-uswhvMQ8nXY/T9nNvHoUnnI/AAAAAAAAJiQ/ZcRetMUwd3o/s1600/bud_drop1.jpg"
  },
  {
    "id": 40,
    "name": "Tulip",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Apr - Oct",
    "availability": [
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct"
    ],
    url: "http://images.all-free-download.com/images/graphiclarge/red_tulip_flowers_189960.jpg"
  },
  {
    "id": 41,
    "name": "Violet",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Mar - Aug",
    "availability": [
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug"
    ],
    url: "http://absfreepic.com/absolutely_free_photos/small_photos/beautiful-violet-flowers-5456x3632_91795.jpg"
  },
  {
    "id": 42,
    "name": "Protea",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Sep - Mar",
    "availability": [
      "sep",
      "oct",
      "nov",
      "dec",
      "jan",
      "feb",
      "mar"
    ],
    url: "http://www.proteaflora.com.au/images/plants/specialpinkice2.jpg"
  },
  {
    "id": 43,
    "name": "King Protea",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Sep - Mar",
    "availability": [
      "sep",
      "oct",
      "nov",
      "dec",
      "jan",
      "feb",
      "mar"
    ],
    url: "http://www.proteaflora.com.au/images/plants/kingpink3.jpg"
  },
  {
    "id": 44,
    "name": "Christmas Bush",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Nov - Dec",
    "availability": [
      "nov",
      "dec"
    ],
    url: "https://static1.squarespace.com/static/5414f5e5e4b002912c7c34e5/t/5668d5b11115e015efb8c45b/1449711552235/Christmas+Bush.jpg"
  },
  {
    "id": 45,
    "name": "Banksia",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Jan - June",
    "availability": [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun"
    ],
    url: "http://gb.fotolibra.com/images/previews/74815-red-banksia-flower-wa-australia.jpeg"
  },
  {
    "id": 46,
    "name": "Red Gum",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "Nov - Feb",
    "availability": [
      "nov",
      "dec",
      "jan",
      "dec"
    ],
    url: "http://www.burkesbackyard.com.au/wp-content/uploads/2013/09/Red-flowering-Gums.jpg"
  },
  {
    "id": 47,
    "name": "Kangaroo Paw",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://www.dirtgirls.com.au/wp-content/uploads/sites/2/2016/04/kangaroo-paw.jpg"
  },
  {
    "id": 48,
    "name": "Yellow Buttons",
    "desc": "Calla Lilies are extremely popular with style gurus for their sculptural elegant shape.The most popular colour shades are the vibrant canary yellow and the tangerine orange tones.",
    "months": "All year",
    "availability": [
      "year"
    ],
    url: "http://www.bgpa.wa.gov.au/images/horticulture/images/plant_of_the_month/chrysocephalum_apiculatum_flowers_d_blumer.jpg"
  }

]

export default flowers;
