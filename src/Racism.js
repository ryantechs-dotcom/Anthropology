import './App.css';
import React from 'react';

const RacismPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center bg-gray-100 py-10 border-b-2 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">Harvard's impact on Race through Eugenics</h1>
        <p className="text-lg text-gray-600 mt-4">An exploration of eugenics, cultural anxieties, and the intellectual roots of race science.</p>
      </header>

      {/* Section 1: Introduction */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-10 px-4 lg:px-20">
        <div className="lg:w-2/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Influence of Culture and Politics</h2>
          <p className="text-gray-700">
            Early conceptions of race were deeply influenced by the interplay of culture and politics. 
            During the late 19th and early 20th centuries, racial hierarchies were justified through scientific thought, 
            which led to the codification of these ideas into laws, norms, and academic discourse. The eugenics movement, 
            which was popular during this time, epitomized the manipulation of science to promote ideas of racial purity 
            and superiority.
          </p>
        </div>
        {/* Image Placeholder for Cultural and Political Influence */}
        <div className="lg:w-1/3">
          <img src="https://cms.bps.org.uk/sites/default/files/styles/large/public/2023-06/Eugenic%20Booth%2C%20c.%201930%2C%20The%20Eugenics%20Society.jpg?itok=_2X9HOGY" alt="Cultural Influence" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Section 2: Charles William Eliot's Role */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-10 px-4 lg:px-20 bg-gray-100">
        <div className="lg:w-2/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Charles William Eliot and Harvard's Role in Eugenics</h2>
          <p className="text-gray-700">
            Charles William Eliot, former president of Harvard University, was a central figure in promoting eugenics. 
            In 1912, he warned of the dangers of immigration mixing races and advocated for forced sterilization of 
            those deemed "unfit." His support for racial segregation and control of reproduction was well within 
            the intellectual mainstream at institutions like Harvard.
          </p>
        </div>
        {/* Image Placeholder for Charles William Eliot */}
        <div className="lg:w-1/3">
          <img src="https://www.harvardmagazine.com/sites/default/files/styles/article_hero_1010_568/public/img/article/0216/ma16_page_27_image_0001.jpg?itok=nV7n0gN1" alt="Charles William Eliot" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Section 3: Cultural and Scientific Justifications */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-10 px-4 lg:px-20">
        <div className="lg:w-2/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cultural and Scientific Justifications</h2>
          <p className="text-gray-700">
            During this period, there was a cultural fascination with improving the human race through selective breeding, 
            reflecting anxieties about immigration, industrialization, and urbanization. Eugenics was seen as a way to 
            maintain social order by preventing the "degeneration" of certain racial or ethnic groups.
          </p>
        </div>
        {/* Image Placeholder for Scientific Justifications */}
        <div className="lg:w-1/3">
          <img src="https://www.english-heritage.org.uk/siteassets/home/visit/blue-plaques/themes/eugenics/congress-press-cuttings.jpg?w=1440&mode=none&scale=downscale&quality=60&anchor=&WebsiteVersion=20200219" alt="Scientific Justifications" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Section 4: Harvard's Central Role */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-10 px-4 lg:px-20 bg-gray-100">
        <div className="lg:w-2/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Harvard's Central Role in American Eugenics</h2>
          <p className="text-gray-700">
            Harvard was a hub for the eugenics movement, with faculty and alumni playing key roles in the dissemination of 
            eugenic ideas. From hosting international conferences to writing influential articles, the university's support 
            helped shape policies that reinforced racial hierarchies.
          </p>
        </div>
        {/* Image Placeholder for Harvard's Role */}
        <div className="lg:w-1/3">
          <img src="https://ia903203.us.archive.org/BookReader/BookReaderImages.php?zip=/25/items/HarvardAndTheHolocaust/HarvardAndTheHolocaust_jp2.zip&file=HarvardAndTheHolocaust_jp2/HarvardAndTheHolocaust_0000.jp2&id=HarvardAndTheHolocaust&scale=4&rotate=0" alt="Harvard's Role" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Section 5: Legacy of Eugenics */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-10 px-4 lg:px-20">
        <div className="lg:w-2/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legacy of Eugenics</h2>
          <p className="text-gray-700">
            Although the scientific foundations of eugenics were flawed, the movement left a lasting impact on how race was 
            conceptualized and institutionalized in the 20th century. Understanding this history reminds us that race is 
            a construct shaped by cultural, political, and scientific forces.
          </p>
        </div>
        {/* Image Placeholder for Legacy */}
        <div className="lg:w-1/3">
          <img src="https://wienerholocaustlibrary.org/wp-content/uploads/2021/07/EugenicDemonstration1915-1-1024x819.jpg" alt="Legacy of Eugenics" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-6 bg-gray-100 border-t-2 border-gray-200">
        <p className="text-gray-600">&copy; 2024 Study of the Conception of Race| All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default RacismPage;