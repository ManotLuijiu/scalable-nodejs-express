module.exports = {
  getAllArtists(req, res) {
    return res.render('music', { data: 'reached /artists index route!' });
  }
};
