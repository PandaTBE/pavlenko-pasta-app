import { dishTypes } from '@/entities/dish';

export const DISHES_MOCK: dishTypes.Dish[] = [
    {
        id: 1,
        name: 'Маргарита',
        description:
            'Классическая пицца с моцареллой, базиликом и томатным соусом.',
        price: 450.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D6105EF6690B86FBDE6150B5B0C.avif',
    },
    {
        id: 2,
        name: 'Пепперони',
        description:
            'Хрустящие ломтики пепперони на подушке из моцареллы и томатного соуса.',
        price: 500.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
    },
    {
        id: 3,
        name: 'Вегетарианская',
        description:
            'Пицца с овощами: сладкий перец, лук, шампиньоны и оливки.',
        price: 550.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D6175C10773BFE36E56D48DF7E3.avif',
    },
    {
        id: 4,
        name: 'Барбекю с курицей',
        description:
            'Курица на гриле, дымный соус барбекю и красный лук на хрустящей основе.',
        price: 600.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
    },
    {
        id: 5,
        name: 'Четыре сыра',
        description: 'Шедевр из моцареллы, чеддера, горгонзолы и пармезана.',
        price: 650.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
    },
    {
        id: 6,
        name: 'Гавайская',
        description:
            'Экзотическое сочетание ветчины, ананаса и расплавленной моцареллы.',
        price: 550.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
    },
    {
        id: 7,
        name: 'Мясная',
        description:
            'Ломтики пепперони, колбаски, ветчина и бекон для истинных любителей мяса.',
        price: 700.0,
        serving_size: 1,
        img: 'https://media.dodostatic.net/image/r:366x366/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
    },
];
