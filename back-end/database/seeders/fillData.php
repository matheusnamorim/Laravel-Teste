<?php

namespace Database\Seeders;

use App\Models\Usuarios;
use App\Models\Livros;
use App\Models\Emprestimos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class filldata extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuarios = [
            [
                'nome' => 'Matheus',
                'dtnascimento' => '2000-01-01',
                'email' => 'matheus@example.com'
            ],
            [
                'nome' => 'Keyla',
                'dtnascimento' => '1970-05-11',
                'email' => 'keyla@example.com'
            ],
            [
                'nome' => 'Patrick',
                'dtnascimento' => '1987-11-05',
                'email' => 'patrick@example.com'
            ]
        ];

        foreach ($usuarios as $user) {
            Usuarios::create($user);
        }

        $livros = [
            [
                'titulo' => 'As Crônicas',
                'autor' => 'Autor Desconhecido',
                'situacao' => 'Disponivel',
                'genero' => 'Drama',
                'sinopse' => 'Livro bom pra ler',
                'ano_publicacao' => '2023'
            ],
            [
                'titulo' => 'As Fábulas',
                'autor' => 'Rodrigo Teste',
                'situacao' => 'Disponivel',
                'genero' => 'Terror',
                'sinopse' => 'Livro bom demais pra ler',
                'ano_publicacao' => '2021'
            ],
            [
                'titulo' => 'As Histórias',
                'autor' => 'Artur Nogueira Teste',
                'situacao' => 'Disponivel',
                'genero' => 'Romance',
                'sinopse' => 'Livro apaixonante',
                'ano_publicacao' => '2003'
            ],
            [
                'titulo' => 'Os Poemas',
                'autor' => 'Carlinhos Drummond de Andrade Teste',
                'situacao' => 'Emprestado',
                'genero' => 'Ficção Científica',
                'sinopse' => 'Livro bom',
                'ano_publicacao' => '1990'
            ],
            [
                'titulo' => 'As Lembranças',
                'autor' => 'Martelo de Assis Teste',
                'situacao' => 'Emprestado',
                'genero' => 'Biografia',
                'sinopse' => 'Um pouco sobre mim',
                'ano_publicacao' => '2013'
            ]
        ];

        foreach ($livros as $livro) {
            Livros::create($livro);
        }

        $emprestimos = [
            [
                'user_id' => 1,
                'livro_id' => 4,
                'situacao' => 'Devolvido',
                'dtdevolucao' => '2024-04-11'
            ],
            [
                'user_id' => 1,
                'livro_id' => 5,
                'situacao' => 'Atrasado'
            ],
            [
                'user_id' => 2,
                'livro_id' => 1,
                'situacao' => 'Devolvido',
                'dtdevolucao' => '2024-07-01'
            ],
            [
                'user_id' => 2,
                'livro_id' => 4,
                'situacao' => 'Atrasado',
            ],
            [
                'user_id' => 3,
                'livro_id' => 2,
                'situacao' => 'Devolvido',
                'dtdevolucao' => '2024-08-12'
            ]
        ];

        foreach ($emprestimos as $emprestimo) {
            Emprestimos::create($emprestimo);
        }
    }
}