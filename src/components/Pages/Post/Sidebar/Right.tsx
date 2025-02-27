import { RightSidebar } from 'components/Layout/RightSidebar';
import PopularPosts from 'components/Popular/Posts';
import SidebarItemsCommon from 'components/SidebarItems/Common';
import { PostPlain } from 'typings/post';

interface PostRightSidebarProps {
  popularPostsByCategory: {
    plainPosts: PostPlain[],
    category: string
  }[];
}

export default function PostRightSidebar({ popularPostsByCategory }: PostRightSidebarProps) {
  return (
    <RightSidebar>
      <SidebarItemsCommon />
      <PopularPosts popularPostsByCategory={popularPostsByCategory} />
    </RightSidebar>
  );
}
