# Methods

## Number
- toExponencial
    - Notação exponencial
- toFixed
    - Formatação de numeros em casa decimas
- toLocalString
    - Converção para string
- toString
    - Este método converte um número para uma string, permitindo especificar a base numérica (radix) para a representação.
- toPrecision
    - Este método converte um número para uma string, com um comprimento total especificado, incluindo dígitos antes e depois do ponto decimal.
- parseInt
    - Este método converte uma string em um número inteiro, opcionalmente usando uma base numérica específica.
- parseFloat
    - Este método converte uma string em um número de ponto flutuante.
- isNaN
    - Este método verifica se um valor é NaN (não é um número).
- isFinite
    - Este método verifica se um valor é um número finito (não é Infinity ou NaN).

# Methods Array

1. **`push(elemento1, elemento2, ..., elementoN)`**
   - Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.

   ```javascript
   let array = [1, 2, 3];
   array.push(4, 5);
   console.log(array); // Output: [1, 2, 3, 4, 5]
   ```

2. **`pop()`**
   - Remove o último elemento do array e o retorna.

   ```javascript
   let array = [1, 2, 3, 4, 5];
   let removedElement = array.pop();
   console.log(removedElement); // Output: 5
   console.log(array); // Output: [1, 2, 3, 4]
   ```

3. **`shift()`**
   - Remove o primeiro elemento do array e o retorna.

   ```javascript
   let array = [1, 2, 3, 4, 5];
   let removedElement = array.shift();
   console.log(removedElement); // Output: 1
   console.log(array); // Output: [2, 3, 4, 5]
   ```

4. **`unshift(elemento1, elemento2, ..., elementoN)`**
   - Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.

   ```javascript
   let array = [1, 2, 3];
   array.unshift(4, 5);
   console.log(array); // Output: [4, 5, 1, 2, 3]
   ```

5. **`splice(inicio, quantidade, elemento1, elemento2, ..., elementoN)`**
   - Altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos em qualquer posição.

   ```javascript
   let array = [1, 2, 3, 4, 5];
   array.splice(2, 1, 'a', 'b');
   console.log(array); // Output: [1, 2, 'a', 'b', 4, 5]
   ```

6. **`slice(inicio, fim)`**
   - Retorna uma cópia de parte do array, começando do índice `inicio` até o índice `fim` (não incluído).

   ```javascript
   let array = [1, 2, 3, 4, 5];
   let newArray = array.slice(1, 4);
   console.log(newArray); // Output: [2, 3, 4]
   ```

7. **`concat(array2, array3, ..., arrayN)`**
   - Combina dois ou mais arrays, retornando um novo array.

   ```javascript
   let array1 = [1, 2, 3];
   let array2 = [4, 5, 6];
   let newArray = array1.concat(array2);
   console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
   ```


