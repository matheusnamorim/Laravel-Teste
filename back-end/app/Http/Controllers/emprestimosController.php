<?php

namespace App\Http\Controllers;

use App\Models\Emprestimos;
use Illuminate\Http\Request;

class emprestimosController extends Controller
{
    public function index()
    {
        return Emprestimos::all();
    }

    public function store(Request $request)
    {
        return response()->json(Emprestimos::create($request->all()), status: 201);
    }
}
