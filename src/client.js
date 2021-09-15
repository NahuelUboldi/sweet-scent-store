import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  // space: '5it779ov3l44',
  // accessToken: '6oeLVpkuHyBOC-bCzzrVTL2yHeis5Y4o2iEDNEQnFL8',
});
