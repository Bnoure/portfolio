const imagesAlts = [
  "At Japan trip – Oct '23",
  "At Japan trip – Nov '23",
  "At Japan trip – Dec '23",
];

export const getAboutImage = () => {
    const index = Math.floor(Math.random() * imagesAlts.length); // Génère un indice de 0 à 2
    const src = `/images/about/${index + 1}.jpeg`; // Ajoute 1 car vos fichiers sont nommés 1.jpeg, 2.jpeg, etc.
    return {
        src: src,
        alt: imagesAlts[index],
        width: 700,
        height: 600
    };
};
