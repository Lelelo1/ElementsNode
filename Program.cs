namespace CompileTest
{
	[Export]
	public class Program
	{
		// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types
		public bool Bool { get; } = true;
		public byte Byte { get; } = 123;
		public sbyte SByte { get; } = 111;
		public char Char { get; } = 'a';
		public decimal Decimal { get; } = .3;
		public double Double { get; } = 0.0003;
		public float Float { get; } = 0.0023f;
		public int Int { get; } = 5;
		public uint UInt { get; } = 3;
		public nint NInt { get; } = 2;
		public nuint NUInt { get; } = 4;
		public long Long { get; } = 13;
		public ulong ULong { get; } = 10;
		public short Short { get; } = 8;
		public ushort UShort { get; } = 9;

		public object Object { get; } = new Program();
		public string String { get; } = "test string";
		public dynamic Dynamic { get; } = new Program();

		public DateTime DateTime { get; } = DateTime.UtcNow;
		public Dictionary<string, int> Dictionary { get; } = new Dictionary<string,int>() {{"one", 1}, {"two", 2}, {"two", }}
		public void HelloWorld()
		{
			writeLn("Hello World from Node.js");
			WebAssembly.Eval("console.log(\"Hello via eval\")");

		}
	}
}