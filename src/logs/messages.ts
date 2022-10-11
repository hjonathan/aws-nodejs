export default {
  BEARER_MISSING() {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bearer authorization is missing" }),
    };
  },
  ERROR_MESSAGE(msg: any) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: msg }),
    };
  },
  SUCCESS_MESSAGE(msg: any) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: msg }),
    };
  },
};
