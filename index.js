module.exports.requestHooks = [
  ({ app, request }) => {
    const env = request.getEnvironment();
    const url = request.getUrl();

    const options = env.graphQLGetQueryPlugin;

    if (options && options.endpoints && options.endpoints.includes(url)) {
      const body = request.getBody();
      const urlObj = new URL(url);
      const encodedBody = encodeURIComponent(JSON.parse(body.text).query);

      urlObj.searchParams.append("query", encodedBody);

      request.setUrl(urlObj.toString());
      request.setBody("");
    }
  },
];
