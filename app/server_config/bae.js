//config file for bae
if(sumeru.BAE_VERSION){
  sumeru.config.database({
<<<<<<< HEAD
    dbname : 'yourdbname',
    user: 'yourpk',//bae 3.0 required
    password: 'yoursk',//bae 3.0 required
=======
    dbname : 'NALcEuVVqrDieXyuNlzo',
    user: 'SzPGMhRbcvryutv56Cy43f12',//bae 3.0 required
    password: 'ftyM4LymL5erbZMqAOEvK2myHqMixfTE',//bae 3.0 required
>>>>>>> 2bd952b5d2359999d88ddea10576571fdf702078
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