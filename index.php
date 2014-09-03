<?php

require 'vendor/autoload.php';

$app = new \Slim\Slim();

// Define our routes

$app->get('/', function() use ($app){
    echo 'Hello Slim!';
});

$app->get('/contacts', function() use ($app){

});

