

// Get / Homepage

exports.homepage = async (req, res) => {
    res.render('index', { title: 'Cooking Blog - Made With Node js' });
}