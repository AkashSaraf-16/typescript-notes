## Aliases
The problem with decalring the type of each object individually is:
1. DRY violated
2. Object can have inconsistent types too.
3. Readibility
To solve above issues we have aliases
The naming convention followed for aliases is PascalNaming

## Union types
With union types we can give our variables or function parameters more then one
types. A union type is a type formed from two or more other types, representing 
values that may be any one of those types.
So basically one use case is if we make a paramter of function a union type then we 
can pass a range of values to it.

## Intersection types
With intersection types we can make a type that combination of types intersected.
Intersection types are closely related to union types, but they are used very
differently. An intersection type combines multiple types into one. This allows you
to add together existing types to get a single type that has all the features you 
need. 

## Literal types
When we want to limit the values we want to use for a particular variable 


## Optional Chaining
When we are not sure whether obj exists(i.e., it may be null or undefined) then we
use obj?.prop to avoid if else statements. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. We can even use it with arrays to see
whether array is not null and undefined while accessing its elements:
arr?.[0]
Same goes with function calls:
func?.(params)

## Nullish Coalescing
There are scenarios where we need to check whether value is not null/undefined.


## Type assertions
Some time it happens that we know about a type of element better than TS. So we can 
assert its type using 'as' keyword, there is another syntax too we will use <type> before 
the variable. Keep in mind that we arent converting values here
we just inform TC compiler the type and hence if we are wrong it may result in 
errors.
