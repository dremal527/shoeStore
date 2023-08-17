const slidesModule = {
    namespaced: true,
    state: {
        slideIndex: 0,
        maxSlideIndex: 2,
        slidesData: [
            {
                img: require(`@/assets/shoe_1.png`),
                title: 'Men’s Shoes',
                name: 'Nike Jordan- Why-not-6',
                price: '$160',
                description: 'Russell Westbrook\'s 6th signature shoe is—you guessed it—all about speed. To get you goin\' as fast as possible, we\'ve wrapped the rubber outsole nearly up to the midsole, so you\'re not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court.',
            },
            {
                img: require(`@/assets/shoe_2.png`),
                title: 'Men’s Shoes',
                name: 'Nike Jordan- Why-not-10',
                price: '$230',
                description: 'Russell Westbrook\'s 6th signature shoe is—you guessed it—all about speed. To get you goin\' as fast as possible, we\'ve wrapped the rubber outsole nearly up to the midsole, so you\'re not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court.',
            },
            {
                img: require(`@/assets/shoe_3.png`),
                title: 'Men’s Shoes',
                name: 'Nike Jordan - 315',
                price: '$100',
                description: 'Russell Westbrook\'s 6th signature shoe is—you guessed it—all about speed. To get you goin\' as fast as possible, we\'ve wrapped the rubber outsole nearly up to the midsole, so you\'re not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court.',
            },
        ]
    },
    getters: {
        getSlides(state) {
            return state.slidesData;
        },
        getSlideIndex(state){
            return state.slideIndex;
        },
        getMaxSlideIndex(state){
            return state.maxSlideIndex;
        }
    },
    mutations: {
        setSlideIndex(state, payload){
            state.slideIndex = payload;
        }
    }
}
export default slidesModule;
