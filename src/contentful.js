const contentful = require("contentful");
const spaceId = process.env.REACT_APP_SPACE_ID;
const apiKey = process.env.REACT_APP_CT_ATT_API_KEY;

const client = contentful.createClient({
  space: spaceId,
  accessToken: apiKey,
});

export default client;