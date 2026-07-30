const Contato = require('../models/contatoModel')
exports.index = (req, res) => {
    res.render('contato', { contato: {} }) //como ele consegue renderizar sem o caminho certin
}
exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register(); //await pq mexe com banco d dados,cria o contato

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect(`/contato/index`));
            return
        }
        req.flash('success', 'Contato registrado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato.id}`)); //acessa o obj contato o contato de dentro do contato
        return

    } catch (e) {
        console.log(e);
        return res.render('404')
    }


};

exports.editIndex = async function (req, res) {
    if (!req.params.id) return res.render('404'); //porque nao seria enviado parametro
    const contato = await Contato.buscaPorId(req.params.id)
    if (!contato) return res.render('404');
    res.render('contato', { contato }) //porque essa parte em especifico

}

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            //  req.session.save(()=> res.redirect('back'));
            req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
            return
        }
        req.flash('success', 'Contato editado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato.id}`)); //acessa o obj contato o contato de dentro do contato
        return

    } catch (e) {
        console.log(e);
        res.render('404')
    }

};

exports.delete = async function (req, res) {
    if (!req.params.id) return res.render('404'); //porque nao seria enviado parametro
    const contato = await Contato.delete(req.params.id)
    if (!contato) return res.render('404');
     req.flash('success', 'Contato apagado com sucesso');
        req.session.save(() => res.redirect(req.get('Referer') || '/')); //acessa o obj contato o contato de dentro do contato
        return

}