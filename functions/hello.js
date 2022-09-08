exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
    headers: {
      "Cache-Control": "s-maxage=300",
    },
  };
};
