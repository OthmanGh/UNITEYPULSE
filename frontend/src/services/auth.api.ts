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
      const error = await req.json();
      console.log('error:', error);
      throw new Error(error || 'Request failed');
    }

    return await req.json();
  } catch (error) {
    console.error('fetchAuthRes error:', error);
    throw error;
  }
};

export default fetchAuthRes;
