var hbs = require('hbs');
var fs = require('fs');

module.exports = function(fieldName,args) {
  
  //get template
  var template = fs.readFileSync('modules/hbs/form/form-text.hbs', 'utf8');
  template = hbs.compile(template);

  //apply template
  var output = template({
    field: fieldName,
    fieldslug: fieldName.toLowerCase(),
    default: args.hash.default,
    label: args.hash.label,
  });

  return new hbs.SafeString(output);
}