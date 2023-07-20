function findSumOfDistinctElements(arr1, arr2) {
    const distinctArr = [...new Set([...arr1, ...arr2])];
    const sumDistinct = distinctArr.reduce((acc, curr) => acc + curr, 0);
    return sumDistinct;
  }
  
  // Test case
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const output = findSumOfDistinctElements(set1, set2);
  console.log(output); // Output: 13 (distinct elements: 4, 7, 2)
  
//   Problem 2: Determining if two vectors are orthogonal using a dot product function
  

  
  function dotProduct(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
    return result;
  }
  
  function areVectorsOrthogonal(vectors) {
    for (const [v1, v2] of vectors) {
      const result = dotProduct(v1, v2);
      if (result === 0) {
        console.log(`Vectors [${v1}] and [${v2}] are orthogonal.`);
      } else {
        console.log(`Vectors [${v1}] and [${v2}] are not orthogonal.`);
      }
    }
  }
  
  // Test case
  const vectors = [
    [[1, 2, 3], [4, -2, 1]],
    [[0, 3], [1, 0]],
  ];
  areVectorsOrthogonal(vectors);
  

  
 