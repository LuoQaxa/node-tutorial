- 类型
https://segmentfault.com/a/1190000002789651
值类型：Number Boolean String Null Undefined
    特点：1. 不可改变
          2. 比较是值的比较，==情况下如果类型不同会发生转换
          3. 变量存在栈区，存储了变量的标识符和变量的值
引用类型：Object Array
    特点：1. 值可以变，有属性和方法
          2. 值是同时保存在栈内存和堆内存中的对象
ES6：symbol
- 如何判断变量类型

- TypeScript 
1. 静态类型
TypeScript一个很独特的特征是支持静态类型。就是说可以声明变量的类型，因此编译器可以确保赋值时不会产生类型
错误。如果忽略了类型声明，TypeScript会从代码中自动推测出正确的类型。
任意变量，函数自变量或者返回值在初始化时都可以定义自己的类型
2. Interfaces接口
接口通常会根据一个对象是否符合某种特定结构来进行类型检查。通过定义一个接口我们可以命名一个特殊的
组合变量，确保它们会一直一起运行。
定义一个接口对一个函数自变量进行类型检查
interface Food {
    name: String;
    calories: number;
}
感觉接口就是定义了一个结构，规定了数据类型和数据结构，在编译的时候就可以检查出来
3.类
class Menu {
    items: Array<string>;
    pages: number;
}
typescript是js的强类型版本，而flow是通过一组可添加到js的注解，然后通过工具检查正确性


