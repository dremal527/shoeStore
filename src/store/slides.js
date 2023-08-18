const slidesModule = {
    namespaced: true,
    state: {
        slideIndex: 0,
        slidesData: {
            'man': [
                {
                    img: require(`@/assets/man_1.png`),
                    title: 'Men’s Shoes',
                    name: 'Nike Jordan- Why-not-6',
                    price: '$160',
                    description: 'Russell Westbrook\'s 6th signature shoe is—you guessed it—all about speed. To get you goin\' as fast as possible, we\'ve wrapped the rubber outsole nearly up to the midsole, so you\'re not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court.',
                },
                {
                    img: require(`@/assets/man_2.png`),
                    title: 'Men’s Shoes',
                    name: 'Nike Jordan- Why-not-10',
                    price: '$230',
                    description: 'Russell Westbrook\'s 6th signature shoe is—you guessed it—all about speed. To get you goin\' as fast as possible, we\'ve wrapped the rubber outsole nearly up to the midsole, so you\'re not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court.',
                },
            ],
            'women': [
                {
                    img: require(`@/assets/women_1.jpeg`),
                    title: 'Women’s Shoes',
                    name: 'adidas Yeezy 450',
                    price: '$202',
                    description: 'The unusual multi—layered design and time-tested technologies are all about the adidas YEEZY 450 sneaker model. The upper is made of soft Primeknit material with a "memory effect" and is complemented by special inserts that form a single structure with the sole. This creates not only a visual concept, but also an additional fixation of the foot. Cushioning provides confidence in every step, and a rubber outsole with treads provides grip on any surface.',
                },
                {
                    img: require(`@/assets/women_2.png`),
                    title: 'Women’s Shoes',
                    name: 'Nike Jordan - 315',
                    price: '$100',
                    description: 'Russell Westbrook\'s 6th signature shoe is—you guessed it—all about speed. To get you goin\' as fast as possible, we\'ve wrapped the rubber outsole nearly up to the midsole, so you\'re not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court.',
                },
            ],
            'kids': [
                {
                    img: require(`@/assets/kids_1.jpeg`),
                    title: 'Kids Shoes',
                    name: 'New Balance 327',
                    price: '$94',
                    description: 'The quality of the product, its safety for life, health of consumers, the environment, is confirmed in accordance with the requirements of the legislation. Detailed information is available on the label or packaging of the product, or in the technical documentation for it.',
                },
            ],
        }
    },
    getters: {
        getSlides(state) {
            return state.slidesData;
        },
        getSlideIndex(state){
            return state.slideIndex;
        }
    },
    mutations: {
        setSlideIndex(state, payload){
            state.slideIndex = payload;
        }
    }
}
export default slidesModule;
