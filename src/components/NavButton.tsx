import { Link, useLocation } from "react-router-dom";

type Props = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text: string;
  url: string;
  testId: string;
};

export const NavButton = ({ testId, Icon, text, url }: Props) => {
  const { pathname } = useLocation();

  return (
    <Link to={url}>
      <li
        data-cy={testId}
        className={`flex gap-3 items-center font-bold justify-center xl:justify-start hover:bg-lightblue p-2 px-4 rounded-full transition-all ${
          pathname == url && "fill-primary text-primary bg-lightblue"
        }`}
      >
        <Icon className="w-6 xl:w-7" />
        <p className="hidden xl:block">{text}</p>
      </li>
    </Link>
  );
};
