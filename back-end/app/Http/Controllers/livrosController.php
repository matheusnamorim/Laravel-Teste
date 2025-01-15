<?php

namespace App\Http\Controllers;

use App\Models\Livros;
use Illuminate\Http\Request;

class livrosController extends Controller
{
    public function index()
    {
        return Livros::all();
    }
    public function store(Request $request)
    {
        return response()->json(Livros::create($request->all()), status: 201);
    }
}
