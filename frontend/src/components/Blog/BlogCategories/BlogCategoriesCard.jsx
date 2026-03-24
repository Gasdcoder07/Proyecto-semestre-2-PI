const BlogCategoriesCard = ({ nombre, imagen }) => {
  return (
    <div className="w-full h-40 flex border border-neutral-800 rounded-xl overflow-hidden">
      
      <div className="w-1/2 h-full">
        <img
          className="h-full w-full object-cover"
          src={imagen}
          alt={nombre} />
      </div>

        <div className="w-1/2 px-8 py-4">
          <p>
            {nombre}
          </p>
        </div>

    </div>

  );
};

export default BlogCategoriesCard;
