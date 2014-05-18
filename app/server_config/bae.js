//config file for bae
if(sumeru.BAE_VERSION){
  sumeru.config.database({
    dbname : 'NALcEuVVqrDieXyuNlzo',
    user: 'SzPGMhRbcvryutv56Cy43f12',//bae 3.0 required
    password: 'ftyM4LymL5erbZMqAOEvK2myHqMixfTE',//bae 3.0 required
  }); 
  sumeru.config({
    site_url : '', //with tailing slash
  });
  sumeru.config.cluster({
      enable : false,
      dbname : 'yourdbname',
      user: 'yourpk',
      password: 'yoursk',
  });
}