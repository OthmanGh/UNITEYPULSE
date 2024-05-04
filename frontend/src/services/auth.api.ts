import { RequestMethod } from './requestMethods';

const API_BASE_URL = 'http://127.0.0.1:8000/api/auth';

const fetchAuthRes = async (data: any, path: string, method: RequestMethod) => {
  try {
    const url = `${API_BASE_URL}/${path}`;
    const httpMethod = method;

    const req = await fetch(url, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!req.ok) {
      throw new Error('Network Error');
    }

    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
};

export default fetchAuthRes;
