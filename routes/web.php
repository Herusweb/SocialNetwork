<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});
// routes/web.php
use Illuminate\Support\Facades\Cache;

Route::get('/redis', function () {
    Cache::store('redis')->put('test-key', 'Hello Redis', 600); // сохраняем 10 минут
    return Cache::store('redis')->get('test-key'); // получаем
});
