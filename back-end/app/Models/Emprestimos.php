<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emprestimos extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'livro_id', 'situacao', 'dtdevolucao'];

    public function usuario()
    {
        return $this->belongsTo(Usuarios::class, 'user_id');
    }

    public function livro()
    {
        return $this->belongsTo(Livros::class, 'livro_id');
    }
}
