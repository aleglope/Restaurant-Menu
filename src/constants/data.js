import images from './images';

const wines = [
  {
    title: 'Albariño, Rías Baixas',
    price: '€34',
    tags: 'Galicia | Bottle',
  },
  {
    title: 'Godello, Valdeorras',
    price: '€38',
    tags: 'Galicia | Bottle',
  },
  {
    title: 'Mencía, Ribeira Sacra',
    price: '€36',
    tags: 'Galicia | Bottle',
  },
  {
    title: 'Ribera del Duero Crianza',
    price: '€42',
    tags: 'Castilla y León | Bottle',
  },
  {
    title: 'Estrella Galicia 1906',
    price: '€4',
    tags: 'Galicia | 330 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '€12',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '€11',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '€9',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '€13',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '€12',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Michelin Guide, recommended three years running',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Best new restaurant in Galicia, 2020',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Five-star hospitality rating, 2024',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Chef of the year, Galician gastronomy awards',
  },
];

export default { wines, cocktails, awards };
