<?php

namespace App\Http\Controllers;

use App\Models\Emprestimo;
use Illuminate\Http\Request;

class emprestimoController extends Controller
{
    public function index()
    {
        return Emprestimo::all();
    }

    public function store(Request $request)
    {
        return response()->json(Emprestimo::create($request->all()), status: 201);
    }
}
