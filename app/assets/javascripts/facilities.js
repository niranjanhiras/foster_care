/* Run on load */
$(document).ready(function() {
  $('#facilities_table').DataTable( {
      columnDefs: [ 
        {
          "targets": 0,
          "orderable": false
        },
        {
            targets: [ 1 ],
            orderData: [ 0, 1 ]
        }, {
            targets: [ 2 ],
            orderData: [ 1, 0 ]
        }, {
            targets: [ 5 ],
            orderData: [ 4, 0 ]
        } 
      ]
  }); // data table


});