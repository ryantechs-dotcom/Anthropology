// Carousel.js
import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample images or content for the carousel
  const items = [
    {
      id: 1,
      image: 'https://www.genome.gov/sites/default/files/eugenics-timeline/1883.jpg',
      caption: "Sir Francis Galton, a 19th-century British scientist and cousin of Charles Darwin, is widely regarded as the father of eugenics. Galton's work focused on applying the principles of heredity to human populations, which he believed could improve society through selective breeding. His ideas on 'racial improvement' laid the foundation for pseudo-scientific theories that falsely categorized people based on racial traits. Eugenics, as promoted by Galton, sought to classify races and justify inequalities under the guise of science, influencing not only British society but also the rise of eugenics in the United States, shaping early conceptions of race and social policy.",
    },
    {
      id: 2,
      image: 'https://cdn.britannica.com/70/226870-004-AC651C99.jpg',
      caption: "This poster highlights the historical and ongoing resistance to forced sterilization, a practice rooted in the eugenics movement. Eugenics was presented as a scientific solution to societal problems by selectively breeding 'desirable' traits and preventing the reproduction of 'undesirable' traits. Marginalized groups—particularly racial minorities, the disabled, and the poor—were disproportionately targeted for sterilization, based on pseudo-scientific beliefs that sought to control population quality. This image underscores the dark intersection of race, science, and human rights violations under the guise of public health and social progress.",
    },
    {
      id: 3,
      image: 'https://www.mdpi.com/genealogy/genealogy-02-00021/article_deploy/html/images/genealogy-02-00021-g002-550.jpg',
      caption: 'This pedigree chart exemplifies the early 20th-century eugenics movement, which sought to apply principles of heredity to promote the reproduction of individuals deemed "desirable" while discouraging those considered "undesirable." Rooted in pseudoscientific beliefs, eugenics misused genetic concepts to reinforce racial hierarchies, suggesting that certain races possessed inherent traits of superiority or inferiority. This chart not only reflects the troubling intersection of genetics and social ideology but also highlights how early concepts of race were scientifically manipulated to justify discrimination and social policies aimed at controlling population dynamics. The legacy of these practices continues to impact discussions on race, genetics, and ethics today.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="border-[#193366] border-4 rounded-lg relative w-full max-w-2xl mx-auto overflow-hidden mb[-40px] bg-white h-[400px]">
      {/* Carousel items */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="min-w-full">
            <img src={item.image} alt={item.caption} className=" mt-2 ml-[140px] w-[400px] h-[200px]  ml-8 " />
            <div className="p-4 text-center"> 
              <h4 className="text-[14px] font-semibold">{item.caption}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
//     <div className="relative w-full max-w-2xl mx-auto overflow-hidden mt-10 mb-[40px] bg-white rounded-lg shadow-lg">
//   {/* Carousel items */}
//   <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//     {items.map((item) => (
//       <div key={item.id} className="min-w-full flex flex-col items-center">
//         <img src={item.image} alt={item.caption} className="w-full h-96 object-cover rounded-lg" />
//         <div className="p-4 text-center">
//           <h2 className="text-xl font-semibold text-gray-800">{item.caption}</h2>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Previous and Next buttons */}
//   <button
//     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 shadow-lg"
//     onClick={prevSlide}
//   >
//     Prev
//   </button>
//   <button
//     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 shadow-lg"
//     onClick={nextSlide}
//   >
//     Next
//   </button>
// </div>

  );
};

export default Carousel;
