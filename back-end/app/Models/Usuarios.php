<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'dtnascimento', 'email'];

    public function livros()
    {
        return $this->hasMany(related: Livros::class, foreignKey: 'autor_id');
    }
}
