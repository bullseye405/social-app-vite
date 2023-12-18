import { INewUser } from '@/types';
import { useMutation } from '@tanstack/react-query';

import {
  ISignInAccountRequest,
  createUserAccount,
  signInAccount,
  signOutAccount,
} from '../appwrite/api';

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: ISignInAccountRequest) => signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};
