1. Class
2. Object
3. typeof anyObject === 'object' , therefore we should use instanceof operator in 
these case
4. readonly and optional property
5. Access modifers: public, private, protected these modifiers we can use property 
as well as methods.
6. Parameter properties helps us to write concise code in Classes
7. getters and setters to gets/set properties of the private members. Worth read:
https://stackoverflow.com/questions/57805276/what-are-the-differences-between-readonly-vs-get-in-typescript-properties
8. Index signature properties helps us to add dynamic proprties in objects in 
typescript
9. static members
10. Inheritance
11. Overriding: always use override keyword for overriding to avoid bugs in
polymorphism
12. Polymorphism
13. Private vs Protected: Private members cant be accessed outside of a class 
same goes with protected but protected members are inherited and can be used
in derived classes  
14. Abstract class: A class which needs to extended by another class and then
only we can instatiate the deriving class. Abstract methods can only occur on
abstract classes.
15. Interface: If we are using an abstract class with no method implementation in
it then we can use Interface as it is concise and have better implementation.