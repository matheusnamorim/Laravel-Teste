<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('emprestimo', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('autor_id')->nullable(false);
            $table->foreign('autor_id')->on('usuarios')->references('id');
            $table->unsignedBigInteger('livro_id')->nullable(false);
            $table->foreign('livro_id')->on('livros')->references('id');
            $table->enum('situacao', ['Atrasado', 'Devolvido', 'Em Aberto'])->default('Em Aberto');
            $table->date(column: 'dtdevolucao')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('emprestimo');
    }
};
