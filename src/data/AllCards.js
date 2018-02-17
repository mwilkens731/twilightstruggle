import Locations from '../constants/Locations';
import Sides from '../constants/Sides';
import Stages from '../constants/Stages';

const allCards = [
  {
    name: 'Asia Scoring',
    side: Side.SCORE,
    ops: 0,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Europe Scoring',
    side: Side.SCORE,
    ops: 0,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Middle East Scoring',
    side: Side.SCORE,
    ops: 0,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'CIA Created *',
    side: Side.US,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Containment *',
    side: Side.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'East European Unrest',
    side: Side.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Defectors',
    side: Side.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Duck And Cover',
    side: Side.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Five=Year Plan',
    side: Side.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Formosan Resolution *',
    side: Side.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Independent Reds *',
    side: Side.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Marshall Plan *',
    side: Side.US,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'NATO *',
    side: Side.US,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'NORAD *',
    side: Side.US,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Special Relationship',
    side: Side.US,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Truman Doctrine *',
    side: Side.US,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'US/Japan Mutual Defense Pact *',
    side: Side.US,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Arab-Israeli War',
    side: Side.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Blockade *',
    side: Side.USSR,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'The Cambridge Five',
    side: Side.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'COMECON *',
    side: Side.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'De Gaulle Leads France *',
    side: Side.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Decolonization',
    side: Side.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'De-Stalinization *',
    side: Side.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Fidel *',
    side: Side.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Korean War *',
    side: Side.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Nasser *',
    side: Side.USSR,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Romanian Abdication *',
    side: Side.USSR,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Socialist Governments',
    side: Side.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Suez Crisis *',
    side: Side.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Vietnam Revolts *',
    side: Side.USSR,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Warsaw Pact Formed *',
    side: Side.USSR,
    ops: 3,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Captured Nazi Scientist *',
    side: Side.BOTH,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Indo-Pakistani War',
    side: Side.BOTH,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Nuclear Test Ban',
    side: Side.BOTH,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Olympic Games',
    side: Side.BOTH,
    ops: 2,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Red Scare/Purge',
    side: Side.BOTH,
    ops: 4,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'UN Intervention',
    side: Side.BOTH,
    ops: 1,
    location: Locations.IN_DECK,
    stage: Stages.EARLY_WAR
  },
  {
    name: 'Africa Scoring',
    side: Side.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Central America Scoring',
    side: Side.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'South America Scoring',
    side: Side.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Southeast Asia Scoring *',
    side: Side.SCORE,
    ops: 0,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Alliance For Progress *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Ask Not What Your Country Can Do For You... *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Bear Trap *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Camp David Accords *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Colonial Rear Guards',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Grain Sales To Soviets',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'John Paul II Elected Pope *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Kitchen Debates *',
    side: Side.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Nixon Plays the China Card *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Nuclear Subs *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'OAS Founded *',
    side: Side.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Our Man In Tehran *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Panama Canal Returned *',
    side: Side.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Puppet Governments *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Sadat Expels Soviets *',
    side: Side.US,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Shuttle Diplomacy',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Ussuri River Skirmish *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'The Voice of America',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Allende *',
    side: Side.USSR,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Brezhnev Doctrine *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Che',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Cultural Revolution *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Flower Power *',
    side: Side.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Liberation Theology',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Lone Gunman *',
    side: Side.USSR,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Muslim Revolution',
    side: Side.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'OPEC',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Portuguese Empire Crumbles *',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Quagmire *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'South African Unrest',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'U2 Incident *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'We Will Bury You *',
    side: Side.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Willy Brandt *',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'ABM Treaty',
    side: Side.BOTH,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Arms Race',
    side: Side.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Brush War',
    side: Side.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Cuban Missile Crisis *',
    side: Side.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'How I Learned To Stop Worrying *',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Junta',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Latin American Death Squads',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Missile Envy',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'One Small Step...',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'SALT Negotiations *',
    side: Side.BOTH,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'Summit',
    side: Side.BOTH,
    ops: 1,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.MID_WAR
  },
  {
    name: 'AWACS Sale To Saudis *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Chernobyl *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'An Evil Empire *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'The Iron Lady *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'North Sea Oil *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Reagan Bombs Libya *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Solidarity *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Soviets Shoot Down KAL-007 *',
    side: Side.US,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Star Wars *',
    side: Side.US,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Tear Down This Wall *',
    side: Side.US,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Aldrich Ames Remix *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Glasnost *',
    side: Side.USSR,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Iran-Contra Scandal *',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Iranian Hostage Crisis *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Latin American Debt Crisis',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Marine Barracks Bombing *',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Ortega Elected In Nicaragua *',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Pershing II Deployed *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'The Reformer *',
    side: Side.USSR,
    ops: 3,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Yuri and Samantha *',
    side: Side.USSR,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Iran-Iraq War *',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Terrorism',
    side: Side.BOTH,
    ops: 2,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  },
  {
    name: 'Wargames *',
    side: Side.BOTH,
    ops: 4,
    location: Locations.NOT_IN_PLAY,
    stage: Stages.LATE_WAR
  }
];

export default allCards;
