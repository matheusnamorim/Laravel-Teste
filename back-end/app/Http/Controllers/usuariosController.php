<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;

class usuariosController extends Controller
{
    public function index()
    {
        return Usuarios::all();
    }

    public function store(Request $request)
    {
        return response()->json(Usuarios::create($request->all()), status: 201);
    }

    public function show(int $usuarios)
    {
        $usuariosModel = Usuarios::find($usuarios);
        if ($usuariosModel === null) {
            return response()->json(['error' => true, 'message' => 'Usuário não encontrado'], status: 404);
        }
        return $usuariosModel;
    }

    public function update(Request $request, int $usuarios)
    {
        Usuarios::where('id', $usuarios)->update($request->all());
        return Usuarios::find($usuarios);
    }

    public function destroy(int $usuarios)
    {
        usuarios::destroy($usuarios);
        return response()->noContent();
    }
}
