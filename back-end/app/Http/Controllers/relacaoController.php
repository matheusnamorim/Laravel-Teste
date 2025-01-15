<?php

namespace App\Http\Controllers;

use App\Models\Livros;
use App\Models\Usuarios;
use Illuminate\Http\Request;

class relacaoController extends Controller
{
    public function indexAutores(Usuarios $usuarios)
    {
        return $usuarios->livros;
    }

    public function indexLivros(Livros $livros)
    {
        return $livros->autores;
    }
}
