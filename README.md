# Grid

Alignment of elements in grid. Supports following features:

* Sort elements.
* Shuffle elements according to fisher yates.

## Start-up
Open ```index.html``` at root level. All css and js are included in the head tag and should be resolved.

## Test
The only library that I included is jest since I thought it would be out of scope to implement my own test library. However, I did not want to sacrifice QA and opted to include jest for my own sanity testing. Furthermore, I believe that well written tests facilitate other developers understanding of a certain module.

To run the tests(assuming that node and npm are configured), do: 

```sh
npm i
npm test 
```