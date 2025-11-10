import apiClient from '../config/interceptor';

async function postMethod(data: object): Promise<void> {
  const url = `${process.env.REACT_APP_API_BASE_URL}/v1/sm-central-quote`;
  try {
    const response = await apiClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        correlationId: process.env.REACT_APP_CORRELATION_ID,
        token: sessionStorage.getItem('cToken'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to send log:', error);
  }
}

export default postMethod;
