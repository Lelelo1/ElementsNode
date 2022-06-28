export declare class CompileTest {
    instance: any;
    module: any;
    private constructor();
    static instantiate(url?: string): Promise<CompileTest>;

    Program(): Program;
}
export interface Program{
    String: any;
    Dynamic: any;
    Dictionary: any;
}

