import compression from 'compression';

const compressionApi = (req, res, next) => {
  const isCompression = [];
  for (let i = 0; i < process.argv.length; i++) {
    if(process.argv[i] == "-c") 
      isCompression.push(process.argv[i + 1] == "false" ? false : process.argv[i + 1] == "true" ? true : process.argv[i + 1]);
    else isCompression[0] = true;
  }
  if(isCompression[0]) return [compression(), next()];
  else return next();
}

export default compressionApi;