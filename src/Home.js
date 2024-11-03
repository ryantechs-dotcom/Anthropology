import Carousel from "./Carousel";

function Home() {
  return (
    <div className="Home">
      <div className="p-4 bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTA1NzQwNC1pbWFnZS1qb2I2MzAtYV8xLmpwZw.jpg')]">
      <Carousel/>
      </div>
         
      <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">How Culture and Politics Shaped The Early Conception of Race</h1>
          <p className="text-lg text-gray-600">Exploring the harmful legacy of scientific classification and its impact on racial ideologies.</p>
        </div>

        {/* Section 1 - Introduction */}
        <section className="bg-white shadow-md p-8 rounded-lg items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          The concept of race has invariably been linked with scientific practice, 
          primarily in the late 19th and early 20th century when eugenics became one of the 
          reigning doctrines of the time. 
          Within this was Harry H. Laughlin, superintendent of the ERO-Cold Spring Harbor, New York, 
          who championed the belief in the betterment of human stock by selective breeding. 
          His lectures and statistical testimony helped frame the course of landmark legislation, 
          including the Johnson-Reed Immigration Act of 1924, reflecting his interest in the 
          biological grounding of race.
          </p>
          {/* Image Placeholder */}
          <div className="mt-6">
            <img src="https://understandingrace.org/wp-content/uploads/2022/01/Anthropometry.jpg" alt="Neanderthal Imagery" className="w-[800px] h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Section 2 - Carl Linnaeus and Scientific Racism */}
        <section className="bg-white shadow-md p-8 rounded-lg items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Carl Linnaeus and the Origins of Scientific Racism</h2>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          One figure in this story is Carl Linnaeus, often regarded as the "Father of Taxonomy." 
          His formulation of binomial nomenclature-a standardized way of naming and categorizing 
          living things-radically changed the way people thought about and structured nature. 
          Though Linnaeus is celebrated for establishing an organized system whereby to think about the natural 
          world, his system of classification also reflected and perpetuated harmful concepts about diversity and 
          human supremacy.
          </p>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          Linnaeus was a creature of his time, particularly the intellectual currents of the Great Chain of 
          Being-a hierarchical structure that placed humans at the pinnacle of creation, followed by animals, 
          plants, and inanimate matter. He was a product of religious teachings that allowed him to view nature 
          as an entity completely separate from humans and, in turn, support a hierarchy within species with 
          perceived intelligence and capability. In his seminal work Systema Naturae, Linnaeus classified humans 
          as part of the broader animal kingdom in 1735, creating the class "Anthropomorpha," which he then 
          divided into genera that included Homo for humans and Simia for apes. While groundbreaking, his 
          classification simultaneously encouraged a narrative that justified racial hierarchies.
          </p>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          However, the consequences of Linnaeus' work would reach much further than taxonomy; his views were 
          born from and contributed to a larger discourse that sought to make categories of human population through 
          physical traits. His classifications and descriptions often indicated differences that he considered 
          significant, but rather from a Eurocentric perspective, in which Europeans were the norms against which 
          everybody else was compared to as "other." Such essentialist findings opened the way for illegitimate 
          biological concepts applying to justify the social stratification and finally culminated in scientific 
          racism-a pseudoscientific belief system in which racial differences are held to be biologically determined 
          and inherently linked to intellectual and moral propensities.
          </p>
          {/* Image Placeholder */}
          <div className="mt-6">
            <img src="https://www.sapiens.org/app/uploads/2021/03/04_Eugenics_Society_Poster_compressed.jpg" alt="Carl Linnaeus" className="w-[800px] h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Section 3 - Neanderthals and Misrepresentation */}
        <section className="bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Charles Davenport Perpetuating Scientific Racism</h2>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          Perhaps most representative of scientific racism during this period is the work of Charles Davenport, a leading figure in the early-20th-century eugenics movement. 
          The early work of Davenport demonstrates that he was arguably preoccupied with racial differences-particularly between Black and white-and perpetuated mainstream social 
          prejudices of the time within his work. An undated address, likely from the 1920s, entitled "A Biologist's View of the Negro Problem," captures his sentiments best. 
          In this speech, he wanted to apply the principles of eugenics on the supposed racial differences-the segregation of Black people as a so-called humanitarian act on society. 
          Davenport spoke with discontent about the reliance on "feebleminded" workers and that through the elimination of what he called "undesirable strains," 
          society would be one that was more productive as well as morally clean.
          </p>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          The implications of Davenport's work extended beyond the laboratory; his research fed into the eugenics 
          movement's ideology, which sought to define and regulate human reproduction based on perceived genetic 
          superiority. As a Mendelian geneticist, Davenport and his peers believed they could apply the laws of 
          heredity uncovered through the study of plants and animals to human populations, thereby lending scientific 
          credibility to notions of racial purity and superiority. This effort was not only a misapplication of 
          biological principles but also a dangerous validation of racist ideologies that have persisted and evolved 
          over time.
          </p>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          In retrospect, Davenport’s contributions to the field of eugenics illustrate how scientific inquiry can be co-opted to support discriminatory practices and ideologies. 
          His work highlights the need for a critical examination of the historical roots of scientific racism and 
          underscores the responsibility of contemporary scientists to confront and dismantle these harmful legacies.
           The legacy of Davenport’s research serves as a reminder that the intersection of science and society is 
           fraught with ethical considerations, necessitating vigilance against the misuse of scientific authority 
           to justify social inequalities.
          </p>
          {/* Image Placeholder */}
          <div className="mt-6">
            <img src="https://circulatingnow.nlm.nih.gov/wp-content/uploads/2022/04/Davenport_1914_101413240.jpg" alt="Neanderthals" className="w-auto h-[600px] rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Section 4 - Conclusion */}
        <section className="bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Challenging the Legacy of Scientific Racism</h2>
          <p className="text-lg text-gray-600 indent-4 mb-4">
          The framing, in politics, about race and racism discourse in the scientific community should be analyzed in view of the historical context of scientific racism. In most instances, the intertwining nature of political ideologies with scientific inquiry leads to acceptance and promotion of pseudoscientific theories that justify racial hierarchies and discriminatory practices. In the case of Davenport, his eugenic research was not a simple reflection of prevailing social attitudes but was further framed by the political climate in which he was ensconced with a prejudice for conceptions of racial superiority and purity. That should raise critical questions about how politics has dictated how science is pursued or how findings have been manipulated to fit into prevailing narratives of their time.
          It is by understanding this relationship between science and politics that the deconstruction of the question of race becomes possible, as it has been carried along historically into the modern-day presentation. This, therefore, requires scrutiny regarding the use of scientific authority to legitimize systemic inequalities and discriminatory policies. The political dimensions of science bring out the continuing barriers to overcome deep-seated racialist biases within scientific structures and help develop a better understanding of the interrelations between science, society, and politics.
          </p>
          {/* Image Placeholder */}
          <div className="mt-6">
            <img src="https://images.aeonmedia.co/images/d5c0ee97-a6ad-480d-8307-3336dbf2090d/essay-nott_s_1857_ethnographic_tableau_specimens_of_various_races_of_mankind.jpg?width=1200&quality=75&format=auto" alt="Diversity and Human Evolution" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Footer Section */}
      <footer className="text-center py-6 bg-gray-100 border-t-2 border-gray-200">
        <p className="text-gray-600">&copy; 2024 Study of the Conception of Race| All Rights Reserved</p>
      </footer>
      </div>
    </div>
  </div>
  );
}

export default Home;
