<?php

namespace App\Http\Controllers;

use App\Models\Livros;
use Exception;
use Illuminate\Http\Request;

class livrosController extends Controller
{
    public function index()
    {
        return Livros::with('autores')->get();
    }

    public function store(Request $request)
    {
        try{
            $retorno = Livros::create($request->all());
            return response()->json($retorno, status: 201);
        } catch(Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }

    public function show(int $livros)
    {
        $livrosModel = Livros::find($livros);
        if ($livrosModel === null) {
            return response()->json(['error' => true, 'message' => 'Livro não encontrado'], status: 404);
        }
        return $livrosModel;
    }

    public function update(Request $request, int $livros)
    {
        try{
            Livros::where('id', $livros)->update($request->all());
            return response()->json(Livros::find($livros), status: 201);
        } catch(Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }
    
    public function destroy(int $livros)
    {
        try{
            if (Livros::find($livros) !== null) {
                Livros::destroy($livros);
                return response()->json(['message' => 'Livro excluído com sucesso!'], status: 202);
            } else {
                return response()->json(['error' => true, 'message'=> 'Livro não encontrado'], status:404);
            }
        } catch (Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }
}
