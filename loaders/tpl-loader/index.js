const { mapTemplate } = require('./utils/mapTemplate')

function tplLoader(source) {
    source = source.replace(/\s+/g,'')
    console.log(source);
    return `
        export default (options) => {
            ${mapTemplate.toString()}
            return mapTemplate("${source}",options)
        }
    `
}
module.exports = tplLoader