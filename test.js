var _ = require('underscore')
  
function to4s(num) {
    return parseFloat(num.toFixed(4)).toString()
}
console.log("Old Item", header.bundles)

_.each(header.items, function(item) {
  			if (item.price_incl_tax == "") {
            item.test = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"
          	var options = JSON.parse(item.product_options);
            var attributes = JSON.parse(options.bundle_selection_attributes);
          	item.attributes = attributes;
            var parent_tax_percent = 0;
          	_.each(header.bundles, function(bundle) {
               if (bundle.item_id == item.parent_item_id) {parent_tax_percent = bundle.tax_percent}
            })
            item.parent_tax_percent = parent_tax_percent;
            item.tax_percent = parent_tax_percent;
          	item.price_incl_tax = to4s(attributes.price);
            item.price = to4s(item.price_incl_tax / ((100+parent_tax_percent)/100));
            item.row_total_incl_tax =  to4s(item.price_incl_tax * item.qty_ordered); 
          item.row_total = to4s(item.price * item.qty_ordered);
        }
})

console.log("New Item", header.items)

// function to4s(num) {
//     return parseFloat(num.toFixed(4)).toString()
// }

// _.each(header.items, function(item) {
//   			if (item.price_incl_tax == "") {
//           	var options = JSON.parse(item.product_options);
//             var parent = _.find(header.bundles, function(bundle){ return bundle.item_id == item.parent_item_id;});
//             item.tax_percent = parent.tax_percent;
//           	item.price_incl_tax = to4s(options.bundle_selection_attributes.price);
//             item.price = to4s(item.price_incl_tax / ((100+parent.tax_percent)/100));
//             item.row_total_incl_tax =  to4s(item.price_incl_tax * item.qty_ordered); 
//             item.row_total =  to4s(item.price * item.qty_ordered);
//         }
//     })