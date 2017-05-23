(function (module) {
	gst.controllers = _.extend(module, {
        EmployeeController: function (scope, resourceFactory, location) {
            scope.employees = [];
            scope.routeTo = function (id) {
                location.path('/viewemployee/' + id);
            };

            if (!scope.searchCriteria.employees) {
                scope.searchCriteria.employees = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.employees;

            scope.onFilter = function () {
                scope.searchCriteria.employees = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.employeeResource.getAllEmployees(function (data) {
                scope.employees = data;
            });
        }
    });
	gst.ng.application.controller('EmployeeController', ['$scope', 'ResourceFactory', '$location', gst.controllers.EmployeeController]).run(function ($log) {
        $log.info("EmployeeController initialized");
    });
}(gst.controllers || {}));