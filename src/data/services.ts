export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  schedule: {
    title: string;
    hours: string;
  };
}

export const services: Service[] = [
  {
    id: 'eye-exam',
    title: 'Szemvizsgálat',
    description: 'Rendelőnkben tapasztalt szakorvos és diplomás optometrista végez teljes körű szemvizsgálatot precíz eszközökkel.',
    imageUrl: '/images/webp/szemvizsgalat.webp',
    imageAlt: 'Szemvizsgálat',
    features: [
      'Szemnyomás mérés',
      'Szürkehályog szűrés',
      'Diabetikus szemvizsgálat'
    ],
    schedule: {
      title: 'Időpontfoglalás szükséges',
      hours: 'Szerda 15-18 óráig'
    }
  },
  {
    id: 'contactology',
    title: 'Kontaktológia',
    description: 'Professzionális kontaktlencse beállítás és tanácsadás tapasztalt optometristáink segítségével.',
    imageUrl: '/images/webp/kontaktlencse.webp',
    imageAlt: 'Kontaktlencse beállítás',
    features: [
      'Ingyenes próbahordás',
      'Kontaktlencse tanácsadás',
      'Rendszeres ellenőrzések'
    ],
    schedule: {
      title: 'Időpontfoglalás szükséges',
      hours: 'Kedd, csütörtök 10-18 óráig, Szerda 10-14 óráig'
    }
  },
  {
    id: 'pediatrics',
    title: 'Gyermekszemészet',
    description: 'Különleges figyelmet fordítunk a gyermekek szemügyi egészségére, gyermekbarát környezetben.',
    imageUrl: '/images/webp/child.webp',
    imageAlt: 'Gyermekszemészet',
    features: [
      'Gyermekbarát vizsgálat',
      'Korai látászavarok felismerése',
      'Játékos vizsgálati módszerek'
    ],
    schedule: {
      title: 'Időpontfoglalás szükséges',
      hours: 'Szerda 15-18 óráig'
    }
  },
  {
    id: 'lens-grinding',
    title: 'Becsiszolás',
    description: 'Modern technológiával és nagy precizitással készítjük el szemüveglencséit saját műhelyünkben.',
    imageUrl: '/images/webp/machine.webp',
    imageAlt: 'Becsiszolás',
    features: [
      'Digitális csiszolás',
      'Nagy pontosságú centrálás',
      'Gyors kivitelezés'
    ],
    schedule: {
      title: 'Hétfőtől péntekig',
      hours: 'Rendelési időben'
    }
  }
];
