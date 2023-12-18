import { useContext } from 'react';

import { IUser } from '@/types';
import { AuthContext } from './AuthContext';

export const INITIAL_USER: IUser = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
  bio: '',
};

export const useUserContext = () => useContext(AuthContext);
