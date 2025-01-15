<x-layout title="Teste">
	<ul>
		@foreach ($autores as $value)
		<li>{{$value}}</li>
		@endforeach
	</ul>
</x-layout>
