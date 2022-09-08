exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  };
};
