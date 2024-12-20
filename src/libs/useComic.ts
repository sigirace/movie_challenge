import { useQuery } from '@tanstack/react-query';
import { comicDetail, listComicCharacters, listComics } from '../api';
import { CharactersResponse, ComicDetailResponse, ComicsResponse } from '../types';
import { useParams } from 'react-router-dom';

export const useComicList = () => {
  const { data, isLoading, isError } = useQuery<ComicsResponse>({
    queryKey: ['comics'],
    queryFn: listComics,
  });

  return { data, isLoading, isError };
};

export const useComicsDetail = () => {
  const { comicId } = useParams<string>();

  const {
    data: comicData,
    isLoading: isComicLoading,
    error: isComicError,
  } = useQuery<ComicDetailResponse>({
    queryKey: ['comics', comicId],
    queryFn: comicDetail,
    enabled: !!comicId,
  });

  const {
    data: characterData,
    isLoading: isCharacterLoading,
    error: isCharacterError,
  } = useQuery<CharactersResponse>({
    queryKey: ['comics', comicId, 'characters'],
    queryFn: listComicCharacters,
    enabled: !!comicData,
  });

  return { comicData, characterData };
};

export const useComicCharacters = () => {
  const { comicId } = useParams<string>();

  const { data, isLoading, error } = useQuery<CharactersResponse>({
    queryKey: ['comics', comicId, 'characters'],
    queryFn: listComicCharacters,
    enabled: !!comicId,
  });

  return { data, isLoading, error };
};
