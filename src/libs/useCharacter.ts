import { useQuery } from '@tanstack/react-query';
import { characterDetail, comicDetailByCharacter, listCharacters } from '../api';
import { CharacterDetailResponse, CharactersResponse, ComicsResponse } from '../types';
import { useParams } from 'react-router-dom';

export const useCharacterList = () => {
  const { data, isLoading, isError } = useQuery<CharactersResponse>({
    queryKey: ['characters'],
    queryFn: listCharacters,
  });

  return { data, isLoading, isError };
};

export const useCharacterDetail = () => {
  const { characterId } = useParams<string>();
  const {
    data: characterData,
    isLoading: isCharacterLoading,
    isError: isCharacterError,
  } = useQuery<CharacterDetailResponse>({
    queryKey: ['characters', characterId],
    queryFn: characterDetail,
    enabled: !!characterId,
  });

  const {
    data: comicsData,
    isLoading: isComicsLoading,
    isError: isComicsError,
  } = useQuery<ComicsResponse>({
    queryKey: ['characters', characterId, 'comics'],
    queryFn: comicDetailByCharacter,
    enabled: !!characterData,
  });

  return { characterData, comicsData };
};
