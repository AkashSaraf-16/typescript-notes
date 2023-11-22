## To create tsc config file:
tsc --init


## Summary
- Since TypeScript is a superset of JavaScript, it includes all the built-in types in JavaScript(eg number, string, boolean, object, etc) as well as additional types(eg any, unknown, never, enum, tuple, etc).
- In TypeScript, we set the type of our variables by annotating them.
- The **any** type can represent any kind of value. It's something we should avoid as much as possible because it defeats the purpose of using TypeScript in first place. A variable of type **any** can take any kind of value!
- Tuples are fixed-length arrays where each element has a specific type. We often use them for representing two or three related values.
- Enums represent a list of related constants


## Since we cant debug our ts programs directly we have to do some setups:
1. Enable "sourceMap": true in tsconfig file
2. Enable breakpoint in your program
3. In run and debug tab select 'create a launch.json file' option choose node.js, it will create the launch.json file.
4. Add this property in launch.json file: 
	"preLaunchTask": "tsc: build - ../fundamentals/tsconfig.json"
5. Now launch from debug tab.

## JavaScipt types:
number
string
boolean
null
undefined
object
bigint 
symbol

## TypeScript types:
## JavaScript Types + 
any => If we arent sure what is exactly the type of var we use any. Avoid using any
unknown => The **unknown** type is the type-safe version of **any**. Similar to **any**, it can represent any value but we cannot perform any operations on an **unknown** type without first narrowing to a more specifi type.
never => This type denotes that function will never return from it. Hence after that
function is invoked all the lines will be unreachable
enum => Enum defines a set of constants with the first member having numeric value of 0 and so on... It should follow PascalNaming convention.
tuple => It is just like arrays but we can have different types in it and size should be fixed. Best practise is to use tuples as key value pair

## In typescript we can use _ for large numbers: 123_456_789
