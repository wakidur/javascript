<?php
    $errors = array();//array to hold validation errors
    $data = array(); // array to pass back data
    
    /*validate the variables
    if any of these variables don't exist , add an error to our $errors array*/
    if(empty($_POST['name'])){
        $errors['name'] = 'Name is required.';
    }
    if(empty($_POST['email'])){
        $errors['email'] = 'Email is required.';
    }
    if(empty($_POST['superheroAlias'])){
        $errors['superheroAlias'] = 'Superhero alias is required.';
    }
//    return a response 
//    if there are nay errors in our errors array, return a success boolean of false
    if(!empty($errors)){
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        /*
        if there are no errors process our form , then return a message 
        do all your form processing here
        this can be wahatever you want to do ( Login , save , update , whatever)
        show a message of success and provide a true success variable
        
         */
       $data['success'] = true;
       $data['message'] = 'Success';
    }
    // return all out data to an Ajax call 
    echo json_encode($data);
    
?>