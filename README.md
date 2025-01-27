# 📦 Boxes
A funny programing language which is about 📦.

> [!WARNING]
> Please **don't** use 📦 to make any serious project.

## Example
Here's an over-engineered example for printing `hi!`:
```
+anArray <- ['h', 'i', '!'] # Create a new box.
+@main <- anArray(0)+anArray(1) > Result+anArray(2) > print(Result) # Combine all the letters.
```

# Contents
* [Structure](#structure)
* [Create 📦](#create)
* [Data Types](#data-types)
* [Functions](#funcitons)
* [Math](#math)

## Structure
To do anything in 📦, you **must** store the ~~hard work~~ aka result into a 📦:
```
<Actions> -> <Target>
<Target> <- <Actions> # You can also do the other way round.
```
* Target is equal to 📦
* Action will eventually become result

You can do as many actions as you can ever possibly wish for, as long as you use `>` to split them:
```
<Target> <- 1 > Result+2 > Result+3
1 > Result+2 > Result+3 > <Target> # It does the same thing, just different direction.
```
Btw the result is 6

## Create 📦
You can create a 📦 by adding a `+` to the start of the target name:
```
+aBox <- 1
```
You can also create a locked box by adding a `@` behind `+`:
```
+@aLockedBox <- 1
```

## Data Types
Like most of the programing languages, 📦 have: `<string>`, `<number>`, `<boolean>`, `<empty>`, `<array>`, and some other unique data types, like: `<actionArray>`, `<input>`. 📦 don't have `<object>`, because **why the hell would you ever need a object when you already have array**? Just kidding, it's just a joke. [or is it?](https://youtu.be/TN25ghkfgQA?si=4LEfLodD4PVCsSpI&t=2)

* string: `'aString'` or `"aString"`
* number: `123` `-123` `123.4`
* boolean: `Yes` or `No`
* empty: `Empty`
* array: `[ 123, Yes, Empty ]`
* actionArray: `{ 1 > Result+2 > Result+3 }`
* input: `(123, Yes, Empty)`

## Functions
People love functions, so to make you love 📦, 📦 also have functions, you can create a `<function>` using `<actionArray>`:
```
+@aFunction = { 1 > Result+2 > Result+3 } # I'll suggest locking this 📦.
```
When you're using a `<actionArray>`, the actions inside of it will not be executed until you call the function. you can call a function by using `<input>`:
```
+@aFunction = { 1 > Result+2 > Result+3 } # I'll suggest locking this 📦.

+@main <- aFunction()
```

## Math
People love doing math, 📦 can also do that!
