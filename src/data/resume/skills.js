// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MS Powerpoint',
    competency: 5,
    category: ['Office'],
  },
  {
    title: 'MS Word',
    competency: 5,
    category: ['Office'],
  },
  {
    title: 'Tmax SuperOffice',
    competency: 5,
    category: ['Office'],
  },
  {
    title: 'Antenna Array',
    competency: 4,
    category: ['Antenna Engineering', 'Measurement'],
  },
  {
    title: 'Patch Antenna',
    competency: 5,
    category: ['Antenna Engineering', 'Measurement'],
  },
  {
    title: 'Ansys HFSS',
    competency: 4,
    category: ['Antenna Engineering', 'Measurement'],
  },
  {
    title: 'NX 12',
    competency: 2,
    category: ['CAD Design'],
  },
  {
    title: 'Unreal Engine',
    competency: 1,
    category: ['Game Programming'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
