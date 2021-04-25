import { FunctionComponent } from "react";
import { IService } from "../../type";

const ServiceCard: FunctionComponent<{
  service: IService;
}> = ({ service: { title, about, Icon } }) => {
  const createMarkUp = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h5 className="font-bold">{title}</h5>
        <p dangerouslySetInnerHTML={createMarkUp()} />
      </div>
    </div>
  );
};

export default ServiceCard;
