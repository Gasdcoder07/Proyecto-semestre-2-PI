import CategoriesGrid from "./CategoriesGrid";

const CategoriesSection = () => {
  return (
      <section id="categorias" className="min-h-screen bg-zinc-950 py-5 md:py-10 lg:py-15">
          <div className="container mx-auto flex flex-col px-6 py-4 md:px-20 lg:px-32 gap-12">
              <h3 className="text-white text-4xl">
                  Nuestras{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-800">
                      categorias
                  </span>
              </h3>

                <CategoriesGrid/>

          </div>
      </section>
  );
};

export default CategoriesSection;