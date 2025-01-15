<?php

namespace App\Http\Controllers;

use App\Models\Emprestimos;
use Exception;
use Illuminate\Http\Request;

class emprestimosController extends Controller
{
    public function index()
    {
        return Emprestimos::with(['usuario', 'livro'])->get();
    }

    public function store(Request $request)
    {
        try{
            $retorno = Emprestimos::create($request->all());
            return response()->json($retorno, status: 201);
        } catch(Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }

    public function show(int $emprestimmos)
    {
        $emprestimmosModel = Emprestimos::find($emprestimmos);
        if ($emprestimmosModel === null) {
            return response()->json(['error' => true, 'message' => 'Empréstimo não encontrado'], status: 404);
        }
        return $emprestimmosModel;
    }

    public function update(Request $request, int $emprestimmos)
    {
        try{
            Emprestimos::where('id', $emprestimmos)->update($request->all());
            return response()->json(Emprestimos::find($emprestimmos), status: 201);
        } catch(Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }

    public function destroy(int $emprestimmos)
    {
        try{
            if (Emprestimos::find($emprestimmos) !== null) {
                Emprestimos::destroy($emprestimmos);
                return response()->json(['message' => 'Empréstimo excluído com sucesso!'], status: 202);
            } else {
                return response()->json(['error' => true, 'message'=> 'Empréstimo não encontrado'], status:404);
            }
        } catch (Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }
}
