import path from 'path';
import os from 'os';
import randomApi from '../api/random.api.js';
import { args } from '../index.js';

const renderLobby = (req, res) => {
  const user = req.user;
  if(user) return res.redirect('/home');
  res.sendFile(path.join(process.cwd(), "/public/login.html"));
}

const renderHome = (req, res) => {
  const user = req.user.email;
  res.render('home', { nombre: user });
}

const renderInfo = (req, res) => {
  res.render('info', { 
    inputArguments: JSON.stringify(args), 
    platformName: process.platform, 
    versionNode: process.version, 
    rss: process.memoryUsage().rss, 
    path: `"${process.argv[0]}"`,
    processId: process.pid, 
    projectFolder: `"${process.cwd()}"`,
    numOfProcessors: os.cpus().length
  });
}

const renderRandom = async (req, res) => {
  const { query: { cantq }, params: { cantp } } = req;
  const cant = cantq || cantp;
  if(isNaN(cant) && cant != undefined) return res.json({ error: "the quantity entered must be a number" });
  return res.json(randomApi(cant));
}

export {
  renderLobby,
  renderHome,
  renderInfo,
  renderRandom
}