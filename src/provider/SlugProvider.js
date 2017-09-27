module.exports = class SlugPprovider {

    slugify(name) {
        if (typeof name != 'string') {
            return null;
        }
        let slug = name
            .replace(/[^\w]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .toLowerCase()
        return slug;
    }

}
