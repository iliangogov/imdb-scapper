module.exports = {
    getActorUrl(imdbId) {
        const url = `http://www.imdb.com/name/${imdbId}/?ref_=tt_ov_st_sm`;
        return url;
    }
};