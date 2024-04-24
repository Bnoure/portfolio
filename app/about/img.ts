const imagesAlts = [
  "At Japan trip – Oct '23",
  "At Japan trip – Nov '23",
  "At Japan trip – Dec '23",
];

export const getAboutImage = () => {
    const index = Math.floor(Math.random() * imagesAlts.length);
    const src = `/images/about/${index + 1}.jpeg`;
    return {
        src: src,
        alt: imagesAlts[index],
        width: 700,
        height: 600
    };
};
