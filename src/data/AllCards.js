import Locations from '../constants/Locations';
import Sides from '../constants/Sides';
import Stages from '../constants/Stages';

const allCards = [
  {
    name: 'Asia Scoring',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Europe Scoring',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Middle East Scoring',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'CIA Created *',
    side: Sides.US,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Containment *',
    side: Sides.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'East European Unrest',
    side: Sides.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Defectors',
    side: Sides.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Duck And Cover',
    side: Sides.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Five=Year Plan',
    side: Sides.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Formosan Resolution *',
    side: Sides.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Independent Reds *',
    side: Sides.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Marshall Plan *',
    side: Sides.US,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'NATO *',
    side: Sides.US,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'NORAD *',
    side: Sides.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Special Relationship',
    side: Sides.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Truman Doctrine *',
    side: Sides.US,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'US/Japan Mutual Defense Pact *',
    side: Sides.US,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Arab-Israeli War',
    side: Sides.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Blockade *',
    side: Sides.USSR,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'The Cambridge Five',
    side: Sides.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'COMECON *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'De Gaulle Leads France *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Decolonization',
    side: Sides.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'De-Stalinization *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Fidel *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Korean War *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Nasser *',
    side: Sides.USSR,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Romanian Abdication *',
    side: Sides.USSR,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Socialist Governments',
    side: Sides.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Suez Crisis *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Vietnam Revolts *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Warsaw Pact Formed *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Captured Nazi Scientist *',
    side: Sides.BOTH,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Indo-Pakistani War',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Nuclear Test Ban',
    side: Sides.BOTH,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Olympic Games',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Red Scare/Purge',
    side: Sides.BOTH,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'UN Intervention',
    side: Sides.BOTH,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Africa Scoring',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Central America Scoring',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'South America Scoring',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Southeast Asia Scoring *',
    side: Sides.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Alliance For Progress *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Ask Not What Your Country Can Do For You... *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Bear Trap *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Camp David Accords *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Colonial Rear Guards',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Grain Sales To Soviets',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'John Paul II Elected Pope *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Kitchen Debates *',
    side: Sides.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Nixon Plays the China Card *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Nuclear Subs *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'OAS Founded *',
    side: Sides.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Our Man In Tehran *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Panama Canal Returned *',
    side: Sides.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Puppet Governments *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Sadat Expels Soviets *',
    side: Sides.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Shuttle Diplomacy',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Ussuri River Skirmish *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'The Voice of America',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Allende *',
    side: Sides.USSR,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Brezhnev Doctrine *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Che',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Cultural Revolution *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Flower Power *',
    side: Sides.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Liberation Theology',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Lone Gunman *',
    side: Sides.USSR,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Muslim Revolution',
    side: Sides.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'OPEC',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Portuguese Empire Crumbles *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Quagmire *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'South African Unrest',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'U2 Incident *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'We Will Bury You *',
    side: Sides.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Willy Brandt *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'ABM Treaty',
    side: Sides.BOTH,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Arms Race',
    side: Sides.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Brush War',
    side: Sides.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Cuban Missile Crisis *',
    side: Sides.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'How I Learned To Stop Worrying *',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Junta',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Latin American Death Squads',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Missile Envy',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'One Small Step...',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'SALT Negotiations *',
    side: Sides.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Summit',
    side: Sides.BOTH,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'AWACS Sale To Saudis *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Chernobyl *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'An Evil Empire *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'The Iron Lady *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'North Sea Oil *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Reagan Bombs Libya *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Solidarity *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Soviets Shoot Down KAL-007 *',
    side: Sides.US,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Star Wars *',
    side: Sides.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Tear Down This Wall *',
    side: Sides.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Aldrich Ames Remix *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Glasnost *',
    side: Sides.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Iran-Contra Scandal *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Iranian Hostage Crisis *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Latin American Debt Crisis',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Marine Barracks Bombing *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Ortega Elected In Nicaragua *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Pershing II Deployed *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'The Reformer *',
    side: Sides.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Yuri and Samantha *',
    side: Sides.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Iran-Iraq War *',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Terrorism',
    side: Sides.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Wargames *',
    side: Sides.BOTH,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  }
];

export default allCards;
