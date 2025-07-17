const getRandomParagraph = (works) => {
  const randomWork = works[Math.floor(Math.random() * works.length)];
  const paragraph =
    randomWork.paragraphs[
      Math.floor(Math.random() * randomWork.paragraphs.length)
    ];
  return {
    paragraph,
    title: randomWork.title,
    author: randomWork.author,
    year: randomWork.year,
  };
};

export default getRandomParagraph;
