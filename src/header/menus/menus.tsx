import { IPost, posts } from "../../posts/posts";
import { FaSquareGithub as Git,
  FaLinkedin as LinkedIn } from "react-icons/fa6";
import { IconBaseProps } from "react-icons";
import { ReactElement } from "react";
import linkToPost from "../../util/link-to-post";


/**
 * Display Properties to format react-icon svg images
 */
export interface IImgProps extends IconBaseProps {
  className: string,
}

export interface IMenuItem {
  name: string,
  url?: string,
  subMenus?: IMenuItem[],
}
export const AboutMenus: IMenuItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "about",
  },
]

export const HomeMenus: IMenuItem[] = [
  ...AboutMenus,
  {
    name: "Posts",
    subMenus: posts.map(({title, date} : IPost) => {
      return {
        name: `${title}: ${date}`,
        url: `#${linkToPost(title)}`,
      };
    }),
  },
]

export interface ISocials {
  name: string,
  url: string,
  img: (props: IImgProps) => ReactElement,
}

export const socials: ISocials[] = [
  {
    name: "gitHub",
    url: "https://github.com/Jordan-Gallivan",
    img: (props) => <Git {...props}/>,
  },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/jordan-gallivan/",
    img: (props) => <LinkedIn {...props}/>,
  },
]



