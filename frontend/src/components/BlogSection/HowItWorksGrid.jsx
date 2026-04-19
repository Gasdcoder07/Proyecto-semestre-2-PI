import { HowItWorksItems } from "./BlogItems";
import HowItWorksItem from "./HowItWorksItem";
import { useLanguage } from "../../context/LanguageContext";

const HowItWorksGrid = () => {
  const { textos } = useLanguage();

  const itemsTexto = textos.blog?.como_funciona_items || [];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center place-items-center">
        {
            HowItWorksItems.map((item, index) => {
                const Icon = item.icon;
                const data = itemsTexto[index] || {};

                return (
                    <HowItWorksItem
                        key={item.id}
                        Icon={Icon}
                        IconStyle={item.iconStyle}
                        Title={data.titulo}
                        Description={data.descripcion}
                    />
                );
            })
        }
    </div>
  );
};

export default HowItWorksGrid;