export const PARKS = [
  {
    id: 0,
    name: 'Magic Kingdom',
    image: require('../components/images/magickingdom.jpeg'),
    description:
      'Magic Kingdom is divided into six themed "lands." It is designed like a wheel, with the hub in front of Cinderella Castle. Pathways spoke out from the hub across the 107 acres of the park and lead to these six lands.',
    history:
      'The park opened on October 1, 1971, as the first of four theme parks at the resort.',
    rides: [
      {
        id: '1',
        rideName: 'Big Thunder Mountain Railroad',
        rideImage: require('../components/images/bigthunder.jpeg'),
      },
      {
        id: '2',
        rideName: 'Haunted Mansion',
        rideImage: require('../components/images/haunted.jpeg'),
      },
      {
        id: '3',
        rideName: 'Seven Dwarfs Mine Train',
        rideImage: require('../components/images/dwarfs.jpeg'),
      },
    ],
  },
  {
    id: 1,
    name: 'Animal Kingdom',
    image: require('../components/images/animalkingdom.jpeg'),
    description:
      'Disneys Animal Kingdom is distinguished from the rest of Walt Disney Worlds theme parks in that it features traditional attractions while also exhibiting hundreds of species of live animals.',
    history:
      'The park opened on Earth Day, April 22, 1998, and was the fourth theme park built at the resort.',
    rides: [
      {
        id: '4',
        rideName: 'Avatar Flight of Passage',
        rideImage: require('../components/images/avatar.jpeg'),
      },
      {
        id: '5',
        rideName: 'Expedition Everest',
        rideImage: require('../components/images/everest.jpeg'),
      },
      {
        id: '6',
        rideName: 'Kilimanjaro Safaris',
        rideImage: require('../components/images/safari.jpeg'),
      },
    ],
  },
  {
    id: 2,
    name: 'Epcot',
    image: require('../components/images/epcot.jpeg'),
    description:
      'The parks name, Epcot, was previously an acronym for Experimental Prototype Community of Tomorrow, a utopian city of the future planned by Walt Disney, often interchanging city and community.',
    history:
      'The park opened on October 1, 1982, as EPCOT Center, and was the second of four theme parks built at Walt Disney World, after the Magic Kingdom.',
    rides: [
      {
        id: '7',
        rideName: 'Frozen Ever After',
        rideImage: require('../components/images/frozen.jpeg'),
      },
      {
        id: '8',
        rideName: 'Mission: SPACE',
        rideImage: require('../components/images/mission.jpeg'),
      },
      {
        id: '9',
        rideName: 'Soarin Around the World',
        rideImage: require('../components/images/soarin.jpeg'),
      },
    ],
  },
  {
    id: 3,
    name: 'Hollywood Studios',
    image: require('../components/images/hollywoodstudios.jpeg'),
    description:
      'Disneys Hollywood Studios is divided into seven themed areas inspired by fantasized iterations of either existing locations found in Hollywood and Los Angeles or imagined worlds from Hollywood stories. ',
    history:
      'The park opened on May 1, 1989, as the Disney-MGM Studios (Theme) Park, and was the third of four theme parks built at Walt Disney World.',
    rides: [
      {
        id: '10',
        rideName: 'Hollywood Tower of Terror',
        rideImage: require('../components/images/towerofterror.jpeg'),
      },
      {
        id: '11',
        rideName: 'Slinky Dog Dash',
        rideImage: require('../components/images/slinky.jpeg'),
      },
      {
        id: '12',
        rideName: 'Rock n Rollar Coaster',
        rideImage: require('../components/images/rollarcoaster.jpeg'),
      },
    ],
  },
];
