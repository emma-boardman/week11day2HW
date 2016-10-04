var FilmApi = function(app){
  var films = [film1, film2]; 


  app.get('/films/:id', function(req, res){
    res.json({data:films[req.params.id]});
  });

  app.get('/films', function(req, res) {
    res.json({data:films});
  });

  app.put('/films/:id', function(req, res) {
    films[req.params.id] = req.body.film;
    res.json({data: films});
  });

  app.post('/films', function(req, res) {
    console.log(req.body)
    films.push(req.body.film);
    res.json({data: films});
  });

  app.delete('/films/:id', function(req, res) {
    films.splice(req.params.id, 1);
    res.json({data: films});
  });
}
module.exports = FilmApi;