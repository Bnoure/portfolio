
const imagesAlts = [
  "At Japan – Mar '23",
  "At Japan trip – Oct '23",
];

export const getAboutImage = () => {
    const index = Math.floor(Math.random() * imagesAlts.length);
    const src = `/images/about/${index}.jpeg`;
    return {
        src: src,
        alt: imagesAlts[index],
        width: 800,
        height: 600
    };
};
