// Why Choose Us section data
export const whyChooseUsFeatures = [
  {
    id: 'experience',
    icon: 'circle-check', // SVG icon name
    title: '25+ év tapasztalat',
    description: 'Több mint 25 éves szakmai tapasztalat és folyamatos fejlődés az optika területén'
  },
  {
    id: 'medical-exam',
    icon: 'stethoscope', // SVG icon name
    title: 'Szakorvosi vizsgálat',
    description: 'Szemész szakorvos által végzett alapos szemvizsgálat, naprakész eszközökkel'
  },
  {
    id: 'personalized',
    icon: 'eye', // SVG icon name
    title: 'Személyre szabott',
    description: 'Egyedi igényekhez alkalmazkodó megoldások és személyes tanácsadás'
  },
  {
    id: 'affordable',
    icon: 'discount-check', // SVG icon name
    title: 'Kedvező árak',
    description: 'Versenyképes árak, rendszeres akciók és egészségpénztári elszámolás'
  }
];

// Testimonials section data - from Google reviews
export const testimonials = [
  {
    id: 1,
    name: 'Ervin Berta',
    initials: 'EB',
    rating: 5,
    text: '"Nagyon kedves kiszolgálásban részesültem teljes információt kaptam mindenről a szemüvegkeret kiválasztásában is 100%-os segítséget kaptam én nagyon meg vagyok elégedve a hölgy kedvességével és tudásával amit kaptam"',
    imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVElnri6wssJkU3KkRmM_o5aTB_mAdPLbyaCqwUE9SjvEu_pps=s64-c-rp-mo-br100',
    useImage: true
  },
  {
    id: 2,
    name: 'Dora Solti',
    initials: 'DS',
    rating: 5,
    text: '"Nagyon meg vagyok elégedve ezzel az optikával, visszajáró vendég vagyok. Eredetileg az ott rendelő szuper doktornő miatt választottam őket."',
    useImage: false
  },
  {
    id: 3,
    name: 'Aysa Dormaeva',
    initials: 'AD',
    rating: 5,
    text: '"Első kontaklencse vizsgàlaton voltam ma, kicsit féltem tőle, de nagyon pozitív tapasztalattal tàvozok. Huszàr Katalin optometristàt csak ajànlani tudom azoknak, akik kontaklencsét szeretnének, szakmailag nagyon ért dolgàhoz, nagyon kedves volt és humoros."',
    imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjX0cX3mOPY4Nvs9EGRa_WqM0S_3TyKLq7QZDqxbsum-Ui0oOnm_=s64-c-rp-mo-br100',
    useImage: true
  }
];

// Section titles and descriptions
export const sectionContent = {
  services: {
    title: 'Szolgáltatásaink',
    description: 'Fedezze fel átfogó optikai szolgáltatásainkat, amelyeket szakértő csapatunk nyújt'
  },
  whyChooseUs: {
    title: 'Miért minket válasszon?',
    description: 'Az Arató Optika elkötelezett a kiváló minőség, szakértelem és ügyfélközpontú szolgáltatás mellett'
  },
  testimonials: {
    title: 'Ügyfeleink véleménye',
    description: 'Ismerje meg, mit gondolnak rólunk elégedett ügyfeleink'
  },
  featuredProducts: {
    title: 'Népszerű termékeink',
    description: 'Fedezze fel legújabb és legnépszerűbb szemüvegkereteinket és napszemüvegeinket',
    viewAllText: 'Összes termék megtekintése',
    viewAllUrl: '/products'
  }
};
