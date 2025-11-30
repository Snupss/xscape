# Usage

```js
import { $uri } from "xscape";

const param = "@#$@#$@#$#";

const result = $uri`https://tempuri.org?someparam=${param}`;
console.log(result);
// output: https://tempuri.org?someparam=%40%23%24%40%23%24%40%23%24%23

```