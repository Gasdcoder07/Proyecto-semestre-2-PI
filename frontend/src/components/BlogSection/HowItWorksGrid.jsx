import { HowItWorksItems } from "./BlogItems";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorksGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center place-items-center">
        {
            HowItWorksItems.map((item) => {
                const Icon = item.icon;
                
                return (
                    <HowItWorksItem
                        key={item.id}
                        Icon={Icon}
                        IconStyle={item.iconStyle}
                        Title={item.title}
                        Description={item.description}/>
                );
            })
        }
    </div>
  );
};

export default HowItWorksGrid;
