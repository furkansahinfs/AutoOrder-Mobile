import api from '../../index';

interface PhotoProps {
  uri: string;
  type: string;
  name: string;
}

const profilePicture = async (photo: PhotoProps) => {
  const path = '/users/me/picture';
  const body = new FormData();
  body.append('file', photo);

  return await api
    .PUT(path, body, {
      headers: {'Content-Type': 'multipart/form-data'},
    })
    .then((result: any) => {
      if (result.data.url) {
        return true;
      }
      return false;
    });
};

export default profilePicture;
