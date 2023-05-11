import { client } from './sanity';

export type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, email, name, username, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username: username,
    email: email,
    name: name,
    image: image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}