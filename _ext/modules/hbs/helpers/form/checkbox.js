var hbs = require('hbs');
var fs = require('fs');

module.exports = function(fieldName,args) {
  
  //get template
  var template = fs.readFileSync('modules/hbs/form/form-check.hbs', 'utf8');
  template = hbs.compile(template);

  var selected = false;
  //if the value was passed from express, use that
  if (this[fieldName] === true) 
    selected = true;
  
  //if it wasnt passed from express, but a default is defined in the helper, use that 
  else if (typeof this[fieldName] === 'undefined' && args.hash.default === 'true') 
    selected = true;
    
  //apply template
  var output = template({
    field: fieldName,
    fieldslug: fieldName.toLowerCase(),
    selected: selected,
    label: args.hash.label,
  });

  return new hbs.SafeString(output);
}