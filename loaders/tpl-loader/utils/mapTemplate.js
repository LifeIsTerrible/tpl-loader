function mapTemplate(template,options) {
    return template.replace(/\{\{(.+?)\}\}/g,function(node,key){
        return options[key]
    })
}
module.exports = {
    mapTemplate
}