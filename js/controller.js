app.controller('ContactFormController', function ($scope, $http) {
    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData;
    $scope.submitButtonDisabled = false;
    $scope.submitted = false;
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
            $http({
                method  : 'POST',
                url     : 'contact.php',
                data    : $.param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data){
                console.log(data);
                if (data.success) {
                    $scope.submitButtonDisabled = true;
                    $scope.resultInformation = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultInformation = data.message;
                    $scope.result='bg-danger';
                }
            });
        }

});