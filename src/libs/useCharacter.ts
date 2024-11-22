import { useQuery } from '@tanstack/react-query';
import { characterDetail, listCharacters } from '../api';
import { CharacterDetailResponse, CharactersResponse } from '../types';
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

  const { data, isLoading, isError } = useQuery<CharacterDetailResponse>({
    queryKey: ['characters', characterId],
    queryFn: characterDetail,
    enabled: !!characterId,
  });

  return { data, isLoading, isError };
};
