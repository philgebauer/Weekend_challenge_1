$(document).ready(function() {
    // console.log( "ready!" );

    var monthlySalary = 0;
    var monthlyTotal = 0;

    $("#employeeinfo").on("submit", function(event) {
        event.preventDefault();

        var employee = {};

            // converts the for inputs into an array
        var fields = $("#employeeinfo").serializeArray();

        fields.forEach(function(element, index, array) {
          employee[element.name] = element.value;
        });

        //console.log(employee);

        $('#employeeinfo').find('input[type=text]').val('');

        appendDom(employee);


        // function appendDom(employee){
        //   $("#container").append('<div class="person"></div>');
        //   var $el = $("#container").children().last();
        //
        //
        //
        //   $el.append('<p class="empInfo">' + employee.employeefirstname + ' ' + employee.employeelastname +
        //   + employee.employeeid + employee.employeejobtitle + employee.employeesalary +
        //   '<button class="delete">Delete</button></p>');


          function appendDom(employee) {
            $('#employeeTable').append('<tr class="person"></tr>');
            var $el = $('#employeetable').children().last();

            $el.append(
                      '<tr class="listData"><td>' + employee.employeefirstname + ' ' +  employee.employeelastname +'</td><td>' + employee.employeeid + '</td><td>' + employee.employeejobtitle + '</td><td>'+ employee.employeesalary + '</td><td>' + '<button class="delete">Delete</button></td></tr>');

          // $("#firstName").append('<td class= ".firstNames">' + '</td>');
          // var $el = $('#firstName').children().last();
          //
          // $el.append('<td class= ".firstNameNew">' + employee.employeefirstname + '</td>');

          employee.employeesalary = parseInt(employee.employeesalary);

          monthlySalary = parseInt(employee.employeesalary) / 12;
          monthlyTotal = Math.round(monthlyTotal + monthlySalary);

          $('.monthlyAmount').empty();
          $('#money').append('<p class ="monthlyAmount"> Monthly Salary Expenditures: ' + monthlyTotal + '$ </p>');


          // $('.testClass').empty();
          // $('#test').append('<p class =".testClass"> Test class for ID: ' + employee.employeeid + '!!</p>');
          //
          //
          // $('#firstName').append('<td class =".firstNameNew"> ' + employee.employeefirstname '</td>');



        }

        $('.listData').click(function(){
          $(this).remove('.listData');


    });

  });

});
