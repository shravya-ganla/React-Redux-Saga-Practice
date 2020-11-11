function* sayHiGenerator() {
    yield "world";
    yield 1;
    yield 2;
    return "hi";
  }
  
  const resultGenerator = sayHiGenerator();
  console.log(resultGenerator.next());
  console.log(resultGenerator.next());
  console.log(resultGenerator.next());
  
  const resultGeneratorForOf = sayHiGenerator();
  
  for (const iterator of resultGeneratorForOf) {
    console.log(iterator);
  }
  
  function* newGenerator() {
    yield "Initial Value";
    yield 1;
    yield 2;
    yield 3;
    const final = yield "give new value";
    return final;
  }
  
  const newGeneratorIt = newGenerator();
  
  console.log(newGeneratorIt.next());
  console.log(newGeneratorIt.next());
  console.log(newGeneratorIt.next());
  console.log(newGeneratorIt.next());
  console.log(newGeneratorIt.next());
  console.log(newGeneratorIt.next("custom"));