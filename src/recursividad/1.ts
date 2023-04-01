function funcrecursiva(n : number) : number
{
	if(n == 0)
	{
		return 0;
	}else if(n == 1)
	{
		return 1;
	}else
	{
		console.log(n);
		return n - funcrecursiva(n-1) - funcrecursiva(n-2);
	}
}
console.log(funcrecursiva(5));
