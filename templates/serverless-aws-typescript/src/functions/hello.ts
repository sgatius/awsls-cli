import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: 'Welcome to Chief Area Manager services'
    };
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: 'An error occured'
    };
  }
};
