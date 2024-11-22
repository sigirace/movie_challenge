import { useComicsDetail } from '../libs/useComic';

export default function ComicDetail() {
  const { data, isLoading, error } = useComicsDetail();
  console.log(data);
  return <div>ComicDetail</div>;
}
